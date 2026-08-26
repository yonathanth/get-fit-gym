import { prisma } from "./prisma";

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
  tiktok_url: "https://www.tiktok.com/@getfit.gym?_r=1&_d=emlg250de76mf3&sec_uid=MS4wLjABAAAAvBlVwdgWlgwuZAR7zeqbrktbvzDdN_AdTyf8dzhRc5YZhlAMUVvpQgMVS28ngCI2&share_author_id=7617383060232930322&sharer_language=en&source=h5_m&u_code=f2df05jabaidcj&item_author_type=1&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=862AD9C8-C905-4DF5-AC6A-089F06537298&user_id=7617383060232930322&sec_user_id=MS4wLjABAAAAvBlVwdgWlgwuZAR7zeqbrktbvzDdN_AdTyf8dzhRc5YZhlAMUVvpQgMVS28ngCI2&social_share_type=5&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233",
  linkedin_url: "https://www.linkedin.com/in/getfit-gym-6538333b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  facebook_url: "https://www.facebook.com/share/18TRbLvNPQ/?mibextid=wwXIfr",
  youtube_url: "https://youtube.com/@getfit-gym?si=Y5pWSp_Nz3bveXRo",
};

export async function getGymSettings(): Promise<GymSettingsMap> {
  try {
    const settings = await prisma.gymSetting.findMany();
    const map: Partial<GymSettingsMap> = {};
    for (const s of settings) {
      (map as any)[s.key] = s.value;
    }
    return { ...DEFAULT_SETTINGS, ...map };
  } catch (error) {
    console.error("Error fetching gym settings from DB:", error);
    return DEFAULT_SETTINGS;
  }
}
