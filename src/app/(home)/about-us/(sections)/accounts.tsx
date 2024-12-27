import Image from "next/image";
import { spiralImg } from "@/constants/media";
import { FaArrowRight } from "react-icons/fa";

export default function Account() {
  const infos = [
    {
      label: "5 million",
      className: "bg-red-600",
      description: "people supported worldwide",
    },
    {
      label: "43",
      className: "bg-teal-600",
      description: "institutioal and private partners",
    },
    {
      label: "122.2",
      className: "bg-slate-600",
      description: "million euros annual budget",
    },
    {
      label: "93%",
      className: "bg-gray-200 text-black",
      description: "of resources in the field",
    },
  ];

  return (
    <section id="account" className="py-20 px-5% lg:px-15% relative">
      <Image
        alt=""
        width={1000}
        height={1000}
        src={spiralImg}
        className="w-full h-80  top-0 left-0 absolute object-cover object-top z-0 opacity-10"
      />

      <div className="w-full z-10 relative flex-1 p-10 lg:p-16 bg-white flex flex-wrap gap-10">
        <div className="flex flex-1 flex-col basis-40 items-start justify-evenly gap-6">
          <h3 className="text-lg lg:text-2xl">Acting transparency</h3>

          <p className="text-justify lg:text-left">
            <b>Lorem ipsum dolor, sit amet</b> consectetur adipisicing elit.
            Recusandae magni harum, vero dolorum, beatae voluptate nisi culpa
            maxime fugit id tenetur temporibus reprehenderit error saepe! Nemo
            officia blanditiis totam dolor.
          </p>

          <p className="text-justify lg:text-left">
            <b>Placeat in ad maxime accusantium magnam vero</b> dignissimos
            officiis quo odio voluptas impedit amet consectetur atque totam quae
            necessitatibus, non laboriosam odit nulla magni ipsa corporis beatae
            reprehenderit veniam! Dolores?
          </p>

          <p className="text-justify lg:text-left">
            Dolor, dolore voluptates. Laudantium saepe, dicta tenetur ipsum
            blanditiis qui quasi eius nobis ad veritatis, deleniti
            necessitatibus aut eveniet quo aliquam dolores repellendus dolor?
            Obcaecati placeat reiciendis incidunt unde expedita.
          </p>

          <button className="hidden lg:flex items-center gap-2 relative group border border-black hover:border-red-600 transition-all">
            <span className="absolute top-0 left-0 w-0 h-full duration-300 bg-red-600 transition-all group-hover:w-full" />
            <span className="flex items-center  px-6 py-3 font-bold gap-2 z-10 group-hover:text-white transition-all">
              Lorem, ipsum dolor
              <FaArrowRight className="transition-all" />
            </span>
          </button>
        </div>

        <div className="flex-1 basis-40 grid grid-cols-fill-12 gap-10">
          {infos.map((item) => (
            <div
              key={item.label}
              className={`p-4 py-20 flex text-white relative items-center justify-center ${item.className}`}
            >
              <span className="w-72 h-20 bg-inherit absolute brightness-95 rotate-6 before:absolute before:w-4/5 before:h-full before:bg-inherit before:-rotate-12 after:absolute after:w-2/3 after:h-full after:bg-inherit after:-rotate-45 after:translate-y-20" />

              <div className="relative flex flex-col items-center justify-center text-center z-10 gap-3">
                <h4 className="text-2xl lg:text-5xl">{item.label}</h4>
                <span className="text-center w-4/5 leading-4">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-none w-full flex items-center justify-center lg:hidden">
          <button className="flex items-center gap-2 relative group border border-black hover:border-red-600 transition-all">
            <span className="absolute top-0 left-0 w-0 h-full duration-300 bg-red-600 transition-all group-hover:w-full" />
            <span className="flex items-center  px-6 py-3 font-bold gap-2 z-10 group-hover:text-white transition-all">
              Lorem, ipsum dolor
              <FaArrowRight className="transition-all" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
