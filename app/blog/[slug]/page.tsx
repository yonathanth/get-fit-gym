import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post || !post.isPublished) {
    notFound();
  }

  // Parse markdown / paragraphs from content
  const paragraphs = post.content.split("\n\n").filter((p) => p.trim() !== "");

  return (
    <main className="min-h-screen bg-background relative overflow-x-clip">
      <SpotlightEffect />

      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.coverImageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="px-4 sm:px-6 -mt-24 sm:-mt-32 relative z-10">
        <div className="max-w-[850px] mx-auto">
          {/* Category Pill */}
          <div className="mb-4">
            <span className="bg-primary text-black font-inter text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-impact text-white mb-6 sm:mb-8 leading-[1.08] tracking-tight uppercase">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">person</span>
              </div>
              <div>
                <div className="text-white font-inter font-semibold text-sm">{post.authorName}</div>
                <div className="text-secondary font-inter text-xs">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-secondary font-inter">
              <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span>•</span>
              <span className="text-primary font-medium">{post.readTime}</span>
            </div>
          </div>

          {/* Article Paragraphs & Subheadings */}
          <div className="max-w-none mb-12 sm:mb-16 space-y-6">
            {paragraphs.map((block, index) => {
              if (block.startsWith("### ")) {
                return (
                  <h2 key={index} className="text-2xl sm:text-3xl md:text-4xl font-impact text-primary pt-6 mb-3 leading-tight uppercase tracking-tight">
                    {block.replace("### ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-white/85 font-inter text-sm sm:text-base md:text-lg leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Author Bio */}
          <div className="bg-surface/70 border border-white/10 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">person</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-impact text-white uppercase tracking-tight mb-1">About {post.authorName}</h3>
                <p className="text-primary font-inter text-xs sm:text-sm font-semibold mb-2">{post.authorRole}</p>
                <p className="text-secondary font-inter text-xs sm:text-sm leading-relaxed">
                  Dedicated fitness professional and certified coach providing actionable health and performance strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="text-center mb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-primary hover:text-black text-white px-6 sm:px-8 py-3 rounded-full border border-white/10 hover:border-primary transition-all duration-300 font-inter text-xs sm:text-sm font-bold tracking-wider uppercase cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      <CTASection />
    </main>
  );
}
