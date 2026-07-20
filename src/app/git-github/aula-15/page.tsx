'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔄 Aula 15 · Colaboração</span>
        <h1 className="slide-title">
          Fluxo de trabalho com <span className="accent">Feature Branch</span>
        </h1>
        <p className="slide-sub">
          Vamos modernizar a página <strong>About</strong> do site pessoal — uma tarefa real. Você vai ver
          quando criar uma branch, o que fazer depois e como cada funcionalidade percorre o fluxo até a
          revisão. (Sem comandos novos — foco no processo.)
        </p>
      </div>
    ),
  },
  {
    id: 'tarefa-macro',
    label: 'A tarefa macro',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🧩 A tarefa macro</span>
        <h2 className="slide-title">Modernizar a página <span className="accent">About</span></h2>
        <p className="slide-sub">
          Uma tarefa grande fica mais fácil (e revisável) quando quebrada em partes. Cada etapa vira uma
          branch independente:
        </p>
        <div className="where-grid" style={{ maxWidth: 820 }}>
          <div className="where-item"><span className="where-ico">📄</span><span><span className="mono">feat/pagina-base</span> · página enxuta + seção Articles</span></div>
          <div className="where-item"><span className="where-ico">🎨</span><span><span className="mono">feat/identidade-visual</span> · favicon e logo em SVG</span></div>
          <div className="where-item"><span className="where-ico">🗂️</span><span><span className="mono">chore/organiza-assets</span> · scripts e imagens em pastas</span></div>
          <div className="where-item"><span className="where-ico">📱</span><span><span className="mono">feat/header-responsivo</span> · header e menu em telas pequenas</span></div>
          <div className="where-item"><span className="where-ico">🌐</span><span><span className="mono">feat/seletor-idioma</span> · troca entre PT e EN</span></div>
          <div className="where-item"><span className="where-ico">🪄</span><span><span className="mono">feat/scroll-suave</span> · rolagem suave nas âncoras</span></div>
          <div className="where-item"><span className="where-ico">♿</span><span><span className="mono">feat/acessibilidade</span> · respeitar prefers-reduced-motion</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Uma funcionalidade = <strong>uma branch</strong>. Nesta aula seguimos <strong>uma delas</strong> do início ao fim.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'fluxo',
    label: 'O fluxo',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🗺️ O fluxo Feature Branch</span>
        <h2 className="slide-title">Do início ao merge</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> Criar branch <code>feat/...</code></li>
          <li><span className="flow-n">2</span> Desenvolver + <code>commit</code></li>
          <li><span className="flow-n">3</span> <code>push</code> para o GitHub</li>
          <li><span className="flow-n">4</span> Abrir <strong>Pull Request</strong></li>
          <li><span className="flow-n">5</span> <strong>Code Review</strong></li>
          <li><span className="flow-n">6</span> <strong>Merge</strong> → main atualizada</li>
        </ol>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Uma funcionalidade <strong>percorre um caminho</strong> antes de chegar à branch principal.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'demo',
    label: 'Demonstração',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">▶️ Demonstração</span>
        <h2 className="slide-title">Até o envio da branch</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — feat/seletor-idioma</span></div>
          <div className="deck-term-body">
            <span className="cmd">git switch <span className="flag">-c</span> feat/seletor-idioma</span>
            <span className="comment"># adiciona o seletor de idioma no header (PT/EN)</span>
            <span className="cmd">git add index.html assets/js/i18n.js</span>
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Adiciona seletor de idioma PT/EN&quot;</span></span>
            <span className="cmd">git push <span className="flag">-u</span> origin feat/seletor-idioma</span>
            <span className="comment"># pare aqui: ainda NÃO abrimos o Pull Request</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'no-github',
    label: 'No GitHub',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">☁️ No GitHub</span>
        <h2 className="slide-title">O GitHub percebe a nova branch</h2>
        <div className="pr-mock" style={{ maxWidth: 560 }}>
          <div className="pr-head">
            <span className="pr-badge review">🌿 feat/seletor-idioma</span>
            <span className="pr-title">Compare &amp; pull request</span>
          </div>
          <div className="pr-body">A funcionalidade já está disponível no GitHub, mas ainda não entrou na <span className="mono">main</span>.</div>
        </div>
        <p className="slide-sub">Não clique ainda — é exatamente isso que aprenderemos na próxima aula.</p>
      </div>
    ),
  },
  {
    id: 'erros',
    label: 'Erros comuns',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">⚠️ Erros comuns</span>
        <h2 className="slide-title">O que evitar</h2>
        <div className="where-grid" style={{ maxWidth: 760 }}>
          <div className="where-item"><span className="where-ico">🚫</span><span>Trabalhar direto na main (funciona, mas dificulta a revisão)</span></div>
          <div className="where-item"><span className="where-ico">📭</span><span>Criar branch e nunca fazer push (a equipe não vê seu trabalho)</span></div>
          <div className="where-item"><span className="where-ico">🗂️</span><span>Misturar várias funcionalidades na mesma branch (ex.: i18n + responsividade juntos)</span></div>
        </div>
        <p className="slide-sub">Cada branch deve resolver <strong>apenas um problema</strong>.</p>
      </div>
    ),
  },
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">Fluxo saudável</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">🔄</div><h4>Parta da main atualizada</h4><p>Crie a branch a partir de uma <span className="mono">main</span> sincronizada.</p></div>
          <div className="tip-card"><div className="tip-ico">🧩</div><h4>Commits pequenos</h4><p>Histórico organizado e fácil de entender.</p></div>
          <div className="tip-card"><div className="tip-ico">📤</div><h4>Envie com frequência</h4><p>A equipe acompanha a evolução do trabalho.</p></div>
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
          <li><span className="check-ico">✅</span> Criar <span className="mono">feat/scroll-suave</span>.</li>
          <li><span className="check-ico">✅</span> Adicionar <span className="mono">scroll-behavior: smooth</span> ao CSS e commitar.</li>
          <li><span className="check-ico">✅</span> <span className="mono">git push -u origin feat/scroll-suave</span>.</li>
          <li><span className="check-ico">✅</span> Confirmar no GitHub que a branch apareceu (sem criar PR).</li>
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
        <h2 className="slide-title">O fluxo profissional</h2>
        <p className="slide-sub">
          Criamos a branch do seletor de idioma, desenvolvemos, commitamos e enviamos o trabalho para o
          GitHub. As outras funcionalidades seguem exatamente o mesmo caminho.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O Feature Branch Workflow é um dos modelos de colaboração mais usados em empresas e projetos
              open source. Plataformas como GitHub, GitLab e Azure DevOps foram projetadas para facilitar
              exatamente esse fluxo.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: abrir um <strong>Pull Request</strong> para integrar a funcionalidade.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaOnze() {
  return <SlideDeck slides={slides} kicker="Aula 15" />;
}
