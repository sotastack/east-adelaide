import type { MetadataRoute } from "next";
import { pillars } from "@/lib/data/pillars";
import { projectSlugs } from "@/lib/data/projectSlugs";

const base =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.eastadelaidegroup.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/divisions",
    ...pillars.map((p) => `/divisions/${p.slug}`),
    "/research",
    "/projects",
    ...projectSlugs.map((s) => `/projects/${s}`),
    "/investor",
    "/contact",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
