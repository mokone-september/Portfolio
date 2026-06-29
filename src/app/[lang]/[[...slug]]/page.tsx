import { notFound } from "next/navigation";
import { getAllMdxPosts, getMdxPostBySlug } from "@/lib/mdx";
import { isLocale, Locale } from "@/lib/i18n";
import {
  LocalizedAboutPage,
  LocalizedBlogPage,
  LocalizedBlogPostPage,
  LocalizedContactPage,
  LocalizedEducationPage,
  LocalizedHomePage,
  LocalizedMorePage,
  LocalizedProjectsPage,
  LocalizedSkillsPage,
  LocalizedWorkPage,
} from "@/components/pages/LocalizedPages";

type Params = {
  lang: string;
  slug?: string[];
};

export default async function LocalizedRoute({ params }: { params: Params }) {
  const { lang, slug } = params;
  if (!isLocale(lang)) return notFound();

  const pagePath = slug ?? [];
  const page = pagePath[0] ?? "";

  if (page === "" || page === "en") {
    return <LocalizedHomePage locale={lang as Locale} />;
  }

  if (page === "about") {
    return <LocalizedAboutPage locale={lang as Locale} />;
  }

  if (page === "skills") {
    return <LocalizedSkillsPage locale={lang as Locale} />;
  }

  if (page === "education") {
    return <LocalizedEducationPage locale={lang as Locale} />;
  }

  if (page === "work") {
    return <LocalizedWorkPage locale={lang as Locale} />;
  }

  if (page === "projects") {
    return <LocalizedProjectsPage locale={lang as Locale} />;
  }

  if (page === "more") {
    return <LocalizedMorePage locale={lang as Locale} />;
  }

  if (page === "contact") {
    return <LocalizedContactPage locale={lang as Locale} />;
  }

  if (page === "blog") {
    if (pagePath.length === 1) {
      const posts = getAllMdxPosts();
      return <LocalizedBlogPage locale={lang as Locale} posts={posts} />;
    }

    if (pagePath.length === 2) {
      const post = await getMdxPostBySlug(pagePath[1]);
      if (!post) return notFound();
      return <LocalizedBlogPostPage locale={lang as Locale} post={post} />;
    }

    return notFound();
  }

  return notFound();
}
