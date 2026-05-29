export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string; // simple HTML content stored as string
};

export const posts: Post[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    date: "2026-05-29",
    excerpt: "Short thoughts on web development and my journey.",
    contentHtml: `
      <h2>Welcome</h2>
      <p>Thanks for visiting my portfolio — this is the start of a small blog where I share notes about web development, design, and the odd tip or trick I pick up along the way.</p>
      <h3>What to expect</h3>
      <ul>
        <li>Practical front-end tips</li>
        <li>Short walkthroughs</li>
        <li>Project postmortems</li>
      </ul>
      <p>I’ll keep posts short and actionable — more to come.</p>
    `,
  },
  {
    slug: "small-css-tricks",
    title: "Small CSS tricks for cleaner layouts",
    date: "2025-12-01",
    excerpt: "A couple of tiny CSS patterns that make layout work easier.",
    contentHtml: `
      <h2>Small CSS Tricks</h2>
      <p>Here are two small patterns I use frequently:</p>
      <h4>1. Use gap on flex containers</h4>
      <p>Instead of adding margins to children, use <code>gap</code> on the parent to keep spacing consistent.</p>
      <h4>2. Min-height with padding</h4>
      <p>Use <code>min-height: calc(100vh - header-height)</code> and add padding instead of relying on exact heights.</p>
    `,
  },
];

export function getAllPosts() {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
