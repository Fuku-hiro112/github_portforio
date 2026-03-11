interface TechTagProps {
  name: string;
  percentage: number;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-100 text-blue-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  Python: "bg-green-100 text-green-800",
  "C#": "bg-purple-100 text-purple-800",
  Java: "bg-red-100 text-red-800",
  HTML: "bg-orange-100 text-orange-800",
  CSS: "bg-pink-100 text-pink-800",
  Shell: "bg-gray-200 text-gray-700",
  Dockerfile: "bg-cyan-100 text-cyan-800",
};

export default function TechTag({ name, percentage }: TechTagProps) {
  const color = LANG_COLORS[name] ?? "bg-gray-200 text-gray-700";
  return (
    <span className={`px-2 py-0.5 ${color} rounded text-xs font-medium`}>
      {name} {percentage}%
    </span>
  );
}
