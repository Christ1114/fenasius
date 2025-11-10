"use client";
import * as React from "react";

interface ButtonItem {
    name: string;
    href: string;
}

interface UpNavItem {
    name: string;
    href: string;
    logo: string;
}

interface NavProps {
    name: string;
    href: string;
    subUpNavBar?: UpNavItem[];
    Button?: ButtonItem[]; 
}
interface NavBar {
    name: string;
    href?:string;
    subNavBar?: NavProps[];
}

const NAV_LINKS: NavBar[] = [
    {
        name: "Catégories", subNavBar :  [
                   
    {
        name: "Enfants",
        href: "/ty",
        subUpNavBar: [
            { name: "Sécurité et confidentialité", href: "t/ty", logo: "" },
            { name: "Contrôle Parental", href: "t/ty", logo: "" },
            { name: "Valeur Éducative", href: "t/ty", logo: "" },
            { name: "Reconnaissances et Certifications", href: "t/ty", logo: "" },
        ],
        Button: [ 
            { name: "Inscription", href: "t/ty" },
            { name: "Connexion", href: "t/ty" },
        ]
    },
    {
        name: "Adolescentes",
        href: "t/ty",
        subUpNavBar: [
            { name: "Sécurité et confidentialité", href: "t/ty", logo: "" },
            { name: "Contrôle Parental", href: "t/ty", logo: "" },
            { name: "Valeur Éducative", href: "t/ty", logo: "" },
            { name: "Reconnaissances et Certifications", href: "t/ty", logo: "" },
        ],
        Button: [ 
            { name: "Inscription", href: "t/ty" },
            { name: "Connexion", href: "t/ty" },
        ]
    },
    {
        name: "Adultes",
        href: "t/ty",
        subUpNavBar: [
            { name: "Sécurité et confidentialité", href: "t/ty", logo: "" },
            { name: "Contrôle Parental", href: "t/ty", logo: "" },
            { name: "Valeur Éducative", href: "t/ty", logo: "" },
            { name: "Reconnaissances et Certifications", href: "t/ty", logo: "" },
        ],
        Button: [ 
            { name: "Inscription", href: "t/ty" },
            { name: "Connexion", href: "t/ty" },
        ]
    },
    {
        name: "Personnes Agées",
        href: "t/ty",
        subUpNavBar: [
            { name: "Sécurité et confidentialité", href: "t/ty", logo: "" },
            { name: "Contrôle Parental", href: "t/ty", logo: "" },
            { name: "Valeur Éducative", href: "t/ty", logo: "" },
            { name: "Reconnaissances et Certifications", href: "t/ty", logo: "" },
        ],
        Button: [ 
            { name: "Inscription", href: "t/ty" },
            { name: "Connexion", href: "t/ty" },
        ]
    }
        ]
    },
{name:"langue"}//demain tu dois terminer cette partie !

];

interface NavItemProps {
    link: NavProps;
    isActive:boolean;
    onNavigate: (href: string) => void;
}

export default function NavbarElement() {
    return (
      <div className=""></div>
    );
}