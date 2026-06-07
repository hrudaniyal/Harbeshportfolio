import { useState, useEffect } from "react";
import { sectionsConfig } from "../../config/sections";
import { Menu, X, Sparkles, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenCommandPalette: () => void;
}

export function Navbar({ activeSection, onNavigate, onOpenCommandPalette }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "py-6 bg-transparent"
        }`}
        id="luxury-site-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="navbar-brand-logo"
          >
            <div className="relative w-9 h-9 rounded-xl flex items-center justify-center font-sora font-extrabold text-sm tracking-wide bg-gradient-to-tr from-[#8B5CF6] via-[#6366F1] to-[#22D3EE] text-white overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.25)]">
              {/* Spinning glow interior */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
              HS
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-sora font-bold text-sm tracking-tight text-white group-hover:text-[#8B5CF6] transition-colors">
                Harbesh Sethia
              </span>
              <span className="text-[9px] font-mono font-semibold tracking-wider text-[#22D3EE]">
                GROWTH ARCHITECT
              </span>
            </div>
          </button>

          {/* Center Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full border border-white/[0.05] bg-white/[0.02]/30 backdrop-blur-sm">
            {sectionsConfig.map((sect) => (
              <button
                key={sect.id}
                onClick={() => handleLinkClick(sect.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                  activeSection === sect.id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeSection === sect.id && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {sect.label}
              </button>
            ))}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3">
            {/* Search Launcher Button (Command Palette) */}
            <button
              onClick={onOpenCommandPalette}
              className="p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.06] hover:border-white/[0.12] text-zinc-400 hover:text-white transition-all duration-200 hidden sm:flex items-center gap-2 cursor-pointer"
              title="Open Command Palette"
              id="navbar-search-palette-trigger"
            >
              <Search className="w-3.5 h-3.5" />
              <div className="flex items-center gap-0.5 font-mono text-[9px] text-zinc-500 font-semibold tracking-normal border border-white/10 bg-white/5 px-1 py-0.5 rounded">
                <span>{isMac ? "⌘" : "Ctrl"}</span>
                <span>K</span>
              </div>
            </button>

            {/* Glowing CTA Button */}
            <button
              onClick={() => handleLinkClick("contact")}
              className="relative overflow-hidden group px-4 py-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] font-sora font-semibold text-xs tracking-wide text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] transition-all duration-300 hidden sm:flex items-center gap-1.5 cursor-pointer"
              id="navbar-cta-hire-me"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.05] text-zinc-300 hover:text-white transition-colors cursor-pointer"
              id="navbar-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Slide-down overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-90 w-full bg-[#030712] overflow-y-auto pt-24 pb-8 px-6 lg:hidden flex flex-col justify-between"
            id="navbar-mobile-drawer"
          >
            {/* Background Light Accent for mobile menu */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5CF6]/5 rounded-full filter blur-[80px]" />

            <div className="flex flex-col gap-2 mt-4 relative z-10">
              {sectionsConfig.map((sect, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={sect.id}
                  onClick={() => handleLinkClick(sect.id)}
                  className={`text-left py-3.5 border-b border-white/[0.04] text-lg font-sora font-medium ${
                    activeSection === sect.id ? "text-[#8B5CF6]" : "text-zinc-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{sect.label}</span>
                    <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest uppercase">
                      // 0{idx + 1}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Action Widgets */}
            <div className="flex flex-col gap-4 mt-8 relative z-10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full justify-center flex items-center gap-2 py-3 border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] text-sm text-zinc-300 rounded-xl"
              >
                <Search className="w-4 h-4" />
                <span>Open Search Console</span>
              </button>

              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full justify-center flex items-center gap-2 py-3 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] font-sora text-sm font-semibold text-white rounded-xl shadow-[0_4px_15px_rgba(139,92,246,0.3)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Plan Your Growth</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
