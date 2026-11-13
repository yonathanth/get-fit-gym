import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = ["", "/programs", "/about", "/events", "/blog", "/contact", "/register"].map(
    (path) => ({ url: `${SITE_URL}${path}`, lastModified: now, changeFrequency: "weekly", priority: path === "" ? 1 : 0.8 })
  );

  const [posts, events, showcases, team] = await Promise.all([
    prisma.blogPost.findMany({ where: { isPublished: true }, select: { slug: true, publishedAt: true } }).catch(() => []),
    prisma.upcomingEvent.findMany({ select: { slug: true } }).catch(() => []),
    prisma.communityShowcase.findMany({ select: { slug: true } }).catch(() => []),
    prisma.teamMember.findMany({ where: { isActive: true }, select: { slug: true } }).catch(() => []),
  ]);

  return [
    ...staticRoutes,
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.publishedAt })),
    ...events.map((e) => ({ url: `${SITE_URL}/events/${e.slug}` })),
    ...showcases.map((s) => ({ url: `${SITE_URL}/showcase/${s.slug}` })),
    ...team.map((m) => ({ url: `${SITE_URL}/team/${m.slug}` })),
  ];
}
