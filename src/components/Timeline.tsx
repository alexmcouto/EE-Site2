import type { TimelineItem } from "@/content/site";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.date} className="flex gap-6">
          <div className="w-24 text-sm font-semibold text-ink-600">{item.date}</div>
          <div className="flex-1 rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
            <p className="text-ink-700">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
