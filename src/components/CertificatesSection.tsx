import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n";

export default function CertificatesSection({
  locale,
}: {
  locale: Locale;
}) {
  const isAfrikaans = locale === "af";

  const certificates = [
    {
      title: "HubSpot SEO II Certified",
      image: "/certificates/hubspot-seo-ii-certified.png",
      issued: isAfrikaans ? "Uitgereik: 11 Desember 2025" : "Issued: 11 December 2025",
      status: isAfrikaans ? "Geldig tot 10 Januarie 2028" : "Valid until 10 January 2028",
      expired: false,
    },
    {
      title: "SEO Certified",
      image: "/certificates/hubspot-seo-certified.png",
      issued: isAfrikaans ? "Uitgereik: 29 April 2025" : "Issued: 29 April 2025",
      status: isAfrikaans ? "Verval op 29 Mei 2026" : "Expired 29 May 2026",
      expired: true,
    },
  ];

  return (
    <section className="w-full space-y-5">
      <div className="flex items-center gap-3">
        <Award className="h-6 w-6 text-primary" />
        <h2 className="font-rubik text-2xl font-bold text-card-foreground sm:text-3xl">
          {isAfrikaans ? "Sertifisering" : "Certifications"}
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                isAfrikaans
                  ? `Bekyk sertifikaat: ${certificate.title}`
                  : `View certificate: ${certificate.title}`
              }
              className="block overflow-hidden bg-muted/40 p-3"
            >
              <Image
                src={certificate.image}
                alt={`${certificate.title} — HubSpot Academy certificate`}
                width={1200}
                height={900}
                className="h-auto w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </a>

            <div className="flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant={certificate.expired ? "secondary" : "default"}>
                  {certificate.expired
                    ? isAfrikaans
                      ? "Verval"
                      : "Expired"
                    : isAfrikaans
                      ? "Geldig"
                      : "Valid"}
                </Badge>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  {isAfrikaans ? "Bekyk sertifikaat" : "View certificate"}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div>
                <h3 className="font-rubik text-xl font-semibold text-card-foreground">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  HubSpot Academy
                </p>
              </div>

              <div className="border-t border-border pt-3 text-sm text-muted-foreground">
                <p>{certificate.issued}</p>
                <p className="mt-1 font-medium">
                  {certificate.status}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
