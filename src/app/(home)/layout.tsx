import { ReactNode } from "react";
import type { Metadata } from "next";

import Header from "@/components/main-header";
import Footer from "@/components/main-footer";

export const metadata: Metadata = {};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="w-full flex grow flex-col z-10 bg-white max-md:mt-[88px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
