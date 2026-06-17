import type { MetadataRoute } from "next";
import { salonInfo } from "@/data/salon";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: salonInfo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
