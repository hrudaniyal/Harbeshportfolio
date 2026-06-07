export interface SkillPercent {
  name: string;
  value: number;
  glowColor: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
}

export const skillsData: SkillPercent[] = [
  { name: "Video Editing", value: 95, glowColor: "#8B5CF6" },
  { name: "Website Design", value: 90, glowColor: "#6366F1" },
  { name: "Content Creation", value: 92, glowColor: "#A78BFA" },
  { name: "Social Media Management", value: 90, glowColor: "#22D3EE" },
  { name: "SEO", value: 88, glowColor: "#22D3EE" }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "Indie Growth Architect & Freelance Lead",
    subtitle: "Global Brands & Youtube Creators",
    description: "Orchestrating high-retention video timelines, modern web experiences, and programmatic growth funnels. Helped channels like Kitaabi Josh capture a 300%+ increase in watch times and secured conversion-centric pipelines.",
    tag: "Freelancing"
  },
  {
    year: "2023 - 2024",
    title: "SEO Writer & Website Designer",
    subtitle: "SaaS & Web3 Startup Advisory",
    description: "Designed bespoke digital landing interfaces on headless architectures. Audited server setups, aligned semantic content structures on client sites, and boosted domain search visibility indexes.",
    tag: "Design & SEO"
  },
  {
    year: "2022 - 2023",
    title: "Multimedia Editor & Content Scriptwriter",
    subtitle: "Social Media Distribution Network",
    description: "Designed multi-layer visual templates, scripted high-retention hooks, edited hundreds of short-form videos, and mastered continuous content recycling conveyors.",
    tag: "Content Action"
  }
];
