import { LocalizedHomePage } from "@/components/pages/LocalizedPages";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.home,
  path: "/",
});

export default function Home() {
  return <LocalizedHomePage locale="en" />;
}
