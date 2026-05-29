import { notFound } from "next/navigation";
import { getAllMdxPosts, getMdxPostBySlug } from "@/lib/mdx";
import MdxPostContent from "@/components/MdxPostContent";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getAllMdxPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const post = await getMdxPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl w-full prose prose-slate dark:prose-invert">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-xs text-neutral-500">{post.date}</p>
      <div className="mt-4">
        <MdxPostContent source={post.code} />
      </div>
    </article>
  );
}
