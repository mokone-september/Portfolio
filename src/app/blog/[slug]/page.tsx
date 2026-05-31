import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllMdxPosts, getMdxPostBySlug } from "@/lib/mdx";
import MdxPostContent from "@/components/MdxPostContent";

type Props = {
  // `params` can be a Promise in the app router; allow awaiting it.
  params: { slug: string } | Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllMdxPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  // `params` may be a Promise in Next.js; await it before accessing.
  const { slug } = await params;
  const post = await getMdxPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl w-full prose prose-slate dark:prose-invert">
      <div className="mb-4">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-neutral-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
        >
          ← Back to blog
        </Link>
      </div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-xs text-neutral-500">{post.date}</p>
      <div className="mt-4">
        <MdxPostContent source={post.code} />
      </div>
    </article>
  );
}
