"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_SETTINGS, type GymSettingsMap } from "@/lib/settings-shared";

const SettingsContext = createContext<GymSettingsMap>(DEFAULT_SETTINGS);

/** Makes the admin-managed site settings available to client components. */
export function SettingsProvider({ settings, children }: { settings: GymSettingsMap; children: ReactNode }) {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

export function useSettings(): GymSettingsMap {
  return useContext(SettingsContext);
}
