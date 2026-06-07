import { servicesData, Service } from "../../data/services";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  service: Service;
  idx: number;
  key?: string | number;
}

function ServiceCard({ service, idx }: ServiceCardProps) {
  // Dynamically resolve icons from Lucide mapping
  const IconComponent = (Icons as any)[service.iconName] || Icons.Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card overflow-hidden group text-left"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`
      }}
    >
      {/* Absolute neon glowing border outline under matching color */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background: `radial-gradient(130px circle at 50% 10%, ${service.glowColor}, transparent 80%)`,
          border: `1px solid ${service.accentColor}30`
        }}
      />
      
      <div>
        {/* Glowing Icon Frame */}
        <div 
          className="p-3 w-fit rounded-xl border mb-6 transition-all duration-300 group-hover:scale-108"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            backgroundColor: "rgba(255,255,255,0.02)",
            color: service.accentColor,
            boxShadow: `inset 0 0 10px ${service.glowColor}`
          }}
        >
          <IconComponent className="w-5 h-5" />
        </div>

        <h3 className="font-sora text-sm sm:text-base font-bold text-white mb-2.5 tracking-wide">
          {service.title}
        </h3>

        <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Benefits grid checklists */}
      <div className="space-y-2 pb-1 border-t border-white/[0.04] pt-5">
        <span className="font-mono text-[9px] tracking-wider text-zinc-500 uppercase font-semibold">
          Included Perks
        </span>
        <ul className="space-y-1.5 pt-1.5">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
              <Icons.Check className="w-3.5 h-3.5 text-[#22D3EE] mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background neon shadows */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full filter blur-[150px] opacity-[0.06] bg-[#8B5CF6] -z-10" />

      {/* Title */}
      <div className="flex flex-col items-start gap-2 mb-16 text-left">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // SCALE STRATEGIES
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Services Offered
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((ser, index) => (
          <ServiceCard key={ser.id} service={ser} idx={index} />
        ))}
      </div>
    </section>
  );
}
