"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import { BookOpen, ArrowRight, Clock, User, ExternalLink, Sparkles } from "lucide-react";

export default function BlogSection() {
  // Show first 3 posts on Home Page
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 relative luxury-bg-mesh">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-extrabold uppercase">
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>SPORTS BETTING INSIGHTS & GUIDES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Bet Vault v9 Strategy & Knowledge Hub
            </h2>
            <p className="text-slate-300 text-base max-w-2xl font-normal">
              Practical guides on bankroll management, live session odds analysis, safety checks, and IPL betting tips written by experienced analysts.
            </p>
          </div>

          <Link
            href="/blog"
            className="btn-outline-gold px-5 py-3 rounded-xl text-xs font-extrabold flex items-center gap-2 self-start sm:self-auto uppercase tracking-wider"
          >
            <span>View All Guides & Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Posts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="glass-luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-gold-500/40 transition-all border border-slate-800"
            >
              {/* Blog Post Cover Image featuring female models */}
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

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-gold-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author & Read More Redirect Link */}
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

                  {/* CRITICAL REQUIREMENT: READ MORE OPENS IN NEW TAB PAGE */}
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold text-gold-400 hover:text-gold-300 flex items-center gap-1.5 group/btn"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
