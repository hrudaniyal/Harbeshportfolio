import { Project } from "../../data/projects";
import { X, Calendar, Focus, ArrowUpRight, CheckCircle, Flame, Layers, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-150 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" id="project-case-study-modal">
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Sheet body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl glass-card text-white shadow-[0_0_50px_rgba(139,92,246,0.2)] scrollbar-thin"
        >
          {/* Cover Hero Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center brightness-[0.75]"
            />
            {/* Dark gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-black/40" />

            {/* Back Close Float Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Float Category Badge */}
            <span className="absolute bottom-6 left-6 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md font-mono text-[10px] tracking-wider uppercase text-[#22D3EE]">
              {project.category}
            </span>
          </div>

          {/* Modal Metadata Context */}
          <div className="p-6 sm:p-8 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/[0.06] pb-6">
              <div>
                <h2 className="font-sora text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>Case Showcase</span>
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span>Industry: <strong>{project.industry}</strong></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] font-sora text-xs font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
                >
                  <span>Launch Live</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Executive Case Study Quadrant (SECTION 9 Structure) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Problem & Strategy */}
              <div className="space-y-6">
                {/* Challenge Block */}
                <div className="p-5.5 rounded-2xl border border-rose-500/[0.08] bg-rose-500/[0.01]">
                  <h4 className="flex items-center gap-2 font-sora text-sm font-semibold text-rose-400 mb-3 uppercase tracking-wider">
                    <Focus className="w-4 h-4" />
                    The Challenge
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.id === "kitaabi-josh" 
                      ? "The channel was suffering from critical retention fall-offs and flatlining audience engagement metrics. Pacing of cuts felt repetitive and failed to hold digital focus spans."
                      : `The enterprise was experiencing structural visibility limitations and sub-optimal search engine metadata performance, failing to capture ready buying intent.`}
                  </p>
                </div>

                {/* Strategy Block */}
                <div className="p-5.5 rounded-2xl border border-[#22D3EE]/[0.08] bg-[#22D3EE]/[0.01]">
                  <h4 className="flex items-center gap-2 font-sora text-sm font-semibold text-[#22D3EE] mb-3 uppercase tracking-wider">
                    <Flame className="w-4 h-4" />
                    Dynamic Strategy
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {project.id === "kitaabi-josh"
                      ? "Formulated a hyper-velocity custom visual pacing model. Built robust story hooks in the first 15 frames, integrated custom visual transitions, and color graded for atmospheric quality."
                      : "Executed a comprehensive technical and structural layout redesign. Aligned structural headers, speed audit corrections, and modular token mapping for immediate fast rendering scores."}
                  </p>
                </div>
              </div>

              {/* Right Column: Execution & Results */}
              <div className="space-y-6">
                {/* Execution Block */}
                <div className="p-5.5 rounded-2xl border border-[#8B5CF6]/[0.08] bg-[#8B5CF6]/[0.01]">
                  <h4 className="flex items-center gap-2 font-sora text-sm font-semibold text-[#8B5CF6] mb-3 uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    Agile Execution
                  </h4>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5" />
                      <span>Redesigned graphic assets & custom metadata layouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5" />
                      <span>Deployed lightning-fast frameworks (React/Tailwind)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5" />
                      <span>Formulated custom semantic page structures</span>
                    </li>
                  </ul>
                </div>

                {/* Performance Results */}
                <div className="p-5.5 rounded-2xl border border-emerald-500/[0.08] bg-emerald-500/[0.01] shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                  <h4 className="flex items-center gap-2 font-sora text-sm font-semibold text-emerald-400 mb-3 uppercase tracking-wider">
                    <Award className="w-4 h-4 animate-bounce" />
                    Quantified Result
                  </h4>
                  <p className="text-xs text-zinc-200 leading-relaxed font-semibold">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Section */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h4 className="font-sora text-sm font-semibold text-zinc-300 mb-3.5 uppercase tracking-wider">
                Utilized Technology Matrix
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02]/40 text-xs text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* General Overview Section */}
            <div className="pt-6 border-t border-white/[0.06] space-y-3">
              <h4 className="font-sora text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Case Retrospective
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {project.description} Custom crafted layouts and detailed micro-animations ensure the implementation sets a premier baseline for other competitors in the market. Every decision is fully aligned with conversions and engagement guidelines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
