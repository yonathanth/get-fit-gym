import Link from "next/link";
import PageHeading from "@/components/sections/PageHeading";

// Sample blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: "strength-training-basics",
    title: "Strength Training Basics for Beginners",
    category: "Fitness",
    excerpt: "Discover the fundamental principles of strength training and how to build a solid foundation for your fitness journey.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop",
    author: "Teshome Bekele",
    date: "January 15, 2026",
    readTime: "5 min read"
  },
  {
    id: "nutrition-guide",
    title: "Complete Nutrition Guide for Athletes",
    category: "Nutrition",
    excerpt: "Learn how proper nutrition can enhance your performance and help you achieve your fitness goals faster.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop",
    author: "Sara Bekele",
    date: "January 10, 2026",
    readTime: "8 min read"
  },
  {
    id: "yoga-flexibility",
    title: "Yoga for Flexibility and Recovery",
    category: "Wellness",
    excerpt: "Explore how incorporating yoga into your routine can improve flexibility, reduce injury risk, and speed up recovery.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    author: "Bethlehem Girma",
    date: "January 5, 2026",
    readTime: "6 min read"
  },
  {
    id: "hiit-workouts",
    title: "HIIT Workouts: Maximum Results in Minimum Time",
    category: "Training",
    excerpt: "High-Intensity Interval Training can transform your fitness. Learn the science behind HIIT and effective workout protocols.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    author: "Gabriel Haile",
    date: "December 28, 2025",
    readTime: "7 min read"
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness and Physical Fitness",
    category: "Lifestyle",
    excerpt: "Understanding the deep connection between mental health and physical fitness for holistic wellbeing.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
    author: "Sara Bekele",
    date: "December 20, 2025",
    readTime: "5 min read"
  },
  {
    id: "injury-prevention",
    title: "Injury Prevention Strategies for Athletes",
    category: "Health",
    excerpt: "Essential tips and techniques to prevent common training injuries and maintain peak performance year-round.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    author: "Teshome Bekele",
    date: "December 15, 2025",
    readTime: "6 min read"
  }
];

const categories = ["All", "Fitness", "Nutrition", "Wellness", "Training", "Lifestyle", "Health"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeading
        title="Fitness Blog"
        subtitle="Expert insights, training tips, and wellness advice from our team"
        images={[
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop"
        ]}
      />

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Featured Post */}
          <div className="mb-20">
            <h2 className="text-sm font-inter font-semibold text-primary tracking-widest uppercase mb-8">
              Featured Post
            </h2>
            <Link href={`/blog/${blogPosts[0].id}`} className="group">
              <div className="grid md:grid-cols-2 gap-8 bg-surface border border-white/5 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="relative h-[300px] md:h-[500px] overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-5xl font-impact text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-secondary font-inter text-base mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-secondary font-inter">
                    <span>{blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-inter font-medium transition-all ${
                  category === "All"
                    ? "bg-primary text-on-primary"
                    : "bg-surface text-secondary hover:bg-white/5 hover:text-white border border-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="bg-surface border border-white/5 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-impact text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-secondary font-inter text-sm mb-4 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-secondary font-inter pt-4 border-t border-white/5">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
