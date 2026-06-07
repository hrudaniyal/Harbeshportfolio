import { motion } from "motion/react";
import { Zap, Target, Rocket, Handshake } from "lucide-react";

interface WhyMeCardProps {
  title: string;
  desc: string;
  icon: any;
  accent: string;
  delay: number;
  key?: string | number;
}

function WhyMeCard({ title, desc, icon: Icon, accent, delay }: WhyMeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="p-6 rounded-2xl glass-card relative overflow-hidden group text-left"
    >
      {/* Laser glow overlay in background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(120px circle at 80% 20%, ${accent}, transparent 80%)`
        }}
      />
      
      <div 
        className="p-3 w-fit rounded-xl border mb-5 transition-colors duration-300"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.02)",
          color: accent
        }}
      >
        <Icon className="w-5 h-5 group-hover:animate-bounce" />
      </div>

      <h3 className="font-sora text-sm font-bold text-white mb-2 uppercase tracking-wide">
        {title}
      </h3>

      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export function WhyMeSection() {
  const points = [
    {
      title: "Fast Delivery",
      desc: "Time is currency. I operate on high velocity schedules, providing premium cuts & digital designs without dragging or communication delays.",
      icon: Zap,
      accent: "#22D3EE", // Cyan
      delay: 0
    },
    {
      title: "Result Driven",
      desc: "Every edit, line of code, and heading represents conversion strategy. I align designs specifically to retention curves & client acquisitions.",
      icon: Target,
      accent: "#8B5CF6", // Purple
      delay: 0.1
    },
    {
      title: "Growth Focused",
      desc: "Scaling brand traffic is the prime directive. Combining high-retention editing and modern clean React setups optimizes user journeys.",
      icon: Rocket,
      accent: "#A78BFA", // Highlight purple
      delay: 0.2
    },
    {
      title: "Long-Term Support",
      desc: "Digital scaling never stops. I partner with founders to track web statistics, optimize indexations, and scale post-campaign metrics.",
      icon: Handshake,
      accent: "#6366F1", // Indigo
      delay: 0.3
    }
  ];

  return (
    <section className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden" id="why-work-with-me">
      
      {/* Background spotlights */}
      <div className="absolute top-[30%] left-[-10%] w-72 h-72 rounded-full filter blur-[120px] bg-[#22D3EE]/5 -z-10" />

      {/* Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // CLIENT GUARANTEES
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Why Work With Me
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((pt, id) => (
          <WhyMeCard
            key={id}
            title={pt.title}
            desc={pt.desc}
            icon={pt.icon}
            accent={pt.accent}
            delay={pt.delay}
          />
        ))}
      </div>
    </section>
  );
}
