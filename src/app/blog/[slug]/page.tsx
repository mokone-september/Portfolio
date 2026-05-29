import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxPostBySlug } from "@/lib/mdx";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post = await getMdxPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl w-full prose prose-slate dark:prose-invert">
      <h1 className="text-2xl font-bold">{post.meta.title}</h1>
      <p className="text-xs text-neutral-500">{post.meta.date}</p>
      <div className="mt-4">
        <MDXRemote {...post.source} />
      </div>
    </article>
  );
}
