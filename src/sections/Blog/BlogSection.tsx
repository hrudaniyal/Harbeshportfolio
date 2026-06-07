import { useState } from "react";
import { blogsData, Blog } from "../../data/blogs";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calendar, Clock, Bookmark, ArrowRight, BookOpen } from "lucide-react";

interface BlogSectionProps {
  onSelectBlog: (blog: Blog) => void;
}

export function BlogSection({ onSelectBlog }: BlogSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Blog["category"] | "all">("all");

  const categories: (Blog["category"] | "all")[] = [
    "all",
    "SEO",
    "Social Media",
    "Content",
    "Web Design"
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === "all" || blog.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="relative py-24 w-full max-w-7xl mx-auto px-6 overflow-hidden">
      
      {/* Background aurora lights */}
      <div className="absolute top-[35%] right-[-10%] w-[380px] h-[380px] rounded-full filter blur-[150px] opacity-[0.05] bg-[#22D3EE] -z-10" />

      {/* Main Headers */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div className="flex flex-col items-start gap-2 text-left">
          <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase font-semibold">
            // DIGITAL ARCHIVES
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Growth & Tech Blog
          </h2>
          <div className="h-1.5 w-16 rounded bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] mt-1" />
        </div>

        {/* Search Input and Pill Filter Row wrapper */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          {/* Search Box */}
          <div className="relative flex items-center glass-card rounded-2xl focus-within:border-[#8B5CF6]/50 px-4 py-2.5 w-full sm:w-64 text-white">
            <Search className="w-4 h-4 text-zinc-400 mr-2.5 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & tags..."
              className="bg-transparent border-none text-xs text-white placeholder-zinc-500 outline-none w-full"
            />
          </div>

          {/* Categories pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl glass-card w-full sm:w-auto overflow-x-auto justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide capitalize transition-colors cursor-pointer ${
                  activeCategory === cat ? "text-white font-bold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeBlogCategoryBg"
                    className="absolute inset-0 bg-white/[0.08] rounded-xl border border-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {cat === "all" ? "All" : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blogs listing wrapper */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, id) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: id * 0.05 }}
                key={blog.id}
                className="group p-5.5 rounded-2xl glass-card flex flex-col sm:flex-row gap-5 overflow-hidden text-left cursor-pointer"
                onClick={() => onSelectBlog(blog)}
                style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
              >
                {/* Thumb aspect aspect frame */}
                <div className="relative shrink-0 w-full sm:w-40 aspect-video sm:aspect-square rounded-xl overflow-hidden border border-white/[0.02]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card metadata body content */}
                <div className="flex-1 flex flex-col justify-between py-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px] font-semibold tracking-wide text-[#22D3EE] font-mono">
                      <span className="uppercase text-[#8B5CF6]">{blog.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        <span>{blog.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-sora text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-[#22D3EE] transition-colors">
                      {blog.title}
                    </h3>

                    <p className="font-sans text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Read detail triggers and tags */}
                  <div className="flex items-center justify-between border-t border-white/[0.04] pt-3">
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#8B5CF6] group-hover:text-[#A78BFA] transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>

                    <span className="font-mono text-[9px] text-zinc-500 font-semibold uppercase">
                      POSTED: {blog.date}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))
          ) : (
            <div className="col-span-2 py-16 text-center border border-dashed border-white/[0.08] rounded-2xl bg-[#0b1120]/20">
              <BookOpen className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
              <p className="font-mono text-xs text-zinc-400">
                No matching articles found matching "{searchQuery}". Try auditing other tags.
              </p>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
