import type { MetadataRoute } from "next";

const siteUrl = "https://harryruiz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-15"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/harry.jpg`,
        `${siteUrl}/faeBanner.png`,
        `${siteUrl}/atabei_banner.png`,
      ],
    },
  ];
}
