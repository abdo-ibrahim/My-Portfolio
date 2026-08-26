import Header from "./component/Header/Header";
import "./globals.css";
import LoadingScreen from "./component/Loading/LoadingScreen";
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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LoadingScreen>
          <Header />
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}


