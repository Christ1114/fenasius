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

type LocaleContent = {
    navbar: NavbarList[];
    sections: {
        id: string;
        title: string;
        content: string;
    }[];
};

const CONTENT: Record<string, LocaleContent> = {
    fr: {
        navbar: [
            { index: 1,  title: "Le Service est fourni en l'état",                href: '#as-is' },
            { index: 2,  title: 'Propriété intellectuelle de FENASIUS AI',        href: '#propriete' },
            { index: 3,  title: 'Protection des données personnelles',            href: '#protection' },
            { index: 4,  title: 'Paiement des services',                          href: '#paiement' },
            { index: 5,  title: 'Résiliation, Suspension, Interruption',          href: '#resiliation' },
            { index: 6,  title: 'Exclusion de garanties',                         href: '#garanties' },
            { index: 7,  title: 'Indemnisation',                                  href: '#indemnisation' },
            { index: 8,  title: 'Limitation de responsabilité',                   href: '#responsabilite' },
            { index: 9,  title: "Signalement de violation de droits d'auteur",    href: '#signalement' },
            { index: 10, title: 'Résolution des litiges',                         href: '#litiges' },
            { index: 11, title: 'Dispositions générales',                         href: '#dispositions' },
            { index: 12, title: "Conditions spécifiques à l'application mobile",  href: '#mobile' },
            { index: 13, title: 'Conditions spécifiques par région',              href: '#regions' },
            { index: 14, title: 'Contact et Support',                             href: '#contact' },
        ],
        sections: [
            {
                id: 'as-is',
                title: "Le Service est fourni en l'état",
                content: "Le Service est fourni en l'état. FENASIUS AI et son intelligence artificielle FENASIUS sont mis à votre disposition tels quels, sans garantie d'exactitude absolue. Les réponses générées par FENASIUS ont une vocation d'accompagnement et non de diagnostic médical. FENASIUS AI ne saurait être tenue responsable des décisions prises sur la base des réponses de son IA."
            },
            {
                id: 'propriete',
                title: "Propriété intellectuelle de FENASIUS AI",
                content: "FENASIUS AI nom, marque déposée Menstrue Libre, logos, interface, algorithmes et modèle IA FENASIUS sont la propriété exclusive de FENASIUS AI. Toute reproduction ou exploitation non autorisée est strictement interdite et peut faire l'objet de poursuites judiciaires. En accédant à la plateforme, vous bénéficiez uniquement d'une licence personnelle, non exclusive et révocable."
            },
            {
                id: 'protection',
                title: "Protection des données personnelles",
                content: "La protection de vos données, notamment vos données de santé menstruelle, est une priorité absolue pour FENASIUS AI. Vos données sont chiffrées, anonymisées et ne sont jamais vendues à des tiers. Vous disposez à tout moment d'un droit d'accès, de rectification et de suppression de vos données personnelles."
            },
            {
                id: 'paiement',
                title: "Paiement des services",
                content: "Certaines fonctionnalités premium de FENASIUS AI sont accessibles via un abonnement payant. Nous acceptons les cartes bancaires internationales ainsi que les solutions Mobile Money disponibles en Côte d'Ivoire et en Afrique de l'Ouest. FENASIUS AI ne stocke jamais directement vos informations de paiement, l'ensemble des transactions étant traité par des prestataires certifiés."
            },
            {
                id: 'resiliation',
                title: "Résiliation, Suspension, Interruption",
                content: "Vous pouvez clôturer votre compte à tout moment depuis les paramètres de votre compte ou en nous contactant à info@fenasiusai.com. FENASIUS AI se réserve le droit de suspendre tout compte en cas de violation de ses conditions d'utilisation. Toute interruption significative du service vous sera communiquée dans les meilleurs délais."
            },
            {
                id: 'garanties',
                title: "Exclusion de garanties",
                content: "FENASIUS AI ne garantit pas que la plateforme sera exempte d'erreurs, d'interruptions ou d'inexactitudes dans les réponses générées par son IA FENASIUS. Les informations fournies par FENASIUS ne constituent en aucun cas un avis médical et ne remplacent pas une consultation auprès d'un professionnel de santé. Ces exclusions s'appliquent dans les limites autorisées par la législation applicable en République de Côte d'Ivoire."
            },
            {
                id: 'indemnisation',
                title: "Indemnisation",
                content: "En utilisant FENASIUS AI, vous acceptez d'indemniser la plateforme en cas de réclamation résultant de votre utilisation fautive du service. Cela inclut tout contenu illicite soumis à la plateforme, toute tentative de détournement de FENASIUS ou toute violation de nos conditions. Votre responsabilité peut être engagée conformément aux lois applicables en République de Côte d'Ivoire."
            },
            {
                id: 'responsabilite',
                title: "Limitation de responsabilité",
                content: "Dans les limites autorisées par la loi ivoirienne, FENASIUS AI ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation de la plateforme. Cela inclut les décisions prises sur la base des réponses de FENASIUS, les interruptions de service ou les pertes de données dues à un événement de force majeure. La responsabilité de FENASIUS AI est limitée au montant payé par l'utilisatrice au cours des 12 derniers mois."
            },
            {
                id: 'signalement',
                title: "Signalement de violation de droits d'auteur",
                content: "Si vous estimez qu'un contenu disponible sur FENASIUS AI porte atteinte à vos droits d'auteur, vous pouvez nous adresser un signalement formel à info@fenasiusai.com. Tout signalement doit contenir vos coordonnées, la description précise de l'oeuvre concernée et la localisation du contenu litigieux sur la plateforme. FENASIUS AI s'engage à traiter tout signalement dans un délai de 72 heures."
            },
            {
                id: 'litiges',
                title: "Résolution des litiges",
                content: "FENASIUS AI est une plateforme en constante évolution, portée par une mission d'innovation au service de la santé menstruelle féminine en Afrique. À ce titre, nos conditions d'utilisation et notre politique de confidentialité sont susceptibles d'être mises à jour régulièrement afin de refléter les évolutions de nos services, de notre technologie, de notre cadre légal ou de nos pratiques internes."
            },
            {
                id: 'dispositions',
                title: "Dispositions générales",
                content: "Les présentes conditions constituent l'intégralité de l'accord entre vous et FENASIUS AI concernant l'utilisation de la plateforme et de FENASIUS. En cas de disposition invalide, les autres clauses restent pleinement en vigueur. La version française des présentes conditions prévaut sur toute version traduite."
            },
            {
                id: 'mobile',
                title: "Conditions spécifiques à l'application mobile",
                content: "En accédant à FENASIUS AI via notre application mobile, vous acceptez en complément les conditions des plateformes de distribution App Store et Google Play. Les mises à jour de l'application peuvent être requises pour continuer à bénéficier de l'ensemble des fonctionnalités de FENASIUS. Certaines autorisations sur votre appareil (notifications, stockage) peuvent être nécessaires au bon fonctionnement de l'application."
            },
            {
                id: 'regions',
                title: "Conditions spécifiques par région",
                content: "FENASIUS AI est une plateforme ivoirienne dont les services sont accessibles dans plusieurs pays d'Afrique, sous réserve des dispositions légales locales impératives. Pour les utilisatrices résidant hors de Côte d'Ivoire, les conditions générales s'appliquent dans leur intégralité avec les adaptations légales nécessaires. Contactez-nous à info@fenasiusai.com en précisant votre pays de résidence pour toute question spécifique."
            },
            {
                id: 'contact',
                title: "Contact et Support",
                content: "Pour toute question ou réclamation relative à l'utilisation de la plateforme FENASIUS AI, contactez-nous à info@fenasiusai.com. Nous nous engageons à répondre à toute demande dans un délai maximum de 30 jours. Notre équipe est disponible pour vous accompagner et résoudre toute difficulté rencontrée sur la plateforme."
            },
        ]
    },
    en: {
        navbar: [
            { index: 1,  title: "Service provided as-is",                         href: '#as-is' },
            { index: 2,  title: 'Intellectual property of FENASIUS AI',            href: '#propriete' },
            { index: 3,  title: 'Personal data protection',                        href: '#protection' },
            { index: 4,  title: 'Payment for services',                            href: '#paiement' },
            { index: 5,  title: 'Termination, Suspension, Interruption',           href: '#resiliation' },
            { index: 6,  title: 'Disclaimer of warranties',                        href: '#garanties' },
            { index: 7,  title: 'Indemnification',                                 href: '#indemnisation' },
            { index: 8,  title: 'Limitation of liability',                         href: '#responsabilite' },
            { index: 9,  title: 'Copyright infringement reporting',                href: '#signalement' },
            { index: 10, title: 'Dispute resolution',                              href: '#litiges' },
            { index: 11, title: 'General provisions',                              href: '#dispositions' },
            { index: 12, title: 'Mobile application specific terms',               href: '#mobile' },
            { index: 13, title: 'Region-specific terms',                           href: '#regions' },
            { index: 14, title: 'Contact and Support',                             href: '#contact' },
        ],
        sections: [
            {
                id: 'as-is',
                title: "Service provided as-is",
                content: "The Service is provided as-is. FENASIUS AI and its artificial intelligence FENASIUS are made available to you as-is, without any guarantee of absolute accuracy. The responses generated by FENASIUS are intended for guidance purposes only and do not constitute medical diagnosis. FENASIUS AI cannot be held responsible for decisions made based on its AI responses."
            },
            {
                id: 'propriete',
                title: "Intellectual property of FENASIUS AI",
                content: "The FENASIUS AI name, Menstrue Libre trademark, logos, interface, algorithms and FENASIUS AI model are the exclusive property of FENASIUS AI. Any unauthorized reproduction or exploitation is strictly prohibited and may result in legal proceedings. By accessing the platform, you are granted only a personal, non-exclusive and revocable license."
            },
            {
                id: 'protection',
                title: "Personal data protection",
                content: "The protection of your data, including your menstrual health data, is an absolute priority for FENASIUS AI. Your data is encrypted, anonymized and never sold to third parties. You have the right at any time to access, correct and delete your personal data."
            },
            {
                id: 'paiement',
                title: "Payment for services",
                content: "Some premium features of FENASIUS AI are accessible through a paid subscription. We accept international bank cards as well as Mobile Money solutions available in Côte d'Ivoire and West Africa. FENASIUS AI never directly stores your payment information, as all transactions are processed by certified providers."
            },
            {
                id: 'resiliation',
                title: "Termination, Suspension, Interruption",
                content: "You may close your account at any time from your account settings or by contacting us at info@fenasiusai.com. FENASIUS AI reserves the right to suspend any account in the event of a violation of its terms of use. Any significant service interruption will be communicated to you as soon as possible."
            },
            {
                id: 'garanties',
                title: "Disclaimer of warranties",
                content: "FENASIUS AI does not guarantee that the platform will be free from errors, interruptions or inaccuracies in the responses generated by its FENASIUS AI. The information provided by FENASIUS does not constitute medical advice and does not replace a consultation with a healthcare professional. These exclusions apply to the extent permitted by applicable law in the Republic of Côte d'Ivoire."
            },
            {
                id: 'indemnisation',
                title: "Indemnification",
                content: "By using FENASIUS AI, you agree to indemnify the platform in the event of any claim resulting from your improper use of the service. This includes any illegal content submitted to the platform, any attempt to misuse FENASIUS, or any violation of our terms. Your liability may be engaged in accordance with applicable laws in the Republic of Côte d'Ivoire."
            },
            {
                id: 'responsabilite',
                title: "Limitation of liability",
                content: "To the extent permitted by Ivorian law, FENASIUS AI shall not be held liable for direct or indirect damages resulting from the use of the platform. This includes decisions made based on FENASIUS responses, service interruptions or data loss due to force majeure. FENASIUS AI liability is limited to the amount paid by the user in the last 12 months."
            },
            {
                id: 'signalement',
                title: "Copyright infringement reporting",
                content: "If you believe that content available on FENASIUS AI infringes your copyright, you may send us a formal notice at info@fenasiusai.com. Any notice must include your contact details, a precise description of the work concerned and the location of the disputed content on the platform. FENASIUS AI is committed to processing any notice within 72 hours."
            },
            {
                id: 'litiges',
                title: "Dispute resolution",
                content: "FENASIUS AI is a constantly evolving platform, driven by a mission of innovation in the service of women's menstrual health in Africa. As such, our terms of use and privacy policy are subject to regular updates to reflect changes in our services, technology, legal framework or internal practices."
            },
            {
                id: 'dispositions',
                title: "General provisions",
                content: "These terms constitute the entire agreement between you and FENASIUS AI regarding the use of the platform and FENASIUS. If any provision is found invalid, the remaining clauses remain fully in effect. The French version of these terms prevails over any translated version."
            },
            {
                id: 'mobile',
                title: "Mobile application specific terms",
                content: "By accessing FENASIUS AI through our mobile application, you additionally agree to the terms of the App Store and Google Play distribution platforms. Application updates may be required to continue benefiting from all FENASIUS features. Certain permissions on your device (notifications, storage) may be necessary for the proper functioning of the application."
            },
            {
                id: 'regions',
                title: "Region-specific terms",
                content: "FENASIUS AI is an Ivorian platform whose services are accessible in several African countries, subject to mandatory local legal provisions. For users residing outside Côte d'Ivoire, the general terms apply in their entirety with the necessary legal adaptations. Contact us at info@fenasiusai.com specifying your country of residence for any specific questions."
            },
            {
                id: 'contact',
                title: "Contact and Support",
                content: "For any questions or complaints regarding the use of the FENASIUS AI platform, contact us at info@fenasiusai.com. We are committed to responding to any request within a maximum of 30 days. Our team is available to assist you and resolve any difficulties encountered on the platform."
            },
        ]
    },
    ar: {
        navbar: [
            { index: 1,  title: "الخدمة مقدمة كما هي",                            href: '#as-is' },
            { index: 2,  title: 'الملكية الفكرية لـ FENASIUS AI',                  href: '#propriete' },
            { index: 3,  title: 'حماية البيانات الشخصية',                          href: '#protection' },
            { index: 4,  title: 'الدفع مقابل الخدمات',                             href: '#paiement' },
            { index: 5,  title: 'الإنهاء والتعليق والانقطاع',                      href: '#resiliation' },
            { index: 6,  title: 'إخلاء مسؤولية الضمانات',                          href: '#garanties' },
            { index: 7,  title: 'التعويض',                                          href: '#indemnisation' },
            { index: 8,  title: 'تحديد المسؤولية',                                 href: '#responsabilite' },
            { index: 9,  title: 'الإبلاغ عن انتهاك حقوق النشر',                   href: '#signalement' },
            { index: 10, title: 'تسوية النزاعات',                                  href: '#litiges' },
            { index: 11, title: 'الأحكام العامة',                                   href: '#dispositions' },
            { index: 12, title: 'شروط خاصة بتطبيق الهاتف المحمول',                href: '#mobile' },
            { index: 13, title: 'شروط خاصة بكل منطقة',                            href: '#regions' },
            { index: 14, title: 'التواصل والدعم',                                   href: '#contact' },
        ],
        sections: [
            {
                id: 'as-is',
                title: "الخدمة مقدمة كما هي",
                content: "تُقدَّم الخدمة كما هي. يُتاح FENASIUS AI وذكاؤه الاصطناعي FENASIUS كما هو، دون أي ضمان للدقة المطلقة. الردود التي يولّدها FENASIUS مخصصة للإرشاد فقط وليست تشخيصًا طبيًا. لا يمكن مساءلة FENASIUS AI عن القرارات المتخذة بناءً على ردود الذكاء الاصطناعي."
            },
            {
                id: 'propriete',
                title: "الملكية الفكرية لـ FENASIUS AI",
                content: "اسم FENASIUS AI، والعلامة التجارية Menstrue Libre، والشعارات، والواجهة، والخوارزميات، ونموذج الذكاء الاصطناعي FENASIUS هي ملك حصري لـ FENASIUS AI. يُحظر أي استنساخ أو استغلال غير مصرح به ويمكن أن يؤدي إلى ملاحقة قضائية. بالوصول إلى المنصة، تحصلين فقط على ترخيص شخصي وغير حصري وقابل للإلغاء."
            },
            {
                id: 'protection',
                title: "حماية البيانات الشخصية",
                content: "تُعدّ حماية بياناتك، بما في ذلك بيانات صحتك الحيضية، أولوية قصوى لـ FENASIUS AI. بياناتك مشفّرة ومجهّلة ولا تُباع أبدًا لأطراف ثالثة. يحق لك في أي وقت الوصول إلى بياناتك الشخصية وتصحيحها وحذفها."
            },
            {
                id: 'paiement',
                title: "الدفع مقابل الخدمات",
                content: "بعض الميزات المتميزة في FENASIUS AI متاحة عبر اشتراك مدفوع. نقبل بطاقات البنك الدولية وكذلك حلول Mobile Money المتوفرة في كوت ديفوار وغرب أفريقيا. لا تقوم FENASIUS AI بتخزين معلومات الدفع الخاصة بك مباشرةً، إذ تتم معالجة جميع المعاملات من قِبل مزودين معتمدين."
            },
            {
                id: 'resiliation',
                title: "الإنهاء والتعليق والانقطاع",
                content: "يمكنك إغلاق حسابك في أي وقت من إعدادات حسابك أو بالتواصل معنا على info@fenasiusai.com. تحتفظ FENASIUS AI بالحق في تعليق أي حساب في حالة انتهاك شروط الاستخدام. سيتم إبلاغك بأي انقطاع مهم في الخدمة في أقرب وقت ممكن."
            },
            {
                id: 'garanties',
                title: "إخلاء مسؤولية الضمانات",
                content: "لا تضمن FENASIUS AI أن المنصة ستكون خالية من الأخطاء أو الانقطاعات أو عدم الدقة في الردود التي يولّدها ذكاؤها الاصطناعي. المعلومات المقدمة من FENASIUS لا تشكل نصيحة طبية ولا تحل محل استشارة أخصائي رعاية صحية. تسري هذه الاستثناءات بالقدر الذي يسمح به القانون المعمول به في جمهورية كوت ديفوار."
            },
            {
                id: 'indemnisation',
                title: "التعويض",
                content: "باستخدام FENASIUS AI، توافقين على تعويض المنصة في حالة أي مطالبة ناتجة عن استخدامك غير السليم للخدمة. يشمل ذلك أي محتوى غير مشروع مُقدَّم إلى المنصة، أو أي محاولة لإساءة استخدام FENASIUS، أو أي انتهاك لشروطنا. قد تكون مسؤوليتك قائمة وفقًا للقوانين المعمول بها في جمهورية كوت ديفوار."
            },
            {
                id: 'responsabilite',
                title: "تحديد المسؤولية",
                content: "بالقدر الذي يسمح به القانون الإيفواري، لن تكون FENASIUS AI مسؤولة عن الأضرار المباشرة أو غير المباشرة الناتجة عن استخدام المنصة. يشمل ذلك القرارات المتخذة بناءً على ردود FENASIUS، وانقطاعات الخدمة، وفقدان البيانات بسبب القوة القاهرة. تقتصر مسؤولية FENASIUS AI على المبلغ الذي دفعته المستخدمة خلال الـ 12 شهرًا الماضية."
            },
            {
                id: 'signalement',
                title: "الإبلاغ عن انتهاك حقوق النشر",
                content: "إذا كنت تعتقدين أن محتوى متاحًا على FENASIUS AI ينتهك حقوق النشر الخاصة بك، يمكنك إرسال إشعار رسمي إلى info@fenasiusai.com. يجب أن يتضمن أي إشعار معلومات الاتصال بك، ووصفًا دقيقًا للعمل المعني، وموقع المحتوى المتنازع عليه على المنصة. تلتزم FENASIUS AI بمعالجة أي إشعار في غضون 72 ساعة."
            },
            {
                id: 'litiges',
                title: "تسوية النزاعات",
                content: "FENASIUS AI منصة في تطور مستمر، تحركها مهمة الابتكار في خدمة صحة المرأة الحيضية في أفريقيا. لذلك، قد تخضع شروط الاستخدام وسياسة الخصوصية لدينا لتحديثات منتظمة لتعكس التطورات في خدماتنا وتقنيتنا وإطارنا القانوني أو ممارساتنا الداخلية."
            },
            {
                id: 'dispositions',
                title: "الأحكام العامة",
                content: "تشكل هذه الشروط الاتفاقية الكاملة بينك وبين FENASIUS AI فيما يتعلق باستخدام المنصة و FENASIUS. في حالة وجود حكم غير صالح، تظل البنود الأخرى سارية المفعول بالكامل. تسود النسخة الفرنسية من هذه الشروط على أي نسخة مترجمة."
            },
            {
                id: 'mobile',
                title: "شروط خاصة بتطبيق الهاتف المحمول",
                content: "بالوصول إلى FENASIUS AI عبر تطبيق الهاتف المحمول الخاص بنا، توافقين أيضًا على شروط منصات التوزيع App Store وGoogle Play. قد تكون تحديثات التطبيق مطلوبة لمواصلة الاستفادة من جميع ميزات FENASIUS. قد تكون بعض الأذونات على جهازك (الإشعارات، التخزين) ضرورية للتشغيل السليم للتطبيق."
            },
            {
                id: 'regions',
                title: "شروط خاصة بكل منطقة",
                content: "FENASIUS AI منصة إيفوارية يمكن الوصول إلى خدماتها في عدة دول أفريقية، رهنًا بالأحكام القانونية المحلية الإلزامية. بالنسبة للمستخدمات المقيمات خارج كوت ديفوار، تسري الشروط العامة في كاملها مع التكيفات القانونية اللازمة. تواصلي معنا على info@fenasiusai.com مع تحديد بلد إقامتك لأي أسئلة محددة."
            },
            {
                id: 'contact',
                title: "التواصل والدعم",
                content: "لأي أسئلة أو شكاوى تتعلق باستخدام منصة FENASIUS AI، تواصلي معنا على info@fenasiusai.com. نلتزم بالرد على أي طلب في غضون 30 يومًا كحد أقصى. فريقنا متاح لمساعدتك وحل أي صعوبات تواجهينها على المنصة."
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

const PolicySection = React.memo(({ id, title, content }: { id: string; title: string; content: string }) => (
    <section id={id} className="flex flex-col gap-y-5 w-full scroll-mt-24" aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`} className="text-3xl md:text-5xl text-start text-zinc-100 font-normal">
            {title}
        </h2>
        <div className="font-normal text-zinc-400 space-y-4">
            <p>{content}</p>
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