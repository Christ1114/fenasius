import { t, type DeclarationContent } from "intlayer";

const NavbarContent = {
    key: "navbar",
    content: {
        fenasius: t({
            fr: "FENASIUS",
            en: "FENASIUS",
            ar: "FENASIUS",
        }),
        produits: t({
            fr: "PRODUITS",
            en: "PRODUCTS",
            ar: "منتجات",
        }),
        carriere: t({
            fr: "CARRIÈRE",
            en: "CAREERS",
            ar: "الوظائف",
        }),
        company: t({
            fr: "COMPAGNIE",
            en: "COMPANY",
            ar: "الشركة",
        }),
        actualites: t({
            fr: "ACTUALITÉS",
            en: "NEWS",
            ar: "الأخبار",
        }),
        achat: t({
            fr: "ACHAT",
            en: "SHOP",
            ar: "شراء",
        }),
    },
} satisfies DeclarationContent; 

export default NavbarContent; 