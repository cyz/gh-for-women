'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import { asset } from '@/lib/basePath';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">⚡ Aula 19 · Colaboração</span>
        <h1 className="slide-title">
          Resolvendo <span className="accent">conflitos de merge</span>
        </h1>
        <p className="slide-sub">
          E se duas pessoas alterarem exatamente a mesma parte de um arquivo? O Git não sabe qual manter e
          pede a sua ajuda — hoje vamos aprender a resolver isso com calma e segurança.
        </p>
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
            <h4>🌿 branch atualiza-contato</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 13 }}>contato.md<br />LinkedIn: /githubforwomen</p>
          </div>
          <div className="vs-arrow">⚡</div>
          <div className="vs-panel bad">
            <h4>⭐ main</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 13 }}>contato.md<br />Instagram: @githubforwomen</p>
          </div>
        </div>
        <p className="slide-sub">Você mesma pode provocar isso no seu repositório: edite a <strong>mesma linha</strong> em duas branches diferentes.</p>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Um conflito acontece quando o Git <strong>não consegue decidir sozinho</strong> qual alteração manter.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'gerar',
    label: 'Gerar o conflito',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🧪 Gerar o conflito (de propósito)</span>
        <h2 className="slide-title">Uma receita para praticar sozinha</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — no seu próprio repositório</span></div>
          <div className="deck-term-body">
            <span className="cmd">git switch <span className="flag">-c</span> atualiza-contato</span>
            <span className="comment"># edite 1 linha do contato.md e salve</span>
            <span className="cmd">git commit <span className="flag">-am</span> <span className="str">&quot;Atualiza contato&quot;</span></span>
            <span className="comment"># -am junta -a (--all) e -m (--message): prepara e commita de uma vez</span>
            <span className="cmd">git switch main</span>
            <span className="comment"># edite a MESMA linha do contato.md, diferente</span>
            <span className="cmd">git commit <span className="flag">-am</span> <span className="str">&quot;Ajusta contato&quot;</span></span>
            <span className="cmd">git merge atualiza-contato</span>
            <span className="out err">CONFLICT (content): Merge conflict in contato.md</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Sem equipe e sem GitHub: dá para <strong>criar e resolver</strong> um conflito no seu próprio computador.</span>
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
          <div>Instagram: @githubforwomen</div>
          <div><span className="marker">=======</span></div>
          <div>LinkedIn: /githubforwomen</div>
          <div><span className="marker">&gt;&gt;&gt;&gt;&gt;&gt;&gt; atualiza-contato</span> <span className="lbl-in">(a outra branch)</span></div>
        </div>
        <p className="slide-sub"><span className="mono">HEAD</span> (lembra da Aula 6?) é a sua versão atual; o outro bloco é a que está chegando. Os marcadores só mostram <strong>as duas versões</strong> lado a lado.</p>
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
            <span className="comment"># git status mostra os arquivos em conflito a qualquer momento</span>
            <span className="cmd">git add README.md</span>
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Resolve conflito de merge&quot;</span></span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Resolver um conflito é <strong>decidir manualmente</strong> qual versão deve permanecer.</span>
        </div>
        <p className="hint">💡 Não escolha Current, Incoming ou Both sem ler as duas versões. O resultado correto pode exigir edição manual. Mudou de ideia? <span className="mono">git merge --abort</span> cancela o merge.</p>
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
          <li><span className="check-ico">✅</span> Criar uma branch e alterar uma linha do <span className="mono">contato.md</span>.</li>
          <li><span className="check-ico">✅</span> Voltar para a <span className="mono">main</span> e alterar a mesma linha.</li>
          <li><span className="check-ico">✅</span> Tentar o merge e ler os marcadores de conflito.</li>
          <li><span className="check-ico">✅</span> Resolver no VS Code e finalizar com um commit.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'verificar-conflito',
    label: 'Verificar a resolução',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">
          <span className="trans-pt">🔎 Verificar a resolução</span>
          <span className="trans-en">🔎 Verify the resolution</span>
        </span>
        <h2 className="slide-title">
          <span className="trans-pt">Sem marcadores e com o conteúdo correto</span>
          <span className="trans-en">No markers and the intended content</span>
        </h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — verificação final</span></div>
          <div className="deck-term-body">
            <span className="cmd">git status</span>
            <span className="comment"># não deve haver conflito pendente</span>
            <span className="cmd">git diff --check</span>
            <span className="comment"># ajuda a detectar marcadores e espaços problemáticos</span>
            <span className="cmd">git log <span className="flag">--oneline</span> <span className="flag">--graph</span> <span className="flag">--all</span></span>
          </div>
        </div>
        <p className="slide-sub trans-pt">Abra o arquivo e teste o resultado. Git consegue confirmar que o conflito terminou, mas não sabe se a decisão de conteúdo foi correta.</p>
        <p className="slide-sub trans-en">Open the file and test the result. Git can confirm that the conflict ended, but it cannot determine whether the content decision was correct.</p>
        <div className="deck-downloads">
          <a className="deck-download" href={asset('/downloads/git-cheat-sheet.md')} download>
            <span className="dl-ico">⌨️</span> Git cheat sheet
          </a>
          <a className="deck-download" href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts" target="_blank" rel="noreferrer">
            <span className="dl-ico">↗</span>
            <span className="trans-pt">Documentação oficial</span>
            <span className="trans-en">Official documentation</span>
          </a>
        </div>
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
          <span>Próxima aula: <strong>fork e Pull Request</strong> — contribuindo em projetos de terceiros.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaQuinze() {
  return <SlideDeck slides={slides} kicker="Aula 19" />;
}
