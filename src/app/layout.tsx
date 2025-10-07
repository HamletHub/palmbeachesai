import type { Metadata } from "next";
import { Lexend_Deca, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palm Beaches AI",
  description: "AI solutions that guarantee measurable business value and ROI",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "PalmBeachesAI",
    capable: true,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="PalmBeachesAI" />
      </head>
      <body
        className={`${lexendDeca.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        {children}
      </body>
    </html>
  );
}
