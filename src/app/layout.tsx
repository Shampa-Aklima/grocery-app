import type React from "react"
import { Inter, Dosis } from "next/font/google";

import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inter" });
const dosis = Dosis({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-dosis" });

export { inter, dosis };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
