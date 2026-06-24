'use client';
import { t, type DeclarationContent } from "intlayer";

const businessContent = {
    key: "firstcomponent",
    content: {
       
        heroTitle: t({
            fr: "Fenasius AI pour les professionnels",
            en: "Fenasius AI for professionals",
            ar: "Fenasius AI للمحترفين",
        }),
        heroDescription: t({
            fr: "Une IA frontier dédiée à la santé féminine. Accompagnez vos patientes avec des outils intelligents. Recherche médicale en temps réel, assistance vocale, imagerie et analyse visuelle, le tout dans un environnement sécurisé et conforme aux normes de santé.",
            en: "A frontier AI dedicated to women's health. Support your patients with intelligent tools. Real-time medical research, voice assistance, imaging and visual analysis, all in a secure environment compliant with health standards.",
            ar: "ذكاء اصطناعي متطور مخصص لصحة المرأة. ادعمي مريضاتك بأدوات ذكية. بحث طبي في الوقت الفعلي، مساعدة صوتية، تصوير وتحليل بصري، كل ذلك في بيئة آمنة ومتوافقة مع المعايير الصحية.",
        }),
        heroCta1: t({
            fr: "Essayer gratuitement",
            en: "Try for free",
            ar: "جرب مجاناً",
        }),
        heroCta2: t({
            fr: "Nous contacter",
            en: "Contact us",
            ar: "اتصل بنا",
        }),
        heroBadge: t({
            fr: "SSO & SCIM",
            en: "SSO & SCIM",
            ar: "SSO & SCIM",
        }),

        // ---- CHAT DEMO : CONVERSATIONS ----
        chatUser1: t({
            fr: "Ma patiente de 34 ans présente des cycles irréguliers. Que faire ?",
            en: "My 34-year-old patient has irregular cycles. What should I do?",
            ar: "مريضتي البالغة من العمر 34 عاماً تعاني من دورات غير منتظمة. ماذا أفعل؟",
        }),
        chatAi1: t({
            fr: "Bilan recommandé : dosage FSH, LH, AMH et prolactine entre J2 et J5 du cycle. Je peux générer l'ordonnance.",
            en: "Recommended workup: FSH, LH, AMH and prolactin levels between day 2 and day 5 of the cycle. I can generate the prescription.",
            ar: "التحاليل الموصى بها: FSH، LH، AMH والبرولاكتين بين اليوم 2 واليوم 5 من الدورة. يمكنني إنشاء الوصفة الطبية.",
        }),
        chatPill1: t({
            fr: "Générer ordonnance",
            en: "Generate prescription",
            ar: "إنشاء وصفة طبية",
        }),
        chatPill2: t({
            fr: "Voir protocole",
            en: "View protocol",
            ar: "عرض البروتوكول",
        }),
        chatPill3: t({
            fr: "Études récentes",
            en: "Recent studies",
            ar: "دراسات حديثة",
        }),
        chatUser2: t({
            fr: "Génère l'ordonnance.",
            en: "Generate the prescription.",
            ar: "أنشئ الوصفة الطبية.",
        }),
        chatAi2: t({
            fr: "Ordonnance créée pour Mme Edith — Bilan hormonal J2–J5. Référence: FEN-2026-0622. Prête à imprimer.",
            en: "Prescription created for Mrs. Edith — Hormonal workup D2–D5. Reference: FEN-2026-0622. Ready to print.",
            ar: "تم إنشاء الوصفة الطبية للسيدة إديث — تحليل هرموني اليوم 2-5. المرجع: FEN-2026-0622. جاهزة للطباعة.",
        }),
        chatPill4: t({
            fr: "Imprimer",
            en: "Print",
            ar: "طباعة",
        }),
        chatPill5: t({
            fr: "Ajouter au dossier",
            en: "Add to file",
            ar: "إضافة إلى الملف",
        }),

        chatUser3: t({
            fr: "J'observe une formation hypoéchogène à gauche.",
            en: "I observe a hypoechoic formation on the left.",
            ar: "ألاحظ تكويناً ناقص الصدى على اليسار.",
        }),
        chatAi3: t({
            fr: "Formation hypoéchogène ovarienne gauche : diagnostic différentiel — kyste fonctionnel, endométriome, ou tératome. Taille et contours ?",
            en: "Left ovarian hypoechoic formation: differential diagnosis — functional cyst, endometrioma, or teratoma. Size and contours?",
            ar: "تكوين ناقص الصدى على المبيض الأيسر: تشخيص تفريقي — كيس وظيفي، بطانة رحمية مهاجرة، أو ورم مسخي. الحجم والحدود؟",
        }),
        chatPill6: t({
            fr: "Critères IOTA",
            en: "IOTA criteria",
            ar: "معايير IOTA",
        }),
        chatPill7: t({
            fr: "Comparer images",
            en: "Compare images",
            ar: "مقارنة الصور",
        }),
        chatUser4: t({
            fr: "30mm, contours réguliers, contenu homogène.",
            en: "30mm, regular contours, homogeneous content.",
            ar: "30 مم، حدود منتظمة، محتوى متجانس.",
        }),
        chatAi4: t({
            fr: "Profil compatible avec un kyste fonctionnel. Contrôle échographique à J1 du cycle suivant recommandé. Probabilité maligne faible selon score IOTA simple.",
            en: "Profile compatible with a functional cyst. Follow-up ultrasound on D1 of the next cycle recommended. Low malignant probability according to IOTA simple score.",
            ar: "الملف متوافق مع كيس وظيفي. يوصى بمتابعة بالموجات فوق الصوتية في اليوم الأول من الدورة التالية. احتمالية خبيثة منخفضة وفقاً لمعيار IOTA البسيط.",
        }),
        chatPill8: t({
            fr: "Planifier suivi",
            en: "Schedule follow-up",
            ar: "جدولة المتابعة",
        }),
        chatPill9: t({
            fr: "Rapport complet",
            en: "Full report",
            ar: "تقرير كامل",
        }),

        chatUser5: t({
            fr: "Les dernières recommandations sur l'endométriose stade III ?",
            en: "Latest recommendations on stage III endometriosis?",
            ar: "آخر التوصيات حول الانتباذ البطاني الرحمي المرحلة الثالثة؟",
        }),
        chatAi5: t({
            fr: "Selon HAS 2024 et ESHRE 2023 : prise en charge multimodale privilégiée — progestatifs en 1ère ligne, coelioscopie si échec médical.",
            en: "According to HAS 2024 and ESHRE 2023: multimodal management preferred — progestins as first line, laparoscopy if medical treatment fails.",
            ar: "وفقاً لـ HAS 2024 و ESHRE 2023: يُفضل العلاج متعدد الوسائط — البروجستينات كخط أول، تنظير البطن إذا فشل العلاج الطبي.",
        }),
        chatPill10: t({
            fr: "HAS 2024",
            en: "HAS 2024",
            ar: "HAS 2024",
        }),
        chatPill11: t({
            fr: "ESHRE Guidelines",
            en: "ESHRE Guidelines",
            ar: "إرشادات ESHRE",
        }),
        chatPill12: t({
            fr: "Schémas thérapeutiques",
            en: "Therapeutic regimens",
            ar: "النظم العلاجية",
        }),
        chatUser6: t({
            fr: "Quelle molécule en première intention ?",
            en: "Which molecule as first-line treatment?",
            ar: "أي جزيء كعلاج أولي؟",
        }),
        chatAi6: t({
            fr: "Diénogest 2mg/j (Visanne®) — efficacité démontrée sur douleurs et lésions, bien toléré en long terme. Alternative : progestérone micronisée 200mg.",
            en: "Dienogest 2mg/day (Visanne®) — proven efficacy on pain and lesions, well tolerated long-term. Alternative: micronized progesterone 200mg.",
            ar: "دينوجيست 2 ملغ/يوم (Visanne®) — فعالية مثبتة على الألم والآفات، جيد التحمل على المدى الطويل. البديل: بروجسترون ميكروني 200 ملغ.",
        }),
        chatPill13: t({
            fr: "Contre-indications",
            en: "Contraindications",
            ar: "موانع الاستعمال",
        }),
        chatPill14: t({
            fr: "Alternatives",
            en: "Alternatives",
            ar: "بدائل",
        }),

        // ---- CHAT DEMO : BOUTONS FOOTER ----
        chatModeFast: t({
            fr: "Rapide",
            en: "Fast",
            ar: "سريع",
        }),
        chatPlaceholder: t({
            fr: "Comment puis-je vous aider ?",
            en: "How can I help you?",
            ar: "كيف يمكنني مساعدتك؟",
        }),
    },
} satisfies DeclarationContent; 

export default businessContent;