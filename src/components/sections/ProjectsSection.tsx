import type { Project } from "@/lib/types";
import ScrollFadeIn from "@/components/ui/ScrollFadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 border-b border-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading index="04" en="Projects">
          制作物
        </SectionHeading>
        <p className="-mt-8 mb-10 text-sm text-faint">
          GitHub の public リポジトリから自動取得（ISR: 1時間更新）。
          <span className="text-accent">✦ Claude Code で開発</span>
          のバッジは、AI が実装を主導したものを示します。
        </p>
        {projects.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
            {projects.map((project) => (
              <ScrollFadeIn key={project.name} className="bg-surface h-full">
                <ProjectCard project={project} />
              </ScrollFadeIn>
            ))}
          </div>
        ) : (
          <p className="text-faint">リポジトリが見つかりませんでした。</p>
        )}
      </div>
    </section>
  );
}
