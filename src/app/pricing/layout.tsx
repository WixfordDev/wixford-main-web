import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Web & Mobile App Development Plans",
  description:
    "Transparent pricing for web development and mobile app development services by Wixford. Starter, Business, and Advanced plans for websites ($500–$6,000) and mobile apps ($2,500–$10,000+).",
  keywords: [
    "Web Development Pricing",
    "Mobile App Development Cost",
    "Software Development Rates",
    "Website Development Packages",
    "App Development Pricing",
    "Custom Software Pricing",
    "Full Stack Developer Cost",
    "React Developer Rates",
    "Next.js Development Cost",
    "Flutter App Development Cost",
    "SaaS Development Pricing",
  ],
  openGraph: {
    title: "Pricing | Web & Mobile App Development Plans | Wixford",
    description:
      "Transparent investment models for web and mobile app development. Starter from $500, Business from $1,200, Advanced web apps from $3,000. Mobile apps from $2,500.",
    url: "https://www.wixford.com/pricing",
  },
  alternates: {
    canonical: "https://www.wixford.com/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
