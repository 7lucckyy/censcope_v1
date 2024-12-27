"use client";
import OfferCard from "./card";
import Button from "@/components/primary/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Offers() {
  return (
    <section id="offers" className="flex flex-col gap-20 py-20">
      <header className="w-full flex flex-col lg:flex-row gap-6 items-end justify-end px-20%">
        <div className="flex flex-1 flex-col gap-6 basis-80">
          <h3 className="text-xl lg:text-4xl">Our most recent job offers</h3>

          <p className="text-lg font-titillium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tenetur fugit omnis rerum, officiis placeat veniam. Fugiat veritatis
            sunt odio nesciunt ipsum!
          </p>

          <p className="text-lg font-titillium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tenetur fugit omnis rerum, officiis placeat veniam. Fugiat veritatis
            sunt doloribus fugit saepe nobis obcaecati, maiores dolor nam quae
            ex culpa odio nesciunt ipsum!
          </p>

          <p className="text-lg font-titillium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tenetur fugit omnis rerum, officiis placeat veniam. Fugiat veritatis
            sunt delectus ab rerum pariatur quidem impedit perspiciatis! Eum
            aliquid odio nesciunt ipsum!
          </p>

          <p className="text-lg font-titillium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tenetur fugit omnis rerum, officiis placeat veniam. Fugiat veritatis
            sunt doloribus fugit saepe nobis obcaecati, maiores dolor nam quae
            ex culpa
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
          <OfferCard key={id} />
        ))}
      </article>

      <Button
        withIcon
        withShadow
        title="Our job offers"
        shadowClassName="duration-300 bg-cyan-600"
        iconClassName="duration-300 text-cyan-600 group-hover:text-white"
        containerClassName="duration-500 border-2 border-black hover:border-transparent hover:text-white self-center"
      />
    </section>
  );
}
