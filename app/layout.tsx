import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/styles/globals.css";
import CustomCursor from "@/components/fonction.cursor";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    default: "Fenasius",
    template:"%s | Fenasius",
  },
  description: "Fenasius is a free AI platform and assistant dedicated to women's health and more. Created by Menstrue Libre AI",
  icons : {
    icon : [
      {
        url : "icons/icon-16x16.png",
        sizes : "16x16",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon-32x32.png",
        sizes : "32x32",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon-192x192.png",
        sizes : "192x192",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon-512x512.png",
        sizes : "512x512",
        type : "image/svg+xml"
      },
      {
        url : "icons/apple-touch-icon.png",
        sizes : "180x180",
        type : "image/svg+xml"
      },
    ]
  },
  manifest : "/manisfest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
