import Image from "next/image";

import WhoWeAreImage from "@/assets/images/who-we-are.jpg";

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10 padding-horizontal padding-vertical !pb-0"
    >
      <div className="w-full flex flex-col items-start gap-6">
        <h2 className="">Who we are?</h2>

        <p className="lg:text-lg ">
          CENSCOPE is a nationally registered non-governmental organization
          (NGO) recognized by the Corporate Affairs Commission (CAC) and
          actively operating in the regions of Borno, Adamawa, and Yobe states.
          Established in 2018, CENSCOPE was created with the mission to provide
          comprehensive support to individuals and communities who have been
          adversely affected by violent conflicts and natural disasters. Our
          programming is designed to address the urgent needs of victims by
          offering a wide range of interventions aimed at rebuilding lives and
          restoring community stability.
        </p>
      </div>

      <div className="w-full">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={WhoWeAreImage}
          className="w-full object-contain z-10"
        />
      </div>
    </section>
  );
}
