---
sidebar_position: 1
title: CLI reference
description: Complete reference for every command-line flag, default, and environment variable.
---

# CLI reference

This is a complete, lookup-oriented reference for the `changelog.py` command. For a guided
walkthrough, use the [getting-started tutorial](../tutorials/getting-started.md) instead.

## Summary

```bash
python changelog.py [--repo PATH] [--since REF] [--last N]
                    [--version LABEL] [--output FILE] [--prepend]
                    [--provider {gemini,claude}]
```

When you run the command with no arguments, the tool summarizes the **last 50 commits** of the **current
directory** using **Gemini** and prints the result to **stdout**.

## Options

| Flag | Argument | Description | Default |
|------|----------|-------------|---------|
| `--repo` | path | Path to a local git repository. | Current directory |
| `--since` | date or tag | Start point for history. Accepts an ISO date (`2025-01-01`) or a git tag (`v1.2.0`). Overrides `--last` when both are set. | None |
| `--last` | integer | Number of recent commits to include. | `50` |
| `--version` | string | Version label used in the release heading. | `Unreleased` |
| `--output`, `-o` | file | Write to a file instead of printing to stdout. | None (prints) |
| `--prepend` | flag | Insert output at the top of an existing `--output` file instead of overwriting it. | Off |
| `--provider` | `gemini` \| `claude` | LLM provider used to generate the changelog. | `gemini` |

## Heading format

The `--version` value produces a Keep a Changelog–style heading with the current date:

```
## [v1.0.0] — 2026-03-30
```

If `--version` is omitted, the heading reads `[Unreleased]`.

## Environment variables

Read from a `.env` file in the working directory (git-ignored by default).

| Variable | Required when | Notes |
|----------|---------------|-------|
| `GEMINI_API_KEY` | Using the default Gemini provider | Free key from Google AI Studio. |
| `ANTHROPIC_API_KEY` | `--provider claude` | Requires `pip install anthropic`. |

## Output categories

Generated entries are grouped into the following sections, following the
[Keep a Changelog](https://keepachangelog.com) standard. Empty categories are omitted.

`Added` · `Changed` · `Fixed` · `Removed` · `Security` · `Documentation` · `Infrastructure`

## Examples

```bash
# Last 50 commits of the current repo, printed to stdout
python changelog.py

# A specific repo, last 15 commits, labeled v1.0.0
python changelog.py --repo ./some-repo --last 15 --version 1.0.0

# Everything since the previous tag, appended to an existing file
python changelog.py --since v1.2.0 --version 1.3.0 --output CHANGELOG.md --prepend

# Everything since a date
python changelog.py --since "2025-06-01"

# Use Claude instead of Gemini
python changelog.py --repo ./some-repo --last 15 --provider claude
```

## Exit behavior

The tool reads commits with `git log`, so it must be run inside (or pointed at) a directory
that is a git repository with history available. In a shallow clone (for example, a default
CI checkout), history may be missing — see
[Automate in CI](../how-to/automate-with-github-actions.md) for the `fetch-depth: 0`
requirement.
