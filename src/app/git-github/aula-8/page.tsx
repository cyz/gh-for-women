'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">☁️ Aula 8 · GitHub</span>
        <h1 className="slide-title">
          Criando seu primeiro <span className="accent">repositório no GitHub</span>
        </h1>
        <p className="slide-sub">
          Até agora tudo ficou no computador. E se ele apresentar um problema, ou você precisar compartilhar
          o projeto? É aqui que entra o GitHub: a nuvem onde vamos hospedar o repositório e, mais adiante,
          colaborar com outras pessoas.
        </p>
      </div>
    ),
  },
  {
    id: 'git-x-github',
    label: 'Git × GitHub',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">⚖️ Git × GitHub</span>
        <h2 className="slide-title">Não são a mesma coisa</h2>
        <div className="gh-compare">
          <div className="gh-col git">
            <h4>🔧 Git</h4>
            <ul>
              <li>Instalado no computador</li>
              <li>Controla versões</li>
              <li>Funciona offline</li>
              <li>Criado em 2005</li>
            </ul>
          </div>
          <div className="gh-col github">
            <h4>🐙 GitHub</h4>
            <ul>
              <li>Plataforma na nuvem</li>
              <li>Hospeda repositórios</li>
              <li>Facilita a colaboração</li>
              <li>Lançado em 2008</li>
            </ul>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>É como o Word (Git) e o OneDrive/Google Drive (GitHub): <strong>Git controla versões, GitHub hospeda e compartilha</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'conta',
    label: 'Criar conta',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🧑‍💻 Criar conta</span>
        <h2 className="slide-title">Cadastro no GitHub</h2>
        <p className="slide-sub">
          Acesse <span className="mono" style={{ color: '#93c5fd' }}>github.com</span> e clique em <strong>Sign up</strong>. Se já tiver conta, é só fazer login.
        </p>
        <div className="where-grid" style={{ maxWidth: 620 }}>
          <div className="where-item"><span className="where-ico">🏷️</span><span>Username</span></div>
          <div className="where-item"><span className="where-ico">📧</span><span>Email</span></div>
          <div className="where-item"><span className="where-ico">🔒</span><span>Password</span></div>
        </div>
      </div>
    ),
  },
  {
    id: 'novo-repo',
    label: 'Criar repositório',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">➕ Novo repositório</span>
        <h2 className="slide-title">Um espaço para o seu projeto</h2>
        <div className="pr-mock" style={{ maxWidth: 560 }}>
          <div className="pr-head"><span className="pr-title">New repository</span></div>
          <div className="pr-body" style={{ borderTop: 'none' }}>
            <p style={{ marginBottom: 10 }}>📛 Repository name: <span className="mono" style={{ color: '#93c5fd' }}>meu-primeiro-projeto</span></p>
            <p style={{ marginBottom: 10 }}>🌍 Visibility: <strong style={{ color: '#a7e3b0' }}>✔ Public</strong> · 🔒 Private</p>
            <p style={{ color: '#fca5a5' }}>☐ Add a README &nbsp; ☐ .gitignore &nbsp; ☐ License</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">⚠️</span>
          <span>Como já temos um README local, <strong>não marque</strong> &ldquo;Add a README&rdquo; — evitamos ter dois arquivos diferentes.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'local-remoto',
    label: 'Local × remoto',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔗 Local × remoto</span>
        <h2 className="slide-title">Dois lugares, ainda sem conexão</h2>
        <div className="stage-flow" style={{ maxWidth: 720 }}>
          <div className="stage-box"><div className="st-ico">💻</div><h4>Computador</h4><p>Repositório local (com seus arquivos)</p></div>
          <div className="stage-arrow"><span style={{ color: '#64748b' }}>⇢ ？ ⇠</span></div>
          <div className="stage-box"><div className="st-ico">☁️</div><h4>GitHub</h4><p>Repositório remoto (ainda vazio)</p></div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>Criar um repositório no GitHub <strong>não envia automaticamente</strong> os arquivos do seu computador.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'publico-nao-e-open-source',
    label: 'Público não é open source',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-orange">
          <span className="trans-pt">⚖️ Visibilidade × licença</span>
          <span className="trans-en">⚖️ Visibility × license</span>
        </span>
        <h2 className="slide-title">
          <span className="trans-pt">Público não significa open source</span>
          <span className="trans-en">Public does not mean open source</span>
        </h2>
        <div className="gh-compare">
          <div className="gh-col git">
            <h4>
              <span className="trans-pt">🌍 Visibilidade</span>
              <span className="trans-en">🌍 Visibility</span>
            </h4>
            <ul className="trans-pt">
              <li>Define quem consegue ver o repositório</li>
              <li>Público permite visualizar e fazer fork</li>
            </ul>
            <ul className="trans-en">
              <li>Defines who can view the repository</li>
              <li>Public repositories can be viewed and forked</li>
            </ul>
          </div>
          <div className="gh-col github">
            <h4>
              <span className="trans-pt">📄 Licença</span>
              <span className="trans-en">📄 License</span>
            </h4>
            <ul className="trans-pt">
              <li>Define permissões e obrigações de uso</li>
              <li>Sem licença, valem os direitos autorais padrão</li>
            </ul>
            <ul className="trans-en">
              <li>Defines permissions and obligations for reuse</li>
              <li>Without a license, default copyright applies</li>
            </ul>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span className="trans-pt">Para ser open source, o projeto precisa conceder direitos por meio de uma <strong>licença open source</strong>.</span>
          <span className="trans-en">To be open source, the project must grant rights through an <strong>open source license</strong>.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'comparar-licencas',
    label: 'Comparar licenças',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">
          <span className="trans-pt">🧭 Licenças comuns</span>
          <span className="trans-en">🧭 Common licenses</span>
        </span>
        <h2 className="slide-title">
          <span className="trans-pt">Escolha conforme o uso desejado</span>
          <span className="trans-en">Choose based on the intended use</span>
        </h2>
        <div className="cap-grid" style={{ maxWidth: 860 }}>
          <div className="cap-card"><div className="cap-ico">🟢</div><h4>MIT</h4><p className="trans-pt">Permissiva, curta e exige preservar o aviso.</p><p className="trans-en">Short and permissive; requires preserving the notice.</p></div>
          <div className="cap-card"><div className="cap-ico">🛡️</div><h4>Apache-2.0</h4><p className="trans-pt">Permissiva, com concessão explícita de patentes.</p><p className="trans-en">Permissive, with an explicit patent grant.</p></div>
          <div className="cap-card"><div className="cap-ico">🔄</div><h4>GPL-3.0</h4><p className="trans-pt">Derivados distribuídos permanecem sob GPL.</p><p className="trans-en">Distributed derivatives remain under the GPL.</p></div>
          <div className="cap-card"><div className="cap-ico">📚</div><h4>Creative Commons</h4><p className="trans-pt">Mais adequada para textos e materiais, não para software.</p><p className="trans-en">Better suited to content and learning materials, not software.</p></div>
        </div>
        <p className="slide-sub trans-pt">Outras opções, como BSD e MPL, atendem necessidades diferentes. A equipe deve ler as condições antes de decidir.</p>
        <p className="slide-sub trans-en">Other options, such as BSD and MPL, meet different needs. The team should read the terms before deciding.</p>
      </div>
    ),
  },
  {
    id: 'decidir-licenca',
    label: 'Decidir a licença',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">
          <span className="trans-pt">✅ Decisão consciente</span>
          <span className="trans-en">✅ Informed decision</span>
        </span>
        <h2 className="slide-title">
          <span className="trans-pt">Criar vazio agora, licenciar depois</span>
          <span className="trans-en">Create it empty now, license it later</span>
        </h2>
        <ol className="flow-list trans-pt">
          <li><span className="flow-n">1</span> Nesta aula, crie o remoto vazio para evitar dois históricos.</li>
          <li><span className="flow-n">2</span> Decida se o projeto é software, documentação ou proprietário.</li>
          <li><span className="flow-n">3</span> Leia as condições e confirme a política da equipe.</li>
          <li><span className="flow-n">4</span> Adicione <code>LICENSE</code> localmente em um commit próprio.</li>
        </ol>
        <ol className="flow-list trans-en">
          <li><span className="flow-n">1</span> In this lesson, create an empty remote to avoid separate histories.</li>
          <li><span className="flow-n">2</span> Decide whether the project is software, documentation, or proprietary.</li>
          <li><span className="flow-n">3</span> Read the terms and confirm the team policy.</li>
          <li><span className="flow-n">4</span> Add <code>LICENSE</code> locally in its own commit.</li>
        </ol>
        <div className="deck-downloads">
          <a className="deck-download" href="/downloads/guia-licencas-repositorios.md" download>
            <span className="dl-ico">📄</span>
            <span className="trans-pt">Guia de licenças</span>
            <span className="trans-en">License guide (Portuguese)</span>
          </a>
          <a className="deck-download" href="https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository" target="_blank" rel="noreferrer">
            <span className="dl-ico">↗</span>
            <span className="trans-pt">Documentação oficial</span>
            <span className="trans-en">Official documentation</span>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 'tour-repo',
    label: 'A página do repositório',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🧭 A página do repositório</span>
        <h2 className="slide-title">A tela que aparece depois de criar</h2>
        <div className="pr-mock" style={{ maxWidth: 620 }}>
          <div className="pr-head"><span className="pr-title">Quick setup — meu-primeiro-projeto</span></div>
          <div className="pr-body">
            <p style={{ marginBottom: 10 }}>🔗 <span className="mono" style={{ color: '#93c5fd' }}>https://github.com/voce/meu-primeiro-projeto.git</span></p>
            <p>É esta URL que vamos usar para conectar o projeto do computador ao GitHub.</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span>O repositório vazio já mostra a <strong>URL</strong> e as instruções para enviar o código — usaremos isso na próxima aula.</span>
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
          <li><span className="check-ico">✅</span> Criar conta (se necessário) e fazer login.</li>
          <li><span className="check-ico">✅</span> Criar um novo repositório <span className="mono">meu-primeiro-projeto</span>.</li>
          <li><span className="check-ico">✅</span> Escolher <strong>Public</strong>.</li>
          <li><span className="check-ico">✅</span> Não marcar README, .gitignore nem License <strong>neste primeiro momento</strong>.</li>
          <li><span className="check-ico">✅</span> Explicar qual licença escolheria e por quê.</li>
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
        <h2 className="slide-title">Espaço na nuvem criado!</h2>
        <p className="slide-sub">
          O projeto ainda existe só no computador. O repositório do GitHub é um espaço preparado para
          recebê-lo.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O GitHub hospeda centenas de milhões de repositórios, incluindo alguns dos maiores projetos
              open source do mundo, como o VS Code, o React, o Node.js e o Python.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: conectar o projeto local ao GitHub com <span className="mono">git remote add</span> e <span className="mono">git push</span>.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaSeis() {
  return <SlideDeck slides={slides} kicker="Aula 8" />;
}
