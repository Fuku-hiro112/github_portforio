import {
  GITHUB_API_BASE,
  GITHUB_RAW_BASE,
  GITHUB_TOKEN,
  GITHUB_USERNAME,
  REVALIDATE_INTERVAL,
} from "./constants";
import { parseReadme } from "./readme-parser";
import type { GitHubRepo, Project, RepoLanguages } from "./types";

function headers(): HeadersInit {
  const h: HeadersInit = { Accept: "application/vnd.github.v3+json" };
  if (GITHUB_TOKEN) {
    h.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }
  return h;
}

export async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    { headers: headers(), next: { revalidate: REVALIDATE_INTERVAL } }
  );
  if (!res.ok) return [];
  const repos: GitHubRepo[] = await res.json();
  return repos.filter((r) => !r.fork);
}

export async function fetchRepoLanguages(
  repoName: string
): Promise<RepoLanguages> {
  const res = await fetch(
    `${GITHUB_API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`,
    { headers: headers(), next: { revalidate: REVALIDATE_INTERVAL } }
  );
  if (!res.ok) return {};
  return res.json();
}

async function fetchRepoReadme(repoName: string): Promise<string | null> {
  for (const branch of ["main", "master"]) {
    const res = await fetch(
      `${GITHUB_RAW_BASE}/${GITHUB_USERNAME}/${repoName}/${branch}/README.md`,
      { next: { revalidate: REVALIDATE_INTERVAL } }
    );
    if (res.ok) return res.text();
  }
  return null;
}

function toLanguagePercentages(
  langs: RepoLanguages
): { name: string; percentage: number }[] {
  const total = Object.values(langs).reduce((sum, v) => sum + v, 0);
  if (total === 0) return [];
  return Object.entries(langs).map(([name, bytes]) => ({
    name,
    percentage: Math.round((bytes / total) * 100),
  }));
}

export async function fetchAllProjects(): Promise<Project[]> {
  const repos = await fetchRepos();

  const projects = await Promise.all(
    repos.map(async (repo): Promise<Project> => {
      const [languages, readmeRaw] = await Promise.all([
        fetchRepoLanguages(repo.name),
        fetchRepoReadme(repo.name),
      ]);

      const readme = readmeRaw
        ? parseReadme(readmeRaw)
        : { overview: "", technologies: [], features: [] };

      return {
        name: repo.name,
        description: readme.overview || repo.description || "",
        url: repo.html_url,
        homepage: repo.homepage,
        languages: toLanguagePercentages(languages),
        updatedAt: repo.updated_at,
        readme,
        topics: repo.topics,
      };
    })
  );

  return projects;
}
