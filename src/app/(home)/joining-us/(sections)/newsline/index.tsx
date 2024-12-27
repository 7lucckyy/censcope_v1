"use client";
import NewsCard from "./card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Newsline() {
  return (
    <section id="newsline" className="flex flex-col py-10 gap-10">
      <header className="w-full flex flex-col lg:flex-row px-5% lg:px-15%">
        <h2 className="text-base lg:text-3xl first-letter:capitalize">news</h2>

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
    </section>
  );
}
