import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start your digital transformation with Wixford. Get a guaranteed response within 24 hours, strict NDA protection, and a dedicated team ready to build your vision.',
  openGraph: {
    title: 'Contact | Wixford',
    description: 'Start your digital transformation. Guaranteed response within 24 hours and strict NDA protection.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
