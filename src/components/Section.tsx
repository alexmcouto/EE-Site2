import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "muted" | "accent";
};

export function Section({ className, children, tone = "default" }: SectionProps) {
  return (
    <section
      className={cn(
        "py-14 sm:py-16 lg:py-20",
        tone === "muted" && "bg-white",
        tone === "accent" && "bg-ink-900 text-sand-50",
        className,
      )}
    >
      {children}
    </section>
  );
}
