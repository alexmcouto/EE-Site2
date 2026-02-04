"use client";

import { cn } from "@/lib/utils";

type FilterChipsProps = {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

export function FilterChips({ options, selected, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={selected === option}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            selected === option
              ? "border-ink-900 bg-ink-900 text-sand-50"
              : "border-ink-200 bg-white text-ink-700 hover:border-ink-400",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
