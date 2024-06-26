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
  title: "NITIN VERMA",
  description: "its my portfolio",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
