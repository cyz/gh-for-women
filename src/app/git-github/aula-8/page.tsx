'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">☁️ Aula 8 · GitHub</span>
        <h1 className="slide-title">
          Criando seu primeiro <span className="accent">repositório no GitHub</span>
        </h1>
        <p className="slide-sub">
          Até agora tudo ficou no computador. E se ele apresentar um problema, ou você precisar compartilhar
          o projeto? É aqui que entra o GitHub: a nuvem onde vamos hospedar o repositório e, mais adiante,
          colaborar com outras pessoas.
        </p>
      </div>
    ),
  },
  {
    id: 'git-x-github',
    label: 'Git × GitHub',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">⚖️ Git × GitHub</span>
        <h2 className="slide-title">Não são a mesma coisa</h2>
        <div className="gh-compare">
          <div className="gh-col git">
            <h4>🔧 Git</h4>
            <ul>
              <li>Instalado no computador</li>
              <li>Controla versões</li>
              <li>Funciona offline</li>
              <li>Criado em 2005</li>
            </ul>
          </div>
          <div className="gh-col github">
            <h4>🐙 GitHub</h4>
            <ul>
              <li>Plataforma na nuvem</li>
              <li>Hospeda repositórios</li>
              <li>Facilita a colaboração</li>
              <li>Lançado em 2008</li>
            </ul>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>É como o Word (Git) e o OneDrive/Google Drive (GitHub): <strong>Git controla versões, GitHub hospeda e compartilha</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'conta',
    label: 'Criar conta',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🧑‍💻 Criar conta</span>
        <h2 className="slide-title">Cadastro no GitHub</h2>
        <p className="slide-sub">
          Acesse <span className="mono" style={{ color: '#93c5fd' }}>github.com</span> e clique em <strong>Sign up</strong>. Se já tiver conta, é só fazer login.
        </p>
        <div className="where-grid" style={{ maxWidth: 620 }}>
          <div className="where-item"><span className="where-ico">🏷️</span><span>Username</span></div>
          <div className="where-item"><span className="where-ico">📧</span><span>Email</span></div>
          <div className="where-item"><span className="where-ico">🔒</span><span>Password</span></div>
        </div>
      </div>
    ),
  },
  {
    id: 'novo-repo',
    label: 'Criar repositório',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">➕ Novo repositório</span>
        <h2 className="slide-title">Um espaço para o seu projeto</h2>
        <div className="pr-mock" style={{ maxWidth: 560 }}>
          <div className="pr-head"><span className="pr-title">New repository</span></div>
          <div className="pr-body" style={{ borderTop: 'none' }}>
            <p style={{ marginBottom: 10 }}>📛 Repository name: <span className="mono" style={{ color: '#93c5fd' }}>meu-primeiro-projeto</span></p>
            <p style={{ marginBottom: 10 }}>🌍 Visibility: <strong style={{ color: '#a7e3b0' }}>✔ Public</strong> · 🔒 Private</p>
            <p style={{ color: '#fca5a5' }}>☐ Add a README &nbsp; ☐ .gitignore &nbsp; ☐ License</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">⚠️</span>
          <span>Como já temos um README local, <strong>não marque</strong> &ldquo;Add a README&rdquo; — evitamos ter dois arquivos diferentes.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'local-remoto',
    label: 'Local × remoto',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔗 Local × remoto</span>
        <h2 className="slide-title">Dois lugares, ainda sem conexão</h2>
        <div className="stage-flow" style={{ maxWidth: 720 }}>
          <div className="stage-box"><div className="st-ico">💻</div><h4>Computador</h4><p>Repositório local (com seus arquivos)</p></div>
          <div className="stage-arrow"><span style={{ color: '#64748b' }}>⇢ ？ ⇠</span></div>
          <div className="stage-box"><div className="st-ico">☁️</div><h4>GitHub</h4><p>Repositório remoto (ainda vazio)</p></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Criar um repositório no GitHub <strong>não envia automaticamente</strong> os arquivos do seu computador.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tour-repo',
    label: 'A página do repositório',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🧭 A página do repositório</span>
        <h2 className="slide-title">A tela que aparece depois de criar</h2>
        <div className="pr-mock" style={{ maxWidth: 620 }}>
          <div className="pr-head"><span className="pr-title">Quick setup — meu-primeiro-projeto</span></div>
          <div className="pr-body">
            <p style={{ marginBottom: 10 }}>🔗 <span className="mono" style={{ color: '#93c5fd' }}>https://github.com/voce/meu-primeiro-projeto.git</span></p>
            <p>É esta URL que vamos usar para conectar o projeto do computador ao GitHub.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O repositório vazio já mostra a <strong>URL</strong> e as instruções para enviar o código — usaremos isso na próxima aula.</span>
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
          <li><span className="check-ico">✅</span> Criar conta (se necessário) e fazer login.</li>
          <li><span className="check-ico">✅</span> Criar um novo repositório <span className="mono">meu-primeiro-projeto</span>.</li>
          <li><span className="check-ico">✅</span> Escolher <strong>Public</strong>.</li>
          <li><span className="check-ico">✅</span> Não marcar README, .gitignore nem License.</li>
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
        <h2 className="slide-title">Espaço na nuvem criado!</h2>
        <p className="slide-sub">
          O projeto ainda existe só no computador. O repositório do GitHub é um espaço preparado para
          recebê-lo.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O GitHub hospeda centenas de milhões de repositórios, incluindo alguns dos maiores projetos
              open source do mundo, como o VS Code, o React, o Node.js e o Python.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: conectar o projeto local ao GitHub com <span className="mono">git remote add</span> e <span className="mono">git push</span>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaSeis() {
  return <SlideDeck slides={slides} kicker="Aula 8" />;
}
