import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: {
    default: "Fenasius",
    template:"%s | Fenasius",
  },

  description: "Fenasius is a free AI platform and assistant dedicated to women's health and more. Created by Menstrue Libre AI",
  icons : {
    icon : [
      {
        url : "icons/icon_16x16.png",
        sizes : "16x16",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon_32x32.png",
        sizes : "32x32",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon_180x180.png",
        sizes : "180x180",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon_192x192.png",
        sizes : "192x192",
        type : "image/svg+xml"
      },
      {
        url : "icons/icon_512x512.png",
        sizes : "512x512",
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
 

  return children;

}
