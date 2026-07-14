import Link from "next/link";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPostsData: Record<string, any> = {
  "strength-training-basics": {
    title: "Strength Training Basics for Beginners",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&auto=format&fit=crop",
    author: "Teshome Bekele",
    authorRole: "Head Strength Coach",
    date: "January 15, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "text",
        content: "Starting your strength training journey can feel overwhelming, but understanding the fundamentals will set you up for long-term success. This comprehensive guide will walk you through everything you need to know to begin safely and effectively."
      },
      {
        type: "heading",
        content: "Why Strength Training Matters"
      },
      {
        type: "text",
        content: "Strength training isn't just about building muscle—it's about creating a foundation for overall health and longevity. Regular resistance training increases bone density, improves metabolic health, enhances functional movement, and reduces injury risk in daily activities."
      },
      {
        type: "heading",
        content: "The Core Principles"
      },
      {
        type: "text",
        content: "Progressive overload is the cornerstone of strength development. This means gradually increasing the demands on your musculoskeletal system over time. You can achieve this by adding weight, increasing repetitions, or improving movement quality."
      },
      {
        type: "text",
        content: "Consistency trumps intensity when you're starting out. Focus on building the habit of regular training sessions—three times per week is an excellent starting point for most beginners."
      },
      {
        type: "heading",
        content: "Essential Movement Patterns"
      },
      {
        type: "text",
        content: "Every effective strength program includes these fundamental patterns: squat, hinge, push, pull, and carry. Mastering these movements with proper form before adding significant weight will prevent injuries and accelerate your progress."
      }
    ],
    resources: [
      {
        title: "Beginner Strength Training Program (PDF)",
        description: "8-week progressive program with detailed exercise instructions",
        fileSize: "2.4 MB",
        icon: "description"
      },
      {
        title: "Exercise Form Checklist (PDF)",
        description: "Visual guide for proper technique on major lifts",
        fileSize: "1.8 MB",
        icon: "checklist"
      },
      {
        title: "Training Log Template (Excel)",
        description: "Track your workouts and monitor progress over time",
        fileSize: "156 KB",
        icon: "table_chart"
      }
    ],
    relatedPosts: ["hiit-workouts", "injury-prevention"]
  },
  "nutrition-guide": {
    title: "Complete Nutrition Guide for Athletes",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop",
    author: "Sara Bekele",
    authorRole: "Nutrition Specialist",
    date: "January 10, 2026",
    readTime: "8 min read",
    content: [
      {
        type: "text",
        content: "Nutrition is the foundation of athletic performance. Whether you're training for competition or personal fitness goals, understanding how to fuel your body properly can make the difference between mediocre and exceptional results."
      },
      {
        type: "heading",
        content: "The Macronutrient Foundation"
      },
      {
        type: "text",
        content: "Protein, carbohydrates, and fats each play crucial roles in athletic performance. Protein supports muscle repair and growth, carbohydrates fuel high-intensity activity, and fats provide sustained energy and support hormone production."
      }
    ],
    resources: [
      {
        title: "Meal Planning Guide (PDF)",
        description: "Weekly meal plans optimized for different training phases",
        fileSize: "3.2 MB",
        icon: "restaurant_menu"
      },
      {
        title: "Macro Calculator Spreadsheet",
        description: "Calculate your personalized macronutrient targets",
        fileSize: "245 KB",
        icon: "calculate"
      }
    ],
    relatedPosts: ["strength-training-basics", "hiit-workouts"]
  },
  "yoga-flexibility": {
    title: "Yoga for Flexibility and Recovery",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&auto=format&fit=crop",
    author: "Bethlehem Girma",
    authorRole: "Yoga & Wellness Instructor",
    date: "January 5, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "text",
        content: "Yoga is more than just stretching—it's a comprehensive approach to improving flexibility, enhancing recovery, and building mind-body awareness that translates directly to athletic performance."
      },
      {
        type: "heading",
        content: "Benefits for Athletes"
      },
      {
        type: "text",
        content: "Regular yoga practice reduces injury risk, improves range of motion, accelerates recovery between training sessions, and develops mental focus that enhances performance under pressure."
      }
    ],
    resources: [
      {
        title: "30-Day Yoga Program (PDF)",
        description: "Progressive yoga sequences for flexibility and recovery",
        fileSize: "4.1 MB",
        icon: "self_improvement"
      },
      {
        title: "Recovery Routine Video Guide",
        description: "15-minute post-workout yoga flow",
        fileSize: "85 MB",
        icon: "play_circle"
      }
    ],
    relatedPosts: ["injury-prevention", "mental-wellness"]
  },
  "hiit-workouts": {
    title: "HIIT Workouts: Maximum Results in Minimum Time",
    category: "Training",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
    author: "Gabriel Haile",
    authorRole: "HIIT Specialist",
    date: "December 28, 2025",
    readTime: "7 min read",
    content: [
      {
        type: "text",
        content: "High-Intensity Interval Training delivers exceptional results in minimal time. Understanding the science and proper protocols ensures you maximize benefits while minimizing injury risk."
      },
      {
        type: "heading",
        content: "The Science of HIIT"
      },
      {
        type: "text",
        content: "HIIT works by pushing your cardiovascular system to near-maximum capacity in short bursts, followed by brief recovery periods. This creates an metabolic effect that continues burning calories long after your workout ends."
      }
    ],
    resources: [
      {
        title: "HIIT Workout Library (PDF)",
        description: "20+ proven HIIT protocols for different fitness levels",
        fileSize: "3.8 MB",
        icon: "fitness_center"
      },
      {
        title: "Interval Timer App",
        description: "Customizable timer for HIIT training",
        fileSize: "12 MB",
        icon: "timer"
      }
    ],
    relatedPosts: ["strength-training-basics", "nutrition-guide"]
  },
  "mental-wellness": {
    title: "Mental Wellness and Physical Fitness",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop",
    author: "Sara Bekele",
    authorRole: "Wellness Coach",
    date: "December 20, 2025",
    readTime: "5 min read",
    content: [
      {
        type: "text",
        content: "The connection between mental and physical health is undeniable. A holistic approach to fitness includes caring for your mind as much as your body."
      },
      {
        type: "heading",
        content: "Mind-Body Connection"
      },
      {
        type: "text",
        content: "Exercise releases endorphins, reduces stress hormones, and improves sleep quality. But mental wellness practices also enhance physical performance, creating a positive feedback loop."
      }
    ],
    resources: [
      {
        title: "Mindfulness Practice Guide (PDF)",
        description: "Daily practices for mental clarity and focus",
        fileSize: "1.9 MB",
        icon: "psychology"
      },
      {
        title: "Stress Management Workbook",
        description: "Tools and techniques for managing training stress",
        fileSize: "2.5 MB",
        icon: "spa"
      }
    ],
    relatedPosts: ["yoga-flexibility", "injury-prevention"]
  },
  "injury-prevention": {
    title: "Injury Prevention Strategies for Athletes",
    category: "Health",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop",
    author: "Teshome Bekele",
    authorRole: "Head Strength Coach",
    date: "December 15, 2025",
    readTime: "6 min read",
    content: [
      {
        type: "text",
        content: "Preventing injuries is far easier than recovering from them. Smart training practices, proper warm-ups, and attention to recovery can keep you healthy and progressing toward your goals."
      },
      {
        type: "heading",
        content: "Core Prevention Strategies"
      },
      {
        type: "text",
        content: "Progressive overload, adequate recovery, mobility work, and proper technique form the foundation of injury prevention. Each element plays a crucial role in long-term athletic development."
      }
    ],
    resources: [
      {
        title: "Injury Prevention Checklist (PDF)",
        description: "Pre-training assessment and warm-up protocols",
        fileSize: "1.6 MB",
        icon: "health_and_safety"
      },
      {
        title: "Mobility Assessment Guide",
        description: "Identify and address movement limitations",
        fileSize: "2.8 MB",
        icon: "assessment"
      }
    ],
    relatedPosts: ["strength-training-basics", "yoga-flexibility"]
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-impact text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Article Content */}
      <article className="px-4 md:px-6 -mt-32 relative z-10">
        <div className="max-w-[800px] mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-primary text-on-primary px-4 py-2 rounded-full text-xs font-inter font-bold tracking-widest uppercase">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-impact text-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <div>
                <div className="text-white font-inter font-medium text-sm">{post.author}</div>
                <div className="text-secondary font-inter text-xs">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-secondary font-inter">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none mb-16">
            {post.content.map((block: any, index: number) => {
              if (block.type === "heading") {
                return (
                  <h2 key={index} className="text-3xl font-impact text-white mt-12 mb-6 leading-tight">
                    {block.content}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-secondary font-inter text-base leading-relaxed mb-6">
                  {block.content}
                </p>
              );
            })}
          </div>

          {/* Downloadable Resources Section */}
          {post.resources && post.resources.length > 0 && (
            <div className="bg-surface border border-white/10 rounded-lg p-8 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">download</span>
                <h2 className="text-2xl font-impact text-white">Downloadable Resources</h2>
              </div>
              <p className="text-secondary font-inter text-sm mb-8">
                Get the most out of this article with these complementary resources
              </p>
              <div className="space-y-4">
                {post.resources.map((resource: any, index: number) => (
                  <button
                    key={index}
                    className="w-full bg-background border border-white/10 hover:border-primary/50 rounded-lg p-5 transition-all group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary">{resource.icon}</span>
                    </div>
                    <div className="flex-grow text-left">
                      <h3 className="text-white font-inter font-semibold mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-secondary font-inter text-sm mb-2">
                        {resource.description}
                      </p>
                      <span className="text-xs text-secondary font-inter">{resource.fileSize}</span>
                    </div>
                    <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_forward
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="bg-surface border border-white/10 rounded-lg p-8 mb-16">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">person</span>
              </div>
              <div>
                <h3 className="text-xl font-impact text-white mb-2">About {post.author}</h3>
                <p className="text-primary font-inter text-sm mb-3">{post.authorRole}</p>
                <p className="text-secondary font-inter text-sm leading-relaxed">
                  Expert fitness professional dedicated to helping clients achieve their health and wellness goals through evidence-based training and nutrition strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center mb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-inter font-medium"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
