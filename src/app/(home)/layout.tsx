import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function Layout(properties: HomeLayoutProps) {
  return (
    <>
      {properties.header}
      <main className="w-full flex grow flex-col z-10 bg-white">{properties.children}</main>
      {properties.footer}
    </>
  );
}
