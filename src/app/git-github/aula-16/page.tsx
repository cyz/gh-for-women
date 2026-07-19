'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔀 Aula 12 · Colaboração</span>
        <h1 className="slide-title">
          Pull Request: <span className="accent">solicitando a integração</span>
        </h1>
        <p className="slide-sub">
          A funcionalidade está no GitHub, mas ainda não faz parte da main. Como ela chega lá? Antes de
          integrar, alguém precisa revisar — e é exatamente isso que um Pull Request organiza: um pedido de
          revisão antes de juntar o código.
        </p>
      </div>
    ),
  },
  {
    id: 'o-que-e',
    label: 'O que é um PR',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">💬 O que é um Pull Request</span>
        <h2 className="slide-title">Um pedido de revisão, não um merge</h2>
        <p className="slide-sub">
          Apesar do nome, o Pull Request <strong>não</strong> envia seu código automaticamente para a main.
          Ele apenas <strong>solicita que a alteração seja analisada</strong> — como entregar um trabalho
          para o professor revisar antes de aprovar.
        </p>
        <div className="pr-branchflow" style={{ justifyContent: 'center' }}>
          <span className="chip">feature-login</span>
          <span>→</span>
          <span className="chip">Pull Request</span>
          <span>→</span>
          <span className="chip base">main</span>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Abrir um Pull Request <strong>não significa concluir</strong> a funcionalidade — é o início de uma conversa.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'criar',
    label: 'Criando o PR',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">➕ Criando o PR</span>
        <h2 className="slide-title">Compare &amp; pull request</h2>
        <div className="pr-mock">
          <div className="pr-head">
            <span className="pr-badge">🟢 Open</span>
            <span className="pr-title">Adiciona seção de projetos</span>
          </div>
          <div className="pr-branchflow">
            <span>base:</span><span className="chip base">main</span>
            <span>←</span>
            <span>compare:</span><span className="chip">feature-projetos</span>
          </div>
          <div className="pr-body">Inclui uma nova seção no README apresentando os projetos do curso.</div>
        </div>
        <p className="slide-sub">Estamos dizendo: &ldquo;quero levar esta branch para a <span className="mono">main</span>&rdquo;. Ainda sem merge.</p>
      </div>
    ),
  },
  {
    id: 'draft',
    label: 'Draft PR',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">📝 Rascunho primeiro</span>
        <h2 className="slide-title">Comece com um Draft Pull Request</h2>
        <div className="pr-mock" style={{ maxWidth: 560 }}>
          <div className="pr-head">
            <span className="pr-badge" style={{ background: '#6b7280' }}>📝 Draft</span>
            <span className="pr-title">Adiciona seção de projetos</span>
          </div>
          <div className="pr-body">Rascunho = trabalho em andamento. Ninguém é chamado para revisar ainda, e você continua commitando à vontade.</div>
        </div>
        <div className="pr-branchflow" style={{ justifyContent: 'center' }}>
          <span className="chip">📝 Draft</span>
          <span>→</span>
          <span className="chip base">✅ Ready for review</span>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Ao terminar, clique em <strong>Ready for review</strong>: o PR vira oficial e aí sim você pede a revisão.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'pagina',
    label: 'Página do PR',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📄 Página do PR</span>
        <h2 className="slide-title">O que um Pull Request reúne</h2>
        <div className="pr-mock">
          <div className="pr-head"><span className="pr-title">💬 Conversation · 📝 Commits · 📂 Files changed</span></div>
          <div style={{ padding: '14px 20px' }}>
            <span className="diff-line diff-add">+ ## Projetos</span>
            <span className="diff-line diff-add">+ Em breve...</span>
            <span className="diff-line diff-rem">- (linha antiga removida)</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O PR reúne <strong>tudo o que é preciso para revisar</strong> — o mesmo <span className="mono">+</span>/<span className="mono">-</span> do <span className="mono">git diff</span> (Aula 5), agora direto no navegador.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'depois',
    label: 'O que acontece depois',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">⏭️ O que acontece depois</span>
        <h2 className="slide-title">O PR é uma etapa do processo</h2>
        <div className="pr-branchflow" style={{ justifyContent: 'center', fontSize: 14 }}>
          <span className="chip">Pull Request</span>
          <span>→</span>
          <span className="chip review" style={{ background: '#b45309', color: '#fff' }}>Code Review</span>
          <span>→</span>
          <span className="chip base" style={{ background: '#6d28d9', color: '#fff' }}>Merge</span>
        </div>
        <p className="slide-sub">Hoje aprendemos até <strong>abrir o PR</strong>. As próximas etapas vêm nas aulas seguintes.</p>
      </div>
    ),
  },
  {
    id: 'boas-praticas',
    label: 'Boas práticas',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">✨ Boas práticas</span>
        <h2 className="slide-title">PRs que ajudam a equipe</h2>
        <div className="tips-grid">
          <div className="tip-card"><div className="tip-ico">🏷️</div><h4>Títulos claros</h4><p>Explique o objetivo da alteração em uma frase.</p></div>
          <div className="tip-card"><div className="tip-ico">📝</div><h4>Boa descrição</h4><p>Permita entender a mudança sem abrir os arquivos.</p></div>
          <div className="tip-card"><div className="tip-ico">1️⃣</div><h4>Um PR, uma funcionalidade</h4><p>Evite Pull Requests enormes.</p></div>
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
          <li><span className="check-ico">✅</span> Abrir <span className="mono">Compare &amp; pull request</span> da sua branch.</li>
          <li><span className="check-ico">✅</span> Escrever um título e uma descrição claros.</li>
          <li><span className="check-ico">✅</span> Criar o PR.</li>
          <li><span className="check-ico">✅</span> Explorar Conversation, Commits e Files changed (sem merge).</li>
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
        <h2 className="slide-title">Muito mais que um botão</h2>
        <p className="slide-sub">
          O Pull Request é um espaço para apresentar sua alteração, explicar o que foi feito e permitir que
          outras pessoas revisem seu trabalho.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Em muitas empresas, nenhum código chega à <span className="mono">main</span> sem passar por um
              Pull Request. Em projetos open source, o PR é a principal forma de contribuir com melhorias,
              mesmo sem fazer parte da equipe.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: assumir o papel de quem revisa — o <strong>Code Review</strong>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaDoze() {
  return <SlideDeck slides={slides} kicker="Aula 12" />;
}
