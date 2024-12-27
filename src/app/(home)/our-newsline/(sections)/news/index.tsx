import NewsCard from "./card";

export default function News() {
  return (
    <div className="w-full grid gap-6 grid-cols-fill-20 pb-10 px-5% lg:px-15%">
      {Array.from({ length: 10 }).map((_, index) => (
        <NewsCard key={index} />
      ))}
    </div>
  );
}
