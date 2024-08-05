import "./globals.css";

import React from "react";

import { ThemeProvider } from "../components/themeprovider";
import { Metadata } from "next";
import { InterFont } from "../utils/fonts";
import { Suspense } from "react";
import Loading from "./loading";

const baseURL = "https://psyneural.vercel.app";
const AppName = "PsyNeural";

export const metadata: Metadata = {
  description:
    "PsychNeural AI uses advanced technology to diagnose and treat mental health conditions, offering innovative and personalized solutions. Our AI-driven approach aims to improve patient outcomes and enhance overall mental wellness.".substring(
      0,
      200
    ),
  keywords: [
    "Artificial Intelligence",
    "AI",
    "Online Chat",
    "Psychology",
    "Technology",
    "Mental Health",
  ],
  metadataBase: new URL(baseURL),
  appleWebApp: true,
  generator: "Next.js",
  applicationName: AppName,
  authors: [{ name: "", url: "" }],
  creator: AppName,
  publisher: AppName,
  category: "IA",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    "max-image-preview": "standard",
    notranslate: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
      "max-image-preview": "standard",
      notranslate: false,
    },
  },
  alternates: {
    canonical: baseURL,
    languages: {
      en: "US",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.png",
  },
  title: {
    default: "Neural psychological AI",
    template: "%s | PsyNeural",
  },
  openGraph: {
    title:
      "PsychNeural AI: Advanced Solutions for Treating Mental Health Issues.".substring(
        30,
        60
      ),
    description:
      "PsychNeural AI uses advanced technology to diagnose and treat mental health conditions, offering innovative and personalized solutions. Our AI-driven approach aims to improve patient outcomes and enhance overall mental wellness".substring(
        55,
        200
      ),
    type: "website",
    locale: "en_US",
    url: `${baseURL}`,
    siteName: AppName,
    images: [
      {
        url: "/og.webp",
        width: "1200",
        height: "630",
        alt: "og",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    title:
      "PsychNeural AI: Advanced Solutions for Treating Mental Health Issues".substring(
        30,
        60
      ),
    description:
      "PsychNeural AI uses advanced technology to diagnose and treat mental health conditions, offering innovative and personalized solutions. Our AI-driven approach aims to improve patient outcomes and enhance overall mental wellness".substring(
        55,
        200
      ),
    card: "summary_large_image",
    creator: `@${AppName}`,
    images: [
      {
        url: "/og.webp",
        width: "1200",
        height: "630",
        alt: "og",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className="antialiased scroll-smooth h-auto"
      suppressHydrationWarning
    >
      <body className={InterFont.className}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
