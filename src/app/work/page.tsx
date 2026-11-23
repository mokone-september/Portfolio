import { LocalizedWorkPage } from "@/components/pages/LocalizedPages";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.work,
  path: "/work",
});

export default function WorkPage() {
  return <LocalizedWorkPage locale="en" />;
}
