import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [isDone, setIsDone] = useState(false);
  
  const keywords = ["ENGAGE", "DESIGN", "OPTIMIZE", "SCALE", "ELEVATE"];

  useEffect(() => {
    // Increment progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Allow fade out animation to finish
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    // Cycle through keywords
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % keywords.length);
    }, 350);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, [onComplete, keywords.length]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#030712] text-white"
          id="global-loading-screen"
        >
          {/* Futuristic decorative background layout inside loader */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
               style={{
                 backgroundImage: `radial-gradient(ellipse at center, #8B5CF6 0%, transparent 60%)`
               }}
          />

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Spinning vector halo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute -top-12 w-28 h-28 rounded-full border border-dashed border-[#8B5CF6]/30 flex items-center justify-center"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              <Sparkles className="w-10 h-10 text-[#8B5CF6]" />
            </motion.div>

            {/* Brand Logo and Subtitle */}
            <h2 className="font-sora text-2xl font-bold tracking-widest text-white mb-2">
              HARBESH SETHIA
            </h2>
            <div className="h-6 overflow-hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWord}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs font-mono tracking-[0.25em] text-[#22D3EE] uppercase"
                >
                  {keywords[currentWord]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Micro Progress Bar */}
            <div className="relative w-64 h-[2px] bg-white/[0.05] rounded-full overflow-hidden mb-3">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE]"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            {/* Micro text representation */}
            <span className="font-mono text-[10px] text-zinc-500 tracking-widest">
              SYSTEM CONVERGENCE: {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
