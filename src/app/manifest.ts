import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PsyNeural",
    short_name: "PsyNeural",
    description:
      "PsychNeural AI uses advanced technology to diagnose and treat mental health conditions, offering innovative and personalized solutions. Our AI-driven approach aims to improve patient outcomes and enhance overall mental wellness",
    start_url: "/dashboard/playground",
    display: "standalone",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "16x16",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  };
}
