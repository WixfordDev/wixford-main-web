import type { Metadata } from "next";
import { getProjectBySlug } from "../projectsData";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.cardTitle.split(" - ")[0]} | ${project.category} Case Study`;
  const description = `${project.cardDescription} — A custom software development case study by Wixford covering design, development, and results.`;

  return {
    title,
    description,
    keywords: [
      ...project.tags,
      project.category,
      "Custom Software Development",
      "Web Development Case Study",
      "Mobile App Case Study",
      "Software Development Portfolio",
      "Wixford Projects",
    ],
    openGraph: {
      title,
      description,
      url: `https://www.wixford.com/projects/${slug}`,
      images: [
        {
          url: project.image.startsWith("/")
            ? `https://www.wixford.com${project.image}`
            : project.image,
          width: 1200,
          height: 630,
          alt: project.cardTitle,
        },
      ],
    },
    alternates: {
      canonical: `https://www.wixford.com/projects/${slug}`,
    },
  };
}

export default function ProjectSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
