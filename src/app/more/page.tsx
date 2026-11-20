import { LocalizedMorePage } from "@/components/pages/LocalizedPages";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.more,
  path: "/more",
});

export default function MorePage() {
  return <LocalizedMorePage locale="en" />;
}
