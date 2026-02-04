import Link from "next/link";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { primaryNav } from "@/components/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 bg-sand-50">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-ink-900">{site.brand.name}</p>
          <p className="text-sm text-ink-600">{site.brand.tagline}</p>
          <p className="text-sm text-ink-600">{site.company.details[0].description}</p>
        </div>
        <div className="grid gap-3 text-sm text-ink-600 md:justify-self-end">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink-900">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
      <div className="border-t border-ink-100 py-4 text-center text-xs text-ink-500">
        © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
