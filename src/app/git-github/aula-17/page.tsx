'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔍 Aula 17 · Colaboração</span>
        <h1 className="slide-title">
          Code Review: <span className="accent">revisando alterações</span> em um PR
        </h1>
        <p className="slide-sub">
          Mesmo pessoas experientes deixam passar detalhes. Ter outra pessoa olhando o código aumenta a
          qualidade, reduz erros e é uma das melhores formas de aprender em equipe.
        </p>
      </div>
    ),
  },
  {
    id: 'o-que-e',
    label: 'O que é Code Review',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🤝 O que é Code Review</span>
        <h2 className="slide-title">Colaboração, não julgamento</h2>
        <div className="where-grid" style={{ maxWidth: 720 }}>
          <div className="where-item"><span className="where-ico">✅</span><span>A alteração resolve o problema?</span></div>
          <div className="where-item"><span className="where-ico">👓</span><span>O código está claro?</span></div>
          <div className="where-item"><span className="where-ico">📐</span><span>Segue o padrão do projeto?</span></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O foco é <strong>melhorar o código e compartilhar conhecimento</strong> — como revisar um artigo antes de publicar.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'tela',
    label: 'A tela de revisão',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📂 Files changed</span>
        <h2 className="slide-title">A tela que revisores mais usam</h2>
        <div className="pr-mock">
          <div className="pr-head"><span className="pr-title">📂 Files changed · README.md</span></div>
          <div style={{ padding: '14px 20px' }}>
            <span className="diff-line diff-add">+ ## Contato</span>
            <span className="diff-line diff-add">+ Entre em contato pelo LinkedIn.</span>
            <span className="diff-line diff-rem">- (versão anterior)</span>
          </div>
          <div className="pr-body" style={{ borderTop: '1px dashed #20202e' }}>
            💬 <em>&ldquo;Gostei da ideia! Que tal detalhar um pouco mais esta seção?&rdquo;</em>
          </div>
        </div>
        <p className="slide-sub">O GitHub destaca exatamente o que foi <span style={{ color: '#4ade80' }}>adicionado</span> e <span style={{ color: '#f87171' }}>removido</span>.</p>
      </div>
    ),
  },
  {
    id: 'revisar-local',
    label: 'Revisar localmente',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">💻 Revisar localmente</span>
        <h2 className="slide-title">Trazendo o PR para a sua máquina</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — revisar de perto</span></div>
          <div className="deck-term-body">
            <span className="cmd">git fetch origin</span>
            <span className="comment"># baixa as branches novas do GitHub</span>
            <span className="cmd">git switch faq-horarios</span>
            <span className="comment"># entra na branch do PR para ler o texto de perto</span>
            <span className="cmd">git merge main</span>
            <span className="out warn"># se a main mudou a mesma linha → conflito (resolvemos como na Aula 19)</span>
          </div>
        </div>
        <p className="hint">💡 Com o GitHub CLI dá para pular etapas: <span className="mono">gh pr checkout &lt;número&gt;</span>.</p>
      </div>
    ),
  },
  {
    id: 'comentarios',
    label: 'Bons comentários',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">✍️ Bons comentários</span>
        <h2 className="slide-title">Específico ajuda, genérico não</h2>
        <div className="vs-split">
          <div className="vs-panel bad">
            <h4>❌ Pouco útil</h4>
            <p style={{ color: '#e2b4b4', fontSize: 14, lineHeight: 1.8 }}>&ldquo;Está errado.&rdquo;<br />&ldquo;Não gostei.&rdquo;</p>
          </div>
          <div className="vs-arrow">➜</div>
          <div className="vs-panel good">
            <h4>✅ Construtivo</h4>
            <p style={{ color: '#a7e3b0', fontSize: 13.5, lineHeight: 1.7 }}>&ldquo;Podemos usar um título mais específico para facilitar a leitura?&rdquo;<br />&ldquo;Talvez reorganizar esta seção ajude na leitura.&rdquo;</p>
          </div>
        </div>
        <p className="slide-sub">Nem todo comentário aponta problema — também podemos <strong>reconhecer boas soluções</strong>. 🎉</p>
      </div>
    ),
  },
  {
    id: 'o-que-revisar',
    label: 'O que revisar',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🧐 O que revisar</span>
        <h2 className="slide-title">Para iniciantes, mantenha simples</h2>
        <ul className="check-list ask">
          <li><span className="check-ico">❔</span> A alteração resolve o problema?</li>
          <li><span className="check-ico">❔</span> Está fácil de entender?</li>
          <li><span className="check-ico">❔</span> A mensagem do commit faz sentido?</li>
          <li><span className="check-ico">❔</span> O PR tem título e descrição claros?</li>
        </ul>
        <p className="slide-sub">Arquitetura e desempenho vêm com a experiência — sem pressa.</p>
      </div>
    ),
  },
  {
    id: 'enviar-review',
    label: 'Enviar o retorno',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">📮 Enviar o retorno</span>
        <h2 className="slide-title">Três formas de responder um PR</h2>
        <div className="cap-grid" style={{ maxWidth: 820 }}>
          <div className="cap-card"><div className="cap-ico">💬</div><h4>Comment</h4><p>Observações, sem aprovar nem barrar</p></div>
          <div className="cap-card"><div className="cap-ico">✅</div><h4>Approve</h4><p>Está pronto para o merge</p></div>
          <div className="cap-card"><div className="cap-ico">🔧</div><h4>Request changes</h4><p>Peça ajustes antes de integrar</p></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>No GitHub: <span className="mono">Files changed → Review changes</span>. Comece por um elogio e depois uma sugestão.</span>
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
        <h2 className="slide-title">Revisão respeitosa</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">🙌</div><h4>Comece pelo positivo</h4><p>Destaque algo bom antes de sugerir melhorias.</p></div>
          <div className="tip-card"><div className="tip-ico">💡</div><h4>Explique o motivo</h4><p>Uma sugestão não significa que o código está &ldquo;errado&rdquo;.</p></div>
          <div className="tip-card"><div className="tip-ico">👥</div><h4>Revise o código</h4><p>...e não a pessoa. A revisão é uma conversa técnica.</p></div>
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
          <li><span className="check-ico">✅</span> Abrir a aba <span className="mono">Files changed</span> de um PR.</li>
          <li><span className="check-ico">✅</span> Adicionar pelo menos <strong>um comentário positivo</strong>.</li>
          <li><span className="check-ico">✅</span> Adicionar <strong>uma sugestão de melhoria</strong>.</li>
          <li><span className="check-ico">✅</span> Responder a um comentário (transformar em conversa).</li>
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
        <h2 className="slide-title">Uma oportunidade de aprender</h2>
        <p className="slide-sub">
          Code Review não é para apontar erros, mas para aprender, compartilhar conhecimento e melhorar a
          qualidade do projeto.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Em muitas equipes, o Code Review é uma das principais formas de aprendizado entre pessoas
              desenvolvedoras. Profissionais mais experientes revisam PRs de colegas e explicam decisões
              técnicas — e todo o time evolui junto.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: concluir o fluxo com o <strong>merge</strong> da funcionalidade.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaTreze() {
  return <SlideDeck slides={slides} kicker="Aula 17" />;
}
