import type { Service } from "./types";

export const operationsAutomation: Service = {
  slug: "operations-automation",
  index: 1,
  title: "Operations Automation",
  eyebrow: "Operations Automation",
  headline:
    "Your team spends twenty hours a week moving information between systems. We can give most of those hours back.",
  problemStatement:
    "Repetitive work between your systems consumes your best people and scales with revenue.",
  card: "Repetitive work between your systems, handled by agents your team supervises.",
  metaTitle: "Operations Automation",
  metaDescription:
    "Workflow agents that handle the routine ninety percent of repetitive operational work and route the judgment calls to your team. Built in weeks, owned by you.",
  problem: [
    "Every growing company runs on a hidden layer of repetitive work. Keying orders from email into the system of record. Reconciling sales across channels. Answering the same customer questions. Matching invoices. Chasing suppliers for confirmations. None of it requires judgment most of the time, all of it requires accuracy all of the time, and it scales linearly with revenue. Growth makes it worse.",
    "You already know what this costs because it shows up as salary. What is harder to see is the opportunity cost. Your best people spend their attention on transcription instead of on customers, suppliers, and decisions.",
  ],
  build: [
    "We build workflow agents, each wrapped around one specific process. The agent handles the routine ninety percent autonomously. The judgment-laden ten percent routes to a person on your team with everything pre-filled and ready for a decision.",
    "Modern AI has made the historically expensive parts cheap. Reading a messy order email, parsing an oddly formatted invoice, drafting a response in your company's voice. The engineering effort goes where it should, into reliability. Clean integration with your existing systems, audit trails on every action, and graceful failure that never double-processes a refund.",
  ],
  get: [
    "A named process that used to consume a person's day now runs itself, with a human approving exceptions. You see the before and after in hours per week.",
    "And the system that does it belongs to you. The agents, the integrations, the audit trail. Build it, you own it, and nothing about it ever shows up as a per-seat line item.",
  ],
  practice: {
    intro:
      "A wholesale distributor doing $9M a year received around sixty purchase orders a day by email, every one of them formatted differently and every one of them keyed into the ERP by hand.",
    beats: [
      {
        label: "Before",
        text: "Two experienced staff spent most of each morning on data entry. Errors surfaced days later as shipping disputes, and order cutoff times slipped when volume spiked.",
      },
      {
        label: "The build",
        text: "An agent reads each incoming order, extracts the line items, checks them against the catalog and the customer's pricing, and enters clean orders directly. Anything ambiguous, a new product code, an odd quantity, a price mismatch, lands in a review queue with the original email and the agent's reading side by side.",
      },
      {
        label: "After",
        text: "Roughly nine in ten orders flow through untouched. The review queue takes one person under an hour a day. The two staff who used to do data entry now spend their mornings on suppliers and backorders, which is what they were hired for.",
      },
    ],
  },
  engagement: {
    duration: "Three to five weeks",
    body: "A single workflow is the natural starting point and typically ships in three to five weeks. Most clients add a second and third workflow once the first one proves itself.",
  },
};
