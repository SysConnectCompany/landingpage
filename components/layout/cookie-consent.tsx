"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { sections } from "@/content/sections";

type Consent = "granted" | "denied";

const STORAGE_KEY = "sysconnect-cookie-consent";
const OPEN_EVENT = "sysconnect:open-cookie-preferences";

function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function writeConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage indisponível (modo privado, bloqueio): vale só para a sessão
  }
}

function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0]?.trim();
    if (!name || !(name === "_ga" || name.startsWith("_ga_") || name === "_gid")) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
}

export function CookieConsent({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);
  const copy = sections.cookies;

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setOpen(stored === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function choose(value: Consent) {
    writeConsent(value);
    setConsent(value);
    setOpen(false);

    if (value === "denied" && gaId) {
      // GA já carregado nesta página: desativa a coleta e remove os cookies
      (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = true;
      clearAnalyticsCookies();
    }
  }

  return (
    <>
      {gaId && consent === "granted" && <GoogleAnalytics gaId={gaId} />}

      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={copy.title}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--brand-border)] bg-white shadow-[0_-8px_24px_rgba(11,31,58,0.08)]"
        >
          <Container className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-semibold text-[var(--brand-ink)]">{copy.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
                {copy.description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col-reverse gap-2 sm:flex-row">
              <Button variant="outline" onClick={() => choose("denied")}>
                {copy.reject}
              </Button>
              <Button onClick={() => choose("granted")}>{copy.accept}</Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {sections.cookies.preferences}
    </button>
  );
}
