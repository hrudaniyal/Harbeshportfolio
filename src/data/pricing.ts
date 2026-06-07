export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  popular: boolean;
  glowColor: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Growth Starter",
    price: "$999",
    period: "Single Project",
    description: "Ideal for growing founders and creators seeking a high-friction visual boost to jumpstart online engagement.",
    features: [
      "4 High-Retention Short-Form Reels/Tiktok edits",
      "Dynamic typography, custom sound design & cuts",
      "Comprehensive Social Media Audit & Strategy",
      "High-converting visual header assets template",
      "1 Custom Landing Page Design (Figma to responsive React)",
      "Standard email support queue response in 48 hours"
    ],
    ctaText: "Launch Growth Starter",
    popular: false,
    glowColor: "rgba(34, 211, 238, 0.08)" // Cyan
  },
  {
    id: "professional",
    name: "Growth Architect",
    price: "$2,499",
    period: "Monthly retainer",
    description: "The complete digital scale kit for scaling businesses looking to dominate organic lists with high-impact layouts & media.",
    features: [
      "10 High-Engagement Short/Long-Form Video Reels",
      "Custom premium single-page portfolio website",
      "Semantic SEO Optimization setup including site index maps",
      "Custom brand typography systems & vector logos",
      "Handmade monthly social calendar & daily posting schedule",
      "Weekly analytics reporting + Direct WhatsApp Support access",
      "24-Hour support turnaround queue"
    ],
    ctaText: "Accelerate Professional",
    popular: true,
    glowColor: "rgba(139, 92, 246, 0.12)" // Purple
  },
  {
    id: "premium",
    name: "Enterprise Supremacy",
    price: "$4,999",
    period: "Monthly retainer",
    description: "Full-fledge hyper-growth partner mapping, editing, ranking, and executing everything with priority service.",
    features: [
      "Unlimited premium Video Edits (Retention focused)",
      "Bespoke multi-page high-speed web application",
      "Comprehensive Technical SEO Campaign, rank guarantees",
      "Complete Brand Visual identity guidebook & graphics",
      "Omnichannel strategy & ghostwriting of executive profiles",
      "Priority 1-on-1 strategy boards, live slack access",
      "Continuous optimization of leads and brand funnels"
    ],
    ctaText: "Secure Enterprise Partner",
    popular: false,
    glowColor: "rgba(167, 139, 250, 0.08)" // Soft highlight
  }
];
