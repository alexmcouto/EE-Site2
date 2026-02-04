import { cn } from "@/lib/utils";
import type { Stat } from "@/content/site";

export function StatRow({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-6 rounded-2xl border border-ink-200 bg-white p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            {stat.label}
          </p>
          <p className="text-2xl font-semibold text-ink-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
