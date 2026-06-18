'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import './infographic.css';

export default function Infographic() {
  const TOTAL_SLIDES = 6;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [step5, setStep5] = useState(0); // For click-to-reveal steps on Slide 5
  const [step6, setStep6] = useState(0); // For click-to-reveal steps on Slide 6

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        advance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        retreat();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, step5, step6]);

  // Touch navigation
  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) {
        advance();
      } else {
        retreat();
      }
    }
  };

  const advance = () => {
    if (currentSlide === 5) {
      if (step5 < 3) {
        setStep5((prev) => prev + 1);
      } else {
        goTo(6);
      }
    } else if (currentSlide === 6) {
      if (step6 < 3) {
        setStep6((prev) => prev + 1);
      } else {
        // Wrap or do nothing
      }
    } else if (currentSlide < TOTAL_SLIDES) {
      goTo(currentSlide + 1);
    }
  };

  const retreat = () => {
    if (currentSlide === 5) {
      if (step5 > 0) {
        setStep5((prev) => prev - 1);
      } else {
        goTo(4);
      }
    } else if (currentSlide === 6) {
      if (step6 > 0) {
        setStep6((prev) => prev - 1);
      } else {
        goTo(5);
      }
    } else if (currentSlide > 1) {
      goTo(currentSlide - 1);
    }
  };

  const goTo = (n: number) => {
    if (n < 1 || n > TOTAL_SLIDES) return;
    setCurrentSlide(n);
    if (n !== 5) setStep5(0);
    if (n !== 6) setStep6(0);
  };

  return (
    <div className="infographic-wrapper" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <SiteNav />

      {/* Floating Voltar ao Hub Button */}
      <Link href="/" className="hub-back-btn" style={{
        position: 'fixed',
        top: '80px', // Below top navbar
        left: '24px',
        zIndex: 99,
        background: 'rgba(13, 13, 21, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        textDecoration: 'none',
        padding: '10px 18px',
        borderRadius: '30px',
        fontSize: '13px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        transition: 'all 0.2s',
      }}>
        <span style={{ fontSize: '16px' }}>🏠</span>
        <span>Voltar ao Hub</span>
      </Link>

      <div className="deck" onClick={advance}>
        
        {/* SLIDE 1: Abertura */}
        <div className={`slide ${currentSlide === 1 ? 'active' : ''}`} id="slide-1">
          <div className="slide-img-container">
            {/* Standard image with nice error fallback */}
            <img 
              className="slide-img" 
              src="devdays-cubo-wide.png" 
              alt="GitHub Copilot Dev Days Online"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'none' }}
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              onLoad={(e) => { (e.target as HTMLElement).style.display = 'block'; }}
            />
            <div className="slide-fallback-card">
              <div className="slide-fallback-banner">✨ Abertura Oficial</div>
              <h2>GitHub Copilot Dev Days</h2>
              <p style={{ color: '#c084fc', fontWeight: 'bold', fontSize: '1.25em', marginBottom: '8px' }}>Online &amp; Gratuito</p>
              <p>Domine o ecossistema de inteligência artificial de desenvolvimento de ponta a ponta.</p>
              <p style={{ fontSize: '12px', marginTop: '24px', color: '#64748b' }}>Clique na tela ou use a seta direita para avançar</p>
            </div>
          </div>
        </div>

        {/* SLIDE 2: Capa com título */}
        <div className={`slide ${currentSlide === 2 ? 'active' : ''}`} id="slide-2">
          <div className="cover-bg"></div>
          <div className="cover-content">
            <div className="cover-icons">
              <svg viewBox="0 0 64 64" fill="none" stroke="#60a5fa" strokeWidth="2.5" style={{ height: '60px' }}>
                <path d="M18 20h28v24H18z" rx="6" />
                <circle cx="26" cy="30" r="2.5" fill="#60a5fa" stroke="none" />
                <circle cx="38" cy="30" r="2.5" fill="#60a5fa" stroke="none" />
                <path d="M26 37h12M32 20v-6M18 28h-6M46 28h6" />
              </svg>
              <span style={{ fontSize: '32px' }}>⚡</span>
              <svg viewBox="0 0 64 64" fill="none" stroke="#c084fc" strokeWidth="2.5" style={{ height: '60px' }}>
                <path d="M12 12h40v40H12z" rx="6"/>
                <path d="M20 22h24M20 32h24M20 42h16" />
              </svg>
            </div>
            <h2 className="cover-title">Desenvolvimento Agêntico com GitHub Copilot e VS Code</h2>
            <div style={{ color: '#94a3b8', fontSize: '1.25em', maxWidth: '800px', lineHeight: '1.6' }}>
              Explore como customizar a experiência do Copilot de forma a adaptar sua automação de softwares.
            </div>
          </div>
        </div>

        {/* SLIDE 3: Speaker */}
        <div className={`slide ${currentSlide === 3 ? 'active' : ''}`} id="slide-3">
          <div className="slide-img-container">
            <img 
              className="slide-img" 
              src="Screenshot 2026-06-15 at 19.22.13.png" 
              alt="Cynthia Zanoni"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'none' }}
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              onLoad={(e) => { (e.target as HTMLElement).style.display = 'block'; }}
            />
            <div className="slide-fallback-card" style={{ maxWidth: '640px' }}>
              <div style={{ fontSize: '72px', marginBottom: '16px' }}>👩‍💻</div>
              <h2>Cynthia Zanoni</h2>
              <p style={{ color: 'var(--blue)', fontWeight: 'bold', fontSize: '1.2em', marginBottom: '16px' }}>Apresentando o Futuro do Desenvolvimento</p>
              <p style={{ fontSize: '0.95em', color: '#94a3b8' }}>
                Conheça as principais ferramentas, extensões, configurações e dicas essenciais de personalização para elevar sua barra de desenvolvimento diário.
              </p>
            </div>
          </div>
        </div>

        {/* SLIDE 4: Agentic SDLC */}
        <div className={`slide ${currentSlide === 4 ? 'active' : ''}`} id="slide-4">
          <div className="slide-img-container">
            <img 
              className="slide-img" 
              src="Screenshot 2026-06-15 at 19.23.14.png" 
              alt="Agentic SDLC"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'none' }}
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              onLoad={(e) => { (e.target as HTMLElement).style.display = 'block'; }}
            />
            <div className="slide-fallback-card">
              <div className="slide-fallback-banner">🔄 Ciclo de Vida Agêntico</div>
              <h2>O Ciclo Agêntico de Desenvolvimento (SDLC)</h2>
              <p style={{ marginBottom: '24px' }}>Entenda como os agentes orientados a tarefas colaboram entre si para planejar, codificar, testar, revisar e publicar software de alta performance.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', textAlign: 'left' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>📝</div>
                  <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.9em' }}>1. Planejamento</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Contexto e design das tarefas</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>💻</div>
                  <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.9em' }}>2. Codificação</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Implementação ágil assistida</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛡️</div>
                  <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.9em' }}>3. Revisão &amp; Teste</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Análise estática e segurança</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🚀</div>
                  <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '0.9em' }}>4. Implantação</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>Compilação e deploy estático</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 5: Infográfico 1 */}
        <div className={`slide ${currentSlide === 5 ? 'active' : ''}`} id="slide-5">
          <div className="infographic-slide">
            <div className="page" onClick={(e) => e.stopPropagation()}>
              <h1 className="page-title">Os Componentes de Personalização do Copilot</h1>
              <div className="page-subtitle">
                Parte 1 / 2 &nbsp;·&nbsp; {step5 < 3 ? 'clique nos botões de navegação ou pressione seta direita para revelar componentes' : 'Concluído!'}
              </div>

              <div className="grid">
                {/* Card 1 */}
                <div className={`card col-purple ${step5 >= 1 ? 'visible' : ''}`}>
                  <div className="card-title">Instruções</div>
                  <div className="icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#b388ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 22 L32 12 L54 22 L32 32 Z"/>
                      <path d="M10 22 L10 38 L32 48 L54 38 L54 22"/>
                      <path d="M32 32 L32 48"/>
                      <circle cx="20" cy="30" r="1.5" fill="#b388ff"/>
                      <circle cx="44" cy="30" r="1.5" fill="#b388ff"/>
                      <circle cx="32" cy="40" r="1.5" fill="#b388ff"/>
                      <path d="M20 30 L32 40 L44 30" strokeDasharray="2 2"/>
                    </svg>
                  </div>
                  <div className="tagline">Regras sempre ativas</div>
                  <div className="desc">Padrões de código, convenções e preferências do desenvolvedor.</div>
                  <div className="file-tag">*.instructions.md</div>
                  <ul>
                    <li className="ok"><span className="mark">✓</span><span>Sempre no contexto</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Carregadas a cada <em>prompt</em></span></li>
                    <li className="no"><span className="mark">✕</span><span>Não incluem <em>scripts</em></span></li>
                  </ul>
                </div>

                {/* Card 2 */}
                <div className={`card col-orange ${step5 >= 2 ? 'visible' : ''}`}>
                  <div className="card-title">Copilot Instructions</div>
                  <div className="icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#fb923c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 44 L32 32 L56 44 L32 56 Z"/>
                      <path d="M8 44 L8 48 L32 60 L56 48 L56 44"/>
                      <rect x="20" y="22" width="8" height="8" stroke="#fb923c" strokeWidth="2" />
                      <rect x="30" y="18" width="8" height="8" stroke="#fb923c" strokeWidth="2" />
                      <rect x="40" y="24" width="8" height="8" stroke="#fb923c" strokeWidth="2" />
                      <rect x="24" y="12" width="8" height="8" stroke="#fb923c" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="tagline">Contexto do projeto</div>
                  <div className="desc">Regras específicas do repositório que orientam todo o trabalho.</div>
                  <div className="file-tag">copilot-instructions.md</div>
                  <ul>
                    <li className="ok"><span className="mark">✓</span><span>Define estilo e estrutura</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Inclui documentação</span></li>
                    <li className="no"><span className="mark">✕</span><span>Escopo limitado ao projeto</span></li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className={`card col-red ${step5 >= 3 ? 'visible' : ''}`}>
                  <div className="card-title">Prompts</div>
                  <div className="icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#ff6b6b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="8" y="12" width="48" height="40" rx="4"/>
                      <path d="M8 20 L56 20"/>
                      <circle cx="13" cy="16" r="1" fill="#ff6b6b"/>
                      <circle cx="17" cy="16" r="1" fill="#ff6b6b"/>
                      <circle cx="21" cy="16" r="1" fill="#ff6b6b"/>
                      <path d="M16 30 L22 36 L16 42"/>
                      <path d="M26 42 L36 42"/>
                    </svg>
                  </div>
                  <div className="tagline">Comandos Sob Demanda</div>
                  <div className="desc">Invocação manual via <em>slash commands</em>. Tarefas reutilizáveis acionadas quando você precisa.</div>
                  <div className="file-tag">**.prompt.md</div>
                  <ul>
                    <li className="ok"><span className="mark">✓</span><span>Invocáveis manualmente</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Uso via comando <em>/slash</em></span></li>
                    <li className="ok"><span className="mark">✓</span><span>Tarefas reutilizáveis</span></li>
                    <li className="no"><span className="mark">✕</span><span>Não persistentes</span></li>
                  </ul>
                </div>
              </div>

              <div className="sparkle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#7a7a8c">
                  <path d="M12 2 L13.5 9 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 9 Z M19 16 L19.7 18.3 L22 19 L19.7 19.7 L19 22 L18.3 19.7 L16 19 L18.3 18.3 Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE 6: Infográfico 2 */}
        <div className={`slide ${currentSlide === 6 ? 'active' : ''}`} id="slide-6">
          <div className="infographic-slide">
            <div className="page" onClick={(e) => e.stopPropagation()}>
              <h1 className="page-title">Os Componentes de Personalização do Copilot</h1>
              <div className="page-subtitle">
                Parte 2 / 2 &nbsp;·&nbsp; {step6 < 3 ? 'clique nos botões de navegação ou pressione seta direita para revelar componentes' : 'Concluído!'}
              </div>

              <div className="grid">
                {/* Card 4 */}
                <div className={`card col-green ${step6 >= 1 ? 'visible' : ''}`}>
                  <div className="card-title">Skills</div>
                  <div className="icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#4ade80" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 18 L26 14 L36 18 L26 22 Z"/>
                      <path d="M16 18 L16 28 L26 32 L26 22"/>
                      <path d="M36 18 L36 28 L26 32"/>
                      <path d="M30 28 L40 24 L50 28 L40 32 Z"/>
                      <path d="M30 28 L30 38 L40 42 L40 32"/>
                      <path d="M50 28 L50 38 L40 42"/>
                      <path d="M20 36 L30 32 L40 36 L30 40 Z"/>
                      <path d="M20 36 L20 46 L30 50 L30 40"/>
                      <path d="M40 36 L40 46 L30 50"/>
                      <circle cx="30" cy="40" r="2.5" fill="#4ade80" stroke="none"/>
                    </svg>
                  </div>
                  <div className="tagline">Receitas Sob Demanda</div>
                  <div className="desc">Carregadas apenas quando relevantes — fluxos de trabalho repetíveis acompanhados de <em>scripts</em>.</div>
                  <div className="file-tag">SKILL.md</div>
                  <ul>
                    <li className="ok"><span className="mark">✓</span><span>Podem incluir <em>scripts</em></span></li>
                    <li className="ok"><span className="mark">✓</span><span>Carregadas só quando necessário</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Invocáveis pelo nome</span></li>
                    <li className="no"><span className="mark">✕</span><span>Sem janela de contexto própria</span></li>
                  </ul>
                </div>

                {/* Card 5 */}
                <div className={`card col-blue ${step6 >= 2 ? 'visible' : ''}`}>
                  <div className="card-title">Agentes</div>
                  <div className="icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="18" y="20" width="28" height="24" rx="6"/>
                      <circle cx="26" cy="30" r="2.5" fill="#60a5fa" stroke="none"/>
                      <circle cx="38" cy="30" r="2.5" fill="#60a5fa" stroke="none"/>
                      <path d="M26 37 L38 37"/>
                      <path d="M32 20 L32 14"/>
                      <circle cx="32" cy="12" r="2" fill="#60a5fa" stroke="none"/>
                      <path d="M18 28 L12 28"/>
                      <path d="M46 28 L52 28"/>
                      <path d="M22 44 L22 50"/>
                      <path d="M42 44 L42 50"/>
                    </svg>
                  </div>
                  <div className="tagline">Personas Especializadas</div>
                  <div className="desc">Ferramentas e janela de contexto próprias — revisor de segurança, redator de documentação, etc.</div>
                  <div className="file-tag">*.agent.md</div>
                  <ul>
                    <li className="ok"><span className="mark">✓</span><span>Ferramentas e permissões próprias</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Janela de contexto separada</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Autodelegação</span></li>
                    <li className="no"><span className="mark">✕</span><span>Nem sempre com contexto</span></li>
                  </ul>
                </div>

                {/* Card 6 */}
                <div className={`card col-cyan ${step6 >= 3 ? 'visible' : ''}`}>
                  <div className="card-title">Hooks</div>
                  <div className="icon">
                    <svg viewBox="0 0 64 64" fill="none" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M32 10 L32 34"/>
                      <path d="M32 34 C32 42 26 46 20 46 C14 46 12 42 12 38"/>
                      <circle cx="32" cy="10" r="4"/>
                      <path d="M44 24 L50 18 M50 18 L46 18 M50 18 L50 22"/>
                      <path d="M20 24 L14 18 M14 18 L18 18 M14 18 L14 22"/>
                    </svg>
                  </div>
                  <div className="tagline">Gatilhos Automáticos</div>
                  <div className="desc">Scripts que rodam em eventos do ciclo de vida do agente — antes ou depois de uma ferramenta ou no início da sessão.</div>
                  <div className="file-tag">hooks / settings.json</div>
                  <ul>
                    <li className="ok"><span className="mark">✓</span><span>Disparados por <em>eventos</em></span></li>
                    <li className="ok"><span className="mark">✓</span><span>Executam <em>scripts</em> e comandos</span></li>
                    <li className="ok"><span className="mark">✓</span><span>Validam ou bloqueiam ações</span></li>
                    <li className="no"><span className="mark">✕</span><span>Não decidem sozinhos</span></li>
                  </ul>
                </div>
              </div>

              <div className="sparkle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#7a7a8c">
                  <path d="M12 2 L13.5 9 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 9 Z M19 16 L19.7 18.3 L22 19 L19.7 19.7 L19 22 L18.3 19.7 L16 19 L18.3 18.3 Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button 
        className={`nav-prev ${currentSlide === 1 && step5 === 0 && step6 === 0 ? 'hidden' : ''}`} 
        onClick={(e) => { e.stopPropagation(); retreat(); }}
        aria-label="Slide anterior"
      >
        &#8249;
      </button>

      <button 
        className={`nav-next ${currentSlide === TOTAL_SLIDES && step6 === 3 ? 'hidden' : ''}`} 
        onClick={(e) => { e.stopPropagation(); advance(); }}
        aria-label="Próximo slide"
      >
        &#8250;
      </button>

      {/* Dot Indicators */}
      <div className="dots" onClick={(e) => e.stopPropagation()}>
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <div 
            key={i} 
            className={`dot ${currentSlide === i + 1 ? 'active' : ''}`}
            onClick={() => goTo(i + 1)}
          />
        ))}
      </div>

      {/* Slide number counter */}
      <div className="slide-counter">
        {currentSlide} / {TOTAL_SLIDES} {currentSlide === 5 && `(Revele ${step5}/3)`} {currentSlide === 6 && `(Revele ${step6}/3)`}
      </div>
    </div>
  );
}
