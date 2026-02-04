import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { ProjectsClient } from "@/app/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and achievements delivered by Ensul Engenharia across cultural heritage, education, healthcare, and institutional sectors.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects and Achievements"
        intro="Ensul’s portfolio spans cultural heritage, education, healthcare, institutional facilities, and critical infrastructure in Timor-Leste."
      />

      <Section>
        <Container>
          <ProjectsClient />
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Project delivery aligned with national priorities"
            body="Ensul’s teams deliver complex builds with disciplined execution and local capability development."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
