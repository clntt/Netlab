import Navbar from "@/components/layout/navbar";
import Providers from "@/components/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300">
        <Providers>
          <Navbar />
          {children}
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
