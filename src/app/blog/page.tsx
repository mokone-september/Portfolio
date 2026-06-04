import Link from "next/link";
import Heading from "@/components/Heading";
import { getAllMdxPosts } from "@/lib/mdx";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function BlogPage() {
  const posts = getAllMdxPosts();

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <div className="flex flex-col gap-3">
        <Heading>My Blog</Heading>
        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
            Short notes and tutorials.
          </p>
        </FramerWrapper>
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
          <div className="w-full flex items-center justify-between gap-3">
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ 
                  variant: "default", 
                  size: "sm" 
                }),
                "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500"
              )}
            >
              Read More
              <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-white" />
            </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
