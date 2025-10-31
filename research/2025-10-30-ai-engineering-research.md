# Research: AI Coding Agents and Engineering Practice

*Date: 2025-10-30*

## Research Focus

This week's research explores the intersection of AI, software engineering practices, and developer platforms. The focus areas include:
- **AI Coding Tools**: Evolution from assistants to autonomous agents
- **Software Engineering**: Architecture decisions, testing frameworks, and development practices
- **Developer Platforms**: Internal developer portals and open-source sustainability
- **Cloud/Security**: Protocol vulnerabilities and observability

## Key Articles & Sources

### Article 1: Agentic AI Coding with Google Jules
- **Source**: KDNuggets
- **Link**: https://www.kdnuggets.com/agentic-ai-coding-with-google-jules
- **Published**: October 27, 2025
- **Key Takeaways**:
  - Google Jules is a fully asynchronous AI coding agent that works independently in cloud VMs
  - Unlike Copilot (code suggestions), Jules handles complete workflows: clone repos, edit code, run tests, create PRs
  - Uses Gemini 2.5 Pro and integrates natively with GitHub
  - Operates autonomously to "finish work you'd rather not do at all" - not just code faster
  - Available in Free, Pro, and Ultra tiers with varying concurrency limits
- **Relevance**: This represents a fundamental shift from AI code completion to AI task completion. For engineering teams, it raises questions about delegation boundaries, code review processes, and how we supervise autonomous systems working on our codebases.
- **Potential Angles**:
  - How do we think about code review when AI submits entire PRs?
  - What maintenance tasks are safe to fully delegate vs. require human oversight?
  - How does asynchronous AI work change team workflows and collaboration patterns?
- **Reflections**: This feels like crossing a threshold. We've gone from "AI helps me write this function" to "AI, please fix these bugs while I'm in meetings." The transparency of Jules showing its reasoning is crucial - but I wonder how teams will handle the cultural shift of reviewing AI-generated PRs the same way we review human ones.

### Article 2: A Plan-Do-Check-Act Framework for AI Code Generation
- **Source**: InfoQ
- **Link**: https://www.infoq.com/articles/pdca-ai-code-generation/
- **Published**: October 20, 2025
- **Key Takeaways**:
  - Applies traditional PDCA quality framework to human-AI collaboration in coding
  - Emphasizes working agreements, test-driven development, and atomic increments
  - Creates intervention points to guide AI and maintain human accountability
  - Experimental results show fewer lines of code, better test coverage, more atomic commits
  - Recommends adapting framework formality to task complexity
- **Relevance**: As teams adopt AI coding tools, they need structured approaches to maintain code quality. This provides a practical methodology that engineering managers can implement immediately.
- **Potential Angles**:
  - How do we establish "working agreements" with AI pair programmers?
  - What does TDD look like when AI is writing the implementation?
  - How do we balance structure with speed when using AI tools?
- **Reflections**: The emphasis on human accountability resonates strongly. It's easy to let AI "take the wheel," but maintaining oversight through structured frameworks seems essential. The reduction in code duplication and better test coverage in their experiments is compelling evidence this approach works.

### Article 3: Three Questions That Help You Build a Better Software Architecture
- **Source**: InfoQ
- **Link**: https://www.infoq.com/articles/three-questions-better-architecture/
- **Published**: October 21, 2025
- **Key Takeaways**:
  - Three questions in priority order: (1) Is the idea worth building? (2) Can it perform/scale? (3) Is it maintainable?
  - Most costly mistake: building something not worth building
  - Second most costly: building something that can't scale to meet business needs
  - Emphasizes empirical testing via MVP over upfront architectural perfection
  - "The art in software architecting is deciding what decisions need to be made now and which ones can wait"
- **Relevance**: For engineering leaders making architectural decisions, this provides a clear prioritization framework. It's particularly relevant for teams evaluating whether to adopt new AI tools or platforms - start with business value, not technical fascination.
- **Potential Angles**:
  - How do these questions apply to AI adoption decisions?
  - What's the right balance between MVP speed and architectural foresight?
  - How do we measure "worth building" for internal tools vs. customer-facing products?
- **Reflections**: This cuts through so much architectural gold-plating I've seen. The ordering matters - we spend so much time debating scalability and maintainability for products that haven't proven they're worth building. The MVP-first mindset here feels especially relevant when teams are rushing to add AI features.

### Article 4: Defending QUIC from Acknowledgement-Based DDoS Attacks
- **Source**: Cloudflare Blog
- **Link**: https://blog.cloudflare.com/defending-quic-from-acknowledgement-based-ddos-attacks
- **Published**: October 29, 2025
- **Key Takeaways**:
  - Two CVEs discovered in Cloudflare's QUIC implementation allowing ACK-based amplification attacks
  - Clients could send ACKs for packets never sent, or preemptively ACK to inflate server send rates
  - Discovered via responsible disclosure through bug bounty program
  - Fixed with ACK range validation and dynamic CWND-aware skip frequency
  - No evidence of exploitation, but potential for significant DDoS impact
- **Relevance**: Demonstrates the importance of protocol-level validation, security research, and defensive design. For teams building network services or adopting new protocols, this highlights the subtle vulnerabilities that can exist.
- **Potential Angles**:
  - What can application developers learn from protocol-level security research?
  - How do we think about validating "trusted" signals from clients?
  - What's the role of bug bounties in modern security practices?
- **Reflections**: The sophistication of this attack is humbling. It's a reminder that even well-designed protocols can have subtle vulnerabilities. The fact that this was found through responsible disclosure is encouraging - and the transparency in Cloudflare's writeup is exemplary.

### Article 5: Advancing Claude for Financial Services
- **Source**: Anthropic
- **Link**: https://www.anthropic.com/news/advancing-claude-for-financial-services
- **Published**: October 27, 2025
- **Key Takeaways**:
  - New Excel add-in allows Claude to read, analyze, modify, and create workbooks
  - New connectors for real-time market data (Aiera, LSEG, Moody's, etc.)
  - Pre-built agent skills: DCF models, comp analysis, due diligence, earnings analysis
  - Topped Finance Agent benchmark at 55.3% accuracy
  - Adopted by major institutions: Citi, RBC, Coinbase, Visa
- **Relevance**: While focused on financial services, this demonstrates AI agents moving beyond generic tasks to domain-specific workflows. The Excel integration is particularly interesting for engineering teams that live in spreadsheets for capacity planning, metrics tracking, etc.
- **Potential Angles**:
  - What does vertical AI specialization mean for other industries?
  - How do teams evaluate when to use general vs. specialized AI tools?
  - What's the future of spreadsheet-based workflows with AI integration?
- **Reflections**: The 55.3% accuracy on the Finance Agent benchmark caught my eye - that's simultaneously impressive and concerning. It's good enough to be useful, but shows we're not at "trust it completely" territory yet. The domain-specific skills approach feels like the right evolution path for AI tools.

### Article 6: Celebrating Five Years of Backstage
- **Source**: Spotify Engineering Blog
- **Link**: https://engineering.atspotify.com/2025/4/celebrating-five-years-of-backstage
- **Published**: April 23, 2025
- **Key Takeaways**:
  - Backstage evolved from internal Spotify tool → open source project → enterprise product
  - Adopted by 3,000+ companies; used by 700 Spotify R&D squads internally
  - Addresses developer challenges: context switching, fragmentation, cognitive load, silos
  - New Spotify Portal for Backstage offers SaaS solution with no-code plugin management
  - "Investing in the community has been an investment in ourselves" - virtuous cycle
- **Relevance**: This is a masterclass in open-source strategy and platform thinking. For engineering leaders considering internal developer platforms, it shows both the potential impact and the evolution path from internal tool to industry standard.
- **Potential Angles**:
  - When should teams build internal platforms vs. adopt existing ones?
  - How do you balance internal needs with community requirements in OSS?
  - What does the IDPs category tell us about developer experience priorities?
- **Reflections**: The 3,000 company adoption number is staggering. This validates that developer experience and reducing cognitive load are universal problems worth solving. The path from internal tool to open source to commercial product is becoming a playbook - worth studying for teams with promising internal tools.

## Emerging Themes

After reviewing these articles, several interconnected themes emerge:

- **Theme 1: AI Evolution - From Assistants to Autonomous Agents**
  - Supported by: Google Jules (Article 1), Claude Financial Services (Article 5), PDCA Framework (Article 2)
  - Pattern: AI tools are moving from suggesting code snippets to completing entire tasks autonomously. This requires new frameworks for oversight, quality control, and team collaboration.

- **Theme 2: The Primacy of Business Value Over Technical Sophistication**
  - Supported by: Three Architecture Questions (Article 3), Backstage Evolution (Article 6)
  - Pattern: The most successful technical decisions start with business value and user problems, not technical capabilities. MVPs, empirical testing, and iterative development consistently outperform upfront perfection.

- **Theme 3: Developer Experience as Competitive Advantage**
  - Supported by: Backstage (Article 6), Jules (Article 1), PDCA Framework (Article 2)
  - Pattern: Companies are investing heavily in developer productivity - whether through internal platforms, AI coding agents, or structured methodologies. Reducing cognitive load and context switching is becoming a strategic priority.

- **Theme 4: Security and Validation in Complex Systems**
  - Supported by: QUIC Vulnerabilities (Article 4), PDCA Framework (Article 2)
  - Pattern: As systems become more complex (new protocols, AI-generated code), validation and verification become critical. Don't trust signals just because they seem legitimate; design systems defensively.

## Potential Blog Post Ideas

### Option 1: "When AI Commits Code: Reviewing PRs from Autonomous Agents"
- **Central Question**: As AI agents like Google Jules start submitting complete pull requests, how should engineering teams adapt their code review practices?
- **Supporting Articles**: Jules (1), PDCA Framework (2), Three Architecture Questions (3)
- **Audience Hook**: Most teams are already using Copilot or similar tools. The next wave - autonomous agents - requires rethinking how we review, test, and take ownership of code. What does it mean when a bot is the author?
- **Estimated Scope**: Yes, 800-1200 words. Could cover: the shift from snippets to PRs, code review checklist adaptations, the importance of working agreements, and maintaining human accountability.

### Option 2: "The Three Questions Every Technical Decision Should Answer"
- **Central Question**: How can engineering leaders cut through complexity and make better architectural and tool adoption decisions?
- **Supporting Articles**: Three Architecture Questions (3), Backstage (6), Claude Financial Services (5)
- **Audience Hook**: Engineering teams face constant decisions: Should we adopt this AI tool? Build this platform? Refactor this system? A simple framework can prevent costly mistakes.
- **Estimated Scope**: Yes, 800-1200 words. Could apply the three questions (worth building? performance? maintainability?) to real scenarios like AI adoption, platform engineering, and technical debt decisions.

### Option 3: "From Internal Tool to Industry Standard: What Backstage Teaches Us About Platform Thinking"
- **Central Question**: What can we learn from Backstage's journey about building developer platforms and making open-source work?
- **Supporting Articles**: Backstage (6), Jules (1), PDCA (2)
- **Audience Hook**: Most engineering organizations have internal tools that could be more widely useful. Understanding the path from internal → OSS → commercial product helps teams make better platform decisions.
- **Estimated Scope**: Yes, 800-1200 words. Could explore platform evaluation criteria, the "build vs. buy vs. contribute" decision tree, and lessons about developer experience investment.

### Option 4: "Structured Chaos: How to Work Effectively with AI Coding Tools"
- **Central Question**: What frameworks and practices help teams get the best results from AI coding assistants while maintaining code quality?
- **Supporting Articles**: PDCA Framework (2), Jules (1), Three Architecture Questions (3)
- **Audience Hook**: Everyone's using AI for coding now, but most teams lack structured approaches. Random productivity gains vs. systematic improvement.
- **Estimated Scope**: Yes, 800-1200 words. Could cover working agreements, TDD with AI, intervention points, measuring effectiveness, and adapting practices to task complexity.

## Additional Notes

**Date Consideration**: Today is October 30, 2025. All articles except Spotify's Backstage article (April 23) are from the past 10 days, making them extremely timely. The Backstage piece, while a few months older, remains highly relevant given the ongoing discussion around developer platforms.

**Strongest Narrative Thread**: The evolution of AI coding tools (Theme 1) combined with the need for structured practices (Theme 2 & 4) feels like the most urgent and actionable topic for the target audience. Teams are actively grappling with these tools right now.

**Cross-Cutting Insight**: There's a fascinating tension across all these articles between automation/efficiency and control/quality. Whether it's AI agents, open-source platforms, or architectural decisions, the winning approach seems to be: automate aggressively, but maintain clear human oversight and validation mechanisms.

**Potential Reader Actions**:
- Evaluate current AI coding tool usage against the PDCA framework
- Apply the three architecture questions to pending technical decisions
- Assess whether an internal developer platform makes sense for their org
- Review code review processes for AI-generated code readiness
