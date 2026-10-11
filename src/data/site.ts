// Identity + links, shared by every page.
export const site = {
  name: "Raghav Gupta",
  short: "Raghav",
  role: "Cybersecurity student",
  location: "Ghaziabad, India",
  timezone: "Asia/Kolkata",
  email: "okraghavgupta@gmail.com",
  intro:
    "I'm learning to break systems so I can defend them. This is everything in one place: the labs, the code, and the road so far.",
  // the career page is the engineering side of the site
  careerRole: "Cybersecurity student",
  careerIntro:
    "B.Tech CSE, class of 2027. I work on network security, pentesting and blue-team skills, with hands-on Palo Alto firewall labs built in real deployment order.",
};

export const socials = [
  { id: "github", label: "GitHub", handle: "@raghavguptaa", href: "https://github.com/raghavguptaa" },
  { id: "linkedin", label: "LinkedIn", handle: "in/okraghavgupta", href: "https://www.linkedin.com/in/okraghavgupta/" },
  { id: "instagram", label: "Instagram", handle: "@raghavyrrr", href: "https://www.instagram.com/raghavyrrr/" },
] as const;

// The pages, in menu order. Shared header + footer (src/components/) render from this.
export const pages = [
  { id: "career", label: "Career", href: "/" },
  { id: "home", label: "Journey", href: "/journey/" },
] as const;
export type PageId = (typeof pages)[number]["id"];
