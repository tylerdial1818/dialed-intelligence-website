import type { Service } from "./types";
import { operationsAutomation } from "./operations-automation";
import { dataSystems } from "./data-systems";
import { automationPlatform } from "./automation-platform";
import { inventory } from "./inventory";
import { pricing } from "./pricing";

export type { Service, ServiceBeat } from "./types";

/** Canonical ordering. Lead with the two vertical-agnostic spine offers. */
export const services: Service[] = [
  operationsAutomation,
  dataSystems,
  automationPlatform,
  inventory,
  pricing,
];

export const serviceNav = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  href: `/services/${s.slug}`,
}));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
