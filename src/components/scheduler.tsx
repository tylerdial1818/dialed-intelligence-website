"use client";

import { useRef } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";

/**
 * Embedded scheduler panel for /contact. Renders nothing when no scheduler
 * URL is configured (see site.schedulerUrl in lib/site.ts), so the page
 * degrades to the form-only path in every environment.
 */
export function Scheduler() {
  const tracked = useRef(false);

  if (!site.schedulerUrl) return null;

  return (
    <div className="rounded-[5px] border border-ink/15 bg-paper-2 p-5 sm:p-6">
      <p className="label-mono-sm text-ink/70">
        Book the working session directly
      </p>
      <iframe
        src={site.schedulerUrl}
        title="Schedule a working session"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="strict-origin-when-cross-origin"
        className="mt-5 block min-h-[640px] w-full rounded-[3px] border-0 bg-white"
        onLoad={() => {
          if (tracked.current) return;
          tracked.current = true;
          track("scheduler_open");
        }}
      />
    </div>
  );
}
