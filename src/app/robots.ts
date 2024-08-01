import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "https://psyneural.vercel.app";
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/auth/signin",
          "/auth/signup",
          "/docs",
          "/docs/api",
          "/support",
          "/legal/privacy-policy",
          "/legal/terms-of-service",
          "/dashboard",
          "/dashboard/playground",
        ],
        disallow: [],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
