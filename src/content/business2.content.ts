'use client';
import { t, type DeclarationContent } from "intlayer";

const business2Content = {
    key: "secondcomponent",
    content: {
        // ---- TITRE SECTION ----
        sectionLabel: t({
            fr: "Caractéristique",
            en: "Feature",
            ar: "ميزة",
        }),
        sectionTitle: t({
            fr: "IA de qualité entreprise, prête à l'emploi",
            en: "Enterprise-grade AI, ready to use",
            ar: "ذكاء اصطناعي بجودة المؤسسات، جاهز للاستخدام",
        }),
        sectionDescription: t({
            fr: "Isolation sécurisée des données, connaissances en temps réel sur tous vos outils, et des résultats prêts pour la production pour chaque équipe.",
            en: "Secure data isolation, real-time knowledge across all your tools, and production-ready outputs for every team.",
            ar: "عزل آمن للبيانات، معرفة في الوقت الفعلي عبر جميع أدواتك، ومخرجات جاهزة للإنتاج لكل فريق.",
        }),

        // ---- CARTE 1 : COFFRE-FORT ----
        card1Title: t({
            fr: "Coffre-fort d'entreprise sécurisé",
            en: "Secure enterprise vault",
            ar: "خزنة مؤسسية آمنة",
        }),
        card1Description: t({
            fr: "Vos données sont chiffrées avec vos clés, sous votre contrôle, et isolées de tous les autres clients.",
            en: "Your data is encrypted with your keys, under your control, and isolated from all other clients.",
            ar: "بياناتك مشفرة بمفاتيحك، تحت تحكمك، ومعزولة عن جميع العملاء الآخرين.",
        }),

        // ---- CARTE 2 : RECHERCHE ----
        card2Title: t({
            fr: "Recherche et connaissances en temps réel",
            en: "Real-time search and knowledge",
            ar: "بحث ومعرفة في الوقت الفعلي",
        }),
        card2Description: t({
            fr: "Connectez vos applications externes et permettez à Fenasius AI de rechercher de manière transparente dans les conversations, les documents et les e-mails.",
            en: "Connect your external apps and let Fenasius AI seamlessly search across conversations, documents, and emails.",
            ar: "اربط تطبيقاتك الخارجية ودع Fenasius AI يبحث بسلاسة عبر المحادثات والمستندات ورسائل البريد الإلكتروني.",
        }),

        // ---- CARTE 3 : PRÉSENTATIONS ----
        card3Title: t({
            fr: "Présentations, feuilles de calcul et documents",
            en: "Presentations, spreadsheets and documents",
            ar: "عروض تقديمية وجداول بيانات ومستندات",
        }),
        card3Description: t({
            fr: "Vous n'êtes pas limité à un fil de discussion ; Fenasius peut produire une variété de résultats.",
            en: "You're not limited to a chat thread; Fenasius can produce a variety of outputs.",
            ar: "لست مقيداً بسلسلة محادثة؛ يمكن لـ Fenasius إنتاج مجموعة متنوعة من المخرجات.",
        }),
    },
} satisfies DeclarationContent;

export default business2Content;