---
title: "Case study: cutting support tickets by ~80%"
description: How a documentation rebuild at Clouddley deflected the majority of inbound support tickets.
---

# Cutting support tickets by ~80% with a documentation rebuild

**Role:** Documentation Engineer, Clouddley · **Timeframe:** 2023–2025 · **Outcome:** ~80% reduction in inbound support tickets.

This is the impact-focused companion to the [documentation samples](/docs/intro). Where
those pages show *how* I write, this shows *why it matters* — what a documentation
investment returns when it's treated as a product surface rather than an afterthought.

## The situation

Clouddley is a cloud platform that lets teams run apps, databases, brokers, and AI workloads
across providers without vendor lock-in. Powerful surface area — and every bit of that power
was a potential support question. Users hit the same recurring walls: onboarding friction,
configuration questions, and "how do I do X" tasks that had no self-serve answer. Each one
became a ticket, and each ticket pulled an engineer away from building.

The core problem wasn't that answers didn't exist — engineers *could* answer these questions.
It was that the answers lived in people's heads and in Slack threads, not in a place a user
could find at 2 a.m.

## The approach

I treated the documentation like production software, not a wiki.

**1. Find the real questions.** I started from the support queue itself, clustering tickets by
theme to see which topics actually generated load. Documentation effort went where the tickets
were, not where it felt productive to write.

**2. Structure for the reader's intent.** I separated learning-oriented onboarding from
task-oriented how-tos and lookup-oriented reference, so a new user and a returning user each
had a path that fit what they needed in that moment. (The reasoning behind that split is in my
[Diátaxis write-up](/blog/how-diataxis-turns-documentation-chaos-into-clarity).)

**3. Build a docs-as-code pipeline.** I moved documentation into a Git-based workflow with peer
review, version control, and automated publishing. Docs shipped through the same rigor as code:
reviewed, versioned, and continuously deployed. That made the docs *maintainable* — the
difference between a one-time cleanup and a system that stays accurate.

**4. Close the loop with engineering.** I worked directly with engineers and product to catch
inaccuracies and surface the gaps users were quietly hitting, so the docs tracked the product
instead of drifting from it.

## The result

Inbound support tickets dropped by roughly **80%**. The questions that used to interrupt
engineers were answered before they were ever asked, because the answer was now discoverable,
accurate, and current.

The second-order effects mattered as much as the headline number:

- **Engineering time returned to engineering.** Fewer repeat questions meant fewer context
  switches for the people building the product.
- **Faster onboarding.** New users reached a working state without needing a human in the loop.
- **A maintainable system, not a snapshot.** Because the docs lived in a reviewed, continuously
  deployed pipeline, the deflection held instead of decaying.

## What I'd track to prove it on day one

For a hiring manager evaluating this: the metric I anchor to is **ticket deflection** — tickets
per active user, segmented by topic, before and after a documentation change. I instrument the
docs the same way: search queries with no results, top-exited pages, and "was this helpful"
signals all point to the *next* gap to close. Documentation is only finished when you can
measure that it's working.

## Related

- [Documentation samples](/docs/intro) — a full Diátaxis-structured doc set.
- [Why on-call engineers ignore your runbooks](/blog/why-on-call-engineers-ignore-your-runbooks) — the same deflection thinking applied to incident docs.
