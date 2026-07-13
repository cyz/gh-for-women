'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">📁 Aula 3 · Fundamentos</span>
        <h1 className="slide-title">
          Criando seu primeiro repositório <span className="accent">(git init)</span>
        </h1>
        <p className="slide-sub">
          Antes do Git, uma pasta é só uma pasta. Depois do <span className="mono">git init</span>, ela passa
          a registrar todo o histórico das alterações.
        </p>
      </div>
    ),
  },
  {
    id: 'repositorio',
    label: 'O que é um repositório',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">📦 Repositório</span>
        <h2 className="slide-title">Qual dessas pastas o Git controla?</h2>
        <div className="where-grid" style={{ maxWidth: 640 }}>
          <div className="where-item"><span className="where-ico">📁</span><span>receitas</span></div>
          <div className="where-item"><span className="where-ico">📁</span><span>fotos</span></div>
          <div className="where-item"><span className="where-ico">📁</span><span>meu-primeiro-projeto</span></div>
        </div>
        <p className="slide-sub"><strong>Resposta: nenhuma.</strong> O Git só acompanha um projeto quando criamos um repositório nele.</p>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Um repositório é um <strong>projeto que está sendo acompanhado pelo Git</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'criar-pasta',
    label: 'Criar a pasta',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🗂️ Preparando</span>
        <h2 className="slide-title">Uma pasta comum com um arquivo</h2>
        <p className="slide-sub">
          No VS Code: <strong>File → Open Folder</strong>, crie <span className="mono">meu-primeiro-projeto</span> e
          dentro dela um <span className="mono">README.md</span>.
        </p>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">Explorer — VS Code</span></div>
          <div className="deck-term-body">
            <span className="out">📁 meu-primeiro-projeto</span>
            <span className="out">   📄 README.md</span>
            <span className="comment"># conteúdo: # Meu Primeiro Projeto</span>
          </div>
        </div>
        <p className="slide-sub">Neste momento, o Git ainda não está fazendo absolutamente nada.</p>
      </div>
    ),
  },
  {
    id: 'git-init',
    label: 'git init',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">✨ git init</span>
        <h2 className="slide-title">Transformando a pasta em repositório</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — inicializar</span></div>
          <div className="deck-term-body">
            <span className="cmd">git init</span>
            <span className="out ok">Initialized empty Git repository in ...</span>
          </div>
        </div>
        <p className="slide-sub">
          &ldquo;Visualmente, o que mudou?&rdquo; &nbsp;→&nbsp; Quase nada!
        </p>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>A maior parte do trabalho do Git acontece <strong>nos bastidores</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'pasta-git',
    label: 'A pasta .git',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔍 A pasta .git</span>
        <h2 className="slide-title">O que aparece por trás</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">Explorer — arquivos ocultos visíveis</span></div>
          <div className="deck-term-body">
            <span className="out">📁 meu-primeiro-projeto</span>
            <span className="out ok">   📁 .git  <span className="comment"># config · HEAD · objects · refs</span></span>
            <span className="out">   📄 README.md</span>
          </div>
        </div>
        <div className="where-grid" style={{ maxWidth: 720 }}>
          <div className="where-item"><span className="where-ico">🕒</span><span>Histórico do projeto</span></div>
          <div className="where-item"><span className="where-ico">⚙️</span><span>Configurações</span></div>
          <div className="where-item"><span className="where-ico">🌿</span><span>Informações das branches</span></div>
        </div>
        <p className="slide-sub">Você não precisa editar nada aqui — o Git cuida disso automaticamente.</p>
      </div>
    ),
  },
  {
    id: 'apagar-git',
    label: 'E se apagar .git?',
    steps: 3,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🧠 Curiosidade</span>
        <h2 className="slide-title">E se alguém apagar a pasta .git?</h2>
        <ul className="check-list ask" style={{ maxWidth: 620 }}>
          <li className={`reveal ${step >= 1 ? 'show' : ''}`}><span className="check-ico">📄</span> O arquivo README continua existindo? <strong style={{ marginLeft: 6, color: '#4ade80' }}>Sim</strong></li>
          <li className={`reveal ${step >= 2 ? 'show' : ''}`}><span className="check-ico">📁</span> O projeto continua existindo? <strong style={{ marginLeft: 6, color: '#4ade80' }}>Sim</strong></li>
          <li className={`reveal ${step >= 3 ? 'show' : ''}`}><span className="check-ico">🕒</span> O histórico continua existindo? <strong style={{ marginLeft: 6, color: '#f87171' }}>Não</strong></li>
        </ul>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>A pasta <span className="mono">.git</span> contém <strong>toda a inteligência do Git</strong>.</span>
        </div>
        {step < 3 && <p className="hint">Avance para revelar cada resposta →</p>}
      </div>
    ),
  },
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">Começando organizada</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🚀</div>
            <h4>Inicialize logo no início</h4>
            <p>Não espere semanas para começar a versionar o projeto.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">1️⃣</div>
            <h4>Um projeto = um repositório</h4>
            <p>Evite juntar vários projetos diferentes no mesmo repositório.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">🚫</div>
            <h4>Nunca edite a pasta .git</h4>
            <p>Deixe o Git cuidar dos arquivos internos.</p>
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
        <h2 className="slide-title">Faça você mesma</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Criar a pasta <span className="mono">meu-primeiro-projeto</span>.</li>
          <li><span className="check-ico">✅</span> Criar o <span className="mono">README.md</span> com um título.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git init</span> no terminal.</li>
          <li><span className="check-ico">✅</span> Encontrar a pasta oculta <span className="mono">.git</span>.</li>
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
        <h2 className="slide-title">Primeiro repositório criado!</h2>
        <p className="slide-sub">
          Um repositório nada mais é do que uma pasta que passou a ser acompanhada pelo Git.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O comando <span className="mono">git init</span> não cria um projeto — ele transforma uma pasta
              existente em um repositório Git. Por isso você pode versionar um projeto novo ou adicionar
              controle de versão a um projeto que já existe.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: registrar alterações com <span className="mono">status</span>, <span className="mono">add</span> e <span className="mono">commit</span>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaTres() {
  return <SlideDeck slides={slides} kicker="Aula 3" />;
}
