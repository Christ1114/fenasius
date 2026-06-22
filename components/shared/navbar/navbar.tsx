"use client";
import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Lg from '@/public/assets/logo/logo1.png';
import { bebas_neue } from '@/fonts/font';
import { Earth } from 'lucide-react';
import { useIntlayer } from "next-intlayer";

type SettingsProps = {
    title: string;
    locale: string;
}

const SETTINGSPROPS: SettingsProps[] = [
    { title: "French", locale: "fr" }, 
    { title: "English", locale: "en" },   
    { title: "Arabic", locale: "ar" },  
];

interface SubNavItem {
    name: string;
    href: string;
}

interface NavbarProps {
    name: string;
    href: string;
    subNavBar?: SubNavItem[];
}

const validLocales = ['fr', 'en', 'ar'];

const getLocalizedHref = (href: string, locale: string) => {
    if (locale === 'fr') return href;
    return `/${locale}${href}`;
};

export default function NavbarPage() {
    const { fenasius, produits, carriere, company, actualites, achat } = useIntlayer('navbar');
    const { pourtoutes, pourparticuliers, pourgouvernements, fenecho, findmenstrualwipes, ehealth, ensavoirplus, impactsocial, universitaire, professionnel } = useIntlayer('subnavbar');
    const { essayerfenasius } = useIntlayer('btn');
    const pathname = usePathname();
    const router = useRouter();
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const firstSegment = pathname.split('/')[1];
    const currentLocale = validLocales.includes(firstSegment) ? firstSegment : 'fr';

    const NAV_LINKS: NavbarProps[] = [
        {
            name: fenasius,
            href: getLocalizedHref("/fenasius", currentLocale),
            subNavBar: [
                { name: pourtoutes, href: getLocalizedHref("/fenasius", currentLocale) },
                { name: pourparticuliers, href: getLocalizedHref("/business", currentLocale) },
                { name: pourgouvernements, href: getLocalizedHref("/fenasius/government", currentLocale) },
            ]
        },
        {
            name: produits,
            href: getLocalizedHref("/products", currentLocale),
            subNavBar: [
                { name: fenecho, href: getLocalizedHref("/products/fenecho", currentLocale) },
                { name: findmenstrualwipes, href: getLocalizedHref("/products/menstrual-wipes", currentLocale) },
                { name: ehealth, href: getLocalizedHref("/products/e-health", currentLocale) },
                { name: ensavoirplus, href: getLocalizedHref("/products", currentLocale) },
            ]
        },
        {
            name: carriere,
            href: getLocalizedHref("/careers", currentLocale),
            subNavBar: [
                { name: impactsocial, href: getLocalizedHref("/careers/social", currentLocale) },
                { name: universitaire, href: getLocalizedHref("/careers/academic", currentLocale) },
                { name: professionnel, href: getLocalizedHref("/careers/professional", currentLocale) },
            ]
        },
        { name: company, href: getLocalizedHref("/company", currentLocale) },
        { name: actualites, href: getLocalizedHref("/news", currentLocale) },
        { name: achat, href: getLocalizedHref("/shop", currentLocale) },
    ];

    const handleNavigation = (href: string) => {
        if (href) {
            router.push(href);
            setActiveDropdown(null);
            setIsOpen(false); 
        }
    };

    const handleLanguageChange = (locale: string) => {
        const currentPath = pathname.replace(/^\/(fr|en|ar)/, '') || '/';
        const newPath = locale === 'fr' ? currentPath : `/${locale}${currentPath}`;
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <>
            {activeDropdown !== null && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                />
            )}

            <header className="fixed top-0 left-0 right-0 z-50">
                <nav
                    className="relative"
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <div className="bg-black/10 backdrop-blur-3xl">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center gap-8">
                                    <Link href={currentLocale === 'fr' ? '/' : `/${currentLocale}`} className="flex items-center">
                                        <Image
                                            src={Lg}
                                            alt="Fenasius"
                                            width={400}
                                            height={300}
                                            priority
                                            className="h-14 w-auto"
                                        />
                                    </Link>
                                    
                                    <div className="flex items-center gap-1 text-xl">
                                        {NAV_LINKS.map((link, index) => (
                                            <div
                                                key={index}
                                                className="relative"
                                                onMouseEnter={() => {
                                                    if (link.subNavBar) setActiveDropdown(index);
                                                    else setActiveDropdown(null);
                                                }}
                                            >
                                                <button
                                                    aria-expanded={link.subNavBar ? activeDropdown === index : undefined}
                                                    aria-haspopup={link.subNavBar ? "true" : undefined}
                                                    aria-controls={link.subNavBar ? `dropdown-${index}` : undefined}
                                                    onClick={() => {
                                                        if (!link.subNavBar) handleNavigation(link.href);
                                                    }}
                                                    className={`
                                                        px-3 py-5 font-mono cursor-pointer transition-colors duration-200 text-xl ${bebas_neue.className}
                                                        ${pathname === link.href || activeDropdown === index
                                                            ? 'text-purple-400'
                                                            : 'text-neutral-400 hover:text-purple-400'
                                                        }
                                                    `}
                                                >
                                                    {link.name}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-6">
                                    <div className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="cursor-pointer hover:opacity-80 transition-opacity"
                                            aria-label="Changer la langue"
                                        >
                                            <Earth color="white" className="w-5 h-5" />
                                        </button>

                                        {isOpen && (
                                            <div className="absolute right-0 top-9 flex flex-col bg-black/90 backdrop-blur-sm border border-zinc-700 rounded-xl p-2 gap-y-1 w-40 z-50 shadow-xl">
                                                {SETTINGSPROPS.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleLanguageChange(item.locale)}
                                                        className={`flex items-center gap-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 text-sm
                                                            ${currentLocale === item.locale 
                                                                ? 'bg-pink-800/90 text-white' 
                                                                : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                                            }
                                                        `}
                                                    >
                                                        {item.title}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => handleNavigation(getLocalizedHref('/try', currentLocale))}
                                        className={`px-5 py-1.5 text-xl text-white border border-zinc-100 rounded-full hover:bg-neutral-800 transition-all cursor-pointer duration-200 ${bebas_neue.className}`}
                                    >
                                        {essayerfenasius}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {activeDropdown !== null && NAV_LINKS[activeDropdown].subNavBar && (
                        <div
                            id={`dropdown-${activeDropdown}`}
                            role="menu"
                            className="bg-black/10 backdrop-blur-3xl border-t border-b border-zinc-400"
                        >
                            <div className="max-w-7xl mx-auto px-6 lg:px-2 py-6">
                                <div className={`flex items-start gap-8 ml-[136px] ${bebas_neue.className}`}>
                                    {NAV_LINKS[activeDropdown].subNavBar!.map((item, idx) => (
                                        <button
                                            key={idx}
                                            role="menuitem"
                                            onClick={() => handleNavigation(item.href)}
                                            className="text-left group"
                                        >
                                            <h3 className="text-white text-xl cursor-pointer font-medium group-hover:text-neutral-300 transition-colors">
                                                {item.name}
                                            </h3>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}