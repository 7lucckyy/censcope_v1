import Hero from "@/components/hero";
import { aboutBannerImg } from "@/constants/media";
import Actions from "../(index)/(sections)/actions";

export default function Page() {
  return (
    <>
      <Hero
        title="Our actions"
        image={aboutBannerImg.src}
        links={[{ label: "about us", href: "#" }]}
        description={`Our 199 projects are carried out in 25 countries by 3,007 national employees, 219 expatriates and 139 head office staff.
          Having become Première Urgence Internationale in 2011, the organization is now active in 25 countries in Africa, Asia, Europe, Latin America, and the Middle East, engaging in direct aid for populations suffering crises.`}
      />

      <Actions />
    </>
  );
}
