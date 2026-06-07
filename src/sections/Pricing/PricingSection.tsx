import { pricingPlans, PricingPlan } from "../../data/pricing";
import { siteConfig } from "../../config/site";
import { motion } from "motion/react";
import { Check, Flame, MessageSquare, Star, Sparkles } from "lucide-react";

interface PlanCardProps {
  plan: PricingPlan;
  idx: number;
  key?: string | number;
}

function PlanCard({ plan, idx }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between overflow-hidden group text-left ${
        plan.popular 
          ? "border-[#8B5CF6]/50 shadow-[0_0_30px_rgba(139,92,246,0.2)] lg:scale-103 z-10" 
          : "shadow-2xl"
      }`}
    >
      {/* Background colored glassmorphism orbits */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(150px circle at 50% 10%, ${plan.glowColor}, transparent 80%)`
        }}
      />

      <div>
        {/* Popular Recommended Badge */}
        {plan.popular && (
          <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-full text-white font-sora text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(139,92,246,0.3)] select-none">
            <Star className="w-3 h-3 fill-white" />
            <span>Recommended</span>
          </span>
        )}

        <span className="font-mono text-[10px] tracking-widest text-[#22D3EE] uppercase font-bold">
          // PACKAGE MODULE
        </span>

        <h3 className="font-sora text-sm sm:text-base font-bold text-white mt-1 mb-2 tracking-wide uppercase">
          {plan.name}
        </h3>

        <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6 max-w-xs">
          {plan.description}
        </p>

        {/* Price Display */}
        <div className="flex items-baseline gap-2 mb-8 border-b border-white/[0.04] pb-6">
          <span className="font-sora text-3.5xl sm:text-4.5xl font-extrabold text-white tracking-tight">
            {plan.price}
          </span>
          <span className="font-mono text-[10px] text-zinc-500 tracking-wider">
            / {plan.period}
          </span>
        </div>

        {/* Feature inclusions */}
        <div className="space-y-4 mb-8">
          <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-semibold">
            Service Scope Deliverables
          </span>
          <ul className="space-y-3 pt-1">
            {plan.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                <div className="h-4.5 w-4.5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#22D3EE]" />
                </div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button CTA */}
      <a
        href={siteConfig.consultationLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 font-sora text-xs font-bold rounded-xl tracking-wider uppercase transition-all duration-300 ${
          plan.popular
            ? "bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-0.5"
            : "border border-white/[0.08] bg-white/[0.01] hover:bg-white/[0.05] text-zinc-200 hover:text-white hover:-translate-y-0.5"
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>{plan.ctaText}</span>
      </a>

    </motion.div>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background spotlights */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.05] bg-[#8B5CF6] -z-10" />

      {/* Title */}
      <div className="flex flex-col items-center text-center gap-2 mb-16">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // ALIGNED AGREEMENTS
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Retainer Packages
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {pricingPlans.map((plan, idx) => (
          <PlanCard key={plan.id} plan={plan} idx={idx} />
        ))}
      </div>
    </section>
  );
}
