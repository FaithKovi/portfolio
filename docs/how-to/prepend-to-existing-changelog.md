---
sidebar_position: 3
title: Append a release without overwriting history
description: Add a new entry to the top of an existing CHANGELOG.md.
---

# Append a release without overwriting history

**Goal:** add a new release entry to the **top** of an existing `CHANGELOG.md` while
keeping everything already in the file.

By default, `--output` overwrites the target file. That's fine for a one-off, but during a
normal release cycle you want to *accumulate* history, not replace it.

## The one flag that matters: `--prepend`

```bash
python changelog.py \
  --since v1.0.0 \
  --version 1.1.0 \
  --output CHANGELOG.md \
  --prepend
```

With `--prepend`, the tool inserts the new entry above the existing content instead of
replacing the file. Your older releases stay exactly where they are.

## A complete release flow

```bash
git tag v1.1.0
python changelog.py --since v1.0.0 --version 1.1.0 --output CHANGELOG.md --prepend
git add CHANGELOG.md
git commit -m "docs: update changelog for v1.1.0"
```

:::tip Scope the range with `--since`
Passing the previous tag to `--since` keeps the entry focused on what actually changed in
this release, instead of re-summarizing commits you've already documented.
:::

## Related

- [Automate this in CI](./automate-with-github-actions.md) so it runs on every release.
- [CLI reference](../reference/cli-reference.md) for `--since`, `--output`, and `--prepend`.
