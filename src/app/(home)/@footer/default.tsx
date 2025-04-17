import Link from "next/link";

import SubscribeForm from "@/components/forms/subscribe";
import Button from "@/components/primary/button";

export default function Footer() {
  return (
    <footer className="w-full md:sticky md:bottom-0 flex flex-col bg-gray-50">
      <div className="w-full py-20 px-10%">
        <div className="w-full p-10 flex gap-10 items-center flex-col lg:flex-row bg-white">
          <div className="basis-80 relative flex flex-col p-2 items-start justify-center">
            <span
              className={`absolute h-32 w-full bg-cyan-600 before:w-full before:h-full before:absolute before:bg-inherit before:rotate-12 before:-top-28 after:w-full after:h-full after:absolute after:bg-inherit after:-rotate-6 after:top-28`}
            />

            <div className="z-10 flex flex-col gap-8 text-white py-10 px-5% justify-start h-full">
              <h3 className="text-2xl first-letter:capitalize">
                premere urgence Internationale
              </h3>
              <p className="text-md first-letter:capitalize text-lg font-titillium">
                2, rue Auguste Thomas 92600 Asnières-sur-Seine, France +33 (0)1
                55 66 99 66
              </p>

              <Button
                withIcon
                withShadow
                title="See all news"
                shadowClassName="bg-white"
                containerClassName="self-start border-2 border-current hover:border-transparent text-white hover:text-black"
              />

              {/* <button className="mr-auto outline-none border-2 hover:border-[0] relative border-white hover:bg-spiral bg-cover hover:border-transparent px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-white before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10">
                <span className="z-50 gap-2 flex items-center group-hover:text-black transition-all">
                  see all news{" "}
                  <FaArrowRight className=" text-white group-hover:text-black transition-all" />
                </span>
              </button> */}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 items-start">
            <p className="">
              Première Urgence Internationale helps civilian victims,
              marginalized or excluded by the effects of conflict, climate
              related disasters and situations of economic collapse.
            </p>
            <p className="">
              Each year, Première Urgence Internationale allocates most of its
              resources to the programs it deploys in its various areas of
              intervention and only 0.2% to fundraising. Your donations are
              essential.
            </p>

            <p className="text-sm">
              Your email address is only used to send you Première Urgence
              Internationale newsletters. You can use the unsubscribe link
              integrated in the newsletter at any time.
            </p>
          </div>

          <SubscribeForm />
        </div>
      </div>

      <div className="w-full flex gap-6 flex-col md:flex-row py-10 px-5% bg-white justify-evenly">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <h3 className=" text-xl">Get informed</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="flex flex-col relative">
              Contact us
            </Link>
            <Link href="#" className="flex flex-col relative">
              Press area
            </Link>
          </nav>
        </div>

        <div className="h-full w-0.5 bg-black/20 flex-none hidden md:flex" />

        <div className="flex flex-col gap-6 items-center md:items-start">
          <h3 className=" text-xl">Get involved</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="flex flex-col relative">
              Support our action
            </Link>
            <Link href="#" className="flex flex-col relative">
              Our job offers
            </Link>
          </nav>
        </div>
      </div>

      <nav className="w-full flex items-center capitalize text-white p-6 md:px-10% font-titillium justify-around bg-cyan-600">
        <Link
          href="#"
          className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full"
        >
          sitemap
        </Link>
        <Link
          href="#"
          className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full"
        >
          legal notices
        </Link>
        <Link
          href="#"
          className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full"
        >
          cookie policy
        </Link>
        <Link
          href="#"
          className="flex flex-col relative after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full"
        >
          contact us
        </Link>
      </nav>
    </footer>
  );
}
