# Research: Tech Trends November 2025

*Date: 2025-11-04*

## Research Focus

This week's research explores several interconnected trends across AI agents, developer tooling, security infrastructure, and architecture patterns. The focus areas include:
- **AI Agents at Scale**: How companies are deploying specialized AI agents for production workflows
- **Developer Tools & Practices**: Feature flags, experimentation platforms, and cloud-based development
- **Security & Infrastructure**: Post-quantum cryptography adoption and readiness
- **Software Architecture**: Emerging patterns and industry priorities for 2025-2026

## Key Articles & Sources

### Article 1: How AI Agents are Evolving Shopify's Product Taxonomy at Scale
- **Source**: Shopify Engineering Blog
- **Link**: https://shopify.engineering/product-taxonomy-at-scale
- **Published**: October 9, 2025
- **Key Takeaways**:
  - Shopify manages 10,000+ product categories and 2,000+ attributes serving 875 million annual shoppers
  - Built a multi-agent system with specialized roles: Structural Analysis, Product-Driven Analysis, Intelligent Synthesis, Equivalence Detection, and Domain-Specific Judges
  - Key innovation: equivalence detection identifies when different taxonomy approaches represent identical product sets (e.g., "Golf Shoes" category vs. "Athletic Shoes" + "Activity Type = Golf")
  - Results: Moved from weeks of manual analysis to parallel evaluation of hundreds of categories with 93% confidence scores
  - Human experts remain central—AI handles scale while experts make strategic decisions
- **Relevance**: This is a masterclass in practical AI agent deployment. Rather than replacing humans or creating a generic agent, Shopify built specialized agents for different analytical tasks. For engineering teams considering AI adoption, this demonstrates how to augment expert capabilities at scale.
- **Potential Angles**:
  - What makes a good candidate for AI agent automation vs. human work?
  - How do you design multi-agent systems that complement rather than replace expertise?
  - What quality assurance mechanisms ensure AI recommendations are trustworthy?
- **Reflections**: The "augment rather than replace" philosophy is compelling. The 93% confidence score on the MagSafe attribute shows these systems can make nuanced domain-specific decisions. The multi-agent approach—where different agents tackle different problem dimensions—feels like a reusable pattern for other complex classification or analysis tasks.

### Article 2: Claude Code on the Web
- **Source**: Anthropic
- **Link**: https://claude.com/blog/claude-code-on-the-web
- **Published**: October 20, 2025
- **Key Takeaways**:
  - Web-based version of Claude Code (beta/research preview) runs coding tasks on Anthropic-managed cloud infrastructure
  - Parallel task execution: initiate multiple coding sessions simultaneously across different repositories
  - Real-time progress tracking with mid-execution course correction
  - Automated pull request creation and change summaries
  - Available on iOS for mobile coding during early testing
  - Security: Git proxy, network controls, isolated sandbox environments
- **Relevance**: This represents the evolution from local AI coding assistants to cloud-based autonomous coding agents. For teams, this shifts the question from "how do we use AI to write code faster?" to "which tasks can we fully delegate to AI?" The parallel execution capability is particularly interesting for tackling backlogs of routine work.
- **Potential Angles**:
  - What categories of work benefit most from cloud-based autonomous agents vs. local assistants?
  - How do security and compliance requirements affect cloud-based coding tool adoption?
  - What does delegation-focused development mean for code review processes?
- **Reflections**: The parallel execution across multiple repos is the killer feature here—not just coding faster on one task, but handling multiple tasks simultaneously. This is particularly powerful for bug fixes and maintenance work. The iOS availability is intriguing; checking on autonomous coding tasks from a phone during meetings could change how we context-switch.

### Article 3: State of the Post-Quantum Internet in 2025
- **Source**: Cloudflare Blog
- **Link**: https://blog.cloudflare.com/pq-2025/
- **Published**: October 28, 2025
- **Key Takeaways**:
  - Major milestone: 50% of human-initiated traffic with Cloudflare now uses post-quantum encryption
  - Client support: 39% of top 100k domains support post-quantum key agreement
  - Origin support lags: only 3.7% of origins support it
  - Expert surveys: >50% probability quantum computers break RSA-2048 within 15 years
  - Recent algorithmic breakthroughs reduced theoretical requirements from 20M to <1M qubits, potentially accelerating "Q-day" by 7 years
  - Two-phase migration: Phase 1 (key agreement) nearly complete; Phase 2 (signatures) challenging due to 15kB certificate overhead
  - First production post-quantum certificates expected 2026; broad availability unlikely before 2027
- **Relevance**: This is not a theoretical concern—half of Cloudflare's traffic already uses post-quantum encryption. For engineering teams, the harvest-now-decrypt-later threat is real. The 3.7% origin support number is particularly concerning, showing most backend infrastructure remains vulnerable.
- **Potential Angles**:
  - What should engineering teams do today to prepare for post-quantum readiness?
  - How do you balance security investment in current threats vs. future cryptographic breaks?
  - What's the implementation complexity of post-quantum adoption?
- **Reflections**: The acceleration of Q-day estimates (from 20M to <1M qubits) is sobering. The fact that key agreement is "solved" but signature migration remains challenging due to certificate size shows how protocol-level constraints impact security adoption. The 2027 timeline for broad availability means teams should be planning infrastructure audits now.

### Article 4: The Pragmatic Engineer 2025 Survey - Tech Stack Part 3
- **Source**: Pragmatic Engineer Newsletter
- **Link**: https://newsletter.pragmaticengineer.com/p/the-pragmatic-engineer-2025-survey-part-3
- **Published**: October 14, 2025
- **Key Takeaways**:
  - LaunchDarkly dominates feature flag management with most mentions
  - Feature flags are the #1 most likely tool to be built in-house
  - Companies cite integration with internal data systems as primary reason for custom builds
  - Key vendors: Amplitude, Mixpanel, PostHog (open-source), Unleash (self-hosted), Statsig (recently acquired by OpenAI for $1B)
  - Cost at scale drives build vs. buy decisions for feature flagging infrastructure
- **Relevance**: Feature flags are critical infrastructure for modern deployment practices, yet they're the tool teams most frequently build themselves. This signals a gap between vendor offerings and actual integration needs. The $1B Statsig acquisition by OpenAI suggests feature flagging is becoming more strategic as AI features require sophisticated rollout controls.
- **Potential Angles**:
  - When should teams build feature flag infrastructure vs. adopt vendor solutions?
  - What makes feature flags uniquely suited for in-house development?
  - How do AI features change feature flag requirements?
- **Reflections**: The fact that feature flags top the "build in-house" list is fascinating. It suggests existing vendor solutions don't adequately solve integration problems, or that the cost at scale makes custom builds economically rational. The OpenAI acquisition of Statsig hints that controlled AI feature rollouts might be driving new requirements that existing tools don't address.

### Article 5: InfoQ Software Architecture and Design Trends Report - 2025
- **Source**: InfoQ
- **Link**: https://www.infoq.com/articles/architecture-trends-2025/
- **Published**: April 28, 2025
- **Key Takeaways**:
  - AI-focused innovations: Agentic AI (Innovator), Small Language Models (Innovator), RAG (Early Adopter)
  - Sustainability: Green Software (Innovator) focusing on carbon efficiency through strategic deployment
  - Socio-Technical Architecture (Early Adopter): Designing systems around the people building them
  - AI-Assisted Development (Early Majority): Replacing low-code, but raising quality concerns
  - Large Language Models have reached "Late Majority" status—focus now on specialized applications
  - Shift from centralized architectural gatekeepers to distributed team-based decision-making
- **Relevance**: This shows where architectural thinking is heading. The maturation of LLMs into late majority means the conversation is shifting from "should we use AI?" to "how do we architect for AI capabilities?" The emphasis on socio-technical architecture reflects growing recognition that Conway's Law matters more than technical patterns.
- **Potential Angles**:
  - How should teams prepare data architectures for RAG implementations?
  - What quality gates are needed for AI-assisted code in architectural contexts?
  - How do you balance environmental impact with performance requirements?
- **Reflections**: The "socio-technical architecture" trend resonates strongly—we've spent decades optimizing technical patterns while underinvesting in how team structure affects system design. The move from centralized architectural gatekeepers to facilitated team decisions feels overdue. The Late Majority classification for LLMs means the novelty phase is over; now it's about operational excellence.

### Article 6: QCon London 2026 Track Announcement
- **Source**: InfoQ
- **Link**: https://www.infoq.com/news/2025/11/qcon-london-2026-tracks/
- **Published**: November 3, 2025
- **Key Takeaways**:
  - QCon London 2026 (March 16-19) features 15 tracks in four thematic areas
  - Major themes: AI Adoption & Organizational Impact, Scalability & Resilience, Leadership & Uncertainty, Technical Priorities
  - Multiple AI-focused tracks: AI Engineering, Architecture in the Age of AI, Organizations in Flux (AI's impact on teams)
  - Emphasis on resilience: Architectures You've Always Wondered About, Debugging Distributed Systems, Performance Optimization
  - Staff+ engineering track focusing on agency and long-term career development
  - Reflects industry grappling with: "Is our architecture ready for AI features?" and system reliability amid rapid change
- **Relevance**: Conference tracks are a useful proxy for industry priorities. The fact that three tracks explicitly focus on AI integration signals this is the dominant architectural concern for 2025-2026. The emphasis on resilience and debugging distributed systems suggests teams are feeling the pain of increased system complexity.
- **Potential Angles**:
  - What does "Architecture in the Age of AI" mean practically?
  - How do teams balance AI innovation with operational reliability?
  - What makes resilience more important now than in previous years?
- **Reflections**: The "Organizations in Flux" track is particularly interesting—acknowledging that AI isn't just a technical challenge but an organizational one. The Staff+ agency track suggests senior engineers are feeling squeezed between innovation pressure and operational reality. The debugging distributed systems focus implies many teams have built complexity they can't fully troubleshoot.

## Emerging Themes

After reviewing these articles, several interconnected themes emerge:

### Theme 1: From General AI to Specialized AI Agents
- **Supported by**: Shopify Product Taxonomy (Article 1), Claude Code (Article 2), InfoQ Architecture Trends (Article 5), QCon tracks (Article 6)
- **Pattern**: The industry is moving beyond "use AI for coding" to "deploy specialized AI agents for specific tasks." Shopify's multi-agent taxonomy system and Claude Code's task delegation represent this shift. Success requires augmentation rather than replacement, with clear quality assurance mechanisms and human oversight for strategic decisions.

### Theme 2: Security Infrastructure Requires Urgent Attention
- **Supported by**: Post-Quantum Cryptography (Article 3)
- **Pattern**: With 50% of traffic already using post-quantum encryption but only 3.7% of origins supporting it, there's a dangerous gap. The acceleration of Q-day predictions from algorithmic breakthroughs means this isn't a distant threat. Teams need cryptographic inventories and infrastructure automation now, not in 2027.

### Theme 3: Build vs. Buy Decisions Are Shifting
- **Supported by**: Feature Flags Survey (Article 4), Shopify Taxonomy (Article 1), Claude Code (Article 2)
- **Pattern**: Teams are building feature flag infrastructure in-house (the #1 custom-built tool), yet adopting cloud-based AI coding agents. The decision calculus seems to be: build when integration with internal systems is critical; buy when specialized expertise provides clear advantage. The $1B OpenAI acquisition of Statsig suggests strategic tools are worth controlling.

### Theme 4: Architecture Must Account for Socio-Technical Reality
- **Supported by**: InfoQ Architecture Trends (Article 5), QCon tracks (Article 6)
- **Pattern**: The shift from centralized architectural governance to distributed team-based decisions reflects growing recognition that team structure drives system design. The "Organizations in Flux" track at QCon and the emphasis on socio-technical architecture show this is becoming mainstream thinking, not just academic theory.

### Theme 5: Maturation Requires Operational Excellence, Not Just Innovation
- **Supported by**: InfoQ Architecture Trends (Article 5), QCon tracks (Article 6), Post-Quantum Crypto (Article 3)
- **Pattern**: LLMs reaching "Late Majority" status, multiple QCon tracks on resilience and debugging, and the urgency of post-quantum migration all point to the same reality: the innovation phase is giving way to operational excellence. Teams must maintain reliability while integrating new capabilities.

## Potential Blog Post Ideas

### Option 1: "The Multi-Agent Pattern: When to Build Specialized AI Instead of General Assistants"
- **Central Question**: As AI coding tools mature, how should teams think about building specialized agents for specific tasks vs. using general-purpose assistants?
- **Supporting Articles**: Shopify Taxonomy (1), Claude Code (2), InfoQ Architecture Trends (5)
- **Audience Hook**: Most teams are using Copilot or similar general tools. But companies like Shopify are building specialized AI agents for taxonomy, pricing, fraud detection, and more. When does specialization make sense?
- **Estimated Scope**: Yes, 800-1200 words. Could explore: the augment-vs-replace philosophy, designing agents for specific problem domains, quality assurance for AI decisions, and the multi-agent collaboration pattern.

### Option 2: "Post-Quantum Readiness: Why Engineering Teams Should Care in 2025"
- **Central Question**: With quantum computing advances accelerating and harvest-now-decrypt-later attacks already happening, what should engineering teams do today?
- **Supporting Articles**: Post-Quantum Crypto (3)
- **Audience Hook**: Half of internet traffic already uses post-quantum encryption, but only 3.7% of backend systems support it. The gap between edge and origin is a ticking time bomb.
- **Estimated Scope**: Yes, 800-1200 words. Could cover: what post-quantum cryptography is, why Q-day timelines are accelerating, practical steps for cryptographic inventory, and how to prioritize security investment.

### Option 3: "Why Feature Flags Are the #1 Tool Teams Build In-House (And What That Means)"
- **Central Question**: What makes feature flags the most commonly custom-built developer tool, and what does this reveal about build vs. buy decisions?
- **Supporting Articles**: Feature Flags Survey (4), Claude Code (2), Shopify Taxonomy (1)
- **Audience Hook**: Despite mature vendors like LaunchDarkly, feature flags are the tool teams most often build themselves. Understanding why reveals when to build vs. buy for critical infrastructure.
- **Estimated Scope**: Yes, 800-1200 words. Could explore: why integration complexity drives custom builds, when vendor costs justify custom development, strategic control vs. operational leverage, and how AI feature rollouts change requirements (OpenAI's Statsig acquisition).

### Option 4: "Socio-Technical Architecture: Designing Systems for the Teams That Build Them"
- **Central Question**: How can engineering leaders design architectures that account for team structure, decision-making patterns, and organizational dynamics?
- **Supporting Articles**: InfoQ Architecture Trends (5), QCon tracks (6)
- **Audience Hook**: We've spent decades optimizing microservices, event-driven architectures, and API patterns. But Conway's Law suggests team structure matters more than technical choices. What does architecture look like when you start with the organization?
- **Estimated Scope**: Yes, 800-1200 words. Could cover: moving from centralized gatekeepers to distributed decision-making, designing for team autonomy, how AI organizational impact affects architecture, and practical patterns for socio-technical design.

### Option 5: "From Innovation to Operations: Making AI Work in Production"
- **Central Question**: With AI tools reaching mainstream adoption, how do teams shift from experimentation to operational excellence?
- **Supporting Articles**: InfoQ Architecture Trends (5), Shopify Taxonomy (1), Claude Code (2), QCon tracks (6)
- **Audience Hook**: AI is no longer novel—LLMs have reached "late majority" adoption. The challenge now is making these tools reliable, maintainable, and trustworthy in production. What does operational maturity for AI look like?
- **Estimated Scope**: Yes, 800-1200 words. Could explore: quality gates for AI-generated code, monitoring and observability for AI agents, testing strategies for non-deterministic systems, and balancing innovation pressure with reliability requirements.

## Additional Notes

**Date Consideration**: Today is November 4, 2025. Articles span from late April through early November, with most from October. The post-quantum cryptography article (Oct 28) and QCon announcement (Nov 3) are particularly timely.

**Strongest Narrative Thread**: The evolution from general AI tools to specialized agents (Theme 1) combined with operational maturity requirements (Theme 5) feels like the most actionable topic. Teams are actively deploying these tools and need frameworks for when to specialize vs. use general-purpose solutions.

**Cross-Cutting Insight**: There's a fascinating pattern across all themes: successful adoption requires augmentation rather than replacement. Whether it's Shopify's AI agents complementing human experts, post-quantum crypto coexisting with existing TLS, or socio-technical architecture enhancing (not replacing) technical patterns—the winning approach is integration, not substitution.

**Surprising Findings**:
- Feature flags being the #1 custom-built tool despite mature vendor ecosystem
- Post-quantum crypto already protecting 50% of traffic while 96.3% of origins remain vulnerable
- LLMs classified as "Late Majority" just 2-3 years after ChatGPT launch
- OpenAI's $1B acquisition of Statsig suggesting feature flags are strategically critical for AI rollouts

**Potential Reader Actions**:
- Conduct a cryptographic inventory assessment to identify post-quantum readiness gaps
- Evaluate whether current feature flag infrastructure supports AI feature rollout requirements
- Review build vs. buy decisions for developer tooling with integration complexity in mind
- Apply the multi-agent pattern to internal classification or analysis problems
- Assess architectural decision-making processes: centralized gatekeepers or distributed team ownership?
