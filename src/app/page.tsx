'use client';

import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-eyebrow">🚀 Women in Tech @ São Paulo</div>
        <h1>GitHub Copilot <span>Dev Days</span></h1>
        <div className="sub trans-en">
          A dedicated enablement space to accelerate your transition to agentic development. Explore the core strategies, practical resources, and next-generation engineering patterns from the Microsoft GitHub Copilot Dev Days in São Paulo.
        </div>
        <div className="sub trans-pt">
          Um espaço de capacitação dedicado para acelerar sua transição para o desenvolvimento de agentes. Explore as estratégias essenciais, recursos práticos e padrões de engenharia de última geração do GitHub Copilot Dev Days em São Paulo.
        </div>
      </header>

      <div className="wrap">
        {/* Content Cards */}
        <main className="grid-landing">
          {/* Card 1: CLI Guide */}
          <article className="guide-card">
            <div>
              <span className="icon">💻</span>
              <div className="meta-row">
                <span className="meta-badge trans-en">Guide</span>
                <span className="meta-badge trans-pt">Guia</span>
                <span className="meta-badge">CLI Guide</span>
              </div>
              <h2 className="trans-en">GitHub Copilot CLI Getting Started Guide</h2>
              <h2 className="trans-pt">Guia de Introdução ao GitHub Copilot CLI</h2>
              <p className="trans-en">
                A step-by-step guide for business and technical users. Learn how to install PowerShell 7, Node.js, configure custom agents, connect external data via MCP servers, and use Plan Mode for advanced orchestration.
              </p>
              <p className="trans-pt">
                Um guia passo a passo para usuários técnicos e de negócios. Aprenda a instalar o PowerShell 7, o Node.js, configurar agentes personalizados, conectar dados externos via servidores MCP e usar o Modo de Planejamento para orquestração avançada.
              </p>
            </div>
            <Link href="/cli-guide" className="btn-cta trans-en">Read CLI Guide &rarr;</Link>
            <Link href="/cli-guide-pt" className="btn-cta trans-pt">Ler Guia CLI &rarr;</Link>
          </article>

          {/* Card 2: Women's Training */}
          <article className="guide-card women">
            <div>
              <span className="icon">👭</span>
              <div className="meta-row">
                <span className="meta-badge">GitHub Copilot CLI</span>
                <span className="meta-badge">VS Code</span>
              </div>
              <h2 className="trans-en">Summary of Training</h2>
              <h2 className="trans-pt">Resumo do Treinamento</h2>
              <p className="trans-en">
                Leave manual tasks behind and lead the next era of software development as an &ldquo;Agent Boss&rdquo;. An immersive, hands-on guide based on real Sales Excellence sessions, covering AI governance, context engineering, automated testing, and active orchestration of autonomous agents.
              </p>
              <p className="trans-pt">
                Deixe o trabalho manual para trás e lidere a nova era do desenvolvimento como uma verdadeira &ldquo;Agent Boss&rdquo;. Um guia imersivo baseado no treinamento real de Sales Excellence, cobrindo engenharia de contexto, governança empresarial, testes inteligentes e a orquestração prática de múltiplos agentes autônomos.
              </p>
            </div>
            <Link href="/women-training" className="btn-cta trans-en">View Training &rarr;</Link>
            <Link href="/women-training" className="btn-cta trans-pt">Ver Treinamento &rarr;</Link>
          </article>
        </main>
      </div>

      <Footer />
    </>
  );
}
