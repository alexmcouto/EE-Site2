import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.about.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={site.about.title} intro={site.about.intro} />

      <Section>
        <Container className="space-y-10">
          {site.about.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-2xl border border-ink-200 bg-white p-8 shadow-soft"
            >
              <SectionHeading title={section.heading} subtitle={section.body} />
            </div>
          ))}
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-6">
          <SectionHeading
            eyebrow="Vision and values"
            title="A company shaped by expertise, training, and emblematic delivery"
            subtitle="Ensul’s vision and values reinforce long-term confidence in engineering capability across Timor-Leste."
          />
          <ul className="grid gap-4 md:grid-cols-2">
            {site.about.visionValues.map((value) => (
              <li
                key={value}
                className="rounded-2xl border border-ink-200 bg-white p-6 text-ink-700 shadow-soft"
              >
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Project discussions grounded in local experience"
            body="Ensul’s leadership supports partners seeking disciplined engineering and construction delivery."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
