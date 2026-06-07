import { useState, useEffect } from "react";
import { sectionsConfig } from "../../config/sections";
import { socialsData } from "../../data/socials";
import { personalData } from "../../data/personal";
import { ChevronUp, Command, ArrowUpRight, Github, Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react";

interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenCommandPalette: () => void;
}

export function Footer({ onNavigate, onOpenCommandPalette }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to map socials icon string to Lucide React component
  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Github": return <Github className="w-4 h-4" />;
      case "Linkedin": return <Linkedin className="w-4 h-4" />;
      case "Instagram": return <Instagram className="w-4 h-4" />;
      case "Twitter": return <Twitter className="w-4 h-4" />;
      case "MessageCircle": return <MessageCircle className="w-4 h-4" />;
      default: return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030712] pt-20 pb-12 overflow-hidden" id="luxury-site-footer">
      {/* Absolute visual highlights */}
      <div className="absolute bottom-0 right-[15%] w-96 h-96 rounded-full filter blur-[150px] opacity-[0.06] bg-[#6366F1]" />
      <div className="absolute bottom-0 left-[15%] w-96 h-96 rounded-full filter blur-[150px] opacity-[0.06] bg-[#8B5CF6]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Links & Branding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo Brand */}
          <div className="flex flex-col items-start gap-4">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 group cursor-pointer text-left"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm tracking-wide bg-gradient-to-tr from-[#8B5CF6] via-[#6366F1] to-[#22D3EE] text-white">
                HS
              </div>
              <div className="flex flex-col">
                <span className="font-sora font-bold text-sm tracking-tight text-white">Harbesh Sethia</span>
                <span className="text-[9px] font-mono tracking-widest text-[#22D3EE]">GROWTH ARCHITECT</span>
              </div>
            </button>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mt-3">
              Crafting premium bespoke video pacing structures, modern single-page visual interfaces, and continuous organic scale systems.
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              {socialsData.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Sitemap */}
          <div>
            <h4 className="font-sora text-white text-xs font-semibold tracking-wider uppercase mb-5">
              Sitemap Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {sectionsConfig.map((sect) => (
                <button
                  key={sect.id}
                  onClick={() => onNavigate(sect.id)}
                  className="text-left text-zinc-400 hover:text-white text-xs transition-colors py-1 cursor-pointer"
                >
                  {sect.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services & Offerings catalog links */}
          <div>
            <h4 className="font-sora text-white text-xs font-semibold tracking-wider uppercase mb-5">
              Core Expertise
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate("services")}>
                Professional Video Editing
              </li>
              <li className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate("services")}>
                Modern Website Design
              </li>
              <li className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate("services")}>
                SEO Architectural Audits
              </li>
              <li className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate("services")}>
                Social Media Growth Campaigns
              </li>
              <li className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate("services")}>
                High-Conversion Brand Identity
              </li>
            </ul>
          </div>

          {/* Location & Interactive Console details */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sora text-white text-xs font-semibold tracking-wider uppercase mb-1">
              Active Location
            </h4>
            <p className="text-zinc-400 text-xs">
              {personalData.location}
            </p>
            
            <h4 className="font-sora text-white text-xs font-semibold tracking-wider uppercase mt-3 mb-1">
              Command Console
            </h4>
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.12] text-zinc-400 hover:text-white text-xs transition-all duration-200 cursor-pointer"
            >
              <Command className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Launch Controller (Ctrl + K)</span>
            </button>
          </div>

        </div>

        {/* Divided Copyright information */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
            © 2026 HARBESH SETHIA. ALL RIGHTS RESERVED. INVENTED WITH PRECISION.
          </span>
          <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-500 tracking-wider">
            <a href="#" className="hover:text-white transition-colors">PRIVACY CODE</a>
            <a href="#" className="hover:text-white transition-colors">SERVICE STANDARDS</a>
            <a href="#" className="hover:text-white transition-colors">SECURITY AUDIT</a>
          </div>
        </div>

      </div>

      {/* Floating back to top anchor */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-90 p-3 h-11 w-11 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#6366F1] text-white flex items-center justify-center hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          title="Scroll Back To Top"
          id="scroll-to-top-footer-btn"
        >
          <ChevronUp className="w-5 h-5 animate-pulse" />
        </button>
      )}
    </footer>
  );
}
