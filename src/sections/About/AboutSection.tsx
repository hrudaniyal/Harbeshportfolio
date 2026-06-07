import { skillsData, timelineData } from "../../data/skills";
import { personalData } from "../../data/personal";
import { Download, Sparkles, Award, FileText, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface AboutSectionProps {
  onNavigateToContact: () => void;
}

export function AboutSection({ onNavigateToContact }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-72 h-72 rounded-full filter blur-[150px] bg-[#6366F1]/10 -z-10" />

      {/* Title */}
      <div className="flex flex-col items-start gap-2 mb-16 text-left">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // EXECUTIVE IDENTITY
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Me
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column Profile Profile & Buttons */}
        <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="relative group w-72 h-72 sm:w-80 sm:h-80 select-none">
            {/* Outline Glow Frames */}
            <div className="absolute inset-x-0 inset-y-0 rounded-2xl border border-white/10 group-hover:border-[#8B5CF6]/30 transition-all duration-300" />
            <div className="absolute inset-x-2 inset-y-2 rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#22D3EE] opacity-15 filter blur-sm group-hover:opacity-25 transition-opacity" />

            <div className="absolute inset-3 rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900 object-cover">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" // Beautiful second professional corporate lifestyle image
                alt="Harbesh Sethia Office"
                className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href={personalData.cvUrl}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.01]/30 hover:bg-white/[0.06] font-sora font-semibold text-xs tracking-wider text-white transition-all cursor-pointer"
              id="about-download-resume-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onNavigateToContact}
              className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] font-sora font-semibold text-xs tracking-wider text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
              id="about-contact-collaborate-btn"
            >
              <span>Let's Work Together</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Column Bio, Progress & Chronological Timeline */}
        <div className="lg:col-span-7 space-y-12 text-left">
          
          <div className="space-y-4">
            <h3 className="font-sora text-xl font-bold text-white tracking-tight">
              A brief brief overview of my digital vision
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {personalData.bio} Combining technical execution with strategic, organic content pacing ensures your business does not just survive the feed, but commands authority on it.
            </p>
          </div>

          {/* Animated Skill metric Bars */}
          <div className="space-y-4.5">
            <h4 className="font-sora text-sm font-semibold tracking-wider text-zinc-300 uppercase">
              Client Capabilities
            </h4>
            
            <div className="space-y-4">
              {skillsData.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-zinc-200">{skill.name}</span>
                    <span className="font-mono text-[#22D3EE]">{skill.value}%</span>
                  </div>
                  
                  {/* Progress Frame */}
                  <div className="relative w-full h-2 bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.02]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, #8B5CF6, ${skill.glowColor})`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time Chronology Tree */}
          <div className="space-y-6 pt-6 border-t border-white/[0.06]">
            <h4 className="font-sora text-sm font-semibold tracking-wider text-zinc-300 uppercase">
              Milestone Tracks
            </h4>

            <div className="space-y-6 relative border-l border-white/[0.08] pl-5.5 ml-2.5">
              {timelineData.map((mile, id) => (
                <div key={id} className="relative space-y-1 text-left">
                  {/* Circle locator dot */}
                  <div className="absolute top-1.5 -left-[28px] w-2.5 h-2.5 rounded-full bg-[#8B5CF6] border-2 border-[#030712] shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                  
                  <span className="font-mono text-[10px] tracking-widest text-[#22D3EE] font-medium uppercase mb-0.5 inline-block">
                    {mile.year} • {mile.tag}
                  </span>

                  <h5 className="font-sora text-xs font-bold text-white">
                    {mile.title}
                  </h5>

                  <p className="text-[11px] text-zinc-400 font-semibold italic">
                    {mile.subtitle}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                    {mile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
