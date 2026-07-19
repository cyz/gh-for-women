'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">📋 Aula 12 · GitHub</span>
        <h1 className="slide-title">
          Issues: <span className="accent">organizando o trabalho</span>
        </h1>
        <p className="slide-sub">
          Antes de sair programando, é bom saber o que precisa ser feito. As <strong>Issues</strong> do
          GitHub são o lugar para registrar tarefas, bugs e ideias do projeto.
        </p>
      </div>
    ),
  },
  {
    id: 'o-que-e',
    label: 'O que é uma Issue',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">🎫 O que é uma Issue</span>
        <h2 className="slide-title">Um registro para cada assunto</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🐞</div>
            <h4>Bug</h4>
            <p>Algo que está com defeito e precisa ser corrigido.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">✨</div>
            <h4>Melhoria</h4>
            <p>Uma nova funcionalidade ou algo para aperfeiçoar.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">❓</div>
            <h4>Dúvida ou tarefa</h4>
            <p>Uma pergunta ou um item de trabalho a organizar.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Uma Issue é uma <strong>conversa registrada</strong> sobre algo a fazer no projeto.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'criar',
    label: 'Criando uma Issue',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">➕ Criando uma Issue</span>
        <h2 className="slide-title">Na aba Issues do repositório</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> Abrir a aba <strong>Issues → New issue</strong> no topo do repositório</li>
          <li><span className="flow-n">2</span> Escrever um título claro (ex.: &ldquo;Adicionar seção de contato no README&rdquo;)</li>
          <li><span className="flow-n">3</span> Descrever o contexto e o resultado esperado</li>
          <li><span className="flow-n">4</span> Clicar em <strong>Submit new issue</strong> — a Issue ganha um número (ex.: #12)</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'organizar',
    label: 'Organizando as Issues',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🏷️ Organizando as Issues</span>
        <h2 className="slide-title">Labels e responsáveis</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-ico">🏷️</div>
            <h4>Labels</h4>
            <p>Etiquetas coloridas como <span className="mono">bug</span>, <span className="mono">enhancement</span> ou <span className="mono">documentation</span> para classificar.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">👤</div>
            <h4>Assignees</h4>
            <p>Quem é responsável por resolver aquela Issue.</p>
          </div>
          <div className="tip-card">
            <div className="tip-ico">🎯</div>
            <h4>Milestones</h4>
            <p>Agrupam Issues por objetivo ou entrega (veremos em projetos maiores).</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Labels e responsáveis deixam claro <strong>o que é cada tarefa</strong> e <strong>quem cuida dela</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'vincular',
    label: 'Ligando Issues ao código',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔗 Ligando Issues ao código</span>
        <h2 className="slide-title">Feche uma Issue pelo commit</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">mensagem de commit que fecha a Issue #12</span></div>
          <div className="deck-term-body">
            <span className="cmd">git commit <span className="flag">-m</span> <span className="str">&quot;Adiciona seção de contato · Closes #12&quot;</span></span>
            <span className="comment"># ao chegar na main, o GitHub fecha a Issue #12 automaticamente</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Escrever <span className="mono">#12</span> cria um link para a Issue; <span className="mono">Closes #12</span> a fecha quando o Pull Request é integrado.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'planejamento',
    label: 'Issues antes das branches',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🧭 Issues antes das branches</span>
        <h2 className="slide-title">Planejar, depois programar</h2>
        <ol className="flow-list">
          <li><span className="flow-n">1</span> Abrir a <strong>Issue</strong> registrando a tarefa</li>
          <li><span className="flow-n">2</span> Criar a <strong>branch</strong> para resolver aquela Issue</li>
          <li><span className="flow-n">3</span> Abrir o <strong>Pull Request</strong> com <span className="mono">Closes #N</span> na descrição</li>
          <li><span className="flow-n">4</span> O <strong>merge</strong> fecha a Issue automaticamente</li>
        </ol>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Issues transformam &ldquo;o que preciso fazer&rdquo; em <strong>passos organizados</strong> antes do código.</span>
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
        <h2 className="slide-title">Abra sua primeira Issue</h2>
        <ul className="check-list">
          <li><span className="check-ico">✅</span> Abrir a aba <strong>Issues</strong> do seu repositório e clicar em <strong>New issue</strong>.</li>
          <li><span className="check-ico">✅</span> Escrever um título e uma descrição claros.</li>
          <li><span className="check-ico">✅</span> Aplicar uma <strong>label</strong> (ex.: <span className="mono">documentation</span>).</li>
          <li><span className="check-ico">✅</span> Atribuir a Issue a você mesma em <strong>Assignees</strong>.</li>
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
        <h2 className="slide-title">Trabalho organizado, equipe alinhada</h2>
        <p className="slide-sub">
          Com Issues, qualquer pessoa entende o que precisa ser feito, o que está em andamento e o que já foi
          concluído — mesmo em projetos com muita gente.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              Projetos open source usam Issues para receber sugestões da comunidade. Muitas pessoas começam a
              contribuir justamente resolvendo uma Issue marcada como <span className="mono">good first issue</span>.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#c084fc', background: 'linear-gradient(90deg, rgba(92,45,145,0.2), rgba(92,45,145,0.05))', borderColor: 'rgba(192,132,252,0.3)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: o que é uma <strong>branch</strong> e por que ela existe.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaDoze() {
  return <SlideDeck slides={slides} kicker="Aula 12" />;
}
