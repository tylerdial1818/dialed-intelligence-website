import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/PPNeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/PPNeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dialed Intelligence | Custom systems, built in weeks, owned by you",
    template: "%s | Dialed Intelligence",
  },
  description:
    "Dialed Intelligence designs and builds custom data systems, AI agents, and automation for companies that are done renting software and done paying for advice nobody executes.",
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
      className={`${neueMontreal.variable} ${spaceMono.variable}`}
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
