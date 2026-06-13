// src/app/robots.ts

import type { MetadataRoute } from "next";

const siteUrl = "https://lakesarearandr.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}