import type { Metadata } from 'next';

const serviceTitles: Record<string, string> = {
  'ui-ux-design': 'UI/UX Design',
  'web-development': 'Web Development',
  'app-development': 'Mobile App Development',
  'digital-transformation': 'Digital Transformation',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = serviceTitles[slug] ?? 'Service';
  return {
    title,
    description: `Wixford's ${title} service — scalable, high-performance solutions engineered to drive measurable business growth.`,
    openGraph: {
      title: `${title} | Wixford`,
      description: `Wixford's ${title} service — scalable, high-performance solutions engineered to drive measurable business growth.`,
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
