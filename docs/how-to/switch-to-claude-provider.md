---
sidebar_position: 2
title: Use Claude instead of Gemini
description: Switch the changelog generator from Gemini to Anthropic Claude.
---

# Use claude instead of gemini

**Goal:** run the generator with Anthropic's Claude rather than the default Gemini
provider.

Gemini is the default because it's free. Claude is worth switching to when you want a
particular tone, are already standardized on Anthropic, or are comparing output quality
across providers.

## 1. Add your Anthropic key

Get a key from [console.anthropic.com](https://console.anthropic.com) and add it to your
`.env`:

```bash
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
```

You can keep `GEMINI_API_KEY` in the same file—the tool only reads the key for the
provider you select.

## 2. Install the Anthropic package

The Anthropic SDK is an optional dependency, so it isn't installed by default:

```bash
pip install anthropic
```

## 3. Run with `--provider claude`

```bash
python changelog.py --repo ./some-repo --last 15 --provider claude
```

That's the entire change—every other flag behaves identically.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|

| `ModuleNotFoundError: anthropic` | SDK not installed | `pip install anthropic` |
| Authentication error | `ANTHROPIC_API_KEY` missing or wrong | Re-check the value in `.env` |
| Output looks unchanged | `--provider` flag omitted | Confirm `--provider claude` is present |

## Related

- [CLI reference](../reference/cli-reference.md)—full provider and flag list.
- [How it works](../explanation/how-it-works.md)—why provider choice doesn't change the output format.
