import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactForm } from "@/app/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.contact.intro,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title={site.contact.title} intro={site.contact.intro} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-ink-200 bg-white p-8 shadow-soft">
            <ContactForm />
          </div>
          <div className="space-y-4 rounded-2xl border border-ink-200 bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              Head office
            </p>
            <p className="text-base text-ink-900">{site.contact.address[0]}</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
