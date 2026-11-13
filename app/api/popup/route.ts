import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { eventDisplayDate } from "@/lib/format";
import type { PopupType, PublicPopup } from "@/lib/popup";

export const dynamic = "force-dynamic";

type EventRow = NonNullable<Awaited<ReturnType<typeof prisma.upcomingEvent.findFirst>>>;

const eventInfo = (e: EventRow) => ({
  title: e.title,
  slug: e.slug,
  dateString: eventDisplayDate(e.eventDate, e.dateString),
  timeString: e.timeString,
  location: e.location,
  remainingSpots: e.remainingSpots,
});

/**
 * The popup shown site-wide. Admin → Website Popups decides it (one active popup,
 * optionally limited by start/end dates). If none is set up, the legacy
 * "Feature in popup" event is used so older setups keep working.
 */
export async function GET() {
  try {
    const now = new Date();
    const popup = await prisma.sitePopup.findFirst({
      where: {
        isActive: true,
        AND: [
          { OR: [{ startsAt: null }, { startsAt: { lte: now } }] },
          { OR: [{ endsAt: null }, { endsAt: { gte: now } }] },
        ],
      },
      orderBy: { updatedAt: "desc" },
    })
      // Until the SitePopup table exists (prisma db push), fall back to the featured event
      .catch((err) => {
        console.error("SitePopup lookup failed:", err);
        return null;
      });

    if (popup) {
      const type = (["EVENT", "DISCOUNT", "ANNOUNCEMENT"].includes(popup.type) ? popup.type : "ANNOUNCEMENT") as PopupType;
      let event: EventRow | null = null;
      if (type === "EVENT") {
        event = popup.eventId
          ? await prisma.upcomingEvent.findFirst({ where: { id: popup.eventId, status: "UPCOMING" } })
          : null;
        // An event popup for a past/cancelled/deleted event shows nothing
        if (!event) return NextResponse.json({ popup: null });
      }

      const body: PublicPopup = {
        key: `${popup.id}:${popup.updatedAt.getTime()}`,
        type,
        title: popup.title,
        message: popup.message,
        imageUrl: popup.imageUrl || event?.imageUrl || null,
        badge: popup.badge,
        promoCode: popup.promoCode,
        ctaLabel: popup.ctaLabel,
        ctaUrl: popup.ctaUrl,
        endsAt: popup.endsAt?.toISOString() ?? null,
        event: event ? eventInfo(event) : null,
      };
      return NextResponse.json({ popup: body });
    }

    const featured = await prisma.upcomingEvent.findFirst({
      where: { isPopupFeatured: true, status: "UPCOMING" },
      orderBy: { eventDate: "asc" },
    });
    if (!featured) return NextResponse.json({ popup: null });

    const body: PublicPopup = {
      key: `event:${featured.id}:${featured.updatedAt.getTime()}`,
      type: "EVENT",
      title: featured.title,
      message: featured.description,
      imageUrl: featured.imageUrl,
      badge: null,
      promoCode: null,
      ctaLabel: null,
      ctaUrl: null,
      endsAt: null,
      event: eventInfo(featured),
    };
    return NextResponse.json({ popup: body });
  } catch (error) {
    console.error("Popup fetch error:", error);
    return NextResponse.json({ popup: null }, { status: 500 });
  }
}
