'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🍴 Aula 20 · Colaboração</span>
        <h1 className="slide-title">
          Fork e Pull Request: <span className="accent">contribuindo em projetos de terceiros</span>
        </h1>
        <p className="slide-sub">
          Até agora colaboramos em repositórios onde temos acesso de escrita. Mas como contribuir com um
          projeto de outra pessoa ou de uma comunidade open source? Com um <strong>fork</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'problema',
    label: 'O problema do acesso',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🔒 O problema do acesso</span>
        <h2 className="slide-title">Você não pode dar push em qualquer repositório</h2>
        <p className="slide-sub">
          Em projetos públicos, qualquer pessoa pode ver o código, mas só quem tem permissão consegue enviar
          alterações direto. O fork resolve isso sem precisar de acesso de escrita.
        </p>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O modelo de <strong>fork</strong> é como milhares de pessoas contribuem com projetos open source todos os dias.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'o-que-e-fork',
    label: 'O que é um fork',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🍴 O que é um fork</span>
        <h2 className="slide-title">Sua cópia pessoal do repositório</h2>
        <p className="slide-sub">
          Ao clicar em <strong>Fork</strong> no GitHub, você cria uma cópia completa do repositório na sua
          própria conta. Nela você tem total liberdade para experimentar.
        </p>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O fork fica em <span className="mono">github.com/voce/projeto</span>; o original é chamado de <strong>upstream</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'fluxo',
    label: 'O fluxo com fork',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔄 O fluxo com fork</span>
        <h2 className="slide-title">Seis passos para contribuir</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> <strong>Fork</strong> do repositório original para a sua conta</li>
          <li><span className="flow-n">2</span> <code>git clone</code> do <strong>seu fork</strong> para a máquina</li>
          <li><span className="flow-n">3</span> Criar uma <strong>branch</strong> para a sua contribuição</li>
          <li><span className="flow-n">4</span> Desenvolver + <code>commit</code></li>
          <li><span className="flow-n">5</span> <code>push</code> para o seu fork</li>
          <li><span className="flow-n">6</span> Abrir um <strong>Pull Request</strong> do seu fork para o original</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'upstream',
    label: 'origin e upstream',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔗 origin e upstream</span>
        <h2 className="slide-title">Dois remotos: o seu e o original</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">configurar o repositório original como upstream</span></div>
          <div className="deck-term-body">
            <span className="cmd">git remote add upstream https://github.com/original/projeto.git</span>
            <span className="cmd">git remote -v</span>
            <span className="out ok">origin    https://github.com/voce/projeto.git</span>
            <span className="out ok">upstream  https://github.com/original/projeto.git</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span><span className="mono">origin</span> é o <strong>seu fork</strong>; <span className="mono">upstream</span> é o <strong>projeto original</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'atualizar',
    label: 'Mantendo o fork atualizado',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔃 Mantendo o fork atualizado</span>
        <h2 className="slide-title">O original continua evoluindo</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">trazer as novidades do upstream</span></div>
          <div className="deck-term-body">
            <span className="cmd">git fetch upstream</span>
            <span className="cmd">git switch main</span>
            <span className="cmd">git merge upstream/main</span>
            <span className="comment"># seu fork fica em dia com o projeto original</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Atualizar pelo <span className="mono">upstream</span> evita conflitos e mantém sua contribuição alinhada.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'comparacao',
    label: 'Fork ou acesso direto?',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">⚖️ Fork ou acesso direto?</span>
        <h2 className="slide-title">Dois modelos de colaboração</h2>
        <div className="vs-split">
          <div className="vs-panel good">
            <h4>👥 Repositório compartilhado</h4>
            <p style={{ lineHeight: 1.7 }}>Equipe com acesso de escrita. Branches no mesmo repositório (aulas 13 a 19).</p>
          </div>
          <div className="vs-arrow">vs</div>
          <div className="vs-panel good">
            <h4>🍴 Fork</h4>
            <p style={{ lineHeight: 1.7 }}>Projetos de terceiros ou open source, sem acesso de escrita. PR a partir do seu fork.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O <strong>Pull Request</strong> é o coração dos dois modelos — muda só de onde vem a branch.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'materiais',
    label: 'Materiais para praticar',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📦 Materiais para praticar</span>
        <h2 className="slide-title">Guia passo a passo</h2>
        <p className="slide-sub">
          Baixe o guia autoguiado para fazer um fork, contribuir e abrir um Pull Request para o repositório
          original.
        </p>
        <div className="deck-downloads">
          <a className="deck-download" href="/downloads/guia-aula-20-fork-pr.md" download>
            <span className="dl-ico">📄</span> Guia passo a passo · Aula 20
          </a>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O guia mostra o fluxo completo: <strong>fork → clone → branch → push → Pull Request</strong>.</span>
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
        <h2 className="slide-title">Faça sua primeira contribuição</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Fazer <strong>Fork</strong> de um repositório de exemplo.</li>
          <li><span className="check-ico">✅</span> Clonar o <strong>seu fork</strong> e criar uma branch.</li>
          <li><span className="check-ico">✅</span> Fazer uma alteração, commitar e dar <span className="mono">push</span> no fork.</li>
          <li><span className="check-ico">✅</span> Abrir um <strong>Pull Request</strong> do seu fork para o repositório original.</li>
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
        <h2 className="slide-title">As portas do open source estão abertas</h2>
        <p className="slide-sub">
          Com fork e Pull Request, você pode contribuir com praticamente qualquer projeto público do mundo —
          sem precisar de permissão prévia.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Muitas pessoas conquistam sua primeira vaga em tecnologia mostrando contribuições open source
              feitas por fork. Cada Pull Request aceito vira parte do seu portfólio público.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: o <strong>projeto final</strong> — o fluxo completo de colaboração em equipe.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaVinte() {
  return <SlideDeck slides={slides} kicker="Aula 20" />;
}
