import Image from "next/image";
import { supportImg } from "@/constants/media";
import { FaArrowRight } from "react-icons/fa";

export default function Organisation() {
  return (
    <section id="organisation" className="py-20 px-5% lg:px-20% flex flex-col gap-10">
      <header className="w-full flex flex-col items-start gap-6">
        <h3 className="text-xl lg:text-4xl">Our organisation</h3>
      </header>

      <div className="w-full grid gap-10 grid-cols-fit-20">
        <div className="flex flex-col">
          <Image
            alt=""
            width={1000}
            height={1000}
            src={supportImg}
            className="w-full aspect-auto object-cover"
          />

          <div className="w-full p-10 flex flex-col items-start gap-4 text-white bg-cyan-700">
            <h4 className="text-lg lg:text-3xl">Lorem, ipsum dolor</h4>

            <button className="flex items-center gap-2 bg-black relative group border border-transparent hover:border-red-600 transition-all">
              <span className="absolute top-0 left-0 w-0 h-full duration-300 bg-red-600 transition-all group-hover:w-full group-hover:bg-white" />
              <span className="flex items-center  px-6 py-3 font-bold gap-2 z-10 group-hover:text-black transition-all">
                Lorem
                <FaArrowRight className="transition-all" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            alt=""
            width={1000}
            height={1000}
            src={supportImg}
            className="w-full aspect-auto object-cover"
          />

          <div className="w-full p-10 flex flex-col items-start gap-4 text-white bg-cyan-700">
            <h4 className="text-lg lg:text-3xl">Lorem, ipsum dolor</h4>

            <button className="flex items-center gap-2 bg-black relative group border border-transparent hover:border-red-600 transition-all">
              <span className="absolute top-0 left-0 w-0 h-full duration-300 bg-red-600 transition-all group-hover:w-full group-hover:bg-white" />
              <span className="flex items-center  px-6 py-3 font-bold gap-2 z-10 group-hover:text-black transition-all">
                Lorem, ipsum dolor
                <FaArrowRight className="transition-all" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
