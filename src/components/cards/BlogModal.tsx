import { Blog } from "../../data/blogs";
import { X, Calendar, Clock, ArrowLeft, Bookmark, Heart, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface BlogModalProps {
  blog: Blog | null;
  onClose: () => void;
}

export function BlogModal({ blog, onClose }: BlogModalProps) {
  const [likes, setLikes] = useState(12);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!blog) return null;

  const handleLike = () => {
    if (hasLiked) {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-150 flex items-center justify-center p-4 sm:p-6 overflow-y-auto" id="blog-article-modal">
        {/* Backdrop glass blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Sheet body */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-card text-white shadow-[0_0_50px_rgba(34,211,238,0.15)] scrollbar-thin"
        >
          {/* Header Action bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 glass-nav">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>

            <div className="flex items-center gap-3">
              {/* Liked trigger */}
              <button
                onClick={handleLike}
                className={`p-2 rounded-xl transition-all cursor-pointer flex items-center gap-1 text-xs border ${
                  hasLiked 
                    ? "bg-[#8B5CF6]/15 border-[#8B5CF6]/30 text-[#8B5CF6]" 
                    : "border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.05] text-zinc-400 hover:text-white"
                }`}
                title="Like Article"
              >
                <Heart className={`w-3.5 h-3.5 ${hasLiked ? "fill-[#8B5CF6]" : ""}`} />
                <span>{likes}</span>
              </button>

              {/* Saved trigger */}
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-xl transition-all cursor-pointer border ${
                  isSaved 
                    ? "bg-[#22D3EE]/15 border-[#22D3EE]/30 text-[#22D3EE]" 
                    : "border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.05] text-zinc-400 hover:text-white"
                }`}
                title="Bookmark Article"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-[#22D3EE]" : ""}`} />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.05] text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Meta tags dates */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="px-2.5 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] font-semibold border border-[#8B5CF6]/20">
                {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                <span>{blog.date}</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>{blog.readingTime}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="font-sora text-2.5xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {blog.title}
            </h1>

            {/* Hero Cover */}
            <div className="relative h-60 sm:h-76 w-full rounded-2xl overflow-hidden shadow-inner border border-white/[0.06]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover object-center brightness-90"
              />
            </div>

            {/* Article Content Display */}
            <div className="prose prose-invert max-w-none pt-4 space-y-5 text-sm text-zinc-300 leading-relaxed font-sans">
              <p className="font-semibold text-zinc-200 text-base leading-relaxed">
                {blog.excerpt}
              </p>
              
              {/* Splitting standard markdown representation */}
              {blog.content.split("\n\n").map((chunk, index) => {
                if (chunk.startsWith("## ")) {
                  return (
                    <h2 key={index} className="font-sora text-xl font-bold text-white pt-4 text-left border-l-2 border-[#8B5CF6] pl-3">
                      {chunk.replace("## ", "")}
                    </h2>
                  );
                }
                if (chunk.startsWith("### ")) {
                  return (
                    <h3 key={index} className="font-sora text-sm font-semibold text-[#22D3EE] pt-2 text-left">
                      {chunk.replace("### ", "")}
                    </h3>
                  );
                }
                if (chunk.startsWith("- ")) {
                  return (
                    <ul key={index} className="list-disc pl-5 pl-y space-y-1.5 text-left">
                      {chunk.split("\n").map((li, i) => (
                        <li key={i}>{li.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-zinc-300 text-left">
                    {chunk}
                  </p>
                );
              })}
            </div>

            {/* Bottom Tag List */}
            <div className="pt-8 border-t border-white/[0.06] flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]/30 text-xs text-zinc-400 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author disclaimer block */}
            <div className="mt-8 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#8B5CF6]/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                  alt="Harbesh Sethia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-sora text-xs font-bold text-white mb-0.5">Written by Harbesh Sethia</p>
                <p className="text-[10px] text-zinc-400 font-mono leading-none">DIGITAL GROWTH ARCHITECT & RETENTION SPECIALIST</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
