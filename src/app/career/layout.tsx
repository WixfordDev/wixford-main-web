import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career',
  description: 'Join Wixford\'s elite engineering team. We\'re hiring senior product designers, full-stack engineers, and more. Remote-first, performance bonuses, and world-class benefits.',
  openGraph: {
    title: 'Career | Wixford',
    description: 'Join Wixford\'s elite engineering team — remote-first culture, performance bonuses, and world-class benefits.',
  },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
