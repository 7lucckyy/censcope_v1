"use client";
import NewsCard from "./card";
import Button from "@/components/primary/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Newline() {
  return (
    <section id="newline" className="flex flex-col py-10 gap-10">
      <header className="w-full flex flex-col lg:flex-row px-5% lg:px-15%">
        <div className="flex flex-1 flex-col gap-2 items-start">
          <h2 className="text-5xl first-letter:capitalize">our latest news</h2>
          <p className="text-md">
            Find out about our
            <span className="text-lg text-cyan-600"> field actions </span>
            through our reports, news, events,…
          </p>
        </div>

        <div className="flex ml-auto items-center gap-2 text-white">
          <FaArrowLeft className="p-3 cursor-pointer rounded-full bg-black w-10 h-10 active:scale-90 hover:bg-cyan-600 transition-all" />
          <FaArrowRight className="p-3 cursor-pointer rounded-full bg-black w-10 h-10 active:scale-90 hover:bg-cyan-600 transition-all" />
        </div>
      </header>

      <article className="w-full flex items-center justify-start gap-4 overflow-auto snap-x snap-mandatory hide-scrollbar">
        <div className="basis-80 flex-none snap-start hidden lg:flex" />
        {Array.from({ length: 10 }).map((_, id) => (
          <NewsCard key={id} />
        ))}
      </article>

      <Button
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
