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
  af: {
    home: {
      title: "TK Mokone | Sagteware-ingenieur",
      description:
        "Ontmoet Thabiso Kenneth Mokone, 'n sagteware-ingenieur wat toeganklike, responsiewe en gebruikersgerigte webervarings ontwikkel.",
    },
    about: {
      title: "Meer oor Thabiso Kenneth Mokone",
      description:
        "Leer meer oor Thabiso Kenneth Mokone, 'n Suid-Afrikaanse sagteware-ingenieur met 'n passie vir moderne webontwikkeling en oopbronsagteware.",
    },
    skills: {
      title: "Front-end Vaardighede | TK Mokone",
      description:
        "Ontdek Thabiso Mokone se front-end vaardighede in JavaScript, TypeScript, React, Next.js, Vue, CSS en moderne ontwikkelaarnutsmiddels.",
    },
    education: {
      title: "Opleiding | TK Mokone",
      description:
        "Lees meer oor Thabiso Mokone se opleiding en agtergrond in sagteware-ingenieurswese.",
    },
    work: {
      title: "Werkservaring | TK Mokone",
      description:
        "Ontdek Thabiso Mokone se sagteware-ontwikkelingservaring en sy bydraes tot betroubare weboplossings.",
    },
    projects: {
      title: "Projekte | TK Mokone",
      description:
        "Verken Thabiso Mokone se webprojekte met React, Vue, TypeScript, API's en responsiewe gebruikerskoppelvlakke.",
    },
    blog: {
      title: "Blog | TK Mokone",
      description:
        "Lees Thabiso Mokone se artikels en tutoriaalinhoud oor webontwikkeling, ontwerp, JavaScript en moderne tegnologie.",
    },
    contact: {
      title: "Kontak Thabiso Mokone",
      description:
        "Kontak Thabiso Kenneth Mokone oor sagteware-ingenieurswese, front-end ontwikkeling en samewerkingsgeleenthede.",
    },
    more: {
      title: "Meer van TK Mokone",
      description:
        "Vind nog artikels en skakels van Thabiso Mokone oor webontwikkeling, JavaScript en moderne tegnologie.",
    },
  },
} as const satisfies Record<
  Locale,
  Record<SeoPageKey, { title: string; description: string }>
>;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function localizedPath(locale: Locale, path: string) {
  const normalizedPath = removeLocalePrefix(path);

  if (locale === defaultLocale) return normalizedPath;
  if (normalizedPath === "/") return `/${locale}`;

  return buildLocalePath(locale, normalizedPath);
}

export function getPageSeo(
  locale: Locale,
  page: string
): (typeof pageSeo)[Locale][SeoPageKey] {
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
      locale: locale === "af" ? "af_ZA" : "en_US",
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
