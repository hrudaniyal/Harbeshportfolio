import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Smile, CheckCircle, Hourglass, Flame } from "lucide-react";

interface StatItemProps {
  label: string;
  targetValue: number;
  suffix: string;
  icon: any;
  delay: number;
  key?: string | number;
}

function StatCard({ label, targetValue, suffix, icon: Icon, delay }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetValue;
    if (start === end) {
      setCount(end);
      return;
    }

    const duration = 1.5; // seconds
    const intervalTime = 30; // ms
    const totalSteps = (duration * 1000) / intervalTime;
    const stepIncrement = end / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative flex flex-col items-center justify-center p-6 rounded-2xl glass-card group overflow-hidden"
    >
      {/* Background glow highlights */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]/30 text-[#8B5CF6] group-hover:text-[#22D3EE] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all mb-4">
        <Icon className="w-5 h-5" />
      </div>

      <span className="font-sora text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1.5 flex items-center">
        {count}
        <span className="text-[#22D3EE]">{suffix}</span>
      </span>

      <span className="font-sans text-[11px] font-semibold text-zinc-400 tracking-wider uppercase group-hover:text-white transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Happy Clients", targetValue: 20, suffix: "+", icon: Smile, delay: 0 },
    { label: "Projects Completed", targetValue: 30, suffix: "+", icon: CheckCircle, delay: 0.1 },
    { label: "Years Experience", targetValue: 2, suffix: "+", icon: Hourglass, delay: 0.2 },
    { label: "Passion Metrics", targetValue: 100, suffix: "%", icon: Flame, delay: 0.3 }
  ];

  return (
    <section className="relative py-16 w-full max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            label={stat.label}
            targetValue={stat.targetValue}
            suffix={stat.suffix}
            icon={stat.icon}
            delay={stat.delay}
          />
        ))}
      </div>
    </section>
  );
}
