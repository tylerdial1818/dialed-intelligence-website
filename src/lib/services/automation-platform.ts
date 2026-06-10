import type { Service } from "./types";

export const automationPlatform: Service = {
  slug: "automation-platform",
  index: 3,
  title: "Your Own Automation Platform",
  eyebrow: "Your Own Automation Platform",
  headline:
    "A workflow automation platform that runs on your infrastructure, carries your name, and never charges you per seat.",
  problemStatement:
    "Your automation tool charges you more the more you use it, and your workflows live on someone else's servers.",
  card: "A workflow automation platform deployed on your infrastructure, under your brand, with no per-seat license ever.",
  metaTitle: "Your Own Automation Platform",
  metaDescription:
    "We deploy a workflow automation platform in your environment, under your name. Your team extends it themselves and never pays a per-seat license.",
  problem: [
    "Off-the-shelf automation tools are genuinely useful right up until they are not. Pricing scales with usage, so the more value you get, the more you pay. Your workflows and their history live on someone else's servers. And the moment you need a connector or behavior the vendor did not anticipate, you are filing a feature request and waiting.",
  ],
  build: [
    "We deploy a full workflow automation platform inside your own environment. Your team gets a visual builder for connecting the tools you already use, with hundreds of integrations available out of the box and the ability for us to build custom connectors for the systems that make your business yours. We configure it, brand it, connect it to your stack, build your first set of production workflows, and train your team to extend it.",
  ],
  get: [
    "The platform itself, running on infrastructure you control. No per-seat license, no usage metering, no data leaving your environment. Your team can build and modify automations themselves, and we remain available for the workflows that need real engineering.",
    "Ownership here means the platform itself, not just the workflows on it. Build it, you own it, and no invoice arrives when your team doubles or your run volume triples.",
  ],
  practice: {
    intro:
      "A commercial field services company doing $7M a year ran about two dozen automations on a hosted tool, and the metered bill had roughly tripled in two years as job volume grew.",
    beats: [
      {
        label: "Before",
        text: "The operations manager rationed runs to keep the monthly bill in check, pausing useful automations during the busy season, exactly when they earned their keep. Two integrations the business depended on, the dispatch system and a regional supplier portal, did not exist on the vendor's platform, and the feature requests sat open for months.",
      },
      {
        label: "The build",
        text: "We deployed the platform inside the company's own cloud environment, put their name on it, and migrated the existing workflows in the first two weeks. We built custom connectors for the dispatch system and the supplier portal, then trained the operations manager and two coordinators to build and modify workflows themselves.",
      },
      {
        label: "After",
        text: "The metered bill is gone and nothing gets paused in the busy season anymore. The two connectors the old vendor never built went live before handover, and the team has shipped eight new workflows on their own since.",
      },
    ],
  },
  engagement: {
    duration: "Two to four weeks",
    body: "Two to four weeks to deploy, integrate, and ship the first set of workflows, including team training.",
  },
};
