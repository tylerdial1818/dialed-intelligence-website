import type { Service } from "./types";

export const dataSystems: Service = {
  slug: "data-systems",
  index: 2,
  title: "Unified Data Systems",
  eyebrow: "Unified Data Systems",
  headline:
    "You should be able to ask your business a question and trust the answer.",
  problemStatement:
    "Your data lives in five places that do not talk to each other, so answering a basic question about your own business takes a day in Excel.",
  card: "Every source of truth in one place. Ask your business plain-English questions and trust the answers.",
  metaTitle: "Unified Data Systems",
  metaDescription:
    "We unify your point of sale, accounting, and spreadsheets into one system you own. Ask your business plain-English questions and trust the answers.",
  problem: [
    "Your data is real and it already exists. It just lives in five places that do not talk to each other. The point of sale, the accounting system, a folder of spreadsheets, the e-commerce platform, a supplier's emailed price lists. Answering a basic question about your own business means someone spends a day in Excel, and by the time the answer arrives, the question has changed.",
    "This is not a data problem in the abstract. It is an \"I cannot see my own business\" problem.",
  ],
  build: [
    "We unify everything you already have into a single system you own. Underneath, the work is unglamorous and we are proud of that. Extraction from every source, reconciliation so that a customer is the same customer everywhere, and tie-out against your accounting so the numbers are trustworthy before anyone queries them. On top sits a semantic layer that lets you ask plain-English questions and get honest answers instantly.",
    "Because you own the system, it plugs into whatever AI tools you use now or adopt later. Claude, ChatGPT, your own models. The system is built to outlast any one vendor's moment.",
  ],
  get: [
    "One place where your business is visible, queryable, and correct. A foundation that makes every future automation, forecast, and pricing decision better.",
    "And an asset on your side of the ledger rather than a subscription on ours. The pipelines, the warehouse, the semantic layer. Build it, you own it, and nobody ever meters your access to your own numbers.",
  ],
  practice: {
    intro:
      "A specialty retailer doing $12M a year sold through two stores, an e-commerce site, and a growing wholesale channel, with the numbers for each living in a different system and a controller's spreadsheets holding it all together.",
    beats: [
      {
        label: "Before",
        text: "Closing the month took the controller two full days of exports and copy and paste. The same product carried three different names across systems, so channel margin was an estimate, and when the owner asked which wholesale accounts were actually profitable, the honest answer was that nobody knew.",
      },
      {
        label: "The build",
        text: "We extracted every source into one warehouse the company owns, matched products and customers across systems, and tied the totals out against the books month by month until everything agreed. A semantic layer on top answers plain-English questions, like which wholesale accounts slipped this quarter, with numbers that reconcile to the accounting.",
      },
      {
        label: "After",
        text: "The monthly close package now assembles itself in under an hour, and the numbers match the books because they are built from them. Wholesale margin turned out to be four points lower than anyone believed, which led to repricing two accounts. The controller spends reporting week on analysis instead of assembly.",
      },
    ],
  },
  engagement: {
    duration: "Five to eight weeks",
    body: "Five to eight weeks for most companies in our range, driven mostly by how many source systems we are unifying and how messy they are. This is the foundation our other systems build on, so many clients start here or arrive here after a first automation proves the model.",
  },
};
