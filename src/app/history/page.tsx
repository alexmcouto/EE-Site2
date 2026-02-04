import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "History",
  description: site.history.intro,
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader title={site.history.title} intro={site.history.intro} />

      <Section>
        <Container className="space-y-8">
          <SectionHeading title="Milestones" subtitle="Key moments in Ensul’s local evolution." />
          <Timeline items={site.history.timeline} />
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-6">
          <SectionHeading title={site.history.legacy.heading} subtitle={site.history.legacy.body} />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Legacy-informed delivery"
            body="Ensul’s experience across sectors continues to support Timor-Leste’s national development priorities."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
