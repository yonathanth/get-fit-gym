import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventPopupModal from "@/components/ui/EventPopupModal";
import { SettingsProvider } from "@/components/SettingsProvider";
import { getGymSettings } from "@/lib/settings";
import { SITE_URL } from "@/lib/site";

const siteTitle = "Get Fit Gym - Science-Backed Health & Fitness Center";
const siteDescription =
  "A Science-Backed, Experience-Driven Holistic Health and Fitness Center in Addis Ababa. 1,050 m² Life Fitness arena, 750 m² Spa & Wellness center, and clinical nutrition support.";

// Share previews use app/opengraph-image.jpg and app/twitter-image.jpg automatically.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteTitle, template: "%s | Get Fit Gym" },
  description: siteDescription,
  applicationName: "Get Fit Gym",
  keywords: [
    "gym Addis Ababa",
    "fitness center Addis Ababa",
    "personal trainer Addis Ababa",
    "CMC gym",
    "Get Fit Gym",
    "medical fitness",
    "nutrition coaching",
    "spa and wellness Ethiopia",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Get Fit Gym",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Admin-managed contact details, social links, video tour, popup timing
  const settings = await getGymSettings();

  // Local-business structured data so Google can show address, hours and map pin
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: settings.gym_name || "Get Fit Gym",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/opengraph-image.jpg`,
    description: siteDescription,
    telephone: settings.phone_primary,
    email: settings.email_address,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.location_address,
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    geo: { "@type": "GeoCoordinates", latitude: 9.024009, longitude: 38.833645 },
    openingHours: "Mo-Su 05:00-22:00",
    sameAs: [settings.tiktok_url, settings.linkedin_url, settings.facebook_url, settings.youtube_url].filter(Boolean),
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <SettingsProvider settings={settings}>
          <Navbar />
          {children}
          <Footer settings={settings} />
          <EventPopupModal />
        </SettingsProvider>
      </body>
    </html>
  );
}
