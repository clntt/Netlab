import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/providers/session-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetLab",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
