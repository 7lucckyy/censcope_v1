import Banner from "./(sections)/banner";
import Actions from "./(sections)/actions";
import Support from "./(sections)/support";
import Newline from "./(sections)/newsline";
import Discover from "./(sections)/discover";
import SocialMedia from "./(sections)/socialmedia";

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
