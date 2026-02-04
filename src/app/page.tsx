import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatRow } from "@/components/StatRow";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { featuredProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Home",
  description: site.home.hero.subhead,
};

export default function HomePage() {
  const projects = featuredProjects(site.home.featuredProjectSlugs);

  return (
    <div className="gradient-surface">
      <Section className="pt-12">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeIn className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              {site.brand.tagline}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              {site.home.hero.headline}
            </h1>
            <p className="text-lg text-ink-700">{site.home.hero.subhead}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={site.home.hero.ctas.primary.href}>
                  {site.home.hero.ctas.primary.label}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={site.home.hero.ctas.secondary.href}>
                  {site.home.hero.ctas.secondary.label}
                </Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-soft">
            <Image
              src="/images/hero-abstract.svg"
              alt="Abstract engineering lines"
              fill
              className="object-cover"
              priority
            />
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <StatRow stats={site.home.stats} />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Positioning pillars"
            title="Clear focus on quality, safety, and long-term value"
            subtitle="Ensul’s delivery model combines disciplined execution with capability building and emblematic outcomes."
          />
          <FeatureGrid features={site.home.pillars} />
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured projects"
            title="Selected works across Timor-Leste"
            subtitle="A portfolio that spans heritage rehabilitation, education, healthcare, and institutional facilities."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Current focus"
              title={site.home.currentFocus.title}
              subtitle={site.home.currentFocus.body}
            />
            <Button asChild variant="outline">
              <Link href="/current-focus">Focus details</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
              Priority delivery
            </p>
            <p className="mt-3 text-xl font-semibold text-ink-900">DFBC Block A</p>
            <p className="mt-3 text-ink-700">
              Reinforced project management, procurement control, and site operations support the
              current delivery focus.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection
            title="Ensul as a trusted engineering partner"
            body="Ensul aligns delivery discipline with long-term national development priorities."
            primaryCta={site.ctas.primary}
            secondaryCta={site.ctas.secondary}
          />
        </Container>
      </Section>
    </div>
  );
}
