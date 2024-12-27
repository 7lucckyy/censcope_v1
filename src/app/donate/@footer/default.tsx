import React from "react";

export default function Footer() {
  const links = [
    { label: "Credits", href: "/credits" },
    { label: "Legal Information", href: "/legal" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      id="main-footer"
      className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-black bg-opacity-40 py-4 px-20%"
    >
      <div className=""></div>

      <nav className="flex text-xs items-center justify-center gap-2 flex-col lg:flex-row text-white">
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <a
              target="_blank"
              key={link.label}
              href={link.href}
              className="underline"
            >
              {link.label}
            </a>

            {index < links.length - 1 && (
              <span className="text-white hidden lg:flex">|</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </footer>
  );
}
