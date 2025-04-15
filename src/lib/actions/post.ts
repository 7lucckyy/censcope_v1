"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { createClient } from "../supabase/server";
import { posts, postsToTags } from "@/db/schema";
import { eq, like, sql } from "drizzle-orm";
import { slugify } from "../utils";

export async function createPost() {
  try {
    // 1. Count existing "Untitled Post #" posts
    const untitledPostCountResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(posts)
      .where(like(posts.title, "Untitled Post %"));

    const untitledPostCount = untitledPostCountResult[0]?.count ?? 0;
    console.log(
      untitledPostCountResult,
      untitledPostCount,
      typeof untitledPostCount
    );
    // 2. Generate the new title
    const title = `Untitled Post #${+untitledPostCount + 1}`;

    // 3. Generate the slug
    const slug = slugify(title);

    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return { message: "Supabase getUser error." };
    }

    // Check for existing slugs and append a number if necessary
    // let slugExists = true;
    // let slugSuffix = 0;
    // while (slugExists) {
    //   const existingSlugCountResult = await db
    //     .select({ count: sql<number>`count(*)` })
    //     .from(posts)
    //     .where(eq(posts.slug, slug));
    //   const existingSlugCount = existingSlugCountResult[0]?.count ?? 0;
    //   if (existingSlugCount === 0) {
    //     slugExists = false;
    //   } else {
    //     slugSuffix++;
    //     slug = slugify(`${title}-${slugSuffix}`);
    //   }
    // }
    // 4. Create the new post in the database
    const newPost = await db
      .insert(posts)
      .values({
        title,
        authorId: user.id,
        slug,
      })
      .returning();

    // 4. Return the newly created post
    return newPost[0];
  } catch (error) {
    console.error("Error creating post:", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Failed to create post");
  }
}

export async function updatePost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const postId = formData.get("postId") as string;

    const tagsFormDataValue = formData.getAll("tags");

    // Convert FormDataEntryValue[] to string[] (important type check)
    const tagIds: string[] = tagsFormDataValue
      .map((tag) => (typeof tag === "string" ? tag : "")) // Handle potential File entries if needed, though unlikely for hidden inputs
      .filter((tag) => tag !== "");

    if (!title || !content) {
      return { message: "Title, content and postId are required." };
    }
    const supabase = await createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return { message: "Supabase getUser error." };
    }

    const result = await db.transaction(async (tx) => {
      let currentPostId = postId; // Use existing ID for updates
      let currentPostSlug: string;

      // 1. Create or Update the Post
      if (currentPostId) {
        const post = await tx
          .update(posts)
          .set({
            title,
            content,
            slug: slugify(title),
          })
          .where(eq(posts.id, currentPostId))
          .returning({ slug: posts.slug });

        currentPostSlug = post[0].slug;
      } else {
        const newPostResult = await tx
          .insert(posts)
          .values({
            title,
            content,
            slug: slugify(title),
            authorId: user.id,
          })
          .returning({ newId: posts.id, slug: posts.slug });

        currentPostId = newPostResult[0].newId;
        currentPostSlug = newPostResult[0].slug;
      }

      if (!currentPostId) {
        throw new Error("Failed to create or find post ID.");
      }

      // 3. Manage Associations in postsToTags (Sync links)
      //    a. Delete existing associations for this post
      await tx.delete(postsToTags).where(eq(postsToTags.postId, currentPostId));

      //    b. Insert new associations if there are tags to link
      if (tagIds.length > 0) {
        const newPostsToTags = tagIds.map((tagId) => ({
          postId: currentPostId!, // We ensured currentPostId is set
          tagId: tagId,
        }));

        await tx.insert(postsToTags).values(newPostsToTags);
      }

      // Transaction successful, return the post ID
      return { postId: currentPostId, slug: currentPostSlug };
    });

    if (result.postId) {
      revalidatePath(`/admin/editor/${result.postId}`);
      revalidatePath(`/blog/${result.slug}`); // Revalidate public post page
    }

    return {
      success: true,
      postId: result.postId,
      message: "Post updated successfully!",
    };
  } catch (error) {
    console.error({ error });
    console.error("Error creating post:", error);
    return { message: "Failed to create post. Please try again." };
  }
}

export async function publishPost(postId: string) {
  try {
    await db
      .update(posts)
      .set({
        published: true,
      })
      .where(eq(posts.id, postId))
      .returning({ slug: posts.slug });
    return { success: true };
  } catch (error) {
    console.error("Failed to publish post:", error);
    return { success: false, error: "Failed to publish post." };
  }
}
export async function deletePost(postId: string) {
  try {
    await db.delete(posts).where(eq(posts.id, postId));
    return { success: true };
  } catch (error) {
    console.error("Failed to delete post:", error);
    return { success: false, error: "Failed to delete post." };
  }
}
