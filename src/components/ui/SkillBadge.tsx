import type { Skill } from "@/lib/types";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const featured = Boolean(skill.experience);
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 px-3 py-1.5 rounded-full text-sm border ${
        featured
          ? "border-accent/40 bg-accent-soft text-ink font-medium"
          : "border-line bg-surface text-muted"
      }`}
    >
      {skill.name}
      {skill.experience && (
        <span className="text-accent text-xs">{skill.experience}</span>
      )}
    </span>
  );
}
