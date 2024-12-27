"use client";
import Image from "next/image";
import SupportCard from "./card";
import { supports } from "@/constants/data";
import { supportImg } from "@/constants/media";
import useObserver from "@/hooks/observer.hook";

export default function Support() {
  const { ref, entryData } = useObserver();

  return (
    <section
      ref={ref}
      id="support"
      className="w-full min-h-screen flex flex-col relative"
    >
      <Image
        alt=""
        width={1000}
        height={1000}
        src={supportImg}
        className={`top-0 left-0 w-full h-full absolute object-cover duration-500 transition-all ${
          entryData?.isIntersecting
            ? "scale-100 opacity-100"
            : "scale-125 opacity-0"
        }`}
      />

      <div className="w-full h-full z-10 flex flex-col gap-20 items-center lg:items-start justify-between p-10% pb-5% lg:px-15%">
        <header
          className={`flex flex-col gap-6 ${
            entryData?.isIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-2xl md:text-5xl first-letter:capitalize">
            support us
          </h2>
          <p className="text-md md:text-xl md:w-80 font-bold">
            It is thanks to your commitment that we can carry out our
            humanitarian missions.
          </p>
        </header>

        <div className="w-full flex flex-wrap items-center justify-evenly gap-10">
          {supports.map((card, index) => (
            <SupportCard
              key={index}
              index={index}
              support={card}
              delay={400 * (index + 1)}
              visible={!!entryData?.isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
