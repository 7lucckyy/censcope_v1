import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function OfferCard() {
  return (
    <Link
      href={`/newline/100`}
      className="basis-80 lg:basis-96 group aspect-[3/4] bg-cyan-800 flex flex-none flex-col items-start justify-between p-8 snap-center lg:snap-start relative overflow-hidden"
    >
      <span className="px-4 z-10 py-1 capitalize  bg-white">
        Lorem ipsum dolor sit
      </span>

      <div className="flex flex-col w-full text-white items-start gap-2">
        <h3 className="text-2xl">Lorem, ipsum.</h3>
        <span className="">Lorem, ipsum dolor.</span>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsum quasi omnis magnam similique, nisi eius dignissimos asperiores
          voluptates explicabo.
        </p>
      </div>

      <button className="w-full flex items-center justify-between text-white">
        <span className="font-anton text-xs">20 december 2024</span>
        <FaArrowRight className="text-transparent group-hover:text-white transition-all" />
      </button>
    </Link>
  );
}
