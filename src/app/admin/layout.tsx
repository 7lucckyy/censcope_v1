import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Censope Admin",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(fontSans.variable, fontSans.className, "isolate")}>
      <div className="max-w-screen overflow-x-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
}
