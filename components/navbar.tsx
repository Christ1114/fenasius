"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Lg from "@/public/assets/logo/logo.png";
import GlareHover from './GlareHover'

interface SubNavItem {
  name: string;
  href?: string;
  description?: string;
}
interface NavbarProps {
  name: string;
  href?: string;
  image?: string;
  subNavBar?: SubNavItem[];
}
const NAV_LINKS: NavbarProps[] = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Qui sommes-nous",
    subNavBar: [
      {
        name: "Résumé",
        href: "/t",
        description: "Nous accompagnons les femmes à mieux connaître leur corps à travers des conseils, ateliers et ressources pratiquesNous offrons un soutien bienveillant et des contenus fiables."
        
      }
    ]
  },
  {
    name: "Nos produits",
    subNavBar: [
      {
        name: "Fenasius",
        href: "/tt",
        
      },
      {
        name: "FenEcho",
        href: "/tt",
        
      },
      {
        name: "Find Menstrual Wipes",
        href: "/tt",
        
      },
      {
        name: "E-heatlh",
        href: "/tt",
        
      },
      {
        name: "En savoir plus",
        href: "/tt",
      },
    ]
  },
  {
    name: "Recrutement",
    subNavBar: [
      {
        name: "Recrutement social",
        href: "/careers/social",
        description: "Toutes types de femmes aussi bien portantes qu'en situation de handicap seront les bienvenues dans nos rangs.."
      },
      {
        name: "Recrutement universitaire",
        href: "/careers/academic",
        description: "Nous recrutons diverses personnes encore au stade du parcours académique et universitaire..."
      },
    ]
  },
];
interface NavItemProps {
  link: NavbarProps;
  isActive: boolean;
  onNavigate: (href: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ link, isActive, onNavigate }) => {
  const hasSubnav = link.subNavBar && link.subNavBar.length > 0;

  return (
    <li className="relative group">
      <button
        onClick={() => onNavigate(link.href || "")}
        className={`
          px-4 py-2 rounded-lg border border-purple-950 bg-purple-950 text-white font-medium text-sm hover:border hover:border-zinc-500 cursor-pointer transition-all duration-75
          ${isActive 
            ? " border-zinc-500  " 
            : ""
          }
          ${hasSubnav ? "pr-6" : ""}
        `}
        style={{
            borderRadius:"10px",
            height:"60px",
        }}
        aria-expanded={hasSubnav ? "false" : undefined}
        aria-haspopup={hasSubnav ? "true" : undefined}
      >
        {link.name}
      </button>
      {hasSubnav && (
        <div className="absolute top-full left-0 mt-4 w-80 bg-purple-950/90  border border-purple-950/90 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="p-2 ">
            {link.subNavBar!.map((subItem, index) => (
              <div
                key={index}
                className="p-3 w-full rounded-lg hover:bg-neutral-950 cursor-pointer transition-colors"
                onClick={() => subItem.href && onNavigate(subItem.href)}
              >
                <div className="font-bold text-pink-200">{subItem.name}</div>
                {subItem.description && (
                  <div className="text-sm text-gray-400 mt-1 text-justify mb-4 ">
                    {subItem.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default function Navbar() {
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <nav 
      className={`w-190 mx-auto flex  gap-x-1 justify-between items-center bg-purple-950/90 p-1 border border-purple-950`}
      style={{
        borderRadius:"10px"
      }}
    >
      <div>
        <Link 
          href="/" 
          className={`block p-1 bg-purple-950 flex-1`}
          style={{
            borderRadius:"10px"
          }}
        >
          <Image
            src={Lg}
            alt="Fenasius Brand"
            width={100}
            height={60}
            priority
            className="h-auto"
          />
        </Link>
      </div>

      <div className={`block  bg-purple-900 p-2 shrink-0`}
      style={{
        borderRadius:"10px"
      }}>
        <ul className="flex items-center gap-2">
          {NAV_LINKS.map((link, index) => (
            <NavItem
              key={`nav-${index}`}
              link={link}
              isActive={pathname === link.href}
              onNavigate={handleNavigation}
            />
          ))}
        </ul>
      </div>

      <div>
          <button 
          style={{
            borderRadius:"10px",
            height:"60px",
            position: 'relative'
          }}
          className={`hover:bg-white`}>
           <GlareHover
            glareColor="#000"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={600}
            transitionDuration={1000}
            playOnce={false}
           >
            <span style={{ fontSize: '1rem',fontWeight:"normal", color: '#000', margin: 0 }} >
                Connexion
            </span>
           </GlareHover>
          </button>
      </div>
    </nav>
  );
}