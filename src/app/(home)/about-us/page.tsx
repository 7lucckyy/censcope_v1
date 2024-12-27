"use client";
import Hero from "@/components/hero";
import Scrollable from "@/components/scrollable";
import { aboutBannerImg } from "@/constants/media";

import Commit from "./(sections)/commits";
import Account from "./(sections)/accounts";
import History from "./(sections)/histories";
import Identity from "./(sections)/identities";
import Company from "./(sections)/organisations";

export default function Page() {
  const sections = [
    { label: "Who we are", id: "identity", component: Identity },
    { label: "Our history", id: "history", component: History },
    { label: "Our commitment", id: "commit", component: Commit },
    { label: "Our organisation", id: "organisation", component: Company },
    { label: "Accounts", id: "account", component: Account },
  ];

  return (
    <>
      <Hero
        title="Join us"
        image={aboutBannerImg.src}
        links={[{ label: "about us", href: "#" }]}
        description="We are a non-profit organisation that is committed to providing support to the community."
      />
      <Scrollable sections={sections} />
    </>
  );
}
