"use client";

import Button from "@/components/primary/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function JobHunt() {
  return (
    <section
      id="job-hunt"
      className="flex flex-col gap-2 py-10 items-center px-5% lg:px-20%"
    >
      <h2 className="text-cyan-600 font-anton text-xl lg:text-3xl">Our jobs</h2>
      <p className="text-sm lg:text-base text-center my-10">
        To bring our projects to fruition, we recruit talent from a wide range
        of professional channels, whether technical or support, at head office
        or in the field.
      </p>

      <div className="w-full grid gap-8 grid-cols-fit-16">
        {Array.from({ length: 11 }).map((_, key) => (
          <Button
            key={key}
            withIcon
            title="job hunt title"
            titleClassName="px-6 py-4 justify-between"
            containerClassName="border border-current hover:text-cyan-600 whitespace-nowrap"
          />
        ))}
      </div>
    </section>
  );
}
