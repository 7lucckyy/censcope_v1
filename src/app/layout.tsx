import "./globals.css";
import type { Metadata } from "next";
import PortalProvider from "@/components/providers/portal.provider";

export const metadata: Metadata = {
    title: "Giant Works",
    icons: { icon: '/logo.svg' },
    description: "Connecting artisans with customers",
};

export default function Layout(properties: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <PortalProvider>
                    <div id="portal" />
                    <div id="root">{properties.children}</div>
                </PortalProvider>
            </body>
        </html>
    );
}
