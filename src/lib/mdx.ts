import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote";
import remarkGfm from "remark-gfm";

const postsDir = path.join(process.cwd(), "src", "content", "mdx");

export type MdxPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export async function getAllMdxPosts(): Promise<MdxPost[]> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const full = path.join(postsDir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);

    return {
      slug: data.slug ?? file.replace(/\.mdx?$/, ""),
      title: data.title ?? "Untitled",
      date: data.date ?? "1970-01-01",
      excerpt: data.excerpt ?? "",
    } as MdxPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getMdxPostBySlug(slug: string) {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));
  const file = files.find((f) => f.replace(/\.mdx?$/, "") === slug || f.replace(/\.mdx?$/, "") === slug.replace(/-mdx$/, ""));
  if (!file) return null;

  const full = path.join(postsDir, file);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    meta: {
      slug: data.slug ?? file.replace(/\.mdx?$/, ""),
      title: data.title ?? "Untitled",
      date: data.date ?? "1970-01-01",
      excerpt: data.excerpt ?? "",
    },
    source: mdxSource,
  };
}
