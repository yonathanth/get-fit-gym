import Link from "next/link";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPostsData: Record<string, any> = {
  "strength-training-basics": {
    title: "Strength Training Basics for Beginners",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&auto=format&fit=crop",
    author: "Teshome",
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
        type: "text",
        content: "As we age, we naturally lose muscle mass in a process called sarcopenia. Starting as early as our 30s, we can lose 3-5% of muscle mass per decade without intervention. Strength training is the most effective way to combat this natural decline and maintain independence as we age."
      },
      {
        type: "heading",
        content: "The Core Principles"
      },
      {
        type: "text",
        content: "Progressive overload is the cornerstone of strength development. This means gradually increasing the demands on your musculoskeletal system over time. You can achieve this by adding weight, increasing repetitions, improving movement quality, or decreasing rest periods between sets."
      },
      {
        type: "text",
        content: "Consistency trumps intensity when you're starting out. Focus on building the habit of regular training sessions—three times per week is an excellent starting point for most beginners. Your body needs time to adapt to new stresses, so patience and consistency will yield better results than sporadic intense workouts."
      },
      {
        type: "heading",
        content: "Essential Movement Patterns"
      },
      {
        type: "text",
        content: "Every effective strength program includes these fundamental patterns: squat, hinge, push, pull, and carry. Mastering these movements with proper form before adding significant weight will prevent injuries and accelerate your progress."
      },
      {
        type: "text",
        content: "The squat pattern develops lower body strength and mobility. The hinge (like deadlifts) teaches proper hip movement and posterior chain engagement. Pushing movements (overhead press, bench press) build upper body strength, while pulling exercises (rows, pull-ups) balance this development and improve posture."
      },
      {
        type: "heading",
        content: "Getting Started: Your First Month"
      },
      {
        type: "text",
        content: "Begin with bodyweight exercises or light weights to learn proper form. Focus on movement quality over quantity. A basic beginner program might include: goblet squats, Romanian deadlifts, push-ups (or assisted variations), inverted rows, and planks. Perform 2-3 sets of 8-12 repetitions for each exercise."
      },
      {
        type: "text",
        content: "Rest is equally important as training. Your muscles grow and adapt during recovery, not during the workout itself. Ensure you're getting adequate sleep (7-9 hours for most adults) and eating enough protein (roughly 0.8-1g per pound of body weight) to support muscle recovery and growth."
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
    author: "Sara",
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
      },
      {
        type: "text",
        content: "For active individuals, aim for 0.8-1g of protein per pound of body weight daily. Carbohydrates should make up 45-65% of total calories, with higher amounts for endurance athletes. Don't fear fats—they should comprise 20-35% of your diet and are essential for vitamin absorption and hormone health."
      },
      {
        type: "heading",
        content: "Meal Timing and Performance"
      },
      {
        type: "text",
        content: "When you eat can be almost as important as what you eat. Pre-workout nutrition should focus on easily digestible carbohydrates consumed 1-3 hours before training. A banana with peanut butter or oatmeal with berries are excellent choices."
      },
      {
        type: "text",
        content: "Post-workout nutrition is your recovery window. Within 30-60 minutes after training, consume a combination of protein and carbohydrates to replenish glycogen stores and kickstart muscle repair. A protein shake with fruit or a chicken and rice bowl work perfectly."
      },
      {
        type: "heading",
        content: "Hydration Strategy"
      },
      {
        type: "text",
        content: "Proper hydration is often overlooked but critical for performance. Even 2% dehydration can significantly impair performance. Aim for half your body weight in ounces of water daily, more if you're training intensely or in hot conditions."
      },
      {
        type: "text",
        content: "During workouts lasting over an hour, consider an electrolyte drink to replace sodium, potassium, and other minerals lost through sweat. This is especially important for endurance training or high-intensity sessions."
      },
      {
        type: "heading",
        content: "Supplements: What Actually Works"
      },
      {
        type: "text",
        content: "While whole foods should be your priority, certain supplements have strong research backing. Creatine monohydrate improves strength and power output. Protein powder is convenient for hitting daily protein targets. Caffeine enhances endurance and focus when used strategically."
      },
      {
        type: "text",
        content: "Vitamin D and omega-3 fatty acids are worth considering if your diet lacks these nutrients. However, expensive pre-workouts and exotic supplements rarely offer benefits beyond placebo. Invest in quality food before expensive supplements."
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
    author: "Bethlehem",
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
        content: "Regular yoga practice reduces injury risk, improves range of motion, accelerates recovery between training sessions, and develops mental focus that enhances performance under pressure. Many professional athletes integrate yoga into their training regimens for these exact reasons."
      },
      {
        type: "text",
        content: "Flexibility isn't just about touching your toes—it's about having the mobility to perform movement patterns correctly and efficiently. Limited hip mobility can compromise your squat form. Tight shoulders can affect your overhead press. Yoga addresses these limitations systematically."
      },
      {
        type: "heading",
        content: "Yoga Styles for Different Goals"
      },
      {
        type: "text",
        content: "Vinyasa and Power Yoga offer dynamic sequences that build strength while improving flexibility. These styles are excellent for active recovery days, keeping you moving without the intensity of strength training."
      },
      {
        type: "text",
        content: "Yin Yoga and Restorative Yoga focus on deep stretching and relaxation. Hold poses for 3-5 minutes to target deep connective tissue. These styles are perfect for heavy training days or before bed to promote recovery and better sleep."
      },
      {
        type: "heading",
        content: "Building a Sustainable Practice"
      },
      {
        type: "text",
        content: "Start with 15-20 minutes, 2-3 times per week. Consistency matters more than duration. Even short sessions provide cumulative benefits over time. Focus on fundamental poses: downward dog, pigeon pose, child's pose, and seated forward folds."
      },
      {
        type: "text",
        content: "Listen to your body—yoga should never be painful. Work at 70-80% of your maximum range, breathing deeply throughout each pose. Over time, your range will naturally expand without forcing it."
      },
      {
        type: "heading",
        content: "Breathing and Mental Benefits"
      },
      {
        type: "text",
        content: "Pranayama (breath control) is a cornerstone of yoga practice. Controlled breathing activates the parasympathetic nervous system, reducing stress hormones and promoting recovery. This carries over to better stress management in daily life and improved focus during intense training."
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
    author: "Gabriel",
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
        content: "HIIT works by pushing your cardiovascular system to near-maximum capacity in short bursts, followed by brief recovery periods. This creates a metabolic effect that continues burning calories long after your workout ends—the afterburn effect or EPOC (Excess Post-Exercise Oxygen Consumption)."
      },
      {
        type: "text",
        content: "Research shows HIIT can improve VO2 max (cardiovascular fitness) more effectively than steady-state cardio in less time. A 20-minute HIIT session can provide similar or greater benefits than 45 minutes of moderate-intensity continuous training."
      },
      {
        type: "heading",
        content: "HIIT Protocols That Work"
      },
      {
        type: "text",
        content: "Tabata Protocol: 20 seconds maximum effort, 10 seconds rest, repeated 8 times (4 minutes total). Despite its short duration, this protocol is brutally effective. Choose exercises like burpees, mountain climbers, or bike sprints."
      },
      {
        type: "text",
        content: "30-30 intervals: 30 seconds hard effort, 30 seconds easy recovery, repeated 10-15 times. This protocol balances intensity with sustainability, making it ideal for beginners or during high-volume training weeks."
      },
      {
        type: "text",
        content: "Pyramid intervals: Gradually increase then decrease work intervals (30s, 45s, 60s, 75s, 60s, 45s, 30s) with equal rest periods. This structure keeps the workout mentally engaging while providing varied stimulus."
      },
      {
        type: "heading",
        content: "Programming HIIT Effectively"
      },
      {
        type: "text",
        content: "More isn't better with HIIT. Two to three sessions per week is optimal for most people. HIIT is demanding on the nervous system and requires adequate recovery. Overuse leads to burnout, elevated cortisol, and diminished results."
      },
      {
        type: "text",
        content: "Combine HIIT with strength training strategically. Separate HIIT and heavy strength sessions by at least 24 hours when possible. If you must do both in one day, strength training should come first when you're fresh."
      },
      {
        type: "heading",
        content: "Common Mistakes to Avoid"
      },
      {
        type: "text",
        content: "Going too hard too soon: Build work capacity gradually. Start with longer rest intervals (1:2 work-to-rest ratio) before progressing to shorter rest periods. Maintain good form even when fatigued—sloppy movement under fatigue is a recipe for injury."
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
    author: "Sara",
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
        content: "Exercise releases endorphins, reduces stress hormones, and improves sleep quality. But mental wellness practices also enhance physical performance, creating a positive feedback loop that amplifies both mental and physical benefits."
      },
      {
        type: "text",
        content: "Chronic stress elevates cortisol levels, which impairs recovery, promotes muscle breakdown, and makes fat loss more difficult. Managing stress through mindfulness, meditation, and adequate rest is as important as your training program."
      },
      {
        type: "heading",
        content: "Stress Management Techniques"
      },
      {
        type: "text",
        content: "Box breathing: Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat for 2-5 minutes. This simple technique activates the parasympathetic nervous system, reducing stress and improving focus. Use it before workouts or challenging situations."
      },
      {
        type: "text",
        content: "Progressive muscle relaxation systematically tenses and releases muscle groups, promoting physical relaxation and body awareness. This practice improves your ability to recognize and release unnecessary tension during training."
      },
      {
        type: "heading",
        content: "Building Mental Resilience"
      },
      {
        type: "text",
        content: "Physical training builds mental toughness. Pushing through a challenging workout, completing one more rep, or showing up on days you don't feel like it—these moments transfer to life outside the gym."
      },
      {
        type: "text",
        content: "However, distinguish between productive discomfort and counterproductive pain. Learn to respect your body's signals. Sometimes the mentally strongest decision is to rest when needed, not to push through everything."
      },
      {
        type: "heading",
        content: "Creating Sustainable Habits"
      },
      {
        type: "text",
        content: "Start small with mental wellness practices. Five minutes of meditation daily is better than an hour once a week. Consistency creates habits, and habits create transformation. Link new practices to existing routines—meditate after your morning coffee or do breathing exercises before bed."
      },
      {
        type: "text",
        content: "Track both physical and mental metrics. Note your mood, energy levels, and sleep quality alongside your training performance. You'll quickly see how mental state affects physical output and vice versa."
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
    author: "Teshome",
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
      },
      {
        type: "text",
        content: "The 10% rule: Don't increase training volume (weight, sets, or frequency) by more than 10% per week. Rapid increases in training load are the primary cause of overuse injuries. Your tissues need time to adapt to new demands."
      },
      {
        type: "heading",
        content: "The Warm-Up That Works"
      },
      {
        type: "text",
        content: "Effective warm-ups are specific to your upcoming workout. General cardio is fine, but movement-specific preparation is crucial. If you're squatting, perform bodyweight squats, goblet squats, then gradually add weight."
      },
      {
        type: "text",
        content: "Dynamic stretching before training, static stretching after. Dynamic movements (leg swings, arm circles) prepare your nervous system and increase blood flow. Save long-hold static stretches for after training or separate sessions."
      },
      {
        type: "heading",
        content: "Identifying Warning Signs"
      },
      {
        type: "text",
        content: "Soreness vs. pain: Soreness is diffuse, bilateral, and decreases with warm-up. Pain is sharp, localized, and doesn't improve with movement. Pain is a signal to modify or skip training."
      },
      {
        type: "text",
        content: "Monitor training quality, not just quantity. If your form is breaking down, you're moving slower than usual, or exercises that were easy last week feel impossibly hard—these are signs of inadequate recovery or impending overtraining."
      },
      {
        type: "heading",
        content: "Recovery Protocols"
      },
      {
        type: "text",
        content: "Sleep is the most powerful recovery tool available. During deep sleep, growth hormone is released, muscle protein synthesis increases, and the nervous system recovers. Aim for 7-9 hours nightly."
      },
      {
        type: "text",
        content: "Active recovery accelerates healing by increasing blood flow without adding stress. Light walking, easy cycling, or gentle yoga on rest days can speed recovery while maintaining the exercise habit."
      },
      {
        type: "heading",
        content: "When to Seek Professional Help"
      },
      {
        type: "text",
        content: "Don't ignore persistent pain. If discomfort lasts more than a week despite rest and modification, consult a physical therapist or sports medicine professional. Early intervention prevents minor issues from becoming major problems."
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
