import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Partners",
  description: site.partners.intro,
};

export default function PartnersPage() {
  return (
    <>
      <PageHeader title={site.partners.title} intro={site.partners.intro} />

      <Section>
        <Container className="space-y-8">
          <SectionHeading title="Corporate partners" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {site.partners.list.map((partner) => (
              <div
                key={partner}
                className="flex flex-col gap-4 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft"
              >
                <div className="relative h-20 w-full overflow-hidden rounded-xl border border-ink-100 bg-sand-50">
                  <Image
                    src="/images/partner-placeholder.svg"
                    alt="Partner placeholder"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-base font-semibold text-ink-900">{partner}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Technology partnerships with operational focus"
            body="Ensul coordinates with corporate partners to support information systems and delivery enablement."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
