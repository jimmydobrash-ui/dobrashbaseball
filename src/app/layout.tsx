import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dobrash Diamond Development | Elite Remote Baseball Coaching",
  description:
    "Professional remote baseball coaching for serious ballplayers of all ages. Elite development delivered remotely by a D1/D2/JuCo/Independent Professional veteran with 1,000+ hours of instruction.",
  keywords: [
    "remote baseball coaching",
    "baseball training online",
    "baseball development program",
    "private baseball instruction",
    "youth baseball coaching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-R5LSRE5L0B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R5LSRE5L0B');
        `}
      </Script>
    </html>
  );
}
