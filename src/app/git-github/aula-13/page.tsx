'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import { asset } from '@/lib/basePath';
import '../deck.css';

function BranchDiagram() {
  return (
    <svg viewBox="0 0 560 190" width="100%" style={{ maxWidth: 560 }} role="img" aria-label="Diagrama de branch">
      {/* main line */}
      <line x1="40" y1="60" x2="520" y2="60" stroke="#60a5fa" strokeWidth="4" />
      {/* feature branch */}
      <path d="M200 60 C 240 60, 240 140, 280 140 L 440 140" fill="none" stroke="#c084fc" strokeWidth="4" />
      <path d="M440 140 C 480 140, 480 60, 520 60" fill="none" stroke="#c084fc" strokeWidth="4" strokeDasharray="6 6" />
      {/* main nodes */}
      {[40, 120, 200, 520].map((x) => (
        <circle key={`m${x}`} cx={x} cy="60" r="9" fill="#1d4ed8" stroke="#60a5fa" strokeWidth="2" />
      ))}
      {/* feature nodes */}
      {[280, 360, 440].map((x) => (
        <circle key={`f${x}`} cx={x} cy="140" r="9" fill="#7c3aed" stroke="#c084fc" strokeWidth="2" />
      ))}
      <text x="40" y="40" fill="#93c5fd" fontSize="14" fontFamily="Inter">main</text>
      <text x="280" y="172" fill="#d8b4fe" fontSize="14" fontFamily="Inter">feat/login</text>
    </svg>
  );
}

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🌿 Aula 13 · Colaboração</span>
        <h1 className="slide-title">
          O que é uma <span className="accent">branch</span> e por que ela existe
        </h1>
        <p className="slide-sub">
          Imagine dez pessoas alterando os mesmos arquivos ao mesmo tempo. É justamente para resolver isso
          que existem as branches: linhas de trabalho paralelas que não interferem umas nas outras. (Nenhum
          comando nesta aula — foco no conceito.)
        </p>
      </div>
    ),
  },
  {
    id: 'problema',
    label: 'O problema',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">💥 O problema</span>
        <h2 className="slide-title">Todo mundo mexendo na mesma versão</h2>
        <p className="slide-sub">Maria começa uma funcionalidade, João começa outra, Pedro corrige um bug — tudo na mesma branch. O que pode acontecer?</p>
        <div className="where-grid" style={{ maxWidth: 720 }}>
          <div className="where-item"><span className="where-ico">🧩</span><span>Alterações incompletas</span></div>
          <div className="where-item"><span className="where-ico">🐛</span><span>Bugs inesperados</span></div>
          <div className="where-item"><span className="where-ico">😵</span><span>Difícil revisar</span></div>
          <div className="where-item"><span className="where-ico">⚠️</span><span>Maior risco</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Branches permitem desenvolver <strong>sem afetar a versão principal</strong> do projeto.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'o-que-e',
    label: 'O que é uma branch',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🌿 O que é uma branch</span>
        <h2 className="slide-title">Uma linha independente de desenvolvimento</h2>
        <BranchDiagram />
        <div className="branch-legend">
          <span><span className="swatch" style={{ background: '#60a5fa' }} /> main — versão estável</span>
          <span><span className="swatch" style={{ background: '#c084fc' }} /> feature — trabalho em andamento</span>
        </div>
        <p className="slide-sub">
          É como testar mudanças em uma <strong>cópia</strong> do documento: quando fica pronta, substitui a
          versão principal.
        </p>
      </div>
    ),
  },
  {
    id: 'main',
    label: 'A branch main',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">⭐ A branch main</span>
        <h2 className="slide-title">A versão estável do projeto</h2>
        <div className="stage-flow" style={{ maxWidth: 520 }}>
          <div className="stage-box is-final"><div className="st-ico">⭐</div><h4>main</h4><p>Site publicado / versão estável</p></div>
        </div>
        <p className="slide-sub">
          Quando criamos um repositório, já existe uma branch principal — normalmente chamada
          <span className="mono"> main</span>. Novas funcionalidades <strong>não</strong> são desenvolvidas
          diretamente nela.
        </p>
      </div>
    ),
  },
  {
    id: 'equipes',
    label: 'Como equipes usam',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">👥 Como equipes usam</span>
        <h2 className="slide-title">Uma branch por funcionalidade</h2>
        <div className="cap-grid" style={{ maxWidth: 820 }}>
          <div className="cap-card"><div className="cap-ico">⭐</div><h4>main</h4><p>Versão estável</p></div>
          <div className="cap-card"><div className="cap-ico">🔑</div><h4>login</h4><p>Nova funcionalidade</p></div>
          <div className="cap-card"><div className="cap-ico">📝</div><h4>cadastro</h4><p>Nova funcionalidade</p></div>
          <div className="cap-card"><div className="cap-ico">✉️</div><h4>contato</h4><p>Nova funcionalidade</p></div>
          <div className="cap-card"><div className="cap-ico">🐛</div><h4>correção-menu</h4><p>Correção de bug</p></div>
        </div>
        <p className="slide-sub">Quando cada funcionalidade fica pronta, ela retorna para a <span className="mono">main</span>.</p>
      </div>
    ),
  },
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">Trabalhando com branches</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">🚫</div><h4>Nunca dev direto na main</h4><p>Mantenha a versão principal sempre estável.</p></div>
          <div className="tip-card"><div className="tip-ico">1️⃣</div><h4>Uma funcionalidade, uma branch</h4><p>Facilita a revisão e reduz o risco de erros.</p></div>
          <div className="tip-card"><div className="tip-ico">🏷️</div><h4>Nomes descritivos</h4><p><span className="mono">feat/login</span>, <span className="mono">fix/menu-mobile</span>…</p></div>
        </div>
      </div>
    ),
  },
  {
    id: 'convencao-nomes',
    label: 'Convenção de nomes',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">
          <span className="trans-pt">🏷️ Convenção do curso</span>
          <span className="trans-en">🏷️ Course convention</span>
        </span>
        <h2 className="slide-title"><code>tipo/descricao-curta</code></h2>
        <div className="cap-grid" style={{ maxWidth: 820 }}>
          <div className="cap-card"><div className="cap-ico">✨</div><h4>feat/</h4><p><span className="mono">feat/adiciona-busca</span></p></div>
          <div className="cap-card"><div className="cap-ico">🐛</div><h4>fix/</h4><p><span className="mono">fix/corrige-link</span></p></div>
          <div className="cap-card"><div className="cap-ico">📚</div><h4>docs/</h4><p><span className="mono">docs/atualiza-faq</span></p></div>
          <div className="cap-card"><div className="cap-ico">🧹</div><h4>chore/</h4><p><span className="mono">chore/atualiza-gitignore</span></p></div>
        </div>
        <p className="slide-sub trans-pt">GitHub não impõe um padrão universal. Esta é a convenção adotada nos exercícios; em outros projetos, siga o <span className="mono">CONTRIBUTING.md</span>.</p>
        <p className="slide-sub trans-en">GitHub does not enforce a universal standard. This is the convention used in the exercises; in other projects, follow <span className="mono">CONTRIBUTING.md</span>.</p>
        <div className="deck-downloads">
          <a className="deck-download" href={asset('/downloads/convencoes-branches.md')} download>
            <span className="dl-ico">📄</span>
            <span className="trans-pt">Exemplos de nomes de branch</span>
            <span className="trans-en">Branch naming examples (Portuguese)</span>
          </a>
          <a className="deck-download" href="https://docs.github.com/pt/get-started/using-github/github-flow" target="_blank" rel="noreferrer">
            <span className="dl-ico">↗</span> GitHub Flow
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'encerramento',
    label: 'Encerramento',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🏁 Encerramento</span>
        <h2 className="slide-title">Times trabalham em paralelo</h2>
        <p className="slide-sub">
          Branches permitem que várias pessoas trabalhem no mesmo projeto sem interferir umas nas outras.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Em projetos open source com milhares de colaboradores, como o VS Code, o desenvolvimento
              acontece em centenas de branches ao mesmo tempo — mantendo a branch principal sempre estável.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: criar e trocar de branches na prática.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaNove() {
  return <SlideDeck slides={slides} kicker="Aula 13" />;
}
