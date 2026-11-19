import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getAllMdxPosts, getMdxPostBySlug } from "@/lib/mdx";
import MdxPostContent from "@/components/MdxPostContent";
import { createPageMetadata, pageSeo } from "@/lib/seo";

type Props = {
  params: { slug: string } | Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export async function generateStaticParams() {
  return getAllMdxPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllMdxPosts().find((item) => item.slug === slug);

  if (!post) {
    return createPageMetadata({
      ...pageSeo.en.blog,
      path: `/blog/${slug}`,
    });
  }

  return createPageMetadata({
    title: `${post.title} | TK Mokone`,
    description:
      post.excerpt || `Read ${post.title} by Thabiso Kenneth Mokone.`,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getMdxPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="mb-10">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to articles
        </Link>
      </div>

      <article className="mx-auto max-w-3xl">
        <header className="mb-12 border-b border-border pb-10">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>Article</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          )}
        </header>

        <div
          className="
            mdx-content
            text-base leading-8 text-foreground/85
            [&>h1:first-child]:hidden
            [&_h1]:mb-6 [&_h1]:mt-12 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:tracking-tight
            [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:tracking-tight
            [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug
            [&_p]:mb-6
            [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
            [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6
            [&_li]:pl-1
            [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4
            [&_strong]:font-semibold [&_strong]:text-foreground
            [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/40 [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
            [&_pre]:my-8 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-muted [&_pre]:p-5 [&_pre]:text-sm [&_pre]:leading-7
            [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em]
            [&_pre_code]:bg-transparent [&_pre_code]:p-0
            [&_hr]:my-10 [&_hr]:border-border
          "
        >
          <MdxPostContent source={post.code} />
        </div>

        <footer className="mt-16 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Explore more articles
          </Link>
        </footer>
      </article>
    </main>
  );
}
