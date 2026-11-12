import Header from "./component/Header/Header";
import "./globals.css";
import { MotionConfig } from "./component/utils/MotionProvider";
import ParticlesComponent from "./component/utils/ParticlesComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Abdulrahman Ibrahim | Full Stack Software Engineer",
    template: "%s | Abdulrahman Ibrahim",
  },
  description:
    "Full Stack Software Engineer experienced in building production-ready web applications, RESTful APIs, and AI-powered platforms using modern technologies.",
  keywords: [
    "Abdulrahman Ibrahim",
    "Full Stack Software Engineer",
    "Software Engineer",
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Abdulrahman Ibrahim" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-motion-preview={process.env.NODE_ENV === "development" ? "true" : undefined} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <MotionConfig>
          <ParticlesComponent />
          <Header />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}


