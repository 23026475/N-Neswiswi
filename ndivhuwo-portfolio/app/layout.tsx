import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideNavWrapper from "@/components/SideNavWrapper";
import Footer from "@/components/Footer";
import ConditionalContactWrapper from "@/components/ConditionalContactWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N Neswiswi",
  description: "Ndivhuwo Neswiswi's Personal Portfolio Webapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-foreground ${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        <SideNavWrapper />
        <main>{children}</main>

        {/* ✅ Conditional contact section */}
        <ConditionalContactWrapper />

        <Footer />
      </body>
    </html>
  );
}
