import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Current Focus",
  description: site.currentFocus.intro,
};

export default function CurrentFocusPage() {
  return (
    <>
      <PageHeader title={site.currentFocus.title} intro={site.currentFocus.intro} />

      <Section>
        <Container className="space-y-8">
          <SectionHeading
            title="2024 execution highlights"
            subtitle="Key actions supporting the DFBC Block A delivery focus."
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {site.currentFocus.highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-ink-200 bg-white p-6 text-ink-700 shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            title={site.currentFocus.workforce.heading}
            subtitle={site.currentFocus.workforce.body}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Delivery capacity aligned with focus projects"
            body="Ensul’s teams reinforce project management, procurement, and site operations for DFBC Block A."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
