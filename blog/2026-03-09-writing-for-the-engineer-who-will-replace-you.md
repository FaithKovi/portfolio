---
slug: writing-for-the-engineer-who-will-replace-you
title: Writing for the Engineer Who Will Replace You
authors: Faith Wachukwu
tags: [devops, docs]
---

<img src="/img/blog/cover-writing-engineer.jpg" alt="An engineer working in the dark." />

You’re staring at internal documentation at 11 PM, trying to figure out why a deployment pipeline is failing, but it's incomplete. It looks like whoever wrote it stopped midway, like they got pulled into a meeting and never came back. Well, what matters now is that you’re stuck. 

As someone who has been in this situation, you should think differently when writing documentation about who you’re writing for and how they would feel with incomplete docs. In this post, you’ll learn how to approach documentation as an engineer.
<!-- truncate -->

## You're Not Writing for Your Team

When starting a new role or in your current role, you might think your colleagues might not need your docs. And yes, that’s right, they might not. I mean, they were in the same Slack threads and meetings. They were there when someone made a questionable decision on the infrastructure on a Friday.  

Your real audience is the person who is employed 18 months later, handed the workload and is told, “You own this now.” With no context, no Slack history, and no memory of what has happened previously that shaped how the systems work today. All they have is what was left behind.

## The "Why" Matters

Initially, at the start of my career in DevOps, I would document things I did by writing things clearly. Well, it became useless six months down the line when the steps had changed. I didn’t go back to update the document.  

Knowing the reason why decisions were made is important in documentation. Beyond writing out the steps of actions taken, you should know the context behind decisions to understand the why, instead of following what you don’t understand. This could be as simple as two sentences, not like a full-blown write-up, and it can save someone the time and financial cost due to a mistake.

## Write for the 2 AM Version of That Person

When you’re on call, you know there is a difference between reading documentation to find out how a tool works versus reading it when there is downtime, and you are getting pinged nonstop. At that moment, you’re a different reader. One who is not interested in how it was written, you just want answers fast. You’d want to know:

- what does this service depend on?
- what breaks when it goes down?
- how do I restart it without making it worse?

So when you’re structuring anything operational, keep that person in mind. Make sure you use short sentences, clear headings, and remove what would create doubt in their minds. If there’s a command they’ll need to run, include it, make it visible and easy to find and not buried deep into a paragraph section.

## Treat Documentation Like a Product

Treating your documentation as a product, not a side work, is a shift you should make. Think about it this way: if the person replacing you can’t understand the system from your documentation, then you haven’t finished working on that documentation.  

When you see documentation as a product that has users, a purpose, and a quality standard to follow, you start making different choices. You’ll think about the structure, what is important to add or leave out, and how to maintain it.


<div style={{ textAlign: 'center' }}>
  <img src="/img/blog/writingEngineer2.png" alt="A simple flowchart showing Documentation-Users-Feedback-Improvements." />

  *A simple workflow diagram of documentation lifecycle*
</div>

## What To Do Differently

With the mindset of seeing documentation as a product, you’d document the state of things for every system you own. Mention what works well, what’s been held together by strings, and if there are potential risks in the systems.  

If you had to dig through 3 Jira tickets and a Slack thread to figure something out that is needed, then it’s a sign you should document it. The fact that it was hard to find means someone will face the same issue. It’s easier to revisit docs than to dig through Slack threads.  

In cases where there were recent additions or something was confusing in a runbook you own, correct it right then and not later. That’s because the next person who’ll read it won’t have context to know there is a problem. They’ll trust it blindly.  

Additionally, write like a human. Use “we” and “you” occasionally. When something is genuinely confusing, you’d say, “This is confusing, but here’s the deal”. Don’t pretend everything works perfectly when it doesn’t. Writing honestly in documentation helps to build trust, even with someone you’ll never meet.

## Conclusion

At the end, everything you’ll build, configure, or every shortcut you’ll take to implement things will be inherited by someone else. The quality of the documentation you leave behind says something about you as a professional.  

Leave brilliant documentation handoffs to the next person. Brilliant, not in the sense of perfect documentation, but documentation that is written with the next person in mind. Let it be written clearly with the necessary information. This leaves a trail that says, “I cared about whoever came after me.”  
