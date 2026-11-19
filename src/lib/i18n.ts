export const locales = ["en", "af"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    languageName: "English",
    languageToggle: "AF",
    navbar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      education: "Education",
      work: "Work",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      more: "More",
    },
    home: {
      intro: "Hi, my name is",
      heroTitleLine1: "Thabiso Kenneth",
      heroTitleLine2: "Mokone.",
      summary: "I build modern web applications with",
      rotator: [
        "React & Next.js",
        "TypeScript",
        "Node.js",
        "Responsive Web Design",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      resumeButton: "Download CV",
    },
    about: {
      badge: "About me",
      heading: "Software Engineer Based In South Africa.",
      body: "I am a Junior Software Engineer from Taung, North West Province, South Africa. I'm passionate about crafting web projects and contributing to open-source communities. I specialize in modern JavaScript frameworks and responsive CSS design, focusing on creating pixel-perfect, user-friendly interfaces. With strong attention to detail and efficient delivery, I build seamless web experiences that combine functionality with elegant design.",
      hobbies: "Hobbies",
      hobbyList: ["Coding", "Cooking & Gardening", "Creating Projects"],
    },
    contact: {
      badge: "Contact",
      heading: "Contact Me!",
      formTitle: "Send me a message.",
      formDescription: "Once submitted, you’ll be redirected to the home page.",
      name: "Name",
      email: "Email",
      message: "Your Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Your message here...",
      submit: "Submit",
    },
    work: {
      badge: "Work Experience",
      heading: "My Work Experience",
      company: "Scrums.com (formerly SovTech)",
      title: "Junior Software Developer",
      location: "Johannesburg, South Africa",
      description: "In my role as a Junior Software Developer, I played a pivotal part in fostering a culture of continuous enhancement across the software development lifecycle. My responsibilities included crafting clean, reliable code, maintaining application stability, addressing bugs quickly, and implementing improvements to enhance the user and client experience. I worked closely with senior developers, product teams, and clients to deliver robust, scalable, and impactful solutions across multiple projects.",
    },
    skills: {
      badge: "My Skills",
      heading: "My Technical Experience & Skills",
      summary: "I have strong experience with HTML5, CSS3, JavaScript, TypeScript, and React, including responsive design principles. I focus on building modern web applications using JavaScript, TypeScript, React, Next.js, and Node.js.",
      languages: "Programming Languages",
      frameworks: "Frameworks & Libraries",
      tools: "Tools & Technologies",
    },
    education: {
      badge: "Education",
      heading: "My Education",
      institution: "HyperionDev",
      qualification: "Software Engineering Bootcamp Certificate",
      location: "Johannesburg, South Africa",
      description: "I embarked on a transformative journey through the Software Engineering Bootcamp—an intensive online program that helped me grow from a beginner into a confident junior developer. The curriculum covered Python, Object-Oriented Programming, and machine learning, empowering me to build practical real-world applications. The program offered direct mentorship, structured feedback, and a supportive community that kept me motivated while tackling challenges and developing a strong foundation for my tech career.",
    },
    projects: {
      badge: "Projects",
      heading: "My Projects",
      summary: "I love building projects. Here you will find a curated collection of my creative and technical work—each project reflects problem-solving, innovation, and continuous learning. Explore and enjoy the journey behind each creation.",
    },
    more: {
      badge: "More",
      heading: "Beyond the Code",
      description: "I write about web development, modern technology stacks, and JavaScript tips on Medium.",
      featuredWriting: "Featured writing",
      writingCategory: "Technical writing · Medium",
      writingTitle: "Learning, building, and sharing along the way.",
      writingDescription: "Thoughts, lessons, and practical notes from my journey as a software developer.",
      githubDescription: "Repositories and experiments",
      selectedProjects: "Selected projects",
      projectsDescription: "Explore what I have been building",
      button: "Visit here",
    },
    blog: {
      title: "My Blog",
      subtitle: "Short notes and tutorials.",
      readMore: "Read More",
      back: "Back to blog",
    },
  },

  af: {
    languageName: "Afrikaans",
    languageToggle: "EN",
    navbar: {
      home: "Tuis",
      about: "Meer oor my",
      skills: "Vaardighede",
      education: "Opleiding",
      work: "Werkservaring",
      projects: "Projekte",
      blog: "Blog",
      contact: "Kontak",
      more: "Meer",
    },
    home: {
      intro: "Hallo, my naam is",
      heroTitleLine1: "Thabiso Kenneth",
      heroTitleLine2: "Mokone.",
      summary: "Ek bou moderne webtoepassings met",
      rotator: [
        "React en Next.js",
        "TypeScript",
        "Node.js",
        "Responsiewe webontwerp",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      resumeButton: "Laai CV af",
    },
    about: {
      badge: "Meer oor my",
      heading: "Sagteware-ingenieur gebaseer in Suid-Afrika.",
      body: "Ek is 'n junior sagteware-ingenieur van Taung in die Noordwes-provinsie, Suid-Afrika. Ek is passievol oor die ontwikkeling van webprojekte en bydraes tot oopbron-gemeenskappe. Ek spesialiseer in moderne JavaScript-raamwerke en responsiewe CSS-ontwerp, met die fokus op gebruikersvriendelike koppelvlakke wat tot in die fynste besonderhede afgewerk is. Met aandag aan detail en doeltreffende werklewering bou ek naatlose webervarings wat funksionaliteit met elegante ontwerp kombineer.",
      hobbies: "Stokperdjies",
      hobbyList: ["Programmering", "Kook en tuinmaak", "Die skep van projekte"],
    },
    contact: {
      badge: "Kontak",
      heading: "Kontak my!",
      formTitle: "Stuur vir my 'n boodskap.",
      formDescription: "Nadat jy die vorm ingedien het, sal jy na die tuisblad herlei word.",
      name: "Naam",
      email: "E-posadres",
      message: "Jou boodskap",
      namePlaceholder: "Voer jou naam in",
      emailPlaceholder: "Voer jou e-posadres in",
      messagePlaceholder: "Tik jou boodskap hier...",
      submit: "Stuur",
    },
    work: {
      badge: "Werkservaring",
      heading: "My Werkservaring",
      company: "Scrums.com (voorheen SovTech)",
      title: "Junior Sagteware-ontwikkelaar",
      location: "Johannesburg, Suid-Afrika",
      description: "In my rol as junior sagteware-ontwikkelaar het ek 'n belangrike bydrae gelewer tot 'n kultuur van voortdurende verbetering deur die hele sagteware-ontwikkelingsproses. My verantwoordelikhede het die skryf van skoon, betroubare kode, die instandhouding van toepassings, die vinnige regstelling van foute en die implementering van verbeterings ingesluit om die gebruikers- en kliënte-ervaring te verbeter. Ek het nou saam met senior ontwikkelaars, produkspanne en kliënte gewerk om betroubare, skaalbare en doeltreffende oplossings vir verskeie projekte te lewer.",
    },
    skills: {
      badge: "My Vaardighede",
      heading: "My Tegniese Ervaring en Vaardighede",
      summary: "Ek het goeie ervaring met HTML5, CSS3, JavaScript, TypeScript en React, insluitend beginsels van responsiewe ontwerp. Ek fokus op die ontwikkeling van moderne webtoepassings met JavaScript, TypeScript, React, Next.js en Node.js.",
      languages: "Programmeertale",
      frameworks: "Raamwerke en Biblioteke",
      tools: "Gereedskap en Tegnologieë",
    },
    education: {
      badge: "Opleiding",
      heading: "My Opleiding",
      institution: "HyperionDev",
      qualification: "Sagteware-ingenieurswese-bootcampsertifikaat",
      location: "Johannesburg, Suid-Afrika",
      description: "Ek het 'n betekenisvolle ontwikkelingsreis aangepak deur die Sagteware-ingenieurswese-bootcamp—'n intensiewe aanlynprogram wat my gehelp het om van 'n beginner tot 'n selfversekerde junior ontwikkelaar te groei. Die kurrikulum het Python, objekgeoriënteerde programmering en masjienleer ingesluit, wat my in staat gestel het om praktiese toepassings vir werklike probleme te bou. Die program het direkte mentorskap, gestruktureerde terugvoer en 'n ondersteunende gemeenskap gebied wat my gemotiveer het terwyl ek uitdagings aangepak en 'n sterk grondslag vir my loopbaan in tegnologie ontwikkel het.",
    },
    projects: {
      badge: "Projekte",
      heading: "My Projekte",
      summary: "Ek geniet dit om projekte te bou. Hier vind jy 'n versameling van my kreatiewe en tegniese werk. Elke projek weerspieël probleemoplossing, innovasie en voortdurende leer. Verken gerus die projekte en ontdek die proses agter elke skepping.",
    },
    more: {
      badge: "Meer",
      heading: "Meer as net kode",
      description: "Ek skryf op Medium oor webontwikkeling, moderne tegnologiestapels en wenke vir JavaScript.",
      featuredWriting: "Uitgeligte skryfwerk",
      writingCategory: "Tegniese skryfwerk · Medium",
      writingTitle: "Leer, bou en deel langs die pad.",
      writingDescription: "Gedagtes, lesse en praktiese notas uit my reis as sagteware-ontwikkelaar.",
      githubDescription: "Bewaarplekke en eksperimente",
      selectedProjects: "Geselekteerde projekte",
      projectsDescription: "Ontdek waaraan ek gewerk het",
      button: "Besoek hier",
    },
    blog: {
      title: "My Blog",
      subtitle: "Kort notas en tutoriaalartikels.",
      readMore: "Lees Meer",
      back: "Terug na die blog",
    },
  },
} as const;

export type Translations = (typeof translations)[keyof typeof translations];

export function isLocale(value: string | string[] | undefined): value is Locale {
  return typeof value === "string" && locales.includes(value as Locale);
}

export function getTranslations(locale: string | undefined) {
  return translations[isLocale(locale) ? locale : defaultLocale];
}

export function getLocaleFromPath(pathname: string) {
  if (pathname.startsWith("/af")) {
    return "af" as Locale;
  }
  if (pathname.startsWith("/en")) {
    return "en" as Locale;
  }
  return defaultLocale;
}

export function removeLocalePrefix(pathname: string) {
  if (pathname === "/af" || pathname === "/en") return "/";
  if (pathname.startsWith("/af/")) return pathname.replace("/af", "");
  if (pathname.startsWith("/en/")) return pathname.replace("/en", "");
  return pathname;
}

export function buildLocalePath(locale: Locale, pathname: string) {
  const path = removeLocalePrefix(pathname);
  return locale === "en" ? path : `/${locale}${path}`;
}
