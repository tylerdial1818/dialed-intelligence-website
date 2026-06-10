"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { Wordmark } from "./logo";
import { nav, ctaHref, ctaLabel } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/12 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-8 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-ink transition-colors hover:text-blue"
          aria-label="Dialed Intelligence home"
        >
          <Wordmark markWidth={34} textClassName="text-[1.0625rem]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`label-mono-sm transition-colors hover:text-blue ${
                isActive(item.href) ? "text-blue" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => track("cta_book_session", { placement: "header" })}
            className="label-mono-sm inline-flex items-center gap-2 rounded-[2px] bg-ink px-4 py-2.5 text-paper transition-colors hover:bg-blue hover:text-white"
          >
            {ctaLabel}
            <span className="font-sans" aria-hidden="true">
              &#8599;
            </span>
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-[2px] w-6 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[69px] z-40 overflow-y-auto bg-ink text-paper lg:hidden"
        >
          <nav
            aria-label="Mobile"
            className="flex min-h-full flex-col px-5 pb-10 pt-8 sm:px-8"
          >
            <div className="flex flex-col">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-baseline justify-between border-b border-paper/15 py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-blue">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <span className="font-display text-3xl font-medium tracking-tight group-hover:text-lime">
                      {item.label}
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-xl">
                    &#8599;
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href={ctaHref}
                onClick={() =>
                  track("cta_book_session", { placement: "mobile_menu" })
                }
                className="label-mono inline-flex w-full items-center justify-center gap-2 rounded-[2px] bg-blue px-6 py-5 text-white"
              >
                {ctaLabel}
                <span className="font-sans" aria-hidden="true">
                  &#8599;
                </span>
              </Link>
              <p className="label-mono-sm mt-8 text-paper/50">
                Build it. You own it.
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
