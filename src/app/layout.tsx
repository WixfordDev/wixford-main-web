import type { Metadata } from "next";
import "../index.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Wixford",
  description: "Wixford - Web Development Company",
  icons: {
    icon: "/images/webi.jpeg",
    shortcut: "/images/webi.jpeg",
    apple: "/images/webi.jpeg",
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
