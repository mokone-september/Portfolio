import { getPostBySlug } from "@/content/blog/posts";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl w-full prose prose-slate dark:prose-invert">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-xs text-neutral-500">{post.date}</p>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
