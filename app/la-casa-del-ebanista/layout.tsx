import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Casa del Ebanista",
  description: "Donde la madera cuenta una historia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-amber-50`}
    >
      <NavBar />
      <div
        className="relative z-10 flex flex-col min-h-screen">

        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>

  );
}