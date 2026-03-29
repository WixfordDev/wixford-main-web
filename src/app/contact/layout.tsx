import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Software Development Project",
  description:
    "Get in touch with Wixford to start your web development, mobile app, or custom software project. Offices in the US, Australia, Italy, and Bangladesh. Response within 24 hours.",
  keywords: [
    "Contact Software Development Company",
    "Hire Web Developer",
    "Hire App Developer",
    "Software Development Inquiry",
    "Custom Software Quote",
    "Web Development Agency Contact",
    "Mobile App Development Quote",
    "Hire Full Stack Developer",
    "Wixford Contact",
  ],
  openGraph: {
    title: "Contact Wixford | Start Your Software Development Project",
    description:
      "Ready to build? Contact Wixford for custom web development, mobile apps, UI/UX design, or digital transformation. Response guaranteed within 24 hours.",
    url: "https://www.wixford.com/contact",
  },
  alternates: {
    canonical: "https://www.wixford.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
