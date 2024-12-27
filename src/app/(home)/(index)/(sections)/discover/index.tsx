"use client";
import DiscoverCard from "./card";
import { discovers } from "@/constants/data";
import { FaArrowRight } from "react-icons/fa";
import { spiralImg } from "@/constants/media";
import useObserver from "@/hooks/observer.hook";
import Image from "next/image";

export default function Discover() {
  const { ref, entryData } = useObserver();

  return (
    <section
      ref={ref}
      id="discover"
      className="py-24 flex flex-none gap-20 flex-col items-center"
    >
      <Image alt="" width={1000} height={1000} src={spiralImg} className="top-0 left-0 w-full h-full absolute object-cover opacity-10" />
      <header className="w-full flex flex-col items-center md:items-start relative z-10 px-10%">
        <h2 className="text-2xl md:text-4xl capitalize">
          Discover Première Urgence Internationale
        </h2>
        <p className="text-md md:text-xl">
          Première Urgence Internationale is a non-profit, apolitical and
          secular international NGO.
        </p>
      </header>

      <div className="w-full lg:w-5/6 md:ml-auto bg-white flex flex-wrap relative z-10">
        <div className="p-20 py-40 gap-8 items-start justify-center flex flex-1 flex-col basis-80 md:basis-96">
          <p className="text-md md:text-xl font-titillium">
            Première Urgence Internationale helps civilian victims marginalized
            or excluded by the effects of war, climate shocks, and economic
            collapse.
          </p>

          <button className="outline-none border-2 relative border-black hover:border-cyan-600 px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-cyan-600 before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10">
            <span className="z-50 gap-2 flex items-center  group-hover:text-white">
              learn more{" "}
              <FaArrowRight className=" text-cyan-600 group-hover:text-white transition-all" />
            </span>
          </button>
        </div>

        <div className="flex flex-wrap gap-16 items-end justify-center md:justify-start flex-[3] basis-80 md:basis-96 bg-white md:bg-discover p-10 md:px-20 md:pt-40 bg-center bg-cover bg-no-repeat">
          <div className="w-full flex md:hidden aspect-video bg-discover bg-center bg-cover bg-no-repeat p-10" />
          {discovers.map((item, index) => (
            <DiscoverCard
              key={item.title}
              index={index}
              discover={item}
              visible={!!entryData?.isIntersecting}
              delay={400 * (index + 1)}
            />
          ))}
        </div>
      </div>

      <div className="p-10 flex flex-1 w-10/12 md:w-4/5 xl:w-3/5 flex-col items-center relative z-10 bg-white">
        <p className="italic text-3xl first-letter:capitalize font-cavet">
          join us{" "}
        </p>
        <h3 className="text-cyan-600 text-xl md:text-3xl  mb-4">
          in the field and at headquarters
        </h3>

        <button className="outline-none border-2 relative border-black hover:border-cyan-600 px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-cyan-600 before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10">
          <span className="z-50 gap-2 flex items-center  group-hover:text-white">
            view job offers{" "}
            <FaArrowRight className=" text-cyan-600 group-hover:text-white transition-all" />
          </span>
        </button>
      </div>
    </section>
  );
}
