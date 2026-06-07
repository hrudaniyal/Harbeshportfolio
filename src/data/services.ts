export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  iconName: string; // Map to Lucide Icon string in component
  glowColor: string; // For customized glassmorphism glow
  accentColor: string;
}

export const servicesData: Service[] = [
  {
    id: "video-editing",
    title: "Professional Video Editing",
    description: "Premium, highly engaging short & long-form video editing that commands attention and drives massive audience retention.",
    longDescription: "Transform raw footage into cinematic masterpieces. Specializing in YouTube video production, highly dynamic TikTok/Reels edits, color grading, advanced sound design, and custom 2D/3D motion graphics that keep eyes glued to the screen.",
    benefits: [
      "Custom sound design & mixing",
      "Dynamic typography & subtitles",
      "Advanced color grading & atmospheric look",
      "Retention-optimized pacing and hooks"
    ],
    iconName: "Video",
    glowColor: "rgba(139, 92, 246, 0.15)", // Purple
    accentColor: "#8B5CF6"
  },
  {
    id: "website-design",
    title: "Modern Website Design",
    description: "Ultra-premium, high-performance, responsive websites inspired by design leaders like Apple, Stripe, and Linear.",
    longDescription: "Crafting beautiful interactive digital interfaces designed to guide users seamlessly. I focus on lightning-fast performance, layout aesthetics, responsive fluid design, modern micro-interactions, and robust technical architectures.",
    benefits: [
      "Premium minimalist design system",
      "SEO-friendly production structures",
      "Responsive fluid layouts (Mobile/Desktop)",
      "High-speed, SEO-optimized loading performance"
    ],
    iconName: "Layout",
    glowColor: "rgba(99, 102, 241, 0.15)", // Indigo
    accentColor: "#6366F1"
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Strategic search engine architectural optimization to skyrocket organic traffic, keyword ranking, and continuous flow of buyers.",
    longDescription: "Climb the search rankings through holistic optimization: semantic keyword engineering, content indexing optimization, structured technical SEO audits, and speed-tuning for maximum visibility and sustainable organic lead generation.",
    benefits: [
      "Deep semantic keyword analysis",
      "Technical indexation optimization",
      "Speed audit & metadata structure planning",
      "High-quality content silos formulation"
    ],
    iconName: "TrendingUp",
    glowColor: "rgba(34, 211, 238, 0.15)", // Cyan
    accentColor: "#22D3EE"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Comprehensive administration of digital content distribution, scheduling, and strategic group outreach to secure customer loyalty.",
    longDescription: "Unlock the full potential of your brand presence across modern channels (YouTube, Instagram, LinkedIn, TikTok). Taking complete charge of content calendar scheduling, community conversations, visual identity, and trend piggybacking.",
    benefits: [
      "Hand-tailored weekly/monthly content calendars",
      "Direct fan response & brand community building",
      "Platform-specific visual optimization",
      "Comprehensive performance analytics dashboards"
    ],
    iconName: "Share2",
    glowColor: "rgba(167, 139, 250, 0.15)", // Highlight purple
    accentColor: "#A78BFA"
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    description: "Custom blueprinted multi-platform narrative mapping to turn viewer attention into dedicated brand evangelists.",
    longDescription: "Define your unique brand voice and distribution game plan. I script core content models, hooks for continuous views, distribution workflows, and storytelling frameworks optimized for lead generation and commercial growth.",
    benefits: [
      "Audience psychological profile blueprinting",
      "Multi-channel content repurposing map",
      "High-converting high-hook scripting",
      "Conversion funnel & CTA strategy"
    ],
    iconName: "FileText",
    glowColor: "rgba(34, 211, 238, 0.12)", // Cyan
    accentColor: "#22D3EE"
  },
  {
    id: "branding-solutions",
    title: "Branding Solutions",
    description: "High-octane visual identity design, custom typography pairing, asset creation, and logos tailored for future-proof giants.",
    longDescription: "Craft a distinct identity that instantly commands authority. Delivering comprehensive design rules, premium typographic systems, futuristic UI assets, high-contrast logos, and full visual manuals for physical & digital mediums.",
    benefits: [
      "Premium vector logo systems",
      "Curated professional typography guidelines",
      "Custom vector elements & background systems",
      "Consistent color & space identity standards"
    ],
    iconName: "Sparkles",
    glowColor: "rgba(139, 92, 246, 0.12)", // Purple
    accentColor: "#8B5CF6"
  }
];
