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
- Research materials are stored in `research/` directory with matching dates
- Each post should include a **Resources** section at the end with curated links and references

## Sources
- Only use the sources listed in `sources.md` when looking for new articles.
- Articles should never be more than 60 days from current day.
- Always pull the most recent sources and never return more than 2 articles per source.  
- Make sure the article does not already exist in one of the existing research files.

## Working with the Author

### Collaboration Style
- **Co-author together**: This is collaborative writing, not just editing or research assistance
- Suggest content, structure, and flow as you work
- Ask clarifying questions to understand the author's perspective and intent
- Offer alternative framings or angles when helpful

### Research Phase (Before Writing)

Each blog post begins with research and curation. Help identify and summarize:

**Focus Areas:**
- **AI**: Models, tooling, applications, industry adoption, ethical considerations
- **Software Engineering**: Practices, methodologies, team dynamics, developer experience
- **Data Analytics**: Tools, trends, visualization, business intelligence
- **Data Engineering**: Pipelines, infrastructure, data quality, orchestration
- **Cloud Computing & Architecture**: Kubernetes, cloud services, patterns, cost optimization

**Research Activities:**
1. Search for recent articles, reports, and announcements in the focus areas
2. Identify 2-3 key articles that are relevant and timely
3. Do not repeat the same articles from previous research files
4. Summarize each article with:
   - Title and source
   - Key takeaways
   - Why it's relevant to the target audience
   - Potential angles for blog exploration
5. Create a research document in `research/YYYY-MM-DD-topic-research.md`
6. Discuss with the author which themes or angles are most interesting

**What Makes Good Research Material:**
- Published within the last 1-2 weeks (or recent major announcements)
- From reputable sources (industry publications, major tech companies, research institutions)
- Relevant to practitioners' day-to-day work or strategic decisions
- Offers data, case studies, or substantive insights (not just opinion pieces)
- Connects to multiple aspects of the author's focus areas

### Writing Process
1. Review the research document to understand key themes and articles
2. Discuss with the author which angle or question to explore
3. Collaboratively draft sections, maintaining the curious explorer voice
4. Keep the target audience front of mind: what will practitioners find useful?
5. Weave in data and examples from the research materials
6. Include information gleaned from the `Reflections` section in the research.md file
7. Ensure posts stay within the 800-1200 word target
8. Add a Resources section with curated links from the research

### Post Structure
A typical post should include:
- **Opening**: Hook that establishes the question or topic being explored
- **Body**: 2-4 main sections that investigate the topic with data and examples
- **Practical takeaway**: What should readers do with this information?
- **Resources**: Curated list of relevant links and sources

## File Commands

### Create Research Document
```bash
# Create research document for a new topic
cp research-template.md research/$(date +%Y-%m-%d)-topic-research.md
```

### Create New Post
```bash
# Use current date and topic slug (matching research date)
cp post-template.md posts/$(date +%Y-%m-%d)-topic-slug.md
```

### Preview Posts
```bash
# List all posts chronologically
ls -lt posts/

# View research and posts together
ls -lt research/ posts/
```

## Writing Guidelines

- Target audience is the software teams I lead.  This is a global team of ~80 dev managers, developers, and SDETs
- Use "we" when exploring ideas together with readers
- Lead with questions that practitioners are already asking
- Balance strategic insights with tactical applicability
- Include specific examples (tools, companies, scenarios) when possible
- Avoid jargon unless it's standard in the practitioner's vocabulary
- Link to primary sources in the Resources section rather than inline
- Each post should leave readers with something they can think about or try
