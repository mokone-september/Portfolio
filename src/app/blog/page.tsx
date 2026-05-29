import Link from "next/link";
import Heading from "@/components/Heading";
import { getAllMdxPosts } from "@/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllMdxPosts();

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="flex flex-col gap-3">
        <Heading>Blog</Heading>
        <p className="text-sm text-muted-foreground">Short notes and tutorials.</p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="w-full border border-gray-100 dark:border-neutral-800 p-4 rounded-md"
          >
            <h3 className="text-lg font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-xs text-neutral-500">{post.date}</p>
            <p className="mt-2 text-sm">{post.excerpt}</p>
            <div className="mt-3">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm text-primary hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
