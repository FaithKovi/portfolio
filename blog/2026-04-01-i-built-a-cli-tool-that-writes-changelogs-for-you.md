---
slug: i-built-a-cli-tool-that-writes-changelogs-for-you
title: I Built a CLI Tool That Writes Changelogs For You — Here's Why
authors: Faith Wachukwu
tags: [changelog automation, LLM, AI tools for developers, technical writing, prompt engineering, documentation engineering, Google Gemini API, LLM developer tools, Keep a Changelog, CI/CD automation]
---

<img src="/img/blog/cli-tool.png" alt="I Built a CLI Tool That Writes Changelogs For You — Here's Why" />

Developers hate writing changelogs. Not because it's hard, but because it's boring. You already did the work, you wrote the code, you wrote the commit messages, you shipped the feature. Now someone wants you to write about it again, but prettier?  

So most teams do one of three things: skip the changelog entirely, dump raw git log output into a file and call it done, or assign the task to whoever lost the last argument.  

I decided to fix this with a Python CLI tool that reads your git history and uses AI to generate a clean, categorized, publish-ready changelog. One command. One file. Done.
Here's the thinking behind it.

<!-- truncate -->
## The Real Problem of Translation

Commit messages are written for developers in the moment. They say things like `fix: resolve edge case in auth token refresh` or `chore: bump deps`. Useful for context in a git blame, useless for a user reading release notes.  

A good changelog translates those internal notes into something a user actually cares about. "Fixed a bug where login sessions expired unexpectedly" hits different than `fix: token refresh edge case`.  

That translation step is where most teams give up. It takes judgment, context, and effort for a document that feels like an afterthought. AI is genuinely good at this kind of rewriting, so I leaned into that.

## Why a CLI Tool and Not a Web App

I wanted this to fit into existing workflows, not replace them. Developers live in the terminal. They tag releases from the terminal. They push code from the terminal. A changelog generator should meet them there.
The whole tool is one Python file. No server, no database, no accounts. You run a command, it reads your git history, sends the commits to an LLM, and prints (or saves) a formatted changelog. That's it.  

```python
python changelog.py --repo ./my-project --version 1.1.0 --output CHANGELOG.md
```

I tested it out on a GitHub Repository I found online called [Vibevoice](https://github.com/microsoft/VibeVoice):  

<div style={{ textAlign: 'center' }}>
  <img src="/img/blog/changelog2.png" alt="The python changelog script run in a terminal." />
</div>

This created a `CHANGELOG.md` file in the project directory that looked like this:

```
## [v1.0.0] - 2026-03-30
**Added**
- Gradio ASR demo with video support, including demo audio/video files and Cloudflare tunnel integration. (09ca114f)
- Data parallel (DP) support to the vLLM server launcher, allowing for multiple GPU replicas with automatic load balancing. (9634518c)
- Tensor parallel (TP) support to the vLLM server launcher. (9634518c)
- Announcement regarding VibeVoice ASR integration into Transformers v5.3.0, with a link to the Hugging Face release page. (7e73beec)

**Changed**
- Nginx worker processes are now set to 2x DP replicas for optimal HTTP throughput, rather than defaulting to 'auto'. (cd945395)
- Implemented nginx-based data parallelism for improved ASR throughput, utilizing a reverse proxy to avoid single-process HTTP bottlenecks. (3817f74d)
- Per-worker environment variables in DP mode are now auto-tuned, ensuring correct settings are passed to each worker subprocess. (e6b65abb)

**Fixed**
- Resolved GPU Out-of-Memory (OOM) errors by restoring sequential encoder usage, as the batch encoder caused memory issues under heavy load. (5cd81bb4)

**Documentation**
- Added Vibing download links. (c766f12e)
- Added Vibing demo video to the news section. (8f133837)
- Corrected bold formatting in the news section. (0857b6d5)
- Added news about Vibing voice input adoption. (c8371b6b)
- Added the Trendshift #1 trending badge to the README. (b691f991)
- Updated documentation for multi-GPU deployment configurations, including DP, TP, and hybrid setups. (9634518c)

```

With this, you have your changelog ready.  
You can slot this tool into CI/CD. I included a GitHub Actions workflow in the README so teams can auto-generate changelogs on every release without anyone touching it manually.

## Choosing the Right AI Provider

I started with Anthropic's Claude API because I was already familiar with it. It produces excellent output — Claude follows instructions well, respects the formatting constraints, and rarely hallucinates extra commits.  

But then I hit a problem: the Anthropic API requires a paid key. Even though it's cheap (fractions of a cent per run), asking someone to set up billing just to try a portfolio project is a lot and that can kill adoption.  

So I added Google Gemini as the default provider. Gemini's free tier doesn't need a credit card, doesn't expire, and gives you a good amount of requests per day. For a tool that runs maybe once or twice per release cycle, that's effectively unlimited.  

The tool now supports both — Gemini by default, Claude with a `--provider claude` flag. You have the same prompt, same output format, and your choice of engine.

## The Prompt Is the Product

The interesting engineering in this project is the prompt. I needed the LLM to do several things consistently: group commits by type (Added, Changed, Fixed, Security, etc.), rewrite these commit messages into user-friendly descriptions, drop noise like merge commits and typo fixes, keep commit hashes for traceability, and follow the [Keep a Changelog format](https://keepachangelog.com/) without deviation.  

Getting all of that right took iteration. Early versions would sometimes invent commits that didn't exist, or merge two separate changes into one bullet point. Adding explicit constraints — "Output ONLY the markdown, no preamble" and "Don't just copy the commit message, rewrite it" — cleaned up most of the issues.  

The prompt lives in a `build_prompt()` function so anyone can customize it. You want to rename "Infrastructure" to "DevOps"? Change one line. You want to output HTML instead of markdown? Rewrite the format instructions. The prompt is the part you should experiment with.

## What This Project Taught Me

Building this reinforced something I keep telling people: **prompt engineering is part of documentation engineering**. The prompt I wrote for this tool is essentially a style guide. It tells the LLM what voice to use, how to structure content, what to include, and what to leave out. That's exactly what a documentation style guide does for human writers.  

If you're a technical writer wondering how AI fits into your career, this is the answer. You're not being replaced. You're being promoted from writing every word to designing the systems that generate them.

## Try It Yourself

The project is open source. Clone it, point it at any git repo, and see what it produces.  

GitHub: https://github.com/FaithKovi/changelog-generator  

Setup takes two minutes: clone, install dependencies, grab a free Gemini API key, and run. The README walks you through every step.
If you build something with it or find a bug, open an issue. I'd love to hear how other teams are handling their changelog workflows.
