import { t, type DeclarationContent } from "intlayer";

const SubNavbarContent = {
    key: "subnavbar",
    content: {
        pourtoutes: t({
            fr: "POUR TOUTES",
            en: "FOR ALL",
            ar: "للجميع",
        }),
        pourparticuliers: t({
            fr: "POUR PARTICULIERS",
            en: "FOR INDIVIDUALS",
            ar: "للأفراد",       
        }),
        pourgouvernements: t({
            fr: "POUR GOUVERNEMENTS",
            en: "FOR GOVERNMENTS",
            ar: "للحكومات",
        }),
        fenecho: t({
            fr: "FENECHO",
            en: "FENECHO",
            ar: "فنشو",
        }),
        findmenstrualwipes: t({
            fr: "FIND MENSTRUAL WIPES",
            en: "FIND MENSTRUAL WIPES",
            ar: "مناديل الدورة الشهرية",  
        }),
        ehealth: t({
            fr: "E-HEALTH",
            en: "E-HEALTH",
            ar: "الصحة الإلكترونية",
        }),
        ensavoirplus: t({
            fr: "EN SAVOIR PLUS +",
            en: "LEARN MORE +",           
            ar: "معرفة المزيد +",
        }),
        impactsocial: t({
            fr: "IMPACT SOCIAL",
            en: "SOCIAL IMPACT",          
            ar: "التأثير الاجتماعي",
        }),
        universitaire: t({
            fr: "UNIVERSITAIRE",
            en: "ACADEMIC",              
            ar: "الأكاديمي",
        }),
        professionnel: t({
            fr: "PROFESSIONNEL",
            en: "PROFESSIONAL",
            ar: "المهني",
        }),
    },
} satisfies DeclarationContent;

export default SubNavbarContent;