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
        <span className="slide-kicker s-green">⬇️ Aula 10 · GitHub</span>
        <h1 className="slide-title">
          Clonando um <span className="accent">repositório existente</span>
        </h1>
        <p className="slide-sub">
          Até agora criamos projetos do zero. Com o <span className="mono">git clone</span> você baixa um
          repositório que já existe no GitHub — com todo o histórico — para o seu computador.
        </p>
      </div>
    ),
  },
  {
    id: 'init-vs-clone',
    label: 'init ou clone?',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🔀 init ou clone?</span>
        <h2 className="slide-title">Dois pontos de partida</h2>
        <div className="vs-split">
          <div className="vs-panel good">
            <h4>🌱 git init</h4>
            <p style={{ lineHeight: 1.7 }}>Começar um projeto <strong>novo</strong>, do zero, na sua máquina.</p>
          </div>
          <div className="vs-arrow">vs</div>
          <div className="vs-panel good">
            <h4>⬇️ git clone</h4>
            <p style={{ lineHeight: 1.7 }}>Copiar um projeto que <strong>já existe</strong> no GitHub para a sua máquina.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Clonar é como <strong>baixar uma cópia completa</strong>: arquivos, histórico e configuração do remoto.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'clone',
    label: 'git clone',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">⬇️ git clone</span>
        <h2 className="slide-title">Um comando, uma cópia completa</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — clonar um repositório</span></div>
          <div className="deck-term-body">
            <span className="cmd">git clone https://github.com/usuario/manual-comunidade.git</span>
            <span className="out">Cloning into &apos;manual-comunidade&apos;...</span>
            <span className="out ok">done.</span>
            <span className="comment"># cria uma pasta manual-comunidade com tudo dentro</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O <span className="mono">git clone URL</span> cria a pasta, baixa os arquivos e traz o <strong>histórico inteiro</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'origin-auto',
    label: 'O origin já vem pronto',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔗 O origin já vem pronto</span>
        <h2 className="slide-title">Nada de git remote add desta vez</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">conferir o remoto</span></div>
          <div className="deck-term-body">
            <span className="cmd">cd manual-comunidade</span>
            <span className="cmd">git remote -v</span>
            <span className="out ok">origin  https://github.com/usuario/manual-comunidade.git (fetch)</span>
            <span className="out ok">origin  https://github.com/usuario/manual-comunidade.git (push)</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Ao clonar, o <span className="mono">origin</span> já é configurado — diferente da Aula 9, onde ligamos local e remoto na mão.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'https-ssh',
    label: 'HTTPS ou SSH',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔐 HTTPS ou SSH</span>
        <h2 className="slide-title">Dois formatos de endereço</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">as duas URLs do mesmo repositório</span></div>
          <div className="deck-term-body">
            <span className="comment"># HTTPS — mais simples para começar</span>
            <span className="out">https://github.com/usuario/projeto.git</span>
            <span className="comment"># SSH — usa suas chaves, sem digitar login toda vez</span>
            <span className="out">git@github.com:usuario/projeto.git</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>A autenticação é a mesma que vimos na aula de <span className="mono">push</span>. No botão <strong>Code</strong> do GitHub você escolhe HTTPS ou SSH.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'fluxo',
    label: 'Depois de clonar',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔄 Depois de clonar</span>
        <h2 className="slide-title">O ciclo continua igual</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">trabalhar no projeto clonado</span></div>
          <div className="deck-term-body">
            <span className="comment"># edite os arquivos normalmente, depois:</span>
            <span className="cmd">git add .</span>
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Atualiza o README&quot;</span></span>
            <span className="cmd">git push</span>
            <span className="out ok"># como o origin já existe, o push já sabe para onde enviar</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Depois do clone, é o mesmo fluxo de sempre: <strong>editar, add, commit e push</strong>.</span>
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
          Baixe o guia autoguiado para clonar um repositório, fazer uma alteração e enviar de volta.
        </p>
        <div className="deck-downloads">
          <a className="deck-download" href={asset('/downloads/guia-aula-10-clonar.md')} download>
            <span className="dl-ico">📄</span> Guia passo a passo · Aula 10
          </a>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O guia mostra como clonar pelo botão <strong>Code</strong> do GitHub e conferir o histórico com <span className="mono">git log</span>.</span>
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
        <h2 className="slide-title">Clone e explore</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Copiar a URL de um repositório pelo botão <strong>Code</strong> no GitHub.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git clone URL</span> e entrar na pasta criada.</li>
          <li><span className="check-ico">✅</span> Conferir o histórico com <span className="mono">git log --oneline</span> e o remoto com <span className="mono">git remote -v</span>.</li>
          <li><span className="check-ico">✅</span> Fazer uma alteração, commitar e enviar com <span className="mono">git push</span>.</li>
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
        <h2 className="slide-title">Você já sabe entrar em qualquer projeto</h2>
        <p className="slide-sub">
          Clonar é o primeiro passo para colaborar: é assim que você baixa o projeto de uma equipe ou de um
          repositório público para começar a contribuir.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Todo projeto open source que você encontra no GitHub pode ser clonado. É assim que milhares de
              pessoas baixam ferramentas como o VS Code para estudar e contribuir com o código.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: uma <strong>prática guiada</strong> publicando um projeto do zero.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaDez() {
  return <SlideDeck slides={slides} kicker="Aula 10" />;
}
