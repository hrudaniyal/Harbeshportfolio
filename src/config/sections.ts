export interface SectionMeta {
  id: string;
  label: string;
}

export const sectionsConfig: SectionMeta[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "portfolio", label: "Portfolio" },
  { id: "case-studies", label: "Case Studies" },
  { id: "pricing", label: "Pricing" },
  { id: "blog", label: "Blog" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" }
];
