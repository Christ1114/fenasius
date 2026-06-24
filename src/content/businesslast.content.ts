'use client';
import { t, type DeclarationContent } from "intlayer";

const business6Content = {
    key: "sixcomponent",
    content: {
        // ---- LASTCOMPONENT (TITRE + PARAGRAPHE) ----
        lastTitle: t({
            fr: "Discutons en !",
            en: "Let's talk!",
            ar: "لنتحدث!",
        }),
        lastDescription: t({
            fr: "Intéressé par l'intégration de Fenasius dans votre organisation ? Remplissez le formulaire et un membre de notre équipe vous contactera dans les plus brefs délais.",
            en: "Interested in bringing Fenasius to your organization? Fill out the form and a member of our team will be in touch shortly.",
            ar: "هل أنت مهتم بجلب Fenasius إلى مؤسستك؟ املأ النموذج وسيتواصل معك أحد أعضاء فريقنا قريباً.",
        }),

        // ---- FORMULAIRE ----
        formFirstName: t({
            fr: "Prénom *",
            en: "First Name *",
            ar: "الاسم الأول *",
        }),
        formLastName: t({
            fr: "Nom *",
            en: "Last Name *",
            ar: "اسم العائلة *",
        }),
        formEmail: t({
            fr: "Adresse email *",
            en: "Email Address *",
            ar: "البريد الإلكتروني *",
        }),
        formCompany: t({
            fr: "Entreprise *",
            en: "Company Name *",
            ar: "اسم الشركة *",
        }),
        formCompanySize: t({
            fr: "Taille de l'entreprise *",
            en: "Company Size *",
            ar: "حجم الشركة *",
        }),
        formCompanySizePlaceholder: t({
            fr: "Sélectionnez la taille",
            en: "Select size",
            ar: "اختر الحجم",
        }),
        formJobTitle: t({
            fr: "Poste / Rôle *",
            en: "Job Title/Role *",
            ar: "المسمى الوظيفي *",
        }),
        formLicenses: t({
            fr: "Nombre de licences Entreprise *",
            en: "Number of Enterprise Licenses *",
            ar: "عدد تراخيص المؤسسة *",
        }),
        formLicensesMonthly: t({
            fr: "Mensuel",
            en: "Monthly",
            ar: "شهري",
        }),
        formLicensesAnnual: t({
            fr: "Annuel",
            en: "Annual",
            ar: "سنوي",
        }),
        formNeeds: t({
            fr: "Besoins spécifiques *",
            en: "Enterprise Needs *",
            ar: "احتياجات المؤسسة *",
        }),
        formSubmit: t({
            fr: "Demander un accès",
            en: "Request Access",
            ar: "طلب الوصول",
        }),

        // ---- PLACEHOLDERS ----
        formPlaceholderFirstName: t({
            fr: "Votre prénom",
            en: "Your first name",
            ar: "اسمك الأول",
        }),
        formPlaceholderLastName: t({
            fr: "Votre nom",
            en: "Your last name",
            ar: "اسم عائلتك",
        }),
        formPlaceholderEmail: t({
            fr: "exemple@domaine.com",
            en: "example@domain.com",
            ar: "example@domain.com",
        }),
        formPlaceholderCompany: t({
            fr: "Nom de votre entreprise",
            en: "Your company name",
            ar: "اسم شركتك",
        }),
        formPlaceholderJobTitle: t({
            fr: "Ex : Médecin, Chef de service...",
            en: "Ex: Doctor, Head of Department...",
            ar: "مثال: طبيب، رئيس قسم...",
        }),
        formPlaceholderLicenses: t({
            fr: "0",
            en: "0",
            ar: "0",
        }),
        formPlaceholderNeeds: t({
            fr: "Décrivez vos besoins...",
            en: "Describe your needs...",
            ar: "صف احتياجاتك...",
        }),

        // ---- COMPANY SIZES ----
        companySize1: t({
            fr: "1-10 employés",
            en: "1-10 employees",
            ar: "1-10 موظفين",
        }),
        companySize2: t({
            fr: "11-50 employés",
            en: "11-50 employees",
            ar: "11-50 موظف",
        }),
        companySize3: t({
            fr: "51-200 employés",
            en: "51-200 employees",
            ar: "51-200 موظف",
        }),
        companySize4: t({
            fr: "201-500 employés",
            en: "201-500 employees",
            ar: "201-500 موظف",
        }),
        companySize5: t({
            fr: "500+ employés",
            en: "500+ employees",
            ar: "500+ موظف",
        }),
    },
} satisfies DeclarationContent;

export default business6Content;