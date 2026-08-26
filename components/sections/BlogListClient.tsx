"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  authorName: string;
  authorRole: string;
  readTime: string;
  publishedAt: Date;
}

interface BlogListClientProps {
  posts: DbBlogPost[];
}

export default function BlogListClient({ posts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Category Filter */}
      {categories.length > 2 && (
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-inter text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-primary text-black shadow-md"
                    : "bg-surface/80 text-white/70 hover:text-white hover:bg-surface border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosts.map((post, index) => (
          <ScrollReveal
            key={post.id}
            direction="up"
            delay={0.1 + (index % 3) * 0.08}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group rounded-[24px] sm:rounded-[28px] border border-white/10 hover:border-primary/40 bg-surface/70 hover:bg-surface overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full shine-hover"
            >
              {/* Image Banner */}
              <div className="relative h-[210px] w-full overflow-hidden bg-black/40">
                <img
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-black font-inter text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-inter text-white/50 mb-2">
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-impact text-white leading-tight uppercase tracking-wide group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary font-inter leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-inter">
                  <span className="text-white/80 font-medium">By {post.authorName}</span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
