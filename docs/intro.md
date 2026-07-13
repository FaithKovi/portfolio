---
sidebar_position: 1
title: Documentation Samples
description: A working documentation set organized with the Diátaxis framework.
---

# Documentation sample

This section is a **working writing sample**, not a description of one. Rather than
link to scattered PDFs, I documented a real, open-source tool I created end to end and organized
the result the way I organize production documentation: with the
[Diátaxis](https://diataxis.fr/) framework.

The subject is the [Changelog Generator](https://github.com/FaithKovi/changelog-generator)—a Python CLI that turns git history into a publish-ready changelog using an Large Language Model (LLM).
It's intentionally a *real* tool with real edge cases, so the docs have to do real work:
onboard a first-time user, answer task-specific questions, serve as a lookup reference,
and explain the design decisions underneath.

## How this is organized

Diátaxis splits documentation into four modes based on what the reader needs *right now*.
Mixing them is the most common reason docs feel cluttered. Creating a tutorial that keeps
stopping to explain architecture loses a beginner while a reference padded with narrative
slows down an expert.

| Mode | Reader's question | Where it lives |
| --- | --- | --- |
| **Tutorial** | "I'm new, walk me through it." | [Getting started](./tutorials/getting-started.md) |
| **How-to guide** | "I have a specific task to finish." | [How-to guides](./how-to/automate-with-github-actions.md) |
| **Reference** | "What does this flag do, exactly?" | [CLI reference](./reference/cli-reference.md) |
| **Explanation** | "Why is it built this way?" | [How it works](./explanation/how-it-works.md) |

If you only read one page to judge the writing, read the
[getting-started tutorial](./tutorials/getting-started.md) for instructional voice, or
the [CLI reference](./reference/cli-reference.md) for structured, scannable reference design.

<!-- ## Want the impact story instead?

For an outcome-focused write-up rather than a product doc, see the
[Clouddley support-deflection case study](/case-studies/clouddley) — a documentation
rebuild that cut inbound support tickets by ~80%. -->
