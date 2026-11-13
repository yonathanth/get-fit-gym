import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { eventDisplayDate } from "@/lib/format";

export const dynamic = "force-dynamic";

/**
 * The event shown in the site-wide popup. Only events the admin has marked
 * "Feature in popup" are eligible; if none is featured, no popup is shown.
 */
export async function GET() {
  try {
    const featuredEvent = await prisma.upcomingEvent.findFirst({
      where: {
        isPopupFeatured: true,
        status: "UPCOMING",
      },
      orderBy: { eventDate: "asc" },
    });

    if (!featuredEvent) return NextResponse.json({ event: null });

    return NextResponse.json({
      event: { ...featuredEvent, dateString: eventDisplayDate(featuredEvent.eventDate, featuredEvent.dateString) },
    });
  } catch (error) {
    console.error("Popup event fetch error:", error);
    return NextResponse.json({ event: null }, { status: 500 });
  }
}
