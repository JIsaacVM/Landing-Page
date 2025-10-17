import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";

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
  title: "Tatto Body Studio",
  description: "El estudio de tatuajes que transforma tu piel en arte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-black/10`}
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