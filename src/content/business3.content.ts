'use client';
import { t, type DeclarationContent } from "intlayer";

const business3Content = {
    key: "thirdcomponent",
    content: {
       
        scrollHere: t({
            fr: "Scrollez ici",
            en: "Scroll here",
            ar: "مرر هنا",
        }),

    
        syncing: t({
            fr: "Connexion en cours",
            en: "Syncing...",
            ar: "جاري المزامنة...",
        }),
        encryptionActive: t({
            fr: "Chiffrement activé...",
            en: "Encryption active...",
            ar: "التشفير نشط...",
        }),
        analyzing: t({
            fr: "Analyse en cours...",
            en: "Analyzing...",
            ar: "جاري التحليل...",
        }),
        generating: t({
            fr: "Génération en cours...",
            en: "Generating...",
            ar: "جاري التوليد...",
        }),

      
        demoSyncPrompt: t({
            fr: "Synchronise mes données patientes avec Fenasius AI",
            en: "Sync my patient data with Fenasius AI",
            ar: "مزامنة بيانات مرضاي مع Fenasius AI",
        }),
        demoVaultPrompt: t({
            fr: "Initialise le coffre-fort sécurisé pour mon organisation",
            en: "Initialize secure vault for my organization",
            ar: "تهيئة الخزنة الآمنة لمؤسستي",
        }),
        demoSearchPrompt: t({
            fr: "Recherche dans mes documents et e-mails récents",
            en: "Search my recent documents and emails",
            ar: "البحث في مستنداتي ورسائلي الإلكترونية الأخيرة",
        }),
        demoOutputPrompt: t({
            fr: "Génère un rapport menstruel en PDF pour mes patientes",
            en: "Generate a menstrual report PDF for my patients",
            ar: "إنشاء تقرير دورة شهرية PDF لمريضاتي",
        }),

     
        vaultEncryption: t({
            fr: "Chiffrement",
            en: "Encryption",
            ar: "التشفير",
        }),
        vaultEncryptionValue: t({
            fr: "AES-256-GCM",
            en: "AES-256-GCM",
            ar: "AES-256-GCM",
        }),
        vaultKeys: t({
            fr: "Clés gérées par",
            en: "Keys managed by",
            ar: "المفاتيح المدارة من قبل",
        }),
        vaultKeysValue: t({
            fr: "Vous",
            en: "You",
            ar: "أنت",
        }),
        vaultIsolation: t({
            fr: "Isolation",
            en: "Isolation",
            ar: "العزل",
        }),
        vaultIsolationValue: t({
            fr: "Active",
            en: "Active",
            ar: "نشط",
        }),
        vaultAccess: t({
            fr: "Accès Fenasius",
            en: "Fenasius Access",
            ar: "وصول Fenasius",
        }),
        vaultAccessValue: t({
            fr: "Aucun",
            en: "None",
            ar: "لا يوجد",
        }),

     
        searchItem1Name: t({
            fr: "Rapport_santé_Q2.pdf",
            en: "Health_report_Q2.pdf",
            ar: "تقرير_صحي_الربع2.pdf",
        }),
        searchItem1Result: t({
            fr: "3 résultats",
            en: "3 results",
            ar: "3 نتائج",
        }),
        searchItem2Name: t({
            fr: "Email: Dr. Koné 12 juin",
            en: "Email: Dr. Koné June 12",
            ar: "بريد: د. كوني 12 يونيو",
        }),
        searchItem2Result: t({
            fr: "2 résultats",
            en: "2 results",
            ar: "2 نتائج",
        }),
        searchItem3Name: t({
            fr: "Notes_consultation.docx",
            en: "Consultation_notes.docx",
            ar: "ملاحظات_الاستشارة.docx",
        }),
        searchItem3Result: t({
            fr: "5 résultats",
            en: "5 results",
            ar: "5 نتائج",
        }),

      
        outputItem1: t({
            fr: "Présentation PowerPoint",
            en: "PowerPoint Presentation",
            ar: "عرض PowerPoint",
        }),
        outputItem2: t({
            fr: "Rapport PDF",
            en: "PDF Report",
            ar: "تقرير PDF",
        }),
        outputItem3: t({
            fr: "Tableau Excel",
            en: "Excel Spreadsheet",
            ar: "جدول Excel",
        }),
        outputItem4: t({
            fr: "E-mail résumé",
            en: "Summary Email",
            ar: "بريد ملخص",
        }),
        outputStatus: t({
            fr: "Prêt",
            en: "Ready",
            ar: "جاهز",
        }),

       
        card1Title: t({
            fr: "Connectez vos outils",
            en: "Connect your tools",
            ar: "اربط أدواتك",
        }),
        card1Description: t({
            fr: "Utilisez les connecteurs pour intégrer vos outils, automatiser vos flux de travail et rendre votre environnement de travail plus efficace.",
            en: "Use connectors to integrate your tools, automate your workflows and make your work environment more efficient.",
            ar: "استخدم الموصلات لدمج أدواتك، وأتمتة سير العمل وجعل بيئة عملك أكثر كفاءة.",
        }),
        card1Item1: t({
            fr: "Salesforce, HubSpot, Slack, Notion, et bien plus",
            en: "Salesforce, HubSpot, Slack, Notion, and more",
            ar: "Salesforce، HubSpot، Slack، Notion، والمزيد",
        }),
        card1Item2: t({
            fr: "Lisez et mettez à jour les enregistrements de bout en bout",
            en: "Read and update records end-to-end",
            ar: "قراءة وتحديث السجلات من البداية إلى النهاية",
        }),
        card1Item3: t({
            fr: "Apportez votre propre serveur MCP",
            en: "Bring your own MCP server",
            ar: "أحضر خادم MCP الخاص بك",
        }),

        card2Title: t({
            fr: "Coffre-fort d'entreprise sécurisé",
            en: "Secure enterprise vault",
            ar: "خزنة مؤسسية آمنة",
        }),
        card2Description: t({
            fr: "Vos données sont chiffrées avec vos clés, sous votre contrôle, et isolées de tous les autres clients.",
            en: "Your data is encrypted with your keys, under your control, and isolated from all other clients.",
            ar: "بياناتك مشفرة بمفاتيحك، تحت تحكمك، ومعزولة عن جميع العملاء الآخرين.",
        }),
        card2Item1: t({
            fr: "Chiffrement AES-256-GCM de bout en bout",
            en: "End-to-end AES-256-GCM encryption",
            ar: "تشفير AES-256-GCM من البداية إلى النهاية",
        }),
        card2Item2: t({
            fr: "Clés gérées exclusivement par vous",
            en: "Keys managed exclusively by you",
            ar: "المفاتيح المدارة حصرياً من قبلك",
        }),
        card2Item3: t({
            fr: "Isolation complète entre clients",
            en: "Complete isolation between clients",
            ar: "عزل كامل بين العملاء",
        }),

        card3Title: t({
            fr: "Recherche et connaissances en temps réel",
            en: "Real-time search and knowledge",
            ar: "بحث ومعرفة في الوقت الفعلي",
        }),
        card3Description: t({
            fr: "Connectez vos applications externes et permettez à Fenasius AI de rechercher dans les conversations, documents et e-mails.",
            en: "Connect your external apps and let Fenasius AI search across conversations, documents, and emails.",
            ar: "اربط تطبيقاتك الخارجية ودع Fenasius AI يبحث عبر المحادثات والمستندات ورسائل البريد الإلكتروني.",
        }),
        card3Item1: t({
            fr: "Recherche unifiée dans tous vos documents",
            en: "Unified search across all your documents",
            ar: "بحث موحد عبر جميع مستنداتك",
        }),
        card3Item2: t({
            fr: "Analyse des e-mails et conversations",
            en: "Email and conversation analysis",
            ar: "تحليل رسائل البريد الإلكتروني والمحادثات",
        }),
        card3Item3: t({
            fr: "Résultats en temps réel",
            en: "Real-time results",
            ar: "نتائج في الوقت الفعلي",
        }),

        card4Title: t({
            fr: "Vous n'êtes pas limité à un fil de discussion",
            en: "You're not limited to a chat thread",
            ar: "لست مقيداً بسلسلة محادثة",
        }),
        card4Description: t({
            fr: "Fenasius peut produire une variété de résultats adaptés à vos besoins professionnels.",
            en: "Fenasius can produce a variety of outputs tailored to your professional needs.",
            ar: "يمكن لـ Fenasius إنتاج مجموعة متنوعة من المخرجات المصممة لاحتياجاتك المهنية.",
        }),
        card4Item1: t({
            fr: "Présentations, feuilles de calcul et documents",
            en: "Presentations, spreadsheets and documents",
            ar: "عروض تقديمية وجداول بيانات ومستندات",
        }),
        card4Item2: t({
            fr: "Rapports PDF et e-mails automatisés",
            en: "PDF reports and automated emails",
            ar: "تقارير PDF ورسائل بريد إلكتروني آلية",
        }),
        card4Item3: t({
            fr: "Tableaux de bord et visualisations",
            en: "Dashboards and visualizations",
            ar: "لوحات معلومات ورسوم بيانية",
        }),
    },
} satisfies DeclarationContent;

export default business3Content;