import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseURL = "https://psyneural.vercel.app";

  const response = await getAllPosts();

  const blogPosts = response?.map((post: any) => {
    return `/docs/blog/posts/${post?.slug}`;
  });

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/auth/signin",
          "/auth/signup",
          "/docs/blog",
          "/support",
          "/legal/privacy-policy",
          "/legal/terms-of-service",
          "/dashboard",
          "/dashboard/playground",
          ...blogPosts,
        ],
        disallow: [],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
