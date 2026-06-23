import Link from "next/link";
import { Wordmark } from "./logo";
import { Container } from "./primitives";
import { site, nav } from "@/lib/site";
import { serviceNav } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="pb-10 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 border-b border-paper/15 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-block text-paper transition-colors hover:text-lime"
              aria-label="Dialed Intelligence home"
            >
              <Wordmark markWidth={34} />
            </Link>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-paper/65">
              {site.positioning}
            </p>
            <p className="mt-5 font-display text-xl font-medium tracking-tight">
              Build it. You own it.
            </p>
          </div>

          <div>
            <h2 className="label-mono-sm mb-5 text-paper/60">Firm</h2>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5 text-[0.9375rem] text-paper transition-colors hover:text-lime"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block py-1.5 text-[0.9375rem] text-paper transition-colors hover:text-lime"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label-mono-sm mb-5 text-paper/60">What we build</h2>
            <ul>
              {serviceNav.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block py-1.5 text-[0.9375rem] text-paper transition-colors hover:text-lime"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-mono-sm mb-5 text-paper/60">Contact</h2>
            <a
              href={`mailto:${site.email}`}
              className="block py-1.5 text-[0.9375rem] text-paper transition-colors hover:text-lime"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1.5 text-[0.9375rem] text-paper transition-colors hover:text-lime"
            >
              LinkedIn
            </a>
            <p className="mt-4 text-[0.9375rem] text-paper/65">{site.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-7">
          <p className="font-mono text-xs text-paper/60">
            {`© ${new Date().getFullYear()} Dialed Intelligence®`}
          </p>
          <p className="font-mono text-xs text-paper/60">
            Strategy that ends in a running system. Owned by you.
          </p>
        </div>
      </Container>
    </footer>
  );
}
