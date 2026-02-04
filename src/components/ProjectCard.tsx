import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-ink-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-ink-400"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
          {project.sector}
        </p>
        <h3 className="text-xl font-semibold text-ink-900">{project.title}</h3>
        <p className="text-ink-700">{project.summary}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold text-ink-900">
        <span>Project details</span>
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
}
