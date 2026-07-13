'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔀 Aula 10 · Colaboração</span>
        <h1 className="slide-title">
          Criando e <span className="accent">trocando branches</span>
        </h1>
        <p className="slide-sub">
          A partir de agora você começa a trabalhar como equipes profissionais: criando áreas de trabalho
          isoladas para cada funcionalidade e alternando entre elas com segurança.
        </p>
      </div>
    ),
  },
  {
    id: 'git-branch',
    label: 'git branch',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📍 git branch</span>
        <h2 className="slide-title">Em qual branch estou?</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — branch atual</span></div>
          <div className="deck-term-body">
            <span className="cmd">git branch</span>
            <span className="out ok">* main</span>
            <span className="comment"># o asterisco (*) indica a branch atual</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span><span className="mono">git branch</span> mostra todas as branches e <strong>destaca a atual</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'criar',
    label: 'Criar branch',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🌱 Criar branch</span>
        <h2 className="slide-title">Criar não é o mesmo que trocar</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — criar uma branch</span></div>
          <div className="deck-term-body">
            <span className="cmd">git branch feature-contato</span>
            <span className="cmd">git branch</span>
            <span className="out ok">* main</span>
            <span className="out">  feature-contato</span>
            <span className="comment"># ela foi criada, mas ainda estamos na main</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span><span className="mono">git branch</span> cria uma branch, <strong>mas não muda para ela</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'switch',
    label: 'git switch',
    steps: 1,
    render: (step) => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔀 git switch</span>
        <h2 className="slide-title">Trocando de branch</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — mudar de branch</span></div>
          <div className="deck-term-body">
            <span className="cmd">git switch feature-contato</span>
            <span className="out ok">Switched to branch &apos;feature-contato&apos;</span>
          </div>
        </div>
        <div className={`reveal ${step >= 1 ? 'show' : ''}`} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div className="deck-term">
            <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">atalho: criar + trocar</span></div>
            <div className="deck-term-body">
              <span className="cmd">git switch <span className="flag">-c</span> feature-sobre</span>
              <span className="comment"># -c é abreviação de --create (cria a branch E já muda para ela)</span>
            </div>
          </div>
          <p className="hint">💡 <span className="mono">git switch -</span> volta rapidinho para a última branch onde você estava.</p>
          <p className="hint">💡 Em tutoriais antigos você verá <span className="mono">git checkout</span> — hoje prefira <span className="mono">git switch</span>.</p>
        </div>
        {step < 1 && <p className="hint">Avance para o atalho criar + trocar →</p>}
      </div>
    ),
  },
  {
    id: 'isolamento',
    label: 'Cada branch, sua evolução',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🧪 Cada branch, sua evolução</span>
        <h2 className="slide-title">A alteração &ldquo;some&rdquo; e &ldquo;volta&rdquo;</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">demonstração</span></div>
          <div className="deck-term-body">
            <span className="comment"># na feature-contato: adiciona a seção Contato e faz commit</span>
            <span className="cmd">git switch main</span>
            <span className="out warn"># abra o README → a seção Contato desapareceu!</span>
            <span className="cmd">git switch feature-contato</span>
            <span className="out ok"># abra o README → a seção Contato reapareceu!</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Cada branch tem <strong>seu próprio histórico e suas próprias alterações</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'ponteiro',
    label: 'Branch = ponteiro',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🎯 Branch = ponteiro</span>
        <h2 className="slide-title">O que é uma branch, por dentro</h2>
        <div className="timeline">
          <div className="tl-node is-start"><div className="tl-dot">1</div><span className="tl-label">commit</span></div>
          <div className="tl-connector" />
          <div className="tl-node"><div className="tl-dot">2</div><span className="tl-label">commit</span><span className="tl-sub">⭐ main</span></div>
          <div className="tl-connector" />
          <div className="tl-node is-final"><div className="tl-dot">3</div><span className="tl-label">commit</span><span className="tl-sub">🌿 feature · 📍 HEAD</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Uma branch é só um <strong>marcador que aponta para um commit</strong>. Ao trocar de branch, o <span className="mono">HEAD</span> (Aula 5) se move junto — por isso os arquivos mudam.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'merge-local',
    label: 'Merge local',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔗 Merge local</span>
        <h2 className="slide-title">Trazendo a branch de volta para a main</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — juntar no seu computador</span></div>
          <div className="deck-term-body">
            <span className="comment"># terminei o contato.md na branch feature-contato</span>
            <span className="cmd">git switch main</span>
            <span className="cmd">git merge feature-contato</span>
            <span className="out ok">Fast-forward · contato.md atualizado na main</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Você <strong>não precisa do GitHub</strong> para integrar: <span className="mono">git merge</span> junta a branch na <span className="mono">main</span> ali mesmo, no seu repositório.</span>
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
        <h2 className="slide-title">Organizando suas branches</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">🏷️</div><h4>Nomes descritivos</h4><p><span className="mono">feature-login</span> em vez de <span className="mono">teste</span> ou <span className="mono">branch1</span>.</p></div>
          <div className="tip-card"><div className="tip-ico">1️⃣</div><h4>Uma branch por funcionalidade</h4><p>Evite misturar várias coisas na mesma branch.</p></div>
          <div className="tip-card"><div className="tip-ico">🔎</div><h4>Verifique onde você está</h4><p>Antes de trabalhar, rode <span className="mono">git branch</span>.</p></div>
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
          <li><span className="check-ico">✅</span> Criar <span className="mono">feature-sobre</span> e trocar para ela.</li>
          <li><span className="check-ico">✅</span> Adicionar uma seção ao README e fazer um commit.</li>
          <li><span className="check-ico">✅</span> Voltar para a <span className="mono">main</span> e ver a alteração sumir.</li>
          <li><span className="check-ico">✅</span> Voltar para <span className="mono">feature-sobre</span> e ver a alteração voltar.</li>
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
        <h2 className="slide-title">Branches isolam o trabalho</h2>
        <p className="slide-sub">
          Você aprendeu a criar branches e alternar entre elas — desenvolvendo novas funcionalidades sem
          alterar a versão principal.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Em muitas empresas, ninguém faz commits diretamente na <span className="mono">main</span>. Cada
              funcionalidade começa em uma branch própria, o que facilita a revisão e permite que várias
              pessoas trabalhem ao mesmo tempo.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: o fluxo de trabalho com <strong>Feature Branch</strong>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaDez() {
  return <SlideDeck slides={slides} kicker="Aula 10" />;
}
