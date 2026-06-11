---
sidebar_position: 1
title: Automate changelog generation in CI
description: Generate a changelog automatically on every GitHub release.
---

# Automate changelog generation in CI

**Goal:** produce a changelog automatically whenever you publish a GitHub release, so no
one has to remember to run the tool by hand.

This guide assumes you already have the tool working locally. If not, start with the
[getting-started tutorial](../tutorials/getting-started.md).

## Before you start

You'll need:

- A repository on GitHub with permission to add workflows and secrets
- A Gemini API key (or an Anthropic key if you prefer Claude)

## 1. Store your API key as a secret

In your repository, go to **Settings → Secrets and variables → Actions → New repository
secret**. Add:

- **Name:** `GEMINI_API_KEY`
- **Value:** your key

Never commit the key to the workflow file.

## 2. Add the workflow

Create `.github/workflows/changelog.yml`:

```yaml
name: Generate Changelog
on:
  release:
    types: [created]

jobs:
  changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0          # full history is required for git log

      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: pip install google-genai python-dotenv

      - name: Generate changelog
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
        run: |
          python changelog.py \
            --since ${{ github.event.release.tag_name }} \
            --version ${{ github.event.release.tag_name }} \
            --output CHANGELOG.md --prepend
```

:::caution `fetch-depth: 0` is not optional
The default checkout fetches only the latest commit. The tool reads history with
`git log`, so a shallow clone produces an empty or truncated changelog. Setting
`fetch-depth: 0` pulls the full history.
:::

## 3. Commit the result

The step above writes to `CHANGELOG.md` but doesn't persist it. Add a final step to commit
the change back:

```yaml
      - name: Commit changelog
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add CHANGELOG.md
          git commit -m "docs: update changelog for ${{ github.event.release.tag_name }}" || echo "No changes"
          git push
```

## Verify it works

Publish a release in the GitHub UI. Within a minute the **Actions** tab should show a
green run, and your `CHANGELOG.md` should have a new entry at the top.

## Related

- [Switch to the Claude provider](./switch-to-claude-provider.md) if you'd rather use Anthropic.
- [CLI reference](../reference/cli-reference.md) for every flag used above.
