import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Wixford offers end-to-end technology services — custom web development, enterprise mobile apps, strategic UI/UX design, and full-scale digital transformation.',
  openGraph: {
    title: 'Services | Wixford',
    description: 'End-to-end technology services: web development, mobile apps, UI/UX design, and digital transformation.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
