const PHONE_E164 = "250788800813";
const CONTACT_EMAIL = "kris.karisma@proton.me";
const LANG_KEY = "cc_lang";

const I18N = {
  en: {
    "meta.title": "Chris Charisma | Software & Website Designer and Developer",
    "meta.description":
      "Chris Charisma - Software & Website Designer and Developer. Luxury, modern web experiences built with clean code and premium design.",
    "skip": "Skip to content",
    "nav.homeAria": "Chris Charisma home",
    "nav.openMenuAria": "Open menu",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "lang.toFrenchAria": "Switch language to French",
    "lang.toEnglishAria": "Switch language to English",
    "hero.pill": "Full-Stack Software Developer",
    "hero.title": "Modern Web Applications <span class=\"amp\">&</span> Enterprise Software.",
    "hero.subtitle":
      "I build modern web applications, enterprise software, and digital solutions that help businesses operate smarter.",
    "hero.ctaWork": "View My Work",
    "hero.ctaContact": "Contact Me",
    "hero.ctaBook": "Book a Call",
    "hero.bookHref": "https://wa.me/250788800813?text=Hi%20Chris%2C%20I%27d%20like%20to%20book%20a%20call.",
    "hero.metaExperience": "Experience",
    "hero.metaExperienceValue": "4+ years",
    "hero.metaSpecialty": "Specialty",
    "hero.metaAvailability": "Availability",
    "hero.metaAvailabilityValue": "Open to projects",
    "hero.typingPhrases": ["Enterprise Software", "Full-Stack Development", "Scalable Systems", "Clean Architecture"],

    "summary.title": "Building software that helps businesses grow.",
    "summary.body": "I develop secure, scalable, and user-focused applications, from company websites to enterprise management systems, with an emphasis on clean architecture, excellent user experience, and long-term maintainability.",

    "about.title": "About Chris Charisma (Christien Iyamarere Toussaint)",
    "about.body":
      "I'm a Full-Stack Software Developer based in Kigali, Rwanda, specializing in building scalable web applications, business management systems, and modern digital experiences.<br /><br />Over the past four years, I've designed and developed production-ready solutions including ERP systems, inventory management systems, restaurant management platforms, and custom business websites that improve operational efficiency and user experience.<br /><br />I enjoy turning complex business requirements into clean, intuitive, and high-performing software using Laravel, Django, PHP, JavaScript, MySQL, Bootstrap, and modern frontend technologies.<br /><br />Beyond writing code, I focus on software architecture, performance optimization, responsive UI/UX, API integration, database design, and creating products that deliver measurable business value.<br /><br />I'm always excited to collaborate with ambitious teams, learn new technologies, and build software that makes a real impact.",
    "about.card1Title": "Clean architecture, modern stack",
    "about.card1Body":
      "I focus on software architecture, performance optimization, and maintainable code using proven web standards and modern frameworks.",
    "about.card2Title": "Premium design language",
    "about.card2Body":
      "Dark luxury palette, glassmorphism, soft gradients, and micro-interactions. Crafted to impress international clients.",
    "about.card3Title": "Business impact delivery",
    "about.card3Body":
      "ERP systems, management dashboards, business websites, and custom software. Built to improve efficiency and scale with your goals.",

    "resume.title": "Resume",
    "resume.subtitle": "Professional experience and the work style you can expect on every project.",
    "resume.expTitle": "Experience",
    "resume.role1": "Freelance Web Designer & Developer",
    "resume.time1": "2021 - Present",
    "resume.org1": "Kigali • Remote",
    "resume.role1Bullet1":
      "Designed and developed premium websites for wellness, hospitality, and education brands",
    "resume.role1Bullet2":
      "Built responsive UIs with clean code, smooth interactions, and performance-first structure",
    "resume.role1Bullet3":
      "Handled deployment, updates, and client support through clear communication and fast turnaround",
    "resume.role2": "Front-End Development & UI Delivery",
    "resume.org2": "Web Projects • Remote",
    "resume.role2Bullet1": "Implemented modern layouts, components, and reusable UI patterns",
    "resume.role2Bullet2": "Improved mobile responsiveness, spacing, and cross-browser consistency",
    "resume.role2Bullet3": "Delivered clean handoff and iteration-ready code for future updates",
    "resume.eduTitle": "Training & Focus",
    "resume.eduBullet1": "Modern front-end development (HTML5, CSS3, JavaScript ES6+)",
    "resume.eduBullet2": "React & Next.js for scalable UI and fast web experiences",
    "resume.eduBullet3": "UI/UX structure: hierarchy, spacing, accessibility, and conversion-first layouts",
    "resume.eduBullet4": "SEO-ready structure, performance optimization, and clean deployment workflows",
    "resume.eduBullet5": "Ongoing support, maintenance, and iterative improvements",

    "process.title": "My Process",
    "process.subtitle": "A clear workflow that keeps projects smooth, fast, and premium.",
    "process.step1Title": "Discovery",
    "process.step1Body": "Goals, target audience, brand direction, and project scope.",
    "process.step2Title": "Design",
    "process.step2Body": "Premium UI, clean layout, and conversion-focused structure.",
    "process.step3Title": "Build",
    "process.step3Body": "Responsive development with modern standards and smooth interactions.",
    "process.step4Title": "Launch",
    "process.step4Body": "Deployment, analytics setup, and final checks before going live.",
    "process.step5Title": "Support",
    "process.step5Body": "Updates, improvements, and ongoing help when you need it.",

    "skills.title": "Skills",
    "skills.subtitle": "Tools & capabilities used to build premium web experiences.",
    "skills.feTitle": "Front-End Development",
    "skills.feDesc": "Building fast, responsive, and interactive user interfaces.",
    "skills.coreTech": "Core Technologies",
    "skills.capabilities": "Capabilities",
    "skills.feCap1": "Responsive and mobile-first design",
    "skills.feCap2": "Component-based architecture",
    "skills.feCap3": "Dynamic and interactive interfaces",
    "skills.feCap4": "Modern UI animations and transitions",
    "skills.feCap5": "Cross-browser compatibility",
    "skills.fwTitle": "Modern Web Frameworks",
    "skills.fwDesc": "Using powerful frameworks to build scalable and high-performance applications.",
    "skills.technologies": "Technologies",
    "skills.fwCap1": "Single Page Applications (SPA)",
    "skills.fwCap2": "Server-Side Rendering (SSR)",
    "skills.fwCap3": "Static Site Generation (SSG)",
    "skills.fwCap4": "Reusable component systems",
    "skills.fwCap5": "High-performance web applications",
    "skills.uxTitle": "UI / UX Design",
    "skills.uxDesc": "Focus on creating visually elegant and user-friendly experiences.",
    "skills.tools": "Tools",
    "skills.uxCap1": "Wireframing and prototyping",
    "skills.uxCap2": "Visual design systems",
    "skills.uxCap3": "Typography and layout design",
    "skills.uxCap4": "User-centered interface design",
    "skills.devTitle": "Website Development",
    "skills.devDesc": "Building scalable and functional websites tailored to business needs.",
    "skills.devCap1": "Business websites",
    "skills.devCap2": "Booking and service websites",
    "skills.devCap3": "Portfolio and personal brand websites",
    "skills.devCap4": "Landing pages",
    "skills.devCap5": "Custom website redesigns",
    "skills.cmsTitle": "CMS & Website Builders",
    "skills.cmsDesc": "Platforms used to deliver flexible and easily manageable websites.",
    "skills.cmsCap1": "Theme customization",
    "skills.cmsCap2": "Plugin integration",
    "skills.cmsCap3": "Client-friendly content management",
    "skills.dbTitle": "Database & Backend Integration",
    "skills.dbDesc": "Connecting websites with dynamic data and management systems.",
    "skills.dbCap1": "Database integration",
    "skills.dbCap2": "Form processing",
    "skills.dbCap3": "Dynamic content management",
    "skills.dbCap4": "Admin dashboard functionality",
    "skills.optTitle": "Performance & Optimization",
    "skills.optDesc": "Ensuring fast, secure, and high-performing websites.",
    "skills.optCap1": "SEO-friendly development",
    "skills.optCap2": "Page speed optimization",
    "skills.optCap3": "Clean and maintainable code",
    "skills.optCap4": "Secure hosting and deployment",
    "skills.clientTitle": "Client Communication & Delivery",
    "skills.clientDesc": "Providing smooth collaboration and professional delivery.",
    "skills.clientCap1": "Project planning and consultation",
    "skills.clientCap2": "Client requirement analysis",
    "skills.clientCap3": "Ongoing website maintenance",
    "skills.clientCap4": "WhatsApp and remote support",
    "skills.djTitle": "Backend & Languages",
    "skills.djDesc": "Building robust backends with modern languages and frameworks.",
    "skills.djCap1": "RESTful API development",
    "skills.djCap2": "ORM and database modeling",
    "skills.djCap3": "Authentication and authorization",
    "skills.djCap4": "Admin panels and dashboards",

    "projects.title": "Projects",
    "projects.subtitle": "Selected work presented in modern glass cards with premium hover interactions.",
    "projects.visit": "Visit Website",
    "projects.p1Desc": "A calm, modern site with clean visuals and smooth section flow.",
    "projects.p1Goal": "Goal: premium wellness brand presence",
    "projects.p1Work": "Work: clean UI, responsive layout, smooth section flow",
    "projects.p1Result": "Result: clear CTAs and refined visual hierarchy",
    "projects.p2Desc": "A business-ready layout with premium typography and strong hierarchy.",
    "projects.p2Goal": "Goal: trust-first spa presentation",
    "projects.p2Work": "Work: premium typography and section structure",
    "projects.p2Result": "Result: modern look with strong service clarity",
    "projects.p3Desc": "A clean, modern web presence with conversion-focused CTAs.",
    "projects.p3Goal": "Goal: promote bookings with clear CTAs",
    "projects.p3Work": "Work: modern landing layout and responsive sections",
    "projects.p3Result": "Result: smooth flow and improved mobile experience",
    "projects.p4Desc": "A polished service site with refined visuals and smooth interaction.",
    "projects.p4Goal": "Goal: premium service presentation",
    "projects.p4Work": "Work: clean sections, visuals, and user-friendly layout",
    "projects.p4Result": "Result: easy navigation and clear service details",
    "projects.p5Desc": "A premium education/service layout with elegant presentation.",
    "projects.p5Goal": "Goal: showcase programs and services clearly",
    "projects.p5Work": "Work: structured layout with strong hierarchy",
    "projects.p5Result": "Result: polished presentation with easy discovery",
    "projects.p6Desc": "A sleek website with clean sections and modern card interactions.",
    "projects.p6Goal": "Goal: modern school website experience",
    "projects.p6Work": "Work: clean sections and responsive layout",
    "projects.p6Result": "Result: smooth, professional site flow",
    "projects.p7Desc": "A modern wellness platform with clean design and smooth experience.",
    "projects.p7Goal": "Goal: modern wellness platform experience",
    "projects.p7Work": "Work: clean UI and responsive layout",
    "projects.p7Result": "Result: polished, user-friendly site flow",
    "projects.p8Desc": "AI-powered clinic management platform with smart scheduling, billing, and analytics.",
    "projects.p8Goal": "Goal: modern clinic management with AI",
    "projects.p8Work": "Work: full-stack development, AI receptionist, billing system",
    "projects.p8Result": "Result: smart, efficient healthcare platform",
    "projects.p9Desc": "Multi-school management system — students, attendance, exams, fees, and report cards.",
    "projects.p9Goal": "Goal: unified multi-school platform with RBAC",
    "projects.p9Work": "Work: Laravel backend, role-based access, activity logging",
    "projects.p9Result": "Result: comprehensive school administration solution",
    "projects.p10Desc": "Restaurant management system for menu, orders, reservations, and staff.",
    "projects.p10Goal": "Goal: streamline restaurant operations",
    "projects.p10Work": "Work: order management, reservation system, staff dashboard",
    "projects.p10Result": "Result: efficient restaurant management platform",
    "projects.p11Desc": "Role-based inventory management system for BRALIRWA distributors.",
    "projects.p11Goal": "Goal: distributor inventory tracking and control",
    "projects.p11Work": "Work: role-based access, stock tracking, reporting",
    "projects.p11Result": "Result: enterprise-grade inventory solution",

    "samples.title": "Sample Projects",
    "samples.subtitle": "Additional demos and prototypes showcasing layouts, UI, and interactions.",
    "samples.p1Desc": "A clean demo build with modern sections and premium styling.",
    "samples.p1Goal": "Goal: modern barber shop landing demo",
    "samples.p1Work": "Work: premium UI and responsive sections",
    "samples.p1Result": "Result: clean layout with clear CTAs",
    "samples.p2Desc": "A spa-style layout demo with calm visuals and clear hierarchy.",
    "samples.p2Goal": "Goal: wellness landing page layout",
    "samples.p2Work": "Work: calm visuals and clean section spacing",
    "samples.p2Result": "Result: premium look with strong readability",
    "samples.p3Desc": "Prototype UI exploring navigation, layout, and interaction patterns.",
    "samples.p3Goal": "Goal: UI exploration and layout testing",
    "samples.p3Work": "Work: navigation patterns and clean structure",
    "samples.p3Result": "Result: strong foundation for scalable pages",
    "samples.p4Desc": "A lightweight demo for a wellness landing page and CTA flow.",
    "samples.p4Goal": "Goal: clean wellness landing demo",
    "samples.p4Work": "Work: CTA-focused structure and responsive layout",
    "samples.p4Result": "Result: simple, modern, fast experience",
    "samples.p5Desc": "Barber shop demo featuring modern cards, sections, and buttons.",
    "samples.p5Goal": "Goal: modern barbershop demo UI",
    "samples.p5Work": "Work: cards, sections, and premium button styling",
    "samples.p5Result": "Result: clear hierarchy with modern interactions",

    "services.title": "Services",
    "services.subtitle": "High-end delivery tailored for businesses and personal brands.",
    "services.s1Title": "Website Design",
    "services.s1Desc": "Luxury UI with clear hierarchy and premium details.",
    "services.s2Title": "Website Development",
    "services.s2Desc": "Fast, responsive builds with smooth interactions and modern standards.",
    "services.s3Title": "Website Redesign",
    "services.s3Desc": "Upgrade outdated sites into premium, modern experiences.",
    "services.s4Title": "Landing Page Development",
    "services.s4Desc": "Conversion-focused pages with refined visuals and speed.",
    "services.s5Title": "Business Websites",
    "services.s5Desc": "Professional sites that build trust and grow your brand.",
    "services.s6Title": "E-Commerce Websites",
    "services.s6Desc": "Online stores with product listings, payments, and a smooth checkout flow.",
    "services.s7Title": "System Management",
    "services.s7Desc": "Admin dashboards and content systems to manage your operations efficiently.",
    "services.s8Title": "Software Development",
    "services.s8Desc": "Web-based software solutions built for reliability, scalability, and performance.",

    "audit.title": "Free 10-Min Website Audit",
    "audit.body": "Share your website link and I’ll send quick improvement suggestions for design, performance, and UX.",
    "audit.ctaForm": "Request Free Audit",
    "audit.ctaWhatsApp": "WhatsApp Audit",
    "audit.waHref":
      "https://wa.me/250788800813?text=Hi%20Chris%2C%20I%27d%20like%20a%20free%2010-minute%20website%20audit.%20Here%20is%20my%20link%3A",
    "audit.prefill":
      "Hi Chris, I'd like a free 10-minute website audit. Here is my website link:\n\nMy main goal is:\n\nThank you.",

    "quality.title": "Quality & Performance",
    "quality.subtitle": "Built to look premium, load fast, and work cleanly on every screen.",
    "quality.speedTitle": "Speed",
    "quality.speedBody": "Performance-focused structure, optimized assets, and smooth UX.",
    "quality.seoTitle": "SEO-Ready",
    "quality.seoBody": "Semantic structure and clean hierarchy that search engines understand.",
    "quality.a11yTitle": "Accessible",
    "quality.a11yBody": "Readable contrast, sensible navigation, and user-friendly interactions.",
    "quality.deployTitle": "Deployment",
    "quality.deployBody": "Secure hosting guidance and a stable, professional launch setup.",
    "quality.getTitle": "What You Get",
    "quality.get1": "Mobile-first responsive layout",
    "quality.get2": "Premium UI styling and clean spacing",
    "quality.get3": "Fast-loading pages and optimized media",
    "quality.get4": "Clear CTAs and conversion-focused structure",
    "quality.get5": "Launch support and basic maintenance guidance",

    "pricing.title": "Pricing",
    "pricing.subtitle": "Transparent starting points. Final quote depends on scope and features.",
    "pricing.p1Title": "Starter Landing Page",
    "pricing.p1Price": "Starting at $100",
    "pricing.p1Item1": "1-page conversion layout",
    "pricing.p1Item2": "Mobile-first responsive design",
    "pricing.p1Item3": "Contact + WhatsApp integration",
    "pricing.p2Title": "Business Website",
    "pricing.p2Price": "Starting at $300",
    "pricing.p2Item1": "Up to 5 pages",
    "pricing.p2Item2": "Premium UI and clean section flow",
    "pricing.p2Item3": "Basic SEO structure",
    "pricing.p3Title": "Premium Custom Build",
    "pricing.p3Price": "Starting at $800",
    "pricing.p3Item1": "Advanced UI and custom components",
    "pricing.p3Item2": "Integrations and dynamic features",
    "pricing.p3Item3": "Performance and UX refinement",

    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "Trusted by businesses and creators across Rwanda and beyond.",
    "testimonials.t1":
      "“Chris delivered a premium website for our school and made the programs easy to understand. The layout is clean, fast on mobile, and our inquiries increased because everything is now clear and professional.”",
    "testimonials.t2":
      "“We wanted a modern look that feels high-end and trustworthy. Chris handled the design and structure perfectly, and the site now represents our spa the way we imagined.”",
    "testimonials.t3":
      "“Chris built us a clean, modern site with clear calls-to-action. It loads quickly, looks great on every device, and our guests can find what they need in seconds.”",
    "testimonials.t1Author": "Zimulinda — Vera School of Massage Therapist & Nails Care",
    "testimonials.t2Author": "Peter — Izi Spa Kigali",
    "testimonials.t3Author": "Lydia — D'african BnB",

    "faq.title": "FAQ",
    "faq.subtitle": "Quick answers about timelines, workflow, and what you need to get started.",
    "faq.q1": "How long does a website take?",
    "faq.a1": "Most builds take 3–14 days depending on pages, features, and how fast content is provided.",
    "faq.q2": "What do you need from me to start?",
    "faq.a2": "Your business info, goals, inspiration examples, brand assets (logo/colors), and any text/photos you have.",
    "faq.q3": "Do you offer revisions?",
    "faq.a3": "Yes. Revisions are included during the design/build phase to make sure the final result matches your vision.",
    "faq.q4": "Can you help with hosting and domain?",
    "faq.a4": "Yes. I can recommend reliable hosting and guide you through domain setup and deployment.",
    "faq.q5": "Do you provide maintenance?",
    "faq.a5": "Yes. I can maintain your site, update content, and improve performance over time if needed.",
    "faq.q6": "How do payments work?",
    "faq.a6": "Typically a deposit to start and the balance on completion, depending on the project scope.",

    "contact.title": "Contact",
    "contact.subtitle": "Ready to build something premium? Send a message or start a WhatsApp chat.",
    "contact.nameLabel": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.phoneLabel": "Phone (WhatsApp)",
    "contact.phonePlaceholder": "+250...",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "you@example.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.sendWhatsApp": "Send via WhatsApp",
    "contact.sendEmail": "Send Email",
    "contact.quickTitle": "Quick Chat",
    "contact.quickBody": "Tap to start a WhatsApp conversation instantly.",
    "contact.quickCta": "WhatsApp Quick Chat",
    "contact.basedIn": "Based in",
    "contact.focus": "Focus",
    "contact.focusValue": "Full-stack web applications",
    "contact.phone": "+250 788 800 813",
    "contact.phoneHref": "tel:+250788800813",
    "contact.email": "kris.karisma@proton.me",
    "contact.emailHref": "mailto:kris.karisma@proton.me",
    "contact.location": "Kigali, Rwanda",
    "contact.waQuickHref": "https://wa.me/250788800813",

    "fabTop.aria": "Scroll to top",
    "footer.copy": "©",

    "contact.waGreeting": "Hello Chris Charisma,",
    "contact.fieldName": "Name",
    "contact.fieldPhone": "Phone",
    "contact.fieldEmail": "Email",
    "contact.mailSubject": "Portfolio Inquiry",
    "contact.noteWhatsAppMissing": "Please add your name, phone (WhatsApp), and message.",
    "contact.noteEmailMissing": "Please add your name, email, and message.",
    "contact.openWhatsApp": "Opening WhatsApp…",
    "contact.openEmail": "Opening email…",
  },
  fr: {
    "meta.title": "Chris Charisma | Designer & Développeur Web",
    "meta.description":
      "Chris Charisma - Designer & Développeur Web. Expériences web luxueuses et modernes, avec code propre et design premium.",
    "skip": "Aller au contenu",
    "nav.homeAria": "Accueil Chris Charisma",
    "nav.openMenuAria": "Ouvrir le menu",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.work": "Réalisations",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "lang.toFrenchAria": "Passer le site en français",
    "lang.toEnglishAria": "Passer le site en anglais",
    "hero.pill": "Développeur Full-Stack",
    "hero.title": "Applications web modernes <span class=\"amp\">&</span> logiciels enterprise.",
    "hero.subtitle":
      "Je construis des applications web modernes, des logiciels enterprise et des solutions digitales qui aident les entreprises à opérer plus intelligemment.",
    "hero.ctaWork": "Voir mes projets",
    "hero.ctaContact": "Me contacter",
    "hero.ctaBook": "Réserver un appel",
    "hero.bookHref":
      "https://wa.me/250788800813?text=Bonjour%20Chris%2C%20j%27aimerais%20r%C3%A9server%20un%20appel.",
    "hero.metaExperience": "Expérience",
    "hero.metaExperienceValue": "4+ ans",
    "hero.metaSpecialty": "Spécialité",
    "hero.metaAvailability": "Disponibilité",
    "hero.metaAvailabilityValue": "Disponible pour des projets",
    "hero.typingPhrases": ["Logiciels Enterprise", "Développement Full-Stack", "Systèmes scalables", "Architecture propre"],

    "summary.title": "Construire des logiciels qui font grandir les entreprises.",
    "summary.body": "Je développe des applications sécurisées, scalables et centrées sur l’utilisateur, des sites d’entreprise aux systèmes de gestion enterprise, en mettant l’accent sur une architecture propre, une excellente expérience utilisateur et une maintenabilité à long terme.",

    "about.title": "À propos de Chris Charisma (Christien Iyamarere Toussaint)",
    "about.body":
      "Je suis Développeur Full-Stack basé à Kigali, Rwanda, spécialisé dans la création d’applications web scalables, systèmes de gestion d’entreprise et expériences digitales modernes.<br /><br />Au cours des quatre dernières années, j’ai conçu et développé des solutions prêtes pour la production, notamment des systèmes ERP, des systèmes de gestion d’inventaire, des plateformes de gestion de restaurant et des sites web d’entreprise qui améliorent l’efficacité opérationnelle et l’expérience utilisateur.<br /><br />J’aime transformer des exigences techniques complexes en logiciels propres, intuitifs et performants en utilisant Laravel, Django, PHP, JavaScript, MySQL, Bootstrap et des technologies frontend modernes.<br /><br />Au-delà du code, je me concentre sur l’architecture logicielle, l’optimisation des performances, le UI/UX responsive, l’intégration d’API, la conception de bases de données et la création de produits qui génèrent une valeur mesurable.<br /><br />Je suis toujours enthousiaste à l’idée de collaborer avec des équipes ambitieuses, d’apprendre de nouvelles technologies et de construire des logiciels qui ont un impact réel.",
    "about.card1Title": "Architecture propre, stack moderne",
    "about.card1Body":
      "Je privilégie une structure maintenable, la performance et l’accessibilité, avec des standards web éprouvés et une approche design-first.",
    "about.card2Title": "Langage visuel premium",
    "about.card2Body":
      "Palette sombre luxueuse, glassmorphism, dégradés doux et micro-interactions. Pour impressionner des clients internationaux.",
    "about.card3Title": "Impact business",
    "about.card3Body":
      "Systèmes ERP, tableaux de bord, sites d’entreprise et logiciels sur mesure. Conçus pour améliorer l’efficacité et évoluer avec vos objectifs.",

    "resume.title": "Parcours",
    "resume.subtitle": "Expérience professionnelle et style de travail que vous pouvez attendre à chaque projet.",
    "resume.expTitle": "Expérience",
    "resume.role1": "Web Designer & Développeur freelance",
    "resume.time1": "2021 - Aujourd’hui",
    "resume.org1": "Kigali • À distance",
    "resume.role1Bullet1":
      "Conception et développement de sites premium pour des marques bien-être, hôtellerie et éducation",
    "resume.role1Bullet2":
      "Interfaces responsives avec code propre, interactions fluides et structure orientée performance",
    "resume.role1Bullet3":
      "Déploiement, mises à jour et support client avec communication claire et délais rapides",
    "resume.role2": "Front-end & Livraison UI",
    "resume.org2": "Projets web • À distance",
    "resume.role2Bullet1": "Mise en place de layouts modernes, composants et patterns UI réutilisables",
    "resume.role2Bullet2": "Amélioration du responsive mobile, des espacements et de la compatibilité navigateur",
    "resume.role2Bullet3": "Livraison de code propre, facile à faire évoluer pour des mises à jour futures",
    "resume.eduTitle": "Formation & Focus",
    "resume.eduBullet1": "Développement front-end moderne (HTML5, CSS3, JavaScript ES6+)",
    "resume.eduBullet2": "React & Next.js pour des interfaces scalables et des expériences rapides",
    "resume.eduBullet3": "Structure UI/UX : hiérarchie, spacing, accessibilité et layouts conversion-first",
    "resume.eduBullet4": "Structure SEO-ready, optimisation performance et workflows de déploiement propres",
    "resume.eduBullet5": "Support continu, maintenance et améliorations itératives",

    "process.title": "Mon processus",
    "process.subtitle": "Un workflow clair pour des projets fluides, rapides et premium.",
    "process.step1Title": "Découverte",
    "process.step1Body": "Objectifs, audience cible, direction de marque et périmètre du projet.",
    "process.step2Title": "Design",
    "process.step2Body": "UI premium, layout propre et structure orientée conversion.",
    "process.step3Title": "Développement",
    "process.step3Body": "Développement responsive avec standards modernes et interactions fluides.",
    "process.step4Title": "Mise en ligne",
    "process.step4Body": "Déploiement, configuration analytics et derniers checks avant publication.",
    "process.step5Title": "Support",
    "process.step5Body": "Mises à jour, améliorations et aide continue quand vous en avez besoin.",

    "skills.title": "Compétences",
    "skills.subtitle": "Outils & capacités pour créer des expériences web premium.",
    "skills.feTitle": "Développement front-end",
    "skills.feDesc": "Créer des interfaces rapides, responsives et interactives.",
    "skills.coreTech": "Technologies clés",
    "skills.capabilities": "Capacités",
    "skills.feCap1": "Design responsive et mobile-first",
    "skills.feCap2": "Architecture basée sur des composants",
    "skills.feCap3": "Interfaces dynamiques et interactives",
    "skills.feCap4": "Animations et transitions UI modernes",
    "skills.feCap5": "Compatibilité multi-navigateurs",
    "skills.fwTitle": "Frameworks web modernes",
    "skills.fwDesc": "Utiliser des frameworks puissants pour créer des apps scalables et performantes.",
    "skills.technologies": "Technologies",
    "skills.fwCap1": "Applications mono-page (SPA)",
    "skills.fwCap2": "Rendu côté serveur (SSR)",
    "skills.fwCap3": "Génération de site statique (SSG)",
    "skills.fwCap4": "Systèmes de composants réutilisables",
    "skills.fwCap5": "Applications web haute performance",
    "skills.uxTitle": "Design UI / UX",
    "skills.uxDesc": "Créer des expériences élégantes et faciles à utiliser.",
    "skills.tools": "Outils",
    "skills.uxCap1": "Wireframes et prototypage",
    "skills.uxCap2": "Systèmes de design visuel",
    "skills.uxCap3": "Typographie et design de layout",
    "skills.uxCap4": "Design centré utilisateur",
    "skills.devTitle": "Développement de sites",
    "skills.devDesc": "Créer des sites scalables et fonctionnels selon les besoins business.",
    "skills.devCap1": "Sites vitrine professionnels",
    "skills.devCap2": "Sites de réservation et services",
    "skills.devCap3": "Sites portfolio et personal branding",
    "skills.devCap4": "Landing pages",
    "skills.devCap5": "Refonte de site sur mesure",
    "skills.cmsTitle": "CMS & Website Builders",
    "skills.cmsDesc": "Plateformes pour livrer des sites flexibles et faciles à gérer.",
    "skills.cmsCap1": "Personnalisation de thèmes",
    "skills.cmsCap2": "Intégration de plugins",
    "skills.cmsCap3": "Gestion de contenu simple pour le client",
    "skills.dbTitle": "Base de données & intégration back-end",
    "skills.dbDesc": "Connecter les sites à des données dynamiques et systèmes de gestion.",
    "skills.dbCap1": "Intégration base de données",
    "skills.dbCap2": "Traitement de formulaires",
    "skills.dbCap3": "Gestion de contenu dynamique",
    "skills.dbCap4": "Fonctionnalités d’admin dashboard",
    "skills.optTitle": "Performance & optimisation",
    "skills.optDesc": "Garantir des sites rapides, sécurisés et performants.",
    "skills.optCap1": "Développement SEO-friendly",
    "skills.optCap2": "Optimisation vitesse de page",
    "skills.optCap3": "Code propre et maintenable",
    "skills.optCap4": "Hébergement et déploiement sécurisés",
    "skills.clientTitle": "Communication & livraison",
    "skills.clientDesc": "Une collaboration fluide et une livraison professionnelle.",
    "skills.clientCap1": "Planification et consultation projet",
    "skills.clientCap2": "Analyse des besoins client",
    "skills.clientCap3": "Maintenance continue du site",
    "skills.clientCap4": "Support WhatsApp et à distance",
    "skills.djTitle": "Back-end & Langages",
    "skills.djDesc": "Développer des backends robustes avec des langages et frameworks modernes.",
    "skills.djCap1": "Développement d'API REST",
    "skills.djCap2": "ORM et modélisation de bases de données",
    "skills.djCap3": "Authentification et autorisation",
    "skills.djCap4": "Panneaux d'administration et tableaux de bord",
    "projects.title": "Réalisations",
    "projects.subtitle": "Une sélection de projets dans des cartes glass modernes avec hover premium.",
    "projects.visit": "Visiter le site",
    "projects.p1Desc": "Un site calme et moderne, avec visuels propres et sections fluides.",
    "projects.p1Goal": "Objectif : présence premium pour une marque bien-être",
    "projects.p1Work": "Travail : UI propre, layout responsive, flow fluide",
    "projects.p1Result": "Résultat : CTA clairs et hiérarchie visuelle raffinée",
    "projects.p2Desc": "Un layout orienté business avec typographie premium et hiérarchie forte.",
    "projects.p2Goal": "Objectif : présentation spa axée confiance",
    "projects.p2Work": "Travail : typographie premium et structure des sections",
    "projects.p2Result": "Résultat : look moderne et services très clairs",
    "projects.p3Desc": "Une présence web propre et moderne avec CTA orientés conversion.",
    "projects.p3Goal": "Objectif : favoriser les réservations avec des CTA clairs",
    "projects.p3Work": "Travail : layout moderne et sections responsives",
    "projects.p3Result": "Résultat : flow fluide et meilleure expérience mobile",
    "projects.p4Desc": "Un site de services soigné avec visuels raffinés et interactions fluides.",
    "projects.p4Goal": "Objectif : présentation premium des services",
    "projects.p4Work": "Travail : sections propres, visuels et layout user-friendly",
    "projects.p4Result": "Résultat : navigation simple et détails de services clairs",
    "projects.p5Desc": "Un layout premium éducation/service avec une présentation élégante.",
    "projects.p5Goal": "Objectif : présenter programmes et services clairement",
    "projects.p5Work": "Travail : structure avec hiérarchie forte",
    "projects.p5Result": "Résultat : présentation soignée et découverte facile",
    "projects.p6Desc": "Un site élégant avec sections propres et interactions modernes.",
    "projects.p6Goal": "Objectif : expérience moderne pour un site d’école",
    "projects.p6Work": "Travail : sections propres et layout responsive",
    "projects.p6Result": "Résultat : flow professionnel et fluide",
    "projects.p7Desc": "Une plateforme wellness moderne au design épuré.",
    "projects.p7Goal": "Objectif : expérience wellness moderne",
    "projects.p7Work": "Travail : UI propre et layout responsive",
    "projects.p7Result": "Résultat : site fluide et agréable",
    "projects.p8Desc": "Plateforme de gestion de clinique IA — rendez-vous, facturation, analytics.",
    "projects.p8Goal": "Objectif : gestion de clinique moderne avec IA",
    "projects.p8Work": "Travail : full-stack, réceptionniste IA, système de facturation",
    "projects.p8Result": "Résultat : plateforme santé intelligente et efficace",
    "projects.p9Desc": "Système multi-écoles — élèves, présences, examens, frais, bulletins.",
    "projects.p9Goal": "Objectif : plateforme multi-écoles unifiée avec RBAC",
    "projects.p9Work": "Travail : backend Laravel, accès par rôles, journalisation",
    "projects.p9Result": "Résultat : solution complète d'administration scolaire",
    "projects.p10Desc": "Système de gestion de restaurant — menus, commandes, réservations, personnel.",
    "projects.p10Goal": "Objectif : optimiser les opérations du restaurant",
    "projects.p10Work": "Travail : gestion des commandes, réservations, tableau de bord staff",
    "projects.p10Result": "Résultat : plateforme de gestion restaurant efficace",
    "projects.p11Desc": "Système de gestion d'inventaire avec rôles pour les distributeurs BRALIRWA.",
    "projects.p11Goal": "Objectif : suivi et contrôle d'inventaire distributeur",
    "projects.p11Work": "Travail : accès par rôles, suivi des stocks, reporting",
    "projects.p11Result": "Résultat : solution d'inventaire niveau entreprise",
    "samples.title": "Projets démo",
    "samples.subtitle": "Démos et prototypes supplémentaires : layouts, UI et interactions.",
    "samples.p1Desc": "Une démo propre avec sections modernes et style premium.",
    "samples.p1Goal": "Objectif : démo landing moderne pour barber shop",
    "samples.p1Work": "Travail : UI premium et sections responsives",
    "samples.p1Result": "Résultat : layout propre et CTA clairs",
    "samples.p2Desc": "Une démo style spa avec visuels calmes et hiérarchie claire.",
    "samples.p2Goal": "Objectif : layout landing page bien-être",
    "samples.p2Work": "Travail : visuels calmes et spacing propre",
    "samples.p2Result": "Résultat : look premium et lecture facile",
    "samples.p3Desc": "Prototype UI : navigation, layout et patterns d’interaction.",
    "samples.p3Goal": "Objectif : exploration UI et tests de layout",
    "samples.p3Work": "Travail : patterns de navigation et structure propre",
    "samples.p3Result": "Résultat : base solide pour des pages scalables",
    "samples.p4Desc": "Une démo légère pour une landing page bien-être et un flow CTA.",
    "samples.p4Goal": "Objectif : démo bien-être propre",
    "samples.p4Work": "Travail : structure orientée CTA et responsive",
    "samples.p4Result": "Résultat : simple, moderne et rapide",
    "samples.p5Desc": "Démo barber shop avec cartes modernes, sections et boutons.",
    "samples.p5Goal": "Objectif : démo UI barbershop moderne",
    "samples.p5Work": "Travail : cartes, sections et boutons premium",
    "samples.p5Result": "Résultat : hiérarchie claire et interactions modernes",

    "services.title": "Services",
    "services.subtitle": "Une livraison haut de gamme pour entreprises et marques personnelles.",
    "services.s1Title": "Design de site web",
    "services.s1Desc": "UI luxueuse avec hiérarchie claire et détails premium.",
    "services.s2Title": "Développement web",
    "services.s2Desc": "Builds rapides et responsives, interactions fluides et standards modernes.",
    "services.s3Title": "Refonte de site",
    "services.s3Desc": "Transformer un site dépassé en expérience premium et moderne.",
    "services.s4Title": "Landing page",
    "services.s4Desc": "Pages orientées conversion, visuels raffinés et vitesse.",
    "services.s5Title": "Sites business",
    "services.s5Desc": "Sites professionnels qui renforcent la confiance et font grandir la marque.",
    "services.s6Title": "Sites e-commerce",
    "services.s6Desc": "Boutiques en ligne : produits, paiement et checkout fluide.",
    "services.s7Title": "Gestion de système",
    "services.s7Desc": "Dashboards admin et systèmes de contenu pour gérer vos opérations efficacement.",
    "services.s8Title": "Développement logiciel",
    "services.s8Desc": "Solutions web fiables, scalables et performantes.",

    "audit.title": "Audit gratuit de 10 minutes",
    "audit.body": "Partagez le lien de votre site et je vous enverrai des suggestions rapides (design, performance, UX).",
    "audit.ctaForm": "Demander l’audit",
    "audit.ctaWhatsApp": "Audit WhatsApp",
    "audit.waHref":
      "https://wa.me/250788800813?text=Bonjour%20Chris%2C%20j%27aimerais%20un%20audit%20gratuit%20de%2010%20minutes.%20Voici%20mon%20lien%20%3A",
    "audit.prefill":
      "Bonjour Chris, j’aimerais un audit gratuit de 10 minutes. Voici le lien de mon site :\n\nMon objectif principal est :\n\nMerci.",

    "quality.title": "Qualité & performance",
    "quality.subtitle": "Conçu pour être premium, charger vite et fonctionner parfaitement sur tous les écrans.",
    "quality.speedTitle": "Vitesse",
    "quality.speedBody": "Structure orientée performance, assets optimisés et UX fluide.",
    "quality.seoTitle": "SEO prêt",
    "quality.seoBody": "Structure sémantique et hiérarchie claire comprise par les moteurs de recherche.",
    "quality.a11yTitle": "Accessible",
    "quality.a11yBody": "Contraste lisible, navigation logique et interactions user-friendly.",
    "quality.deployTitle": "Déploiement",
    "quality.deployBody": "Conseils d’hébergement sécurisé et mise en ligne stable et professionnelle.",
    "quality.getTitle": "Ce que vous obtenez",
    "quality.get1": "Layout responsive mobile-first",
    "quality.get2": "UI premium et espacements propres",
    "quality.get3": "Pages rapides et médias optimisés",
    "quality.get4": "CTA clairs et structure orientée conversion",
    "quality.get5": "Support de mise en ligne et conseils de maintenance de base",

    "pricing.title": "Tarifs",
    "pricing.subtitle": "Des prix de départ transparents. Le devis final dépend du scope et des fonctionnalités.",
    "pricing.p1Title": "Landing page",
    "pricing.p1Price": "À partir de 100 $",
    "pricing.p1Item1": "Layout 1 page orienté conversion",
    "pricing.p1Item2": "Design responsive mobile-first",
    "pricing.p1Item3": "Intégration Contact + WhatsApp",
    "pricing.p2Title": "Site business",
    "pricing.p2Price": "À partir de 300 $",
    "pricing.p2Item1": "Jusqu’à 5 pages",
    "pricing.p2Item2": "UI premium et flow de sections propre",
    "pricing.p2Item3": "Structure SEO de base",
    "pricing.p3Title": "Build premium sur mesure",
    "pricing.p3Price": "À partir de 800 $",
    "pricing.p3Item1": "UI avancée et composants sur mesure",
    "pricing.p3Item2": "Intégrations et fonctionnalités dynamiques",
    "pricing.p3Item3": "Optimisation performance & UX",

    "testimonials.title": "Témoignages",
    "testimonials.subtitle": "La confiance des entreprises et créateurs à travers le Rwanda et au-delà.",
    "testimonials.t1":
      "« Chris a livré un site premium pour notre école et a rendu nos programmes faciles à comprendre. Le layout est propre, rapide sur mobile, et nos demandes ont augmenté car tout est clair et professionnel. »",
    "testimonials.t2":
      "« Nous voulions un look moderne, haut de gamme et rassurant. Chris a parfaitement géré le design et la structure, et le site représente notre spa comme nous l’imaginions. »",
    "testimonials.t3":
      "« Chris a créé un site propre et moderne avec des appels à l’action clairs. Il charge vite, s’affiche parfaitement sur tous les appareils, et nos clients trouvent l’essentiel en quelques secondes. »",

    "testimonials.t1Author": "Zimulinda \u2014 Vera School of Massage Therapist & Nails Care",
    "testimonials.t2Author": "Peter \u2014 Izi Spa Kigali",
    "testimonials.t3Author": "Lydia \u2014 D'african BnB",

    "faq.title": "FAQ",
    "faq.subtitle": "Réponses rapides sur les délais, le workflow et ce qu’il faut pour démarrer.",
    "faq.q1": "Combien de temps faut-il pour un site web ?",
    "faq.a1": "La plupart des sites prennent 3 à 14 jours selon les pages, fonctionnalités et la disponibilité du contenu.",
    "faq.q2": "De quoi avez-vous besoin pour commencer ?",
    "faq.a2": "Infos business, objectifs, exemples d’inspiration, assets (logo/couleurs) et vos textes/photos si disponibles.",
    "faq.q3": "Proposez-vous des révisions ?",
    "faq.a3": "Oui. Les révisions sont incluses pendant la phase design/dev pour que le résultat final corresponde à votre vision.",
    "faq.q4": "Pouvez-vous aider pour l’hébergement et le domaine ?",
    "faq.a4": "Oui. Je peux recommander un hébergement fiable et vous guider pour le domaine et le déploiement.",
    "faq.q5": "Faites-vous de la maintenance ?",
    "faq.a5": "Oui. Je peux maintenir votre site, mettre à jour le contenu et améliorer la performance dans le temps.",
    "faq.q6": "Comment fonctionnent les paiements ?",
    "faq.a6": "Généralement un acompte au démarrage puis le solde à la livraison, selon le périmètre du projet.",

    "contact.title": "Contact",
    "contact.subtitle": "Prêt à construire quelque chose de premium ? Envoyez un message ou démarrez un chat WhatsApp.",
    "contact.nameLabel": "Nom",
    "contact.namePlaceholder": "Votre nom",
    "contact.phoneLabel": "Téléphone (WhatsApp)",
    "contact.phonePlaceholder": "+250...",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "vous@exemple.com",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Parlez-moi de votre projet…",
    "contact.sendWhatsApp": "Envoyer sur WhatsApp",
    "contact.sendEmail": "Envoyer un email",
    "contact.quickTitle": "Chat rapide",
    "contact.quickBody": "Touchez pour démarrer une conversation WhatsApp instantanément.",
    "contact.quickCta": "Chat WhatsApp",
    "contact.basedIn": "Basé à",
    "contact.focus": "Focus",
    "contact.focusValue": "Applications web full-stack",
    "contact.phone": "+250 788 800 813",
    "contact.phoneHref": "tel:+250788800813",
    "contact.email": "kris.karisma@proton.me",
    "contact.emailHref": "mailto:kris.karisma@proton.me",
    "contact.location": "Kigali, Rwanda",
    "contact.waQuickHref": "https://wa.me/250788800813",

    "fabTop.aria": "Remonter en haut",
    "footer.copy": "©",

    "contact.waGreeting": "Bonjour Chris Charisma,",
    "contact.fieldName": "Nom",
    "contact.fieldPhone": "Téléphone",
    "contact.fieldEmail": "Email",
    "contact.mailSubject": "Demande via portfolio",
    "contact.noteWhatsAppMissing": "Ajoutez votre nom, téléphone (WhatsApp) et message.",
    "contact.noteEmailMissing": "Ajoutez votre nom, email et message.",
    "contact.openWhatsApp": "Ouverture de WhatsApp…",
    "contact.openEmail": "Ouverture de l’email…",
  },
};

let currentLang = "en";
let typingRafId = null;

function stopTyping() {
  if (typingRafId == null) return;
  cancelAnimationFrame(typingRafId);
  typingRafId = null;
}

function getLanguage() {
  const stored = window.localStorage ? window.localStorage.getItem(LANG_KEY) : null;
  if (stored === "fr" || stored === "en") return stored;
  const navLang = String(navigator.language || "").toLowerCase();
  return navLang.startsWith("fr") ? "fr" : "en";
}

function t(key) {
  const fromLang = I18N[currentLang] && I18N[currentLang][key];
  if (fromLang != null) return fromLang;
  const fallback = I18N.en && I18N.en[key];
  if (fallback != null) return fallback;
  return "";
}

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;

  if (dict["meta.title"]) document.title = dict["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.description"]) metaDesc.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = dict[key];
    if (value == null) return;
    el.textContent = String(value);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    const value = dict[key];
    if (value == null) return;
    el.innerHTML = String(value);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = dict[key];
    if (value == null) return;
    el.setAttribute("placeholder", String(value));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    const value = dict[key];
    if (value == null) return;
    el.setAttribute("aria-label", String(value));
  });

  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    const key = el.getAttribute("data-i18n-href");
    if (!key) return;
    const value = dict[key];
    if (value == null) return;
    el.setAttribute("href", String(value));
  });

  const typingEl = document.querySelector("[data-typing]");
  if (typingEl && Array.isArray(dict["hero.typingPhrases"])) {
    typingEl.textContent = String(dict["hero.typingPhrases"][0] || "");
  }
}

function setupLanguage() {
  currentLang = getLanguage();
  applyLanguage(currentLang);

  const toggles = Array.from(document.querySelectorAll("[data-lang-toggle]"));
  if (!toggles.length) return;

  const update = () => {
    toggles.forEach((btn) => {
      btn.textContent = currentLang === "en" ? "FR" : "EN";
      btn.setAttribute("aria-label", currentLang === "en" ? t("lang.toFrenchAria") : t("lang.toEnglishAria"));
    });
  };

  update();

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = currentLang === "en" ? "fr" : "en";
      if (window.localStorage) window.localStorage.setItem(LANG_KEY, next);
      currentLang = next;
      applyLanguage(currentLang);
      update();
      stopTyping();
      setupTyping();
    });
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isTouchLayout() {
  return window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

function setupStableViewportHeight() {
  const root = document.documentElement;
  const setVh = () => {
    root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  };

  setVh();

  window.addEventListener(
    "orientationchange",
    () => {
      window.setTimeout(setVh, 180);
    },
    { passive: true }
  );
}

function setupYear() {
  const yearEl = document.querySelector("[data-year]");
  if (!yearEl) return;
  yearEl.textContent = String(new Date().getFullYear());
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector("[data-nav-drawer]");
  if (!toggle || !drawer) return;

  const setOpen = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    drawer.setAttribute("aria-hidden", String(!isOpen));
    drawer.classList.toggle("is-open", isOpen);
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    const next = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(next);
  });

  drawer.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setOpen(false);
  });
}

function setupReveal() {
  const elements = Array.from(document.querySelectorAll(".reveal"));
  if (!elements.length) return;

  if (prefersReducedMotion()) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupTyping() {
  const el = document.querySelector("[data-typing]");
  if (!el) return;
  if (prefersReducedMotion()) return;
  if (isTouchLayout()) return;
  stopTyping();

  const phrases =
    (I18N[currentLang] && Array.isArray(I18N[currentLang]["hero.typingPhrases"]) && I18N[currentLang]["hero.typingPhrases"]) ||
    I18N.en["hero.typingPhrases"];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let lastTick = performance.now();

  const tick = (now) => {
    const delta = now - lastTick;
    const speed = deleting ? 34 : 52;
    if (delta < speed) {
      typingRafId = requestAnimationFrame(tick);
      return;
    }
    lastTick = now;

    const phrase = phrases[phraseIndex];
    const nextChar = deleting ? charIndex - 1 : charIndex + 1;
    charIndex = clamp(nextChar, 0, phrase.length);
    el.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      lastTick = now + 600;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      lastTick = now + 260;
    }

    typingRafId = requestAnimationFrame(tick);
  };

  typingRafId = requestAnimationFrame(tick);
}

function setupHeroSlideshow() {
  const root = document.querySelector("[data-hero-slideshow]");
  if (!root) return;
  if (prefersReducedMotion()) return;

  const slides = Array.from(root.querySelectorAll(".portrait-slide"));
  if (slides.length < 2) return;

  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index < 0) index = 0;

  slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));

  window.setInterval(() => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  }, 4200);
}

function buildWhatsAppUrl({ name, email, phone, message }) {
  const lines = [t("contact.waGreeting"), "", `${t("contact.fieldName")}: ${name}`];
  if (phone) lines.push(`${t("contact.fieldPhone")}: ${phone}`);
  if (email) lines.push(`${t("contact.fieldEmail")}: ${email}`);
  lines.push("", message);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${PHONE_E164}?text=${text}`;
}

function buildMailtoUrl({ name, email, phone, message }) {
  const subject = encodeURIComponent(t("contact.mailSubject"));
  const bodyLines = [`${t("contact.fieldName")}: ${name}`];
  if (phone) bodyLines.push(`${t("contact.fieldPhone")}: ${phone}`);
  bodyLines.push(`${t("contact.fieldEmail")}: ${email}`, "", message);
  const body = encodeURIComponent(bodyLines.join("\n"));
  const to = encodeURIComponent(CONTACT_EMAIL);
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const note = form.querySelector("[data-form-note]");
  const emailBtn = form.querySelector("[data-email]");

  const getValues = () => {
    const data = new FormData(form);
    return {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };
  };

  const setNote = (text) => {
    if (!note) return;
    note.textContent = text;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = getValues();

    if (!values.name || !values.phone || !values.message) {
      setNote(t("contact.noteWhatsAppMissing"));
      return;
    }

    setNote(t("contact.openWhatsApp"));
    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
  });

  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      const values = getValues();
      if (!values.name || !values.email || !values.message) {
        setNote(t("contact.noteEmailMissing"));
        return;
      }
      setNote(t("contact.openEmail"));
      window.location.href = buildMailtoUrl(values);
    });
  }
}

function setupAuditCta() {
  const triggers = Array.from(document.querySelectorAll("[data-audit-cta]"));
  if (!triggers.length) return;

  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const message = form.querySelector('textarea[name="message"]');

  const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (message) {
        message.value = t("audit.prefill");
        message.focus();
      }
      scrollToContact();
    });
  });
}

function setupProjectPreviews() {
  const previews = Array.from(document.querySelectorAll(".project-preview"));
  if (!previews.length) return;

  previews.forEach((el, index) => {
    const hue = (index * 48) % 360;
    el.style.background = `linear-gradient(135deg, rgba(17,24,39,0.15), rgba(17,24,39,0.72)),
      radial-gradient(800px 220px at 30% 20%, hsla(${hue}, 90%, 62%, 0.24), transparent 58%),
      radial-gradient(700px 240px at 70% 70%, hsla(${(hue + 40) % 360}, 92%, 60%, 0.18), transparent 55%)`;
  });
}

function setupParticles() {
  const canvas = document.querySelector("[data-particles]");
  if (!canvas) return;
  if (prefersReducedMotion()) return;
  if (isTouchLayout()) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;

  const particles = [];
  const particleCount = 64;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    width = Math.floor(rect.width);
    height = Math.floor(rect.height);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const makeParticle = () => {
    const r = 1 + Math.random() * 2.6;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r,
      a: 0.08 + Math.random() * 0.18,
      hue: Math.random() < 0.6 ? 42 : 238,
    };
  };

  const resetParticles = () => {
    particles.length = 0;
    for (let i = 0; i < particleCount; i += 1) particles.push(makeParticle());
  };

  const step = () => {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -30) p.x = width + 30;
      if (p.x > width + 30) p.x = -30;
      if (p.y < -30) p.y = height + 30;
      if (p.y > height + 30) p.y = -30;

      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 92%, 62%, ${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 110) continue;

        const alpha = (1 - dist / 110) * 0.08;
        ctx.strokeStyle = `rgba(229,231,235,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    requestAnimationFrame(step);
  };

  const onResize = () => {
    resize();
    resetParticles();
  };

  onResize();
  window.addEventListener("resize", onResize, { passive: true });
  requestAnimationFrame(step);
}

function setupScrollTopFab() {
  const fab = document.querySelector(".wa-fab");
  if (!fab) return;

  const update = () => {
    const shouldShow = window.scrollY > 420;
    fab.classList.toggle("is-visible", shouldShow);
  };

  update();

  window.addEventListener("scroll", update, { passive: true });

  fab.addEventListener("click", () => {
    const behavior = prefersReducedMotion() ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  });
}

setupYear();
setupStableViewportHeight();
setupLanguage();
setupNav();
setupReveal();
setupTyping();
setupHeroSlideshow();
setupProjectPreviews();
setupContactForm();
setupAuditCta();
setupParticles();
setupScrollTopFab();



