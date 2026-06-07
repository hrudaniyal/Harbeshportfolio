import { useState } from "react";
import { projectsData, Project } from "../../data/projects";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, ArrowUpRight, CheckCircle, Smartphone, Youtube } from "lucide-react";

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Project["category"] | "all">("all");

  const categories: (Project["category"] | "all")[] = [
    "all",
    "Video Editing",
    "Website Design",
    "SEO",
    "Branding",
    "Social Media"
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <section id="portfolio" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background neon lights */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.06] bg-[#8B5CF6] -z-10" />

      {/* Main Headers */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="flex flex-col items-start gap-2 text-left">
          <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
            // MASTERPIECES CREATED
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
        </div>

        {/* Dynamic Category filtering selector */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl glass-card self-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide capitalize transition-colors cursor-pointer ${
                activeCategory === cat ? "text-white font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeCategory === cat && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-white/[0.08] rounded-xl border border-white/10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              {cat === "all" ? "All Projects" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of filtered projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, id) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45 }}
              key={proj.id}
              className={`group relative rounded-2xl glass-card overflow-hidden flex flex-col justify-between ${
                proj.isMain ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
            >
              {/* Cover Aspect Frame */}
              <div className="relative overflow-hidden aspect-[16/10] w-full">
                {/* Overlay details */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent opacity-60 pointer-events-none" />

                {/* Cover Image with Zoom */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 select-none"
                />

                {/* Floating tags */}
                <span className="absolute top-4 left-4 z-20 px-2.5 py-1.5 rounded-full bg-[#030712]/75 border border-white/10 backdrop-blur-md font-mono text-[9px] font-bold tracking-wider uppercase text-[#22D3EE]">
                  {proj.category}
                </span>

                {proj.isMain && (
                  <span className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#8B5CF6]/90 text-white font-sora text-[10px] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(139,92,246,0.4)] animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    <span>Main Highlight</span>
                  </span>
                )}

                {/* Hover trigger overlay icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="p-3.5 rounded-full bg-white text-black hover:scale-110 shadow-lg pointer-events-auto transition-transform cursor-pointer"
                    title="View Case Study"
                  >
                    <Eye className="w-5 h-5 fill-none" />
                  </button>
                </div>
              </div>

              {/* Text metadata card body */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-sora text-sm sm:text-base font-bold text-white mb-2 tracking-tight group-hover:text-[#8B5CF6] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/[0.04]">
                  {/* Results preview bullet */}
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">
                      <strong>Results:</strong> {proj.results}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-lg border border-white/[0.05] bg-white/[0.01]/30 font-mono text-[9px] text-zinc-400 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Core Action triggers Row */}
                  <div className="flex items-center gap-4 pt-3">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="text-xs font-semibold text-[#8B5CF6] hover:text-[#A78BFA] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Study Case Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
