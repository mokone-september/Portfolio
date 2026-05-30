import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";

function normalizeSlug(value: unknown) {
  return String(value ?? "").trim();
}

export type MdxPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export type MdxPostWithCode = MdxPost & {
  code: string;
};

const postsDir = path.join(process.cwd(), "src", "content", "mdx");

export function getAllMdxPosts(): MdxPost[] {
  const files = fs.readdirSync(postsDir).filter((filename) => filename.endsWith(".mdx"));

  return files
    .map((filename) => {
      const fullPath = path.join(postsDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: normalizeSlug(data.slug) || filename.replace(/\.mdx?$/, ""),
        title: data.title ?? "Untitled",
        date: data.date ?? "1970-01-01",
        excerpt: data.excerpt ?? "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getMdxPostBySlug(slug: string): Promise<MdxPostWithCode | null> {
  const files = fs.readdirSync(postsDir).filter((filename) => filename.endsWith(".mdx"));
  const file = files.find((filename) => {
    const filenameSlug = filename.replace(/\.mdx?$/, "");
    if (filenameSlug === slug) return true;

    const fullPath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return normalizeSlug(data.slug) === slug;
  });
  if (!file) return null;

  const fullPath = path.join(postsDir, file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const code = String(
    await compile(content, {
      format: "mdx",
      outputFormat: "function-body",
    })
  );

  return {
    slug: normalizeSlug(data.slug) || file.replace(/\.mdx?$/, ""),
    title: data.title ?? "Untitled",
    date: data.date ?? "1970-01-01",
    excerpt: data.excerpt ?? "",
    code,
  };
}
