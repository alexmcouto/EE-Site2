import type { DefinitionItem } from "@/content/site";

export function DefinitionList({ items }: { items: DefinitionItem[] }) {
  return (
    <dl className="grid gap-6 rounded-2xl border border-ink-200 bg-white p-8 shadow-soft">
      {items.map((item) => (
        <div key={item.term} className="space-y-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            {item.term}
          </dt>
          <dd className="text-base text-ink-800">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
