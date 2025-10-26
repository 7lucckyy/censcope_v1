import React from "react";

export function Hero(properties: HeroProps) {
  const links = [{ label: "home", href: "#" }];
  if (properties.links) links.push(...properties.links);

  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${properties.image})` }}
      className="relative flex flex-col items-end justify-center bg-gray-200 padding bg-center bg-cover aspect-[3/2] lg:aspect-[4/3] xl:max-h-[720px] max-md:max-h-[540px] md:aspect-[4/3] h-screen lg:max-h-[720px] overflow-hidden"
    >
      <div className="flex flex-col items-center gap-6 lg:gap-10 w-4/5 mx-auto">
        <h2 className="capitalize heading-6 md:heading-4 lg:heading-3 text-cyan-600 font-bold">
          {properties.title}
        </h2>

        <p className="w-full p-4 lg:p-6 md:text-lg bg-white text-center">
          {properties.description}
        </p>
      </div>
    </section>
  );
}
