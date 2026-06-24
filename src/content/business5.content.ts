'use client';
import { t, type DeclarationContent } from "intlayer";

const business5Content = {
    key: "fivecomponent",
    content: {
        featuresHeaderModels: t({
            fr: "Models",
            en: "Models",
            ar: "النماذج",
        }),
        featuresHeaderIndividuals: t({
            fr: "Particuliers",
            en: "Individuals",
            ar: "أفراد",
        }),
        featuresHeaderEnterprise: t({
            fr: "Entreprises",
            en: "Enterprise",
            ar: "الشركات",
        }),
        featuresSectionSecurity: t({
            fr: "Security & compliance",
            en: "Security & compliance",
            ar: "الأمان والامتثال",
        }),
    },
} satisfies DeclarationContent;

export default business5Content;