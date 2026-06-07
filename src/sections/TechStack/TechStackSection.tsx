import { useState } from "react";
import { technologiesData, Technology } from "../../data/technologies";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, CheckCircle2, Video, Sparkles, Image, Feather, Layers, Grid, Code, Globe, TrendingUp, Search } from "lucide-react";

interface TechCardProps {
  tech: Technology;
  key?: string | number;
}

function TechCard({ tech }: TechCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Map icon strings to actual icons inside component
  const getTechIcon = (name: string) => {
    switch (name) {
      case "Video": return <Video className="w-5 h-5" />;
      case "Sparkles": return <Sparkles className="w-5 h-5" />;
      case "Image": return <Image className="w-5 h-5" />;
      case "Feather": return <Feather className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Grid": return <Grid className="w-5 h-5" />;
      case "Code": return <Code className="w-5 h-5" />;
      case "Globe": return <Globe className="w-5 h-5" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5" />;
      case "Search": return <Search className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-5 rounded-2xl glass-card flex items-center gap-4 text-left group cursor-help select-none"
    >
      {/* Mini glowing backdrop on hover */}
      <div className="absolute inset-0 bg-white/[0.01]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Circle Icon Frame */}
      <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.01] overflow-hidden text-zinc-300 group-hover:text-[#22D3EE] group-hover:border-[#22D3EE]/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all">
        {getTechIcon(tech.iconName)}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-sora text-xs font-bold text-white mb-0.5 truncate uppercase tracking-wider">
          {tech.name}
        </h4>
        <span className="font-mono text-[9px] tracking-widest text-zinc-500 font-semibold uppercase">
          {tech.category}
        </span>
      </div>

      {/* Floating Hover Tooltip panel */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 z-40 w-64 p-4 rounded-xl border border-white/[0.1] bg-[#0b1120] text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            {/* Tiny indicator arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 h-2 w-2 rotate-45 border-r border-b border-white/[0.1] bg-[#0b1120]" />

            <div className="space-y-2 text-left">
              <span className="font-mono text-[9px] text-[#22D3EE] tracking-uppercase font-semibold uppercase">
                {tech.name} • proficiency
              </span>
              <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                {tech.description}
              </p>
              
              {/* Proficiency track indicator */}
              <div className="space-y-1 pt-1.5 border-t border-white/[0.06]">
                <div className="flex justify-between items-center text-[10px] font-semibold text-zinc-400">
                  <span>Usage Calibration</span>
                  <span className="text-emerald-400">{tech.proficiency}%</span>
                </div>
                <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] rounded-full"
                    style={{ width: `${tech.proficiency}%` }}
                  />
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TechStackSection() {
  const categories = ["Design & Editing", "Development", "SEO & Analytics"] as const;

  return (
    <section id="tech-stack" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background radial overlays */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.05] bg-[#22D3EE] -z-10" />

      {/* Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // PRODUCTION TOOLS
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Client Tech Stack
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      {/* Grid of technologies mapped by categories */}
      <div className="space-y-12">
        {categories.map((cat, idx) => {
          const items = technologiesData.filter(t => t.category === cat);
          return (
            <div key={idx} className="space-y-5">
              <div className="text-left">
                <h3 className="font-mono text-[10px] tracking-widest text-[#22D3EE] uppercase font-semibold border-b border-white/[0.06] pb-2 inline-block">
                  {cat} // Matrix
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((tech) => (
                  <TechCard key={tech.id} tech={tech} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
