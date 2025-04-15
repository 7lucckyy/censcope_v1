import { Search } from "lucide-react";

import { BlogPost } from "./post";
import { db } from "@/db";
import { BlogFilters } from "./post-filters";
import { CreatePostButton } from "@/components/create-post-button";
import { tags as tagsTable, users } from "@/db/schema";

async function PostsPage() {
  const postsWithProperTags = await db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.updatedAt)],
    with: {
      author: {
        columns: { name: true },
      },
      tags: {
        columns: {}, // Don't need columns from postsToTags itself
        with: {
          tag: {
            // Target the relation in postsToTags schema
            columns: {
              // Select desired columns from the tags table
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  const authors = await db
    .select({ id: users.id, name: users.name, email: users.email })
    .from(users);
  const tags = await db.select().from(tagsTable);

  // Map the result to clean up the structure (optional but common)
  const finalPosts = postsWithProperTags.map((post) => ({
    ...post,
    tags: post.tags.map((p2t) => p2t.tag), // Extracts the actual tag objects into a simple array
  }));

  return (
    <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center pt-14.25 [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
      <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block"></div>

      <div className="text-gray-950 dark:text-white">
        <div className="relative mx-auto mt-24 max-lg:max-w-2xl">
          <div className="relative flex justify-between items-start before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <h1 className="mx-2 text-6xl tracking-tighter text-balance sm:text-7xl lg:text-8xl">
              Blog Posts
            </h1>

            <CreatePostButton />
          </div>
          <div className="mt-10 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <p className="mx-2 text-lg">
              All the latest Tailwind CSS news, straight from the team.
            </p>
          </div>
          <div className="mt-10 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">
            <div className="mx-2 flex gap-10">
              <form className="flex flex-nowrap gap-4">
                <div className="max-w-[368px] flex-1">
                  <div className="group relative">
                    <div className="pointer-events-none absolute left-4 flex h-full items-center">
                      <Search className="size-4 text-gray-950/50 group-focus-within:text-gray-950 dark:text-white/50 dark:group-focus-within:text-white" />
                    </div>
                    <input
                      autoComplete="blog_title"
                      aria-label="Blog Post Title"
                      className="block w-full appearance-none rounded-3xl bg-white py-2 pr-3 pl-10 text-sm/6 text-gray-950 outline -outline-offset-1 outline-gray-950/8 placeholder:text-sm/6 placeholder:text-gray-950/50 focus:outline-gray-950 dark:bg-white/10 dark:text-white/50 dark:outline-white/15 dark:placeholder:text-white/50 dark:focus:outline-white"
                      placeholder="Search for blog post title..."
                      type="text"
                      name="blog_title"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-3xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <BlogFilters tags={tags} authors={authors} />
            </div>
          </div>
          <div className="mt-12 mb-46 grid grid-cols-1 lg:grid-cols-[24rem_2.5rem_minmax(0,1fr)]">
            {finalPosts.map((post) => (
              <BlogPost
                key={post.id}
                {...post}
                author={post.author}
                published={post.published}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:col-start-3 lg:block"></div>
    </div>
  );
}

export default PostsPage;
