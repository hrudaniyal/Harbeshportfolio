import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function PremiumBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Track mouse position relative to viewport/document
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-[#030712]"
      id="portfolio-background-system"
    >
      {/* Frosted Glass Background Layers */}
      <div className="absolute inset-0 aurora" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise" />

      {/* Interactive Spotlight (Mouse Follow) */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-100"
          style={{
            background: `radial-gradient(450px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* 3. Fluid Aurora Blur Orbs / Radial Glow Effects */}
      {/* Aurora 1 (Purple - Top Left) */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full filter blur-[150px] opacity-[0.2] bg-[#8B5CF6]"
      />

      {/* Aurora 2 (Indigo - Bottom Right) */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full filter blur-[180px] opacity-[0.18] bg-[#6366F1]"
      />

      {/* Aurora 3 (Cyan - Center Floating) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[30%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.1] bg-[#22D3EE]"
      />

      {/* 4. Subtle Analog Grain/Noise Texture Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
