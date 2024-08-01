import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PsyNeural",
    short_name: "PsyNeural",
    description: "PsyNeural",
    start_url: "/dashboard/playground",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "16x16",
        type: "image/svg",
      },
    ],
  };
}
