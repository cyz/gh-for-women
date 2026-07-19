'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔗 Aula 18 · Colaboração</span>
        <h1 className="slide-title">
          Merge: <span className="accent">integrando uma funcionalidade</span> ao projeto
        </h1>
        <p className="slide-sub">
          Desenvolvemos em uma branch, abrimos o PR e revisamos. Agora chegou a hora de integrar o trabalho à
          branch principal e ver as duas linhas do tempo virarem uma só.
        </p>
      </div>
    ),
  },
  {
    id: 'o-que-e',
    label: 'O que é um merge',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔗 O que é um merge</span>
        <h2 className="slide-title">Trazendo o trabalho para a main</h2>
        <div className="vs-split" style={{ maxWidth: 900 }}>
          <div className="vs-panel bad" style={{ background: 'rgba(96,165,250,0.06)', borderColor: 'rgba(96,165,250,0.24)' }}>
            <h4 style={{ color: '#93c5fd' }}>Antes</h4>
            <p className="mono" style={{ color: '#cbd3e1', fontSize: 13, lineHeight: 1.9 }}>main &nbsp;&nbsp;&nbsp;●─●─●<br />feature &nbsp;└─●─●</p>
            <p style={{ color: '#9aa3b8', fontSize: 13 }}>As alterações ficam separadas.</p>
          </div>
          <div className="vs-arrow">➜</div>
          <div className="vs-panel good">
            <h4>Depois</h4>
            <p className="mono" style={{ color: '#a7e3b0', fontSize: 13, lineHeight: 1.9 }}>main &nbsp;●─●─●─●─●</p>
            <p style={{ color: '#9aa3b8', fontSize: 13 }}>Passam a fazer parte da branch principal.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">📖</span>
          <span>Como um capítulo revisado incorporado ao livro: o merge <strong>integra a funcionalidade à versão principal</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'realizando',
    label: 'Realizando o merge',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">✅ Realizando o merge</span>
        <h2 className="slide-title">Pelo GitHub, sem conflitos</h2>
        <div className="pr-mock" style={{ maxWidth: 560 }}>
          <div className="pr-head">
            <span className="pr-badge">✔ Able to merge</span>
            <span className="pr-title">Adiciona seção de projetos</span>
          </div>
          <div className="pr-body">
            O GitHub verificou que não existem conflitos. Clique em <strong>Merge pull request</strong> → <strong>Confirm merge</strong>.
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🎉</span>
          <span>A funcionalidade agora faz parte da <span className="mono">main</span>!</span>
        </div>
        <p className="hint">💡 Dá para integrar localmente com <span className="mono">git merge</span> (Aula 14). Pelo GitHub é melhor em equipe, porque passa pela revisão do Pull Request.</p>
      </div>
    ),
  },
  {
    id: 'depois',
    label: 'Depois do merge',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🧹 Depois do merge</span>
        <h2 className="slide-title">A branch pode ser removida</h2>
        <div className="pr-mock" style={{ maxWidth: 560 }}>
          <div className="pr-head">
            <span className="pr-badge merged">🟣 Merged</span>
            <span className="pr-title">feature-projetos</span>
          </div>
          <div className="pr-body">A branch continua existindo, mas normalmente não será mais usada. O GitHub oferece o botão <strong>Delete branch</strong>.</div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Apagar a branch <strong>não apaga a funcionalidade</strong> — ela já foi incorporada ao histórico da main.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'atualizar',
    label: 'Atualizar o local',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">⬇️ Atualizar o repositório local</span>
        <h2 className="slide-title">GitHub e computador precisam sincronizar</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — trazer as mudanças</span></div>
          <div className="deck-term-body">
            <span className="comment"># o GitHub foi atualizado, mas o seu computador ainda não</span>
            <span className="cmd">git switch main</span>
            <span className="cmd">git pull origin main</span>
            <span className="out ok">✔ README atualizado no seu computador</span>
          </div>
        </div>
        <p className="slide-sub"><span className="mono">git pull</span> traz para o local o que foi integrado no GitHub.</p>
      </div>
    ),
  },
  {
    id: 'graph',
    label: 'Ver a história',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🌳 Ver a história</span>
        <h2 className="slide-title">O merge no histórico</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — histórico em árvore</span></div>
          <div className="deck-term-body">
            <span className="cmd">git log <span className="flag">--oneline</span> <span className="flag">--graph</span></span>
            <span className="out">*   e4a1b2c Merge da feature-projetos</span>
            <span className="out">|\</span>
            <span className="out">| * 7c3d9f0 Adiciona seção de projetos</span>
            <span className="out">|/</span>
            <span className="out">* a3f7d8e Atualiza README</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O <span className="mono">--graph</span> desenha o histórico como uma árvore: dá para ver a feature nascer e voltar para a <span className="mono">main</span>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">Integrando com segurança</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">👀</div><h4>Merge após revisão</h4><p>Integre só depois do Code Review.</p></div>
          <div className="tip-card"><div className="tip-ico">🧩</div><h4>PRs pequenos</h4><p>Mais fáceis de revisar e integrar.</p></div>
          <div className="tip-card"><div className="tip-ico">🔄</div><h4>Atualize a main</h4><p>Faça <span className="mono">git pull</span> com frequência e remova branches já integradas.</p></div>
        </div>
      </div>
    ),
  },
  {
    id: 'pratica',
    label: 'Prática guiada',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🎯 Prática guiada</span>
        <h2 className="slide-title">Faça você mesma</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Abrir o PR e conferir <span className="mono">Able to merge</span>.</li>
          <li><span className="check-ico">✅</span> Fazer o merge e confirmar.</li>
          <li><span className="check-ico">✅</span> Remover a branch já integrada.</li>
          <li><span className="check-ico">✅</span> <span className="mono">git switch main</span> + <span className="mono">git pull origin main</span>.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'encerramento',
    label: 'Encerramento',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🏁 Encerramento</span>
        <h2 className="slide-title">Fluxo colaborativo concluído</h2>
        <p className="slide-sub">
          Criamos, revisamos e agora a funcionalidade faz parte da versão principal do projeto.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Em muitas equipes, o merge não é feito por qualquer pessoa. O GitHub pode exigir aprovações,
              testes automatizados e verificações de qualidade antes de liberar o botão de merge.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: o que fazer quando duas pessoas mudam o mesmo trecho — <strong>conflitos de merge</strong>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaCatorze() {
  return <SlideDeck slides={slides} kicker="Aula 18" />;
}
