import ContactForm from "@/components/ContactForm";
import { getTranslations } from "@/lib/i18n";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import Image from "next/image";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata = createPageMetadata({
  ...pageSeo.en.contact,
  path: "/contact",
});

const ContactPage = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-start gap-5 overflow-hidden">
      {/* Right-side decorative image (hidden on small screens) */}
      <div className="pointer-events-none absolute bottom-6 right-0 z-0 hidden select-none lg:block">
        <Image
          src="/cube-leg.png"
          alt=""
          width={520}
          height={520}
          className="opacity-95"
          priority={false}
        />
      </div>

      <Badge variant="secondary" className="gap-1.5 py-1">
        <Phone className="h-4 w-4" />
        Contact Us
      </Badge>

      <section className="relative z-10 flex w-full flex-col gap-3">
        <Heading>Contact Me!</Heading>

        <div className="flex h-auto w-full items-center justify-center">
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm translations={getTranslations("en").contact} />
          </FramerWrapper>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
