import type { PeopleGroup } from "@/content/site";

export function PeopleList({ groups }: { groups: PeopleGroup[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-ink-900">{group.title}</h3>
          <ul className="mt-3 space-y-2 text-ink-700">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
