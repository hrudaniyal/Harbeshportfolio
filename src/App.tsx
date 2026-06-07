import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PremiumBackground } from "./components/animations/PremiumBackground";
import { LoadingScreen } from "./components/ui/LoadingScreen";
import { CommandPalette } from "./components/ui/CommandPalette";
import { ProjectModal } from "./components/cards/ProjectModal";
import { BlogModal } from "./components/cards/BlogModal";

// Import all premium section structures
import { HeroSection } from "./sections/Hero/HeroSection";
import { StatsSection } from "./sections/Stats/StatsSection";
import { AboutSection } from "./sections/About/AboutSection";
import { WhyMeSection } from "./sections/WhyMe/WhyMeSection";
import { ServicesSection } from "./sections/Services/ServicesSection";
import { TechStackSection } from "./sections/TechStack/TechStackSection";
import { PortfolioSection } from "./sections/Portfolio/PortfolioSection";
import { CaseStudiesSection } from "./sections/CaseStudies/CaseStudiesSection";
import { PricingSection } from "./sections/Pricing/PricingSection";
import { BlogSection } from "./sections/Blog/BlogSection";
import { TestimonialsSection } from "./sections/Testimonials/TestimonialsSection";
import { ContactSection } from "./sections/Contact/ContactSection";

import { useScrollSpy } from "./hooks/useScrollSpy";
import { useSEO } from "./hooks/useSEO";
import { Project, projectsData } from "./data/projects";
import { Blog, blogsData } from "./data/blogs";
import { sectionsConfig } from "./config/sections";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  // Initialize SEO Tags dynamically on load
  useSEO();

  // Highlight active menu item on scrollSpy intersection
  const sectionIds = sectionsConfig.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds, 120);

  // Scroll Progress indicator setup (Stripe/Linear style)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hotkey Bindings for Command Palette
  useEffect(() => {
    const handleGlobalShortcuts = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleGlobalShortcuts);
    return () => window.removeEventListener("keydown", handleGlobalShortcuts);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const handleOpenProjectById = (projectId: string) => {
    const pj = projectsData.find((p) => p.id === projectId);
    if (pj) setSelectedProject(pj);
  };

  const handleOpenBlogById = (blogId: string) => {
    const bg = blogsData.find((b) => b.id === blogId);
    if (bg) setSelectedBlog(bg);
  };

  return (
    <>
      {/* 1. Sleek Staggered Entrance Loader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative text-white min-h-screen font-sans selection:bg-[#8B5CF6]/30 selection:text-white overflow-x-hidden">
          {/* Scroll progress micro indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE] z-200 origin-left"
            style={{ scaleX }}
          />

          {/* 2. Layered Premium Background Engine */}
          <PremiumBackground />

          {/* 3. Sticky Glassmorphic Header */}
          <Navbar
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onOpenCommandPalette={() => setIsCommandOpen(true)}
          />

          {/* 4. Core Page Sections compilation */}
          <main className="relative z-10 w-full" id="luxury-page-grid">
            
            {/* Section 1: Hero split view */}
            <HeroSection
              onNavigateToWork={() => handleNavigate("portfolio")}
              onNavigateToContact={() => handleNavigate("contact")}
            />

            {/* Section 2: Stats tickers */}
            <StatsSection />

            {/* Section 3: About biography */}
            <AboutSection onNavigateToContact={() => handleNavigate("contact")} />

            {/* Section 4: Trust metrics */}
            <WhyMeSection />

            {/* Section 5: Services cards */}
            <ServicesSection />

            {/* Section 6: Tech stack nodes */}
            <TechStackSection />

            {/* Section 7: Filterable Portfolio */}
            <PortfolioSection onSelectProject={setSelectedProject} />

            {/* Section 8: Case Retranslations */}
            <CaseStudiesSection onSelectProjectById={handleOpenProjectById} />

            {/* Section 9: Pricing matrices */}
            <PricingSection />

            {/* Section 10: Blogs search and lists */}
            <BlogSection onSelectBlog={setSelectedBlog} />

            {/* Section 11: Auto testimonials reviews */}
            <TestimonialsSection />

            {/* Section 12: Glass contact structures */}
            <ContactSection />

          </main>

          {/* 5. Complete Sitemap Footer */}
          <Footer
            onNavigate={handleNavigate}
            onOpenCommandPalette={() => setIsCommandOpen(true)}
          />

          {/* 6. Command Palette Overlay (Ctrl+K) */}
          <CommandPalette
            isOpen={isCommandOpen}
            onClose={() => setIsCommandOpen(false)}
            onNavigate={handleNavigate}
            onOpenProject={(id) => handleOpenProjectById(id)}
            onOpenBlog={(id) => handleOpenBlogById(id)}
          />

          {/* 7. Case Study Immersive Overlay panel */}
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          {/* 8. Blog Immersive Overlay content panel */}
          <BlogModal
            blog={selectedBlog}
            onClose={() => setSelectedBlog(null)}
          />
        </div>
      )}
    </>
  );
}
