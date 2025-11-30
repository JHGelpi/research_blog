# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository is a personal research journal documenting weekly learning and exploration of the tech industry. It captures key insights, trends, and observations from a Director-level software engineering leader's perspective, serving as a knowledge base and learning log.

## Research Principles

### Approach
- **Curious and exploratory**: Investigate topics, ask questions, and synthesize learnings from multiple sources
- **Practical focus**: Ground research in real-world applications and team leadership challenges
- **Reflective**: Document not just what was learned, but why it matters and how it connects to broader patterns

### Research Focus Areas
- **AI**: Models, tooling, applications, industry adoption, ethical considerations
- **Software Engineering**: Practices, methodologies, team dynamics, developer experience
- **Data Analytics**: Tools, trends, visualization, business intelligence
- **Data Engineering**: Pipelines, infrastructure, data quality, orchestration
- **Cloud Computing & Architecture**: Kubernetes, cloud services, patterns, cost optimization

### Structure and Organization
- Research documents are stored in `research/` directory
- Naming convention: `YYYY-MM-DD-topic-area-research.md`
- Each document captures learning from multiple articles and sources
- Documents include reflections and synthesis of themes

## Sources
- Only use the sources listed in `sources.md` when looking for new articles.
- Articles should never be more than 60 days from current day.
- Always pull the most recent sources and never return more than 2 articles per source.  
- Make sure the article does not already exist in one of the existing research files.

## Research Workflow

### Conducting Research

**Research Activities:**
1. Search for recent articles, reports, and announcements in the focus areas
   - Articles should not be published more than 60 days in the past from curren date
   - Prioritize articles based on recency when considering publish date (pull from articles published in the past week before pulling an article published 60 days ago)
2. Identify 4-6 key articles that are relevant and timely
3. Do not repeat the same articles from previous research files
4. For each article, document:
   - Title and source
   - Key takeaways
   - Why it's relevant
   - Personal reflections and observations
5. Create a research document in `research/YYYY-MM-DD-topic-research.md`
6. Synthesize emerging themes across articles
7. DO NOT document what was learned and how insights connect.  Leave this section blank for me to fill out

**What Makes Good Research Material:**
- Published within the last 60 days (or recent major announcements)
- From reputable sources listed in `sources.md`
- Relevant to software engineering leadership and practice
- Offers data, case studies, or substantive insights (not just opinion pieces)
- Connects to multiple aspects of the research focus areas

### Documentation Process
1. Use the research template as the foundation
2. Fill in article summaries with key information
3. Add personal reflections for each article
4. Identify and document emerging themes
5. Capture additional notes and connections
6. Focus on learning and synthesis rather than publication

## File Commands

### Create Research Document
```bash
# Create research document for a new topic
cp research-template.md research/$(date +%Y-%m-%d)-topic-research.md
```

### View Research Documents
```bash
# List all research documents chronologically
ls -lt research/
```

## Research Guidelines

- Frame learning from a software engineering leadership perspective
- Connect technical topics to team and organizational impact
- Include specific examples (tools, companies, scenarios) when documenting learnings
- Synthesize information across multiple sources to identify patterns
- Reflect on how insights apply to leading a global team of ~80 dev managers, developers, and SDETs
- Document both technical understanding and leadership implications
