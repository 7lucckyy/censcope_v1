import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function Layout(properties: DonateLayoutProps) {
  return (
    <>
      {properties.header}
      <main className="flex flex-col w-full grow">{properties.children}</main>
      {properties.footer}
    </>
  );
}
