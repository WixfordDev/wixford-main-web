import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Our Engineering Team",
  description:
    "Join Wixford's elite engineering team. We're hiring senior product designers, full stack engineers, React/Next.js developers, Flutter developers, and more. Remote-first culture with competitive salaries.",
  keywords: [
    "Software Engineer Jobs",
    "Full Stack Developer Jobs Remote",
    "React Developer Jobs",
    "Next.js Developer Jobs",
    "Flutter Developer Jobs",
    "Mobile App Developer Jobs",
    "Software Development Jobs Remote",
    "UI UX Designer Jobs",
    "Frontend Developer Jobs",
    "Backend Developer Jobs",
    "Tech Jobs Remote",
    "Wixford Careers",
  ],
  openGraph: {
    title: "Careers at Wixford | Join Our Engineering Team",
    description:
      "Build the technologies of tomorrow with Wixford. Remote-first culture, competitive salaries, performance bonuses. Open roles in engineering and design.",
    url: "https://www.wixford.com/career",
  },
  alternates: {
    canonical: "https://www.wixford.com/career",
  },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
