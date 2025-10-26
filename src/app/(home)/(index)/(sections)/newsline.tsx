"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

import { NewsCard } from "@/components/post/card";
import Button from "@/components/primary/button";
import { usePrevNextButtons } from "@/hooks/use-embla-buttons";

export default function Newline({ posts }: { posts: CombinedPostArray }) {
    const router = useRouter();
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
    return (
        <section id="newline" className="flex flex-col py-10 gap-6 lg:gap-8 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col lg:flex-row">
                <div className="flex flex-1 flex-col gap-2 items-start">
                    <h2 className="capitalize">
                        our latest news
                    </h2>
                    <p className="md:text-lg">
                        Find out about our
                        <span className="text-lg text-cyan-600"> field actions </span>
                        through our reports, news, events,…
                    </p>
                </div>

                <div className="flex ml-auto items-center gap-2 text-white">
                    <button
                        type="button"
                        className="p-3 cursor-pointer rounded-full bg-black w-10 h-10 active:scale-90 hover:bg-cyan-600 transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    >
                        <FaArrowLeft className="" />
                    </button>
                    <button
                        type="button"
                        className="p-3 cursor-pointer rounded-full bg-black w-10 h-10 active:scale-90 hover:bg-cyan-600 transition-all disabled:bg-gray-500 disabled:cursor-not-allowed"
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    >
                        <FaArrowRight className="" />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden" ref={emblaRef}>
                <article className="w-full flex justify-start gap-x-4 gap-y-6 snap-x snap-mandatory hide-scrollbar">
                    {posts.map((post, id) => (
                        <NewsCard
                            key={id}
                            coverImage={post.coverImage}
                            slug={post.slug}
                            postTitle={post.title}
                            updatedAt={post.updatedAt}
                            tags={post.tags}
                            className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_320px]"
                        />
                    ))}
                </article>
            </div>

            <Button
                onClick={() => router.push("/news")}
                withIcon
                withShadow
                title="See all news"
                shadowClassName="duration-300 bg-cyan-600"
                iconClassName="duration-300 text-cyan-600 group-hover:text-white"
                containerClassName="duration-500 border-2 border-black hover:border-transparent hover:text-white self-center"
            />
        </section>
    );
}
