import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import BlogListClient from "@/components/sections/BlogListClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <main className="w-full relative overflow-x-clip">
      <SpotlightEffect />

      <PageHeading 
        title="Fitness Insights & Articles" 
        subtitle="Expert training advice, nutritional protocols, and recovery science curated by the Get Fit performance team."
        images={[
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&q=80",
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop&q=80",
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop&q=80"
        ]}
      />
      
      <BlogListClient posts={posts} />

      <CTASection />
    </main>
  );
}
