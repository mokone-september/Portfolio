import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.creator,
    },
  ],
  creator: siteConfig.creator,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000000] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <Navbar />
        <main
          id="main-content"
          className={cn(
            "flex relative min-h-screen flex-col items-center justify-start pt-14 pb-4 px-4 sm:px-10 lg:px-40 max-w-7xl mx-auto bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]"
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
