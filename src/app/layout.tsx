import type { Metadata } from "next";
import "../index.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Wixford | Premium Digital Technology Partner",
    template: "%s | Wixford",
  },
  description: "Wixford is a premier digital technology firm delivering world-class web development, mobile apps, UI/UX design, and digital transformation solutions to startups and Fortune 500 companies.",
  keywords: ["web development", "mobile app development", "UI/UX design", "digital transformation", "Next.js", "React", "software agency"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Wixford",
    title: "Wixford | Premium Digital Technology Partner",
    description: "World-class web development, mobile apps, and UI/UX design for startups and enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
