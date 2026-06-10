import type { Service } from "./types";

export const pricing: Service = {
  slug: "pricing",
  index: 5,
  title: "Dynamic Pricing",
  eyebrow: "Dynamic Pricing",
  headline:
    "Everyone reprices the bestsellers. The margin is leaking from everything else.",
  problemStatement:
    "Most of your catalog gets priced once and forgotten, and that is where margin quietly leaks year after year.",
  card: "Margin recovery across the long tail of your catalog, driven by real demand modeling.",
  metaTitle: "Dynamic Pricing",
  metaDescription:
    "Margin recovered across the long tail of your catalog. Real demand modeling, constrained optimization within your rules, and every price explainable.",
  problem: [
    "Most pricing attention, yours and your competitors', goes to the visible five percent of the catalog. The other ninety-five percent gets priced once and forgotten, and that is where margin quietly leaks year after year.",
    "At thousands of SKUs, nobody has time to think about each price, so most prices are never really decided at all.",
  ],
  build: [
    "A pricing system grounded in real demand modeling. We estimate how your customers actually respond to price, product by product, then run constrained optimization across the catalog within rules you set. Floors, ceilings, brand constraints, competitive positions.",
    "Everything is deterministic and explainable. You can ask why any price moved and get a real answer, because a pricing system you cannot interrogate is a pricing system you cannot trust.",
  ],
  get: [
    "Margin recaptured across the long tail, with every price defensible and every rule yours. This is our most quantitatively demanding work and the place our econometrics background earns its keep.",
    "And the system that does it belongs to you. The demand models, the optimizer, the rule set. Build it, you own it, and no vendor ever takes a cut of the margin it recovers.",
  ],
  practice: {
    intro:
      "A replacement parts retailer doing $14M a year carried about eleven thousand SKUs, and outside the top few hundred sellers most prices had not been touched since the items were first listed.",
    beats: [
      {
        label: "Before",
        text: "A category manager repriced the bestsellers monthly against two competitors and left the rest alone. Long-tail prices drifted with old supplier costs, a handful of items sold below current landed cost, and others sat priced so high they never moved.",
      },
      {
        label: "The build",
        text: "We modeled demand product by product from three years of sales history, grouping thin-history items with their close substitutes. An optimizer proposes prices weekly across the catalog within rules the team set. Floors over landed cost, ceilings against reference brands, and no move larger than five percent in a week. The manager reviews a ranked list of proposed changes and can see the reasoning behind each one before anything goes live.",
      },
      {
        label: "After",
        text: "Gross margin on the long tail came up a little over a point in the first two quarters, worth roughly $70k a year at current volume, with no measurable drop in unit sales. The category manager still signs off on every change. The difference is that prices across the catalog are now decided instead of inherited.",
      },
    ],
  },
  engagement: {
    duration: "Four to eight weeks",
    body: "Four to eight weeks. This system is data-hungry, so it is offered selectively to clients with sufficient sales history and catalog depth for the optimization to move real money. The diagnostic tells us honestly whether you are one of them.",
  },
};
