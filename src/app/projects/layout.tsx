import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Wixford\'s portfolio of world-class digital products — from real estate platforms and health apps to fintech solutions and enterprise SaaS.',
  openGraph: {
    title: 'Projects | Wixford',
    description: 'Explore Wixford\'s portfolio of world-class digital products across real estate, health, fintech, and enterprise SaaS.',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
