import { useState, useEffect } from "react";
import { testimonialsData, Testimonial } from "../../data/testimonials";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background neon lights */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.05] bg-[#8B5CF6] -z-10" />

      {/* Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // CLIENT REVERBERATIONS
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Client Reviews
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      {/* Main Slide Panel Layout frame with glass styles */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="p-8 sm:p-12 rounded-3xl glass-card relative overflow-hidden select-none text-left"
            style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
          >
            {/* Massive Glowing quote icon */}
            <div className="absolute top-6 right-8 text-[#8B5CF6]/15 group-hover:text-[#8B5CF6]/30 pointer-events-none select-none">
              <Quote className="w-20 h-20 rotate-180 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
            </div>

            {/* Glowing highlight in bottom-left */}
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#22D3EE]/5 filter blur-2xl pointer-events-none -z-10" />

            <div className="space-y-6 relative z-10">
              
              {/* Star rating list */}
              <div className="flex items-center gap-1">
                {Array.from({ length: activeTestimonial.rating }).map((_, id) => (
                  <Star key={id} className="w-4 h-4 fill-[#22D3EE] text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                ))}
              </div>

              {/* Review Quote Body Text */}
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic pr-4 sm:pr-12">
                "{activeTestimonial.quote}"
              </p>

              {/* Client detailed tags profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.04]">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#8B5CF6]/30 shadow-inner">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-sora text-xs font-bold text-white mb-0.5">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-400">
                    {activeTestimonial.role} • <strong>{activeTestimonial.company}</strong>
                  </p>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel controls anchors */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-white/[0.06] bg-[#0b1120]/45 text-zinc-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.04] transition-all cursor-pointer"
            title="Previous Review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {/* Tracking bullet points indicators */}
          <div className="flex items-center gap-1.5">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? "w-6 bg-[#8B5CF6]" : "w-1.5 bg-white/10"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-white/[0.06] bg-[#0b1120]/45 text-zinc-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.04] transition-all cursor-pointer"
            title="Next Review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
