// src/app/sitemap.ts

import type { MetadataRoute } from "next";

const siteUrl = "https://lakesarearandr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/rentals",
      priority: 0.95,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/gallery",
      priority: 0.75,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}