import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Development, Mobile App & Software Solutions",
  description:
    "Wixford offers expert software development services including custom web development, mobile app development (Flutter, React Native), UI/UX design, and digital transformation. MERN stack, Next.js, and full stack solutions.",
  keywords: [
    "Web Development Services",
    "Mobile App Development Services",
    "UI/UX Design Services",
    "Digital Transformation Services",
    "Custom Software Development",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Development",
    "Flutter App Development",
    "React Native Developer",
    "MERN Stack Developer",
    "SaaS Development",
    "Frontend Developer",
    "Backend Developer",
    "Custom Website Development",
  ],
  openGraph: {
    title: "Services | Web Development, Mobile App & Software Solutions",
    description:
      "From custom web apps to mobile development, UI/UX design, and digital transformation — Wixford delivers full-stack software solutions that drive growth.",
    url: "https://www.wixford.com/services",
  },
  alternates: {
    canonical: "https://www.wixford.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
