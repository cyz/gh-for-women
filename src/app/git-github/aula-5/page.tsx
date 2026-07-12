'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🕒 Aula 5 · Fundamentos</span>
        <h1 className="slide-title">
          Histórico e <span className="accent">boas práticas de commit</span>
        </h1>
        <p className="slide-sub">
          O histórico é como uma linha do tempo da evolução do projeto — e mensagens claras fazem toda a
          diferença.
        </p>
        <ul className="obj-list">
          <li><span className="obj-num">1</span> Consultar o histórico com <span className="mono">git log</span>.</li>
          <li><span className="obj-num">2</span> Interpretar as principais informações de um commit.</li>
          <li><span className="obj-num">3</span> Entender a importância de mensagens claras.</li>
          <li><span className="obj-num">4</span> Aplicar boas práticas ao criar commits.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'historico',
    label: 'O histórico',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🧾 O histórico</span>
        <h2 className="slide-title">Cada commit guarda muito mais que arquivos</h2>
        <div className="cap-grid" style={{ maxWidth: 820 }}>
          <div className="cap-card"><div className="cap-ico">👤</div><h4>Autor</h4></div>
          <div className="cap-card"><div className="cap-ico">📅</div><h4>Data</h4></div>
          <div className="cap-card"><div className="cap-ico">⏰</div><h4>Horário</h4></div>
          <div className="cap-card"><div className="cap-ico">💬</div><h4>Mensagem</h4></div>
          <div className="cap-card"><div className="cap-ico">🔑</div><h4>Hash único</h4></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Cada commit representa <strong>um momento específico</strong> da evolução do projeto.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'git-log',
    label: 'git log',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📜 git log</span>
        <h2 className="slide-title">Visualizando o histórico</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — git log</span></div>
          <div className="deck-term-body">
            <span className="cmd">git log</span>
            <span className="out warn">commit a3f7d8e...</span>
            <span className="out">Author: Ana Silva &lt;ana@email.com&gt;</span>
            <span className="out">Date:   Tue Jul 15 10:30:00 2025</span>
            <span className="out">    Atualiza README com descrição do projeto</span>
            <span className="out warn">commit 9d41b5c...</span>
            <span className="out">Author: Ana Silva &lt;ana@email.com&gt;</span>
            <span className="out">    Cria README inicial</span>
          </div>
        </div>
        <p className="slide-sub">O <span className="mono">hash</span> é a &ldquo;impressão digital&rdquo; única de cada commit.</p>
      </div>
    ),
  },
  {
    id: 'oneline',
    label: 'git log --oneline',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">⚡ git log --oneline</span>
        <h2 className="slide-title">Uma forma rápida de consultar</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — versão compacta</span></div>
          <div className="deck-term-body">
            <span className="cmd">git log <span className="flag">--oneline</span></span>
            <span className="out"><span className="warn">a3f7d8e</span> Atualiza README com descrição do projeto</span>
            <span className="out"><span className="warn">9d41b5c</span> Cria README inicial</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span><span className="mono">git log --oneline</span> mostra hash reduzido + mensagem: perfeito para consultas rápidas.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'mensagens',
    label: 'Histórico útil',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">💬 Histórico útil</span>
        <h2 className="slide-title">Você entenderia só lendo a mensagem?</h2>
        <div className="vs-split">
          <div className="vs-panel bad">
            <h4>❌ Ruins</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 13.5, lineHeight: 2 }}>teste<br />alterações<br />atualização<br />123</p>
          </div>
          <div className="vs-arrow">➜</div>
          <div className="vs-panel good">
            <h4>✅ Boas</h4>
            <p className="mono" style={{ color: '#a7e3b0', fontSize: 12.5, lineHeight: 1.9 }}>Cria arquivo README<br />Adiciona descrição do projeto<br />Atualiza título da página<br />Corrige erro de digitação</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'verbos',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">Comece a mensagem com um verbo</h2>
        <div className="file-chaos" style={{ maxWidth: 700 }}>
          <div className="file-chip" style={{ minWidth: 120 }}><span className="file-ico">➕</span><span className="file-name" style={{ color: '#a7e3b0' }}>Adiciona</span></div>
          <div className="file-chip" style={{ minWidth: 120 }}><span className="file-ico">🔄</span><span className="file-name" style={{ color: '#a7e3b0' }}>Atualiza</span></div>
          <div className="file-chip" style={{ minWidth: 120 }}><span className="file-ico">🗑️</span><span className="file-name" style={{ color: '#a7e3b0' }}>Remove</span></div>
          <div className="file-chip" style={{ minWidth: 120 }}><span className="file-ico">🐛</span><span className="file-name" style={{ color: '#a7e3b0' }}>Corrige</span></div>
          <div className="file-chip" style={{ minWidth: 120 }}><span className="file-ico">✨</span><span className="file-name" style={{ color: '#a7e3b0' }}>Cria</span></div>
        </div>
        <div className="tips-grid" style={{ maxWidth: 720 }}>
          <div className="tip-card"><div className="tip-ico">🧩</div><h4>Commits pequenos</h4><p>Um commit por ideia deixa o histórico organizado.</p></div>
          <div className="tip-card"><div className="tip-ico">⏱️</div><h4>Commits frequentes</h4><p>Não espere terminar o projeto inteiro.</p></div>
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
        <h2 className="slide-title">Fazendo o histórico crescer</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Adicionar uma seção nova ao <span className="mono">README.md</span>.</li>
          <li><span className="check-ico">✅</span> <span className="mono">git add</span> + <span className="mono">git commit -m &quot;...&quot;</span> com boa mensagem.</li>
          <li><span className="check-ico">✅</span> Rodar <span className="mono">git log</span> e <span className="mono">git log --oneline</span>.</li>
          <li><span className="check-ico">✅</span> Ler as próprias mensagens: elas fazem sentido?</li>
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
        <h2 className="slide-title">O histórico é comunicação</h2>
        <p className="slide-sub">
          Cada commit faz parte da história do projeto, e um bom histórico depende de mensagens claras e
          objetivas.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Em muitas empresas, o histórico de commits é usado para entender como uma funcionalidade
              evoluiu, investigar quando um problema surgiu e até gerar automaticamente notas de versão
              (release notes).
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

export default function AulaCinco() {
  return <SlideDeck slides={slides} kicker="Aula 5" />;
}
