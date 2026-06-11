---
sidebar_position: 1
title: "Tutorial: Generate your first changelog"
description: A guided, end-to-end first run of the Changelog Generator.
---

# Generate your first changelog

This tutorial takes you from an empty terminal to a polished changelog in about ten
minutes. You'll install the tool, point it at a real repository, and produce a release
entry you could paste straight into a `CHANGELOG.md`.

You do **not** need to understand how the tool works internally yet — that is what the
[explanation](../explanation/how-it-works.md) is for. Here, just follow along; every
command is meant to be run exactly as written.

## What you'll need

- **Python 3.8 or newer** (`python --version` to check)
- **Git** installed and on your `PATH`
- A free **Google account** — we'll use Gemini, which has no credit-card requirement

That's it. No paid API key is required to finish this tutorial.

## Step 1 — Get the tool

```bash
git clone https://github.com/FaithKovi/changelog-generator.git
cd changelog-generator
```

## Step 2 — Create an isolated environment

```bash
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Your prompt should now show `(venv)` at the start of the line. That tells you the
environment is active.

## Step 3 — Add a free Gemini key

Copy the example environment file:

```bash
cp .env.example .env
```

Then:

1. Open [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and sign in.
2. Click **Create API Key** and copy the value.
3. Paste it into `.env`:

   ```bash
   GEMINI_API_KEY=AIzaSy-your-key-here
   ```

:::tip
The `.env` file is already git-ignored, so your key will not be committed. Never paste an
API key directly into a command or a tracked file.
:::

## Step 4 — Run it against a real repository

Let's generate a changelog for an actual open-source project so the output is meaningful:

```bash
git clone https://github.com/pallets/flask.git
python changelog.py --repo ./flask --last 20 --version 1.0.0 
```

In a few seconds you'll see a categorized, Keep a Changelog–style entry printed to your
terminal — grouped into **Added**, **Changed**, **Fixed**, and so on, with short commit
hashes for traceability.

## Step 5 — Save it to a file

```bash
python changelog.py --repo ./flask --last 20 --version 1.0.0 --output CHANGELOG.md
```

Open `CHANGELOG.md` and you'll find the same entry, ready to commit.

## What you just did

You installed the tool, authenticated against a free LLM provider, and turned twenty raw
commits into a readable release note — without hand-sorting a single line.

## Where to go next

- **Have a specific job to do?** The [how-to guides](../how-to/automate-with-github-actions.md)
  cover automating this in CI, switching to Claude, and appending to an existing changelog.
- **Want every flag explained?** See the [CLI reference](../reference/cli-reference.md).
- **Curious how categorization works?** Read [how it works](../explanation/how-it-works.md).
