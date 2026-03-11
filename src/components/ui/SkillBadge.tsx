import type { Skill } from "@/lib/types";

interface SkillBadgeProps {
  skill: Skill;
  colorClass: string;
}

export default function SkillBadge({ skill, colorClass }: SkillBadgeProps) {
  return (
    <span className={`px-3 py-1.5 ${colorClass} rounded-full text-sm font-medium`}>
      {skill.name}
      {skill.experience && ` (${skill.experience})`}
    </span>
  );
}
