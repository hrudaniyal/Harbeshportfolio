export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
  quote: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Aman Sharma",
    role: "Founder & Creative Lead",
    company: "Kitaabi Josh Channel",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop",
    quote: "Harbesh completely reimagined our channel branding and visual pacing. His retention-focused video editing is on an absolute different level. Our watch time exploded by over 300% in a matter of months, and our daily engagement numbers went off the charts. He is a genius growth architect!"
  },
  {
    id: "t2",
    name: "Sophia Martinez",
    role: "Marketing Director",
    company: "Vortex Digital Europe",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    quote: "Working with Harbesh has been the single best investment of our fiscal year. He did not just build a website; he sculpted an interactive experience. His Apple-level attention to pixel margins, combined with his strategic grasp of search engine alignment, increased our inbound high-tier customer leads by 210%."
  },
  {
    id: "t3",
    name: "Marcus Vance",
    role: "General Partner",
    company: "Stellar VC Studio",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    quote: "Harbesh handled our multi-channel executive social presence. He mapped out hooks, edited stellar vertical video clips, and created beautiful bespoke static cards. The sheer output. Our founder profiles accumulated over 1.2M organic impressions. He operates with flawless velocity and professional communication."
  }
];
