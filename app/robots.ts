import type { MetadataRoute } from "next";
import { salonInfo } from "@/data/salon";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${salonInfo.siteUrl}/sitemap.xml`,
  };
}
