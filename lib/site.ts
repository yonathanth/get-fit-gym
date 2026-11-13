// Public site URL for canonical links, sitemap and share images.
// Set NEXT_PUBLIC_SITE_URL (e.g. https://getfitgym.com) in production.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");
