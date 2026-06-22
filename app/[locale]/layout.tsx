import type { NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir } from "intlayer";
import { IntlayerClientProvider } from "next-intlayer";
import { albert } from "@/fonts/font";
import CustomCursor from "@/components/fonction.cursor";
import NavbarPage from "@/components/shared/navbar/navbar";
import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fenasius AI",
    template: "%s | Fenasius AI",
  },
  description: "Fenasius AI is a free platform and assistant dedicated to women's health and more. Created by Menstrue Libre AI",
  icons: {
    icon: [
      { url: "/icons/icon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon_180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/icon_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon_512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export { generateStaticParams } from "next-intlayer";

const LayoutLocale: NextLayoutIntlayer = async ({
  children,
  params,
}) => {
  const { locale } = await params;

  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body className={`${albert.className} antialiased`}>
        <IntlayerClientProvider locale={locale}>
          <CustomCursor />
          {children}
        </IntlayerClientProvider>
      </body>
    </html>
  );
};

export default LayoutLocale;