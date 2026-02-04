"use client";

import { useMemo, useState } from "react";

import { FilterChips } from "@/components/FilterChips";
import { ProjectCard } from "@/components/ProjectCard";
import { projectSectors, projects } from "@/content/projects";

const allOption = "All sectors";

export function ProjectsClient() {
  const [selected, setSelected] = useState(allOption);
  const options = [allOption, ...projectSectors];

  const filtered = useMemo(() => {
    if (selected === allOption) {
      return projects;
    }
    return projects.filter((project) => project.sector === selected);
  }, [selected]);

  return (
    <div className="space-y-8">
      <FilterChips options={options} selected={selected} onChange={setSelected} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
