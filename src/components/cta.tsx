"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

type Variant = "blue" | "ink" | "paper" | "outline" | "outline-dark";

const styles: Record<Variant, string> = {
  blue: "bg-blue text-white hover:bg-ink hover:text-paper",
  ink: "bg-ink text-paper hover:bg-blue hover:text-white",
  paper: "bg-paper text-ink hover:bg-lime hover:text-ink",
  outline:
    "bg-transparent text-ink border border-ink/30 hover:bg-ink hover:text-paper hover:border-ink",
  "outline-dark":
    "bg-transparent text-paper border border-paper/30 hover:bg-paper hover:text-ink hover:border-paper",
};

export function CTA({
  href,
  variant = "blue",
  children,
  event,
  arrow = true,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  /** Analytics event name, e.g. "cta_book_session" */
  event?: string;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={event ? () => track(event) : undefined}
      className={`inline-flex items-center gap-2.5 label-mono rounded-[2px] px-6 py-4 transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <span className="font-sans text-[1.1em] leading-none" aria-hidden="true">
          &#8599;
        </span>
      )}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  dark = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-baseline gap-2 font-display font-medium text-[1.0625rem] tracking-tight transition-colors duration-200 ${
        dark ? "text-paper hover:text-lime" : "text-ink hover:text-blue"
      } ${className}`}
    >
      <span className="underline decoration-1 underline-offset-4 decoration-current/40 group-hover:decoration-current">
        {children}
      </span>
      <span aria-hidden="true" className="no-underline">
        &#8599;
      </span>
    </Link>
  );
}
