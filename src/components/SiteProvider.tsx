"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { LiveSiteData } from "@/lib/catalog/map";
import { buildLiveSite } from "@/lib/catalog/map";

const SiteContext = createContext<LiveSiteData>(
  buildLiveSite(null),
);

type Props = {
  children: ReactNode;
  site: LiveSiteData;
};

export function SiteProvider({ children, site }: Props) {
  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>;
}

export function useSite() {
  return useContext(SiteContext);
}
