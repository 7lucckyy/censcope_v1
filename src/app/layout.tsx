import "./global.css";
import type { Metadata } from "next";
import PortalProvider from "@/components/providers/portal.provider";

export const metadata: Metadata = {
  title: "Censcope",
  icons: { icon: "/logo.png" },
  description: "Non Governemtnal Website",
};

export default function Layout(properties: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <PortalProvider>
          <div id="portal"></div>
          <div id="root">{properties.children}</div>
        </PortalProvider>
      </body>
    </html>
  );
}
