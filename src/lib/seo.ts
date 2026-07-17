import type { Metadata } from "next";

import {
  buildLocalePath,
  defaultLocale,
  type Locale,
  locales,
  removeLocalePrefix,
} from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type PageType = "website" | "article";

export type SeoPageKey =
  | "home"
  | "about"
  | "skills"
  | "education"
  | "work"
  | "projects"
  | "blog"
  | "contact"
  | "more";

export const pageSeo = {
  en: {
    home: {
      title: "TK Mokone | Software Engineer",
      description:
        "Meet Thabiso Kenneth Mokone, a software engineer building accessible, responsive, and user-focused web experiences.",
    },
    about: {
      title: "About Thabiso Kenneth Mokone",
      description:
        "Learn about Thabiso Kenneth Mokone, a South African software engineer passionate about modern web development and open source.",
    },
    skills: {
      title: "Frontend Skills | TK Mokone",
      description:
        "Explore Thabiso Mokone's frontend skills across JavaScript, TypeScript, React, Next.js, Vue, CSS, and modern developer tools.",
    },
    education: {
      title: "Education | TK Mokone",
      description:
        "View Thabiso Mokone's software engineering education and training background.",
    },
    work: {
      title: "Work Experience | TK Mokone",
      description:
        "Review Thabiso Mokone's software development experience, responsibilities, and work delivering reliable web solutions.",
    },
    projects: {
      title: "Projects | TK Mokone",
      description:
        "Browse selected web projects by Thabiso Mokone, including React, Vue, TypeScript, state management, APIs, and responsive UI work.",
    },
    blog: {
      title: "Blog | TK Mokone",
      description:
        "Read short notes and tutorials from Thabiso Mokone about web development, design, JavaScript, and modern technology.",
    },
    contact: {
      title: "Contact Thabiso Mokone",
      description:
        "Get in touch with Thabiso Kenneth Mokone about software engineering, frontend development, and collaboration opportunities.",
    },
    more: {
      title: "More from TK Mokone",
      description:
        "Find more writing and links from Thabiso Mokone across web development, JavaScript, and modern technology.",
    },
  },
  es: {
    home: {
      title: "TK Mokone | Ingeniero de Software",
      description:
        "Conoce a Thabiso Kenneth Mokone, un ingeniero de software que crea experiencias web accesibles, responsivas y centradas en el usuario.",
    },
    about: {
      title: "Sobre Thabiso Kenneth Mokone",
      description:
        "Conoce a Thabiso Kenneth Mokone, un ingeniero de software sudafricano apasionado por el desarrollo web moderno y el código abierto.",
    },
    skills: {
      title: "Habilidades Frontend | TK Mokone",
      description:
        "Explora las habilidades frontend de Thabiso Mokone en JavaScript, TypeScript, React, Next.js, Vue, CSS y herramientas modernas.",
    },
    education: {
      title: "Educación | TK Mokone",
      description:
        "Consulta la formación y educación de Thabiso Mokone en ingeniería de software.",
    },
    work: {
      title: "Experiencia Laboral | TK Mokone",
      description:
        "Revisa la experiencia de Thabiso Mokone en desarrollo de software y la creación de soluciones web confiables.",
    },
    projects: {
      title: "Proyectos | TK Mokone",
      description:
        "Explora proyectos web seleccionados de Thabiso Mokone con React, Vue, TypeScript, APIs y diseños responsivos.",
    },
    blog: {
      title: "Blog | TK Mokone",
      description:
        "Lee notas y tutoriales de Thabiso Mokone sobre desarrollo web, diseño, JavaScript y tecnología moderna.",
    },
    contact: {
      title: "Contacta a Thabiso Mokone",
      description:
        "Ponte en contacto con Thabiso Kenneth Mokone sobre ingeniería de software, desarrollo frontend y colaboraciones.",
    },
    more: {
      title: "Más de TK Mokone",
      description:
        "Encuentra más artículos y enlaces de Thabiso Mokone sobre desarrollo web, JavaScript y tecnología moderna.",
    },
  },
} as const satisfies Record<Locale, Record<SeoPageKey, { title: string; description: string }>>;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function localizedPath(locale: Locale, path: string) {
  const normalizedPath = removeLocalePrefix(path);

  if (locale === defaultLocale) return normalizedPath;
  if (normalizedPath === "/") return `/${locale}`;

  return buildLocalePath(locale, normalizedPath);
}

export function getPageSeo(locale: Locale, page: string): (typeof pageSeo)[Locale][SeoPageKey] {
  return pageSeo[locale][page as SeoPageKey] ?? pageSeo[locale].home;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  type?: PageType;
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  locale = defaultLocale,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata {
  const normalizedPath = removeLocalePrefix(path);
  const canonicalPath = localizedPath(locale, normalizedPath);
  const imageUrl = absoluteUrl(siteConfig.ogImage);
  const languageAlternates = Object.fromEntries(
    locales.map((alternateLocale) => [
      alternateLocale,
      absoluteUrl(localizedPath(alternateLocale, normalizedPath)),
    ])
  );

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        ...languageAlternates,
        "x-default": absoluteUrl(
          localizedPath(defaultLocale, normalizedPath)
        ),
      },
    },
    openGraph: {
      type,
      locale: locale === "es" ? "es_ES" : "en_US",
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 929,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
    },
  };
}
