// Projects: curated repo names, enriched at build time from the GitHub API.
// If the API is unreachable (offline dev, rate limit) the fallback text is used,
// so the build never fails on the network.
const USER = "raghavguptaa";

// Order = display order. `blurb` overrides an empty or dull repo description.
// TODO(Raghav): the repo name must match GitHub exactly (open your repo and copy it from the URL).
// Add your other two repos below in the same format.
const featured: { repo: string; blurb?: string; tags?: string[] }[] = [
    {
    repo: "rag-x",
    blurb: "Encrypt text, files and vaults in the browser with the Web Crypto API. Your data and keys never leave your device.",
    tags: ["Cryptography", "Web Crypto API"],
  },
  {
    repo: "Palo-alto-ngfw",
    blurb: "Hands-on Palo Alto next-generation firewall labs, from interfaces to SSL decryption.",
    tags: ["Network security", "Palo Alto"],
  },
  { repo: "Cloud-pool-manager", blurb: "A deterministic controller that sizes an AWS warm pool from live CPU once a minute. No model or forecast, and it can be verified offline.", tags: ["AWS", "Cloud", "Python"] },
{ repo: "Credit-risk-analyser", blurb: "Credit risk analysis on a credit card default dataset, built in Python and Jupyter.", tags: ["Python", "Data analysis"] },
  {
    repo: "aws-cloud-threat-detection-soar",
    blurb: "A cloud security pipeline that detects unauthorized access in AWS and automatically blocks the attacker, with no manual steps.",
    tags: ["AWS", "Threat detection", "SOAR"],
  },
];

export type Project = {
  name: string;
  description: string;
  url: string;
  homepage?: string;
  language?: string;
  stars: number;
  updated?: string;
  tags: string[];
};

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
};

let cache: Project[] | undefined;

export async function getProjects(): Promise<Project[]> {
  if (cache) return cache;
  let repos: Repo[] = [];
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) repos = await res.json();
  } catch {
    /* offline — fall through to curated text */
  }
  const byName = new Map(repos.map((r) => [r.name.toLowerCase(), r]));
  cache = featured.map(({ repo, blurb, tags = [] }) => {
    const r = byName.get(repo.toLowerCase());
    return {
      name: repo,
      description: r?.description || blurb || "",
      url: r?.html_url ?? `https://github.com/${USER}/${repo}`,
      homepage: r?.homepage || undefined,
      language: r?.language ?? undefined,
      stars: r?.stargazers_count ?? 0,
      updated: r?.pushed_at,
      tags,
    };
  });
  return cache;
}
