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
      heading: "Software Developer Based in South Africa.",
      body:
        "I'm a Software Developer based in Taung, North West Province, South Africa, with three years of experience building modern web applications. I specialize in frontend development using React, Next.js, TypeScript and Tailwind CSS, with a strong focus on creating responsive, accessible and user-friendly interfaces. I also enjoy working across the full stack, exploring backend technologies and building applications that solve practical problems. I'm passionate about continuous learning, improving my problem-solving skills and turning ideas into working projects. I enjoy exploring new technologies, contributing to open-source projects and challenging myself to grow as a developer.",
      whatIDo: "What I Do",
      services: [
        {
          title: "Frontend Development",
          description:
            "Building responsive, accessible and user-friendly interfaces with React, Next.js and TypeScript.",
        },
        {
          title: "Full-Stack Development",
          description:
            "Exploring frontend and backend technologies to build complete applications that solve practical problems.",
        },
        {
          title: "Continuous Learning",
          description:
            "Developing my skills through personal projects, open-source contributions and exploring new technologies.",
        },
      ],
      personalDetails: "Personal Details",
      personalDetailsList: [
        {
          title: "Language",
          values: ["English", "Afrikaans"],
        },
        {
          title: "Nationality",
          values: ["South Africa"],
        },
        {
          title: "Gender",
          values: ["Male"],
        },
      ],
      hobbies: "Hobbies",
      hobbyList: [
        "Coding",
        "Creating Personal Projects",
        "Exploring New Technologies",
        "Open-Source Contributions",
      ],
    },

    contact: {
      badge: "Contact",
      heading: "Contact Me!",
      formTitle: "Send me a message.",
      formDescription:
        "Have a question or want to work together? Send me a message.",
      name: "Name",
      email: "Email",
      message: "Your Message",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email",
      messagePlaceholder: "Your message here...",
      submit: "Submit",
      thankYouTitle: "Thank you for getting in touch!",
      thankYouDescription:
        "Your message has been sent successfully. I appreciate you reaching out and will get back to you as soon as possible.",
      submitError:
        "Something went wrong while sending your message. Please try again.",
      sending: "Sending...",
    },

    work: {
      badge: "Work Experience",
      heading: "My Work Experience",

      professionalDevelopment: "Professional Development",
      ongoingDevelopment: "Ongoing Development",
      independentLearning: "Independent Learning & Software Development",
      learningDescription: "Personal projects and continuous learning",
      developmentDescription:
        "Continuously developing my software engineering skills through independent learning, hands-on experimentation, and personal projects. Focusing on modern frontend technologies, full-stack development, backend concepts, and exploring AI-powered applications.",
      developmentHighlights:
        "Learning, building projects, and expanding technical knowledge",

      experiences: [
        {
          period: "January 2023 – February 2024",
          company: "Scrums.com (formerly SovTech)",
          title: "Junior Software Developer",
          location: "Johannesburg, South Africa",
          description:
            "In my role as a Junior Software Developer, I played a pivotal part in fostering a culture of continuous enhancement across the software development lifecycle. My responsibilities included crafting clean, reliable code, maintaining application stability, addressing bugs quickly, and implementing improvements to enhance the user and client experience. I worked closely with senior developers, product teams, and clients to deliver robust, scalable, and impactful solutions across multiple projects.",
        },
        {
          period: "February 2022 – December 2022",
          company: "Scrums.com (formerly SovTech)",
          title: "Graduate Programme Participant",
          location: "Johannesburg, South Africa",
          description:
            "Participated in the software development graduate programme, gaining experience in a professional software development environment and developing technical skills through practical learning and project work.",
        },
        {
          period: "January 2018 – January 2021",
          company: "Thuleka Lodge",
          title: "Night Duty Manager",
          location: "Johannesburg, South Africa",
          description:
            "Managed night-shift front-office operations and supported guests throughout their stay. Handled guest check-ins, billing, administrative duties, and service-related queries. Resolved operational issues and communicated relevant handovers to colleagues.",
        },
      ],
    },

    skills: {
      badge: "My Skills",
      heading: "My Technical Experience & Skills",
      summary:
        "I have strong experience with HTML5, CSS3, JavaScript, TypeScript, and React, including responsive design principles. I focus on building modern web applications using JavaScript, TypeScript, React, Next.js, and Node.js.",
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
      description:
        "I embarked on a transformative journey through the Software Engineering Bootcamp—an intensive online program that helped me grow from a beginner into a confident junior developer. The curriculum covered Python, Object-Oriented Programming, and machine learning, empowering me to build practical real-world applications. The program offered direct mentorship, structured feedback, and a supportive community that kept me motivated while tackling challenges and developing a strong foundation for my tech career.",
    },

    projects: {
      badge: "Projects",
      heading: "My Projects",
      summary:
        "I love building projects. Here you will find a curated collection of my creative and technical work—each project reflects problem-solving, innovation, and continuous learning. Explore and enjoy the journey behind each creation.",
    },

    more: {
      badge: "More",
      heading: "Beyond the Code",
      description:
        "I write about web development, modern technology stacks, and JavaScript tips on Medium.",
      featuredWriting: "Featured writing",
      writingCategory: "Technical writing · Medium",
      writingTitle: "Learning, building, and sharing along the way.",
      writingDescription:
        "Thoughts, lessons, and practical notes from my journey as a software developer.",
      githubDescription: "Repositories and experiments",
      selectedProjects: "Selected projects",
      projectsDescription: "Explore what I have been building",
      button: "Visit here",
    },

    blog: {
      badge: "THE DEVELOPER JOURNAL",
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
      heading: "Sagteware-ontwikkelaar gebaseer in Suid-Afrika.",
      body:
        "Ek is 'n sagteware-ontwikkelaar gebaseer in Taung, Noordwes-provinsie, Suid-Afrika, met drie jaar se ervaring in die ontwikkeling van moderne webtoepassings. Ek spesialiseer in frontend-ontwikkeling met React, Next.js, TypeScript en Tailwind CSS, met 'n sterk fokus op responsiewe, toeganklike en gebruikersvriendelike koppelvlakke. Ek geniet dit ook om oor die volle tegnologiestapel te werk, backend-tegnologieë te verken en toepassings te bou wat praktiese probleme oplos. Ek is passievol oor voortdurende leer, die verbetering van my probleemoplossingsvaardighede en die omskepping van idees in werkende projekte. Ek geniet dit om nuwe tegnologieë te verken, tot oopbronprojekte by te dra en myself uit te daag om as ontwikkelaar te groei.",
      whatIDo: "Wat ek doen",
      services: [
        {
          title: "Frontend-ontwikkeling",
          description:
            "Die bou van responsiewe, toeganklike en gebruikersvriendelike koppelvlakke met React, Next.js en TypeScript.",
        },
        {
          title: "Volstapel-ontwikkeling",
          description:
            "Die verkenning van frontend- en backend-tegnologieë om volledige toepassings te bou wat praktiese probleme oplos.",
        },
        {
          title: "Voortdurende leer",
          description:
            "Die ontwikkeling van my vaardighede deur persoonlike projekte, bydraes tot oopbronprojekte en die verkenning van nuwe tegnologieë.",
        },
      ],
      personalDetails: "Persoonlike Besonderhede",
      personalDetailsList: [
        {
          title: "Taal",
          values: ["Engels", "Afrikaans"],
        },
        {
          title: "Nasionaliteit",
          values: ["Suid-Afrika"],
        },
        {
          title: "Geslag",
          values: ["Manlik"],
        },
      ],
      hobbies: "Stokperdjies",
      hobbyList: [
        "Programmering",
        "Die skep van persoonlike projekte",
        "Die verkenning van nuwe tegnologieë",
        "Bydraes tot oopbronprojekte",
      ],
    },

    contact: {
      badge: "Kontak",
      heading: "Kontak my!",
      formTitle: "Stuur vir my 'n boodskap.",
      formDescription:
        "Het jy 'n vraag of wil jy saamwerk? Stuur vir my 'n boodskap.",
      name: "Naam",
      email: "E-posadres",
      message: "Jou boodskap",
      namePlaceholder: "Voer jou naam in",
      emailPlaceholder: "Voer jou e-posadres in",
      messagePlaceholder: "Tik jou boodskap hier...",
      submit: "Stuur",
      thankYouTitle: "Dankie dat jy my gekontak het!",
      thankYouDescription:
        "Jou boodskap is suksesvol gestuur. Ek waardeer dit dat jy kontak gemaak het en sal so gou moontlik op jou boodskap reageer.",
      submitError:
        "Iets het verkeerd geloop met die stuur van jou boodskap. Probeer asseblief weer.",
      sending: "Stuur tans...",
    },

    work: {
      badge: "Werkservaring",
      heading: "My Werkservaring",

      professionalDevelopment: "Professionele Ontwikkeling",
      ongoingDevelopment: "Voortdurende Ontwikkeling",
      independentLearning: "Onafhanklike Leer en Sagteware-ontwikkeling",
      learningDescription: "Persoonlike projekte en deurlopende leer",
      developmentDescription:
        "Ek ontwikkel voortdurend my sagteware-ingenieursvaardighede deur onafhanklike leer, praktiese eksperimentering en persoonlike projekte. Ek fokus op moderne frontend-tegnologieë, volstapel-ontwikkeling, backend-konsepte en die verkenning van KI-aangedrewe toepassings.",
      developmentHighlights:
        "Leer, bou projekte en brei tegniese kennis uit",

      experiences: [
        {
          period: "Januarie 2023 – Februarie 2024",
          company: "Scrums.com (voorheen SovTech)",
          title: "Junior Sagteware-ontwikkelaar",
          location: "Johannesburg, Suid-Afrika",
          description:
            "In my rol as junior sagteware-ontwikkelaar het ek 'n belangrike bydrae gelewer tot 'n kultuur van voortdurende verbetering deur die hele sagteware-ontwikkelingsproses. My verantwoordelikhede het die skryf van skoon, betroubare kode, die instandhouding van toepassings, die vinnige regstelling van foute en die implementering van verbeterings ingesluit om die gebruikers- en kliënte-ervaring te verbeter. Ek het nou saam met senior ontwikkelaars, produkspanne en kliënte gewerk om betroubare, skaalbare en doeltreffende oplossings vir verskeie projekte te lewer.",
        },
        {
          period: "Februarie 2022 – Desember 2022",
          company: "Scrums.com (voorheen SovTech)",
          title: "Deelnemer aan die Nagraadse Ontwikkelingsprogram",
          location: "Johannesburg, Suid-Afrika",
          description:
            "Het aan die sagteware-ontwikkelingsprogram vir gegradueerdes deelgeneem en ervaring in 'n professionele sagteware-ontwikkelingsomgewing opgedoen. Het tegniese vaardighede deur praktiese leer en projekwerk ontwikkel.",
        },
        {
          period: "Januarie 2018 – Januarie 2021",
          company: "Thuleka Lodge",
          title: "Nagdiensbestuurder",
          location: "Johannesburg, Suid-Afrika",
          description:
            "Het nagdiens-ontvangsbedrywighede bestuur en gaste gedurende hul verblyf bygestaan. Het gaste se inklok, fakturering, administratiewe take en diensverwante navrae hanteer. Het operasionele probleme opgelos en belangrike oorhandigings aan kollegas gekommunikeer.",
        },
      ],
    },

    skills: {
      badge: "My Vaardighede",
      heading: "My Tegniese Ervaring en Vaardighede",
      summary:
        "Ek het goeie ervaring met HTML5, CSS3, JavaScript, TypeScript en React, insluitend beginsels van responsiewe ontwerp. Ek fokus op die ontwikkeling van moderne webtoepassings met JavaScript, TypeScript, React, Next.js en Node.js.",
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
      description:
        "Ek het 'n betekenisvolle ontwikkelingsreis aangepak deur die Sagteware-ingenieurswese-bootcamp—'n intensiewe aanlynprogram wat my gehelp het om van 'n beginner tot 'n selfversekerde junior ontwikkelaar te groei. Die kurrikulum het Python, objekgeoriënteerde programmering en masjienleer ingesluit, wat my in staat gestel het om praktiese toepassings vir werklike probleme te bou. Die program het direkte mentorskap, gestruktureerde terugvoer en 'n ondersteunende gemeenskap gebied wat my gemotiveer het terwyl ek uitdagings aangepak en 'n sterk grondslag vir my loopbaan in tegnologie ontwikkel het.",
    },

    projects: {
      badge: "Projekte",
      heading: "My Projekte",
      summary:
        "Ek geniet dit om projekte te bou. Hier vind jy 'n versameling van my kreatiewe en tegniese werk. Elke projek weerspieël probleemoplossing, innovasie en voortdurende leer. Verken gerus die projekte en ontdek die proses agter elke skepping.",
    },

    more: {
      badge: "Meer",
      heading: "Meer as net kode",
      description:
        "Ek skryf op Medium oor webontwikkeling, moderne tegnologiestapels en wenke vir JavaScript.",
      featuredWriting: "Uitgeligte skryfwerk",
      writingCategory: "Tegniese skryfwerk · Medium",
      writingTitle: "Leer, bou en deel langs die pad.",
      writingDescription:
        "Gedagtes, lesse en praktiese notas uit my reis as sagteware-ontwikkelaar.",
      githubDescription: "Bewaarplekke en eksperimente",
      selectedProjects: "Geselekteerde projekte",
      projectsDescription: "Ontdek waaraan ek gewerk het",
      button: "Besoek hier",
    },

    blog: {
      badge: "DIE ONTWIKKELAARSJOERNAAL",
      title: "My Blog",
      subtitle: "Kort notas en tutoriaalartikels.",
      readMore: "Lees Meer",
      back: "Terug na die blog",
    },
  },
} as const;

export type Translations =
  (typeof translations)[keyof typeof translations];

export function isLocale(
  value: string | string[] | undefined,
): value is Locale {
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
