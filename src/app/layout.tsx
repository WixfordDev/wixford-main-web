import type { Metadata } from "next";
import "../index.css";
import ClientLayout from "@/components/ClientLayout";

const siteUrl = "https://www.wixford.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wixford | Software Development Company & Web Agency",
    template: "%s | Wixford",
  },
  description:
    "Wixford is a leading software development company offering custom web development, mobile app development, UI/UX design, and digital transformation services. Expert React, Next.js, Flutter & MERN stack developers.",
  keywords: [
    "Software Development Company",
    "Web Development Agency",
    "Mobile App Development Company",
    "Full Stack Development Services",
    "Custom Software Development",
    "Website Development",
    "Custom Website Development",
    "Full Stack Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Website",
    "Next.js Development",
    "SaaS Development",
    "CRM Development",
    "ERP Development",
    "MERN Stack Developer",
    "AI Developer",
    "Flutter App Development",
    "React Native Developer",
    "iOS App Development",
    "Android App Developer",
    "AI Chatbot Development",
    "Digital Transformation",
  ],
  authors: [{ name: "Wixford", url: siteUrl }],
  creator: "Wixford",
  publisher: "Wixford",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Wixford",
    title: "Wixford | Software Development Company & Web Agency",
    description:
      "Custom software development, web & mobile app development, UI/UX design, and digital transformation services. 200+ projects delivered globally.",
    images: [
      {
        url: "/images/webi.jpeg",
        width: 1200,
        height: 630,
        alt: "Wixford - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wixford | Software Development Company & Web Agency",
    description:
      "Custom software development, web & mobile app development, UI/UX design, and digital transformation. 200+ projects delivered globally.",
    images: ["/images/webi.jpeg"],
    creator: "@wixford",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/webi.jpeg",
    shortcut: "/images/webi.jpeg",
    apple: "/images/webi.jpeg",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wixford",
  url: siteUrl,
  logo: `${siteUrl}/images/webi.jpeg`,
  description:
    "Wixford is a global software development company specializing in web development, mobile app development, UI/UX design, and digital transformation.",
  foundingDate: "2018",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Mount Arlington",
      addressRegion: "NJ",
      postalCode: "07856",
      addressCountry: "US",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@wixford.com",
    contactType: "customer service",
  },
  sameAs: [],
  serviceArea: { "@type": "GeoShape", description: "Worldwide" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Transformation" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
