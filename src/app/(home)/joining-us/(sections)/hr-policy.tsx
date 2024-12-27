"use client";
import Image from "next/image";
import { spiralImg } from "@/constants/media";
import Button from "@/components/primary/button";

export default function HrPolicy() {
  const lists = [
    { content: "Fairness and non-discrimination" },
    { content: "Transparency" },
    { content: "Objectivity" },
    { content: "Adaptability" },
    { content: "Privacy" },
  ];

  return (
    <section
      id="hr-policy"
      className="w-full min-h-80 bg-gray-100 bg-spiral bg-center py-20 px-5% lg:px-25%"
    >
      <Image
        alt=""
        width={1000}
        height={1000}
        src={spiralImg}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
      />

      <div className="flex flex-1 p-10 z-10 flex-col relative bg-white items-center justify-center">
        <span className="font-cavet text-2xl lg:text-4xl font-semibold">
          Join Us
        </span>
        <h3 className="text-cyan-600 font-anton text-xl lg:text-3xl">
          Our HR Policy
        </h3>

        <p className="text-sm lg:text-base text-center my-10">
          Première Urgence Internationale offers numerous benefits to its
          employees and has built its HR policy on 5 pillars:
        </p>

        <div className="flex flex-col gap-4 lg:w-2/5">
          {lists.map((item, index) => (
            <p key={item.content} className="text-sm flex items-start gap-2">
              <b className="font-anton whitespace-nowrap">{index + 1} /</b>{" "}
              {item.content}
            </p>
          ))}
        </div>

        <Button
          withIcon
          withShadow
          title="See our HR Policy"
          shadowClassName="duration-300 bg-cyan-600"
          iconClassName="duration-300 text-cyan-600 group-hover:text-white"
          containerClassName="duration-500 mt-8 border-2 border-black hover:border-transparent hover:text-white self-center"
        />
      </div>
    </section>
  );
}
