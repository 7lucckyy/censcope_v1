import { socialLinks } from "@/constants/data";

export function SocialMedia() {
  return (
    <section
      id="social-media"
      className="py-10 sm:py-12 lg:16 xl:py-20 bg-spiral bg-white bg-contain bg-center"
    >
      <div className="p-10 flex flex-col items-center bg-gray-100 max-w-2xl mx-auto w-full">
        <p className="italic text-3xl first-letter:capitalize font-cavet">
          follow us{" "}
        </p>
        <h3 className="text-cyan-600 text-xl md:text-3xl mb-4">
          on social media
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-5 px-sm">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-all"
            >
              <link.icon className="transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
