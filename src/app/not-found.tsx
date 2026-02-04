import Link from "next/link";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="gradient-surface min-h-[60vh]">
      <Container className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">404</p>
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="text-ink-700">
          The requested page is unavailable. Ensul’s main content is available from the homepage.
        </p>
        <Button asChild>
          <Link href="/">Home page</Link>
        </Button>
      </Container>
    </Section>
  );
}
