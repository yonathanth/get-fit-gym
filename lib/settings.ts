import { prisma } from "./prisma";
import { DEFAULT_SETTINGS, type GymSettingsMap } from "./settings-shared";

export * from "./settings-shared";

const KNOWN_KEYS = new Set(Object.keys(DEFAULT_SETTINGS));

export async function getGymSettings(): Promise<GymSettingsMap> {
  try {
    const rows = await prisma.gymSetting.findMany({
      where: { key: { in: [...KNOWN_KEYS] } },
    });
    const merged: GymSettingsMap = { ...DEFAULT_SETTINGS };
    for (const row of rows) {
      // An empty value in the admin means "use the default" rather than "show nothing"
      if (row.value.trim()) merged[row.key as keyof GymSettingsMap] = row.value.trim();
    }
    return merged;
  } catch (error) {
    console.error("Error fetching gym settings from DB:", error);
    return DEFAULT_SETTINGS;
  }
}
