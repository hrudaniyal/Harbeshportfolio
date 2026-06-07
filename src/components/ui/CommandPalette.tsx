import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Sparkles, 
  CornerDownLeft, 
  Video, 
  Layout, 
  TrendingUp, 
  Share2, 
  FileText, 
  Phone, 
  Calendar,
  X
} from "lucide-react";
import { servicesData } from "../../data/services";
import { projectsData } from "../../data/projects";
import { blogsData } from "../../data/blogs";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenProject: (projectId: string) => void;
  onOpenBlog: (blogId: string) => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onOpenProject,
  onOpenBlog
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Bind Keyboard Shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Build commands listing
  const commands = [
    // General Actions
    { id: "action-home", title: "Go to Home Section", category: "Navigation", icon: Layout, action: () => onNavigate("home") },
    { id: "action-about", title: "Go to About Me Section", category: "Navigation", icon: FileText, action: () => onNavigate("about") },
    { id: "action-services", title: "Go to Services Section", category: "Navigation", icon: Sparkles, action: () => onNavigate("services") },
    { id: "action-portfolio", title: "Go to Portfolio Section", category: "Navigation", icon: Video, action: () => onNavigate("portfolio") },
    { id: "action-pricing", title: "Go to Pricing Retainers", category: "Navigation", icon: TrendingUp, action: () => onNavigate("pricing") },
    { id: "action-blog", title: "Go to Tech Blog", category: "Navigation", icon: FileText, action: () => onNavigate("blog") },
    { id: "action-contact", title: "Go to Contact", category: "Navigation", icon: Phone, action: () => onNavigate("contact") },
    { id: "action-book", title: "Book Free Calibration Call", category: "Direct Actions", icon: Calendar, action: () => window.open("https://calendly.com", "_blank", "noopener,noreferrer") },
    
    // Services direct routes
    ...servicesData.map(s => {
      let icon = Sparkles;
      if (s.iconName === "Video") icon = Video;
      if (s.iconName === "Layout") icon = Layout;
      if (s.iconName === "TrendingUp") icon = TrendingUp;
      if (s.iconName === "Share2") icon = Share2;
      return {
        id: `service-${s.id}`,
        title: `Service: ${s.title}`,
        category: "Services Offered",
        icon: icon,
        action: () => {
          onNavigate("services");
          onClose();
        }
      };
    }),

    // Projects direct routes
    ...projectsData.map(p => ({
      id: `project-${p.id}`,
      title: `Project Showcase: ${p.title}`,
      category: "Portfolio Projects",
      icon: Video,
      action: () => {
        onOpenProject(p.id);
        onClose();
      }
    })),

    // Blogs direct routes
    ...blogsData.map(b => ({
      id: `blog-${b.id}`,
      title: `Article: ${b.title}`,
      category: "Content & Blog",
      icon: FileText,
      action: () => {
        onOpenBlog(b.id);
        onClose();
      }
    }))
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Handle arrow navigations
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        onClose();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-150 flex items-start justify-center pt-[12vh] px-4">
          {/* Backdrop blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Core Command Box */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            ref={containerRef}
            onKeyDown={handleKeyDown}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1120]/95 shadow-[0_0_50px_rgba(139,92,246,0.25)] text-white"
            id="global-command-palette-panel"
          >
            {/* Input Row */}
            <div className="flex items-center px-4 py-4 border-b border-white/[0.08] gap-3">
              <Search className="w-5 h-5 text-zinc-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search anything (e.g. Video, SEO, Pricing)..."
                className="flex-1 bg-transparent border-none text-sm text-white placeholder-zinc-400 outline-none focus:ring-0"
              />
              <span className="font-mono text-[10px] text-zinc-400 border border-white/10 bg-white/5 px-1.5 py-0.5 rounded shadow">
                ESC
              </span>
              <button 
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors"
                id="close-command-palette-btn"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results Display */}
            <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin">
              {filteredCommands.length > 0 ? (
                <div>
                  {/* Category headers helper mapping */}
                  {Object.entries(
                    filteredCommands.reduce((acc, cmd) => {
                      if (!acc[cmd.category]) acc[cmd.category] = [];
                      acc[cmd.category].push(cmd);
                      return acc;
                    }, {} as Record<string, typeof filteredCommands>)
                  ).map(([category, items]) => (
                    <div key={category} className="mb-2">
                      <div className="px-3 py-1 text-[10px] font-mono tracking-widest text-[#22D3EE] uppercase font-semibold">
                        {category}
                      </div>
                      <ul>
                        {items.map((cmd) => {
                          const flatIndex = filteredCommands.findIndex((c) => c.id === cmd.id);
                          const isSelected = flatIndex === selectedIndex;
                          const CmdIcon = cmd.icon;

                          return (
                            <li
                              key={cmd.id}
                              onMouseEnter={() => setSelectedIndex(flatIndex)}
                              onClick={() => {
                                cmd.action();
                                onClose();
                              }}
                              className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                                isSelected
                                  ? "bg-white/[0.06] text-white"
                                  : "text-zinc-300 hover:bg-white/[0.02]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`p-1.5 rounded ${
                                  isSelected ? "bg-[#8B5CF6]/30 text-white" : "bg-white/5 text-zinc-400"
                                }`}>
                                  <CmdIcon className="w-4 h-4" />
                                </span>
                                <span className="text-xs font-medium">{cmd.title}</span>
                              </div>

                              {isSelected && (
                                <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-400 bg-white/[0.05] border border-white/10 px-1 py-0.5 rounded">
                                  <span>Select</span>
                                  <CornerDownLeft className="w-2.5 h-2.5" />
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-zinc-500 font-mono text-xs">
                  No matching services or operations found.
                </div>
              )}
            </div>

            {/* Floating Navigation Instructions Footer */}
            <div className="flex items-center justify-between px-4 py-2 bg-black/20 border-t border-white/[0.08] text-[10px] text-zinc-400 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="border border-white/10 bg-white/5 px-1 rounded">↑↓</span>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <span className="border border-white/10 bg-white/5 px-1 rounded">↵</span>
                  Open
                </span>
              </div>
              <span>Harbesh Sethia Engine v1.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
