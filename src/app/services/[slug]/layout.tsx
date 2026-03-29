import type { Metadata } from "next";

const servicesMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "ui-ux-design": {
    title: "UI/UX Design Services | Figma, Prototyping & Design Systems",
    description:
      "Professional UI/UX design services by Wixford. We create research-backed interfaces, interactive prototypes, and scalable design systems that convert users and drive business growth.",
    keywords: [
      "UI UX Design Services",
      "UX Design Company",
      "Figma Design Agency",
      "Product Design Services",
      "User Interface Design",
      "User Experience Design",
      "Design System Development",
      "Wireframing and Prototyping",
      "Usability Testing",
      "Mobile UI Design",
      "Web UI Design",
    ],
  },
  "web-development": {
    title: "Web Development Services | React, Next.js & Full Stack Solutions",
    description:
      "Expert web development services by Wixford. We build high-performance websites and web applications using React, Next.js, Node.js, TypeScript, and more. Custom website development for startups to enterprises.",
    keywords: [
      "Web Development Services",
      "Custom Website Development",
      "React Developer",
      "Next.js Development",
      "Full Stack Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "Node.js Developer",
      "TypeScript Developer",
      "SaaS Development",
      "Web Application Development",
      "MERN Stack Developer",
      "E-commerce Development",
      "CRM Development",
      "ERP Development",
    ],
  },
  "app-development": {
    title: "Mobile App Development | Flutter, React Native, iOS & Android",
    description:
      "Expert mobile app development by Wixford. We build iOS and Android apps using Flutter and React Native. From MVP to full-scale production — cross-platform mobile apps that users love.",
    keywords: [
      "Mobile App Development Company",
      "Flutter App Development",
      "React Native Developer",
      "iOS App Development",
      "Android App Developer",
      "Cross Platform App Development",
      "Mobile App Development Services",
      "App Development Agency",
      "MVP App Development",
      "App Store Optimization",
    ],
  },
  "digital-transformation": {
    title: "Digital Transformation Services | AI, Cloud Migration & DevOps",
    description:
      "Wixford's digital transformation services help businesses modernize with cloud migration (AWS, GCP, Azure), AI/ML integration, process automation, and DevOps CI/CD pipelines. AI chatbot development and trading bot solutions.",
    keywords: [
      "Digital Transformation Services",
      "Cloud Migration Services",
      "AI Developer",
      "AI Chatbot Development",
      "Trading Bot Development",
      "MT4 MT5 EA Developer",
      "Forex Trading Bot",
      "TradingView Indicator",
      "DevOps Services",
      "Process Automation",
      "Machine Learning Integration",
      "AWS Cloud Migration",
      "CI/CD Pipeline",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = servicesMeta[slug];

  if (!meta) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.wixford.com/services/${slug}`,
    },
    alternates: {
      canonical: `https://www.wixford.com/services/${slug}`,
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
