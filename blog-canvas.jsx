import React, { useState, useEffect } from 'react';

const BlogCanvas = () => {
  const [activeSection, setActiveSection] = useState('outline');
  const [blogContent, setBlogContent] = useState({
    title: "What Data Engineering Can Learn from Software Engineering's Hard-Won Lessons",
    subtitle: "Decades of software development practice offer a roadmap for accelerating data engineering maturity",
    publishDate: "December 2025",
    sections: [
      {
        id: 'intro',
        title: 'Introduction',
        content: `Software engineering has been refining its practices for over fifty years. From the structured programming debates of the 1970s to the agile revolution of the 2000s to today's platform engineering movement, the discipline has accumulated hard-won lessons about building reliable, maintainable systems at scale.

Data engineering, by contrast, is barely a decade old as a distinct discipline. The term itself only gained widespread adoption around 2015. We're still figuring out what "good" looks like.

Here's the opportunity: data engineering doesn't have to repeat software engineering's mistakes. The patterns that took software teams decades to discover—version control, automated testing, continuous integration, infrastructure as code, clear interface contracts—are directly applicable to data systems. The teams that recognize this are accelerating past those still treating data engineering as a fundamentally different discipline.

This isn't about blindly copying practices. It's about understanding which lessons transfer and adapting them thoughtfully to the unique challenges of data systems.`,
        notes: ''
      },
      {
        id: 'maturity',
        title: 'The Maturity Gap Is Real',
        content: `Consider where software engineering was in 2005: version control was standard, automated testing was becoming mainstream, continuous integration was gaining traction, and the industry was actively debating best practices through books, conferences, and open source projects.

Now consider data engineering in 2025: many teams still deploy pipeline changes manually. Data quality is often "tested" by waiting for stakeholders to complain. Documentation lives in wikis that no one updates. Tribal knowledge determines who knows what about which datasets.

This isn't a criticism—it's a recognition that data engineering is roughly where software engineering was twenty years ago. The good news? We have a roadmap. The patterns that transformed software development are available for data teams to adopt today, compressed from decades into years.

The question isn't whether these practices apply to data engineering. It's how quickly teams can adapt them.`,
        notes: ''
      },
      {
        id: 'lesson1',
        title: 'Lesson 1: Contracts Prevent Chaos',
        content: `Software engineering learned this lesson painfully. In the early days of distributed systems, services communicated through ad-hoc agreements—informal documentation, verbal commitments, hope. The result was integration nightmares, cascading failures, and endless finger-pointing about who broke what.

The solution was API contracts: formal, versioned specifications that define exactly what a service provides and expects. Tools like OpenAPI, Protocol Buffers, and GraphQL schemas made contracts enforceable. Breaking changes became visible before deployment. Consumers could build with confidence.

Data engineering faces the same problem today. Data producers change schemas without warning. Consumers build pipelines on assumptions that silently become invalid. When dashboards break, no one knows who owns what or what changed.

The solution is the same: data contracts. A data contract is a formal agreement between data producers and consumers that defines schema structure, data types, constraints, freshness expectations, and ownership. Unlike documentation, contracts are code—they can be validated automatically, versioned in Git, and enforced in CI/CD pipelines.

Software engineering didn't invent API contracts because they're elegant. They invented them because the alternative was chaos. Data engineering is learning the same lesson, and the teams adopting data contracts now are avoiding years of preventable pain.`,
        notes: ''
      },
      {
        id: 'lesson2',
        title: 'Lesson 2: Testing Isn\'t Optional',
        content: `The software industry fought bitter battles over testing. "We don't have time to write tests." "Tests slow us down." "Our code is simple enough that we don't need tests." Every excuse was tried, and every excuse eventually proved wrong.

Today, automated testing is non-negotiable in professional software development. Not because developers love writing tests, but because the alternative—manual verification, production debugging, customer-reported bugs—is far more expensive. The investment in testing pays dividends in confidence, velocity, and reliability.

Data engineering is having the same debates today. "We don't have time to test our pipelines." "Data is different—you can't test it the same way." "We'll catch issues in QA."

But data systems need testing even more than application code. A bug in application logic affects behavior. Bad data affects every downstream system, every report, every decision made on that data. The blast radius is enormous.

The testing patterns transfer directly. Unit tests verify individual transformations. Integration tests validate end-to-end pipeline behavior. Data quality tests check that outputs meet expectations. Contract tests ensure producers and consumers remain compatible. Tools like Great Expectations, dbt tests, and Soda make this practical today.

The teams still debating whether to invest in data testing are making the same mistake software teams made in 2005. The question isn't whether testing is worth it. It's how much pain you're willing to endure before accepting that it is.`,
        notes: ''
      },
      {
        id: 'lesson3',
        title: 'Lesson 3: Observability Beats Monitoring',
        content: `Software engineering evolved through three generations of understanding system health.

First came logging—capturing what happened. Useful, but overwhelming at scale. Finding the relevant log line in millions of entries was its own challenge.

Then came monitoring—tracking predefined metrics and alerting on thresholds. Better, but limited to known failure modes. If you didn't anticipate a problem, you didn't monitor for it.

Finally came observability—the ability to ask arbitrary questions about system behavior without deploying new instrumentation. Distributed tracing, structured logging, and metrics correlation let teams debug issues they'd never seen before.

Data engineering is compressed into this same evolution, but many teams are stuck at stage one or two. They log pipeline runs. They monitor for row counts and null percentages. But when something unexpected happens—a subtle distribution shift, an unusual correlation, a slowly degrading data source—they're blind.

Data observability extends the software concept to data systems: end-to-end lineage tracking, automated anomaly detection, freshness monitoring, and the ability to understand data health across the entire pipeline. It's not just "did the job complete?" but "is the data trustworthy?"

The shift from monitoring to observability was transformative for software operations. Data teams adopting this mindset now will understand their systems in ways that monitoring alone never enables.`,
        notes: ''
      },
      {
        id: 'lesson4',
        title: 'Lesson 4: Abstractions Enable Scale',
        content: `One of software engineering's most important lessons is the power of good abstractions. Raw system calls became libraries. Libraries became frameworks. Frameworks became platforms. Each layer hid complexity, enabling developers to work at higher levels of abstraction.

The pattern repeated for infrastructure. Manual server configuration became shell scripts. Scripts became configuration management (Chef, Puppet). Configuration management became infrastructure as code (Terraform, CloudFormation). Each evolution let teams manage more with less.

Data engineering is following the same trajectory—but many teams are still in the scripting phase. They write custom Python for every pipeline. They manually configure every connection. They manage infrastructure through clicking in consoles.

The abstractions exist. Orchestration tools like Airflow and Dagster provide workflow management. Transformation frameworks like dbt offer reusable patterns for data modeling. Semantic layers like those in dbt or tools like Trino provide consistent metric definitions across the organization. Platform services handle infrastructure provisioning.

But the deeper lesson isn't about specific tools—it's about the principle. Good abstractions let you think about what you're trying to accomplish rather than how to accomplish it. They encode best practices so teams don't reinvent solutions to solved problems. They enable specialization: platform teams build the abstractions, product teams use them.

Data teams building everything from scratch aren't being rigorous—they're being inefficient. The same energy spent on custom solutions could go toward solving actually novel problems.`,
        notes: ''
      },
      {
        id: 'lesson5',
        title: 'Lesson 5: Culture Eats Process',
        content: `Software engineering's most important lessons aren't technical—they're cultural.

The agile movement wasn't primarily about standups and sprints. It was about valuing working software over comprehensive documentation, responding to change over following a plan, collaboration over negotiation.

DevOps wasn't primarily about CI/CD pipelines. It was about breaking down silos between development and operations, sharing responsibility for production systems, treating infrastructure as a product.

Platform engineering isn't primarily about internal developer portals. It's about treating internal teams as customers, reducing cognitive load, enabling self-service without sacrificing governance.

Data engineering needs the same cultural shifts. Data teams shouldn't be order-takers executing requests from stakeholders—they should be partners helping organizations become data-driven. Data quality shouldn't be someone else's problem—everyone who touches data shares responsibility for its reliability. Data infrastructure shouldn't be a black box—it should be a product that internal teams can use effectively.

The technical practices matter, but they only stick when the culture supports them. Teams that adopt data contracts without embracing shared ownership will find the contracts ignored. Teams that implement testing without valuing quality will let the tests rot. Teams that build platforms without treating users as customers will wonder why no one uses them.

Software engineering learned that tools alone don't transform organizations. Data engineering would do well to remember that lesson.`,
        notes: ''
      },
      {
        id: 'leadership',
        title: 'Accelerating the Journey',
        content: `For engineering leaders, the implication is clear: data engineering maturity can be accelerated by deliberately adopting software engineering's proven practices.

Start with version control and code review for everything. Pipelines, schemas, configurations, documentation—if it affects data systems, it belongs in Git and goes through review. This single practice improves quality, enables collaboration, and creates accountability.

Invest in testing infrastructure early. The ROI on data testing is enormous, but it requires upfront investment in tooling and patterns. Make testing a first-class concern, not an afterthought.

Treat data infrastructure as a product. Apply platform engineering principles: understand your users (data consumers), reduce their cognitive load, provide self-service capabilities, and iterate based on feedback.

Hire for software engineering fundamentals. The best data engineers I've worked with have strong software engineering foundations. They think about maintainability, testability, and operational concerns—not just getting data from A to B.

Break down silos deliberately. The artificial boundary between software engineers and data engineers creates dysfunction. Cross-functional teams that include both disciplines build better systems.

Don't wait for pain to force adoption. The teams that proactively adopt these practices gain compound advantages. Those that wait until problems become unbearable spend years catching up.`,
        notes: ''
      },
      {
        id: 'conclusion',
        title: 'Standing on Shoulders',
        content: `Isaac Newton famously wrote, "If I have seen further, it is by standing on the shoulders of giants." Data engineering has giants to stand on.

Software engineering's fifty-year journey produced patterns, practices, and principles that transfer remarkably well to data systems. Version control, automated testing, continuous integration, infrastructure as code, observability, API contracts, platform thinking—these aren't software-specific ideas. They're ideas about building reliable systems at scale.

Data engineering's unique challenges—non-deterministic outputs, external dependencies, semantic complexity, massive scale—require adaptation of these practices, not rejection of them. The teams that understand this are building data systems that would have seemed impossible a decade ago.

The choice isn't whether data engineering will mature. It's whether your team will lead that maturation or struggle to catch up. The lessons are available. The tools exist. The only question is whether you'll learn from software engineering's decades of experience—or insist on learning everything the hard way.`,
        notes: ''
      }
    ]
  });

  const [editingSection, setEditingSection] = useState(null);
  const [tempContent, setTempContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const totalWords = blogContent.sections.reduce((acc, section) => {
      return acc + section.content.split(/\s+/).filter(w => w).length;
    }, 0);
    setWordCount(totalWords);
  }, [blogContent]);

  const handleSectionEdit = (sectionId) => {
    const section = blogContent.sections.find(s => s.id === sectionId);
    setEditingSection(sectionId);
    setTempContent(section.content);
  };

  const handleSectionSave = () => {
    setBlogContent(prev => ({
      ...prev,
      sections: prev.sections.map(s => 
        s.id === editingSection ? { ...s, content: tempContent } : s
      )
    }));
    setEditingSection(null);
    setTempContent('');
  };

  const handleTitleEdit = (field, value) => {
    setBlogContent(prev => ({ ...prev, [field]: value }));
  };

  const exportMarkdown = () => {
    let md = `# ${blogContent.title}\n\n`;
    md += `*${blogContent.subtitle}*\n\n`;
    md += `*Published: ${blogContent.publishDate}*\n\n---\n\n`;
    
    blogContent.sections.forEach(section => {
      if (section.id !== 'intro') {
        md += `## ${section.title}\n\n`;
      }
      md += `${section.content}\n\n`;
    });
    
    return md;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #0f0f0f 100%)',
      fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#e8e8e8',
      padding: '0'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(20, 20, 35, 0.95)',
        borderBottom: '1px solid rgba(255, 200, 87, 0.2)',
        padding: '24px 48px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div>
            <h1 style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#ffc857',
              margin: 0
            }}>
              Blog Canvas
            </h1>
            <p style={{
              fontSize: '12px',
              color: '#888',
              margin: '4px 0 0 0'
            }}>
              {wordCount} words · ~{Math.ceil(wordCount / 200)} min read
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setShowPreview(!showPreview)}
              style={{
                padding: '10px 20px',
                background: showPreview ? '#ffc857' : 'transparent',
                border: '1px solid #ffc857',
                borderRadius: '4px',
                color: showPreview ? '#0f0f0f' : '#ffc857',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {showPreview ? 'Edit Mode' : 'Preview'}
            </button>
            <button
              onClick={() => {
                const md = exportMarkdown();
                navigator.clipboard.writeText(md);
                alert('Markdown copied to clipboard!');
              }}
              style={{
                padding: '10px 20px',
                background: '#2d5a4a',
                border: 'none',
                borderRadius: '4px',
                color: '#7fffd4',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Export Markdown
            </button>
          </div>
        </div>
      </header>

      <div style={{
        display: 'flex',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '0'
      }}>
        {/* Sidebar Navigation */}
        <nav style={{
          width: '280px',
          padding: '32px 24px',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: '90px',
          height: 'calc(100vh - 90px)',
          overflowY: 'auto'
        }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '20px'
          }}>
            Sections
          </h3>
          {blogContent.sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 16px',
                marginBottom: '4px',
                background: activeSection === section.id ? 'rgba(255, 200, 87, 0.1)' : 'transparent',
                border: 'none',
                borderLeft: activeSection === section.id ? '3px solid #ffc857' : '3px solid transparent',
                borderRadius: '0 4px 4px 0',
                textAlign: 'left',
                color: activeSection === section.id ? '#ffc857' : '#999',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ opacity: 0.5, marginRight: '8px' }}>{idx + 1}.</span>
              {section.title}
            </button>
          ))}
          
          {/* Lesson Summary Box */}
          <div style={{
            marginTop: '32px',
            padding: '16px',
            background: 'rgba(255, 200, 87, 0.05)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 200, 87, 0.15)'
          }}>
            <h4 style={{
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#ffc857',
              marginBottom: '12px'
            }}>
              The 5 Lessons
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '12px',
              color: '#aaa',
              lineHeight: 1.8
            }}>
              <li>1. Contracts Prevent Chaos</li>
              <li>2. Testing Isn't Optional</li>
              <li>3. Observability Beats Monitoring</li>
              <li>4. Abstractions Enable Scale</li>
              <li>5. Culture Eats Process</li>
            </ul>
          </div>
        </nav>

        {/* Main Content Area */}
        <main style={{
          flex: 1,
          padding: '48px 64px',
          maxWidth: '800px'
        }}>
          {/* Title Section */}
          <div style={{ marginBottom: '48px' }}>
            {!showPreview ? (
              <>
                <input
                  type="text"
                  value={blogContent.title}
                  onChange={(e) => handleTitleEdit('title', e.target.value)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '2px solid rgba(255, 200, 87, 0.3)',
                    padding: '16px 0',
                    fontSize: '36px',
                    fontWeight: 700,
                    color: '#fff',
                    fontFamily: "'IBM Plex Serif', Georgia, serif",
                    lineHeight: 1.2
                  }}
                />
                <input
                  type="text"
                  value={blogContent.subtitle}
                  onChange={(e) => handleTitleEdit('subtitle', e.target.value)}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '12px 0',
                    fontSize: '18px',
                    fontStyle: 'italic',
                    color: '#aaa',
                    marginTop: '16px'
                  }}
                />
              </>
            ) : (
              <>
                <h1 style={{
                  fontSize: '42px',
                  fontWeight: 700,
                  color: '#fff',
                  fontFamily: "'IBM Plex Serif', Georgia, serif",
                  lineHeight: 1.2,
                  marginBottom: '16px'
                }}>
                  {blogContent.title}
                </h1>
                <p style={{
                  fontSize: '20px',
                  fontStyle: 'italic',
                  color: '#aaa'
                }}>
                  {blogContent.subtitle}
                </p>
              </>
            )}
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginTop: '24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              Published: {blogContent.publishDate}
            </p>
          </div>

          {/* Content Sections */}
          {blogContent.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              style={{
                marginBottom: '56px',
                paddingBottom: '56px',
                borderBottom: idx < blogContent.sections.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
              }}
            >
              {section.id !== 'intro' && (
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: section.id.startsWith('lesson') ? '#ffc857' : '#7fffd4',
                  fontFamily: "'IBM Plex Serif', Georgia, serif",
                  marginBottom: '24px'
                }}>
                  {section.title}
                </h2>
              )}
              
              {!showPreview && editingSection === section.id ? (
                <div>
                  <textarea
                    value={tempContent}
                    onChange={(e) => setTempContent(e.target.value)}
                    style={{
                      width: '100%',
                      minHeight: '300px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 200, 87, 0.3)',
                      borderRadius: '8px',
                      padding: '20px',
                      fontSize: '16px',
                      lineHeight: 1.8,
                      color: '#e8e8e8',
                      fontFamily: "'IBM Plex Mono', monospace",
                      resize: 'vertical'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <button
                      onClick={handleSectionSave}
                      style={{
                        padding: '10px 24px',
                        background: '#ffc857',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#0f0f0f',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setEditingSection(null);
                        setTempContent('');
                      }}
                      style={{
                        padding: '10px 24px',
                        background: 'transparent',
                        border: '1px solid #666',
                        borderRadius: '4px',
                        color: '#999',
                        cursor: 'pointer'
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => !showPreview && handleSectionEdit(section.id)}
                  style={{
                    cursor: showPreview ? 'default' : 'pointer',
                    padding: showPreview ? '0' : '20px',
                    borderRadius: '8px',
                    background: showPreview ? 'transparent' : 'rgba(255, 255, 255, 0.02)',
                    border: showPreview ? 'none' : '1px solid transparent',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!showPreview) {
                      e.currentTarget.style.background = 'rgba(255, 200, 87, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 200, 87, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!showPreview) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  {section.content.split('\n\n').map((paragraph, pIdx) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={pIdx} style={{
                          fontSize: '18px',
                          fontWeight: 600,
                          color: '#fff',
                          marginTop: pIdx > 0 ? '28px' : '0',
                          marginBottom: '12px'
                        }}>
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    
                    // Handle paragraphs with bold text
                    const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={pIdx} style={{
                        fontSize: '17px',
                        lineHeight: 1.8,
                        color: '#ccc',
                        marginBottom: '20px'
                      }}>
                        {parts.map((part, partIdx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={partIdx} style={{ color: '#fff', fontWeight: 600 }}>
                                {part.replace(/\*\*/g, '')}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </p>
                    );
                  })}
                  {!showPreview && (
                    <p style={{
                      fontSize: '12px',
                      color: '#555',
                      marginTop: '16px',
                      fontStyle: 'italic'
                    }}>
                      Click to edit this section
                    </p>
                  )}
                </div>
              )}
            </section>
          ))}
        </main>

        {/* Right Panel - Tips */}
        <aside style={{
          width: '260px',
          padding: '32px 24px',
          borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: '90px',
          height: 'calc(100vh - 90px)'
        }}>
          <h3 style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '20px'
          }}>
            Post Stats
          </h3>
          <div style={{
            background: 'rgba(255, 200, 87, 0.05)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '13px', color: '#aaa', lineHeight: 1.6 }}>
              <strong style={{ color: '#ffc857' }}>Target:</strong> 1500-2000 words
            </p>
          </div>
          <div style={{
            background: 'rgba(45, 90, 74, 0.2)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <p style={{ fontSize: '13px', color: '#7fffd4', lineHeight: 1.6 }}>
              <strong>Current:</strong> {wordCount} words<br/>
              {wordCount < 1500 ? '📝 Keep building content' : wordCount > 2000 ? '✂️ Consider trimming' : '✅ Good length!'}
            </p>
          </div>
          
          <h3 style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '16px',
            marginTop: '32px'
          }}>
            Core Framing
          </h3>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <p style={{ fontSize: '12px', color: '#888', lineHeight: 1.7 }}>
              <strong style={{ color: '#aaa' }}>Angle:</strong><br/>
              SW Eng = 50+ years mature<br/>
              Data Eng = ~10 years old<br/><br/>
              <strong style={{ color: '#aaa' }}>Thesis:</strong><br/>
              Data teams can accelerate maturity by deliberately adopting proven SW practices<br/><br/>
              <strong style={{ color: '#aaa' }}>Tone:</strong><br/>
              Practical wisdom, not criticism. "Here's the roadmap."
            </p>
          </div>
          
          <h3 style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#666',
            marginBottom: '16px',
            marginTop: '32px'
          }}>
            SW → DE Mappings
          </h3>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <p style={{ fontSize: '11px', color: '#777', lineHeight: 1.8, fontFamily: "'IBM Plex Mono', monospace" }}>
              API Contracts → Data Contracts<br/>
              Unit Tests → dbt Tests<br/>
              Observability → Data Observability<br/>
              Frameworks → Semantic Layers<br/>
              DevOps → DataOps Culture
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogCanvas;
