import type { Project } from "@/lib/types";
import { format } from "date-fns";
import TechTag from "./TechTag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition group">
      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {project.name}
        </a>
      </h3>

      {project.description && (
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      )}

      {project.languages.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.languages.map((lang) => (
            <TechTag
              key={lang.name}
              name={lang.name}
              percentage={lang.percentage}
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 text-xs text-gray-400">
        <span>Updated: {format(new Date(project.updatedAt), "yyyy-MM-dd")}</span>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-auto"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
