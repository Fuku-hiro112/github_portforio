export const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "Fuku-hiro112";
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN ?? "";

export const REVALIDATE_INTERVAL = 3600; // 1時間（秒）

export const GITHUB_API_BASE = "https://api.github.com";
export const GITHUB_RAW_BASE = "https://raw.githubusercontent.com";

export const NAV_LINKS = [
  { href: "#about", label: "自己紹介" },
  { href: "#skills", label: "スキル" },
  { href: "#experience", label: "職務経歴" },
  { href: "#projects", label: "制作物" },
  { href: "#certifications", label: "資格" },
] as const;
