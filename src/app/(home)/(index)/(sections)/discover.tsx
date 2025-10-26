import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

import { discovers } from "@/constants/data";
import spiralImg from "@/assets/images/spiral-pattern.jpg";

export function Discover() {
    return (
        <section
            id="discover"
            className="relative py-12 lg:py-16 flex flex-none gap-8 lg:gap-12 flex-col items-center ma-xw-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <Image
                alt=""
                width={1000}
                height={1000}
                src={spiralImg}
                className="top-0 left-0 w-full h-full absolute object-cover opacity-10"
            />
            <div className="w-full flex flex-col items-center md:items-start gap-4 relative z-10">
                <h2 className="text-2xl md:text-4xl capitalize">
                    Learn more about our{" "}
                    <span className="text-red-700 uppercase font-anton">
                        Explosive Ordinance Risk Education (EORE)
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-700 capitalize">
                        Protecting children from violence in context of insecurity and
                        promoting social-economic resilience in Borno State - North-east
                        Nigeria
                    </span>{" "}
                </h2>
                <p className="text-md md:text-xl">
                    CENSCOPE is a non-profit, apolitical and secular international NGO.
                </p>
            </div>

            <div className="bg-white flex flex-col md:flex-row gap-y-8 relative z-10 py-10 md:py-12 px-6 lg:px-10 w-full">
                <div className="min-w[480px] basis-1/3 shrink-0">
                    <p className="text-md md:text-xl">
                        The Centre for Social Cohesion, Peace and Empowerment (CENSCOPE)
                        helps civilian victims marginalized or excluded by the effects of
                        war, climate shocks, and economic collapse.
                    </p>

                    <Link
                        href="/about-us"
                        className="gap-2 inline-flex items-center w-fit mt-6 relative border-2 border-black hover:border-cyan-600 px-8 py-3 group transition-all before:absolute before:w-0 hover:before:w-full before:h-full before:bg-cyan-600 before:left-0 before:top-0 before:transition-all before:duration-300 before:-z-10"
                    >
                        <span className=" group-hover:text-white">
                            learn more{" "}
                        </span>
                        <FaArrowRight className=" text-cyan-600 group-hover:text-white transition-all" />
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gridgrid-cols-[repeat(auto-fit,minmax(min(12rem,100%),16rem))] gap-4 items-end bg-white">
                    {discovers.map((item) => (
                        <div
                            key={item.title}
                            className="w-48 lg:w-64 flex items-center justify-center flex-none aspect-square bg-cyan-600 relative group"
                        >
                            <div className="z-10 flex flex-col gap-4 text-white py-10 px-lg text-center justify-center h-full">
                                <h3 className="text-4xl first-letter:capitalize">
                                    {item.title}
                                </h3>
                                <p className="text-md first-letter:capitalize ">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
