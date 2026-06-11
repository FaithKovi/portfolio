---
sidebar_position: 1
title: How it works
description: The design decisions behind the changelog generator — why it's built this way.
---

# How it works

This page explains the *why* behind the tool. This is the reasoning that makes the other docs make sense. If you just want to generate a
changelog, the [tutorial](../tutorials/getting-started.md) is the faster path.

## The problem it's solving

Changelogs decay in a predictable way. Teams either skip them, dump raw commit messages that
no human wants to read, or spend half an hour before every release hand-sorting commits into
categories. All three failure modes share a root cause: the *source* material (commit
messages) and the *audience* material (a release note) are written for different readers, and
bridging them is tedious manual work.

The tool's premise is that the bridge of categorizing, rewriting, and formating is exactly the kind of
bounded, well-specified transformation an LLM does reliably, *if* the prompt constrains it
tightly enough.

## The pipeline

```
Git History → Parse Commits → Filter Noise → LLM → Polished Changelog
```

Each stage exists to make the next one's job smaller:

1. **Read** commit messages via `git log`.
2. **Filter** out noise like merge commits, WIP commits, and trivial typo fixes before anything
   reaches the model. Cleaning input deterministically is cheaper and more reliable than
   asking the model to ignore noise.
3. **Prompt** the model to categorize and rewrite what remains.
4. **Emit** Keep a Changelog–formatted markdown.

## Why the prompt is structured the way it is

Good output starts with a good prompt, so it's broken into clear parts instead of one vague 
instruction:

- **Role framing** tells the model it's acting as a technical writer, not a chat assistant.
  This shifts the tone away from conversational filler toward concise, user-facing descriptions.
- **Categorization rules** map commits onto the fixed Keep a Changelog vocabulary (Added,
  Changed, Fixed, Removed, Security, Documentation, Infrastructure). A closed set prevents the
  model from inventing distinctive headings that breaks the flow.
- **A rewrite instruction** forces the model to *translate* commit messages into user-facing
  language instead of pasting them. "fix npe in auth handler" becomes "Fixed a crash when
  logging in without a saved session."
- **Noise filtering** in the prompt is a second line of defense behind the deterministic
  filter, catching low-value commits that slipped through.
- **Traceability** requires a short commit hash on each line, so a reader can always jump from
  the human-readable note back to the actual change.

The prompt lives in `build_prompt()` in `changelog.py` precisely so it can be edited. The
design assumption is that every team's changelog conventions differ slightly, and the right
place to encode those conventions is one readable function rather than scatter it across the codebase.

## Why two providers

Gemini is the default because it's free with no billing setup, which removes the most common
barrier to a first run. Claude is offered as an opt-in for teams that want a specific tone or
are already standardized on Anthropic. Crucially, **provider choice does not change the output
mode** — both are driven by the same prompt and produce the same Keep a Changelog
structure. The provider is an implementation detail behind a stable interface, which is why
[switching](../how-to/switch-to-claude-provider.md) is a single flag.

## Why one file

The entire tool is one Python file. For a utility this size, a multi-module structure would
add navigation cost without adding clarity. Keeping it in `changelog.py` means a new
contributor can read the whole thing top to bottom in one sitting. Which in itself a good
documentation decision for a small tool.

## See also

- [CLI reference](../reference/cli-reference.md) — the concrete surface this design produces.
- [Getting started](../tutorials/getting-started.md) — see the pipeline run end to end.
