import { supportImg } from "@/constants/media";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Commit() {
  return (
    <section
      id="commit"
      className="py-20 px-10% lg:px-15% flex flex-col items-center gap-20 bg-cyan-100/30"
    >
      <header className="w-full flex flex-col items-center justify-center gap-10 px-20%">
        <h3 className="text-xl lg:text-4xl">Our commitments</h3>

        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          provident hic cumque dolorum vitae fugiat consequuntur delectus
          deleniti odit, distinctio magni, doloremque aliquid numquam architecto
          natus error incidunt! Illo, consequuntur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. In, saepe cumque necessitatibus quas
          maxime quibusdam voluptates. Accusantium facere reprehenderit ex.
        </p>
      </header>

      <div className="w-full gap-10 flex flex-wrap items-center justify-center">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={supportImg.src}
          className="w-80 basis-80 flex flex-1 flex-col p-10 object-cover aspect-video"
        />

        <div className="basis-80 flex flex-1 flex-col gap-6 items-start">
          <h4 className="text-cyan-600 font-titillium text-4xl relative">
            our values
          </h4>

          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            omnis laboriosam blanditiis error molestias exercitationem pariatur
            rem animi delectus commodi.
          </p>

          {Array.from({ length: 5 }).map((_, key) => (
            <React.Fragment key={key}>
              <h5 className="flex items-center gap-2">
                <FaArrowRight className="text-cyan-600" />
                Lorem ipsum dolor sit.
              </h5>

              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                non pariatur necessitatibus natus consectetur consequuntur.
                Inventore, beatae repellat! Cum itaque voluptatibus error sed
                accusantium vitae cupiditate accusamus dolor nisi dicta!
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
