import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Custom Software & Web Development Agency",
  description:
    "Learn about Wixford — a global software development company with 50+ engineers, 200+ projects delivered, and 6+ years of excellence in web development, mobile apps, and digital transformation.",
  keywords: [
    "About Wixford",
    "Software Development Company",
    "Web Development Agency",
    "Full Stack Development Team",
    "Custom Software Development Company",
    "Digital Innovation Studio",
    "Web Development Team",
    "Software Engineering Company",
  ],
  openGraph: {
    title: "About Wixford | Custom Software & Web Development Agency",
    description:
      "Wixford is a global collective of engineers, designers, and strategists. 200+ projects, 12 markets, 50+ team members. Building the future of digital.",
    url: "https://www.wixford.com/about",
  },
  alternates: {
    canonical: "https://www.wixford.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
