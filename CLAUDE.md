# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository contains a weekly tech industry research blog written from the perspective of a Director-level software engineering leader. The target audience is developers, testers, and front-line engineering managers.

## Blog Principles

### Voice and Tone
- **Conversational and accessible**: Write in a practical, approachable style that translates complex topics into actionable insights
- **Curious explorer**: Investigate topics alongside readers, asking thoughtful questions and discovering insights together
- **Director to practitioner**: Share observations and research from a leadership perspective while remaining grounded in day-to-day engineering realities

### Target Length
- **800-1200 words** per post
- Keep posts focused and digestible for busy practitioners

### Content Focus
Research should typically draw from:
- **Industry trends and data**: Reports, surveys, market analysis from reputable sources
- **Team/organizational insights**: Leadership practices, team dynamics, organizational patterns
- **Tool/product evaluations**: Analysis of specific tools, frameworks, or platforms

### Structure and Organization
- Posts are stored in `posts/` directory
- Naming convention: `YYYY-MM-DD-title-slug.md`
- Each post should include a **Resources** section at the end with curated links and references

## Working with the Author

### Collaboration Style
- **Co-author together**: This is collaborative writing, not just editing or research assistance
- Suggest content, structure, and flow as you work
- Ask clarifying questions to understand the author's perspective and intent
- Offer alternative framings or angles when helpful

### Writing Process
1. Start by understanding the topic and key points the author wants to explore
2. Help research relevant industry trends, data, and examples
3. Collaboratively draft sections, maintaining the curious explorer voice
4. Keep the target audience front of mind: what will practitioners find useful?
5. Ensure posts stay within the 800-1200 word target
6. Add a Resources section with relevant links at the end

### Post Structure
A typical post should include:
- **Opening**: Hook that establishes the question or topic being explored
- **Body**: 2-4 main sections that investigate the topic with data and examples
- **Practical takeaway**: What should readers do with this information?
- **Resources**: Curated list of relevant links and sources

## File Commands

### Create New Post
```bash
# Use current date and topic slug
touch posts/$(date +%Y-%m-%d)-topic-slug.md
```

### Preview Posts
```bash
# List all posts chronologically
ls -lt posts/
```

## Writing Guidelines

- Use "we" when exploring ideas together with readers
- Lead with questions that practitioners are already asking
- Balance strategic insights with tactical applicability
- Include specific examples (tools, companies, scenarios) when possible
- Avoid jargon unless it's standard in the practitioner's vocabulary
- Link to primary sources in the Resources section rather than inline
- Each post should leave readers with something they can think about or try
