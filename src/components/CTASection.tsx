import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTA = {
  label: string;
  href: string;
};

type CTASectionProps = {
  title: string;
  body: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  className?: string;
};

export function CTASection({
  title,
  body,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-ink-200 bg-white px-8 py-10 shadow-soft md:flex-row md:items-center md:justify-between",
        className,
      )}
    >
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-ink-700">{body}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild size="lg">
          <Link href={primaryCta.href}>{primaryCta.label}</Link>
        </Button>
        {secondaryCta ? (
          <Button asChild variant="outline" size="lg">
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
