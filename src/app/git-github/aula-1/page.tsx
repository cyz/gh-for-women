'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  // ── 1. Capa + objetivos ──────────────────────────────
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🌱 Aula 1 · Fundamentos</span>
        <h1 className="slide-title">
          O que é <span className="accent">versionamento</span> e por que usar Git
        </h1>
        <p className="slide-sub">
          Antes de qualquer comando, vamos entender a ideia por trás do controle de versões — a base de
          tudo o que faremos no curso.
        </p>
        <ul className="obj-list">
          <li><span className="obj-num">1</span> Entender o que é versionamento de código.</li>
          <li><span className="obj-num">2</span> Reconhecer os problemas de trabalhar sem controle de versão.</li>
          <li><span className="obj-num">3</span> Compreender por que o Git foi criado.</li>
          <li><span className="obj-num">4</span> Identificar os principais benefícios do Git em projetos de software.</li>
        </ul>
        <p className="hint">Use as setas ← → (ou clique na tela) para navegar</p>
      </div>
    ),
  },

  // ── 2. O problema (hook) ─────────────────────────────
  {
    id: 'problema',
    label: 'O problema',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">💥 O problema</span>
        <h2 className="slide-title">Você já criou um &ldquo;ProjetoFinalAgoraVai&rdquo;?</h2>
        <p className="slide-sub">
          Sem uma forma organizada de controlar mudanças, todo projeto vira uma pilha de cópias — e
          ninguém lembra mais qual é a versão certa.
        </p>
        <div className="file-chaos">
          <div className="file-chip ghost"><span className="file-ico">📄</span><span className="file-name">Projeto.docx</span></div>
          <div className="file-chip ghost"><span className="file-ico">📄</span><span className="file-name">ProjetoFinal.docx</span></div>
          <div className="file-chip ghost"><span className="file-ico">📄</span><span className="file-name">ProjetoFinal2.docx</span></div>
          <div className="file-chip ghost"><span className="file-ico">📄</span><span className="file-name">ProjetoFinalAtualizado.docx</span></div>
          <div className="file-chip final"><span className="file-ico">🤯</span><span className="file-name">ProjetoFinalAgoraVai.docx</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Versionamento é a forma de <strong>registrar e organizar a evolução</strong> de um projeto ao longo do tempo.</span>
        </div>
      </div>
    ),
  },

  // ── 3. O que é versionamento (antes/depois) ──────────
  {
    id: 'conceito',
    label: 'O que é versionamento',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📚 O que é versionamento</span>
        <h2 className="slide-title">De cópias soltas a um histórico único</h2>
        <div className="vs-split">
          <div className="vs-panel bad">
            <h4>❌ Sem versionamento</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 14, lineHeight: 2 }}>
              Trabalho.docx<br />
              TrabalhoFinal.docx<br />
              TrabalhoFinal2.docx<br />
              TrabalhoFinalAgoraVai.docx
            </p>
            <p style={{ color: '#9aa3b8', fontSize: 14 }}>Vários arquivos, nenhuma clareza.</p>
          </div>
          <div className="vs-arrow">➜</div>
          <div className={`vs-panel good reveal ${step >= 1 ? 'show' : ''}`}>
            <h4>✅ Com versionamento</h4>
            <p className="mono" style={{ color: '#a7e3b0', fontSize: 14, lineHeight: 2 }}>
              Versão 1 → Versão 2<br />
              → Versão 3 → Versão 4
            </p>
            <p style={{ color: '#9aa3b8', fontSize: 14 }}>Um único arquivo, com todo o histórico registrado.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Versionar <strong>não</strong> é criar várias cópias de um arquivo — é <strong>registrar sua evolução</strong>.</span>
        </div>
        {step < 1 && <p className="hint">Avance para revelar a alternativa organizada →</p>}
      </div>
    ),
  },

  // ── 4. Linha do tempo (histórico) ────────────────────
  {
    id: 'historico',
    label: 'Histórico organizado',
    steps: 3,
    render: (step) => {
      const nodes = [
        { label: 'Versão 1', sub: 'Início', cls: 'is-start', ico: '•' },
        { label: 'Versão 2', sub: 'Alteração', ico: '2' },
        { label: 'Versão 3', sub: 'Alteração', ico: '3' },
        { label: 'Versão 4', sub: 'Atual', cls: 'is-final', ico: '✓' },
      ];
      return (
        <div className="slide-pad">
          <span className="slide-kicker s-green">🕒 Histórico</span>
          <h2 className="slide-title">Uma linha do tempo do projeto</h2>
          <p className="slide-sub">
            Em vez de criar arquivos novos, o sistema guarda cada mudança em um único histórico ordenado.
          </p>
          <div className="timeline">
            {nodes.map((n, i) => (
              <div key={n.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
                {i > 0 && <div className={`tl-connector reveal ${step >= i ? 'show' : ''}`} />}
                <div className={`tl-node ${n.cls ?? ''} reveal ${step >= i ? 'show' : ''}`}>
                  <div className="tl-dot">{n.ico}</div>
                  <div className="tl-label">{n.label}</div>
                  <div className="tl-sub">{n.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="key-msg">
            <span className="key-icon">🔑</span>
            <span>Cada mudança fica registrada — dá para <strong>voltar no tempo</strong> sempre que precisar.</span>
          </div>
        </div>
      );
    },
  },

  // ── 5. Por que usar Git (capacidades) ────────────────
  {
    id: 'por-que-git',
    label: 'Por que usar Git',
    steps: 4,
    render: (step) => {
      const caps = [
        { ico: '💾', t: 'Registrar', d: 'Salva cada alteração feita no projeto.' },
        { ico: '⏪', t: 'Voltar', d: 'Retorna a versões anteriores sem medo.' },
        { ico: '🔍', t: 'Comparar', d: 'Mostra exatamente o que mudou.' },
        { ico: '🙋‍♀️', t: 'Identificar', d: 'Registra quem fez cada alteração.' },
        { ico: '🤝', t: 'Colaborar', d: 'Várias pessoas no mesmo projeto sem sobrescrever.' },
      ];
      return (
        <div className="slide-pad">
          <span className="slide-kicker s-purple">🐙 Por que usar Git</span>
          <h2 className="slide-title">Quem faz esse controle? O <span className="accent">Git</span>.</h2>
          <p className="slide-sub">
            O Git é a ferramenta que registra as alterações de forma rápida, segura e organizada. Com ele
            você consegue:
          </p>
          <div className="cap-grid">
            {caps.map((c, i) => (
              <div key={c.t} className={`cap-card reveal ${step >= i ? 'show' : ''}`}>
                <div className="cap-ico">{c.ico}</div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
          <div className="key-msg">
            <span className="key-icon">🔑</span>
            <span>O Git registra <strong>toda a história do seu projeto</strong>.</span>
          </div>
        </div>
      );
    },
  },

  // ── 6. Onde o Git é usado ────────────────────────────
  {
    id: 'onde',
    label: 'Onde é usado',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🌍 Onde o Git é usado</span>
        <h2 className="slide-title">Um padrão da indústria de software</h2>
        <p className="slide-sub">
          De projetos pessoais a plataformas usadas por milhões de pessoas — mesmo trabalhando sozinha,
          usar Git é considerado uma boa prática.
        </p>
        <div className="where-grid">
          <div className="where-item"><span className="where-ico">👩‍💻</span><span>Projetos pessoais</span></div>
          <div className="where-item"><span className="where-ico">🚀</span><span>Startups</span></div>
          <div className="where-item"><span className="where-ico">🏢</span><span>Empresas de tecnologia</span></div>
          <div className="where-item"><span className="where-ico">🌐</span><span>Projetos open source</span></div>
          <div className="where-item"><span className="where-ico">🏛️</span><span>Grandes organizações</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Aprender Git é uma <strong>habilidade essencial</strong> para qualquer pessoa que desenvolve.</span>
        </div>
      </div>
    ),
  },

  // ── 7. Boas práticas ─────────────────────────────────
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas para iniciantes</span>
        <h2 className="slide-title">Três dicas para começar bem</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🧍‍♀️</div>
            <h4>Não espere trabalhar em equipe</h4>
            <p>Mesmo projetos simples se beneficiam do versionamento desde o primeiro dia.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">⏱️</div>
            <h4>Use o Git desde o início</h4>
            <p>Assim todo o histórico do projeto fica registrado, sem lacunas.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">🧪</div>
            <h4>Não tenha medo de experimentar</h4>
            <p>Uma das maiores vantagens é poder voltar atrás caso algo não funcione.</p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 8. Prática guiada / checklist ────────────────────
  {
    id: 'pratica',
    label: 'Prática guiada',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🎯 Prática guiada</span>
        <h2 className="slide-title">Vamos consolidar os conceitos</h2>
        <p className="slide-sub">Nesta aula ainda não usamos comandos — o objetivo é fixar as ideias.</p>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Entendi o conceito de versionamento.</li>
          <li><span className="check-ico">✅</span> Identifico os problemas de trabalhar sem histórico.</li>
          <li><span className="check-ico">✅</span> Sei para que serve o Git.</li>
          <li><span className="check-ico">✅</span> Reconheço os benefícios do controle de versão.</li>
        </ul>
        <div className={`reveal ${step >= 1 ? 'show' : ''}`} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <p className="slide-sub" style={{ marginTop: 4 }}>💬 Perguntas para a turma:</p>
          <ul className="check-list ask">
            <li><span className="check-ico">❔</span> Você já perdeu uma versão importante de um arquivo?</li>
            <li><span className="check-ico">❔</span> Já precisou desfazer uma alteração?</li>
            <li><span className="check-ico">❔</span> Já trabalhou em um documento junto com outra pessoa?</li>
          </ul>
        </div>
        {step < 1 && <p className="hint">Avance para as perguntas de discussão →</p>}
      </div>
    ),
  },

  // ── 9. Encerramento + Você sabia ─────────────────────
  {
    id: 'encerramento',
    label: 'Encerramento',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🏁 Encerramento</span>
        <h2 className="slide-title">O que levamos desta aula</h2>
        <p className="slide-sub">
          Hoje entendemos o que é versionamento e por que o Git é tão importante no desenvolvimento de
          software.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O Git foi criado para ser extremamente rápido e eficiente. Mesmo projetos com milhares de
              arquivos registram novas versões em poucos segundos — por isso ele se tornou a ferramenta de
              controle de versão mais usada no mundo.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: vamos <strong>instalar o Git</strong> no computador e fazer a configuração inicial.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaUm() {
  return <SlideDeck slides={slides} kicker="Aula 1" />;
}
