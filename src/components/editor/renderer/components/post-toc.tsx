"use client";

import { useEffect, MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { useToc } from "@/hooks/use-toc";
import { cn } from "@/lib/utils";

export function PostToc() {
  const router = useRouter();
  const pathname = usePathname();
  const { items, activeId } = useToc({
    containerSelector: "#article-content",
    headingSelector: "h1, h2, h3, h4",
    observerOptions: { rootMargin: "0px 0px -75% 0px", threshold: 1 },
  });

  const scrollToHeading = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    router.push(`${pathname}#${id}`, { scroll: false });
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <details className="group/accordion flex flex-col my6 lg:max-h-[calc(100vh-4rem)] gap-2 lg:sticky lg:top-8 lg:my-0 lg:gap-4 2xl:col-span-3 lg:col-span-2 col-span-full">
      <summary className="bg-light-blur rounded-xl border cursor-pointer list-none !marker:content-none">
        <span className="flex w-full items-center gap-2 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            className="size-5"
          >
            <path
              fill="#181618"
              d="M10.02 20c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.554 0 6.835 1.914 8.632 5 1.797 3.125 1.797 6.914 0 10a9.925 9.925 0 0 1-8.633 5Zm-2.5-6.875V15h5v-1.875h-1.25V8.75H7.52v1.875h1.875v2.5H7.52ZM11.27 7.5V5h-2.5v2.5h2.5Z"
            ></path>
          </svg>
          <span>Table of Content</span>
          <span className="ml-auto group-open/accordion:rotate-180 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="size-5 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </span>
        </span>
      </summary>
      <ul className="flex flex-col justify-start gap-0 h-0group-open/accordion:h-auto transition-[max-height]duration-300delay-100ease-in-out">
        {!items.length ?
          (<div className="text-start py-2 text-dark/50 text-sm lg:text-base italic">
            No items in the table of contents yet.
          </div>
          ) : (
            items.map((item) => (
              <li
                key={item.id}
                className="list-inside my-0 py-0"
                style={
                  {
                    // paddingLeft: `${(item.level - 1) * 1}rem`,
                  }
                }
              >
                <Link
                  href={`#${item.id}`}
                  onClick={scrollToHeading(item.id)}
                  className={cn(
                    "transition-colors py-2 uppercase text-sm border-s-[0.375rem] first-of-type:pt-0 last-of-type:pb-0 ps-4",
                    activeId === item.id
                      ? "!text-dark !border-dark"
                      : "text-dark/30 border-dark/10"
                  )}
                >
                  {item.text}
                </Link>
              </li>
            )))}
      </ul>
    </details>
  );
}
