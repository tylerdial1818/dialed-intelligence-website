export const site = {
  name: "Dialed Intelligence",
  url: "https://dialedintelligence.com",
  email: "hello@dialedintelligence.com",
  // Update with the firm's real LinkedIn URL before launch.
  linkedin: "https://www.linkedin.com/company/dialed-intelligence",
  // Set to a Calendly (or equivalent) scheduling URL to enable the
  // embedded scheduler on /contact. Leave empty to show the form only.
  schedulerUrl: process.env.NEXT_PUBLIC_SCHEDULER_URL ?? "",
  location: "Chicago based, working nationally.",
  positioning:
    "We diagnose like a consultancy. We deliver like a product team. You own the result.",
  brandLine: "Build it. You own it.",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Ownership", href: "/ownership" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export const ctaLabel = "Book a Working Session";
export const ctaHref = "/contact";
