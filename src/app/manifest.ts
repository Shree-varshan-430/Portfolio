import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shree Varshan Personal Portfolio",
    short_name: "Varshan Portfolio",
    description: "Personal portfolio and digital logs of Shree Varshan - Full Stack Developer & AI Builder",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#fbbf24",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
