import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NetLab",
    template: "%s | NetLab",
  },
  description:
    "Interactive networking labs for engineers to build, simulate, and master real-world infrastructure.",
  keywords: ["networking", "ccna", "labs", "ospf", "bgp", "network simulation"],
  authors: [{ name: "NetLab Team" }],
  openGraph: {
    title: "NetLab",
    description: "Interactive networking simulation platform",
    url: "",
    siteName: "NetLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetLab",
    description: "Build and simulate real networking labs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
