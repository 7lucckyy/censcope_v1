import React from "react";
import Link from "next/link";

export default function Hero(properties: HeroProps) {
  const links = [{ label: "home", href: "#" }];
  if (properties.links) links.push(...properties.links);

  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${properties.image})` }}
      className="flex flex-col gap-60 items-center mt-28 justify-center bg-gray-200 pt-20 pb-40 px-20% bg-center bg-cover"
    >
      <header className="flex gap-2 self-start text-xs bg-white p-1 capitalize">
        {links.map((item, index) => (
          <React.Fragment key={item.label}>
            <Link href={item.href} className="underline invalid:bg-red-600">
              {item.label}
            </Link>
            {index < links.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </header>

      <div className="flex flex-col items-center gap-10 w-4/5 mx-auto">
        <h2 className="capitalize text-4xl text-cyan-600">
          {properties.title}
        </h2>

        <p className="w-full p-10 text-lg bg-white text-center">
          {properties.description}
        </p>
      </div>
    </section>
  );
}
