"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  eventName: "click_cta_contato" | "click_whatsapp";
  placement: string;
};

export function TrackedLink({ eventName, placement, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent(eventName, { placement });
        onClick?.(event);
      }}
    />
  );
}
