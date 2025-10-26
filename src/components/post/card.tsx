/* eslint-disable @next/next/no-img-element */
"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { format } from "date-fns";
import { ImageIcon } from "lucide-react";
import { SelectPost, SelectTag } from "@/db/schema";
import { cn } from "@/lib/utils";

export interface NewsCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, Pick<
    SelectPost,
    "slug" | "updatedAt" | "coverImage"
  > {
  postTitle: string;
  tags: SelectTag[]
};

/**
 * ForwardRef component for NewsCard
 * Allows passing a ref (e.g., for scroll animations or IntersectionObserver)
 */
export const NewsCard = forwardRef<HTMLAnchorElement, NewsCardProps>(
  ({ postTitle, tags, updatedAt, slug, coverImage, className }, ref) => {
    return (
      <Link
        ref={ref}
        href={`/news/${slug}`}
        className={cn("aspect-[3/4] group gap-2 bg-gray-300 flex flex-none flex-col items-start justify-between p-4 xl:p-6 snap-center lg:snap-start relative overflow-hidden mx-[15px]first:ml-0last:mr-0", className)}
      >
        {coverImage ? (
          <img
            alt=""
            width={1000}
            height={1000}
            src={coverImage}
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50 scale-125 rotate-6 transition-all duration-500 group-hover:scale-100 group-hover:rotate-0"
          />
        ) : (
          <div className="absolute top-0 left-0 flex justify-center items-center h-full w-full">
            <ImageIcon className="size-6 lg:size-10 text-gray-500" />
          </div>
        )}

        <span className="px-4 z-10 py-1 capitalize text-white bg-teal-700">
          news
        </span>

        <div className="z-10 mt-auto flex flex-col gap-2">
          <div className="w-full flex items-center justify-start gap-2 capitalize text-xs flex-wrap">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag.id}
                className="rounded-full px-4 py-2 text-black bg-white"
              >
                {tag.name}
              </span>
            ))}

            {tags.length > 2 && (
              <span className="rounded-full px-4 py-2 text-black bg-white gap-1 flex items-center justify-center relative before:w-1 before:h-1 before:rounded-full before:bg-black">
                +{tags.length - 2}
              </span>
            )}
          </div>

          <h3 className="text-xl lg:text-2xl text-white w-full">
            {postTitle.split(" ").map((word) => (
              <span
                key={word}
                className="group-hover:bg-cyan-600 inline-block px-1"
              >
                {word}
              </span>
            ))}
          </h3>
        </div>

        {/* Footer Button */}
        <button className="w-full flex items-center justify-between overflow-hidden text-white -mt-4 group-hover:mt-0 transition-all">
          <span className="text-xs translate-y-4 group-hover:translate-y-0 transition-all">
            {format(new Date(updatedAt), "LLLL dd, yyyy")}
          </span>
          <FaArrowRight className="text-transparent group-hover:text-white transition-all" />
        </button>
      </Link>
    );
  }
);

// ✅ Give the component a display name (for debugging and React DevTools)
NewsCard.displayName = "NewsCard";
