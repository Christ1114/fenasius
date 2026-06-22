"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Lg from '@/public/assets/logo/logo1.png';
import { bebas_neue, montserrat } from '@/fonts/font';
import { useIntlayer } from "next-intlayer";

const getLocalizedHref = (href: string, locale: string) => {
    if (locale === 'fr') return href;
    return `/${locale}${href}`;
};

const FooterPage = () => {
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'fr';

    const { 
        essayerfenasiussur, web, ios, android, produits, fenasius, 
        pourtoutes, pourparticuliers, pourgouvernements, ensavoirplus, 
        companie, entreprise, carreiere, contact, actualites, 
        politiquedeconfidentialite, mentionslegales, conditionsdusuage, 
        securite, ressources 
    } = useIntlayer('footer');

    const FOOTER_LINKS = [
        {
            name: essayerfenasiussur,
            subFooter: [
                { name: web,     href: "https://www.fenasius.com" },
                { name: ios,     href: getLocalizedHref("/ios", currentLocale) },      
                { name: android, href: getLocalizedHref("/android", currentLocale) },
            ]
        },
        {
            name: produits,
            subFooter: [
                { name: fenasius,           href: getLocalizedHref("/", currentLocale) },
                { name: pourtoutes,          href: getLocalizedHref("/fenasius", currentLocale) },
                { name: pourparticuliers,  href: getLocalizedHref("/fenasius/business", currentLocale) },
                { name: pourgouvernements, href: getLocalizedHref("/fenasius/government", currentLocale) },
                { name: ensavoirplus,     href: getLocalizedHref("/products", currentLocale) },
            ]
        },
        {
            name: companie,
            subFooter: [
                { name: entreprise, href: getLocalizedHref("/company", currentLocale) },
                { name: carreiere,   href: getLocalizedHref("/careers", currentLocale) },
                { name: contact,    href: getLocalizedHref("/contact", currentLocale) },
                { name: actualites, href: getLocalizedHref("/news", currentLocale) },
            ]
        },
        {
            name: ressources,
            subFooter: [
                { name: politiquedeconfidentialite, href: getLocalizedHref("/privacy-policy", currentLocale) },      
                { name: mentionslegales,             href: getLocalizedHref("/legal", currentLocale) },
                { name: conditionsdusuage,     href: getLocalizedHref("/terms-of-service", currentLocale) },
                { name: securite,                     href: getLocalizedHref("/security", currentLocale) },
            ]
        },
    ];

    return (
        <footer className={`w-full px-10 py-30 ${bebas_neue.className}`}>
            <div className="grid grid-cols-4 gap-10 max-w-7xl mx-auto">
                {FOOTER_LINKS.map((section, i) => (
                    <div key={i} className="flex flex-col gap-y-4">
                        <h3 className={`text-zinc-500 text-xs tracking-widest ${bebas_neue.className}`}>
                            {section.name}
                        </h3>
                        <ul className="flex flex-col gap-y-3">
                            {section.subFooter.map((link, j) => (
                                <li key={j}>
                                    {link.href.startsWith('http') ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-xl hover:text-zinc-400 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href || '#'}
                                            className="text-white text-xl hover:text-zinc-400 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 flex flex-col items-center justify-center gap-y-4">
                <Link href={currentLocale === 'fr' ? '/' : `/${currentLocale}`} className="flex items-center">
                    <Image
                        src={Lg}
                        alt="Fenasius"
                        width={200}
                        height={150}
                        className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-200"
                    />
                </Link>
                <p className={`${montserrat.className} text-zinc-600 text-xs`}>
                    © {new Date().getFullYear()} Fenasius sous Menstrues Libres. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default FooterPage;