"use client";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./(sections)/banner"), { ssr: false });
const Actions = dynamic(() => import("./(sections)/actions"), { ssr: false });
const Support = dynamic(() => import("./(sections)/support"), { ssr: false });
const Newline = dynamic(() => import("./(sections)/newsline"), { ssr: false });
const Discover = dynamic(() => import("./(sections)/discover"), { ssr: false });
const SocialMedia = dynamic(() => import("./(sections)/socialmedia"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Banner />
      <Newline />
      <Support />
      <Actions />
      <Discover />
      <SocialMedia />
    </>
  );
}
