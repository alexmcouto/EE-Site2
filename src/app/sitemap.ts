import { siteUrl } from "@/lib/metadata";
import { projects } from "@/content/projects";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/history",
    "/projects",
    "/current-focus",
    "/leadership",
    "/partners",
    "/company",
    "/contact",
  ];

  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const urls = [...staticRoutes, ...projectRoutes];

  return urls.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
