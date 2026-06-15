---
slug: i-built-a-cli-tool-that-writes-changelogs-for-you
title: I Built a CLI Tool That Writes Changelogs For You — Here's Why
authors: Faith Wachukwu
tags: [changelog automation, LLM, AI tools for developers, technical writing, prompt engineering, documentation engineering, Google Gemini API, LLM developer tools, Keep a Changelog, CI/CD automation]
---

<img src="/img/blog/cli-tool.png" alt="I Built a CLI Tool That Writes Changelogs For You — Here's Why" />

As a developer, writing changelogs can be a boring task. You already did the work, wrote the code, the commit messages, and shipped the feature. Now you’d need to go through all the commits for a release to create a changelog. This can be a lot.  
With this in mind, I created a Python CLI tool that reads your git history and uses AI to generate a clean and publish-ready changelog with one command and one file. Here’s the thinking behind it.

<!-- truncate -->
## The Real Problem of Translation

Developers write commit messages when creating a pull request to close out tasks they are assigned. They’d create commit messages like: `fix: resolve edge case in auth token refresh` or `chore: bump deps`. This is useful for context in git blame, but useless to a user reading release notes.  

A good changelog translates those commit messages into something a user actually cares about. Like `Fixed a bug where login sessions expired unexpectedly` can be easily understood by the user than `Fix: token refresh edge case.`

The step where these messages are translated is where teams give up. It takes correct judgement, context, and effort for a changelog not to feel like an afterthought.  

## Why a CLI Tool and Not a Web App

I wanted this CLI tool to fit into existing workflows and not replace them entirely. Developers live in the terminal, so it should be easy to use the tool there. As a developer, you’ll simply run the command in your terminal, which reads your git history, sends the commits to an LLM, and saves a formatted changelog. 

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

With this, you have your changelog file ready.
This also works with a CI/CD pipeline. I included a GitHub Actions workflow in the project README so you can auto-generate changelogs on every release.

## Choosing the AI Provider

When it came to choosing an AI provider, I started with Anthropic’s Claude API because I was already familiar with it. Claude produces excellent results, follows instructions well and respects the formatting constraints.  

Then I hit a problem with it: the Anthropic API requires a paid key. For a tool that runs maybe once or twice per release cycle, that looked excessive.  

So I added Google Gemini as the default provider. Its free tier gives a good amount of requests per day.
With that, the tool supports both Gemini by default and Claude with a `–provider claude` flag.

## The Prompt Is the Product

The interesting part of this project is the prompt. The LLM need to do several things consistently: group commits by type (Added, Changed, Fixed, Security, etc.), rewrite these commit messages into user-friendly descriptions, drop noise like merge commits and typo fixes, keep commit hashes to make it easy to trace, and follow the [Keep a Changelog format](https://keepachangelog.com/) without deviating from it.  

Getting all of this right took iteration.
The prompt lives in a `build_prompt()` function in the script, so you can customize it. The prompt is the part you can tweak to suit your needs.

## What Working on this Project Taught me

Building this reinforced something I keep telling people: **prompt engineering is part of documentation engineering**. The prompt I wrote for this tool is basically a style guide for the changelog. It tells the LLM what voice to use, how to structure content, what to include, and what to leave out. That's exactly what a documentation style guide does for human writers.  

If you're a technical writer wondering how AI fits into your career, this is the answer. You're not being replaced. You're being promoted from writing every word to designing the systems that generate them.

## Try It Yourself

The project is open source. Clone it, point it at any git repo, and see what it produces.  

GitHub: https://github.com/FaithKovi/changelog-generator  

It takes a few minutes to set up; the README walks you through every step. If you build something with it or find a bug, open an issue. I'd love to hear how other teams are handling their changelog workflows.