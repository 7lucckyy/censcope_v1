import News from "./(sections)/news";
import Banner from "./(sections)/banner";
import Filter from "./(sections)/filter";

export default function Page() {
  return (
    <>
      <Banner />
      <Filter />
      <News />
    </>
  );
}
