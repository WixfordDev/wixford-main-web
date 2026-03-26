import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent, flexible pricing for websites and mobile apps. Wixford offers Starter, Business, and Advanced plans designed to maximize ROI for your business.',
  openGraph: {
    title: 'Pricing | Wixford',
    description: 'Transparent pricing for websites and mobile apps — Starter from $500, Business from $1,200, Advanced from $3,000.',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
