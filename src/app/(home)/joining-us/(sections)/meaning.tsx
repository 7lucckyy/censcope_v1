import Button from "@/components/primary/button";
import { spiralImg, supportImg } from "@/constants/media";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Meaning() {
  return (
    <section id="meaning" className="py-10 flex flex-col items-start gap-6">
      <header className="w-full flex flex-col gap-6 px-5% lg:px-25%">
        <h3 className="text-lg lg:text-3xl">
          Working at Première Urgence Internationale means…
        </h3>

        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, key) => (
            <p key={key} className="flex gap-2 items-start">
              <FaArrowRight size={22} className="mt-1 text-cyan-600" />
              <span className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo laborum culpa at perferendis, excepturi dicta
                distinctio nemo nostrum maiores quasi sapiente delectus
                voluptate nam placeat necessitatibus quia. Amet, autem porro.
              </span>
            </p>
          ))}
        </div>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tenetur
          fugit omnis rerum, officiis placeat veniam. Fugiat veritatis sunt
          doloribus fugit saepe nobis obcaecati, maiores dolor nam quae ex culpa
          facilis, adipisci molestiae in rem reprehenderit, eveniet laboriosam
          delectus ab rerum pariatur quidem impedit perspiciatis! Eum aliquid
          odio nesciunt ipsum!
        </p>
      </header>

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
              Director of Human Resources © Première Urgence Internationale
            </span>

            <blockquote className="lg:w-5/6 text-justify font-anton my-4 text-xl">
              Taking people into account and enjoying working together are
              essential to the success of our missions.
            </blockquote>

            <Button
              withIcon
              withShadow
              title="About us"
              shadowClassName="bg-cyan-600"
              containerClassName="text-cyan-600 hover:text-white border-2 border-current"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
