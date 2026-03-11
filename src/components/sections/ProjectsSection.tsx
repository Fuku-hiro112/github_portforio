import type { Project } from "@/lib/types";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Projects</SectionHeading>
        <p className="text-center text-gray-500 mb-10 text-sm">
          GitHubのpublicリポジトリから自動取得 (ISR: 1時間更新)
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ScrollFadeIn key={project.name}>
              <ProjectCard project={project} />
            </ScrollFadeIn>
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-center text-gray-400">
            リポジトリが見つかりませんでした。
          </p>
        )}
      </div>
    </section>
  );
}
