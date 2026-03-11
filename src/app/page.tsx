import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import { fetchAllProjects } from "@/lib/github";
import { GITHUB_USERNAME } from "@/lib/constants";

export const revalidate = 3600;

export default async function Home() {
  const projects = await fetchAllProjects();

  return (
    <>
      <Header githubUrl={`https://github.com/${GITHUB_USERNAME}`} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection projects={projects} />
        <CertificationsSection />
      </main>
      <Footer />
    </>
  );
}
