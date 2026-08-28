import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://harryruiz.com";
const siteTitle = "Harry Ruiz | Software Engineering Student";
const siteDescription =
  "Portfolio of Harry Ruiz, a third-year Software Engineering student building full-stack and mobile applications while working toward AI research and engineering.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Harry Ruiz",
  },
  description: siteDescription,
  applicationName: "Harry Ruiz Portfolio",
  keywords: [
    "Harry Ruiz",
    "software engineering student",
    "software developer Puerto Rico",
    "full-stack developer",
    "mobile developer",
    "Flutter developer",
    "University of Puerto Rico Mayagüez",
  ],
  authors: [{ name: "Harry Ruiz", url: siteUrl }],
  creator: "Harry Ruiz",
  publisher: "Harry Ruiz",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Harry Ruiz Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 641,
        height: 960,
        alt: "Harry Ruiz, Software Engineering student",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
