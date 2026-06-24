import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

// The R5 type system is self-hosted Helvetica in globals.css: Helvetica Neue LT
// (sans, regular width) and Helvetica Monospaced Pro (mono), each with a system
// Helvetica fallback. Font roles live in globals.css under @theme.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Dialed Intelligence | We find what is costing you most, then build the system that fixes it",
    template: "%s | Dialed Intelligence",
  },
  description:
    "Strategy and engineering in one firm. We diagnose the problem, build the AI that solves it, and hand it over. You own it outright.",
  openGraph: {
    siteName: "Dialed Intelligence",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // The inline script below adds a "js" class before hydration so scroll
      // reveals only hide content when JS is actually running.
      suppressHydrationWarning
    >
      <body className="flex min-h-svh flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#main"
          className="label-mono-sm sr-only z-[100] rounded-[2px] bg-blue text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
