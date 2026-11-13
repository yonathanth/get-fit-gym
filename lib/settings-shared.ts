// Settings types and helpers that are safe to use in client components (no Prisma).

/**
 * Site-wide settings, edited from the admin app's Settings page and stored in
 * the GymSetting table (one row per key). The keys here must match the keys the
 * admin saves.
 */
export interface GymSettingsMap {
  gym_name: string;
  phone_primary: string;
  phone_secondary: string;
  email_address: string;
  location_address: string;
  operating_hours: string;
  operating_hours_weekday: string;
  operating_hours_weekend: string;
  tiktok_url: string;
  linkedin_url: string;
  facebook_url: string;
  youtube_url: string;
  /** Mux playback ID, or a player.mux.com / stream.mux.com URL containing one. */
  video_tour_url: string;
  /** Seconds before the featured-event popup appears. */
  popup_delay_seconds: string;
}

export const DEFAULT_SETTINGS: GymSettingsMap = {
  gym_name: "Get Fit Gym",
  phone_primary: "0911-415-862",
  phone_secondary: "0992 222 224",
  email_address: "getfitt26@gmail.com",
  location_address: "CMC Michael, Addis Ababa, Ethiopia",
  operating_hours: "5:00 AM - 10:00 PM / Monday - Sunday",
  operating_hours_weekday: "5:00 AM - 10:00 PM / Monday - Sunday",
  operating_hours_weekend: "5:00 AM - 10:00 PM / Monday - Sunday",
  tiktok_url: "https://www.tiktok.com/@getfit.gym",
  linkedin_url: "https://www.linkedin.com/in/getfit-gym-6538333b7",
  facebook_url: "https://www.facebook.com/share/18TRbLvNPQ/",
  youtube_url: "https://youtube.com/@getfit-gym",
  video_tour_url: "xEmaKZoDggTHIm3kNryHGS3yJ5aeI1A6yvPVMg901bJk",
  popup_delay_seconds: "10",
};

/** Extracts a Mux playback ID from a bare ID or any player/stream/image mux.com URL. */
export function muxPlaybackId(value: string): string {
  const v = value.trim();
  const fromUrl = v.match(/(?:player|stream|image)\.mux\.com\/([A-Za-z0-9]+)/);
  if (fromUrl) return fromUrl[1];
  return /^[A-Za-z0-9]{20,}$/.test(v) ? v : DEFAULT_SETTINGS.video_tour_url;
}

/** "0911-415-862" -> "+251911415862" for tel: links (Ethiopian numbers). */
export function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return `tel:${digits}`;
  if (digits.startsWith("0")) return `tel:+251${digits.slice(1)}`;
  return `tel:${digits}`;
}
