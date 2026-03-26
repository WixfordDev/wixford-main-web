import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Wixford — a global collective of engineers, designers, and strategists building digital products that move markets. Pioneering the future of digital innovation since 2018.',
  openGraph: {
    title: 'About | Wixford',
    description: 'Learn about Wixford — a global collective of engineers, designers, and strategists building digital products that move markets.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
