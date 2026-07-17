export const siteConfig = {
  name: "TK Mokone",
  title: "TK Mokone | Software Engineer",
  description:
    "Software engineer portfolio for Thabiso Kenneth Mokone, focused on accessible and responsive web experiences.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://portfolio-ten-vert-28.vercel.app",
  ogImage: "/og-image.png",
  creator: "Thabiso Kenneth Mokone",
  twitterHandle: "@mokone-september",
} as const;
