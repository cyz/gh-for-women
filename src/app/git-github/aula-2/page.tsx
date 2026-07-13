'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🛠️ Aula 2 · Fundamentos</span>
        <h1 className="slide-title">
          Instalação e <span className="accent">configuração inicial</span> do Git
        </h1>
        <p className="slide-sub">
          Vamos preparar o computador para usar o Git: instalar, conferir a instalação e configurar seu nome
          e e-mail. É um processo simples e você só precisa fazer isso uma vez.
        </p>
      </div>
    ),
  },
  {
    id: 'ambiente',
    label: 'Preparar o ambiente',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🧩 Contexto</span>
        <h2 className="slide-title">Antes de criar repositórios</h2>
        <div className="where-grid" style={{ maxWidth: 720 }}>
          <div className="where-item"><span className="where-ico">📦</span><span>O Git é um programa instalado no computador</span></div>
          <div className="where-item"><span className="where-ico">♻️</span><span>Depois de instalado, serve para qualquer projeto</span></div>
          <div className="where-item"><span className="where-ico">🪪</span><span>Vamos dizer ao Git quem somos nós</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Antes de usar o Git, precisamos <strong>preparar nosso ambiente</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'instalar',
    label: 'Instalando o Git',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker">⬇️ Instalação</span>
        <h2 className="slide-title">Baixe e verifique</h2>
        <p className="slide-sub">
          Acesse <span className="mono" style={{ color: '#93c5fd' }}>git-scm.com</span>, baixe para o seu
          sistema e instale. Depois, abra o terminal do VS Code (<strong>Terminal → New Terminal</strong>) e
          confirme:
        </p>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — verificar instalação</span></div>
          <div className="deck-term-body">
            <span className="cmd">git --version</span>
            <span className="out ok">git version 2.xx.x</span>
          </div>
        </div>
        <div className={`reveal ${step >= 1 ? 'show' : ''}`} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div className="deck-term">
            <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">se aparecer erro…</span></div>
            <div className="deck-term-body">
              <span className="cmd">git --version</span>
              <span className="out err">git: command not found</span>
              <span className="comment"># O Git ainda não foi instalado ou a instalação não terminou.</span>
            </div>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Para verificar se o Git está instalado, use sempre <span className="mono">git --version</span>.</span>
        </div>
        {step < 1 && <p className="hint">Avance para ver o erro mais comum →</p>}
      </div>
    ),
  },
  {
    id: 'identidade',
    label: 'Configurando identidade',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🪪 Identidade</span>
        <h2 className="slide-title">Dizendo ao Git quem somos</h2>
        <p className="slide-sub">Cada alteração registrada guarda autor, e-mail, data e horário.</p>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — configuração global</span></div>
          <div className="deck-term-body">
            <span className="cmd">git config <span className="flag">--global</span> user.name <span className="str">&quot;Ana Silva&quot;</span></span>
            <span className="cmd">git config <span className="flag">--global</span> user.email <span className="str">&quot;ana@email.com&quot;</span></span>
          </div>
        </div>
        <div className="where-grid" style={{ maxWidth: 640 }}>
          <div className="where-item"><span className="where-ico">👤</span><span><span className="mono">user.name</span> — nome que aparece como autor</span></div>
          <div className="where-item"><span className="where-ico">📧</span><span><span className="mono">user.email</span> — identifica o autor</span></div>
        </div>
      </div>
    ),
  },
  {
    id: 'verificar',
    label: 'Verificando',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">✅ Conferindo</span>
        <h2 className="slide-title">Suas configurações</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — listar configurações</span></div>
          <div className="deck-term-body">
            <span className="cmd">git config <span className="flag">--global</span> <span className="flag">--list</span></span>
            <span className="out">user.name=Ana Silva</span>
            <span className="out">user.email=ana@email.com</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Sempre que tiver dúvida, use <span className="mono">git config --global --list</span> para conferir.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'global',
    label: 'Configuração global',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🌐 O que significa --global</span>
        <h2 className="slide-title">Uma configuração para todos os projetos</h2>
        <div className="stage-flow" style={{ maxWidth: 720 }}>
          <div className="stage-box"><div className="st-ico">💻</div><h4>Meu computador</h4><p>Ana Silva · ana@email.com</p></div>
          <div className="stage-arrow"><span>→</span></div>
          <div className="stage-box"><div className="st-ico">📁</div><h4>Projeto A</h4></div>
          <div className="stage-box"><div className="st-ico">📁</div><h4>Projeto B</h4></div>
          <div className="stage-box"><div className="st-ico">📁</div><h4>Projeto C</h4></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Com <span className="mono">--global</span> você <strong>não precisa reconfigurar</strong> seu nome a cada novo projeto.</span>
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
        <h2 className="slide-title">Configurando com cuidado</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🏷️</div>
            <h4>Use um nome reconhecível</h4>
            <p>Prefira &ldquo;Ana Silva&rdquo; a &ldquo;Notebook Novo&rdquo; ou &ldquo;Usuário&rdquo;.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">📧</div>
            <h4>Use um e-mail que você usa</h4>
            <p>Se pretende usar o GitHub, prefira o mesmo e-mail da plataforma.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">🔎</div>
            <h4>Confira sempre</h4>
            <p>Na dúvida, rode <span className="mono">git config --global --list</span>.</p>
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
          <li><span className="check-ico">✅</span> Instalar o Git e abrir o VS Code + Terminal.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git --version</span>.</li>
          <li><span className="check-ico">✅</span> Configurar <span className="mono">user.name</span> e <span className="mono">user.email</span>.</li>
          <li><span className="check-ico">✅</span> Conferir com <span className="mono">git config --global --list</span>.</li>
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
        <h2 className="slide-title">Ambiente pronto!</h2>
        <p className="slide-sub">
          Você preparou o computador e configurou sua identidade — que será usada para registrar todas as
          suas alterações.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O Git foi criado em 2005 por Linus Torvalds, o mesmo criador do Linux. Ele desenvolveu a
              ferramenta para facilitar o trabalho colaborativo no kernel do Linux, um projeto com milhares
              de contribuidores no mundo todo.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: criar nosso <strong>primeiro repositório Git</strong> com <span className="mono">git init</span>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaDois() {
  return <SlideDeck slides={slides} kicker="Aula 2" />;
}
