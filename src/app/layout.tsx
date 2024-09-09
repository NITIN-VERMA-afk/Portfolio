import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import Footer from "./Incomponets/Footer";
import Navbar from "./Incomponets/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NITIN VERMA | Web Developer & Designer",
  description:
    "Nitin Verma's portfolio showcasing web development and design projects. Expertise in React, Next.js, and UI/UX design.",
  keywords: [
    "Nitin Verma",
    "Web Developer",
    "Designer",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Nitin Verma", url: "https://gcp-vercel.vercel.app" }],
  openGraph: {
    title: "NITIN VERMA | Web Developer & Designer",
    description:
      "Nitin Verma's portfolio showcasing web development and design projects.",
    type: "website",
    url: "https://www.nitinverma.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
