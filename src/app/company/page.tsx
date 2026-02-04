import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { DefinitionList } from "@/components/DefinitionList";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Company",
  description: site.company.intro,
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader title={site.company.title} intro={site.company.intro} />

      <Section>
        <Container>
          <DefinitionList items={site.company.details} />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Corporate information with delivery focus"
            body="Ensul’s legal and operational foundation supports long-term engineering execution in Timor-Leste."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
