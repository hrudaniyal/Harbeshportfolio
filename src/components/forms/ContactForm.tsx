import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "../../config/site";
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please furnish all fields in the credentials form.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_email: siteConfig.socials.email
    };

    try {
      // Check if keys are custom placeholders
      if (
        siteConfig.emailJS.publicKey === "user_public_key_here" ||
        !siteConfig.emailJS.publicKey
      ) {
        // Fallback simulation for preview environment to prevent runtime crashing
        console.log("EmailJS keys are at default templates. Simulating successful submission:", templateParams);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Actual send process
        await emailjs.send(
          siteConfig.emailJS.serviceId,
          siteConfig.emailJS.templateId,
          templateParams,
          siteConfig.emailJS.publicKey
        );
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err: any) {
      console.error("EmailJS dispatch failed:", err);
      setStatus("error");
      setErrorMessage(err?.text || "An unexpected error occurred. Please contact meet.harbesh@gmail.com directly.");
    }
  };

  return (
    <div className="w-full relative rounded-2xl glass-card p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Glow orb background highlight */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#8B5CF6]/10 filter blur-3xl -z-10" />

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#8B5CF6]">
          <MessageSquare className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="font-sora text-sm font-semibold text-white uppercase tracking-wider">
            Deploy Growth Inquiry
          </h3>
          <p className="text-[11px] font-mono text-zinc-400">
            SECURE ENCRYPTED COMMUNICATIONS CHANNEL
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 relative z-10" id="growth-inquiry-form">
        {/* Name Input */}
        <div>
          <label htmlFor="form-name" className="block text-xs font-semibold uppercase font-sora text-zinc-300 mb-2">
            Your Professional Name
          </label>
          <input
            id="form-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Elon Musk"
            required
            className="w-full text-sm px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] focus:border-[#8B5CF6] focus:bg-white/[0.04] text-white placeholder-zinc-500 outline-none transition-all duration-200"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="form-email" className="block text-xs font-semibold uppercase font-sora text-zinc-300 mb-2">
            Your Corporate Email
          </label>
          <input
            id="form-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="elon@spacex.com"
            required
            className="w-full text-sm px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] focus:border-[#8B5CF6] focus:bg-white/[0.04] text-white placeholder-zinc-500 outline-none transition-all duration-200"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="form-message" className="block text-xs font-semibold uppercase font-sora text-zinc-300 mb-2">
            Growth Objective & Context
          </label>
          <textarea
            id="form-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your current audience engagement bottlenecks, tech stack goals, and timeline metrics..."
            required
            className="w-full text-sm px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] focus:border-[#8B5CF6] focus:bg-white/[0.04] text-white placeholder-zinc-500 outline-none resize-none transition-all duration-200"
          />
        </div>

        {/* System Error Logs Display */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2.5 p-3.5 rounded-xl border border-rose-500/10 bg-rose-500/5 text-rose-400 text-xs text-left"
          >
            <AlertCircle className="w-4 h-4 mt-0.5" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        {/* System Success Logs Display */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-2.5 p-3.5 rounded-xl border border-emerald-500/10 bg-emerald-500/5 text-emerald-400 text-xs text-left"
          >
            <CheckCircle2 className="w-4 h-4 mt-0.5" />
            <div>
              <p className="font-semibold">Inquiry Dispatched Successfully!</p>
              <p className="text-[10px] mt-1 text-zinc-300">
                Your message has been safely received. Harbesh will analyze your objectives and reply within 24 hours.
              </p>
            </div>
          </motion.div>
        )}

        {/* Call To Action Buttons */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full relative overflow-hidden group flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] font-sora font-semibold text-xs tracking-wider text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          id="submit-contact-form-btn"
        >
          {status === "submitting" ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>TRANSMITTING INQUIRY...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>LAUNCH SECURE CONNECTION</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
