import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Digital Products Built by Wixford",
  description:
    "Explore Wixford's portfolio of 200+ custom software projects — web applications, mobile apps, SaaS platforms, and digital products delivered for startups and global enterprises.",
  keywords: [
    "Software Development Portfolio",
    "Web Development Projects",
    "Mobile App Portfolio",
    "Custom Software Projects",
    "SaaS Development Portfolio",
    "React Next.js Projects",
    "Digital Product Portfolio",
    "Web Application Examples",
    "App Development Case Studies",
  ],
  openGraph: {
    title: "Projects & Portfolio | Digital Products Built by Wixford",
    description:
      "200+ custom software projects delivered — web apps, mobile apps, SaaS platforms, real estate tech, fitness apps, and more.",
    url: "https://www.wixford.com/projects",
  },
  alternates: {
    canonical: "https://www.wixford.com/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
