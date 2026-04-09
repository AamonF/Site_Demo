import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "@/lib/law-firm/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/lawyer-demo/thank-you"],
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
