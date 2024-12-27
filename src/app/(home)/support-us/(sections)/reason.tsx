import React from "react";
import Image from "next/image";
import Button from "@/components/primary/button";
import { spiralImg, supportImg } from "@/constants/media";

export default function Reason() {
  const titles = [
    "Donate occasionally",
    "Donate regularly",
    "Life insurance: a gift within everyone's reach",
    "Give with confidence",
  ];
  return (
    <section
      id="reason"
      className="py-20 flex flex-col items-center gap-20 bg-cyan-100/30"
    >
      <header className="w-full flex flex-col items-center justify-center gap-10  px-10% lg:px-25%">
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

      <div className="w-full gap-10 flex flex-wrap items-center justify-center px-10% lg:px-25%">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={supportImg.src}
          className="w-80 basis-80 flex flex-1 flex-col p-10 object-cover aspect-video"
        />

        <div className="basis-80 flex flex-1 flex-col gap-6 items-start">
          {Array.from(titles).map((title) => (
            <React.Fragment key={title}>
              <h4 className="text-cyan-600 font-titillium text-4xl relative">
                {title}
              </h4>

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

      <div className="w-full relative overflow-hidden py-20 px-5% lg:px-20%">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={spiralImg}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        />

        <div className="flex flex-1 flex-col lg:flex-row items-center z-10 relative bg-white lg:items-stretch">
          <div className="w-72 min-h-96 relative">
            <Image
              alt=""
              width={1000}
              height={1000}
              src={supportImg}
              className="w-full h-full top-0 left-0 absolute object-cover bg-gray-50"
            />
          </div>

          <div className="flex flex-1 flex-col p-10 lg:py-20 w-full bg-white min-h-96 gap-2 items-start">
            <h4 className="text-cyan-600 font-cavet text-3xl lg:text-5xl">
              Christelle André
            </h4>
            <span className="text-sm">
              Fundraising Officer © Première Urgence Internationale
            </span>

            <blockquote className="lg:w-5/6 text-justify font-anton my-4 text-xl">
              Your donations guarantee Première Urgence Internationale&#39;s
              freedom of action. Every year, your support enables us to have a
              positive impact on the lives of millions of people in crisis
              zones, including “forgotten” crises that receive little attention
              from the media or institutional donors.
            </blockquote>

            <Button
              withIcon
              withShadow
              title="Our accounts"
              shadowClassName="bg-cyan-600"
              containerClassName="text-cyan-600 hover:text-white border-2 border-current"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
