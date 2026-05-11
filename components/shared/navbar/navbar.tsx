"use client";
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Lg from '@/public/assets/logo/logo1.png';
import { bebas_neue } from '@/fonts/font';


interface SubNavItem {
    name: string;
    href: string;
}

interface NavbarProps {
    name: string;
    href: string;
    subNavBar?: SubNavItem[];
}


const NAV_LINKS: NavbarProps[] = [
    {
        name: "FENASIUS",
        href: "/fenasius",
        subNavBar: [
            {
                name: "POUR TOUS",
                href: "/fenasius",
            },
            {
                name: "POUR PARTICULIERS",
                href: "/fenasius/business",
            },
            {
                name: "POUR GOUVERNEMENT",
                href: "/fenasius/government",
            }
        ]
    },
    {
        name: "PRODUITS",
        href: "/products",
        subNavBar: [
            {
                name: "FENECHO",
                href: "/products/fenecho",
            },
            {
                name: "FIND MENSTRUAL WIPES",
                href: "/products/menstrual-wipes",
            },
            {
                name: "E-HEALTH",
                href: "/products/e-health",
            },
            {
                name: "EN SAVOIR PLUS +",
                href: "/products",
            }
        ]
    },
    {
        name: "CARRIÈRE",
        href: "/careers",
        subNavBar: [
            {
                name: " IMPACT SOCIAL",
                href: "/careers/social",
            },
            {
                name: "UNIVERSITAIRE",
                href: "/careers/academic",
            },
            {
                name: "PROFESSIONNEL",
                href: "/careers/professional",
            }
        ]
    },
    {
        name: "COMPAGNIE",
        href: "/company",
    },
   
    {
        name: "NOUVEAUTÉ",
        href: "/news",
    },
    {
        name: "ACHAT",
        href: "/shop",
    }
];

export default function NavbarPage() {
    const pathname = usePathname();
    const router = useRouter();
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const handleNavigation = (href: string) => {
        if (href) {
            router.push(href);
            setActiveDropdown(null);
        }
    };

    return (
        <>
            {activeDropdown !== null && (
                <div 
                    className="fixed  bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                />
            )}

            <header className="fixed top-0 left-0 right-0 z-50 ">
                <nav 
                    className="relative"
                    onMouseLeave={() => {
                        setActiveDropdown(null);
                    }}
                >
                    <div className="bg-black/10 backdrop-blur-3xl">
                        <div className="max-w-7xl mx-auto px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center gap-8">
                                    <Link href="/" className="flex items-center">
                                        <Image
                                            src={Lg}
                                            alt="Fenasius"
                                            width={120}
                                            height={200}
                                            priority
                                            className="h-14 w-auto"
                                        />
                                    </Link>
                                    <div className={`flex items-center gap-1 text-xl`}>
                                    {NAV_LINKS.map((link, index) => (
    <div
        key={index}
        className="relative"
        onMouseEnter={() => {
            if (link.subNavBar) {
                setActiveDropdown(index);
            } else {
                setActiveDropdown(null);
            }
        }}
    >
        <button
            aria-expanded={link.subNavBar ? activeDropdown === index : undefined}
            aria-haspopup={link.subNavBar ? "true" : undefined}
            aria-controls={link.subNavBar ? `dropdown-${index}` : undefined}
            onClick={() => {
                if (!link.subNavBar) {
                    handleNavigation(link.href);
                }
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

                              
                                <button 
                                    onClick={() => handleNavigation('/try')}
                                    className={`px-5 py-1.5 text-xl text-white border border-zinc-100 rounded-full hover:bg-neutral-800 transition-all cursor-pointer duration-200 ${bebas_neue.className}`} 
                                >
                                    Essayer FENASIUS
                                </button>
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