export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  topics: string[];
}

export interface RepoLanguages {
  [language: string]: number;
}

export interface ParsedReadme {
  overview: string;
  technologies: string[];
  features: string[];
}

export interface Project {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  languages: { name: string; percentage: number }[];
  updatedAt: string;
  readme: ParsedReadme;
  topics: string[];
}

export interface Skill {
  name: string;
  experience?: string;
}

export interface SkillCategory {
  title: string;
  colorClass: string;
  skills: Skill[];
}

export interface Achievement {
  title: string;
  situation: string;
  action: string;
  result: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  environment: string[];
  teamSize: string;
  achievements: Achievement[];
}

export interface StudentProject {
  title: string;
  period: string;
  description: string;
  environment: string[];
  learnings: string[];
}

export interface Certification {
  name: string;
  date: string;
}
