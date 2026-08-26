import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const featuredEvent = await prisma.upcomingEvent.findFirst({
      where: {
        isPopupFeatured: true,
        status: "UPCOMING",
      },
      orderBy: { eventDate: "asc" },
    });

    if (!featuredEvent) {
      const closestEvent = await prisma.upcomingEvent.findFirst({
        where: { status: "UPCOMING" },
        orderBy: { eventDate: "asc" },
      });
      return NextResponse.json({ event: closestEvent });
    }

    return NextResponse.json({ event: featuredEvent });
  } catch (error: any) {
    console.error("Popup event fetch error:", error);
    return NextResponse.json({ event: null }, { status: 500 });
  }
}
