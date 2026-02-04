import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return { title: "Project" };
  }
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHeader title={project.title} intro={project.summary} />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeading title="Project summary" subtitle={project.summary} />
            {project.details?.length ? (
              <ul className="space-y-3 text-ink-700">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="space-y-4 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Sector</p>
              <p className="mt-2 text-base font-semibold text-ink-900">{project.sector}</p>
            </div>
            {project.location ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Location</p>
                <p className="mt-2 text-base font-semibold text-ink-900">{project.location}</p>
              </div>
            ) : null}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                Significance
              </p>
              <p className="mt-2 text-ink-700">{project.summary}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Project delivery tailored to complex requirements"
            body="Ensul’s teams align engineering expertise with disciplined construction execution."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </>
  );
}
