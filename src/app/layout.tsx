import type { Metadata } from "next";

import "./global.css";

export const metadata: Metadata = {
  title: "Censcope",
  icons: { icon: "/logo.png" },
  description: "Non Governemtnal Website",
};

export default function Layout(properties: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{properties.children}</body>
    </html>
  );
}
