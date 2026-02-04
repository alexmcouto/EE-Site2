"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { primaryNav } from "@/components/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-sand-50/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-base font-semibold text-ink-900">{site.brand.name}</span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
            {site.brand.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-ink-600 transition hover:text-ink-900",
                  active && "text-ink-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href={site.ctas.secondary.href}>{site.ctas.secondary.label}</Link>
          </Button>
          <Button asChild size="sm">
            <Link href={site.ctas.primary.href}>{site.ctas.primary.label}</Link>
          </Button>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <Button asChild size="sm">
            <Link href={site.ctas.primary.href}>Contact</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
