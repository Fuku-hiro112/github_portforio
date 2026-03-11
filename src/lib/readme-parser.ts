import type { ParsedReadme } from "./types";

const OVERVIEW_HEADINGS = [
  "概要",
  "プロジェクト概要",
  "overview",
  "description",
  "about",
];

const TECH_HEADINGS = [
  "使用技術",
  "技術スタック",
  "tech stack",
  "technologies",
  "requirements",
  "技術",
  "built with",
];

const FEATURE_HEADINGS = [
  "機能",
  "特徴",
  "features",
  "アピールポイント",
  "highlights",
];

interface Section {
  heading: string;
  content: string;
}

function splitSections(markdown: string): Section[] {
  const lines = markdown.split("\n");
  const sections: Section[] = [];
  let currentHeading = "";
  let currentContent: string[] = [];

  for (const line of lines) {
    const match = line.match(/^#{1,3}\s+(.+)/);
    if (match) {
      if (currentHeading || currentContent.length > 0) {
        sections.push({
          heading: currentHeading,
          content: currentContent.join("\n").trim(),
        });
      }
      currentHeading = match[1].trim();
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  if (currentHeading || currentContent.length > 0) {
    sections.push({
      heading: currentHeading,
      content: currentContent.join("\n").trim(),
    });
  }

  return sections;
}

function findSection(
  sections: Section[],
  headings: string[]
): string | undefined {
  const lower = headings.map((h) => h.toLowerCase());
  return sections.find((s) => lower.includes(s.heading.toLowerCase()))?.content;
}

function extractListItems(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.replace(/^[-*]\s+/, "").trim())
    .filter((line) => line.length > 0 && !line.startsWith("#"));
}

export function parseReadme(markdown: string): ParsedReadme {
  try {
    const sections = splitSections(markdown);

    const overviewRaw = findSection(sections, OVERVIEW_HEADINGS);
    const overview = overviewRaw
      ? overviewRaw.split("\n").filter((l) => l.trim()).join(" ").slice(0, 300)
      : "";

    const techRaw = findSection(sections, TECH_HEADINGS);
    const technologies = techRaw ? extractListItems(techRaw) : [];

    const featureRaw = findSection(sections, FEATURE_HEADINGS);
    const features = featureRaw ? extractListItems(featureRaw) : [];

    return { overview, technologies, features };
  } catch {
    return { overview: "", technologies: [], features: [] };
  }
}
