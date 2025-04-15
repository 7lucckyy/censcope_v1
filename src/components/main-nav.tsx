import Link from "next/link";
// import { Separator } from "./ui/separator";

export const MainNav = () => {
  return (
    <div className="md:flex items-center gap-5 hidden">
      <Link href={"/"} className="font-semibold">
        Shadcn Tiptap
      </Link>
    </div>
  );
};
