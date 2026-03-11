import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ai-emergency-tyres.netlify.app/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add other routes here if you add more pages later
  ];
}
