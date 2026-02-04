import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { PeopleList } from "@/components/PeopleList";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Leadership",
  description: site.leadership.intro,
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader title={site.leadership.title} intro={site.leadership.intro} />

      <Section>
        <Container className="space-y-8">
          <SectionHeading title="Corporate bodies" />
          <ul className="space-y-3 rounded-2xl border border-ink-200 bg-white p-6 text-ink-700 shadow-soft">
            {site.leadership.corporateBodies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-8">
          <SectionHeading title="Management functions" />
          <PeopleList groups={site.leadership.management} />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Governance that supports delivery discipline"
            body="Ensul’s leadership structure reinforces responsible oversight and project execution confidence."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
