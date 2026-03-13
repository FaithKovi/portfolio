---
slug: writing-for-the-engineer-who-will-replace-you
title: Writing for the Engineer Who Will Replace You
authors: Faith Wachukwu
tags: [devops, docs]
---

<img src="/img/blog/cover-writing-engineer.jpg" alt="An engineer working in the dark." />

There’s a moment where you’re staring at some internal documentation at 11 PM, trying to figure out why a deployment pipeline is failing, and the doc is incomplete. It just stops like the person who wrote it got pulled into a meeting and never came back.

<!-- truncate -->

Maybe they left, or got promoted and never got back to finishing it. Well, it doesn’t matter. What matters is that you’re the one sitting there now, feeling betrayed by the doc.
I’ve been on both sides of that moment, staring at broken docs and leaving unfinished ones behind. But somewhere along the way, I started thinking differently about who I was actually writing for and how they would feel with an incomplete doc. And this changed everything about how I approach documentation.

## You're Not Writing for Your Team

What nobody tells you early: your colleagues might not need your docs. Yes, that's right, they might not. They were in the same Slack threads. Same meetings. They know why the authentication service talks to three different caches because they were there when someone made that questionable decision at 4 PM on a Friday.
Your real audience is the person who is employed 18 months later, gets handed a laptop, and is told, “You own this now.”
With no context, no slack history, and no memory of what happened previously, that shaped how the system works today. All they have is what you left behind.

## The "Why" Matters More Than the "What"

When I started my career, I documented what things I did. Each step was written clearly, with every procedure cleanly written. Well, it became completely useless six months down the line when the step had changed completely, and I didn’t update the doc.
What I’ve learned is that knowing the why is important. What stays beyond the steps and dashboard interfaces is the reasoning behind the decision.  

*Why did we choose Kafka over RabbitMQ?* *Why is the timeout set to 30 seconds and not 10 seconds?*  

Knowing the context behind decisions is quite important. It’s what lets the next person make good decisions instead of just following what they don’t understand. I started adding more context to almost everything I write. Not like a full-blown write-up every time, sometimes it’s just two sentences that can save someone the time a mistake can cost them.

## Write for the 2 AM Version of That Person

If you’ve ever been on-call, you know there is a difference between reading documentation at your desk while drinking coffee versus reading it at 2 AM when everything is on fire, and your phone keeps buzzing.
That’s a different reader. One who is not interested in whether you wrote it stylishly. They just want answers fast. They want to know: 

- what does this service depend on?
- what breaks when it goes down?
- how do I restart it without making it worse?  

So when I am structuring anything operational, I try to keep that person in mind. I make sure I use short sentences, clear headings, and remove doubt from their minds. If there’s a command they’ll need to run, I include it, making sure it's easy to find and not buried deep into a paragraph section.

## Treat Documentation Like a Product

One big shift in my thinking came when I stopped treating doc as a side work and started treating it as a product.
Think about it this way: if the person replacing you can’t understand the system from your documentation, then you haven’t finished working on that doc.  

When you see documentation as a product, something that has users, a purpose, and a quality standard to follow, you start making different choices. You will think about the structure, what is important to add or what to leave out, and how to maintain it.

<div style={{ textAlign: 'center' }}>
  <img src="/img/blog/writingEngineer2.png" alt="A simple flowchart showing Documentation-Users-Feedback-Improvements." />

  *A simple workflow diagram of documentation lifecycle*
</div>

## What I Actually Do Differently Now

Over time, I’ve settled into a few habits that came directly from this mindset. 
I write a summary about the state of things for every system I own. I mention what works well, what’s been held together with tape, and what the potential risks are.  

I document the things I almost forgot. Like if I had to dig through three Jira tickets and a Slack thread to figure something out, then that's a sign it needs to be written down. The fact that it was hard to find means someone will also face the same issue.
I revisit docs when I use them. Like if I use my own runbook and something is confusing or wrong. I fix it right then and not later. Because the next person who reads it won’t have context to know it’s wrong, they will just trust it.  

And I write like a human, I use “we” and “you.” When something is genuinely confusing, I say, “This is confusing, but here’s the deal”.  

I don’t pretend everything works perfectly when it doesn’t. Being honest in documentation helps build trust, even with someone you’ll never meet.

## The Uncomfortable Truth

A part that’s hard to say out loud is: most of us will eventually leave our jobs. That’s how careers work. Everything you build, every pipeline you configure, every weird shortcut you take to implement things will be inherited by someone else. And the quality of what you leave behind says something about you as a professional.  

I say this because I’ve been on the receiving end of both brilliant and terrible handoffs. When I say brilliant, they weren’t perfect systems. They were brilliant because someone took the time to write things down with the next person in mind. They left a trail that said, "I cared about whoever came after me."
