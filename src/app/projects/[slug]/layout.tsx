import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return {
    title,
    description: `Explore the ${title} project by Wixford — a world-class digital product built with precision engineering and strategic design.`,
    openGraph: {
      title: `${title} | Wixford`,
      description: `Explore the ${title} project by Wixford — a world-class digital product built with precision engineering and strategic design.`,
    },
  };
}

export default function ProjectSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
