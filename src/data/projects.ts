export interface Project {
  id: string;
  title: string;
  category: "all" | "Video Editing" | "Website Design" | "SEO" | "Branding" | "Social Media";
  image: string;
  description: string;
  industry: string;
  results: string;
  tags: string[];
  techStack: string[];
  previewUrl?: string;
  liveUrl?: string;
  isMain?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "kitaabi-josh",
    title: "Kitaabi Josh",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
    description: "Complete channel redesign, audience psychology-infused video editing pacing, and conversion funnel branding of Kitaabi Josh YouTube channel, turning passive listeners into dedicated learners.",
    industry: "Education & Digital Content Media",
    results: "+300% watch time growth, +200% average subscriber engagement, and 50k+ organic views generated in under 3 months.",
    tags: ["Video Production", "Branding", "Audience Pacing"],
    techStack: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Canva"],
    previewUrl: "https://youtube.com", // Standard anchor link
    liveUrl: "https://youtube.com",
    isMain: true
  },
  {
    id: "cyber-matrix-saas",
    title: "Nebula AI Cloud",
    category: "Website Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    description: "Design and deployment of a sleek developer-facing cloud computing framework. Incorporates highly complex dark-mode visuals, interactive code blocks, and 60fps glassmorphism layouts inspired by Raycast.",
    industry: "SaaS & Artificial Intelligence",
    results: "Load speed under 450ms, 45% uplift in pre-registration trials, and winner of a CSS design showcase nomination.",
    tags: ["UI/UX design", "Vite/React", "Motion", "Tailwind CSS"],
    techStack: ["React", "Figma", "Tailwind CSS", "Motion"],
    previewUrl: "#",
    liveUrl: "#",
    isMain: false
  },
  {
    id: "quantum-blockchain-seo",
    title: "Aether Blockchain Platform",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    description: "Structured technical SEO remodel and hyper-targeted semantic query alignment campaign for a decentralized finance protocol operating worldwide.",
    industry: "Web3 & Fintech",
    results: "Climbed to Google's Top 3 for 50+ hyper-competitive keywords. Tripled domain authority and boosted organic referral leads by 210%.",
    tags: ["Technical SEO", "Structure", "Ahrefs Audit"],
    techStack: ["Google Analytics", "Ahrefs", "Figma", "WordPress"],
    previewUrl: "#",
    liveUrl: "#",
    isMain: false
  },
  {
    id: "vertex-streetwear-brand",
    title: "Vertex Collective Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    description: "Comprehensive visual identity and luxury merchandise assets for a high-end futuristic streetwear fashion label targeting Generation Z.",
    industry: "Fashion & Retail",
    results: "Immediate positive reception on social channels, complete sold-out collection in 4 hours, and custom asset consistency across web and prints.",
    tags: ["Modern Logo", "Identity Guide", "Print Design"],
    techStack: ["Illustrator", "Photoshop", "Canva", "Figma"],
    previewUrl: "#",
    liveUrl: "#",
    isMain: false
  },
  {
    id: "stellar-consulting-social",
    title: "Stellar VC Campaign Studio",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    description: "Multi-channel content strategy formulation, template creation, and short-form video branding. Focused on turning early-stage venture capital founders into active LinkedIn creators.",
    industry: "Venture Capital & Finance",
    results: "Grew total reach of 3 Managing Partners by 1.2M impressions. Led directly to 15+ inbound start-up funding applications in 60 days.",
    tags: ["Social Calendar", "Content Funnels", "Hooks Strategy"],
    techStack: ["Premiere Pro", "Canva", "Photoshop", "Google Analytics"],
    previewUrl: "#",
    liveUrl: "#",
    isMain: false
  },
  {
    id: "zenith-marketplace-launch",
    title: "Zenith NFT Marketplace",
    category: "Website Design",
    image: "https://images.unsplash.com/photo-1644016544319-001c9dad8576?q=80&w=1200&auto=format&fit=crop",
    description: "Beautifully responsive user interface designed for minting, listing, and collection analysis of fine art digital tokens on multi-layer EVM chains.",
    industry: "Digital Assets",
    results: "Seamless desktop and mobile web experiences, supporting dynamic filters. Acquired by a major Web3 conglomerate after design demonstration.",
    tags: ["EVM UI", "Framer Motion", "Stripe-like Grid"],
    techStack: ["React", "Motion", "Figma", "Tailwind CSS"],
    previewUrl: "#",
    liveUrl: "#",
    isMain: false
  }
];
