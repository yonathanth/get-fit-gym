import type { Metadata } from "next";
import PageHeading from "@/components/sections/PageHeading";
import CTASection from "@/components/sections/CTASection";
import SpotlightEffect from "@/components/ui/SpotlightEffect";
import BlogListClient from "@/components/sections/BlogListClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blog",
  description: "Training, nutrition and recovery advice from the coaches and health experts at Get Fit Gym.",
  alternates: { canonical: "/blog" },
};

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
          "/images/others/dsc00746.webp",
          "/images/facilities/dsc00690.webp",
          "/images/others/dsc00723.webp"
        ]}
      />
      
      <BlogListClient posts={posts} />

      <CTASection />
    </main>
  );
}
