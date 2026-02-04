import type { Feature } from "@/content/site";

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-ink-200 bg-white p-6 shadow-soft"
        >
          <h3 className="text-xl font-semibold text-ink-900">{feature.title}</h3>
          <p className="mt-3 text-ink-700">{feature.body}</p>
        </div>
      ))}
    </div>
  );
}
