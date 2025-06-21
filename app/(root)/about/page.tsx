import AboutMe from "@/components/about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function AboutPage() {
  return <AboutMe />;
}
