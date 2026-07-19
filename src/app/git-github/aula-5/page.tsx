'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🚫 Aula 5 · Fundamentos</span>
        <h1 className="slide-title">
          O que <span className="accent">não versionar</span>: o .gitignore
        </h1>
        <p className="slide-sub">
          Nem todo arquivo deve entrar no histórico do projeto. O <span className="mono">.gitignore</span>{' '}
          diz ao Git quais arquivos e pastas ele deve ignorar por completo.
        </p>
      </div>
    ),
  },
  {
    id: 'problema',
    label: 'Por que ignorar arquivos',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🤔 Por que ignorar arquivos</span>
        <h2 className="slide-title">Alguns arquivos não pertencem ao histórico</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🔑</div>
            <h4>Senhas e segredos</h4>
            <p>Arquivos como <span className="mono">.env</span> guardam senhas e chaves — nunca devem ir para o GitHub.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">📦</div>
            <h4>Dependências</h4>
            <p>Pastas como <span className="mono">node_modules/</span> são geradas e podem ter milhares de arquivos.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">💻</div>
            <h4>Arquivos do sistema</h4>
            <p><span className="mono">.DS_Store</span> (Mac) ou configs do editor não interessam ao projeto.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Versionar só o que é <strong>parte real do projeto</strong> mantém o repositório limpo e seguro.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'o-que-e',
    label: 'O que é o .gitignore',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📄 O que é o .gitignore</span>
        <h2 className="slide-title">Um arquivo de texto na raiz do projeto</h2>
        <p className="slide-sub">
          O <span className="mono">.gitignore</span> é um arquivo simples, criado na raiz do repositório, com
          uma lista de nomes e padrões. Tudo que estiver nele o Git passa a ignorar.
        </p>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O Git lê o <span className="mono">.gitignore</span> automaticamente — não é preciso rodar nenhum comando especial.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'sintaxe',
    label: 'Sintaxe básica',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">✍️ Sintaxe básica</span>
        <h2 className="slide-title">Como escrever as regras</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">.gitignore</span></div>
          <div className="deck-term-body">
            <span className="comment"># linhas com # são comentários</span>
            <span className="out">node_modules/</span>
            <span className="comment"># a barra no fim indica uma pasta inteira</span>
            <span className="out">.env</span>
            <span className="comment"># um nome exato ignora aquele arquivo</span>
            <span className="out">*.log</span>
            <span className="comment"># o * significa &ldquo;qualquer nome&rdquo; → ignora todos os .log</span>
            <span className="out">.DS_Store</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Cada linha é uma regra: um nome, uma pasta (<span className="mono">/</span>) ou um padrão com <span className="mono">*</span>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'status',
    label: 'O efeito no git status',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔎 O efeito no git status</span>
        <h2 className="slide-title">Os arquivos ignorados somem do status</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">sem .gitignore</span></div>
          <div className="deck-term-body">
            <span className="cmd">git status</span>
            <span className="out warn">Untracked files:</span>
            <span className="out">  node_modules/</span>
            <span className="out">  .env</span>
            <span className="out">  README.md</span>
          </div>
        </div>
        <div className={`reveal ${step >= 1 ? 'show' : ''}`} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="deck-term">
            <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">depois de criar o .gitignore</span></div>
            <div className="deck-term-body">
              <span className="cmd">git status</span>
              <span className="out ok">  README.md</span>
              <span className="comment"># node_modules e .env sumiram: o Git está ignorando</span>
            </div>
          </div>
        </div>
        {step < 1 && <p className="hint">Avance para ver o status depois do .gitignore →</p>}
      </div>
    ),
  },
  {
    id: 'ja-rastreado',
    label: 'Arquivo já versionado',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">⚠️ Arquivo já versionado</span>
        <h2 className="slide-title">O .gitignore não remove o que já foi commitado</h2>
        <p className="slide-sub">
          Se um arquivo já entrou no histórico antes de você ignorá-lo, adicioná-lo ao{' '}
          <span className="mono">.gitignore</span> não basta. É preciso tirá-lo do controle uma vez.
        </p>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">parar de rastrear um arquivo</span></div>
          <div className="deck-term-body">
            <span className="cmd">git rm <span className="flag">--cached</span> .env</span>
            <span className="comment"># --cached remove só do Git, mantendo o arquivo no seu computador</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Melhor criar o <span className="mono">.gitignore</span> <strong>no começo</strong>, antes do primeiro commit.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'templates',
    label: 'Você não precisa começar do zero',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🧰 Você não precisa começar do zero</span>
        <h2 className="slide-title">Modelos prontos por tecnologia</h2>
        <p className="slide-sub">
          Cada linguagem tem arquivos típicos para ignorar. Em vez de decorar, use um modelo pronto e adapte.
        </p>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🌐</div>
            <h4>gitignore.io</h4>
            <p>Gera um <span className="mono">.gitignore</span> a partir da sua linguagem e editor.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">🐙</div>
            <h4>github/gitignore</h4>
            <p>Repositório oficial do GitHub com modelos para dezenas de tecnologias.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">✨</div>
            <h4>Na criação do repo</h4>
            <p>Ao criar um repositório no GitHub, dá para já escolher um modelo de <span className="mono">.gitignore</span>.</p>
          </div>
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
        <h2 className="slide-title">Crie seu primeiro .gitignore</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Criar um arquivo <span className="mono">.gitignore</span> na raiz do projeto.</li>
          <li><span className="check-ico">✅</span> Adicionar as linhas <span className="mono">node_modules/</span> e <span className="mono">.DS_Store</span>.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git status</span> e ver que os itens foram ignorados.</li>
          <li><span className="check-ico">✅</span> Fazer o commit incluindo o próprio <span className="mono">.gitignore</span>.</li>
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
        <h2 className="slide-title">Repositório limpo desde o início</h2>
        <p className="slide-sub">
          Com o <span className="mono">.gitignore</span>, o histórico guarda só o que importa e você evita
          publicar senhas ou arquivos desnecessários.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Vazar um arquivo <span className="mono">.env</span> com senhas é um dos erros mais comuns de
              quem está começando. Um <span className="mono">.gitignore</span> bem feito é a primeira linha de
              defesa contra isso.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: consultar o <strong>histórico</strong> e boas práticas de commit com <span className="mono">git log</span>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaCinco() {
  return <SlideDeck slides={slides} kicker="Aula 5" />;
}
