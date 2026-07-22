"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, Search, Clock, ArrowRight, ExternalLink, Filter } from "lucide-react";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Cricket", "Strategy", "Safety", "VIP Guide"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 relative luxury-bg-mesh space-y-16">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-extrabold uppercase">
          <BookOpen className="w-4 h-4 text-gold-400" />
          <span>BET VAULT INSIGHTS & KNOWLEDGE HUB</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
          Sports Betting Strategy <span className="text-gradient-gold">& Insights</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Honest, humanized articles written by professional sports analysts and risk advisors. Zero fluff, real betting intelligence.
        </p>
      </div>

      {/* Category Filter & Search Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-3xl glass-luxury-card border border-slate-800">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2.5 px-5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/20"
                  : "bg-obsidian-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search IPL tips, withdrawal, safety..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-obsidian-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-gold-400 outline-none font-medium"
          />
        </div>

      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-obsidian-900/60 border border-slate-800 text-slate-400 space-y-3">
            <Filter className="w-8 h-8 text-gold-500 mx-auto" />
            <p className="font-bold text-slate-200 text-base">No articles found matching your search query.</p>
            <p className="text-xs">Try searching for 'cricket', 'safety', or 'withdrawal'.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="btn-outline-gold px-4 py-2 rounded-xl text-xs font-bold mt-2"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="glass-luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-gold-500/40 transition-all border border-slate-800"
              >
                {/* Cover Image featuring female models */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 text-[10px] font-mono font-black uppercase shadow-lg">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      <span>{post.readTime}</span>
                      <span className="text-slate-700">•</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 className="font-display font-bold text-xl text-white group-hover:text-gold-400 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 font-normal">
                      {post.excerpt}
                    </p>

                    {/* Article Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian-900 text-slate-400 border border-slate-800">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author & READ MORE BUTTON (REDIRECTS TO NEW TAB) */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2.5">
                      {post.author.avatarImage ? (
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gold-400/50">
                          <Image src={post.author.avatarImage} alt={post.author.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-obsidian-900 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-gold-400 font-mono">
                          {post.author.avatar}
                        </div>
                      )}
                      <span className="text-xs text-slate-300 font-semibold">{post.author.name}</span>
                    </div>

                    {/* CRITICAL REQUIREMENT: READ ARTICLE OPENS IN NEW TAB */}
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold-luxury px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 uppercase tracking-wide group/btn"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
