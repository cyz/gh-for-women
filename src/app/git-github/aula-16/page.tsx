'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🏆 Aula 16 · Projeto final</span>
        <h1 className="slide-title">
          Projeto final: <span className="accent">fluxo completo de colaboração</span>
        </h1>
        <p className="slide-sub">
          Parabéns por chegar até aqui! Hoje unimos tudo em um projeto colaborativo, como acontece em
          equipes de desenvolvimento.
        </p>
        <ul className="obj-list">
          <li><span className="obj-num">1</span> Aplicar todo o fluxo aprendido no curso.</li>
          <li><span className="obj-num">2</span> Colaborar usando branches e Pull Requests.</li>
          <li><span className="obj-num">3</span> Participar de um Code Review e fazer merge.</li>
          <li><span className="obj-num">4</span> Trabalhar em equipe com Git e GitHub.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'fluxo',
    label: 'Fluxo completo',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🗺️ Fluxo completo</span>
        <h2 className="slide-title">Todas as etapas juntas</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> Criar branch → Desenvolver → <code>commit</code></li>
          <li><span className="flow-n">2</span> <code>push</code> para o GitHub</li>
          <li><span className="flow-n">3</span> Abrir <strong>Pull Request</strong></li>
          <li><span className="flow-n">4</span> <strong>Code Review</strong> (com um colega)</li>
          <li><span className="flow-n">5</span> <strong>Merge</strong> na main</li>
          <li><span className="flow-n">6</span> <code>git pull</code> para atualizar o local</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'cenario',
    label: 'Cenário',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🎬 Cenário</span>
        <h2 className="slide-title">Um site institucional em equipe</h2>
        <p className="slide-sub">Cada participante fica responsável por uma seção — todos no mesmo repositório.</p>
        <div className="cap-grid" style={{ maxWidth: 820 }}>
          <div className="cap-card"><div className="cap-ico">ℹ️</div><h4>Sobre</h4><p>Pessoa A</p></div>
          <div className="cap-card"><div className="cap-ico">📁</div><h4>Projetos</h4><p>Pessoa B</p></div>
          <div className="cap-card"><div className="cap-ico">✉️</div><h4>Contato</h4><p>Pessoa C</p></div>
          <div className="cap-card"><div className="cap-ico">🧰</div><h4>Tecnologias</h4><p>Pessoa D</p></div>
        </div>
      </div>
    ),
  },
  {
    id: 'demo',
    label: 'Demonstração',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">▶️ Demonstração</span>
        <h2 className="slide-title">O fluxo esperado</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — feature-faq</span></div>
          <div className="deck-term-body">
            <span className="cmd">git switch <span className="flag">-c</span> feature-faq</span>
            <span className="comment"># edita o README: adiciona a seção FAQ</span>
            <span className="cmd">git add README.md</span>
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Adiciona seção FAQ&quot;</span></span>
            <span className="cmd">git push <span className="flag">-u</span> origin feature-faq</span>
            <span className="comment"># abrir PR → revisar → merge</span>
            <span className="cmd">git switch main</span>
            <span className="cmd">git pull origin main</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'pratica-grupo',
    label: 'Prática em grupo',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">👥 Prática em grupo</span>
        <h2 className="slide-title">Cada participante executa</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> <code>git pull</code> na main e criar sua branch</li>
          <li><span className="flow-n">2</span> Editar o README + <code>commit</code> + <code>push</code></li>
          <li><span className="flow-n">3</span> Abrir um Pull Request</li>
          <li><span className="flow-n">4</span> Revisar o PR de um colega (elogio + sugestão)</li>
          <li><span className="flow-n">5</span> Após aprovação, fazer o merge</li>
          <li><span className="flow-n">6</span> Todos atualizam a main com <code>git pull</code></li>
        </ol>
      </div>
    ),
  },
  {
    id: 'checklist',
    label: 'Checklist final',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🎯 Checklist final</span>
        <h2 className="slide-title">Conseguimos completar tudo?</h2>
        <div className="cap-grid" style={{ maxWidth: 820 }}>
          <div className="cap-card"><div className="cap-ico">🌿</div><h4>Branch</h4></div>
          <div className="cap-card"><div className="cap-ico">💾</div><h4>Commits</h4></div>
          <div className="cap-card"><div className="cap-ico">🚀</div><h4>Push</h4></div>
          <div className="cap-card"><div className="cap-ico">🔀</div><h4>Pull Request</h4></div>
          <div className="cap-card"><div className="cap-ico">🔍</div><h4>Code Review</h4></div>
          <div className="cap-card"><div className="cap-ico">🔗</div><h4>Merge</h4></div>
          <div className="cap-card"><div className="cap-ico">⬇️</div><h4>Atualizou local</h4></div>
        </div>
      </div>
    ),
  },
  {
    id: 'proximos',
    label: 'Próximos passos',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🧭 Próximos passos</span>
        <h2 className="slide-title">Para continuar evoluindo</h2>
        <div className="file-chaos" style={{ maxWidth: 900 }}>
          {['.gitignore', 'GitHub Issues', 'GitHub Projects', 'GitHub Actions', 'Releases & Tags', 'Forks', 'Codespaces', 'GitHub Copilot', 'Rebase', 'GitFlow'].map((t) => (
            <div key={t} className="file-chip" style={{ minWidth: 130 }}><span className="file-ico">⭐</span><span className="file-name" style={{ color: '#93c5fd' }}>{t}</span></div>
          ))}
        </div>
        <p className="slide-sub">Todos esses recursos ampliam o que aprendemos — mas dependem da base construída neste curso.</p>
      </div>
    ),
  },
  {
    id: 'encerramento',
    label: 'Encerramento do curso',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🎓 Encerramento do curso</span>
        <h2 className="slide-title">Parabéns, você concluiu a trilha!</h2>
        <p className="slide-sub">
          Você já é capaz de iniciar um projeto, controlar versões, colaborar com outras pessoas e participar
          do processo de desenvolvimento usado em equipes profissionais.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Aprender Git não é decorar comandos — é compreender o fluxo de colaboração. Ferramentas mudam,
              mas versionamento, branches, Pull Requests, revisão de código e integração fazem parte da
              rotina de desenvolvimento em empresas de todos os portes.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">💙</span>
          <span>Da engenharia à liderança, conectamos mulheres que querem fazer a diferença na tecnologia.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaDezesseis() {
  return <SlideDeck slides={slides} kicker="Aula 16" />;
}
