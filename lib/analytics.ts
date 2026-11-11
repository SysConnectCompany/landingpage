import { sendGAEvent } from "@next/third-parties/google";

export const ANALYTICS_CONSENT_KEY = "sysconnect-cookie-consent";

export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;

  try {
    if (window.localStorage.getItem(ANALYTICS_CONSENT_KEY) !== "granted") return;
  } catch {
    return;
  }

  sendGAEvent("event", name, params);
}
