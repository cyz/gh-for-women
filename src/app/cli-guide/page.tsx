'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
import './cli-guide.css';

export default function CliGuide() {
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    // Redirection to PT version if Portuguese is selected
    if (language === 'pt') {
      router.replace('/cli-guide-pt');
    }
  }, [language, router]);

  useEffect(() => {
    /* Highlight the active nav section on scroll */
    const sections = document.querySelectorAll('[id^="stage-"]');
    const navLinks = document.querySelectorAll('.stage-nav a');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            (link as HTMLElement).style.color = '';
            (link as HTMLElement).style.borderBottomColor = '';
          });
          const active = document.querySelector(`.stage-nav a[href="#${entry.target.id}"]`) as HTMLElement;
          if (active) {
            active.style.color = 'var(--blue)';
            active.style.borderBottomColor = 'var(--blue)';
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-eyebrow">✨ Getting Started Guide</div>
        <h1>GitHub <span>Copilot</span> CLI</h1>
        <div className="subtitle">
          From zero to AI-powered productivity in your terminal — a practical, step-by-step guide for business users.
        </div>
        <p style={{ fontSize: '11px', color: '#4A6174', marginTop: '8px', fontStyle: 'italic', position: 'relative' }}>
          Community guide &mdash; not official GitHub documentation.
        </p>
      </div>

      {/* SECURITY DISCLAIMER */}
      <div style={{ background: 'linear-gradient(135deg, #FDE7E9 0%, #FFF0F0 100%)', borderBottom: '3px solid #D13438', padding: '24px 40px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '28px', flexShrink: 0 }}>🛡️</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: '1.05em', color: '#D13438', marginBottom: '8px' }}>⚠️ Security &amp; Responsible AI Notice</div>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.92em', color: '#323130', lineHeight: '1.7' }}>
            <li><strong>Follow your organization&rsquo;s policies:</strong> Before using GitHub Copilot CLI, review and follow your own company&rsquo;s acceptable-use, security, and data-handling policies.</li>
            <li><strong>Handle data carefully:</strong> Avoid sharing secrets, credentials, or confidential information in prompts. You are responsible for what you send to and generate with AI tools.</li>
            <li><strong>Responsible AI:</strong> All AI-generated outputs must be reviewed by a human before use in production, customer-facing communications, or official documents. AI suggestions are assistive, not authoritative.</li>
            <li><strong>Privacy &amp; compliance:</strong> Ensure your usage complies with applicable data protection regulations (such as GDPR, LGPD, or CCPA) for your region and industry.</li>
          </ul>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: 'white', border: '2px solid #0078D4', borderRadius: '8px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>🤝</span>
              <span style={{ fontWeight: 700, color: '#0078D4', fontSize: '0.95em' }}>Build with Trust</span>
            </div>
            <div style={{ background: 'white', border: '2px solid #FF8C00', borderRadius: '8px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>🛑</span>
              <span style={{ fontWeight: 700, color: '#FF8C00', fontSize: '0.95em' }}>Pause. Think. Ask.</span>
            </div>
          </div>
          <div style={{ marginTop: '10px', fontSize: '0.82em', color: '#605E5C', fontStyle: 'italic' }}>
            Questions about security or compliance? Check with your organization&rsquo;s security team. Last updated: March 2026.
          </div>
        </div>
      </div>

      {/* STAGE NAVIGATION */}
      <nav className="stage-nav">
        <a href="#stage-1"><span className="nav-num">1</span> Basic Installation</a>
        <a href="#stage-2"><span className="nav-num">2</span> Creating Your Agent</a>
        <a href="#stage-3"><span className="nav-num">3</span> Supercharging Your Agent</a>
        <a href="#stage-4"><span className="nav-num">4</span> Have Fun &amp; Empower</a>
      </nav>

      <div className="container">
        {/* STAGE 1 */}
        <div className="stage-header stage-1" id="stage-1">
          <div className="stage-label">Stage 1 of 4</div>
          <h2>📦 Basic Installation</h2>
          <p>Set up everything you need to get running. Most of these are one-time steps — do them once and forget about them.</p>
        </div>

        {/* Step 1.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">1</span>
            <h3>Sign In &amp; Enable GitHub Copilot</h3>
          </div>
          <div className="step-body">
            <p>Go to the GitHub Copilot portal and activate your license.</p>

            <div className="ui-mockup">
              <div className="ui-mockup-bar">
                <span className="icon">🌐</span> Browser
              </div>
              <div className="ui-mockup-body">
                <div className="mock-url">🔒 https://github.com/features/copilot</div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '1.3em', fontWeight: 600, marginBottom: '12px' }}>Welcome to GitHub Copilot</div>
                  <div style={{ display: 'inline-block', background: 'var(--blue)', color: 'white', padding: '10px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                    ⚡ Sign in to enable Copilot
                  </div>
                  <p style={{ color: 'var(--gray-90)', marginTop: '16px', fontSize: '0.9em' }}>Sign in and follow the prompts to enable Copilot for your account</p>
                </div>
              </div>
            </div>

            <p>Once enabled, you should see a confirmation message:</p>

            <div className="callout tip">
              <span className="icon">✅</span>
              <div><strong>GitHub Copilot enabled</strong> for your GitHub account.</div>
            </div>

            <div className="callout info">
              <span className="icon">💡</span>
              <div><strong>Have more than one GitHub account?</strong> That&rsquo;s fine. Inside the CLI, type <code>/logout</code>, then <code>/login</code>, choose GitHub.com, and select the account you want to use.</div>
            </div>
          </div>
        </div>

        {/* Step 1.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">2</span>
            <h3>Create Your Working Folder</h3>
          </div>
          <div className="step-body">
            <p>This folder is where you&rsquo;ll launch Copilot CLI from. It becomes your personal workspace — any prompt files, reports, or artifacts you create will live here. Keeping it in a synced location (OneDrive, Dropbox, Google Drive, etc.) means everything backs up automatically.</p>

            <div className="explorer-mockup">
              <div className="explorer-bar">
                <span>📁</span>
                <div className="explorer-path">C:\Users\<em>YourName</em>\</div>
              </div>
              <div className="explorer-body">
                <div className="explorer-item"><span className="fi">📁</span> Desktop</div>
                <div className="explorer-item"><span className="fi">📁</span> Documents</div>
                <div className="explorer-item"><span className="fi">📁</span> Downloads</div>
                <div className="explorer-item selected"><span className="fi">📂</span> <strong>ghcli-working</strong> &nbsp;← Create this folder</div>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Pro tip:</strong> Over time, move relevant documents, data files, and notes into this folder. The more context Copilot can see, the better it works.</div>
            </div>
          </div>
        </div>

        {/* Step 1.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">3</span>
            <h3>Install Windows Terminal</h3>
          </div>
          <div className="step-body">
            <p>The modern terminal for Windows — tabbed interface, great fonts, emoji support.</p>
            <p><strong>Download from:</strong> <a href="https://aka.ms/terminal" target="_blank" rel="noopener noreferrer">https://aka.ms/terminal</a></p>

            <div className="callout info">
              <span className="icon">ℹ️</span>
              <div>If you already use VS Code or another terminal, that works too. Windows Terminal is just a great default starting point.</div>
            </div>
          </div>
        </div>

        {/* Step 1.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">4</span>
            <h3>Install Git for Windows</h3>
          </div>
          <div className="step-body">
            <p>Git is the version control tool Copilot CLI uses under the hood.</p>
            <p><strong>Download and run:</strong><br />
              <a href="https://github.com/git-for-windows/git/releases/download/v2.53.0.windows.1/Git-2.53.0-64-bit.exe" style={{ wordBreak: 'break-all' }} target="_blank" rel="noopener noreferrer">
                https://github.com/git-for-windows/git/releases/.../Git-2.53.0-64-bit.exe
              </a>
            </p>

            <div className="callout tip">
              <span className="icon">✅</span>
              <div>Just click <strong>Next</strong> through everything — accept all defaults. Close and reopen your terminal when done.</div>
            </div>
          </div>
        </div>

        {/* Step 1.5 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">5</span>
            <h3>Install PowerShell 7</h3>
          </div>
          <div className="step-body">
            <p>Copilot CLI requires PowerShell 7+. The old Windows PowerShell 5.1 that comes pre-installed won&rsquo;t work.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">PowerShell</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">PS&gt;</span> <span className="cmd">winget install Microsoft.PowerShell</span>
                <br /><br />
                <span className="output">Found PowerShell [Microsoft.PowerShell] Version 7.5.x<br />Starting installation...<br />Successfully installed!</span>
                <br /><br />
                <span className="comment"># Close and reopen your terminal, then verify:</span><br />
                <span className="prompt">PS&gt;</span> <span className="cmd">$PSVersionTable.PSVersion</span>
                <br /><br />
                <span className="output">Major  Minor  Patch<br />-----  -----  -----<br />7      5      0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1.6 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">6</span>
            <h3>Set PowerShell 7 as Default &amp; Set Your Working Folder</h3>
          </div>
          <div className="step-body">
            <p>Configure Windows Terminal to always open PowerShell 7 in your working folder:</p>

            <div className="settings-mockup">
              <div className="settings-bar">
                <span>⚙️</span> Windows Terminal &mdash; Settings (Ctrl+,)
              </div>
              <div className="settings-body">
                <div className="settings-sidebar">
                  <div className="item active">🏠 Startup</div>
                  <div className="item">🎨 Appearance</div>
                  <div className="item">⌨️ Interaction</div>
                  <div className="item">Profiles</div>
                </div>
                <div className="settings-content">
                  <div className="setting-row">
                    <span className="setting-label">Default profile</span>
                    <span className="setting-value">⬛ PowerShell &nbsp;← (black icon, NOT blue)</span>
                  </div>
                </div>
              </div>
            </div>

            <p>Then go to <strong>Profiles &rarr; PowerShell</strong> (the black icon one):</p>

            <div className="settings-mockup">
              <div className="settings-bar">
                <span>⚙️</span> Windows Terminal &mdash; Settings &gt; Profiles &gt; PowerShell
              </div>
              <div className="settings-body">
                <div className="settings-sidebar">
                  <div className="item">🏠 Startup</div>
                  <div className="item">🎨 Appearance</div>
                  <div className="item active">⬛ PowerShell</div>
                  <div className="item">🟦 Windows PowerShell</div>
                </div>
                <div className="settings-content">
                  <div className="setting-row">
                    <span className="setting-label">Starting directory</span>
                    <span className="setting-value">C:\Users\<em>YourName</em>\ghcli-working</span>
                  </div>
                </div>
              </div>
            </div>

            <p>Click <strong>Save</strong>. Close and reopen — it should now open directly in your working folder.</p>

            <div className="callout warn">
              <span className="icon">⚠️</span>
              <div><strong>Make sure you pick the right icon!</strong> The black icon ⬛ is PowerShell 7. The blue icon 🟦 is the old Windows PowerShell 5.1 — that&rsquo;s <em>not</em> the one you want.</div>
            </div>
          </div>
        </div>

        {/* Step 1.7 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">7</span>
            <h3>Install Node.js</h3>
          </div>
          <div className="step-body">
            <p>Node.js is the runtime that powers Copilot CLI.</p>

            <div className="feature-grid">
              <div className="feature-card">
                <h4>💻 Surface / ARM64 device</h4>
                <p><a href="https://nodejs.org/dist/v24.13.1/node-v24.13.1-arm64.msi" target="_blank" rel="noopener noreferrer">Download ARM64 installer</a></p>
              </div>
              <div className="feature-card">
                <h4>🖥️ Standard x64 laptop</h4>
                <p><a href="https://nodejs.org/dist/v24.13.1/node-v24.13.1-x64.msi" target="_blank" rel="noopener noreferrer">Download x64 installer</a></p>
              </div>
            </div>

            <div className="callout info">
              <span className="icon">❓</span>
              <div><strong>Not sure which one?</strong> Open PowerShell and run <code>$env:PROCESSOR_ARCHITECTURE</code>. If it says <code>ARM64</code>, use the ARM64 installer. If it says <code>AMD64</code>, use x64.</div>
            </div>

            <p>Accept all defaults, then close and reopen your terminal. Verify:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">PowerShell 7</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">PS&gt;</span> <span className="cmd">node --version</span>
                <br />
                <span className="output">v24.13.1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1.8 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">8</span>
            <h3>Install GitHub Copilot CLI</h3>
          </div>
          <div className="step-body">
            <p>Install the official <strong>GitHub Copilot CLI</strong> using npm (Node.js), then launch it from your working folder.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">PowerShell 7</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">PS&gt;</span> <span className="cmd">npm install -g @github/copilot</span>
                <br />
                <span className="output">added 1 package in 8s<br />GitHub Copilot CLI installed successfully.</span>
                <br /><br />
                <span className="prompt">PS&gt;</span> <span className="cmd">copilot</span>
                <br /><br />
                <span className="info">{"   ____                  _   _           _"}</span><br />
                <span className="info">{"  / ___|   ___    _ __  (_) | |   ___   | |_"}</span><br />
                <span className="info">{" | |      / _ \  | '_ \ | | | |  / _ \  | __|"}</span><br />
                <span className="info">{" | |___  | (_) | | |_) || | | | | (_) | | |_"}</span><br />
                <span className="info">{"  \\____|  \\___/  | .__/ |_| |_|  \\___/   \\__|"}</span><br />
                <span className="info">{"                 |_|"}</span>
                <br /><br />
                <span className="highlight">Welcome! Type a prompt to get started.</span><br />
                <span className="output">Type /help for available commands.</span>
              </div>
            </div>

            <p>The first time you run <code>copilot</code>, you&rsquo;ll be prompted to sign in to GitHub. Follow the on-screen device-login flow to authenticate.</p>

            <div className="callout info">
              <span className="icon">📖</span>
              <div><strong>Reference:</strong> <a href="https://docs.github.com/copilot/github-copilot-in-the-cli" target="_blank" rel="noopener noreferrer">GitHub Copilot CLI documentation</a> — official docs and command reference.</div>
            </div>

            <div className="callout warn">
              <span className="icon">⚠️</span>
              <div><strong>You&rsquo;ll see lots of permission prompts.</strong> This is by design — Copilot asks before reading files, running commands, etc. Generally, say <strong>Yes</strong> to all of them. As you get comfortable, you can customize auto-approvals.</div>
            </div>
          </div>
        </div>

        {/* Step 1.9 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">9</span>
            <h3>Select Your AI Model</h3>
          </div>
          <div className="step-body">
            <p>Choose the best reasoning model available:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="slash">/model</span>
                <br /><br />
                <span className="output">Select a model:</span>
              </div>
            </div>

            <div className="model-list">
              <div className="model-item"><span>  </span> Claude Sonnet 4.5</div>
              <div className="model-item"><span>  </span> Claude Sonnet 4</div>
              <div className="model-item selected"><span className="arrow">❯</span> Claude Opus 4.6 <span className="tag">⭐ Recommended</span></div>
              <div className="model-item"><span>  </span> GPT-5</div>
              <div className="model-item"><span>  </span> GPT-5 mini</div>
            </div>

            <p>Use arrow keys to navigate and press <strong>Enter</strong> to select. <strong>Claude Opus 4.6</strong> gives you the most capable reasoning — it makes a massive difference in quality.</p>
          </div>
        </div>

        {/* Step 1.10 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">10</span>
            <h3>Connect Your Data with Plugins &amp; MCP</h3>
          </div>
          <div className="step-body">
            <p>Out of the box, Copilot CLI works with your local files and GitHub. To let it reach other systems — like your calendar, documents, or business data — you connect <strong>plugins</strong> and <strong>MCP servers</strong>.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="comment"># List available plugin marketplaces and plugins</span><br />
                <span className="prompt">&gt;</span> <span className="slash">/plugin</span>
                <br /><br />
                <span className="comment"># Add an MCP data source (covered in detail in Stage 3)</span><br />
                <span className="prompt">&gt;</span> <span className="slash">/mcp add</span>
              </div>
            </div>

            <p>You&rsquo;ll explore MCP servers and skills in depth in <strong>Stage 3</strong>. For now, just know this is how Copilot connects to live data sources beyond your local folder.</p>

            <div className="callout tip">
              <span className="icon">✅</span>
              <div><strong>You&rsquo;re done with installation!</strong> Try your first question: <code>Summarize the files in this folder.</code></div>
            </div>
          </div>
        </div>

        {/* STAGE 2 */}
        <div className="section-divider"></div>

        <div className="stage-header stage-2" id="stage-2">
          <div className="stage-label">Stage 2 of 4</div>
          <h2>🤖 Creating Your Agent</h2>
          <p>Turn Copilot into <em>your</em> personal AI assistant — one that knows your role, reflects your style, and understands your priorities.</p>
        </div>

        <div className="step">
          <div className="step-body">
            <div className="callout warn">
              <span className="icon">📂</span>
              <div><strong>Important: Work from your working folder!</strong> Before creating your agent, make sure you are working inside the folder you configured in Stage 1, Step 6:<br /><br />
              <code>C:\Users\<em>YourName</em>\ghcli-working</code><br /><br />
              Your agent file, prompt files, and all working documents should live here. Keeping it in a synced location ensures your files are backed up and accessible to Copilot every session. If you haven&rsquo;t created this folder yet, create it now.</div>
            </div>
          </div>
        </div>

        {/* Step 2.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">1</span>
            <h3>What is a Custom Agent?</h3>
          </div>
          <div className="step-body">
            <p>By default, Copilot CLI is a <strong>general-purpose AI assistant</strong> — it doesn&rsquo;t know who you are, what you do, or how you work. A <strong>custom agent</strong> is a set of instructions (a simple text file) that tells Copilot:</p>
            <ul>
              <li>👤 <strong>Who you are</strong> — your role, team, and responsibilities</li>
              <li>🎯 <strong>What you care about</strong> — your priorities, customers, KPIs</li>
              <li>📝 <strong>How you work</strong> — your communication style, preferred formats, tools</li>
              <li>🛠️ <strong>What tools to use</strong> — data sources, templates, workflows</li>
            </ul>

            <div className="callout info">
              <span className="icon">💡</span>
              <div><strong>Think of it this way:</strong> Without instructions, Copilot is a brilliant new hire who just walked in the door. With a custom agent, it&rsquo;s a colleague who has been working alongside you for months.</div>
            </div>
          </div>
        </div>

        {/* Step 2.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">2</span>
            <h3>Create Your Agent with /agent</h3>
          </div>
          <div className="step-body">
            <p>The easiest way to create your custom agent is right inside Copilot CLI. Just type <code>/agent</code> and select <strong>Create Agent</strong> from the menu:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="slash">/agent</span>
                <br /><br />
                <span className="output">Select an option:</span>
              </div>
            </div>

            <div className="model-list">
              <div className="model-item selected"><span className="arrow">❯</span> Create Agent <span className="tag">⭐ Select this</span></div>
              <div className="model-item"><span>  </span> Browse agents</div>
              <div className="model-item"><span>  </span> Edit agent</div>
            </div>

            <p>Copilot will walk you through an interactive wizard. It will ask you simple questions about:</p>

            <ul>
              <li>👤 <strong>Your name and role</strong> — who you are at your company</li>
              <li>🎯 <strong>What you focus on</strong> — your accounts, segment, priorities</li>
              <li>📝 <strong>How you like output</strong> — concise vs. detailed, HTML reports, tables, etc.</li>
            </ul>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Just answer the questions naturally!</strong> Copilot generates the agent file for you automatically. No manual file editing needed. It will create a <code>.md</code> file in your OneDrive working folder so it loads every time you start.</div>
            </div>

            <p>Here&rsquo;s an example of what the wizard might ask and what the generated agent looks like:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI — Agent Creator</span>
              </div>
              <div className="terminal-body">
                <span className="info">What&rsquo;s your name and role?</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Maria Silva, Account Executive for the Financial Services segment</span>
                <br /><br />
                <span className="info">What are your key accounts or priorities?</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">I manage three large banking accounts. My focus is cloud consumption growth and AI adoption this quarter.</span>
                <br /><br />
                <span className="info">Any preferences for how I should respond?</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Be concise, lead with data. Generate HTML reports when possible. Use color-coded signals: green=good, yellow=watch, red=risk.</span>
                <br /><br />
                <span className="output">✅ Agent created! Saved to .github/agents/my-agent.md</span><br />
                <span className="output">Your agent will load automatically in future sessions.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">3</span>
            <h3>Test Your Agent</h3>
          </div>
          <div className="step-body">
            <p>Restart Copilot CLI and ask it a question about yourself to confirm it knows you:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Who am I and what are my priorities?</span>
                <br /><br />
                <span className="info">You are Maria Silva, Account Executive for the Financial Services segment. You manage three large banking accounts.</span>
                <br /><br />
                <span className="info">Your priorities this quarter:<br />1. Drive cloud consumption growth across your portfolio<br />2. Accelerate AI adoption at key accounts</span>
              </div>
            </div>

            <p>If Copilot responds with your details, your agent is working! 🎉</p>

            <div className="callout tip">
              <span className="icon">🔄</span>
              <div><strong>Want to edit later?</strong> Type <code>/agent</code> again and select <strong>Edit Agent</strong>, or ask Copilot directly: <em>&ldquo;Update my agent to also include that I focus on Security plays.&rdquo;</em> It will update the file for you.</div>
            </div>
          </div>
        </div>

        {/* Step 2.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">4</span>
            <h3>Create Reusable Prompt Files</h3>
          </div>
          <div className="step-body">
            <p>Prompt files are saved prompts you can run anytime using the <code>@</code> symbol. They live in your working folder as <code>.md</code> files.</p>

            <div className="file-mockup">
              <div className="file-mockup-bar">
                <span>📄</span>
                <span className="tab">weekly-recap.md</span>
              </div>
              <div className="file-mockup-body">
                <span className="line-num"> 1</span><span className="md-h1"># Weekly Recap</span><br />
                <span className="line-num"> 2</span><br />
                <span className="line-num"> 3</span><span className="md-text">Pull everything from my emails, Teams messages, and calendar</span><br />
                <span className="line-num"> 4</span><span className="md-text">from the last 5 business days.</span><br />
                <span className="line-num"> 5</span><br />
                <span className="line-num"> 6</span><span className="md-text">Organize by account. For each account, show:</span><br />
                <span className="line-num"> 7</span><span className="md-bullet">- </span><span className="md-text">Key decisions made</span><br />
                <span className="line-num"> 8</span><span className="md-bullet">- </span><span className="md-text">Open action items</span><br />
                <span className="line-num"> 9</span><span className="md-bullet">- </span><span className="md-text">Risks or escalations</span><br />
                <span className="line-num">10</span><span className="md-bullet">- </span><span className="md-text">Next steps</span><br />
                <span className="line-num">11</span><br />
                <span className="line-num">12</span><span className="md-text">Save as a well-formatted HTML file.</span>
              </div>
            </div>

            <p>To use it, simply reference it in Copilot with <code>@</code>:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Run</span> <span className="flag">@weekly-recap.md</span>
                <br /><br />
                <span className="output">🔍 Querying EnterpriseSuite for emails (last 5 days)...<br />🔍 Querying EnterpriseSuite for chat messages...<br />🔍 Querying EnterpriseSuite for calendar events...<br />📝 Generating report...<br />✅ Saved to weekly-recap-report.html</span>
              </div>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <h4>📋 meeting-prep.md</h4>
                <p>Auto-prep for tomorrow&rsquo;s meetings with customer context and talking points</p>
              </div>
              <div className="feature-card">
                <h4>📬 missed-items.md</h4>
                <p>Find action items assigned to you across email and Teams</p>
              </div>
              <div className="feature-card">
                <h4>📊 account-360.md</h4>
                <p>Full account briefing with internal data + external research</p>
              </div>
              <div className="feature-card">
                <h4>💰 forecast-check.md</h4>
                <p>Compare pipeline vs. actuals, flag risks, surface insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* STAGE 3 */}
        <div className="section-divider"></div>

        <div className="stage-header stage-3" id="stage-3">
          <div className="stage-label">Stage 3 of 4</div>
          <h2>⚡ Supercharging Your Agent</h2>
          <p>Unlock advanced capabilities: connect live data sources via MCP, build reusable skills, and tackle complex multi-step tasks.</p>
        </div>

        {/* Step 3.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">1</span>
            <h3>Add MCP Servers (External Data Sources)</h3>
          </div>
          <div className="step-body">
            <p><strong>MCP (Model Context Protocol)</strong> servers connect Copilot to external data — think of them as &ldquo;plug-ins&rdquo; that give your agent access to live systems like Power BI, SharePoint, CRM, and more.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="slash">/mcp add</span>
                <br /><br />
                <span className="output">Enter MCP server details:</span><br />
                <span className="info">  Name: </span><span className="cmd">enterprise-analytics</span><br />
                <span className="info">  Type: </span><span className="cmd">http</span><br />
                <span className="info">  URL:  </span><span className="cmd">https://api.analytics.zenithcloud.com/...</span>
                <br /><br />
                <span className="output">Press Ctrl+S to save</span>
              </div>
            </div>

            <p>The most useful MCP servers for business users:</p>

            <div className="feature-grid">
              <div className="feature-card" style={{ borderLeft: '4px solid var(--blue)' }}>
                <h4>📊 Enterprise Analytics (Metrics)</h4>
                <p>Query your dashboards and reports with natural language. Ask &ldquo;show me MRR by account&rdquo; and get live data.</p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--green)' }}>
                <h4>📖 ZenithCloud Learn Docs</h4>
                <p>Instant access to official ZenithCloud and EnterpriseSuite documentation — no more searching docs.zenithcloud.com manually.</p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🌐 GitHub MCP</h4>
                <p>Already built-in! Access repos, issues, PRs, and code directly from your prompts.</p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--purple)' }}>
                <h4>📄 MarkItDown</h4>
                <p>Convert PPTX, PDF, DOCX, and XLSX files to text so Copilot can read and summarize them.</p>
              </div>
            </div>

            <div className="callout info">
              <span className="icon">💡</span>
              <div>MCP configuration is stored in <code>~/.copilot/mcp-config.json</code>. You only set it up once — it persists across sessions.</div>
            </div>
          </div>
        </div>

        {/* Step 3.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">2</span>
            <h3>Create &amp; Use Skills</h3>
          </div>
          <div className="step-body">
            <p><strong>Skills</strong> are pre-built packages of expertise — they teach Copilot how to do specific complex tasks like analyzing data, prepping for meetings, or generating reports in a consistent format. Think of a skill as a trained specialist you can call on.</p>
            <p>You can create your own skills, or ask Copilot to build one for you. Just describe the task and let it scaffold the skill:</p>

            <div className="prompt-example">
              <div className="label">📦 Paste this prompt into Copilot CLI</div>
              <div className="prompt-text">Create a reusable skill called &ldquo;meeting-prep&rdquo; that, given a customer name, gathers recent communications, summarizes them, and produces an HTML briefing with talking points. Save it so it loads automatically.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Create a reusable skill called &ldquo;meeting-prep&rdquo; that gathers recent communications, summarizes them, and produces an HTML briefing...</span>
                <br /><br />
                <span className="output">📝 Scaffolding skill &ldquo;meeting-prep&rdquo;...</span>
                <br /><br />
                <span className="info">Created skill files:</span><br />
                <span className="info">  📅 meeting-prep       </span><span className="output">— Daily meeting briefing generator</span>
                <br /><br />
                <span className="output">✅ Done! The skill is ready to use.</span>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Skills are context-aware.</strong> You don&rsquo;t need to explicitly invoke them — Copilot automatically recognizes when a skill is relevant based on your question. Just ask naturally and the right skill kicks in.</div>
            </div>

            <div className="callout info">
              <span className="icon">🌐</span>
              <div><strong>Explore community skills:</strong> Browse public, reusable skills, prompts, and chat modes at <a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer">github.com/github/awesome-copilot</a> — adapt them to your own role and workflow.</div>
            </div>
          </div>
        </div>

        {/* Step 3.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">3</span>
            <h3>Use Plan Mode for Complex Tasks</h3>
          </div>
          <div className="step-body">
            <p>For complex, multi-step tasks, use <strong>Plan Mode</strong> — it lets Copilot think through the approach before executing.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI — Plan Mode</span>
              </div>
              <div className="terminal-body">
                <span className="comment"># Press Shift+Tab to switch to Plan Mode</span><br />
                <span className="output">Mode: </span><span className="highlight">📝 Plan</span>
                <br /><br />
                <span className="prompt">[plan]&gt;</span> <span className="cmd">Create a competitive analysis of HorizonCloud vs ZenithCloud for my customer Account A, using their current workloads and our pricing advantage.</span>
                <br /><br />
                <span className="info">📋 Plan:<br />  1. Query EnterpriseSuite for recent communications about Account A<br />  2. Search for Account A&rsquo;s current ZenithCloud usage patterns<br />  3. Research HorizonCloud competitive pricing for similar workloads<br />  4. Build comparison matrix with TCO analysis<br />  5. Generate executive HTML report with recommendations<br /><br />Proceed? (Press Shift+Tab to switch to Interactive mode and execute)</span>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">⌨️</span>
              <div><strong>Shift+Tab</strong> cycles between modes: <strong>Interactive</strong> (normal) &rarr; <strong>Plan</strong> (think first) &rarr; back to Interactive.</div>
            </div>
          </div>
        </div>

        {/* Step 3.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">4</span>
            <h3>Feed Your Agent Data</h3>
          </div>
          <div className="step-body">
            <p>The more relevant context you put in your working folder, the smarter your agent becomes. Use <code>@</code> to reference any file:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="comment"># Reference a specific file in your prompt</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Analyze</span> <span className="flag">@data/Q3-forecast.xlsx</span> <span className="cmd">and tell me which accounts are at risk of missing target</span>
                <br /><br />
                <span className="comment"># Reference a presentation</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Summarize</span> <span className="flag">@Strategy-as-a-Service.pptx</span> <span className="cmd">and create talking points for my VP meeting</span>
                <br /><br />
                <span className="comment"># Reference multiple files</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Compare</span> <span className="flag">@report-jan.html</span> <span className="cmd">with</span> <span className="flag">@report-feb.html</span> <span className="cmd">and highlight the key changes</span>
              </div>
            </div>

            <p>What to put in your working folder:</p>
            <ul>
              <li>📊 <strong>Data files</strong> — spreadsheets, CSVs, exports from CRM or Power BI</li>
              <li>📝 <strong>Meeting notes</strong> — transcripts, action items, decision logs</li>
              <li>📄 <strong>Templates</strong> — email templates, report formats, presentation outlines</li>
              <li>📋 <strong>Account docs</strong> — success plans, competitive briefs, architecture diagrams</li>
              <li>💡 <strong>Prompt files</strong> — your reusable prompts from Stage 2</li>
            </ul>
          </div>
        </div>

        {/* Step 3.5 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">5</span>
            <h3>Power Prompts — Your Daily Workflow</h3>
          </div>
          <div className="step-body">
            <p>Here are high-impact prompts that demonstrate what a supercharged agent can do:</p>

            <div className="prompt-example">
              <div className="label">🔍 Morning Catch-Up</div>
              <div className="prompt-text">Pull everything from my emails, Teams messages, and calendar from the last 2 business days. Identify the top 5 things that need my attention -- action items assigned to me, decisions waiting on me, meetings I need to prep for, and anything urgent. Generate this as a well-formatted HTML file organized by priority.</div>
            </div>

            <div className="prompt-example">
              <div className="label">🎯 Account 360</div>
              <div className="prompt-text">Pick my most-mentioned customer from the last week of emails and Teams messages. Pull every internal thread, email, and meeting note about them, research their latest news and earnings, and generate a polished HTML executive briefing with our engagement history, competitive landscape, and recommended next steps.</div>
            </div>

            <div className="prompt-example">
              <div className="label">📅 Meeting Prep on Autopilot</div>
              <div className="prompt-text">Look at my calendar for the next 2 business days. For each external customer meeting, pull the last 5 email and chat exchanges with that customer, summarize what we&rsquo;ve discussed recently, identify any open action items, and generate an HTML prep doc with talking points for each meeting.</div>
            </div>

            <div className="prompt-example">
              <div className="label">💰 Quick Forecast Sizing</div>
              <div className="prompt-text">My customer says they need 100M TPM of Zenith AI PayGo. Using Zenith AI list prices, generate a table in well-formatted HTML that helps me figure out how much to forecast, with options based on typical usage patterns. If you can research the customer&rsquo;s product and make an educated guess on their token ratio, factor that in.</div>
            </div>
          </div>
        </div>

        {/* Step 3.6 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">6</span>
            <h3>Pro Tips for Daily Use</h3>
          </div>
          <div className="step-body">
            <div className="feature-grid">
              <div className="feature-card">
                <h4>💾 Always ask for files</h4>
                <p>End prompts with <em>&ldquo;save this as a well-formatted HTML file&rdquo;</em> — you&rsquo;ll get beautiful documents you can open in your browser or share.</p>
              </div>
              <div className="feature-card">
                <h4>🔄 Iterate instantly</h4>
                <p>Don&rsquo;t like the output? Just say <em>&ldquo;make this more executive-ready&rdquo;</em> or <em>&ldquo;add a chart&rdquo;</em> or <em>&ldquo;make it shorter.&rdquo;</em></p>
              </div>
              <div className="feature-card">
                <h4>💬 Resume sessions</h4>
                <p>Type <code>/resume</code> to pick up a previous conversation exactly where you left off — no re-explaining needed.</p>
              </div>
              <div className="feature-card">
                <h4>⌨️ Keyboard shortcuts</h4>
                <p><strong>Esc</strong> = cancel, <strong>Ctrl+C</strong> = clear, <strong>Ctrl+T</strong> = show thinking, <strong>↑↓</strong> = command history.</p>
              </div>
              <div className="feature-card">
                <h4>🔍 /research command</h4>
                <p>Type <code>/research [topic]</code> for deep investigation using GitHub and web sources — produces a comprehensive report.</p>
              </div>
              <div className="feature-card">
                <h4>📋 /diff command</h4>
                <p>Type <code>/diff</code> to review all changes Copilot made in your current directory — great for verifying before sharing.</p>
              </div>
            </div>

            <div className="callout important">
              <span className="icon">🔒</span>
              <div><strong>Security reminder:</strong> Copilot CLI runs locally on your machine. Review your organization&rsquo;s policies and avoid putting secrets or confidential data into prompts.</div>
            </div>
          </div>
        </div>

        {/* STAGE 4 */}
        <div className="section-divider"></div>

        <div className="stage-header stage-4" id="stage-4">
          <div className="stage-label">Stage 4 of 4</div>
          <h2>🎉 Put It to Work</h2>
          <p>Your agent is ready. Here are real-world scenarios — tried and tested by people using this daily — that will fundamentally change how you work. Try one. You won&rsquo;t go back.</p>
        </div>

        {/* Step 4.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">1</span>
            <h3>🎙️ Teach Your Agent How You Communicate</h3>
          </div>
          <div className="step-body">
            <p>Your agent can learn <em>your</em> communication style by listening to your actual meetings and emails. This is one of the most powerful things you can do — it turns a generic AI into one that writes like <em>you</em>.</p>

            <div className="prompt-example">
              <div className="label">🎯 Paste this prompt into Copilot CLI</div>
              <div className="prompt-text">Look at my meeting transcripts and email threads from the past 30 days. Analyze my communication style -- how I open conversations, how I give direction, how I close emails, what phrases I repeat, whether I&rsquo;m formal or informal, how I mix languages, and how I handle pushback. Then create a &ldquo;Communication Style Profile&rdquo; section and add it to my agent instructions so you always write in my voice.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Look at my meeting transcripts and email threads from the past 30 days. Analyze my communication style...</span>
                <br /><br />
                <span className="output">🔍 Querying EnterpriseSuite for meeting transcripts (last 30 days)...<br />🔍 Querying EnterpriseSuite for sent emails (last 30 days)...<br />📝 Analyzing patterns...</span>
                <br /><br />
                <span className="info">📋 Communication Style Profile:<br /><br />  Tone: Direct and warm, high-energy, action-oriented<br />  Email style: Ultra-concise, transactional, data-first<br />  Chat style: Informal, uses &ldquo;!!!&rdquo; for emphasis<br />  Language: Mixes Portuguese and English naturally<br />  Signature phrases: &ldquo;Vamos la&rdquo;, &ldquo;o grande ponto e...&rdquo;<br />  Closing style: Always confirms next steps explicitly<br /><br />✅ Updated your agent with communication style profile.</span>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Why this matters:</strong> Once your agent knows your voice, every email it drafts, every summary it writes, every report it generates will sound like <em>you</em> — not like a robot. Your team won&rsquo;t even know it&rsquo;s AI-assisted.</div>
            </div>
          </div>
        </div>

        {/* Step 4.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">2</span>
            <h3>📬 Meeting Transcript &rarr; Executive Summary &rarr; Email</h3>
          </div>
          <div className="step-body">
            <p>Just had a customer meeting? Let Copilot pull the transcript, generate an executive summary, and send it as a follow-up email — all in one prompt.</p>

            <div className="prompt-example">
              <div className="label">🎯 Paste this prompt into Copilot CLI</div>
              <div className="prompt-text">Find my most recent video meeting with an external customer. Get the full transcript, then generate a polished executive summary with: key decisions made, action items with owners and deadlines, and next steps. Then CREATE THE EMAIL IN WORKMAIL as a follow-up, adding everyone who was invited to the meeting as recipients. Use my communication style.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Find my most recent video meeting with an external customer...</span>
                <br /><br />
                <span className="output">🔍 Searching calendar for recent external meetings...<br />📋 Found: &ldquo;Quarterly Business Review - Contoso&rdquo; (Today, 2:00 PM)<br />🎙️ Pulling transcript (47 min, 12 speakers)...<br />📝 Generating executive summary...</span>
                <br /><br />
                <span className="info">📬 Creating email in WorkMail...<br />  Adding all meeting invitees as recipients...<br /><br />  To: john@contoso.com, sarah@contoso.com, you@yourcompany.com<br />  Subject: QBR Follow-up - Key Decisions &amp; Next Steps<br /><br />  Hi team,<br /><br />  Great session today. Here&rsquo;s what we aligned on:<br /><br />  Key Decisions:<br />  1. Migrate remaining on-prem workloads to ZenithCloud by Q4<br />  2. POC for Zenith AI starts March 25<br /><br />  Action Items:<br />  - [John] Share current infra inventory by March 20<br />  - [You] Send pricing proposal for reserved instances<br />  - [Sarah] Schedule technical deep-dive with CSA team<br /><br />  Next meeting: April 10, same cadence.<br /><br />  Best regards</span>
                <br /><br />
                <span className="output">✅ Email draft created in WorkMail! Review and hit Send.</span>
              </div>
            </div>

            <div className="callout info">
              <span className="icon">⏱️</span>
              <div><strong>Time saved:</strong> What used to take 20-30 minutes (re-listening to recording, writing notes, drafting email) now takes about 60 seconds. And you&rsquo;ll never forget an action item again.</div>
            </div>
          </div>
        </div>

        {/* Step 4.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">3</span>
            <h3>🎨 Customer-Branded Presentations on the Fly</h3>
          </div>
          <div className="step-body">
            <p>Need a presentation for a customer meeting? Copilot can visit their website, extract their brand colors and style, and generate a customized presentation that looks like <em>their</em> brand — not a generic pre-built template deck.</p>

            <div className="prompt-example">
              <div className="label">🎯 Paste this prompt into Copilot CLI</div>
              <div className="prompt-text">Go to https://www.contoso.com and analyze their brand identity -- logo colors, typography style, and visual tone. Then create a 6-slide HTML presentation about our ZenithCloud migration proposal for them, using their brand colors and visual style. Include: executive summary, current state assessment, proposed architecture, migration timeline, investment overview, and next steps. Make it look premium and on-brand for them.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Go to https://www.contoso.com and analyze their brand...</span>
                <br /><br />
                <span className="output">🌐 Fetching https://www.contoso.com...<br />🎨 Analyzing brand identity:<br />  Primary color: #1B365D (navy blue)<br />  Accent color: #E87722 (orange)<br />  Font style: Clean, modern, sans-serif<br />  Visual tone: Professional, innovation-focused<br /><br />📝 Generating 6-slide presentation...<br />✅ Saved to contoso-zenithcloud-proposal.html</span>
              </div>
            </div>

            <p>Open the HTML file in your browser — you&rsquo;ll see a polished, customer-branded presentation you can present directly or convert to PowerPoint.</p>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Take it further:</strong> Say <em>&ldquo;Now add a slide comparing their current cloud spend vs. what they&rsquo;d pay on ZenithCloud with reserved instances&rdquo;</em> — Copilot will research pricing and add a data-driven comparison slide on the fly.</div>
            </div>
          </div>
        </div>

        {/* Step 4.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">4</span>
            <h3>💡 More Ideas to Explore</h3>
          </div>
          <div className="step-body">
            <p>Once you get comfortable, the possibilities are endless. Here are more real scenarios from people already using this daily:</p>

            <div className="feature-grid">
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>📊 Competitive Intel Brief</h4>
                <p><em>&ldquo;Research what HorizonCloud announced this week and create a one-page competitive brief with our counter-positioning for each announcement.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>💰 Deal Strategy Coach</h4>
                <p><em>&ldquo;I have a $2M ZenithCloud deal at risk. Pull all our recent communications with this customer and help me build a recovery strategy with specific actions for this week.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>📝 Weekly Report Generator</h4>
                <p><em>&ldquo;Generate my weekly highlights report for my manager. Pull my key wins, blockers, and pipeline updates from this week&rsquo;s emails and meetings.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🤝 Customer Relationship Map</h4>
                <p><em>&ldquo;Look at all my interactions with Contoso over the past 90 days. Map out who I&rsquo;ve been talking to, who&rsquo;s gone silent, and recommend who I should re-engage.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>📈 Pricing Scenario Builder</h4>
                <p><em>&ldquo;My customer needs 50TB of ZenithCloud Object Storage with geo-redundancy. Build me a pricing comparison table with different tier options and savings plan discounts.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🎯 QBR Deck Autopilot</h4>
                <p><em>&ldquo;Create a Quarterly Business Review deck for my top account. Pull consumption data, engagement history, success metrics, and recommendations for next quarter.&rdquo;</em></p>
              </div>
            </div>

            <div className="callout warn" style={{ marginTop: '24px' }}>
              <span className="icon">🚀</span>
              <div><strong>The golden rule:</strong> If you can describe it in English, Copilot can do it. Don&rsquo;t limit yourself to what you think AI &ldquo;should&rdquo; do — just ask. The worst that happens is it says it can&rsquo;t. The best? It saves you hours.</div>
            </div>
          </div>
        </div>

        {/* QUICK REFERENCE CARD */}
        <div className="section-divider"></div>

        <div style={{ paddingTop: '40px', paddingBottom: '48px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>📌 Quick Reference Card</h2>

          <div className="feature-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="feature-card" style={{ borderTop: '3px solid var(--blue)' }}>
              <h4>Essential Commands</h4>
              <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '0.82em', lineHeight: 2 }}>
                <code>/model</code> — Change AI model<br />
                <code>/help</code> — Show all commands<br />
                <code>/resume</code> — Resume session<br />
                <code>/compact</code> — Free up context<br />
                <code>/exit</code> — Exit CLI
              </p>
            </div>
            <div className="feature-card" style={{ borderTop: '3px solid var(--green)' }}>
              <h4>File Shortcuts</h4>
              <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '0.82em', lineHeight: 2 }}>
                <code>@file.md</code> — Include file<br />
                <code>@data/</code> — Browse folder<br />
                <code>!command</code> — Run shell cmd<br />
                <code>Shift+Tab</code> — Plan mode<br />
                <code>Ctrl+T</code> — Show thinking
              </p>
            </div>
            <div className="feature-card" style={{ borderTop: '3px solid var(--purple)' }}>
              <h4>Advanced</h4>
              <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '0.82em', lineHeight: 2 }}>
                <code>/mcp add</code> — Add data source<br />
                <code>/skills</code> — Manage skills<br />
                <code>/agent</code> — Select agent<br />
                <code>/research</code> — Deep research<br />
                <code>/plugin</code> — Manage plugins
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
