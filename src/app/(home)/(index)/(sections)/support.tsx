import Image from "next/image";
import { supports } from "@/constants/data";
import SupportBgImage from "@/assets/images/support-bg.jpg";
import { cn } from "@/lib/utils";

export function Support() {
    return (
        <section
            id="support"
            className="w-full flex flex-col relative py-14 lg:py-16 xl:py-20 px-10% lg:px-16"
        >
            <Image
                alt=""
                width={1920}
                height={900}
                src={SupportBgImage}
                className="top-0 left-0 w-full h-full absolute object-cover"
            />

            <div className="w-full h-full z-10 flex flex-col gap-8 lg:gap-10 items-center lg:items-start justify-between text-white">
                <div
                    className="flex flex-col gap-4"
                >
                    <h2 className="text-2xl md:text-5xl first-letter:capitalize">
                        support us
                    </h2>
                    <p className="text-md md:text-xl md:w-96 font-medium">
                        It is thanks to your commitment that we can carry out our
                        humanitarian missions.
                    </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-evenly gap-4 md:gap-6 xl:gap-8">
                    {supports.map((item) => (
                        <div
                            key={item.title}
                            className={cn(
                                "flex-1 min-w-56 relative flex flex-col",
                                item.bgColor
                            )}
                        >
                            <span className="hidden lg:block absolute -bottom-6 left-1/2 w-24 h-24 bg-inherit rotate-45 -translate-x-1/2 -z-10" />

                            <div className="z-10 flex flex-col gap-2 lg:gap-4 text-white p-6 lg:p-10 justify-start">
                                <h3 className="text-xl md:text-2xl xl:text-3xl first-letter:capitalize">
                                    {item.title}{" "}
                                    <span className="text-2xl md:text-4xl xl:text-5xl">
                                        {item.titleHighlight}
                                    </span>
                                </h3>
                                <p className="text-md first-letter:capitalize lg:text-lg ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}