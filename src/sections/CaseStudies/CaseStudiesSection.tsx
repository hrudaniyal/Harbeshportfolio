import { Project } from "../../data/projects";
import { motion } from "motion/react";
import { Focus, Flame, Layers, Award, Terminal, ArrowRight, Play } from "lucide-react";

interface CaseStudiesSectionProps {
  onSelectProjectById: (id: string) => void;
}

export function CaseStudiesSection({ onSelectProjectById }: CaseStudiesSectionProps) {
  return (
    <section id="case-studies" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background spotlights */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.06] bg-[#6366F1]" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full filter blur-[120px] opacity-[0.06] bg-[#8B5CF6]" />

      {/* Title */}
      <div className="flex flex-col items-start gap-2 mb-16 text-left">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // QUANTIFIED CASE FILES
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Kitaabi Josh Case Study
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      {/* Main interactive walkthrough case panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Column: Visual Mockup Container */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-card relative overflow-hidden"
             style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.5)" }}>
          
          <div className="space-y-4 text-left relative z-10">
            <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest text-[#22D3EE] uppercase font-bold">
              <Terminal className="w-3.5 h-3.5" />
              CASE FILE: AT784-KJ
            </span>

            <h3 className="font-sora text-xl font-bold text-white tracking-tight leading-snug">
              Kitaabi Josh: Redefining Digital Book Summaries
            </h3>
            
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              When Kitaabi Josh contacted Harbesh, viewer drops were occurring within the first 12 seconds. Pacing layouts were flat, rendering organic impressions completely stagnant.
            </p>
          </div>

          <div className="relative group my-8 h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop"
              alt="Kitaabi Josh Youtube Branding"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
            />
            {/* Play Button Overlay simulator */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button 
                onClick={() => onSelectProjectById("kitaabi-josh")}
                className="p-4 rounded-full bg-[#8B5CF6]/90 text-white shadow-lg scale-100 hover:scale-110 hover:bg-[#8B5CF6] hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </button>
            </div>
          </div>

          {/* Call to action anchor */}
          <button
            onClick={() => onSelectProjectById("kitaabi-josh")}
            className="flex items-center justify-center gap-2.5 w-full py-3 border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02]/40 text-xs font-semibold rounded-xl text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            <span>Read Fully Detailed Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

        {/* Right Column: Workflow Quadrant (SECTION 9 CORE REQUIREMENT) */}
        <div className="lg:col-span-7 col-span-1 flex flex-col justify-between gap-6">
          
          {/* Node 1: Problem */}
          <motion.div
            whileHover={{ x: 6 }}
            className="p-5 rounded-2xl border border-rose-500/[0.08] bg-rose-500/[x.01] hover:border-rose-500/20 transition-all flex gap-4 text-left"
          >
            <div className="p-3.5 h-fit rounded-xl bg-rose-500/10 text-rose-400 shrink-0 select-none">
              <Focus className="w-5 h-5 shadow-[0_0_10px_rgba(244,63,94,0.3)]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest font-bold">STAGE 01 //</span>
                <h4 className="font-sora text-xs font-bold uppercase tracking-wider text-white">THE PROBLEM</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Low Audience Engagement:</strong> Rigid pacing of vector overlays, static imagery layouts, and weak introductory structures lead to extreme subscriber attrition and poor watch-time rankings.
              </p>
            </div>
          </motion.div>

          {/* Node 2: Strategy */}
          <motion.div
            whileHover={{ x: 6 }}
            className="p-5 rounded-2xl border border-[#22D3EE]/[0.08] bg-[#22D3EE]/[0.01] hover:border-[#22D3EE]/20 transition-all flex gap-4 text-left"
          >
            <div className="p-3.5 h-fit rounded-xl bg-[#22D3EE]/10 text-[#22D3EE] shrink-0 select-none">
              <Flame className="w-5 h-5 shadow-[0_0_10px_rgba(34,211,238,0.3)]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest font-bold">STAGE 02 //</span>
                <h4 className="font-sora text-xs font-bold uppercase tracking-wider text-white">THE STRATEGY</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Brand Redesign & Pacing Optimization:</strong> Re-sculpting the corporate visual logo assets, designing interactive typography subtitles, and structuring high-friction timeline audio elements to command focus.
              </p>
            </div>
          </motion.div>

          {/* Node 3: Execution */}
          <motion.div
            whileHover={{ x: 6 }}
            className="p-5 rounded-2xl border border-[#8B5CF6]/[0.08] bg-[#8B5CF6]/[0.01] hover:border-[#8B5CF6]/20 transition-all flex gap-4 text-left"
          >
            <div className="p-3.5 h-fit rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] shrink-0 select-none">
              <Layers className="w-5 h-5 shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest font-bold">STAGE 03 //</span>
                <h4 className="font-sora text-xs font-bold uppercase tracking-wider text-white">THE EXECUTION</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                <strong>Attention-Capture Remodeling:</strong> Deployed specific sound effect thresholds, applied dual-camera zoom layouts, introduced dynamic graphics tracking, and launched customized template assets.
              </p>
            </div>
          </motion.div>

          {/* Node 4: Result */}
          <motion.div
            whileHover={{ x: 6 }}
            className="p-5 rounded-2xl border border-emerald-500/[0.08] bg-emerald-500/[x.01] hover:border-emerald-500/20 transition-all flex gap-4 text-left shadow-[0_0_20px_rgba(16,185,129,0.05)]"
          >
            <div className="p-3.5 h-fit rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 select-none">
              <Award className="w-5 h-5 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest font-bold">STAGE 04 //</span>
                <h4 className="font-sora text-xs font-bold uppercase tracking-wider text-white text-emerald-400 font-bold">THE RESULT</h4>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-semibold">
                <strong>300% Growth in Watch Time:</strong> Total subscriber retention rate up by 200%, 50,000+ incremental views within 90 days of execution, and channel monetization margins secured with visual efficiency.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
