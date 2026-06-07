export interface Technology {
  id: string;
  name: string;
  category: "Design & Editing" | "Development" | "SEO & Analytics";
  iconName: string; // Map to dynamic Lucide icons or initials
  description: string;
  proficiency: number;
}

export const technologiesData: Technology[] = [
  {
    id: "premiere-pro",
    name: "Adobe Premiere Pro",
    category: "Design & Editing",
    iconName: "Video",
    description: "Industry-standard non-linear editing workspace for assembling structural storytelling with precision.",
    proficiency: 95
  },
  {
    id: "after-effects",
    name: "Adobe After Effects",
    category: "Design & Editing",
    iconName: "Sparkles",
    description: "Advanced motion vectors, cinematic VFX, customized tracking, and complex pacing animations.",
    proficiency: 90
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Design & Editing",
    iconName: "Image",
    description: "High-resolution graphic synthesis, compositing, thumbnail assets, and visual treatments.",
    proficiency: 92
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    category: "Design & Editing",
    iconName: "Feather",
    description: "Lossless scalar design for pristine high-end logo architectures and branding manuals.",
    proficiency: 85
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design & Editing",
    iconName: "Layers",
    description: "Interactive real-time prototype blueprints, responsive layouts, and design token maps.",
    proficiency: 90
  },
  {
    id: "canva",
    name: "Canva Pro",
    category: "Design & Editing",
    iconName: "Grid",
    description: "Rapid layout compilation, templated outreach materials, and social calendar speed-editing.",
    proficiency: 95
  },
  {
    id: "react",
    name: "React / Vite",
    category: "Development",
    iconName: "Code",
    description: "High-speed modern single-page client engines backed by state managers and Framer Motion.",
    proficiency: 88
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "Development",
    iconName: "Globe",
    description: "Robust content management systems outfitted with custom themes and lightweight structures.",
    proficiency: 85
  },
  {
    id: "google-analytics",
    name: "Google Analytics 4",
    category: "SEO & Analytics",
    iconName: "TrendingUp",
    description: "Real-time user engagement monitoring, behavioral conversion tracking, and campaign statistics.",
    proficiency: 90
  },
  {
    id: "ahrefs",
    name: "Ahrefs Premium",
    category: "SEO & Analytics",
    iconName: "Search",
    description: "Deep backlink parsing, competitor audits, and keyword opportunity indexing tools.",
    proficiency: 88
  }
];
