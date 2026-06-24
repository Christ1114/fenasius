'use client';
import { t, type DeclarationContent } from "intlayer";

const business4Content = {
    key: "fourcomponent",
    content: {
        // ---- TITRE SECTION ----
        pricingTitle: t({
            fr: "Prix",
            en: "Pricing",
            ar: "الأسعار",
        }),

        // ---- PARTICULIERS ----
        individualsTitle: t({
            fr: "Particuliers",
            en: "Individuals",
            ar: "أفراد",
        }),
        individualsDescription: t({
            fr: "Conçu pour les équipes de petite taille à moyenne collaborant avec Fenasius afin d'innover.",
            en: "Designed for small to medium-sized teams collaborating with Fenasius to innovate.",
            ar: "مصمم للفرق الصغيرة والمتوسطة التي تتعاون مع Fenasius للابتكار.",
        }),
        individualsPrice: t({
            fr: "16 875 francs CFA (XOF) /",
            en: "16,875 CFA francs (XOF) /",
            ar: "16,875 فرنك CFA (XOF) /",
        }),
        individualsPeriod: t({
            fr: "mois",
            en: "month",
            ar: "شهر",
        }),
        individualsCta: t({
            fr: "Créer un groupe",
            en: "Create a group",
            ar: "إنشاء مجموعة",
        }),

        // ---- ENTREPRISES ----
        enterpriseTitle: t({
            fr: "Entreprises",
            en: "Enterprise",
            ar: "الشركات",
        }),
        enterpriseDescription: t({
            fr: "Idéal pour les grandes organisations utilisant des fonctionnalités avancées et des solutions personnalisées.",
            en: "Ideal for large organizations using advanced features and custom solutions.",
            ar: "مثالي للمؤسسات الكبيرة التي تستخدم ميزات متقدمة وحلول مخصصة.",
        }),
        enterprisePrice: t({
            fr: "Discutons en !",
            en: "Let's talk!",
            ar: "لنتحدث!",
        }),
        enterpriseCta: t({
            fr: "Nous contacter",
            en: "Contact us",
            ar: "اتصل بنا",
        }),
    },
} satisfies DeclarationContent;

export default business4Content;