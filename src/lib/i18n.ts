
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const translations = {
  en: {
    languageName: "English",
    languageToggle: "ES",
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
      summary: "I'm a Software Developer focused on",
      rotator: [
        "Frontend Development",
        "Full-Stack Development",
        "React & TypeScript",
        "Building Web Applications",
      ],
    },
    about: {
      badge: "About me",
      heading: "Software Engineer Based In South Africa.",
      body: "I am a Junior Software Engineer from Taung, North West Province, South Africa. I'm passionate about crafting web projects and contributing to open-source communities. I specialize in modern JavaScript frameworks and responsive CSS design, focusing on creating pixel-perfect, user-friendly interfaces. With strong attention to detail and efficient delivery, I build seamless web experiences that combine functionality with elegant design.",
      hobbies: "Hobbies",
      hobbyList: ["Coding", "Cooking & Gardening", "Creating Projects"],
    },
    contact: {
      badge: "Contact Us",
      heading: "Contact Me!",
      formTitle: "Send me a mail.",
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
      company: "Scrums (formerly SovTech)",
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
      summary: "I love building projects. Here you all find a curated collection of my creative and technical work—each project reflects problem-solving, innovation, and continuous learning. Explore and enjoy the journey behind each creation.",
    },
    more: {
      badge: "More",
      description: "I write blogs on web development, modern tech stacks, and JavaScript tips on Medium.",
      button: "Visit here",
    },
    blog: {
      title: "My Blog",
      subtitle: "Short notes and tutorials.",
      readMore: "Read More",
      back: "Back to blog",
    },
  },
  es: {
    languageName: "Español",
    languageToggle: "EN",
    navbar: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      education: "Educación",
      work: "Trabajo",
      projects: "Proyectos",
      blog: "Blog",
      contact: "Contacto",
      more: "Más",
    },
    home: {
      intro: "Hola, me llamo",
      heroTitleLine1: "Thabiso Kenneth",
      heroTitleLine2: "Mokone.",
      summary: "Soy desarrollador de software especializado en",
      rotator: [
        "Desarrollo frontend",
        "Desarrollo full-stack",
        "React y TypeScript",
        "Aplicaciones web",
      ],
    },
    about: {
      badge: "Sobre mí",
      heading: "Ingeniero de Software con base en Sudáfrica.",
      body: "Soy un Ingeniero de Software Junior de Taung, Provincia del Noroeste, Sudáfrica. Me apasiona crear proyectos web y contribuir a comunidades de código abierto. Me especializo en frameworks modernos de JavaScript y diseño CSS responsivo, centrándome en crear interfaces amigables y precisas. Con gran atención al detalle y entrega eficiente, construyo experiencias web fluidas que combinan funcionalidad con un diseño elegante.",
      hobbies: "Pasatiempos",
      hobbyList: ["Programación", "Cocinar y jardinería", "Crear proyectos"],
    },
    contact: {
      badge: "Contacto",
      heading: "¡Contáctame!",
      formTitle: "Envíame un correo.",
      formDescription: "Una vez enviado, serás redirigido a la página de inicio.",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Tu mensaje",
      namePlaceholder: "Ingresa tu nombre",
      emailPlaceholder: "Ingresa tu correo",
      messagePlaceholder: "Tu mensaje aquí...",
      submit: "Enviar",
    },
    work: {
      badge: "Experiencia Laboral",
      heading: "Mi Experiencia Laboral",
      company: "Scrums (anteriormente SovTech)",
      title: "Desarrollador de Software Junior",
      location: "Johannesburgo, Sudáfrica",
      description: "En mi rol como Desarrollador de Software Junior, jugué un papel clave en fomentar una cultura de mejora continua a lo largo del ciclo de vida del desarrollo de software. Mis responsabilidades incluyeron crear código limpio y confiable, mantener la estabilidad de la aplicación, resolver errores rápidamente e implementar mejoras para optimizar la experiencia del usuario y del cliente. Trabajé en estrecha colaboración con desarrolladores senior, equipos de producto y clientes para entregar soluciones robustas, escalables e impactantes en varios proyectos.",
    },
    skills: {
      badge: "Mis Habilidades",
      heading: "Mi Experiencia Técnica y Habilidades",
      summary: "Tengo experiencia sólida con HTML5, CSS3, JavaScript, TypeScript y React, incluyendo principios de diseño responsivo. Me enfoco en construir aplicaciones web modernas usando JavaScript, TypeScript, React, Next.js y Node.js.",
      languages: "Lenguajes de Programación",
      frameworks: "Frameworks y Librerías",
      tools: "Herramientas y Tecnologías",
    },
    education: {
      badge: "Educación",
      heading: "Mi Educación",
      institution: "HyperionDev",
      qualification: "Certificado del Bootcamp de Ingeniería de Software",
      location: "Johannesburgo, Sudáfrica",
      description: "Emprendí un viaje transformador a través del Bootcamp de Ingeniería de Software—un programa intensivo en línea que me ayudó a crecer desde principiante hasta desarrollador junior con confianza. El plan de estudios cubrió Python, Programación Orientada a Objetos y aprendizaje automático, permitiéndome construir aplicaciones prácticas del mundo real. El programa ofreció mentoría directa, retroalimentación estructurada y una comunidad de apoyo que me mantuvo motivado mientras enfrentaba desafíos y desarrollaba una base sólida para mi carrera en tecnología.",
    },
    projects: {
      badge: "Proyectos",
      heading: "Mis Proyectos",
      summary: "Me encanta construir proyectos. Aquí encontrarás una colección seleccionada de mi trabajo creativo y técnico—cada proyecto refleja resolución de problemas, innovación y aprendizaje continuo. Explora y disfruta el proceso detrás de cada creación.",
    },
    more: {
      badge: "Más",
      description: "Escribo blogs sobre desarrollo web, pilas tecnológicas modernas y consejos de JavaScript en Medium.",
      button: "Visitar",
    },
    blog: {
      title: "Mi Blog",
      subtitle: "Notas cortas y tutoriales.",
      readMore: "Leer más",
      back: "Volver al blog",
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
  if (pathname.startsWith("/es")) {
    return "es" as Locale;
  }
  if (pathname.startsWith("/en")) {
    return "en" as Locale;
  }
  return "en" as Locale;
}

export function removeLocalePrefix(pathname: string) {
  if (pathname === "/es" || pathname === "/en") return "/";
  if (pathname.startsWith("/es/")) return pathname.replace("/es", "");
  if (pathname.startsWith("/en/")) return pathname.replace("/en", "");
  return pathname;
}

export function buildLocalePath(locale: Locale, pathname: string) {
  const path = removeLocalePrefix(pathname);
  return locale === "en" ? path : `/${locale}${path}`;
}
