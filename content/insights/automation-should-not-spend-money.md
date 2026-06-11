---
title: "Why your automation should not be allowed to spend money"
summary: "AI reads, drafts, forecasts, and flags. Humans and explicit rules decide and spend. The case for automation with hard limits written into the code."
date: "2026-05-28"
---

There is a line we draw in every system we build, and it is not negotiable. The software can read, sort, draft, forecast, and flag. It cannot decide, and it cannot spend. Those two verbs stay with humans and with rules a human wrote down.

This costs us sales conversations. The market is full of demos where an agent issues refunds and reorders inventory on its own while everyone applauds. Saying our systems will not do that can sound, in the moment, like an admission of weakness. We think it is the strongest claim on the page, and the reasoning is worth walking through.

## Two failures we think about constantly

Picture a returns inbox handled by an agent with refund authority. A customer emails twice about the same order, once from her work address and once from her phone. The agent, doing exactly what it was built to do, resolves both tickets. Two refunds, one return. Multiply by a busy December and you have a five-figure leak nobody notices until reconciliation, because the system that created the errors is the same system reporting that everything is fine.

Or take a purchasing agent reading supplier confirmations. A PDF renders a quantity field strangely, the parser reads 1,500 units as 4,500, and the agent dutifully cuts a purchase order for three times the intended stock. Nothing exotic happened. Document parsing fails in small ways every day. The difference between an annoyance and a $60,000 mistake is whether a person looked at the order before money moved.

Neither scenario requires bad software. Both happen with good software given authority it should not have. A model reading messy real-world documents will be wrong some fraction of the time. At a thousand documents a month, 99 percent accuracy means ten errors a month, and you do not get to choose which ten.

## What the machine is actually for

None of this argues against automation. The same returns inbox, built the way we build it, drafts the refund, attaches the order history, checks the amount against policy, and queues the whole package for a human who approves it in four seconds. The human is not redoing the work. The human is doing the one thing people are cheap at and machines are expensive at, which is noticing that something is off.

Twenty hours a week of reading, rekeying, and chasing still disappears. The approval step costs a few minutes a day. That trade, hours of toil for minutes of judgment, is the entire economic case for automation, and handing the machine spending authority improves the trade by almost nothing while adding a tail risk that can eat a quarter of margin in a bad month.

## The audit trail is part of the product

There is a quieter benefit. When every action above a threshold passes through a named person, you get a record. Who approved the refund, when, and against which policy. When your accountant, your bank, or an acquirer asks how money moves through the company, *an agent handles it* is not an answer anyone accepts. A log of human approvals is.

So we build the trail in from the start. Every automated suggestion carries its reasoning and its source documents. Every approval carries a name and a timestamp. The whole history is queryable, which means a dispute that used to take an afternoon of inbox archaeology now takes a ninety-second search.

## Limits are a stronger claim than capabilities

Any vendor can tell you what their system can do, and most will. Vendors are quieter about what their system will refuse to do, mostly because the honest answer is whatever the configuration happens to allow this week.

A stated limit is a testable promise. This system will never move money without a human approval. That sentence can be verified by reading the code, and our clients own the code, so they can verify it themselves or pay anyone they like to do so. We would rather make a small promise you can check than a large one you have to take on faith.

The owners we work with have usually been burned once already, by an automation pitch that promised everything and shipped a liability. What they want is not the most autonomous system on the market. What they want is to sleep while the system runs overnight, and the path to that has never been more capability. It is a boundary, written down, that the software cannot cross.

The machine reads, drafts, forecasts, and flags. You decide, and only you spend. Every system we ship is built on that sentence, and the contract says so.
