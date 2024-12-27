import Image from "next/image";
import { aboutUsImg, spiralImg } from "@/constants/media";

export default function Identity() {
  return (
    <section id="identity" className="flex flex-col py-20 gap-20">
      <header className="w-full flex flex-col items-start gap-6 px-20%">
        <h3 className="text-xl lg:text-4xl">Who we are?</h3>

        <p className="text-lg font-titillium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
          fugit omnis rerum, officiis placeat veniam. Fugiat veritatis sunt
          doloribus fugit saepe nobis obcaecati, maiores dolor nam quae ex culpa
          facilis, adipisci molestiae in rem reprehenderit, eveniet laboriosam
          delectus ab rerum pariatur quidem impedit perspiciatis! Eum aliquid
          odio nesciunt ipsum!
        </p>
      </header>

      <div className="w-full py-10 px-10% lg:px-25% flex relative items-center justify-center">
        <Image
          alt=""
          width={1000}
          height={1000}
          src={spiralImg.src}
          className="top-0 left-0 absolute w-full h-full object-cover opacity-10"
        />

        <Image
          alt=""
          width={1000}
          height={1000}
          src={aboutUsImg.src}
          className="w-full object-contain z-10"
        />
      </div>
    </section>
  );
}
