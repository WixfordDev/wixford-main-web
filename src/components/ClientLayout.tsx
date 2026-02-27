"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import GlobalFooter from "@/components/GlobalFooter";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isProjectDetails = pathname ? pathname.startsWith("/projects/materio") : false;

  if (isProjectDetails) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <Navbar />
      <main>{children}</main>
      <GlobalFooter />
    </SmoothScroll>
  );
}
