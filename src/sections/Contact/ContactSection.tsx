import { ContactForm } from "../../components/forms/ContactForm";
import { personalData } from "../../data/personal";
import { socialsData } from "../../data/socials";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background radial soft lights */}
      <div className="absolute top-[35%] right-[-10%] w-[350px] h-[350px] rounded-full filter blur-[120px] opacity-[0.05] bg-[#8B5CF6] -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full filter blur-[120px] opacity-[0.05] bg-[#22D3EE] -z-10" />

      {/* Title */}
      <div className="flex flex-col items-start gap-2 mb-16 text-left">
        <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
          // SECURED COLLABORATIONS
        </span>
        <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let's Plan Your Growth
        </h2>
        <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left Column: Coordinates & Social Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h3 className="font-sora text-xl font-bold text-white tracking-tight">
              Ready to upscale your metrics?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Have an inquiry or looking to audit your brand conversion models? Fill in the corporate inquiry frame. Let's build a tailored conveyor belt for your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 Pt-2">
            
            {/* Email Icon Card */}
            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-4 p-4.5 rounded-2xl glass-card transition-all group hover:scale-[1.02]"
            >
              <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]/30 text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-all select-none">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest uppercase font-semibold">
                  Direct Email Inquiry
                </span>
                <p className="font-sora text-xs font-bold text-white truncate mt-0.5 select-all">
                  {personalData.email}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* Direct WhatsApp Instant sync */}
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4.5 rounded-2xl glass-card transition-all group hover:scale-[1.02]"
            >
              <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all select-none">
                <MessageCircle className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[9px] text-emerald-400 tracking-widest uppercase font-semibold">
                  Direct WhatsApp Chat
                </span>
                <p className="font-sora text-xs font-bold text-white truncate mt-0.5 select-all">
                  {personalData.phone}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* Premium Instagram Portal link */}
            <a
              href="https://www.instagram.com/harby_editz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4.5 rounded-2xl glass-card transition-all group hover:scale-[1.02]"
            >
              <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]/30 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all select-none">
                <Instagram className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[9px] text-pink-400 tracking-widest uppercase font-semibold">
                  Instagram Creative Board
                </span>
                <p className="font-sora text-xs font-bold text-white truncate mt-0.5">
                  @harby_editz
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* Location coordinates */}
            <div className="flex items-center gap-4 p-4.5 rounded-2xl glass-card select-none">
              <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02]/30 text-[#22D3EE]">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-[9px] text-[#22D3EE] tracking-widest uppercase font-semibold">
                  Operating Headquarters
                </span>
                <p className="font-sora text-xs font-bold text-white truncate mt-0.5">
                  {personalData.location}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Inquiry form */}
        <div className="lg:col-span-7 w-full">
          <ContactForm />
        </div>

      </div>

      {/* Floating Sticky WhatsApp Button (SECTION 13 Requirement) */}
      <a
        href={personalData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-90 h-11 w-11 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-1 hover:scale-108 cursor-pointer"
        title="Direct Support on WhatsApp"
        id="whatsapp-floating-corner-widget"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
      </a>
    </section>
  );
}
