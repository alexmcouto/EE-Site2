import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <Section className="gradient-surface py-12">
      <Container className="space-y-4">
        <h1 className="text-4xl font-semibold sm:text-5xl">{title}</h1>
        {intro ? <p className="max-w-3xl text-lg text-ink-700">{intro}</p> : null}
      </Container>
    </Section>
  );
}
