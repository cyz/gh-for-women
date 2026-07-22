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
        <span className="slide-kicker s-green">🧪 Aula 11 · GitHub</span>
        <h1 className="slide-title">
          Prática guiada: <span className="accent">publicando um projeto do zero</span>
        </h1>
        <p className="slide-sub">
          Sem comandos novos: hoje publicamos, do zero ao GitHub, um projeto de <strong>documentação</strong>
          feito só com arquivos Markdown — o <span className="mono">Manual da Comunidade</span>.
        </p>
      </div>
    ),
  },
  {
    id: 'fluxo',
    label: 'Fluxo completo',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🗺️ Fluxo completo</span>
        <h2 className="slide-title">A ordem que um dev usa no dia a dia</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> Criar o Manual da Comunidade (<code>README.md</code> + seções)</li>
          <li><span className="flow-n">2</span> <code>git init</code></li>
          <li><span className="flow-n">3</span> <code>git status</code> → <code>git add</code> → <code>git commit</code></li>
          <li><span className="flow-n">4</span> Criar repositório no GitHub</li>
          <li><span className="flow-n">5</span> <code>git remote add origin ...</code></li>
          <li><span className="flow-n">6</span> <code>git push -u origin main</code></li>
        </ol>
      </div>
    ),
  },
  {
    id: 'demo',
    label: 'Demonstração',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">▶️ Demonstração</span>
        <h2 className="slide-title">Do zero ao GitHub</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — manual-comunidade</span></div>
          <div className="deck-term-body">
            <span className="comment"># pasta manual-comunidade com os arquivos .md criados</span>
            <span className="cmd">git init</span>
            <span className="cmd">git add .</span>
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Cria manual da comunidade&quot;</span></span>
            <span className="comment"># criar repositório no GitHub e copiar a URL</span>
            <span className="cmd">git remote add origin <span className="str">URL</span></span>
            <span className="cmd">git push <span className="flag">-u</span> origin main</span>
            <span className="out ok">✔ Projeto publicado!</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'criterios-projeto',
    label: 'Critérios do projeto',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">
          <span className="trans-pt">📋 Antes do primeiro commit</span>
          <span className="trans-en">📋 Before the first commit</span>
        </span>
        <h2 className="slide-title">
          <span className="trans-pt">Cinco arquivos, cada um com uma função</span>
          <span className="trans-en">Five files, each with a purpose</span>
        </h2>
        <div className="cap-grid" style={{ maxWidth: 860 }}>
          <div className="cap-card"><div className="cap-ico">🏠</div><h4>README.md</h4><p className="trans-pt">Propósito e links para as seções.</p><p className="trans-en">Purpose and links to every section.</p></div>
          <div className="cap-card"><div className="cap-ico">ℹ️</div><h4>sobre.md</h4><p className="trans-pt">Público, propósito e valores.</p><p className="trans-en">Audience, purpose, and values.</p></div>
          <div className="cap-card"><div className="cap-ico">❓</div><h4>faq.md</h4><p className="trans-pt">Três perguntas respondidas.</p><p className="trans-en">Three answered questions.</p></div>
          <div className="cap-card"><div className="cap-ico">✉️</div><h4>contato.md</h4><p className="trans-pt">Dois canais fictícios.</p><p className="trans-en">Two fictional contact channels.</p></div>
          <div className="cap-card"><div className="cap-ico">📜</div><h4>codigo-de-conduta.md</h4><p className="trans-pt">Condutas e canal de reporte.</p><p className="trans-en">Expected conduct and reporting path.</p></div>
        </div>
        <p className="slide-sub trans-pt">Abra o preview do Markdown e teste todos os links antes de versionar.</p>
        <p className="slide-sub trans-en">Open the Markdown preview and test every link before committing.</p>
      </div>
    ),
  },
  {
    id: 'erros',
    label: 'Erros comuns',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">⚠️ Erros comuns</span>
        <h2 className="slide-title">Já sei o que pode dar errado</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">mensagens que você pode ver</span></div>
          <div className="deck-term-body">
            <span className="comment"># esqueceu o git add:</span>
            <span className="out warn">nothing to commit</span>
            <span className="comment"># esqueceu o git init:</span>
            <span className="out err">fatal: not a git repository</span>
            <span className="comment"># criou um README no GitHub → dois começos separados</span>
            <span className="comment"># solução: git pull origin main antes do push</span>
          </div>
        </div>
        <p className="slide-sub">Nenhum deles é grave — o importante é entender o que cada mensagem significa.</p>
      </div>
    ),
  },
  {
    id: 'materiais',
    label: 'Materiais para praticar',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📦 Materiais para praticar</span>
        <h2 className="slide-title">Faça no seu ritmo, sem gravação</h2>
        <p className="slide-sub">
          O guia detalha a criação dos arquivos, os critérios de conteúdo, a licença e um clone de teste.
          Use também a referência rápida de comandos.
        </p>
        <div className="deck-downloads">
          <a className="deck-download" href={asset('/downloads/guia-aula-11-subir-projeto.md')} download>
            <span className="dl-ico">📄</span> Guia passo a passo · Aula 11
          </a>
          <a className="deck-download" href={asset('/downloads/guia-markdown.md')} download>
            <span className="dl-ico">✍️</span> Guia prático de Markdown
          </a>
          <a className="deck-download" href={asset('/downloads/git-cheat-sheet.md')} download>
            <span className="dl-ico">⌨️</span> Git cheat sheet
          </a>
          <a className="deck-download" href={asset('/downloads/guia-licencas-repositorios.md')} download>
            <span className="dl-ico">⚖️</span> Guia de licenças
          </a>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O guia traz cada comando explicado e uma tabela de <strong>erros comuns</strong> para você se desbloquear sozinha.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'checklist',
    label: 'Checklist final',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🎯 Prática guiada</span>
        <h2 className="slide-title">Checklist final</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Projeto criado e <span className="mono">git init</span> executado.</li>
          <li><span className="check-ico">✅</span> Cinco arquivos e links validados no preview.</li>
          <li><span className="check-ico">✅</span> Pelo menos dois commits coerentes registrados.</li>
          <li><span className="check-ico">✅</span> Repositório criado no GitHub.</li>
          <li><span className="check-ico">✅</span> Projeto publicado com <span className="mono">git push</span>.</li>
          <li><span className="check-ico">✅</span> Decisão de licença explicada e clone de teste verificado.</li>
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
        <h2 className="slide-title">Você domina o fluxo básico!</h2>
        <p className="slide-sub">
          Já consegue criar, versionar e publicar um projeto do zero com Git e GitHub.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Mesmo em equipes com centenas de pessoas, o início de um projeto segue exatamente esse fluxo:
              criar o repositório, registrar os primeiros commits e publicar o código. O que muda depois é
              como várias pessoas colaboram ao mesmo tempo.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: organizar o trabalho com <strong>Issues</strong> no GitHub.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaOito() {
  return <SlideDeck slides={slides} kicker="Aula 11" />;
}
