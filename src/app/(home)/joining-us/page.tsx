"use client";
import Hero from "@/components/hero";
import Scrollable from "@/components/scrollable";
import { aboutBannerImg } from "@/constants/media";

import Career from "./(sections)/career";
import News from "./(sections)/newsline";
import Offers from "./(sections)/offers";
import Meaning from "./(sections)/meaning";
import JobHunt from "./(sections)/job-hunt";
import HrPolicy from "./(sections)/hr-policy";

export default function Page() {
  const sections = [
    { id: "offers", label: "Job offers", component: Offers },
    { id: "meaning", label: "What working with us means", component: Meaning },
    { id: "career", label: "make a carrer", component: Career },
    { id: "hr-policy", label: "HR policy", component: HrPolicy },
    { id: "job-hunt", label: "Jobs", component: JobHunt },
    { id: "newsline", label: "News", component: News },
  ];

  return (
    <>
      <Hero
        title="About us"
        image={aboutBannerImg.src}
        links={[{ label: "about us", href: "#" }]}
        description="We are a non-profit organisation that is committed to providing support to the community."
      />
      <Scrollable sections={sections} />
    </>
  );
}
