"use client";
import FooterPage from '@/components/shared/footer';
import NavbarPage from '@/components/shared/navbar/navbar';
import { bebas_neue, montserrat } from '@/fonts/font';
import React, { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intlayer';

type NavbarList = {
    title: string;
    href?: string;
    index: number;
};

type Section = {
    id: string;
    title: string;
    content: string | string[];
};

type LocaleContent = {
    navbar: NavbarList[];
    sections: Section[];
};

const CONTENT: Record<string, LocaleContent> = {
    fr: {
        navbar: [
            { index: 1,  title: "Introduction",                                    href: '#introduction' },
            { index: 2,  title: "À propos de FENASIUS et Menstrues Libres",        href: '#a-propos' },
            { index: 3,  title: "Inscription et Accessibilité",                    href: '#inscription' },
            { index: 4,  title: "Utilisation de nos Services",                     href: '#utilisation' },
            { index: 5,  title: "Contenu utilisateur",                             href: '#contenu' },
            { index: 6,  title: "Protection des données personnelles",             href: '#protection' },
            { index: 7,  title: "Paiement des services",                           href: '#paiement' },
            { index: 8,  title: "Signalement de violation de droits d'auteur",     href: '#signalement' },
            { index: 9,  title: "Responsabilité et Garanties",                     href: '#responsabilite' },
            { index: 10, title: "Modifications des conditions",                    href: '#modifications' },
            { index: 11, title: "Contact et Support",                              href: '#contact' },
        ],
        sections: [
            {
                id: 'introduction',
                title: "Introduction",
                content: "Nous vous remercions de faire confiance à FENASIUS, votre assistante intelligente dédiée à la gestion de votre cycle menstruel et bien plus encore. Votre confidentialité et la protection de vos données personnelles sont des priorités absolues. Dans ce document, nous vous expliquons de manière claire et transparente comment vos données sont collectées, utilisées, stockées et protégées. Nous nous engageons à respecter votre vie privée tout en vous offrant une expérience personnalisée, utile et sécurisée, à la hauteur de la confiance que vous nous accordez."
            },
            {
                id: 'a-propos',
                title: "À propos de FENASIUS AI et Menstrues Libres",
                content: "FENASIUS AI est une plateforme intelligente dédiée à la santé menstruelle féminine, dotée de sa propre technologie d'intelligence artificielle LLM, traitement du langage naturel (NLP) et bien d'autres services innovants. Elle vous accompagne au quotidien pour mieux comprendre votre cycle menstruel, gérer vos symptômes et recevoir des conseils personnalisés, adaptés à votre corps et à vos besoins spécifiques. En s'appuyant sur des technologies de pointe, FENASIUS AI garantit une expérience fluide, intuitive et entièrement respectueuse de votre vie privée. FENASIUS AI est une startup ivoirienne, portée par la marque déposée Menstrue Libre un mouvement fort, ancré dans une mission essentielle : l'autonomisation de la femme ivoirienne, et plus largement de la femme africaine, sur les questions de sa santé menstruelle."
            },
            {
                id: 'inscription',
                title: "Inscription et Accessibilité",
                content: [
                    "Collecte et utilisation des données personnelles",
                    "Nous vous demandons de ne pas inclure d'informations personnelles sensibles dans vos échanges avec notre Intelligence Artificielle ; cependant, nous ne pouvons pas contrôler ce que vous choisissez de nous communiquer.",
                    "",
                    "Données de compte",
                    "Lors de la création de votre compte, nous collectons votre Nom et Prénom, vos coordonnées, vos identifiants de connexion et votre date de naissance. Pour accéder à certaines fonctionnalités liées à votre cycle menstruel, des informations complémentaires vous seront demandées avant de pouvoir continuer.",
                    "",
                    "Comment nous les collectons ? : Directement auprès de vous.",
                    "Comment nous les utilisons ? : Pour fournir, analyser et maintenir nos services ; vous accompagner et vous assister ; développer et améliorer la plateforme ; communiquer avec vous ; garantir la sécurité de nos services ; à des fins légales.",
                    "Comment nous les divulguons ? : À nos prestataires de services contractuels ; dans le cadre de transferts d'activité ; à des fins légales.",
                    "",
                    "Données de santé menstruelle",
                    "Dans le cadre de l'utilisation de FENASIUS AI, vous pouvez nous communiquer des informations relatives à votre cycle menstruel, vos symptômes, votre humeur et votre bien-être général. Ces données constituent le cœur de notre service de personnalisation.",
                    "",
                    "Comment nous les collectons ? : Directement auprès de vous, via les formulaires et outils de suivi de la plateforme.",
                    "Comment nous les utilisons ? : Pour vous fournir des conseils personnalisés ; analyser et améliorer nos algorithmes de suivi ; conduire des recherches anonymisées sur la santé menstruelle féminine en Afrique.",
                    "Comment nous les divulguons ? : Ces données ne sont jamais cédées à des tiers à des fins commerciales. Elles peuvent être partagées avec nos prestataires techniques dans le strict respect de la confidentialité, et à des fins légales uniquement.",
                    "",
                    "Données de contenu utilisateur",
                    "Vous pouvez fournir des informations personnelles dans vos messages, fichiers ou tout autre contenu soumis à notre assistant IA (« Entrées »). Les réponses générées par FENASIUS AI (« Sorties ») sont basées sur ces entrées. Si vous incluez des informations personnelles dans vos entrées, celles-ci peuvent être reproduites dans les sorties.",
                    "",
                    "Comment nous les collectons ? : Directement auprès de vous.",
                    "Comment nous les utilisons ? : Pour fournir, analyser et maintenir nos services ; améliorer nos modèles d'IA ; garantir la sécurité de la plateforme ; à des fins légales.",
                    "Comment nous les divulguons ? : À nos prestataires de services contractuels ; dans le cadre de transferts d'activité ; à des fins légales.",
                    "",
                    "Données techniques",
                    "Les données techniques comprennent des informations telles que votre adresse IP, le type d'appareil utilisé, le pays d'accès, le type et la version de navigateur, ainsi que des informations sur votre utilisation de la plateforme.",
                    "",
                    "Comment nous les collectons ? : Automatiquement, lors de votre utilisation de la plateforme, via des outils d'analyse.",
                    "Comment nous les utilisons ? : Pour maintenir et améliorer nos services ; analyser les usages ; garantir la sécurité de la plateforme.",
                    "Comment nous les divulguons ? : À nos prestataires de services contractuels ; à des fins légales.",
                    "",
                    "Données de retour et évaluations",
                    "Lorsque vous évaluez une réponse de FENASIUS AI (par exemple via un pouce haut ou bas), nous collectons ce retour afin d'améliorer continuellement la qualité de nos services.",
                    "",
                    "Comment nous les collectons ? : Directement auprès de vous, via les outils d'évaluation intégrés à la plateforme.",
                    "Comment nous les utilisons ? : Pour analyser et améliorer nos modèles d'IA ; maintenir la qualité du service ; à des fins de recherche interne.",
                    "Comment nous les divulguons ? : À nos prestataires de services contractuels ; à des fins légales.",
                    "",
                    "Données de communication",
                    "Si vous nous contactez par e-mail, via notre formulaire de contact ou sur nos réseaux sociaux, nous collectons les informations que vous choisissez de nous transmettre, notamment votre nom, votre adresse e-mail et le contenu de votre message.",
                    "",
                    "Comment nous les collectons ? : Directement auprès de vous.",
                    "Comment nous les utilisons ? : Pour répondre à vos demandes ; améliorer notre service client ; à des fins légales.",
                    "Comment nous les divulguons ? : À nos prestataires de services contractuels ; à des fins légales.",
                    "",
                    "Cookies et technologies similaires",
                    "Nous et nos prestataires utilisons des cookies et technologies similaires pour faire fonctionner et améliorer nos services. Ces données peuvent être utilisées pour simplifier votre expérience, analyser le trafic sur la plateforme et optimiser nos fonctionnalités.",
                    "",
                    "Comment nous les collectons ? : Automatiquement, lors de votre navigation sur la plateforme.",
                    "Comment nous les utilisons ? : Pour mémoriser vos préférences ; analyser l'utilisation de la plateforme ; améliorer l'expérience utilisatrice.",
                    "Comment nous les divulguons ? : À nos prestataires d'analyse ; à des fins légales. Vous pouvez gérer vos préférences cookies depuis les paramètres de votre navigateur.",
                    "",
                    "Données sensibles",
                    "FENASIUS AI reconnaît que les données de santé menstruelle constituent des données sensibles. Nous mettons en œuvre des mesures de sécurité renforcées pour leur protection. Nous ne collectons aucune autre donnée sensible (origine ethnique, opinions politiques, convictions religieuses, données biométriques, etc.) et vous demandons expressément de ne pas nous en communiquer."
                ]
            },
            {
                id: 'utilisation',
                title: "Utilisation de nos Services",
                content: "Lorsque vous utilisez FENASIUS AI, nous collectons et traitons certaines informations afin de vous offrir une expérience personnalisée, sécurisée et continuellement améliorée. Vous trouverez ci-dessous le détail de la manière dont nous utilisons vos données dans le cadre de l'utilisation de nos services.\n\nFourniture et personnalisation du service\nNous utilisons vos données pour faire fonctionner la plateforme FENASIUS AI et vous fournir des recommandations, conseils et analyses adaptés à votre profil menstruel et à vos besoins de santé.\n\nCe que cela inclut : La génération de réponses personnalisées par notre IA (fenasius) ; le suivi de votre cycle menstruel ; l'envoi de rappels et notifications liés à votre santé.\nBase légale : Exécution du contrat de service que vous avez accepté lors de votre inscription."
            },
            {
                id: 'contenu',
                title: "Contenu utilisateur",
                content: "Dans le cadre de votre utilisation de FENASIUS AI, vous êtes amenée à soumettre différents types de contenus à notre plateforme. Cette section vous explique comment nous traitons ces contenus, dans le respect de votre vie privée et de la confidentialité de vos données de santé."
            },
            {
                id: 'protection',
                title: "Protection des données personnelles",
                content: "La protection de vos données personnelles est au cœur des valeurs de FENASIUS AI. En tant que plateforme dédiée à la santé menstruelle féminine, nous traitons des données particulièrement sensibles et nous engageons à mettre en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir leur sécurité, leur confidentialité et leur intégrité."
            },
            {
                id: 'paiement',
                title: "Paiement des services",
                content: "Certains services et fonctionnalités premium de la plateforme FENASIUS AI sont accessibles via un abonnement payant. Nous avons à cœur de vous proposer des moyens de paiement adaptés aux réalités financières de la femme ivoirienne et africaine, qu'il s'agisse de solutions bancaires internationales ou de services de paiement mobile largement répandus sur le continent."
            },
            {
                id: 'signalement',
                title: "Signalement de violation de droits d'auteur",
                content: "FENASIUS AI respecte les droits de propriété intellectuelle et s'engage à traiter avec sérieux tout signalement de violation de droits d'auteur sur sa plateforme. Si vous estimez qu'un contenu disponible sur FENASIUS AI porte atteinte à vos droits d'auteur ou à ceux d'un tiers que vous représentez légalement, nous vous invitons à nous le signaler selon la procédure décrite ci-dessous."
            },
            {
                id: 'responsabilite',
                title: "Responsabilité et Garanties",
                content: "FENASIUS AI s'engage à vous offrir une plateforme fiable, sécurisée et de qualité. Cependant, en tant que plateforme technologique intégrant des agents d'intelligence artificielle, certaines limites de responsabilité doivent être clairement établies afin de garantir une relation transparente et équilibrée avec nos utilisatrices."
            },
            {
                id: 'modifications',
                title: "Modifications des conditions",
                content: "FENASIUS AI est une plateforme en constante évolution, portée par une mission d'innovation au service de la santé menstruelle féminine en Afrique. À ce titre, nos conditions d'utilisation et notre politique de confidentialité sont susceptibles d'être mises à jour régulièrement afin de refléter les évolutions de nos services, de notre technologie, de notre cadre légal ou de nos pratiques internes."
            },
            {
                id: 'contact',
                title: "Contact et Support",
                content: [
                    "Pour toute question, réclamation relative à la collecte, l'utilisation ou le stockage de vos données personnelles, ou si vous souhaitez exercer l'un de vos droits, vous pouvez nous contacter via les coordonnées suivantes :",
                    "",
                    "Adresse e-mail",
                    "info@fenasiusai.com",
                    "",
                    "Délégué à la Protection des Données (DPO)",
                    "Vous pouvez contacter notre Délégué à la Protection des Données pour toute demande relative à vos données personnelles.",
                    "",
                    "E-mail : info@fenasiusai.com",
                    "",
                    "Représentants régionaux",
                    "En fonction de votre localisation, vous pouvez également adresser vos demandes à nos représentants régionaux compétents.",
                    "",
                    "Afrique & Monde : FENASIUS AI, info@fenasiusai.com",
                    "République de Côte d'Ivoire : FENASIUS AI, Abidjan, République de Côte d'Ivoire, info@fenasiusai.com",
                    "Autres régions : Pour toute demande internationale, veuillez nous contacter à l'adresse e-mail ci-dessus en précisant votre pays de résidence.",
                    "",
                    "Délais de réponse",
                    "Nous nous engageons à répondre à toute demande relative à vos données personnelles dans les meilleurs délais et au plus tard dans un délai de 30 jours à compter de la réception de votre demande.",
                    "",
                    "Base légale : Respect de nos obligations d'information et de réponse envers nos utilisatrices, conformément aux lois applicables en République de Côte d'Ivoire."
                ]
            },
        ]
    },
    en: {
        navbar: [
            { index: 1,  title: "Introduction",                                    href: '#introduction' },
            { index: 2,  title: "About FENASIUS and Menstrues Libres",             href: '#a-propos' },
            { index: 3,  title: "Registration and Accessibility",                  href: '#inscription' },
            { index: 4,  title: "Use of our Services",                             href: '#utilisation' },
            { index: 5,  title: "User Content",                                    href: '#contenu' },
            { index: 6,  title: "Personal Data Protection",                        href: '#protection' },
            { index: 7,  title: "Payment for Services",                            href: '#paiement' },
            { index: 8,  title: "Copyright Infringement Reporting",                href: '#signalement' },
            { index: 9,  title: "Liability and Warranties",                        href: '#responsabilite' },
            { index: 10, title: "Modifications to Terms",                          href: '#modifications' },
            { index: 11, title: "Contact and Support",                             href: '#contact' },
        ],
        sections: [
            {
                id: 'introduction',
                title: "Introduction",
                content: "Thank you for trusting FENASIUS, your intelligent assistant dedicated to managing your menstrual cycle and much more. Your privacy and the protection of your personal data are absolute priorities. In this document, we explain clearly and transparently how your data is collected, used, stored and protected. We are committed to respecting your privacy while providing you with a personalized, useful and secure experience, worthy of the trust you place in us."
            },
            {
                id: 'a-propos',
                title: "About FENASIUS AI and Menstrues Libres",
                content: "FENASIUS AI is an intelligent platform dedicated to women's menstrual health, equipped with its own LLM artificial intelligence technology, natural language processing (NLP) and many other innovative services. It accompanies you daily to better understand your menstrual cycle, manage your symptoms and receive personalized advice, adapted to your body and your specific needs. By relying on cutting-edge technologies, FENASIUS AI guarantees a fluid, intuitive and fully privacy-respecting experience. FENASIUS AI is an Ivorian startup, carried by the registered trademark Menstrue Libre, a strong movement anchored in an essential mission: the empowerment of Ivorian women, and more broadly African women, on issues of their menstrual health."
            },
            {
                id: 'inscription',
                title: "Registration and Accessibility",
                content: [
                    "Collection and use of personal data",
                    "We ask you not to include sensitive personal information in your exchanges with our Artificial Intelligence; however, we cannot control what you choose to communicate to us.",
                    "",
                    "Account data",
                    "When creating your account, we collect your first and last name, contact details, login credentials and date of birth. To access certain features related to your menstrual cycle, additional information will be requested before you can proceed.",
                    "",
                    "How do we collect it? : Directly from you.",
                    "How do we use it? : To provide, analyze and maintain our services; to accompany and assist you; to develop and improve the platform; to communicate with you; to ensure the security of our services; for legal purposes.",
                    "How do we disclose it? : To our contractual service providers; as part of business transfers; for legal purposes.",
                    "",
                    "Menstrual health data",
                    "As part of using FENASIUS AI, you may provide us with information relating to your menstrual cycle, symptoms, mood and general well-being. This data constitutes the core of our personalization service.",
                    "",
                    "How do we collect it? : Directly from you, via the platform's forms and tracking tools.",
                    "How do we use it? : To provide you with personalized advice; to analyze and improve our tracking algorithms; to conduct anonymized research on women's menstrual health in Africa.",
                    "How do we disclose it? : This data is never transferred to third parties for commercial purposes. It may be shared with our technical providers in strict compliance with confidentiality, and for legal purposes only.",
                    "",
                    "User content data",
                    "You may provide personal information in your messages, files or any other content submitted to our AI assistant (\"Inputs\"). The responses generated by FENASIUS AI (\"Outputs\") are based on these inputs. If you include personal information in your inputs, it may be reproduced in the outputs.",
                    "",
                    "How do we collect it? : Directly from you.",
                    "How do we use it? : To provide, analyze and maintain our services; to improve our AI models; to ensure platform security; for legal purposes.",
                    "How do we disclose it? : To our contractual service providers; as part of business transfers; for legal purposes.",
                    "",
                    "Technical data",
                    "Technical data includes information such as your IP address, type of device used, country of access, browser type and version, as well as information about your use of the platform.",
                    "",
                    "How do we collect it? : Automatically, when you use the platform, via analysis tools.",
                    "How do we use it? : To maintain and improve our services; to analyze usage; to ensure platform security.",
                    "How do we disclose it? : To our contractual service providers; for legal purposes.",
                    "",
                    "Feedback and evaluation data",
                    "When you evaluate a FENASIUS AI response (for example via a thumbs up or down), we collect this feedback to continuously improve the quality of our services.",
                    "",
                    "How do we collect it? : Directly from you, via the evaluation tools integrated into the platform.",
                    "How do we use it? : To analyze and improve our AI models; to maintain service quality; for internal research purposes.",
                    "How do we disclose it? : To our contractual service providers; for legal purposes.",
                    "",
                    "Communication data",
                    "If you contact us by email, via our contact form or on our social networks, we collect the information you choose to provide us, including your name, email address and the content of your message.",
                    "",
                    "How do we collect it? : Directly from you.",
                    "How do we use it? : To respond to your requests; to improve our customer service; for legal purposes.",
                    "How do we disclose it? : To our contractual service providers; for legal purposes.",
                    "",
                    "Cookies and similar technologies",
                    "We and our providers use cookies and similar technologies to operate and improve our services. This data may be used to simplify your experience, analyze platform traffic and optimize our features.",
                    "",
                    "How do we collect it? : Automatically, when you browse the platform.",
                    "How do we use it? : To remember your preferences; to analyze platform usage; to improve user experience.",
                    "How do we disclose it? : To our analytics providers; for legal purposes. You can manage your cookie preferences from your browser settings.",
                    "",
                    "Sensitive data",
                    "FENASIUS AI recognizes that menstrual health data constitutes sensitive data. We implement enhanced security measures for its protection. We do not collect any other sensitive data (ethnic origin, political opinions, religious beliefs, biometric data, etc.) and expressly ask you not to provide us with such information."
                ]
            },
            {
                id: 'utilisation',
                title: "Use of our Services",
                content: "When you use FENASIUS AI, we collect and process certain information to provide you with a personalized, secure and continuously improved experience. Below is the detail of how we use your data as part of the use of our services.\n\nService provision and personalization\nWe use your data to operate the FENASIUS AI platform and provide you with recommendations, advice and analyses adapted to your menstrual profile and health needs.\n\nWhat this includes: The generation of personalized responses by our AI (fenasius); tracking of your menstrual cycle; sending reminders and notifications related to your health.\nLegal basis: Execution of the service contract you accepted when registering."
            },
            {
                id: 'contenu',
                title: "User Content",
                content: "As part of your use of FENASIUS AI, you may submit different types of content to our platform. This section explains how we process this content, respecting your privacy and the confidentiality of your health data."
            },
            {
                id: 'protection',
                title: "Personal Data Protection",
                content: "The protection of your personal data is at the heart of FENASIUS AI's values. As a platform dedicated to women's menstrual health, we process particularly sensitive data and are committed to implementing all necessary technical and organizational measures to guarantee its security, confidentiality and integrity."
            },
            {
                id: 'paiement',
                title: "Payment for Services",
                content: "Certain premium services and features of the FENASIUS AI platform are accessible via a paid subscription. We are committed to offering you payment methods adapted to the financial realities of Ivorian and African women, whether international banking solutions or mobile payment services widely used on the continent."
            },
            {
                id: 'signalement',
                title: "Copyright Infringement Reporting",
                content: "FENASIUS AI respects intellectual property rights and is committed to seriously processing any report of copyright infringement on its platform. If you believe that content available on FENASIUS AI infringes your copyright or that of a third party you legally represent, we invite you to report it according to the procedure described below."
            },
            {
                id: 'responsabilite',
                title: "Liability and Warranties",
                content: "FENASIUS AI is committed to providing you with a reliable, secure and quality platform. However, as a technological platform integrating artificial intelligence agents, certain limitations of liability must be clearly established to ensure a transparent and balanced relationship with our users."
            },
            {
                id: 'modifications',
                title: "Modifications to Terms",
                content: "FENASIUS AI is a constantly evolving platform, driven by a mission of innovation in the service of women's menstrual health in Africa. As such, our terms of use and privacy policy are subject to regular updates to reflect changes in our services, technology, legal framework or internal practices."
            },
            {
                id: 'contact',
                title: "Contact and Support",
                content: [
                    "For any questions or complaints regarding the collection, use or storage of your personal data, or if you wish to exercise any of your rights, you can contact us via the following contact details:",
                    "",
                    "Email address",
                    "info@fenasiusai.com",
                    "",
                    "Data Protection Officer (DPO)",
                    "You can contact our Data Protection Officer for any request relating to your personal data.",
                    "",
                    "Email: info@fenasiusai.com",
                    "",
                    "Regional representatives",
                    "Depending on your location, you can also address your requests to our competent regional representatives.",
                    "",
                    "Africa & World: FENASIUS AI, info@fenasiusai.com",
                    "Republic of Côte d'Ivoire: FENASIUS AI, Abidjan, Republic of Côte d'Ivoire, info@fenasiusai.com",
                    "Other regions: For any international request, please contact us at the email address above specifying your country of residence.",
                    "",
                    "Response times",
                    "We are committed to responding to any request relating to your personal data as soon as possible and no later than 30 days from receipt of your request.",
                    "",
                    "Legal basis: Compliance with our information and response obligations to our users, in accordance with applicable laws in the Republic of Côte d'Ivoire."
                ]
            },
        ]
    },
    ar: {
        navbar: [
            { index: 1,  title: "مقدمة",                                            href: '#introduction' },
            { index: 2,  title: "حول FENASIUS وMenstrues Libres",                   href: '#a-propos' },
            { index: 3,  title: "التسجيل وإمكانية الوصول",                          href: '#inscription' },
            { index: 4,  title: "استخدام خدماتنا",                                   href: '#utilisation' },
            { index: 5,  title: "محتوى المستخدم",                                    href: '#contenu' },
            { index: 6,  title: "حماية البيانات الشخصية",                            href: '#protection' },
            { index: 7,  title: "الدفع مقابل الخدمات",                               href: '#paiement' },
            { index: 8,  title: "الإبلاغ عن انتهاك حقوق النشر",                     href: '#signalement' },
            { index: 9,  title: "المسؤولية والضمانات",                               href: '#responsabilite' },
            { index: 10, title: "تعديلات الشروط",                                    href: '#modifications' },
            { index: 11, title: "التواصل والدعم",                                    href: '#contact' },
        ],
        sections: [
            {
                id: 'introduction',
                title: "مقدمة",
                content: "نشكرك على ثقتك في FENASIUS، مساعدتك الذكية المخصصة لإدارة دورتك الشهرية وأكثر من ذلك بكثير. خصوصيتك وحماية بياناتك الشخصية هي أولويات مطلقة. في هذا المستند، نشرح لك بوضوح وشفافية كيف يتم جمع بياناتك واستخدامها وتخزينها وحمايتها. نحن ملتزمون باحترام خصوصيتك مع تزويدك بتجربة مخصصة ومفيدة وآمنة، تليق بالثقة التي تمنحيننا إياها."
            },
            {
                id: 'a-propos',
                title: "حول FENASIUS AI وMenstrues Libres",
                content: "FENASIUS AI هي منصة ذكية مخصصة لصحة المرأة الحيضية، مزودة بتقنية الذكاء الاصطناعي LLM الخاصة بها، ومعالجة اللغة الطبيعية (NLP) والعديد من الخدمات المبتكرة الأخرى. ترافقك يوميًا لفهم دورتك الشهرية بشكل أفضل، وإدارة أعراضك وتلقي نصائح مخصصة، متكيفة مع جسمك واحتياجاتك الخاصة. بالاعتماد على التقنيات المتطورة، تضمن FENASIUS AI تجربة سلسة وبديهية وتحترم خصوصيتك تمامًا. FENASIUS AI هي شركة ناشئة إيفوارية، تحملها العلامة التجارية المسجلة Menstrue Libre، حركة قوية متجذرة في مهمة أساسية: تمكين المرأة الإيفوارية، وعلى نطاق أوسع المرأة الأفريقية، في قضايا صحتها الحيضية."
            },
            {
                id: 'inscription',
                title: "التسجيل وإمكانية الوصول",
                content: [
                    "جمع واستخدام البيانات الشخصية",
                    "نطلب منك عدم تضمين معلومات شخصية حساسة في تبادلاتك مع ذكائنا الاصطناعي؛ ومع ذلك، لا يمكننا التحكم فيما تختارين إرساله إلينا.",
                    "",
                    "بيانات الحساب",
                    "عند إنشاء حسابك، نجمع اسمك الأول واسم عائلتك، ومعلومات الاتصال، وبيانات تسجيل الدخول وتاريخ ميلادك. للوصول إلى بعض الميزات المتعلقة بدورتك الشهرية، سيُطلب منك معلومات إضافية قبل المتابعة.",
                    "",
                    "كيف نجمعها؟ : مباشرة منك.",
                    "كيف نستخدمها؟ : لتوفير خدماتنا وتحليلها وصيانتها؛ لمرافقتك ومساعدتك؛ لتطوير وتحسين المنصة؛ للتواصل معك؛ لضمان أمن خدماتنا؛ لأغراض قانونية.",
                    "كيف نكشف عنها؟ : لمزودي الخدمات المتعاقدين معنا؛ في إطار عمليات نقل الأعمال؛ لأغراض قانونية.",
                    "",
                    "بيانات الصحة الحيضية",
                    "في إطار استخدام FENASIUS AI، يمكنك تزويدنا بمعلومات تتعلق بدورتك الشهرية وأعراضك ومزاجك ورفاهيتك العامة. تشكل هذه البيانات جوهر خدمة التخصيص لدينا.",
                    "",
                    "كيف نجمعها؟ : مباشرة منك، عبر نماذج وأدوات التتبع في المنصة.",
                    "كيف نستخدمها؟ : لتزويدك بنصائح مخصصة؛ لتحليل وتحسين خوارزميات التتبع لدينا؛ لإجراء أبحاث مجهلة المصدر حول صحة المرأة الحيضية في أفريقيا.",
                    "كيف نكشف عنها؟ : لا يتم نقل هذه البيانات أبدًا إلى أطراف ثالثة لأغراض تجارية. يمكن مشاركتها مع مزودينا التقنيين في إطار الامتثال الصارم للسرية، ولأغراض قانونية فقط.",
                    "",
                    "بيانات محتوى المستخدم",
                    "يمكنك تقديم معلومات شخصية في رسائلك أو ملفاتك أو أي محتوى آخر مقدم إلى مساعد الذكاء الاصطناعي الخاص بنا (\"المدخلات\"). تستند الردود التي يولدها FENASIUS AI (\"المخرجات\") إلى هذه المدخلات. إذا قمت بتضمين معلومات شخصية في مدخلاتك، فقد يتم إعادة إنتاجها في المخرجات.",
                    "",
                    "كيف نجمعها؟ : مباشرة منك.",
                    "كيف نستخدمها؟ : لتوفير خدماتنا وتحليلها وصيانتها؛ لتحسين نماذج الذكاء الاصطناعي لدينا؛ لضمان أمن المنصة؛ لأغراض قانونية.",
                    "كيف نكشف عنها؟ : لمزودي الخدمات المتعاقدين معنا؛ في إطار عمليات نقل الأعمال؛ لأغراض قانونية.",
                    "",
                    "البيانات التقنية",
                    "تشمل البيانات التقنية معلومات مثل عنوان IP الخاص بك، ونوع الجهاز المستخدم، وبلد الوصول، ونوع المتصفح وإصداره، بالإضافة إلى معلومات حول استخدامك للمنصة.",
                    "",
                    "كيف نجمعها؟ : تلقائيًا، عند استخدامك للمنصة، عبر أدوات التحليل.",
                    "كيف نستخدمها؟ : لصيانة وتحسين خدماتنا؛ لتحليل الاستخدامات؛ لضمان أمن المنصة.",
                    "كيف نكشف عنها؟ : لمزودي الخدمات المتعاقدين معنا؛ لأغراض قانونية.",
                    "",
                    "بيانات التغذية الراجعة والتقييمات",
                    "عند تقييمك لرد FENASIUS AI (على سبيل المثال عبر الإبهام لأعلى أو لأسفل)، نجمع هذه التغذية الراجعة لتحسين جودة خدماتنا باستمرار.",
                    "",
                    "كيف نجمعها؟ : مباشرة منك، عبر أدوات التقييم المدمجة في المنصة.",
                    "كيف نستخدمها؟ : لتحليل وتحسين نماذج الذكاء الاصطناعي لدينا؛ للحفاظ على جودة الخدمة؛ لأغراض البحث الداخلي.",
                    "كيف نكشف عنها؟ : لمزودي الخدمات المتعاقدين معنا؛ لأغراض قانونية.",
                    "",
                    "بيانات التواصل",
                    "إذا اتصلت بنا عبر البريد الإلكتروني، أو عبر نموذج الاتصال الخاص بنا أو على شبكات التواصل الاجتماعي، نجمع المعلومات التي تختارين إرسالها إلينا، بما في ذلك اسمك وعنوان بريدك الإلكتروني ومحتوى رسالتك.",
                    "",
                    "كيف نجمعها؟ : مباشرة منك.",
                    "كيف نستخدمها؟ : للرد على طلباتك؛ لتحسين خدمة العملاء لدينا؛ لأغراض قانونية.",
                    "كيف نكشف عنها؟ : لمزودي الخدمات المتعاقدين معنا؛ لأغراض قانونية.",
                    "",
                    "ملفات تعريف الارتباط والتقنيات المماثلة",
                    "نحن ومزودونا نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتشغيل خدماتنا وتحسينها. يمكن استخدام هذه البيانات لتبسيط تجربتك، وتحليل حركة المرور على المنصة وتحسين وظائفنا.",
                    "",
                    "كيف نجمعها؟ : تلقائيًا، عند تصفحك للمنصة.",
                    "كيف نستخدمها؟ : لتذكر تفضيلاتك؛ لتحليل استخدام المنصة؛ لتحسين تجربة المستخدم.",
                    "كيف نكشف عنها؟ : لمزودي التحليلات لدينا؛ لأغراض قانونية. يمكنك إدارة تفضيلات ملفات تعريف الارتباط من إعدادات متصفحك.",
                    "",
                    "البيانات الحساسة",
                    "تقر FENASIUS AI بأن بيانات الصحة الحيضية تشكل بيانات حساسة. ننفذ تدابير أمنية معززة لحمايتها. لا نجمع أي بيانات حساسة أخرى (الأصل العرقي، الآراء السياسية، المعتقدات الدينية، البيانات البيومترية، إلخ) ونطلب منك صراحة عدم تزويدنا بها."
                ]
            },
            {
                id: 'utilisation',
                title: "استخدام خدماتنا",
                content: "عند استخدامك لـ FENASIUS AI، نجمع ونعالج معلومات معينة لنوفر لك تجربة مخصصة وآمنة ومحسنة باستمرار. ستجدين أدناه تفاصيل كيفية استخدامنا لبياناتك في إطار استخدام خدماتنا.\n\nتقديم الخدمة وتخصيصها\nنستخدم بياناتك لتشغيل منصة FENASIUS AI ونزودك بتوصيات ونصائح وتحليلات متكيفة مع ملفك الحيضي واحتياجاتك الصحية.\n\nما يشمل ذلك: توليد ردود مخصصة بواسطة ذكائنا الاصطناعي (fenasius)؛ تتبع دورتك الشهرية؛ إرسال تذكيرات وإشعارات متعلقة بصحتك.\nالأساس القانوني: تنفيذ عقد الخدمة الذي قبلت به عند التسجيل."
            },
            {
                id: 'contenu',
                title: "محتوى المستخدم",
                content: "في إطار استخدامك لـ FENASIUS AI، قد تقومين بتقديم أنواع مختلفة من المحتوى إلى منصتنا. يشرح هذا القسم كيف نعالج هذا المحتوى، مع احترام خصوصيتك وسرية بياناتك الصحية."
            },
            {
                id: 'protection',
                title: "حماية البيانات الشخصية",
                content: "حماية بياناتك الشخصية هي في صميم قيم FENASIUS AI. كمنصة مخصصة لصحة المرأة الحيضية، نعالج بيانات حساسة بشكل خاص ونلتزم بتنفيذ جميع التدابير التقنية والتنظيمية اللازمة لضمان أمنها وسريتها وسلامتها."
            },
            {
                id: 'paiement',
                title: "الدفع مقابل الخدمات",
                content: "بعض الخدمات والميزات المتميزة لمنصة FENASIUS AI متاحة عبر اشتراك مدفوع. نحن ملتزمون بتقديم وسائل دفع متكيفة مع الواقع المالي للمرأة الإيفوارية والأفريقية، سواء كانت حلولاً مصرفية دولية أو خدمات دفع عبر الهاتف المحمول واسعة الانتشار في القارة."
            },
            {
                id: 'signalement',
                title: "الإبلاغ عن انتهاك حقوق النشر",
                content: "تحترم FENASIUS AI حقوق الملكية الفكرية وتلتزم بمعالجة أي إبلاغ عن انتهاك حقوق النشر على منصتها بجدية. إذا كنت تعتقدين أن محتوى متاحًا على FENASIUS AI ينتهك حقوق النشر الخاصة بك أو حقوق طرف ثالث تمثلينه قانونيًا، ندعوك للإبلاغ عن ذلك وفقًا للإجراء الموضح أدناه."
            },
            {
                id: 'responsabilite',
                title: "المسؤولية والضمانات",
                content: "تلتزم FENASIUS AI بتزويدك بمنصة موثوقة وآمنة وعالية الجودة. ومع ذلك، كمنصة تكنولوجية تدمج وكلاء ذكاء اصطناعي، يجب وضع بعض حدود المسؤولية بوضوح لضمان علاقة شفافة ومتوازنة مع مستخدماتنا."
            },
            {
                id: 'modifications',
                title: "تعديلات الشروط",
                content: "FENASIUS AI هي منصة في تطور مستمر، تحركها مهمة الابتكار في خدمة صحة المرأة الحيضية في أفريقيا. لذلك، قد تخضع شروط الاستخدام وسياسة الخصوصية الخاصة بنا لتحديثات منتظمة لتعكس التطورات في خدماتنا وتقنيتنا وإطارنا القانوني أو ممارساتنا الداخلية."
            },
            {
                id: 'contact',
                title: "التواصل والدعم",
                content: [
                    "لأي أسئلة أو شكاوى تتعلق بجمع أو استخدام أو تخزين بياناتك الشخصية، أو إذا كنت ترغبين في ممارسة أي من حقوقك، يمكنك التواصل معنا عبر معلومات الاتصال التالية:",
                    "",
                    "عنوان البريد الإلكتروني",
                    "info@fenasiusai.com",
                    "",
                    "مسؤول حماية البيانات (DPO)",
                    "يمكنك الاتصال بمسؤول حماية البيانات لدينا لأي طلب يتعلق ببياناتك الشخصية.",
                    "",
                    "البريد الإلكتروني: info@fenasiusai.com",
                    "",
                    "الممثلون الإقليميون",
                    "حسب موقعك، يمكنك أيضًا توجيه طلباتك إلى ممثلينا الإقليميين المختصين.",
                    "",
                    "أفريقيا والعالم: FENASIUS AI، info@fenasiusai.com",
                    "جمهورية كوت ديفوار: FENASIUS AI، أبيدجان، جمهورية كوت ديفوار، info@fenasiusai.com",
                    "مناطق أخرى: لأي طلب دولي، يرجى الاتصال بنا على عنوان البريد الإلكتروني أعلاه مع تحديد بلد إقامتك.",
                    "",
                    "أوقات الاستجابة",
                    "نحن ملتزمون بالرد على أي طلب يتعلق ببياناتك الشخصية في أقرب وقت ممكن وفي موعد أقصاه 30 يومًا من استلام طلبك.",
                    "",
                    "الأساس القانوني: الامتثال لالتزاماتنا بالإعلام والرد تجاه مستخدماتنا، وفقًا للقوانين المعمول بها في جمهورية كوت ديفوار."
                ]
            },
        ]
    }
};

const TableOfContents = React.memo(({ items }: { items: NavbarList[] }) => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = useCallback(() => {
        const sections = items
            .map(item => document.getElementById(item.href?.replace('#', '') || ''))
            .filter(Boolean) as HTMLElement[];

        const scrollPosition = window.scrollY + 120;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(section.id);
                break;
            }
        }
    }, [items]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <nav
            className="bg-purple-300 border border-purple-300 w-full flex flex-col gap-y-3 p-5 rounded-lg mt-25 font-bold sticky top-25 max-h-[70vh] overflow-y-auto"
            aria-label="Table des matières"
        >
            <h2 className="text-sm italic text-zinc-900">Sur cette page</h2>
            {items.map((item) => {
                const sectionId = item.href?.replace('#', '') || '';
                const isActive = activeSection === sectionId;
                return (
                    <a
                        key={item.index}
                        href={item.href}
                        className={`text-xs transition-all duration-200 cursor-pointer hover:underline ${
                            isActive
                                ? 'text-pink-950 font-extrabold scale-105'
                                : 'text-black hover:text-pink-950 hover:translate-x-1'
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="flex items-center gap-2">
                            <span className="text-pink-950 font-bold">{item.index}</span>
                            <span>{item.title}</span>
                        </span>
                    </a>
                );
            })}
        </nav>
    );
});
TableOfContents.displayName = 'TableOfContents';

const PolicySection = React.memo(({ id, title, content }: { id: string; title: string; content: string | string[] }) => (
    <section id={id} className="flex flex-col gap-y-5 w-full scroll-mt-24" aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`} className="text-3xl md:text-5xl text-start text-zinc-100 font-normal">
            {title}
        </h2>
        <div className="font-normal text-zinc-400 space-y-4">
            {Array.isArray(content) ? (
                content.map((paragraph, index) => (
                    <p key={index} className={paragraph === '' ? 'h-4' : ''}>
                        {paragraph}
                    </p>
                ))
            ) : (
                content.split('\n').map((paragraph, index) => (
                    <p key={index} className={paragraph === '' ? 'h-4' : ''}>
                        {paragraph}
                    </p>
                ))
            )}
        </div>
    </section>
));
PolicySection.displayName = 'PolicySection';

const PrivacyPolicyPage = () => {
    const { locale } = useLocale();
    const content = CONTENT[locale] ?? CONTENT['fr'];

    return (
        <div className={`w-full min-h-screen flex flex-col ${bebas_neue.className} bg-pink-950`}>
            <header className="w-full pt-0">
                <NavbarPage />
            </header>
            <main className="w-full h-full flex flex-col lg:flex-row items-start justify-center gap-8 px-4 md:px-8 lg:px-15 flex-1">
                <aside className="w-full lg:w-72 shrink-0">
                    <TableOfContents items={content.navbar} />
                </aside>
                <div className={`flex flex-col gap-y-3 mt-10 lg:mt-25 w-full lg:flex-1 p-5 pb-20 ${montserrat.className}`}>
                    {content.sections.map((section) => (
                        <PolicySection
                            key={section.id}
                            id={section.id}
                            title={section.title}
                            content={section.content}
                        />
                    ))}
                </div>
            </main>
            <footer className="w-full bg-black/40 backdrop-blur-sm mt-auto">
                <FooterPage />
            </footer>
        </div>
    );
};

export default PrivacyPolicyPage;