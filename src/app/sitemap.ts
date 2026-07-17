import type { MetadataRoute } from "next";

import { getAllMdxPosts } from "@/lib/mdx";
import { absoluteUrl, localizedPath } from "@/lib/seo";
import { locales } from "@/lib/i18n";

const publicPaths = [
  "/",
  "/about",
  "/skills",
  "/education",
  "/work",
  "/projects",
  "/blog",
  "/contact",
  "/more",
];

function createAlternateLanguages(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(localizedPath(locale, path))])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = publicPaths.flatMap((path) =>
    locales.map((locale) => {
      const localizedUrl = localizedPath(locale, path);

      return {
        url: absoluteUrl(localizedUrl),
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.7,
        alternates: {
          languages: createAlternateLanguages(path),
        },
      };
    })
  );

  const postEntries = getAllMdxPosts().flatMap((post) =>
    locales.map((locale) => {
      const postPath = `/blog/${post.slug}`;

      return {
        url: absoluteUrl(localizedPath(locale, postPath)),
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: {
          languages: createAlternateLanguages(postPath),
        },
      };
    })
  );

  return [...pageEntries, ...postEntries];
}
