// Shape of the site-wide popup returned by /api/popup (managed in admin → Website Popups).
export type PopupType = "EVENT" | "DISCOUNT" | "ANNOUNCEMENT";

export interface PublicPopup {
  /** Changes whenever the popup is edited, so visitors see updated popups again. */
  key: string;
  type: PopupType;
  title: string;
  message: string;
  imageUrl: string | null;
  badge: string | null;
  promoCode: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  endsAt: string | null;
  event: {
    title: string;
    slug: string;
    dateString: string;
    timeString: string;
    location: string;
    remainingSpots: number;
  } | null;
}
