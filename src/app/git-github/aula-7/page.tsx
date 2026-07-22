'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import { asset } from '@/lib/basePath';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">↩️ Aula 7 · Fundamentos</span>
        <h1 className="slide-title">
          Errar faz parte: <span className="accent">desfazendo com segurança</span>
        </h1>
        <p className="slide-sub">
          Uma das maiores vantagens do Git é poder voltar atrás. Vamos ver como desfazer alterações,
          corrigir a última mensagem e reverter um commit sem medo.
        </p>
      </div>
    ),
  },
  {
    id: 'mapa',
    label: 'Quatro situações comuns',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🗺️ Quatro situações comuns</span>
        <h2 className="slide-title">Cada erro tem sua solução</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">✏️</div>
            <h4>Editei e me arrependi</h4>
            <p>Descartar uma alteração ainda não commitada com <span className="mono">git restore</span>.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">📥</div>
            <h4>Preparei o arquivo errado</h4>
            <p>Tirar da Staging Area com <span className="mono">git restore --staged</span>.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">📝</div>
            <h4>Mensagem errada</h4>
            <p>Corrigir o último commit com <span className="mono">git commit --amend</span>.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">↪️</div>
            <h4>Commit já enviado</h4>
            <p>Desfazer com um novo commit usando <span className="mono">git revert</span>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'restore',
    label: 'git restore',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">✏️ git restore</span>
        <h2 className="slide-title">Descartar uma alteração não salva</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">voltar o arquivo ao último commit</span></div>
          <div className="deck-term-body">
            <span className="cmd">git status</span>
            <span className="out warn">  modified: README.md</span>
            <span className="cmd">git restore README.md</span>
            <span className="comment"># o README volta a ser exatamente como no último commit</span>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#f0a020' }}>
          <span className="key-icon">⚠️</span>
          <span>Cuidado: <span className="mono">git restore</span> <strong>descarta a alteração de vez</strong>. Use quando tiver certeza.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'restore-staged',
    label: 'git restore --staged',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📥 git restore --staged</span>
        <h2 className="slide-title">Tirar da preparação sem perder o trabalho</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">desfazer um git add</span></div>
          <div className="deck-term-body">
            <span className="cmd">git add README.md</span>
            <span className="comment"># adicionei por engano; quero tirar da Staging Area</span>
            <span className="cmd">git restore <span className="flag">--staged</span> README.md</span>
            <span className="out ok"># a alteração continua no arquivo, só saiu da preparação</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O <span className="flag">--staged</span> desfaz o <span className="mono">git add</span> <strong>sem apagar</strong> o que você escreveu.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'amend',
    label: 'git commit --amend',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">📝 git commit --amend</span>
        <h2 className="slide-title">Corrigir o último commit</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">reescrever a última mensagem</span></div>
          <div className="deck-term-body">
            <span className="cmd">git commit <span className="flag">--amend</span> <span className="flag">-m</span> <span className="str">&quot;Adiciona seção de contato&quot;</span></span>
            <span className="comment"># substitui a mensagem (ou o conteúdo) do último commit</span>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#f0a020' }}>
          <span className="key-icon">⚠️</span>
          <span>Use o <span className="mono">--amend</span> só <strong>antes de enviar</strong> o commit para o GitHub.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'revert',
    label: 'git revert',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">↪️ git revert</span>
        <h2 className="slide-title">Desfazer um commit já publicado</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">criar um commit que desfaz outro</span></div>
          <div className="deck-term-body">
            <span className="cmd">git log --oneline</span>
            <span className="out">a1b2c3d Adiciona seção com erro</span>
            <span className="cmd">git revert a1b2c3d</span>
            <span className="out ok"># cria um NOVO commit desfazendo aquela alteração</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O <span className="mono">revert</span> preserva o histórico: nada é apagado, tudo fica registrado. Ideal em equipe.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'restore-vs-reset',
    label: 'E o git reset?',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🧭 E o git reset?</span>
        <h2 className="slide-title">Um comando poderoso — e perigoso</h2>
        <p className="slide-sub">
          Você vai ouvir falar de <span className="mono">git reset</span>. Ele reescreve o histórico e, na
          forma <span className="mono">--hard</span>, apaga alterações de verdade.
        </p>
        <div className="key-msg" style={{ borderLeftColor: '#f0a020' }}>
          <span className="key-icon">⚠️</span>
          <span>No começo, prefira <span className="mono">restore</span> e <span className="mono">revert</span>: resolvem quase tudo com segurança. Deixe o <span className="mono">reset --hard</span> para depois.</span>
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
        <h2 className="slide-title">Treine cada situação</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Editar o <span className="mono">README.md</span> e desfazer com <span className="mono">git restore</span>.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git add</span> e desfazer com <span className="mono">git restore --staged</span>.</li>
          <li><span className="check-ico">✅</span> Fazer um commit e corrigir a mensagem com <span className="mono">git commit --amend</span>.</li>
          <li><span className="check-ico">✅</span> Reverter um commit com <span className="mono">git revert</span> e ver o novo commit no <span className="mono">git log</span>.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'consulta-rapida',
    label: 'Consulta rápida',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">
          <span className="trans-pt">📚 Consulta rápida</span>
          <span className="trans-en">📚 Quick reference</span>
        </span>
        <h2 className="slide-title">
          <span className="trans-pt">Entenda o estado antes do comando</span>
          <span className="trans-en">Understand the state before the command</span>
        </h2>
        <div className="stage-flow" style={{ maxWidth: 760 }}>
          <div className="stage-box"><div className="st-ico">✏️</div><h4>Working tree</h4><p><span className="mono">git restore</span></p></div>
          <div className="stage-box"><div className="st-ico">📦</div><h4>Staging</h4><p><span className="mono">git restore --staged</span></p></div>
          <div className="stage-box"><div className="st-ico">🕘</div><h4>History</h4><p><span className="mono">git revert</span></p></div>
        </div>
        <p className="slide-sub trans-pt">A cheat sheet organiza os comandos por intenção, efeito, verificação e risco. Ela é uma referência, não uma lista para executar de cima a baixo.</p>
        <p className="slide-sub trans-en">The cheat sheet organizes commands by intent, effect, verification, and risk. It is a reference, not a script to run from top to bottom.</p>
        <div className="deck-downloads">
          <a className="deck-download" href={asset('/downloads/git-cheat-sheet.md')} download>
            <span className="dl-ico">⌨️</span> Git cheat sheet
          </a>
          <a className="deck-download" href="https://git-scm.com/docs/git-revert/pt_BR" target="_blank" rel="noreferrer">
            <span className="dl-ico">↗</span>
            <span className="trans-pt">Referência oficial do Git</span>
            <span className="trans-en">Official Git reference</span>
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
        <h2 className="slide-title">Nenhum erro é definitivo</h2>
        <p className="slide-sub">
          Saber desfazer dá confiança para experimentar. Com <span className="mono">restore</span>,{' '}
          <span className="mono">--amend</span> e <span className="mono">revert</span> você já resolve os
          erros mais comuns do dia a dia.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O Git raramente perde informação de verdade. A maioria dos &ldquo;erros&rdquo; pode ser
              desfeita — por isso ele é considerado uma rede de segurança para quem programa.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: conhecer o <strong>GitHub</strong> e criar nosso primeiro repositório remoto.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaSete() {
  return <SlideDeck slides={slides} kicker="Aula 7" />;
}
