'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">💾 Aula 4 · Fundamentos</span>
        <h1 className="slide-title">
          Registrando alterações: <span className="accent">status, add e commit</span>
        </h1>
        <p className="slide-sub">
          O Git não salva alterações automaticamente. Nós decidimos quando criar uma nova versão do projeto,
          usando <span className="mono">status</span>, <span className="mono">add</span> e{' '}
          <span className="mono">commit</span>.
        </p>
      </div>
    ),
  },
  {
    id: 'ciclo',
    label: 'O ciclo básico',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🔄 O ciclo básico</span>
        <h2 className="slide-title">Do arquivo ao histórico</h2>
        <div className="stage-flow">
          <div className="stage-box"><div className="st-ico">✏️</div><h4>Working Directory</h4><p>Onde você faz as alterações</p></div>
          <div className="stage-arrow"><span className="cmd-tag">git add</span><span>→</span></div>
          <div className="stage-box"><div className="st-ico">📥</div><h4>Staging Area</h4><p>Área de preparação</p></div>
          <div className="stage-arrow"><span className="cmd-tag">git commit</span><span>→</span></div>
          <div className="stage-box is-final"><div className="st-ico">📸</div><h4>Histórico</h4><p>Versão salva</p></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">📷</span>
          <span>Um <strong>commit</strong> é como uma <strong>fotografia</strong> do projeto naquele momento — e o <span className="mono">git add</span> é a preparação antes da foto.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'status',
    label: 'git status',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔎 git status</span>
        <h2 className="slide-title">Qual é a situação do projeto?</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">antes de qualquer alteração</span></div>
          <div className="deck-term-body">
            <span className="cmd">git status</span>
            <span className="out">On branch main</span>
            <span className="out">No commits yet</span>
            <span className="out">nothing to commit</span>
          </div>
        </div>
        <div className={`reveal ${step >= 1 ? 'show' : ''}`} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="deck-term">
            <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">depois de editar o README</span></div>
            <div className="deck-term-body">
              <span className="cmd">git status</span>
              <span className="out warn">Changes not staged for commit</span>
              <span className="comment"># o Git percebeu a alteração, mas ela ainda não foi preparada</span>
            </div>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span><span className="mono">git status</span> responde: &ldquo;Qual é a situação atual do meu projeto?&rdquo;</span>
        </div>
        {step < 1 && <p className="hint">Avance: edite o README e rode status de novo →</p>}
      </div>
    ),
  },
  {
    id: 'add',
    label: 'git add',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📥 git add</span>
        <h2 className="slide-title">Preparando as alterações</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">preparar um arquivo</span></div>
          <div className="deck-term-body">
            <span className="cmd">git add README.md</span>
            <span className="cmd">git status</span>
            <span className="out ok">Changes to be committed</span>
            <span className="comment"># o arquivo mudou de seção: agora está pronto para virar uma versão</span>
          </div>
        </div>
        <div className={`reveal ${step >= 1 ? 'show' : ''}`}>
          <div className="key-msg" style={{ marginTop: 0 }}>
            <span className="key-icon">💡</span>
            <span><span className="mono">git add .</span> prepara <strong>todos</strong> os arquivos modificados de uma vez.</span>
          </div>
        </div>
        {step < 1 && <p className="hint">Avance para o atalho de preparar tudo →</p>}
      </div>
    ),
  },
  {
    id: 'commit',
    label: 'git commit',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">📸 git commit</span>
        <h2 className="slide-title">Registrando a versão</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">criar o commit</span></div>
          <div className="deck-term-body">
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Adiciona descrição inicial ao projeto&quot;</span></span>
            <span className="comment"># -m é abreviação de --message (a mensagem do commit vem logo em seguida)</span>
            <span className="cmd">git status</span>
            <span className="out ok">nothing to commit, working tree clean</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Cada commit representa <strong>um ponto da evolução</strong> do projeto.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'mensagens',
    label: 'Mensagens de commit',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">✍️ Mensagens de commit</span>
        <h2 className="slide-title">Uma boa mensagem responde: o que mudou?</h2>
        <div className="vs-split">
          <div className="vs-panel bad">
            <h4>❌ Evite</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 14, lineHeight: 2 }}>teste<br />alterações<br />123</p>
          </div>
          <div className="vs-arrow">➜</div>
          <div className="vs-panel good">
            <h4>✅ Prefira</h4>
            <p className="mono" style={{ color: '#a7e3b0', fontSize: 13.5, lineHeight: 1.9 }}>Adiciona descrição inicial<br />Cria página inicial<br />Atualiza arquivo README</p>
          </div>
        </div>
        <p className="slide-sub">Daqui a seis meses, você ainda vai lembrar o que mudou?</p>
      </div>
    ),
  },
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">Commitando bem</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🔎</div>
            <h4>Consulte o status sempre</h4>
            <p><span className="mono">git status</span> é o comando que você mais vai usar.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">🧩</div>
            <h4>Faça commits pequenos</h4>
            <p>Evite alterar dezenas de arquivos antes de criar um commit.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">📝</div>
            <h4>Mensagens objetivas</h4>
            <p>&ldquo;Adiciona formulário de contato&rdquo; em vez de &ldquo;Atualizações&rdquo;.</p>
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
        <h2 className="slide-title">O ciclo completo</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Adicionar uma linha ao <span className="mono">README.md</span>.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git status</span>.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git add README.md</span> e conferir o status.</li>
          <li><span className="check-ico">✅</span> Criar o commit e ver <span className="mono">working tree clean</span>.</li>
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
        <h2 className="slide-title">Primeira versão registrada!</h2>
        <p className="slide-sub">
          O processo acontece em três etapas: verificar as alterações, preparar os arquivos e criar um
          commit.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Um projeto profissional pode ter milhares de commits ao longo da vida. Em grandes projetos
              open source, como o Linux ou o VS Code, o histórico registra anos de evolução — por isso boas
              mensagens de commit são tão valorizadas.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: aprender o que <strong>não</strong> versionar usando o <span className="mono">.gitignore</span>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaQuatro() {
  return <SlideDeck slides={slides} kicker="Aula 4" />;
}
