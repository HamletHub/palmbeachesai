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
  metadataBase: new URL('https://palmbeachesai.com'),
  title: {
    default: "Palm Beach AI - AI Solutions with Guaranteed ROI",
    template: "%s | Palm Beaches AI"
  },
  description: "AI solutions that guarantee measurable business value and ROI. Serving Palm Beach County mid-market companies with AI automation and software development.",
  keywords: ["AI solutions", "Palm Beach AI", "AI consulting", "AI automation", "Software development", "Palm Beach County", "Artificial Intelligence"],
  authors: [{ name: "Palm Beaches AI" }],
  creator: "Palm Beaches AI",
  publisher: "Palm Beaches AI",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "PalmBeachesAI",
    capable: true,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palmbeachesai.com",
    siteName: "Palm Beaches AI",
    title: "Palm Beach AI - AI Solutions with Guaranteed ROI",
    description: "AI solutions that guarantee measurable business value and ROI for Palm Beach County businesses.",
    images: [
      {
        url: "/images/clearoffice.png",
        width: 1200,
        height: 630,
        alt: "Palm Beach AI - AI Solutions with Guaranteed ROI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Beach AI - AI Solutions with Guaranteed ROI",
    description: "AI solutions that guarantee measurable business value and ROI for Palm Beach County businesses.",
    images: ["/images/clearoffice.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://palmbeachesai.com",
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
