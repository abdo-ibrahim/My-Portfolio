import Landing from "./component/Home/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdulrahman Ibrahim | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer experienced in building production-ready web applications, RESTful APIs, and AI-powered platforms.",
};

export default function Home() {
  return (
    <div>
      <Landing />
    </div>
  );
}

