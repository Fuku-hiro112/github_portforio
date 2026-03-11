export const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "fukuda-h";
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN ?? "";

export const REVALIDATE_INTERVAL = 3600; // 1時間（秒）

export const GITHUB_API_BASE = "https://api.github.com";
export const GITHUB_RAW_BASE = "https://raw.githubusercontent.com";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
] as const;
