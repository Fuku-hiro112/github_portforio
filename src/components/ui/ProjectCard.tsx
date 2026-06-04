import type { Project } from "@/lib/types";
import { format } from "date-fns";
import TechTag from "./TechTag";
import { PROJECT_BUILD } from "@/config/profile";

interface ProjectCardProps {
  project: Project;
}

function BuildBadge({ build }: { build: "ai" | "self" }) {
  if (build === "ai") {
    return (
      <span className="inline-flex w-fit items-center gap-1 mb-3 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-white">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1z" />
        </svg>
        Claude Code で開発
      </span>
    );
  }
  return (
    <span className="inline-flex w-fit items-center gap-1 mb-3 rounded-full border border-accent/40 px-2.5 py-1 text-xs font-medium text-accent">
      自力実装（AIはレビューのみ）
    </span>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const build = PROJECT_BUILD[project.name];

  return (
    <div className="bg-surface p-7 h-full flex flex-col group hover:bg-accent-soft/50 transition-colors">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h3 className="font-display text-xl text-ink">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            {project.name}
          </a>
        </h3>
        <span className="text-xs text-faint tabular-nums shrink-0">
          {format(new Date(project.updatedAt), "yyyy.MM")}
        </span>
      </div>

      {build && <BuildBadge build={build} />}

      {project.description && (
        <p className="text-sm text-muted leading-relaxed mb-5 whitespace-pre-line flex-1">
          {project.description}
        </p>
      )}

      {project.languages.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
          {project.languages.map((lang) => (
            <TechTag
              key={lang.name}
              name={lang.name}
              percentage={lang.percentage}
            />
          ))}
        </div>
      )}

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1 text-xs text-accent hover:text-accent-dark transition"
      >
        View on GitHub →
      </a>
    </div>
  );
}
