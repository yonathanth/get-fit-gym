import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ShowcaseDetailTemplate from "@/components/templates/ShowcaseDetailTemplate";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DynamicShowcasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await prisma.communityShowcase.findUnique({
    where: { slug },
  });

  if (!event) {
    notFound();
  }

  return <ShowcaseDetailTemplate event={event} />;
}
