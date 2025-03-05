import type React from "react"
import { Inter, Dosis,Jersey_25  } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import FeatureSection from "@/components/FeatureSection";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inter" });
const dosis = Dosis({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-dosis" });
const jersey = Jersey_25({ subsets: ["latin"], weight: "400", variable: "--font-jersey" });

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
        <Newsletter/>
        <FeatureSection/>
        <Footer/>
      </body>
    </html>
  );
}
