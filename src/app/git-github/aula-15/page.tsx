'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">⚡ Aula 15 · Colaboração</span>
        <h1 className="slide-title">
          Resolvendo <span className="accent">conflitos de merge</span>
        </h1>
        <p className="slide-sub">
          E se duas pessoas alterarem exatamente a mesma parte de um arquivo? O Git não sabe qual manter — e
          isso gera um conflito.
        </p>
        <ul className="obj-list">
          <li><span className="obj-num">1</span> Entender por que conflitos acontecem.</li>
          <li><span className="obj-num">2</span> Identificar um conflito de merge.</li>
          <li><span className="obj-num">3</span> Resolver um conflito simples no VS Code.</li>
          <li><span className="obj-num">4</span> Concluir a integração após resolver.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'quando',
    label: 'Quando acontece',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">💥 Quando acontece</span>
        <h2 className="slide-title">Duas mudanças no mesmo trecho</h2>
        <div className="vs-split" style={{ maxWidth: 900 }}>
          <div className="vs-panel bad">
            <h4>👩 Pessoa A</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 13 }}>Contato:<br />linkedin.com/cynthiazanoni</p>
          </div>
          <div className="vs-arrow">⚡</div>
          <div className="vs-panel bad">
            <h4>🧑 Pessoa B</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 13 }}>Contato:<br />github.com/cynthiazanoni</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Um conflito acontece quando o Git <strong>não consegue decidir sozinho</strong> qual alteração manter.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'como-aparece',
    label: 'Como aparece',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔎 Como aparece</span>
        <h2 className="slide-title">Os marcadores de conflito</h2>
        <div className="conflict-block">
          <div><span className="marker">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span> <span className="lbl-head">(versão atual — main)</span></div>
          <div>GitHub:</div>
          <div>github.com/cynthiazanoni</div>
          <div><span className="marker">=======</span></div>
          <div>LinkedIn:</div>
          <div>linkedin.com/cynthiazanoni</div>
          <div><span className="marker">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature-linkedin</span> <span className="lbl-in">(a outra branch)</span></div>
        </div>
        <p className="slide-sub">Parece assustador, mas os marcadores só mostram <strong>as duas versões</strong> lado a lado.</p>
      </div>
    ),
  },
  {
    id: 'resolvendo',
    label: 'Resolvendo',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🛠️ Resolvendo</span>
        <h2 className="slide-title">O VS Code ajuda</h2>
        <div className="where-grid" style={{ maxWidth: 720 }}>
          <div className="where-item"><span className="where-ico">⬅️</span><span>Accept Current</span></div>
          <div className="where-item"><span className="where-ico">➡️</span><span>Accept Incoming</span></div>
          <div className="where-item"><span className="where-ico">🔀</span><span>Accept Both</span></div>
        </div>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">finalizar após escolher</span></div>
          <div className="deck-term-body">
            <span className="cmd">git add README.md</span>
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Resolve conflito de merge&quot;</span></span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Resolver um conflito é <strong>decidir manualmente</strong> qual versão deve permanecer.</span>
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
        <h2 className="slide-title">Reduzindo conflitos</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">⬇️</div><h4>Faça pull com frequência</h4><p>Manter o local atualizado evita surpresas.</p></div>
          <div className="tip-card"><div className="tip-ico">🧩</div><h4>Commits pequenos</h4><p>Menos linhas alteradas, menos conflitos.</p></div>
          <div className="tip-card"><div className="tip-ico">🗣️</div><h4>Converse com a equipe</h4><p>Especialmente ao mexer no mesmo arquivo.</p></div>
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
          <li><span className="check-ico">✅</span> Criar uma branch e alterar uma linha do README.</li>
          <li><span className="check-ico">✅</span> Voltar para a <span className="mono">main</span> e alterar a mesma linha.</li>
          <li><span className="check-ico">✅</span> Tentar o merge e ler os marcadores de conflito.</li>
          <li><span className="check-ico">✅</span> Resolver no VS Code e finalizar com um commit.</li>
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
        <h2 className="slide-title">Conflitos fazem parte</h2>
        <p className="slide-sub">
          O importante não é evitar todos os conflitos, mas entender por que acontecem e saber resolvê-los
          com segurança.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Conflitos de merge são comuns até em equipes muito experientes. Eles não indicam que alguém
              errou — apenas que duas alterações diferentes precisam ser conciliadas. Resolvê-los é uma
              habilidade valorizada no mercado.
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

export default function AulaQuinze() {
  return <SlideDeck slides={slides} kicker="Aula 15" />;
}
