// app/[locale]/layout.tsx
import type { LocalPromiseParams, NextLayoutIntlayer } from "next-intlayer";
import { getHTMLTextDir, getIntlayer } from "intlayer";
import { inter } from '@/fonts/font';
import CustomCursor from "@/components/fonction.cursor";
import type { Metadata } from "next";
import {albert} from "@/fonts/font";

export { generateStaticParams } from "next-intlayer";

const LayoutLocale: NextLayoutIntlayer = async ({
  children,
  params
}) => {
  const { locale } = await params;
  
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <body className={`${albert.className} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
};

export default LayoutLocale;