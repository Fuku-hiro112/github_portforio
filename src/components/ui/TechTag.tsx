interface TechTagProps {
  name: string;
  percentage: number;
}

/* GitHub-style language dot colors — keeps identity while staying minimal */
const LANG_DOT: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#dbab09",
  Python: "#3572a5",
  "C#": "#178600",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  ShaderLab: "#222c37",
  HLSL: "#aace60",
};

export default function TechTag({ name, percentage }: TechTagProps) {
  const dot = LANG_DOT[name] ?? "#9b988f";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: dot }}
      />
      {name}
      <span className="text-faint">{percentage}%</span>
    </span>
  );
}
