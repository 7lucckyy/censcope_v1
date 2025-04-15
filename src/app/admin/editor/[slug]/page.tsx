import { cache } from "react";
import type { Metadata } from "next";
import { eq } from "drizzle-orm";

import { TooltipProvider } from "@/components/ui/tooltip";
import TiptapEditor from "@/components/editor";
import { db } from "@/db";
import { posts, tags as tagsTable, postsToTags } from "@/db/schema";

export const metadata: Metadata = {
  title: "Censope Blog Post Editor",
};

const getData = cache(async (slug: string) => {
  const result = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      content: posts.content,
      tags: postsToTags.tagId,
    })
    .from(posts)
    .leftJoin(postsToTags, eq(posts.id, postsToTags.postId))
    .where(eq(posts.id, slug));

  const tags = await db.select().from(tagsTable);

  console.log({ post: result.at(0), tags });
  return { post: result.at(0), tags };
});

async function PostsPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const { post, tags } = await getData(slug);

  if (!post) {
    return <div>Blog Post not found</div>;
  }

  return (
    <TooltipProvider>
      <TiptapEditor {...post} tags={tags} />
    </TooltipProvider>
  );
}

export default PostsPage;
