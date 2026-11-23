import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Code2,
  FileText,
} from "lucide-react";
import { getAllMdxPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.blog,
  path: "/blog",
});


function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function BlogPage() {
  const posts = getAllMdxPosts();
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 pb-12">
      {/* Introduction */}
      <section className="space-y-6">
        <Badge variant="secondary" className="w-fit gap-1.5 py-1">
          <BookOpen className="h-4 w-4" />
          Developer Journal
        </Badge>

        <div className="max-w-3xl space-y-5">
          <h1 className="font-poppins text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Ideas, code & lessons learned.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Notes from building software, exploring new technologies, solving
            problems, and growing as a developer.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span>Software development</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span>Practical learning</span>
        </div>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Featured article
            </h2>
            <Badge variant="secondary">Latest</Badge>
          </div>

          <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-colors group-hover:bg-primary/10"
            />

            <div className="relative flex flex-col gap-7">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary">
                  FEATURED
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatDate(featuredPost.date)}
                </span>
              </div>

              <div className="max-w-3xl space-y-4">
                <h3 className="font-poppins text-2xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {featuredPost.excerpt}
                </p>
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </section>
      )}

      {/* Latest articles */}
      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Keep exploring
            </p>
            <h2 className="font-poppins text-2xl font-bold tracking-tight sm:text-3xl">
              Latest articles
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            Thoughts, tutorials and project notes.
          </p>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Code2 className="h-4 w-4" />
                    <span>Development notes</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {formatDate(post.date)}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`Read ${post.title}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border px-6 py-12 text-center">
            <BookOpen className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="font-medium">More articles are on the way.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              New technical articles and project write-ups will appear here.
            </p>
          </div>
        )}
      </section>

      {/* Closing note */}
      <section className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="font-poppins text-xl font-bold">
              Built through curiosity.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Every project is an opportunity to learn something new. This
              journal documents that process, one article at a time.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore my projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
