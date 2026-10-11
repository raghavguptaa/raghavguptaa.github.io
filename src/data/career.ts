// Career + education, newest first.
// TODO(Raghav): check every date below and add internships, certificates or CTFs as new entries.
export type CareerEntry = {
  kind: "work" | "education" | "milestone";
  title: string;
  org: string;
  start: string; // "2024-07"
  end?: string; // omit = present
  place?: string;
  summary: string;
  tags?: string[];
};

export const career: CareerEntry[] = [
  {
    kind: "milestone",
    title: "Enterprise Network Security with Palo Alto NGFW",
    org: "GitHub",
    start: "2026-01", // TODO(Raghav): replace with the month you started the labs
    summary:
      "Hands-on Palo Alto next-generation firewall labs, built in real deployment order: from interfaces to SSL decryption.",
    tags: ["Palo Alto", "NGFW", "SSL decryption"],
  },
  {
    kind: "education",
    title: "B.Tech, Computer Science and Engineering",
    org: "SRM Institute of Science and Technology",
    start: "2023-08",
    end: "2027-06",
    place: "India",
    summary: "Class of 2027, with a focus on network security, pentesting and blue-team work.",
  },
];

// TODO(Raghav): keep only what you have actually used, and add more as you learn.
export const skills = {
  "Network Security": ["Palo Alto NGFW", "NAT", "Security zones", "Micro-segmentation"],
  Cryptography: ["AES-256-GCM", "RSA", "Web Crypto API", "SSL/TLS"],
  "Security Ops & VAPT": ["VAPT", "Incident response", "Log analysis"],
  "Tools & Cloud": ["Kali Linux", "Nmap", "Wireshark", "Splunk", "AWS", "GCP"],
};

// The career read as a git log: a short, stable "commit hash" per entry (FNV-1a, so it never
// changes between builds) and a conventional-commit style message. Shared by /career/ and the
// home page's career card, so both show the same log.
export const commitVerb = { work: "feat", milestone: "ship", education: "learn" } as const;
export const commitScope = { work: "work", milestone: "oss", education: "edu" } as const;
export function commitHash(c: CareerEntry) {
  let h = 2166136261;
  for (const ch of c.title + c.org + c.start) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}
export const commitMessage = (c: CareerEntry) => `${commitVerb[c.kind]}(${commitScope[c.kind]}): ${c.title} @ ${c.org}`;
