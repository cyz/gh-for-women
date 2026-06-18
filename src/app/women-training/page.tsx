'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';
import './women-training.css';

export default function WomenTraining() {
  const p2HeaderRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('paradigma');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => {
      observer.observe(s);
    });

    return () => {
      sections.forEach((s) => {
        observer.unobserve(s);
      });
    };
  }, []);

  const part1Ids = ['paradigma', 'agentes', 'demos', 'governanca', 'alucinacao', 'casos', 'adocao', 'comecar', 'qa', 'takeaways'];
  const part2Ids = ['parte2', 'sdlc', 'stack', 'contexto', 'lab', 'dogfooding', 'modelos', 'otimizacao', 'encerramento'];

  const isPart2Active = part2Ids.includes(activeSection);
  const activePart = isPart2Active ? 'parte2' : 'parte1';

  return (
    <>
      <SiteNav />

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">👩‍💻 Treinamento &middot; Training</div>
          <h1>GitHub <span>Copilot</span> for Women</h1>
          <div className="sub">
            Da usuária de IA à &ldquo;Agent Boss&rdquo;: um guia completo para deixar as tarefas manuais para trás, orquestrar um time de agentes e aplicar tudo isso com governança, responsabilidade e casos reais de Sales Excellence.
          </div>
          <div className="meta">
            <span>📅 16/jun/2026, 11h</span>
            <span>🎤 Rosemeire Oikawa (Parte 1 &mdash; visão &amp; agentes)</span>
            <span>🤝 Cynthia (Parte 2 &mdash; hands-on)</span>
            <span>🏢 Microsoft Brasil</span>
            <span>👩‍💻 Mulheres em Dev &amp; Negócios</span>
          </div>
        </div>
      </header>

      {/* Part 1 and Part 2 Navigation Bar */}
      <nav className="part-nav">
        <div className="part-nav-inner">
          <a 
            href="#paradigma" 
            className={`part-nav-btn ${activePart === 'parte1' ? 'active' : ''}`}
          >
            🎙️ Parte 1: Visão &amp; Agentes
          </a>
          <a 
            href="#parte2" 
            className={`part-nav-btn p2 ${activePart === 'parte2' ? 'active' : ''}`}
          >
            👩‍💻 Parte 2: Hands-on / Técnico
          </a>
        </div>
      </nav>

      <div style={{ paddingTop: '32px' }}>
        <div className={`training-layout ${isCollapsed ? 'collapsed' : ''}`}>
          <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
              <button 
                className="sidebar-toggle" 
                onClick={() => setIsCollapsed(!isCollapsed)}
                aria-label={isCollapsed ? "Expandir menu" : "Recolher menu"}
                title={isCollapsed ? "Expandir menu" : "Recolher menu"}
              >
                {isCollapsed ? '📁' : '📂 Recolher Menu'}
              </button>
            </div>
            <nav className="toc">
              <span className="toc-title">Parte 1 &mdash; Visão</span>
              <a href="#paradigma" className={activeSection === 'paradigma' ? 'active' : ''}>
                <span className="toc-num">1</span>
                <span className="toc-text">Mudança de paradigma com IA</span>
              </a>
              <a href="#agentes" className={activeSection === 'agentes' ? 'active' : ''}>
                <span className="toc-num">2</span>
                <span className="toc-text">Conceito central: agentes</span>
              </a>
              <a href="#demos" className={activeSection === 'demos' ? 'active' : ''}>
                <span className="toc-num">3</span>
                <span className="toc-text">Demonstrações práticas ao vivo</span>
              </a>
              <a href="#governanca" className={activeSection === 'governanca' ? 'active' : ''}>
                <span className="toc-num">4</span>
                <span className="toc-text">Governança e riscos</span>
              </a>
              <a href="#alucinacao" className={activeSection === 'alucinacao' ? 'active' : ''}>
                <span className="toc-num">5</span>
                <span className="toc-text">Alucinação e qualidade</span>
              </a>
              <a href="#casos" className={activeSection === 'casos' ? 'active' : ''}>
                <span className="toc-num">6</span>
                <span className="toc-text">Casos reais (Sales Excellence)</span>
              </a>
              <a href="#adocao" className={activeSection === 'adocao' ? 'active' : ''}>
                <span className="toc-num">7</span>
                <span className="toc-text">Framework de adoção</span>
              </a>
              <a href="#comecar" className={activeSection === 'comecar' ? 'active' : ''}>
                <span className="toc-num">8</span>
                <span className="toc-text">Playbook prático</span>
              </a>
              <a href="#qa" className={activeSection === 'qa' ? 'active' : ''}>
                <span className="toc-num">9</span>
                <span className="toc-text">Perguntas &amp; Respostas</span>
              </a>
              <a href="#takeaways" className={activeSection === 'takeaways' ? 'active' : ''}>
                <span className="toc-num">10</span>
                <span className="toc-text">Mensagens estratégicas</span>
              </a>

              <span className="toc-title">Parte 2 &mdash; Hands-on</span>
              <a href="#parte2" className={activeSection === 'parte2' ? 'active' : ''}>
                <span className="toc-num">★</span>
                <span className="toc-text">Introdução Parte 2</span>
              </a>
              <a href="#sdlc" className={activeSection === 'sdlc' ? 'active' : ''}>
                <span className="toc-num">11</span>
                <span className="toc-text">Ciclo de vida: Agentic SDLC</span>
              </a>
              <a href="#stack" className={activeSection === 'stack' ? 'active' : ''}>
                <span className="toc-num">12</span>
                <span className="toc-text">Stack de inteligência</span>
              </a>
              <a href="#contexto" className={activeSection === 'contexto' ? 'active' : ''}>
                <span className="toc-num">13</span>
                <span className="toc-text">Context Engineering</span>
              </a>
              <a href="#lab" className={activeSection === 'lab' ? 'active' : ''}>
                <span className="toc-num">14</span>
                <span className="toc-text">Lab prático: Pokédex</span>
              </a>
              <a href="#dogfooding" className={activeSection === 'dogfooding' ? 'active' : ''}>
                <span className="toc-num">15</span>
                <span className="toc-text">Testar com IA: dogfooding</span>
              </a>
              <a href="#modelos" className={activeSection === 'modelos' ? 'active' : ''}>
                <span className="toc-num">16</span>
                <span className="toc-text">Orquestração de modelos</span>
              </a>
              <a href="#otimizacao" className={activeSection === 'otimizacao' ? 'active' : ''}>
                <span className="toc-num">17</span>
                <span className="toc-text">Eficiência e custos</span>
              </a>
              <a href="#encerramento" className={activeSection === 'encerramento' ? 'active' : ''}>
                <span className="toc-num">18</span>
                <span className="toc-text">Encerramento da Cynthia</span>
              </a>
            </nav>
          </aside>

          <main className="content-main">
            {/* 1 */}
            <section id="paradigma">
            <h2 className="pink">1. Mudança de paradigma com IA</h2>
            <div className="quote">&ldquo;Não é mais SE você usa IA — é COMO você usa.&rdquo;</div>
            <p className="lead">
              A sessão abre com um reposicionamento fundamental: IA não é uma ferramenta incremental — é uma mudança de modelo de trabalho. A jornada de adoção se divide em três níveis de maturidade:
            </p>
            <div className="grid g3 progression">
              <div className="card b-blue">
                <span className="badge" style={{ background: 'var(--blue)' }}>Nível 1</span>
                <h3>Tarefas básicas</h3>
                <p>Resumir e-mails, gerar texto, perguntas pontuais ao chat.</p>
              </div>
              <div className="card b-purple">
                <span className="badge" style={{ background: 'var(--purple)' }}>Nível 2</span>
                <h3>Automação &amp; produtividade</h3>
                <p>Fluxos repetitivos automatizados, ganho de tempo recorrente.</p>
              </div>
              <div className="card b-pink">
                <span className="badge" style={{ background: 'var(--pink)' }}>Nível 3</span>
                <h3>Transformação</h3>
                <p>Criação de novos processos e negócios — IA como alavanca estratégica.</p>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section id="agentes">
            <h2 className="purple">2. O conceito central: agentes (Copilot além do chat)</h2>
            <p className="lead">
              A grande virada de mentalidade: sair do modelo de &ldquo;IA que responde perguntas&rdquo; para um <strong>agente que executa trabalho por você</strong> — de forma autônoma, recorrente e integrada ao seu fluxo diário.
            </p>
            <div className="grid g2">
              <div className="card">
                <h3 className="c-purple">O que um agente faz</h3>
                <ul className="clean">
                  <li>Executa tarefas recorrentes automaticamente (ex.: &ldquo;todo dia às 10h, atualize as informações&rdquo;)</li>
                  <li>Salva scripts e os roda sozinho, sem repetir o pedido</li>
                  <li>Trabalha em background — você &ldquo;vai tomar um café&rdquo; enquanto ele entrega</li>
                  <li>Aceita comandos por voz, sem precisar digitar</li>
                </ul>
              </div>
              <div className="card b-pink" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span className="badge" style={{ background: 'var(--pink)' }}>Exemplo vivo: a Roseta</span>
                  <h3 className="c-pink" style={{ marginBottom: '4px' }}>Automação de análise de mercado financeiro</h3>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>
                    Dispare análises complemetadas com um único clique ou comando de roteador:
                  </p>

                  <div className="terminal" style={{ margin: '8px 0', fontSize: '11.5px', boxShadow: 'none', borderRadius: '6px' }}>
                    <div className="terminal-bar" style={{ padding: '4px 10px' }}>
                      <span className="dot r" style={{ width: '8px', height: '8px' }}></span>
                      <span className="dot y" style={{ width: '8px', height: '8px' }}></span>
                      <span className="dot g" style={{ width: '8px', height: '8px' }}></span>
                      <span className="title" style={{ fontSize: '10px', marginLeft: '4px' }}>Roseta Agentic Workflow</span>
                    </div>
                    <div className="terminal-body" style={{ padding: '10px 12px', lineHeight: 1.5, color: '#c5d4dd' }}>
                      <span className="prompt">{"Roseta>"}</span> <span className="cmd">run --daily-analysis</span>
                      <br />
                      <span className="output">
                        🔍 Analisando tickers de mercado na API...
                        <br />
                        📊 Tickers PETR4 (+2.1%), VALE3 (-0.5%), ITUB4 (+1.2%)
                        <br />
                        📝 Redigindo sumário executivo em Markdown...
                        <br />
                        📧 Rascunhando e-mail para clientes no Outlook...
                        <br />
                        ✅ E-mail pronto na pasta de Rascunhos!
                      </span>
                    </div>
                  </div>
                </div>
                <p style={{ marginTop: '8px', fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.4 }}>
                  Tudo encadeado por um único agente de alta performance, de ponta a ponta, sem digitação manual.
                </p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section id="demos">
            <h2 className="blue">3. Demonstrações práticas ao vivo</h2>
            <p className="lead">
              Rosemeire demonstrou ao vivo quatro cenários reais, com o agente operando de ponta a ponta em ferramentas do cotidiano corporativo.
            </p>
            <div className="timeline">
              <div className="ti">
                <b>Análise de mercado + e-mail automático</b>
                <p>O agente gera análise, resumo e o e-mail completo no Outlook — execução em background enquanto o usuário faz outra coisa.</p>
              </div>
              <div className="ti">
                <b>Comunicação automatizada (Outlook + Teams)</b>
                <p>&ldquo;Gera um e-mail com o resumo e adiciona todos do convite.&rdquo; Resultado: e-mail com resumo executivo, destinatários automáticos e formatação pronta.</p>
              </div>
              <div className="ti">
                <b>Análise de reuniões</b>
                <p>A partir de uma reunião, o agente entrega resumo, análise detalhada e próximos passos — enriquecidos com benchmarks, probabilidades e insights.</p>
              </div>
              <div className="ti">
                <b>Personalização do agente</b>
                <p>Treinar o agente com seus e-mails, reuniões e chats para que ele replique seu estilo de comunicação.</p>
              </div>
            </div>
            <div className="callout purple" style={{ marginTop: '16px' }}>
              <strong>Mensagem-chave</strong>
              Transcript não é valor. O valor está na <strong>análise + contexto + ação</strong> que o agente produz em cima dos dados.
            </div>
          </section>

          {/* 4 */}
          <section id="governanca">
            <h2 className="red">4. Governança e riscos</h2>
            <p className="lead">
              Mais poder exige mais responsabilidade. A sessão abordou os principais vetores de risco que surgem quando agentes de IA operam com autonomia em ambientes corporativos:
            </p>
            <div className="grid g4">
              <div className="card b-red">
                <h3 className="c-red">Prompt injection</h3>
                <p>Instruções maliciosas que desviam o comportamento do agente.</p>
              </div>
              <div className="card b-red">
                <h3 className="c-red">Shadow IT</h3>
                <p>Uso de IA fora da governança corporativa.</p>
              </div>
              <div className="card b-red">
                <h3 className="c-red">Phishing com IA</h3>
                <p>Ataques mais convincentes e em escala.</p>
              </div>
              <div className="card b-red">
                <h3 className="c-red">Segurança &amp; compliance</h3>
                <p>Proteção de dados e aderência regulatória.</p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section id="alucinacao">
            <h2 className="orange">5. Alucinação e controle de qualidade</h2>
            <div className="grid g2">
              <div className="card">
                <h3 className="c-orange">Como evitar que a IA &ldquo;invente&rdquo; dados</h3>
                <ul className="clean" style={{ marginBottom: '12px' }}>
                  <li>Definir <strong>boundaries claros</strong> (fronteiras rígidas) para o agente</li>
                  <li>Instruções explícitas: &ldquo;não invente dados&rdquo;, usar apenas fontes oficiais</li>
                  <li>Forçar a inclusão de <strong>links de origem</strong> e referências em toda resposta</li>
                </ul>
                <div className="prompt-example" style={{ margin: '8px 0 0 0', fontSize: '12.5px' }}>
                  <div className="label" style={{ color: 'var(--orange)' }}>💡 Diretriz Recomendada</div>
                  <div className="prompt-text" style={{ color: 'var(--gray-90)' }}>
                    &ldquo;Responda apenas se houver comprovação numérica direta no anexo. Nunca estime ou presuma tendências ocultas.&rdquo;
                  </div>
                </div>
              </div>
              <div className="callout red" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <strong>Caso real demonstrado</strong>
                  <br />
                  Durante a demo, o agente admitiu abertamente que &ldquo;criou um dado simbólico&rdquo; por falta de barreira explícita.
                  <br />
                  Foi corrigido na hora com instruções de barreira adequadas.
                </div>
                <div style={{ marginTop: '12px', fontSize: '13px', borderTop: '1px dotted rgba(209, 52, 56, 0.3)', paddingTop: '8px' }}>
                  <strong>Lição Prática:</strong> alucinação = falta de restrições adequadas. A responsabilidade final da curadoria de dados é sempre nossa (humana).
                </div>
              </div>
            </div>
            <div className="quote" style={{ borderColor: 'var(--purple)', background: '#F6F1FB' }}>
              &ldquo;O agente é seu — você é responsável pelo que ele faz.&rdquo;
            </div>
          </section>

          {/* 6 */}
          <section id="casos">
            <h2 className="green">6. Casos reais de Sales Excellence</h2>
            <p className="lead">
              A Rosemeire apresentou resultados gerados diretamente com dados reais da área de Sales Excellence — não protótipos, mas ferramentas em uso operacional.
            </p>
            <div className="grid g3">
              <div className="card b-green">
                <h3 className="c-green">Control Tower</h3>
                <p>Dashboard de fechamento com visão diária dos indicadores do quarter.</p>
              </div>
              <div className="card b-green">
                <h3 className="c-green">Pipeline Heatmap</h3>
                <p>Visão por cliente/vendedor e evolução das oportunidades.</p>
              </div>
              <div className="card b-green">
                <h3 className="c-green">Automação de Teams</h3>
                <p>Um botão gera a mensagem no Teams já com os dados do CRM.</p>
              </div>
            </div>
            <div className="grid g2" style={{ marginTop: '16px' }}>
              <div className="callout green">
                <strong>Impacto direto</strong>
                <br />
                Substituiu de <strong>10 a 30 planilhas de Excel</strong> mantidas manualmente por dashboards vivos e atualizados automaticamente.
              </div>
              <div className="callout">
                <strong>Equação de produtividade</strong>
                <br />
                Configuração inicial de aproximadamente 2 horas. Todas as atualizações seguintes passam a ser automáticas. Investimento pontual que gera escala contínua.
              </div>
            </div>
          </section>

          {/* 7 */}
          <section id="adocao">
            <h2 className="purple">7. Framework de adoção (3 níveis)</h2>
            <div className="level">
              <div className="lv b-blue">
                <div className="n c-blue">Nível 1</div>
                <h3>Individual</h3>
                <p>Automação pessoal — comece resolvendo sua própria dor.</p>
              </div>
              <div className="lv b-purple">
                <div className="n c-purple">Nível 2</div>
                <h3>Departamental</h3>
                <p>Escala com apoio da liderança e padrões compartilhados.</p>
              </div>
              <div className="lv b-pink">
                <div className="n c-pink">Nível 3</div>
                <h3>Organizacional</h3>
                <p>Alinhamento com segurança, governança e estratégia.</p>
              </div>
            </div>
          </section>

          {/* 8 */}
          <section id="comecar">
            <h2 className="pink">8. Como começar — playbook prático</h2>
            <div className="steps">
              <div className="st">
                <div>
                  <b>Escolha uma dor real</b> Um problema concreto e recorrente que consome seu tempo.
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Nomeie o agente</b> Dê identidade e propósito a ele.
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Defina como ele trabalha</b> Instruções, boundaries e tom.
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Conecte os dados corretos</b> Fontes oficiais e confiáveis.
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Comece pequeno</b> Itere e expanda a partir de uma vitória rápida.
                </div>
              </div>
            </div>
          </section>

          {/* 9 */}
          <section id="qa">
            <h2 className="blue">9. Perguntas &amp; Respostas</h2>
            <div className="qa">
              <div className="q">
                <div className="qq">A IA pode errar / inventar dados?</div>
                <div className="aa">Sim, quando não há instruções claras. Solução: definir regras explícitas e exigir fontes/links de origem.</div>
              </div>
              <div className="q">
                <div className="qq">A IA pode tomar decisões automaticamente?</div>
                <div className="aa">Não totalmente. O usuário mantém a responsabilidade final sobre as ações do agente.</div>
              </div>
              <div className="q">
                <div className="qq">A IA pode recomendar investimentos?</div>
                <div className="aa">Não diretamente, por questões de compliance/regulação. Pode fornecer dados para apoiar a análise humana.</div>
              </div>
            </div>
          </section>

          {/* 10 */}
          <section id="takeaways">
            <h2 className="green">10. Principais mensagens estratégicas</h2>
            <ul className="clean green">
              <li><strong>IA é mudança de modelo de trabalho</strong>, não ferramenta incremental.</li>
              <li>O valor está em <strong>agentes + automação + integração com dados</strong>.</li>
              <li>Prompting importa, mas o <strong>design de agentes é o diferencial</strong>.</li>
              <li><strong>Governança e responsabilidade</strong> são críticas desde o início.</li>
              <li>Adoção deve <strong>começar individual e escalar</strong> para o time e a organização.</li>
            </ul>
            <div className="callout purple" style={{ marginTop: '16px' }}>
              <strong>Para mulheres em Dev &amp; Negócios</strong>
              <br />
              A tese central da sessão: sair das tarefas manuais e assumir o papel de <strong>&ldquo;Agent Boss&rdquo;</strong> — quem orquestra um time de agentes — começando hoje, pequeno, com uma dor real.
            </div>
          </section>

          {/* ============ PARTE 2 — CYNTHIA (HANDS-ON) ============ */}
          <div className="section-divider"></div>

          <section id="parte2" style={{ marginTop: '48px' }} ref={p2HeaderRef}>
            <div style={{ background: 'linear-gradient(135deg,#201F1E 0%,#2B2B2B 50%,#005A9E 100%)', color: '#fff', borderRadius: '14px', padding: '32px 28px 26px' }}>
              <div className="kicker" style={{ opacity: .8, letterSpacing: '.14em' }}>Parte 2 &nbsp;•&nbsp; Hands-on com GitHub Copilot no VS Code</div>
              <h2 style={{ color: '#fff', fontSize: '24px', margin: '10px 0 8px' }}>Aplicação prática e fluxo de trabalho no VS Code</h2>
              <p style={{ fontSize: '15px', color: '#B3D7F2', maxWidth: '760px' }}>
                Nesta etapa técnica, exploramos as práticas de engenharia de software demonstradas por Cynthia Zanoni no VS Code. A partir de abordagens modernas de desenvolvimento, detalhamos como estruturar o contexto de trabalho, orquestrar múltiplos agentes autônomos e consolidar aprendizados em habilidades reutilizáveis integradas diretamente ao repositório.
              </p>
            </div>
          </section>

          {/* 11 */}
          <section id="sdlc">
            <h2 className="pink">11. O Ciclo de Vida Agêntico de Software (Agentic SDLC)</h2>
            <p className="lead">
              Cynthia introduziu a sessão com uma reflexão sobre a evolução do desenvolvimento de software e a transição das ondas de uso de IA, destacando o papel fundamental do <strong>Agentic SDLC</strong> (Ciclo de Vida de Desenvolvimento de Software Agêntico):
            </p>

            <div className="grid g3 progression" style={{ marginBottom: '24px' }}>
              <div className="card b-purple">
                <span className="badge" style={{ background: 'var(--purple)' }}>Onda 1 (2021-2023)</span>
                <h3>Pair Programmer</h3>
                <p style={{ fontWeight: 600, color: 'var(--purple)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Code completion</p>
                <p>&ldquo;Na primeira onda, o Copilot funcionava como um parceiro de pair programming, ajudando no preenchimento de código e na produtividade do desenvolvedor.&rdquo;</p>
              </div>
              <div className="card b-blue">
                <span className="badge" style={{ background: 'var(--blue)' }}>Onda 2 (2024-Presente)</span>
                <h3>Beyond Pair Programmers</h3>
                <p style={{ fontWeight: 600, color: 'var(--blue)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Agentic SDLC</p>
                <p>&ldquo;Na segunda onda, expandimos esse escopo, com os agentes passando a atuar em todo o SDLC, o Ciclo de Vida de Desenvolvimento de Software Agêntico.&rdquo;</p>
              </div>
              <div className="card b-pink">
                <span className="badge" style={{ background: 'var(--pink)' }}>Onda 3 (2026+)</span>
                <h3>Teams + Agents</h3>
                <p style={{ fontWeight: 600, color: 'var(--pink)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Hybrid Teams</p>
                <p>&ldquo;Na terceira onda, mudamos para equipes híbridas, onde desenvolvedores e agentes trabalham juntos como um único time.&rdquo;</p>
              </div>
            </div>

            <p className="lead" style={{ marginTop: '32px' }}>
              A transição para o desenvolvimento agêntico altera profundamente o papel do engenheiro de software, movendo-o de tarefas manuais repetitivas para a supervisão estratégica, arquitetura e controle de qualidade. Veja os benefícios e transformações estruturadas apresentadas pela Cynthia:
            </p>
            <div className="grid g3" style={{ marginBottom: '24px' }}>
              <div className="card b-pink">
                <h3>De manual &rarr; orquestrado</h3>
                <p>O foco deixa de ser &ldquo;digitar linhas de código&rdquo; e passa a ser a orquestração de fluxos complexos, controle de contexto e definição de limites claros para que múltiplos agentes atuem em sinergia.</p>
              </div>
              <div className="card b-purple">
                <h3>De execução &rarr; inteligência</h3>
                <p>Atividades rotineiras (como geração de boilerplate, testes unitários simples e refatoração básica) são delegadas, liberando o desenvolvedor para focar em design de sistemas, segurança, robustez e inovação.</p>
              </div>
              <div className="card b-blue">
                <h3>De individual &rarr; escalável</h3>
                <p>A produtividade individual é potencializada pela capacidade de disparar tarefas assíncronas de longa duração (fire-and-forget), permitindo que um único engenheiro gerencie múltiplos fluxos de entrega paralelos com governança e auditoria integradas.</p>
              </div>
            </div>
          </section>

          {/* 12 */}
          <section id="stack">
            <h2 className="purple">12. A stack de inteligência: Os componentes de personalização</h2>

            <p className="lead">
              O termo <strong>Desenvolvimento Agentic</strong> representa uma mudança de paradigma na forma como usamos IA. Se no modelo tradicional (Chat) você faz uma pergunta e recebe uma resposta, no modelo Agentic você dá um objetivo e a IA planeja, executa, corrige a si mesma e utiliza ferramentas para concluir a tarefa.
            </p>

            <div style={{ background: 'var(--gray-10)', border: '1px solid var(--line)', borderRadius: '12px', padding: '22px', marginBottom: '28px' }}>
              <h3 style={{ marginBottom: '12px', color: 'var(--purple)', fontSize: '16px' }}>O que é Harness Engineering?</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--muted)', marginBottom: '14px' }}>
                <strong>Harness Engineering</strong> é a disciplina de projetar a infraestrutura, as regras e as restrições que envolvem um modelo de IA (LLM), transformando-o de um simples chatbot em um agente autônomo confiável. Na prática, o Modelo é o &ldquo;motor&rdquo; (o que pensa) e o Harness é o &ldquo;carro&rdquo; (o ambiente, as ferramentas e os limites que permitem que a IA faça o trabalho). Abaixo, veja como os termos do seu projeto se encaixam nessa arquitetura:
              </p>
            </div>

            <div className="grid g3">
              {/* Componente 1: Instruções */}
              <div className="card b-purple">
                <span className="badge" style={{ background: 'var(--purple)' }}>Instruções</span>
                <h3>*.instructions.md</h3>
                <p style={{ fontWeight: 600, color: 'var(--purple)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Regras sempre ativas</p>
                <p>Começamos pelas <strong>Instruções</strong>, as diretrizes permanentes do projeto — o nosso &ldquo;código de conduta&rdquo;. É aqui que ficam os padrões de arquitetura e boas práticas que a IA precisa respeitar em toda interação.</p>
                <ul className="clean" style={{ marginTop: '12px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Sempre no contexto global</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Carregadas e injetadas a cada prompt</li>
                  <li style={{ fontSize: '13px', color: 'var(--red)' }}>✕ Não incluem scripts pesados</li>
                </ul>
              </div>

              {/* Componente 2: Copilot Instructions */}
              <div className="card b-orange">
                <span className="badge" style={{ background: 'var(--orange)' }}>Repositório</span>
                <h3>copilot-instructions.md / AGENTS.md</h3>
                <p style={{ fontWeight: 600, color: 'var(--orange)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Contexto do projeto</p>
                <p>Tudo isso flutua dentro do contexto das <strong>Copilot Instructions / AGENTS.md</strong> — o &ldquo;clima&rdquo; do projeto: estilo de código, dependências específicas e estrutura de pastas. Atualmente, as instruções do Copilot de repositório podem ser centralizadas e configuradas no arquivo <code>AGENTS.md</code> na raiz do repositório, garantindo uniformidade técnica.</p>
                <div className="file-mockup" style={{ margin: '8px 0', fontSize: '11px' }}>
                  <div className="file-mockup-bar" style={{ padding: '4px 10px' }}>
                    <span className="tab">AGENTS.md</span>
                  </div>
                  <div className="file-mockup-body" style={{ padding: '10px', lineHeight: '1.4' }}>
                    <span className="line-num">1</span><span className="md-h1"># Code Style</span>
                    <br />
                    <span className="line-num">2</span><span className="md-bullet">-</span> <span className="md-text">Prefer functional components</span>
                    <br />
                    <span className="line-num">3</span><span className="md-bullet">-</span> <span className="md-text">Always write Vitest tests</span>
                  </div>
                </div>
                <ul className="clean" style={{ marginTop: '12px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Define estilo, estrutura e empacotamento</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Inclui documentação e autopromoção</li>
                  <li style={{ fontSize: '13px', color: 'var(--red)' }}>✕ Escopo limitado ao projeto</li>
                </ul>
              </div>

              {/* Componente 3: Prompts */}
              <div className="card b-red">
                <span className="badge" style={{ background: 'var(--red)' }}>Dicionário</span>
                <h3>**.prompt.md</h3>
                <p style={{ fontWeight: 600, color: 'var(--red)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Ferramentas de Precisão</p>
                <p>Já os <strong>Prompts</strong> são nossas ferramentas de precisão — comandos sob demanda, como o <code>/security-review</code>. Servem para tarefas pontuais e reutilizáveis que acionamos manualmente, quando precisamos de um olhar específico.</p>
                <div className="file-mockup" style={{ margin: '8px 0', fontSize: '11px' }}>
                  <div className="file-mockup-bar" style={{ padding: '4px 10px' }}>
                    <span className="tab">security-check.prompt.md</span>
                  </div>
                  <div className="file-mockup-body" style={{ padding: '10px', lineHeight: '1.4' }}>
                    <span className="line-num">1</span><span className="md-h1"># Description: Audit files</span>
                    <br />
                    <span className="line-num">2</span><span className="md-h2">system:</span>
                    <br />
                    <span className="line-num">3</span><span className="md-text">Scan selected blocks for OWASP top 10</span>
                  </div>
                </div>
                <ul className="clean" style={{ marginTop: '12px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Invocáveis e atitvados manualmente (/slash)</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Repositório de tarefas frequentes e reutilizáveis</li>
                  <li style={{ fontSize: '13px', color: 'var(--red)' }}>✕ Não persistentes no histórico</li>
                </ul>
              </div>

              {/* Componente 4: Skills */}
              <div className="card b-green">
                <span className="badge" style={{ background: 'var(--green)' }}>Mais Habilidades</span>
                <h3>SKILL.md</h3>
                <p style={{ fontWeight: 600, color: 'var(--green)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Habilidades técnicas</p>
                <p>Subindo um nível, temos as <strong>Skills</strong> — as habilidades técnicas que carregamos no sistema. São scripts, templates e runbooks que dão à IA capacidade de executar workflows complexos de forma padronizada, garantindo resultado consistente toda vez que a skill é invocada.</p>
                <ul className="clean" style={{ marginTop: '12px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Podem incluir scripts e rotinas acionáveis</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Carregadas e executadas só quando necessárias</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Invocáveis pelo nome de forma unificada</li>
                  <li style={{ fontSize: '13px', color: 'var(--red)' }}>✕ Sem interface ou janela de contexto própria</li>
                </ul>
              </div>

              {/* Componente 5: Agentes */}
              <div className="card b-blue">
                <span className="badge" style={{ background: 'var(--blue)' }}>Especialista</span>
                <h3>*.agent.md</h3>
                <p style={{ fontWeight: 600, color: 'var(--blue)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Personas Especializadas</p>
                <p>E chegamos aos <strong>Agentes</strong> — a evolução lógica dessa estrutura. Um agente não é só um script: é uma persona especializada. Ele combina instruções, ferramentas e skills para atuar com autonomia em domínios específicos. É o seu especialista em banco de dados ou o seu engenheiro de QA digital.</p>
                <div className="file-mockup" style={{ margin: '8px 0', fontSize: '11px' }}>
                  <div className="file-mockup-bar" style={{ padding: '4px 10px' }}>
                    <span className="tab">db-specialist.agent.md</span>
                  </div>
                  <div className="file-mockup-body" style={{ padding: '10px', lineHeight: '1.4' }}>
                    <span className="line-num">1</span><span className="md-h1"># Database Optimizer Agent</span>
                    <br />
                    <span className="line-num">2</span><span className="md-h2">tools:</span> <span className="md-text">[explainQueryPlan, listIndexes]</span>
                    <br />
                    <span className="line-num">3</span><span className="md-text">Refatore consultas para menores RUs</span>
                  </div>
                </div>
                <ul className="clean" style={{ marginTop: '12px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Ferramentas, permissões e acessos exclusivos</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Janela de contexto separada para foco fechado</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Suporte para autodelegação entre agentes</li>
                  <li style={{ fontSize: '13px', color: 'var(--red)' }}>✕ Nem sempre herdam o contexto global</li>
                </ul>
              </div>

              {/* Componente 6: Hooks */}
              <div className="card b-pink">
                <span className="badge" style={{ background: 'var(--pink)' }}>Gatilhos</span>
                <h3>hooks / settings.json</h3>
                <p style={{ fontWeight: 600, color: 'var(--pink)', fontSize: '13px', margin: '-4px 0 8px 0' }}>Gatilhos Automáticos</p>
                <p>Os <strong>Hooks</strong> atuam como gatilhos e proteções automáticas. São scripts que rodam em eventos do ciclo de vida do agente (como antes/depois de ferramentas ou no início da sessão) para validar, sinalizar, auditar e colocar barreiras em operações críticas em background.</p>
                <ul className="clean" style={{ marginTop: '12px' }}>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Disparados por eventos em background para rodar scripts/comandos</li>
                  <li style={{ fontSize: '13px', color: 'var(--green)' }}>✓ Servem para colocar barreiras, avisos e validar ações</li>
                  <li style={{ fontSize: '13px', color: 'var(--red)' }}>✕ Não tomam decisões lógicas sozinhos</li>
                </ul>
              </div>
            </div>

            <div className="callout" style={{ marginTop: '20px', borderLeftColor: 'var(--pink)', background: '#FFF5F9' }}>
              <strong>Curiosidade — De onde vem o famoso &ldquo;42&rdquo;?</strong>
              <br />
              Você já reparou que ao pedir um número aleatório no chat de IA, ela adora responder &ldquo;42&rdquo;? Isso acontece por conta do viés cultural nos dados com que ela foi instruída (uma homenagem à saga "O Guia do Mochileiro das Galáxias"). Isso prova como a inteligência repete o que consome, deixando nítido o quanto é importante guiarmos a IA com contexts claros e focados para não termos respostas genéricas!
            </div>
          </section>

          {/* 13 */}
          <section id="contexto">
            <h2 className="orange">13. Context Engineering &amp; a janela de contexto</h2>
            <p className="lead border-orange">
              Um dos pontos mais acionáveis da sessão: a qualidade da resposta da IA depende diretamente da qualidade do contexto que você fornece. Aprender a gerenciar esse contexto é o que separa bons resultados de resultados excepcionais.
            </p>
            <div className="grid g2">
              <div className="card b-orange">
                <h3>O que é Context Engineering</h3>
                <p>Escrever prompts melhores <strong>+</strong> estruturar o ambiente. Não é só &ldquo;falar bonito&rdquo; com a IA — é montar o cenário certo para ela trabalhar.</p>
              </div>
              <div className="card b-red">
                <h3>Janela de contexto tem limite</h3>
                <p>Cada chat possui uma janela de contexto independente. Sobrecarregar o histórico com múltiplos assuntos ou arquivos excessivos gera dispersão e confusão.</p>
              </div>
            </div>
            <div className="quote">&ldquo;Se você mistura assuntos no mesmo chat... seu bolo fica com sabor de churrasco.&rdquo;</div>
            <div className="callout purple" style={{ marginTop: '12px' }}>
              <strong>Tradução prática:</strong> mantenha cada conversa focada em um objetivo. Para um assunto novo, abra um novo chat e feche as abas irrelevantes no editor.
            </div>
          </section>

          {/* 14 */}
          <section id="lab">
            <h2 className="blue">14. Lab prático: construindo um Pokédex ao vivo</h2>
            <p className="lead">
              Para tornar os conceitos tangíveis, Cynthia conduziu um lab ao vivo guiando as participantes desde um repositório em branco até um app completamente funcional — sem escrever uma linha de código manualmente. Temos um workshop guiado disponível em:
            </p>
            <div className="card b-blue" style={{ padding: '28px', backgroundColor: 'var(--gray-10)', border: '1px solid var(--line)', borderRadius: '16px', marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '24px' }}>🚀</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--ink)' }}>Repositório do Workshop Guiado</h3>
                  <p style={{ margin: '2px 0 0 0', fontSize: '13.5px', color: 'var(--muted)' }}>
                    Acesse o código de partida e as instruções completas do Lab
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '10px', padding: '14px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.01)' }}>
                <code style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: 600 }}>github.com/cyz/devdays-pokedex</code>
                <a 
                  href="https://github.com/cyz/devdays-pokedex" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="badge" 
                  style={{ background: 'var(--blue)', color: 'white', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Abrir Repositório
                </a>
              </div>

              <div style={{ background: 'rgba(59, 130, 246, 0.03)', border: '1px solid rgba(59, 130, 246, 0.1)', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--blue)', margin: '0 0 12px 0', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  📦 O que já vem pronto no starter-kit
                </h4>
                
                <ul className="clean" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', padding: 0, margin: '0 0 16px 0' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>✓</span> 1. Carregamento inicial de Pokémons
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>✓</span> 2. Busca por nome ou ID
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>✓</span> 3. Grid de cards com estado de seleção
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: 'bold' }}>✓</span> 4. Paginação com &ldquo;Carregar mais&rdquo;
                  </li>
                </ul>

                <p style={{ fontSize: '12.5px', color: 'var(--muted)', margin: 0, borderTop: '1px dashed var(--line)', paddingTop: '12px', lineHeight: '1.4' }}>
                  As funcionalidades avançadas (favoritos, descoberta aleatória, team builder, compartilhamento etc.) são implementadas ao longo do workshop.
                </p>
              </div>
            </div>

            <div className="steps">
              <div className="st">
                <div>
                  <b>Ambiente de desenvolvimento</b>
                  <p style={{ marginTop: '4px', color: 'var(--muted)' }}>VS Code (local) ou GitHub Codespaces (nuvem). Recomendação: se você não tem ambiente, use Codespaces — funciona &ldquo;100% online&rdquo;.</p>
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Rodar a aplicação</b>
                  <p style={{ marginTop: '4px', color: 'var(--muted)' }}>Rode no seu terminal para colocar a UI básica do Pokédex no ar:</p>
                  <div className="terminal" style={{ margin: '8px 0', fontSize: '11.5px', boxShadow: 'none', maxWidth: '380px' }}>
                    <div className="terminal-bar" style={{ padding: '4px 10px' }}>
                      <span className="dot r" style={{ width: '8px', height: '8px' }}></span>
                      <span className="dot y" style={{ width: '8px', height: '8px' }}></span>
                      <span className="dot g" style={{ width: '8px', height: '8px' }}></span>
                      <span className="title" style={{ fontSize: '10px' }}>zsh</span>
                    </div>
                    <div className="terminal-body" style={{ padding: '10px 12px', lineHeight: '1.4' }}>
                      <span className="prompt">$</span> <span className="cmd">npm install &amp;&amp; npm run dev</span>
                      <br />
                      <span className="output">✓ ready in 352ms (Local: http://localhost:5173 / VITE)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Gerar a inteligência do projeto</b>
                  <p style={{ marginTop: '4px', color: 'var(--muted)' }}>Inicie com o comando <code>/init</code> no chat para que o Copilot varra o projeto inteiro e monte o escopo do tech lead:</p>
                  <div className="prompt-example" style={{ margin: '8px 0', fontSize: '11px', padding: '10px 14px' }}>
                    <div className="label" style={{ color: 'var(--purple)' }}>💬 Chat Copilot</div>
                    <div className="prompt-text">/init</div>
                  </div>
                </div>
              </div>
              <div className="st">
                <div>
                  <b>Resultado final</b>
                  <p style={{ marginTop: '4px', color: 'var(--muted)' }}>Pokédex com UI, sistema de favoritos e seleção de time. Não é um app de produção — é uma demonstração do <strong>fluxo de desenvolvimento guiado por IA</strong>.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 15 */}
          <section id="dogfooding">
            <h2 className="green">15. Testar com IA (dogfooding) e transformar feedback em Skill</h2>
            <p className="lead">
              Um padrão avançado demonstrado ao vivo: usar o próprio Copilot como revisor do trabalho que ele ajudou a criar — e depois transformar esse comportamento em um ativo permanente do repositório.
            </p>
            <div className="timeline">
              <div className="ti">
                <b>Prompt de teste</b>
                <p>&ldquo;Teste meu Pokédex e me dê um feedback honesto.&rdquo; O Copilot simulou uso real e devolveu uma avaliação.</p>
              </div>
              <div className="ti">
                <b>Feedback recebido</b>
                <p>O app funcionava, mas não era envolvendo — faltava interação e animações.</p>
              </div>
              <div className="ti">
                <b>Virar Skill</b>
                <p>Com <code>/create-skill</code>, o agente de teste virou uma <strong>skill reutilizável</strong>, salva como ativo estruturado no repositório (<code>.github/skills/...</code>).</p>
              </div>
            </div>
            <div className="callout green" style={{ marginTop: '14px' }}>
              <strong>Insight — De Padrão a Skill:</strong>
              <br />
              Quando conseguimos definir um padrão claro de prompt ou um fluxo de validação bem-sucedido, podemos transformar esse aprendizado em uma <strong>Skill</strong> (.github/skills/). Isso converte processos informais em ativos técnicos reutilizáveis e versionados no repositório, garantindo que qualquer desenvolvedor ou agente virtual herde exatamente a mesma capacidade técnica e lógica de forma padronizada.
            </div>
          </section>

          {/* 16 */}
          <section id="modelos">
            <h2 className="purple">16. Plan vs Execução &amp; orquestração de modelos</h2>

            {/* Caixinha Comparativa de Modos do Chat */}
            <div style={{ background: 'var(--gray-10)', border: '1px solid var(--line)', borderRadius: '12px', padding: '20px', marginBottom: '28px' }}>
              <h4 style={{ color: 'var(--purple)', fontSize: '15px', marginBottom: '10px' }}>⚡ Resumo Rápido de Seleção de Modo</h4>
              <div style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--muted)' }}>
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  <li style={{ marginBottom: '6px' }}><strong>Use Ask Mode</strong> se você quer apenas entender código alheio, calcular complexidade algorítmica ou debugar sem alterar o workspace.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Use Plan Mode</strong> quando precisar criar uma nova arquitetura multi-arquivos com análise prévia de risco e aprovação da estrutura lógica antes da escrita bruta.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Use Agent Mode</strong> para delegar a implementação prática de uma feature ou refatoração pesada definida no plano, deixando o agente interagir com ferramentas locais de forma focada.</li>
                  <li><strong>Use Custom Agents (AGENTS.md)</strong> para ditar instruções personalizadas, personas, regras e ferramentas específicas de um domínio ou repositório, automatizando tarefas sob medida.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 17 */}
          <section id="otimizacao">
            <h2 className="red">17. Melhores práticas de desempenho, eficiência e custos</h2>
            <p className="lead">
              Para escalar o uso de IA corporativa com máxima eficiência conceitual, a engenharia foca em estruturação profissional de contexto active:
            </p>
            <ul className="clean red" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px', paddingLeft: 0 }}>
              <li style={{ background: 'var(--gray-10)', border: '1px solid var(--line)', padding: '16px', borderRadius: '10px' }}>
                <strong style={{ color: 'var(--ink)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>1. Gestão Seletiva de Contexto Ativo (Menções Explícitas)</strong>
                <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.4', display: 'block' }}>
                  Evite manter dezenas de abas abertas de forma passiva. Embora o Copilot utilize as abas abertas no editor como contexto implícito para preencher autocompletes, prefira citar arquivos explicitamente no chat técnico usando referências (como <code>#file:package.json</code> or <code>#file:button.tsx</code>). Isso reduz o consumo desnecessário de tokens na janela ativa, evita ruídos de outros módulos distantes e garante sugestões extremamente assertivas.
                </span>
              </li>
              <li style={{ background: 'var(--gray-10)', border: '1px solid var(--line)', padding: '16px', borderRadius: '10px' }}>
                <strong style={{ color: 'var(--ink)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>2. Sessões Isoladas e Monotemáticas (Chats Desacoplados por task)</strong>
                <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.4', display: 'block' }}>
                  Mantenha cada janela de chat dedicada a uma única tarefa específica (ex: depurar uma consulta SQL demorada). Ao mudar de escopo técnico para focar no design de componentes CSS, execute o comando de limpar histórico ou crie uma nova sessão de chat. Misturar rotinas de código polui o histórico de curto-prazo da IA, gerando viés técnico indesejado ou referências obsoletas de outras tarefas.
                </span>
              </li>
              <li style={{ background: 'var(--gray-10)', border: '1px solid var(--line)', padding: '16px', borderRadius: '10px' }}>
                <strong style={{ color: 'var(--ink)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>3. Ciclos Incrementais de Feedback e Loop de Teste Automatizado</strong>
                <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.4', display: 'block' }}>
                  Divida entregas complexas em pequenas etapas incrementais, testando e validando cada sub-rotina de forma contínua em seu terminal (por ex: rodando <code>npm run test</code> or <code>npm run lint</code>). Ao detectar falhas de compilação ou regressões técnicas, copie o log de erro ou use referências diretas de terminal ativo para solicitar feedback cirúrgico de depuração ao invés de reenviar blocos colossais de código.
                </span>
              </li>
              <li style={{ background: 'var(--gray-10)', border: '1px solid var(--line)', padding: '16px', borderRadius: '10px' }}>
                <strong style={{ color: 'var(--ink)', fontSize: '15px', display: 'block', marginBottom: '4px' }}>4. Shift-Left de Engenharia focado na Governança e Regras de Negócio</strong>
                <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.4', display: 'block' }}>
                  Com os agentes digitais assumindo a geração pesada de boilerplates, eleve a atuação da equipe para o design da arquitetura de software e governança corporativa. Desenhe e formalize as restrições arquiteturais e de estilo no arquivo <code>AGENTS.md</code> (ou no legado <code>copilot-instructions.md</code>) na raiz do repositório. Desta forma, a IA se encarrega de auto-auditar suas sugestões contra regras estritas (como padrões de segurança OWASP e restrições de bibliotecas autorizadas) em tempo de digitação, economizando dezenas de horas em code reviews manuais.
                </span>
              </li>
            </ul>
          </section>

          {/* 18 */}
          <section id="encerramento">
            <h2 className="pink">18. Encerramento — o recado da Cynthia</h2>
            <div className="quote" style={{ fontSize: '19px', borderLeftColor: 'var(--pink)', background: '#FFF0F6' }}>
              &ldquo;Quando as mulheres ocupam espaço na tecnologia, elas não apenas escrevem código — elas reescrevem o futuro.&rdquo;
            </div>
            <div className="callout purple" style={{ marginTop: '20px' }}>
              <strong>Conexão com a Parte 1 — Avaliação e Sinergia Estratégica</strong>
              <p style={{ marginTop: '8px', marginBottom: '12px', fontSize: '13.5px' }}>A consolidação desta jornada conecta os ensinamentos de Rose (Parte 1) e Cynthia (Parte 2), integrando a visão corporativa à excelência de engenharia de software:</p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Fundamentação Estratégica (Parte 1):</strong> Promove a justificativa de negócios de mercado e o amadurecimento cultural necessário para a transição agêntica, fundamentando o conceito de &ldquo;Agent Boss&rdquo; no papel de liderança do ecossistema de inteligência artificial.</li>
                <li><strong>Implementação Técnica e Governança (Parte 2):</strong> Fornece a materialização de boas práticas, a orquestração pragmática de LLMs, a infraestrutura (Harness), habilidades versionadas (Skills) e a autonomia de agentes modernos, unificando inovação e controle.</li>
                <li><strong>Conclusão sobre a Transição de Papel:</strong> Juntas, essas metades transformam o paradigma do profissional técnico contemporâneo — migrando-o do esforço operacional da digitação braçal de código rotineiro para a governança e auditoria de agentes autônomos.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Fontes</h2>
            <div className="card">
              <p className="src">🎥 Parte 1 — <em>GitHub Copilot for Women-20260616_110418-Meeting Transcript</em> (OneDrive /Recordings de roseoi)</p>
              <p className="src">🎥 Parte 2 — <em>Github Copilot for Women - Cynthia-20260616_115937-Meeting Recording</em> (OneDrive /Recordings de roseoi)</p>
              <p className="src">📅 Evento de calendário Teams · Organizadora: Rosemeire Oikawa · 16/jun/2026</p>
            </div>
          </section>
        </main>
      </div>
    </div>

    <Footer />
    </>
  );
}
