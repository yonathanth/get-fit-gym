import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { eventDisplayDate } from "@/lib/format";
import EventDetailTemplate from "@/components/templates/EventDetailTemplate";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function DynamicEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await prisma.upcomingEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    notFound();
  }

  return <EventDetailTemplate event={{ ...event, dateString: eventDisplayDate(event.eventDate, event.dateString) }} />;
}
