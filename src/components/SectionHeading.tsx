import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base text-ink-700 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
