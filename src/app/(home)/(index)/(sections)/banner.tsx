"use client";
import React from "react";
import Image from "next/image";
import * as media from "@/constants/media";
import useObserver from "@/hooks/observer.hook";
import useMousePosition from "@/hooks/mouse.hook";

export default function Banner() {
  const pos = useMousePosition();
  const { ref, entryData } = useObserver();

  const x = React.useMemo(() => pos.x - window.innerWidth / 2, [pos.x]);
  const y = React.useMemo(() => pos.y - window.innerHeight / 2, [pos.y]);

  const transforms = React.useMemo(() => {
    return {
      text: `translateX(${-x / 10}px) translateY(${-y / 10}px)`,
      back: `translateX(${-x / 30}px) translateY(${-y / 30}px) scale(1.1)`,
      front: `translateX(${-x / 15}px) translateY(${-y / 15}px) scale(1.1)`,
      spiral: `translateX(${-x / 45}px) translateY(${-y / 45}px) scale(1.1)`,
    };
  }, [x, y]);

  return (
    <section
      ref={ref}
      id="banner"
      className={`flex relative items-center justify-center h-screen md:h-[80vh] overflow-hidden bg-black ${
        entryData?.isIntersecting ? "bg-opacity-100" : "bg-opacity-0"
      }`}
    >
      <Image
        alt=""
        width={2000}
        height={2000}
        src={media.homeSliderBackImg}
        style={{ transform: transforms.back }}
        className="w-full h-full absolute bg-contain -hue-rotate-[120deg]"
      />
      <Image
        alt=""
        width={2000}
        height={2000}
        src={media.homeSliderFrontImg}
        style={{ transform: transforms.front }}
        className="w-full h-full absolute bg-contain -hue-rotate-[120deg]"
      />
      <Image
        alt=""
        width={2000}
        height={2000}
        src={media.spiralImg}
        style={{ transform: transforms.spiral }}
        className="w-full h-full absolute object-cover object-center opacity-60 mix-blend-overlay"
      />

      <div
        style={{ transform: transforms.text }}
        className="absolute text-2xl md:text-7xl z-20 flex flex-col items-center gap-2 uppercase top-60 md:top-36 md:left-28"
      >
        <h2 className="text-white ">helping communities</h2>
        <h2 className="bg-white p-2 text-cyan-600">
          out of the red zone
        </h2>
      </div>
    </section>
  );
}
