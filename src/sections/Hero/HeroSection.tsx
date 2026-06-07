import { useEffect, useState } from "react";
import { personalData } from "../../data/personal";
import { siteConfig } from "../../config/site";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  Video, 
  Layout, 
  Search, 
  TrendingUp, 
  FileText 
} from "lucide-react";

interface HeroSectionProps {
  onNavigateToWork: () => void;
  onNavigateToContact: () => void;
}

export function HeroSection({ onNavigateToWork, onNavigateToContact }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Video Editor", "Website Designer", "SEO Optimizer", "Content Creator"];

  // Typing effect engine
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullRole = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentFullRole.substring(0, prev.length + 1));
        if (displayText === currentFullRole) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1600);
        } else {
          timer = setTimeout(tick, 90);
        }
      } else {
        setDisplayText((prev) => currentFullRole.substring(0, prev.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          timer = setTimeout(tick, 50);
        }
      }
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden max-w-7xl mx-auto px-6"
    >
      {/* Visual highlights inside frame */}
      <div className="absolute top-[25%] left-10 w-72 h-72 rounded-full filter blur-[120px] bg-[#8B5CF6]/10 -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full z-10">
        
        {/* Left Column Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm self-start"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE] animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-300">
              👋 Hi, Welcome to Organic Growth
            </span>
          </motion.div>

          {/* Heading with gradients */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sora text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              Harbesh
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sora text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE] drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Sethia
              </span>
            </motion.h1>
          </div>

          {/* Dynamic Typist Header */}
          <div className="h-8 flex items-center">
            <p className="font-mono text-sm sm:text-base font-semibold text-[#22D3EE] uppercase tracking-wider">
              &gt; {displayText}
              <span className="animate-pulse inline-block ml-1 h-4 w-1.5 bg-[#22D3EE] align-middle" />
            </p>
          </div>

          {/* Core Biography summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl"
          >
            {personalData.shortBio} I help companies deploy custom high-pacing content algorithms to secure continuous organic engagement, and deliver pixel-perfect responsive digital applications.
          </motion.p>

          {/* Action Call to Action Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3.5 pt-4"
          >
            {/* Contact Trigger */}
            <button
              onClick={onNavigateToContact}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] font-sora font-semibold text-xs tracking-wider text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-hire-me-btn"
            >
              Hire Me
            </button>

            {/* View Work Trigger */}
            <button
              onClick={onNavigateToWork}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.01]/30 hover:bg-white/[0.06] hover:border-white/[0.15] font-sora font-semibold text-xs tracking-wider text-zinc-200 hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-view-work-btn"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Free consultations calendar sync */}
            <a
              href={siteConfig.consultationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#22D3EE]/20 bg-[#22D3EE]/5 hover:bg-[#22D3EE]/10 text-[#22D3EE] font-sora font-semibold text-xs tracking-wider transition-all transform hover:-translate-y-0.5"
              id="hero-calendar-consultation-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Consultation</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column Profile Showcase */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Main profile frame layout */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center border border-white/10 p-5 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-slate-900/40"
          >
            {/* Spinning Neon Halo background */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#8B5CF6]/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-3 rounded-full border border-dashed border-[#22D3EE]/25 animate-[spin_25s_linear_infinite_reverse]" />

            {/* Solid profile mask overlay with gradient rim lights */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/[0.08] shadow-inner bg-black">
              
              {/* Rim light simulation */}
              <div className="absolute inset-0 scale-95 rounded-full border border-t-[#8B5CF6]/50 border-r-[#22D3EE]/40 border-l-[#6366F1]/30 border-b-transparent pointer-events-none z-10" />

              <img
                src={personalData.avatarUrl}
                alt="Harbesh Sethia Profile"
                className="w-full h-full object-cover object-center scale-102 hover:scale-108 transition-transform duration-700 pointer-events-none"
              />
            </div>

            {/* Floating Service Icons around profile */}
            
            {/* 1. Video (Top Right) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 p-3 rounded-xl border border-white/[0.08] bg-[#0b1120]/90 text-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.25)]"
              title="Professional Video Editing"
            >
              <Video className="w-4 h-4" />
            </motion.div>

            {/* 2. Web Layout (Top Left) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-4 p-3 rounded-xl border border-white/[0.08] bg-[#0b1120]/90 text-[#6366F1] shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              title="Modern Website Design"
            >
              <Layout className="w-4 h-4" />
            </motion.div>

            {/* 3. SEO Search (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-2 p-3 rounded-xl border border-white/[0.08] bg-[#0b1120]/90 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.25)]"
              title="SEO Architecture"
            >
              <Search className="w-4 h-4" />
            </motion.div>

            {/* 4. Social Share (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -right-4 p-3 rounded-xl border border-white/[0.08] bg-[#0b1120]/90 text-[#A78BFA] shadow-[0_0_15px_rgba(167,139,250,0.25)]"
              title="Social Media Management"
            >
              <TrendingUp className="w-4 h-4" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
