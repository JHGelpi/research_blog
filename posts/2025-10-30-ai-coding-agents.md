# When AI Stops Suggesting and Starts Shipping

*Published: October 30, 2025*

## Opening

We've gotten comfortable with AI that helps us write code. Copilot suggests the next line, Claude helps refactor a function, and we've learned to work with these tools as enhanced autocomplete. But something fundamental is shifting. Google just launched Jules, an AI coding agent that doesn't suggest code—it clones repos, runs tests, fixes bugs, and submits pull requests. All while you're in meetings.

This isn't about typing faster anymore. It's about delegation. And that changes everything about how we think about code review, quality control, and what it means to take ownership of our codebases.

## From Suggestions to Submissions

The leap from code completion to code completion is bigger than it sounds. When Copilot suggests a function, I'm still the author—I read it, understand it, accept or reject it. The code review happens at the moment of creation. When Jules submits a PR after working asynchronously in a cloud VM, I'm not the author anymore. I'm the reviewer of work I didn't witness being created.

Google's framing is telling: Jules handles "work you'd rather not do at all." That's different from "work you'd rather do faster." We're talking about fully delegating tasks—fixing flaky tests, updating dependencies, addressing tech debt. The kinds of things that live in your backlog for months because they're necessary but not urgent.

The appeal is obvious. Who wouldn't want an autonomous agent tackling those GitHub issues overnight? But this creates a new challenge: how do we review code when we don't have the context of creating it? How do we maintain the same quality bar when the "author" is a machine that doesn't attend our standups or understand our system's quirks?

## The Need for Structure

Here's where it gets practical. If we're going to delegate complete tasks to AI, we need frameworks to maintain quality and accountability. Fortunately, we don't have to invent this from scratch. Researchers have been applying the Plan-Do-Check-Act (PDCA) cycle to AI code generation, and their results are promising: fewer lines of code, better test coverage, more atomic commits.

The framework is straightforward:

**Plan**: Establish working agreements with your AI collaborator. What's the task scope? What are the quality expectations? What tests should pass? This is similar to how you'd brief a junior developer, except you're being explicit about things you might assume a human would know.

**Do**: Let the AI implement, but in small increments. Not "fix all the bugs," but "fix this specific bug with these acceptance criteria." The smaller and more atomic the task, the easier it is to review and validate.

**Check**: This is code review, but elevated. You're not just looking at syntax—you're verifying the AI understood the problem correctly, didn't introduce security issues, and made reasonable architectural choices. The human stays accountable for what gets merged.

**Act**: Adapt your approach based on what you learn. Did the AI misunderstand the requirements? Adjust your working agreements. Did it make surprising but good choices? Document that pattern.

What strikes me about this framework is that it doesn't fight the AI revolution—it creates intervention points. You're not trying to prevent AI from doing the work; you're ensuring human accountability at each phase. The researchers saw better outcomes not because they added bureaucracy, but because they added clarity.

## Asking the Right Questions First

Before we get too excited about autonomous coding agents, though, we should step back and ask whether we're solving the right problems. There's a useful architectural framework that applies here: Is this worth building? Can it perform at scale? Is it maintainable?

The most expensive mistake in software isn't building something poorly—it's building something that shouldn't be built at all. This applies to adopting AI agents too. Just because Jules can handle your flaky tests doesn't mean delegating that work is the right move for your team right now.

Maybe your flaky tests are symptoms of deeper architectural issues that need human investigation. Maybe your team would benefit more from pairing with AI on these problems rather than delegating them entirely. Maybe you don't yet have the code review practices in place to effectively oversee autonomous agents.

The point isn't to resist these tools—they're clearly powerful. The point is to start with your actual constraints and needs, not with the technology's capabilities. Ask: What problem are we trying to solve? Will autonomous AI actually solve it better than our current approach? What does our review process need to look like to maintain quality?

This is where I see teams rushing ahead. The technology is fascinating, and the productivity promises are compelling. But adding autonomous agents without structured practices is like adding more developers without establishing code review standards. You might ship faster, but not necessarily better.

## What This Means for Us

As AI agents become more capable and accessible, we need to level up our practices around them. Here's what I think that looks like practically:

**Establish explicit working agreements**. When you delegate to an AI agent, be as specific as you'd be with a new team member. What's in scope? What's the definition of done? What quality gates must pass? The clearer your framing, the better the results.

**Adapt your code review process**. Reviewing AI-generated PRs requires different attention than human ones. You can't ask "what were you thinking here?"—so you need better automated checks, clearer acceptance criteria, and more thorough testing. If your CI/CD pipeline isn't robust enough to catch AI mistakes, strengthen it before delegating more.

**Start small and measure**. Don't delegate critical features to autonomous agents right away. Start with low-risk maintenance tasks. Track not just completion speed but quality metrics: bugs introduced, rework required, test coverage. Let your practices mature alongside your AI adoption.

**Maintain human accountability**. The human who delegates to AI and reviews the result owns the code that ships. This isn't negotiable. If you're not prepared to defend every line in an AI-generated PR as if you wrote it yourself, don't merge it.

The shift from AI assistants to AI agents is coming fast. The teams that will benefit most aren't the ones who adopt earliest—they're the ones who adopt thoughtfully, with clear frameworks for quality and accountability. That's the challenge and opportunity ahead of us.

## Resources

- [Agentic AI Coding with Google Jules](https://www.kdnuggets.com/agentic-ai-coding-with-google-jules) - Overview of Google's autonomous coding agent
- [A Plan-Do-Check-Act Framework for AI Code Generation](https://www.infoq.com/articles/pdca-ai-code-generation/) - Structured approach to working with AI coding tools
- [Three Questions That Help You Build a Better Software Architecture](https://www.infoq.com/articles/three-questions-better-architecture/) - Framework for evaluating technical decisions
- [Celebrating Five Years of Backstage](https://engineering.atspotify.com/2025/4/celebrating-five-years-of-backstage) - Lessons on platform thinking and developer experience

---

*Word count: 1,164 words*
