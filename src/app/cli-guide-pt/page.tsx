'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
import '../cli-guide/cli-guide.css';

export default function CliGuidePt() {
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    // Redirecionamento para a versão EN se English for selecionado
    if (language === 'en') {
      router.replace('/cli-guide');
    }
  }, [language, router]);

  useEffect(() => {
    /* Destacar a seção de navegação ativa durante a rolagem */
    const sections = document.querySelectorAll('[id^="stage-"]');
    const navLinks = document.querySelectorAll('.stage-nav a');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            (link as HTMLElement).style.color = '';
            (link as HTMLElement).style.borderBottomColor = '';
          });
          const active = document.querySelector(`.stage-nav a[href="#${entry.target.id}"]`) as HTMLElement;
          if (active) {
            active.style.color = 'var(--blue)';
            active.style.borderBottomColor = 'var(--blue)';
          }
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach((s) => observer.observe(s));

    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-eyebrow">✨ Guia de Primeiros Passos</div>
        <h1>GitHub <span>Copilot</span> CLI</h1>
        <div className="subtitle">
          Do zero à produtividade impulsionada por IA no seu terminal — um guia prático passo a passo para usuários de negócios.
        </div>
        <p style={{ fontSize: '11px', color: '#4A6174', marginTop: '8px', fontStyle: 'italic', position: 'relative' }}>
          Guia da comunidade &mdash; não é uma documentação oficial do GitHub.
        </p>
      </div>

      {/* AVISO DE SEGURANÇA */}
      <div style={{ background: 'linear-gradient(135deg, #FDE7E9 0%, #FFF0F0 100%)', borderBottom: '3px solid #D13438', padding: '24px 40px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '28px', flexShrink: 0 }}>🛡️</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: '1.05em', color: '#D13438', marginBottom: '8px' }}>⚠️ Aviso de Segurança e IA Responsável</div>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.92em', color: '#323130', lineHeight: '1.7' }}>
            <li><strong>Siga as políticas da sua organização:</strong> Antes de usar o GitHub Copilot CLI, revise e siga as políticas de uso aceitável, segurança e tratamento de dados da sua própria empresa.</li>
            <li><strong>Trate as informações com cuidado:</strong> Evite compartilhar segredos, credenciais ou informações confidenciais em prompts. Você é responsável por tudo que envia e gera com ferramentas de IA.</li>
            <li><strong>IA Responsável:</strong> Todos os resultados gerados por IA devem ser revisados por um ser humano antes do uso em produção, comunicações com clientes ou documentos oficiais. Sugestões de IA são assistivas, não autoritativas.</li>
            <li><strong>Privacidade e conformidade:</strong> Garanta que seu uso esteja em conformidade com as regulamentações de proteção de dados aplicáveis (como a LGPD no Brasil ou GDPR na Europa) correspondentes à sua região e setor.</li>
          </ul>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
            <div style={{ background: 'white', border: '2px solid #0078D4', borderRadius: '8px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>🤝</span>
              <span style={{ fontWeight: 700, color: '#0078D4', fontSize: '0.95em' }}>Construa com Confiança</span>
            </div>
            <div style={{ background: 'white', border: '2px solid #FF8C00', borderRadius: '8px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>🛑</span>
              <span style={{ fontWeight: 700, color: '#FF8C00', fontSize: '0.95em' }}>Pense. Questione. Force a Parada.</span>
            </div>
          </div>
          <div style={{ marginTop: '10px', fontSize: '0.82em', color: '#605E5C', fontStyle: 'italic' }}>
            Dúvidas sobre segurança ou conformidade? Consulte a equipe de segurança da informação da sua empresa. Última atualização: Junho de 2026.
          </div>
        </div>
      </div>

      {/* ESTAGE NAVIGATION */}
      <nav className="stage-nav">
        <a href="#stage-1"><span className="nav-num">1</span> Instalação Básica</a>
        <a href="#stage-2"><span className="nav-num">2</span> Criando Seu Agente</a>
        <a href="#stage-3"><span className="nav-num">3</span> Turbinando Seu Agente</a>
        <a href="#stage-4"><span className="nav-num">4</span> Colocando em Prática</a>
      </nav>

      <div className="container">
        {/* STAGE 1 */}
        <div className="stage-header stage-1" id="stage-1">
          <div className="stage-label">Etapa 1 de 4</div>
          <h2>📦 Instalação Básica</h2>
          <p>Configure tudo o que você precisa para começar a rodar. A maioria desses passos são feitos apenas uma vez — configure agora e esqueça.</p>
        </div>

        {/* Step 1.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">1</span>
            <h3>Fazer Login e Ativar o GitHub Copilot</h3>
          </div>
          <div className="step-body">
            <p>Acesse o portal do GitHub Copilot e ative sua licença.</p>

            <div className="ui-mockup">
              <div className="ui-mockup-bar">
                <span className="icon">🌐</span> Navegador
              </div>
              <div className="ui-mockup-body">
                <div className="mock-url">🔒 https://github.com/features/copilot</div>
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '1.3em', fontWeight: 600, marginBottom: '12px' }}>Welcome to GitHub Copilot</div>
                  <div style={{ display: 'inline-block', background: 'var(--blue)', color: 'white', padding: '10px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                    ⚡ Sign in to enable Copilot
                  </div>
                  <p style={{ color: 'var(--gray-90)', marginTop: '16px', fontSize: '0.9em' }}>Faça login e siga as instruções para ativar o Copilot em sua conta</p>
                </div>
              </div>
            </div>

            <p>Depois de habilitado, você verá a mensagem de confirmação:</p>

            <div className="callout tip">
              <span className="icon">✅</span>
              <div><strong>GitHub Copilot habilitado</strong> em sua conta corporativa.</div>
            </div>

            <div className="callout info">
              <span className="icon">💡</span>
              <div><strong>Tem mais de uma conta do GitHub?</strong> Sem problemas. Dentro da interface do teclado, digite <code>/logout</code>, seguido de <code>/login</code>, selecione GitHub.com e adicione a conta que irá focar.</div>
            </div>
          </div>
        </div>

        {/* Step 1.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">2</span>
            <h3>Criar Sua Pasta Principal de Trabalho</h3>
          </div>
          <div className="step-body">
            <p>Esta pasta é de onde você executará o Copilot CLI no terminal. Ela será seu espaço de trabalho pessoal — arquivos de prompt, relatórios ou artefatos gerados viverão aqui. Mantê-la em um diretório sincronizado (como OneDrive, Dropbox, etc.) garante backup automático.</p>

            <div className="explorer-mockup">
              <div className="explorer-bar">
                <span>📁</span>
                <div className="explorer-path">C:\Users\<em>SeuNome</em>\</div>
              </div>
              <div className="explorer-body">
                <div className="explorer-item"><span className="fi">📁</span> Desktop</div>
                <div className="explorer-item"><span className="fi">📁</span> Documentos</div>
                <div className="explorer-item"><span className="fi">📁</span> Downloads</div>
                <div className="explorer-item selected"><span className="fi">📂</span> <strong>ghcli-working</strong> &nbsp;← Crie esta pasta</div>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Dica de ouro:</strong> Com o tempo, vá movendo documentos importantes, planilhas de dados e notas para esta pasta. Quanto mais contexto o Copilot puder enxergar, melhor ele entregará os resultados.</div>
            </div>
          </div>
        </div>

        {/* Step 1.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">3</span>
            <h3>Instalar o Windows Terminal</h3>
          </div>
          <div className="step-body">
            <p>O terminal moderno oficial para Windows — interface organizada em abas, fontes excelentes e suporte nativo a emojis.</p>
            <p><strong>Baixe em:</strong> <a href="https://aka.ms/terminal" target="_blank" rel="noopener noreferrer">https://aka.ms/terminal</a></p>

            <div className="callout info">
              <span className="icon">ℹ️</span>
              <div>Se você já usa em seu dia a dia o VS Code ou outro terminal, tudo bem. O Windows Terminal é apenas nossa ótima recomendação inicial.</div>
            </div>
          </div>
        </div>

        {/* Step 1.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">4</span>
            <h3>Instalar o Git para Windows</h3>
          </div>
          <div className="step-body">
            <p>O Git é a ferramenta de controle de versão que o Copilot CLI utiliza como motor de backup sob o capô.</p>
            <p><strong>Baixe e execute o instalador:</strong><br />
              <a href="https://github.com/git-for-windows/git/releases/download/v2.53.0.windows.1/Git-2.53.0-64-bit.exe" style={{ wordBreak: 'break-all' }} target="_blank" rel="noopener noreferrer">
                https://github.com/git-for-windows/git/releases/.../Git-2.53.0-64-bit.exe
              </a>
            </p>

            <div className="callout tip">
              <span className="icon">✅</span>
              <div>Basta clicar em <strong>Next/Avançar</strong> em tudo — aceite todas as opções padrão. Feche e abra o terminal novamente quando acabar.</div>
            </div>
          </div>
        </div>

        {/* Step 1.5 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">5</span>
            <h3>Instalar o PowerShell 7</h3>
          </div>
          <div className="step-body">
            <p>O Copilot CLI precisa do PowerShell 7+ para rodar bem. A versão antiga (Windows PowerShell 5.1) instalada de fábrica no Windows não é suportada.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">PowerShell</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">PS&gt;</span> <span className="cmd">winget install Microsoft.PowerShell</span>
                <br /><br />
                <span className="output">Found PowerShell [Microsoft.PowerShell] Version 7.5.x<br />Starting installation...<br />Successfully installed!</span>
                <br /><br />
                <span className="comment"># Feche e reabra o terminal e verifique:</span><br />
                <span className="prompt">PS&gt;</span> <span className="cmd">$PSVersionTable.PSVersion</span>
                <br /><br />
                <span className="output">Major  Minor  Patch<br />-----  -----  -----<br />7      5      0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1.6 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">6</span>
            <h3>Configurar PowerShell 7 e Sua Pasta Padrão</h3>
          </div>
          <div className="step-body">
            <p>Configure o Windows Terminal para sempre abrir no PowerShell 7 e dentro da sua pasta de trabalho criada:</p>

            <div className="settings-mockup">
              <div className="settings-bar">
                <span>⚙️</span> Windows Terminal &mdash; Configurações (Ctrl+,)
              </div>
              <div className="settings-body">
                <div className="settings-sidebar">
                  <div className="item active">🏠 Inicialização</div>
                  <div className="item">🎨 Aparência</div>
                  <div className="item">⌨️ Interações</div>
                  <div className="item">Perfis</div>
                </div>
                <div className="settings-content">
                  <div className="setting-row">
                    <span className="setting-label">Perfil Padrão</span>
                    <span className="setting-value">⬛ PowerShell &nbsp;← (ícone preto, NOT o azul)</span>
                  </div>
                </div>
              </div>
            </div>

            <p>Em seguida, acesse <strong>Perfis &rarr; PowerShell</strong> (o menu do ícone preto):</p>

            <div className="settings-mockup">
              <div className="settings-bar">
                <span>⚙️</span> Windows Terminal &mdash; Perfis &gt; PowerShell
              </div>
              <div className="settings-body">
                <div className="settings-sidebar">
                  <div className="item">🏠 Inicialização</div>
                  <div className="item">🎨 Aparência</div>
                  <div className="item active">⬛ PowerShell</div>
                  <div className="item">🟦 Windows PowerShell</div>
                </div>
                <div className="settings-content">
                  <div className="setting-row">
                    <span className="setting-label">Diretório de Inicialização</span>
                    <span className="setting-value">C:\Users\<em>SeuNome</em>\ghcli-working</span>
                  </div>
                </div>
              </div>
            </div>

            <p>Clique em <strong>Salvar</strong>. Feche e abra o terminal novamente — ele iniciará diretamente na sua pasta.</p>

            <div className="callout warn">
              <span className="icon">⚠️</span>
              <div><strong>Atenção ao ícone correto!</strong> O ícone preto ⬛ representa o PowerShell 7. O azul claro 🟦 é a versão velha Windows PowerShell 5.1 — não use esta última.</div>
            </div>
          </div>
        </div>

        {/* Step 1.7 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">7</span>
            <h3>Instalar o Node.js</h3>
          </div>
          <div className="step-body">
            <p>O Node.js é o motor de execução que permite instalar e gerenciar o Copilot CLI.</p>

            <div className="feature-grid">
              <div className="feature-card">
                <h4>💻 Dispositivos Surface / ARM64</h4>
                <p><a href="https://nodejs.org/dist/v24.13.1/node-v24.13.1-arm64.msi" target="_blank" rel="noopener noreferrer">Baixar instalador ARM64</a></p>
              </div>
              <div className="feature-card">
                <h4>🖥️ Notebooks Padrão x64 Intel/AMD</h4>
                <p><a href="https://nodejs.org/dist/v24.13.1/node-v24.13.1-x64.msi" target="_blank" rel="noopener noreferrer">Baixar instalador x64</a></p>
              </div>
            </div>

            <div className="callout info">
              <span className="icon">❓</span>
              <div><strong>Não tem certeza do seu?</strong> No terminal do PowerShell, rode: <code>$env:PROCESSOR_ARCHITECTURE</code>. Se retornar <code>ARM64</code>, baixe o de cima. Se retornar <code>AMD64</code>, baixe o x64.</div>
            </div>

            <p>Avance em todas as configurações padrão no instalador. Depois, reinicie seu terminal e teste:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">PowerShell 7</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">PS&gt;</span> <span className="cmd">node --version</span>
                <br />
                <span className="output">v24.13.1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 1.8 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">8</span>
            <h3>Instalar o GitHub Copilot CLI</h3>
          </div>
          <div className="step-body">
            <p>Instale o pacote oficial da interface de comandos via npm (Node.js) globalmente em sua máquina.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">PowerShell 7</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">PS&gt;</span> <span className="cmd">npm install -g @github/copilot</span>
                <br />
                <span className="output">added 1 package in 8s<br />GitHub Copilot CLI installed successfully.</span>
                <br /><br />
                <span className="prompt">PS&gt;</span> <span className="cmd">copilot</span>
                <br /><br />
                <span className="info">{"   ____                  _   _           _"}</span><br />
                <span className="info">{"  / ___|   ___    _ __  (_) | |   ___   | |_"}</span><br />
                <span className="info">{" | |      / _ \  | '_ \ | | | |  / _ \  | __|"}</span><br />
                <span className="info">{" | |___  | (_) | | |_) || | | | | (_) | | |_"}</span><br />
                <span className="info">{"  \\____|  \\___/  | .__/ |_| |_|  \\___/   \\__|"}</span><br />
                <span className="info">{"                 |_|"}</span>
                <br /><br />
                <span className="highlight">Welcome! Type a prompt to get started.</span><br />
                <span className="output">Type /help for available commands.</span>
              </div>
            </div>

            <p>Na primeira vez que digitar <code>copilot</code>, ele pedirá sua autorização com o GitHub. Siga as instruções e cole o código gerado no navegador.</p>

            <div className="callout info">
              <span className="icon">📖</span>
              <div><strong>Referência Oficial:</strong> <a href="https://docs.github.com/copilot/github-copilot-in-the-cli" target="_blank" rel="noopener noreferrer">Documentação do GitHub Copilot CLI</a> — comandos, atalhos e especificidades.</div>
            </div>

            <div className="callout warn">
              <span className="icon">⚠️</span>
              <div><strong>O Copilot pede permissão com frequência.</strong> Isso é excelente para sua segurança — ele sempre irá requerer confirmação antes de criar arquivos, ler dados confidenciais ou rodar scripts em segundo plano. Responda <strong>Yes</strong> para avançar nas atividades.</div>
            </div>
          </div>
        </div>

        {/* Step 1.9 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">9</span>
            <h3>Selecionar Seu Modelo de IA padrão</h3>
          </div>
          <div className="step-body">
            <p>Selecione o modelo mais inteligente e com melhor capacidade de tomada de decisões corporativas:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="slash">/model</span>
                <br /><br />
                <span className="output">Select a model:</span>
              </div>
            </div>

            <div className="model-list">
              <div className="model-item"><span>  </span> Claude Sonnet 4.5</div>
              <div className="model-item"><span>  </span> Claude Sonnet 4</div>
              <div className="model-item selected"><span className="arrow">❯</span> Claude Opus 4.6 <span className="tag">⭐ Recomendado</span></div>
              <div className="model-item"><span>  </span> GPT-5</div>
              <div className="model-item"><span>  </span> GPT-5 mini</div>
            </div>

            <p>Use as setas do teclado e pressione <strong>Enter</strong>. O **Claude Opus 4.6** possui o melhor raciocínio lógico analítico disponível, o que fará toda a diferença de qualidade no dia a dia.</p>
          </div>
        </div>

        {/* Step 1.10 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num blue">10</span>
            <h3>Conectar Recursos com Plugins externa e MCP</h3>
          </div>
          <div className="step-body">
            <p>De forma padrão, ele analisa seus arquivos locais. Para conectar bases externas corporativas, como SharePoint, calendários, contatos ou bancos de dados, usamos os plugins e servidores do tipo <strong>MCP</strong>.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="comment"># Lista e navega pelos plug-ins integrados</span><br />
                <span className="prompt">&gt;</span> <span className="slash">/plugin</span>
                <br /><br />
                <span className="comment"># Adiciona conexões e servidores de dados locais/remotos (Detalhados no Stage 3)</span><br />
                <span className="prompt">&gt;</span> <span className="slash">/mcp add</span>
              </div>
            </div>

            <p>Detalharemos servidores de dados e habilidades específicas no **Stage 3**. Por ora, saiba que essa é a ponte para as conexões ao vivo fora da sua pasta local.</p>

            <div className="callout tip">
              <span className="icon">✅</span>
              <div><strong>Instalação concluída!</strong> Faça seu primeiro teste perguntando: <code>Resuma os arquivos desta pasta.</code></div>
            </div>
          </div>
        </div>

        {/* STAGE 2 */}
        <div className="section-divider"></div>

        <div className="stage-header stage-2" id="stage-2">
          <div className="stage-label">Etapa 2 de 4</div>
          <h2>🤖 Criando Seu Agente Personalizado</h2>
          <p>Transforme o Copilot no seu assistente corporativo sob demanda — alguém que entende seu papel, segue seu tom de voz e prioriza suas metas.</p>
        </div>

        <div className="step">
          <div className="step-body">
            <div className="callout warn">
              <span className="icon">📂</span>
              <div><strong>Atenção: Sempre trabalhe de dentro do diretório ghcli-working!</strong> Garanta que você está na pasta de trabalho que criamos na Etapa 1, Passo 6:<br /><br />
              <code>C:\Users\<em>SeuNome</em>\ghcli-working</code><br /><br />
              Suas instruções de perfil, scripts de apoio, listas de prompts recorrentes viverão nessa pasta. Como ela fica no seu OneDrive corporativo, tudo permanecerá sincronizado, seguro e rodando para suas tarefas de forma constante.</div>
            </div>
          </div>
        </div>

        {/* Step 2.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">1</span>
            <h3>O Que é um Agente Customizado?</h3>
          </div>
          <div className="step-body">
            <p>Sozinho, o Copilot é uma IA de propósito geral que não sabe nada sobre seu escopo de negócios. O <strong>agente customizado</strong> é um arquivo de diretrizes simples que define:</p>
            <ul>
              <li>👤 <strong>Quem você é</strong> — seu cargo, time e responsabilidades diretas</li>
              <li>🎯 <strong>O que te importa</strong> — kpis principais, clientes principais, contas sob seu radar</li>
              <li>📝 <strong>Sua comunicação</strong> — tom de voz (formal, dinâmico, bilíngue) e formatos padrões de entrega</li>
              <li>🛠️ <strong>Suas ferramentas</strong> — acessos de dados habilitados, templates, regras de segurança</li>
            </ul>

            <div className="callout info">
              <span className="icon">💡</span>
              <div><strong>Pense assim:</strong> Sem instruções, o Copilot é um assistente temporário super inteligente em seu primeiro dia de emprego. Com seu agente ativado, ele vira seu copiloto de equipe com anos de experiência no time.</div>
            </div>
          </div>
        </div>

        {/* Step 2.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">2</span>
            <h3>Criar Seu Perfil com o comando /agent</h3>
          </div>
          <div className="step-body">
            <p>A forma ideal de criar seu perfil é dentro do próprio Copilot CLI. Basta digitar <code>/agent</code> e selecionar <strong>Create Agent</strong>:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="slash">/agent</span>
                <br /><br />
                <span className="output">Select an option:</span>
              </div>
            </div>

            <div className="model-list">
              <div className="model-item selected"><span className="arrow">❯</span> Create Agent <span className="tag">⭐ Selecione aqui</span></div>
              <div className="model-item"><span>  </span> Browse agents</div>
              <div className="model-item"><span>  </span> Edit agent</div>
            </div>

            <p>O Copilot iniciará um assistente de configuração em perguntas interativas:</p>

            <ul>
              <li>👤 <strong>Seu nome e área de atuação</strong> — seu trabalho, empresa, e metas</li>
              <li>🎯 <strong>Suas contas ou foco deste trimestre</strong> — leads estratégicos, faturamento, consumo de nuvem</li>
              <li>📝 <strong>Estrutura de entregas</strong> — prefere sumários curtos? tabelas HTML? relatórios detalhados?</li>
            </ul>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Responda as perguntas no terminal naturalmente!</strong> Ele irá escrever e organizar as diretrizes de instrução em um arquivo markdown <code>.md</code> localizado na sua pasta de trabalho de forma automática. Ele carregará essas configurações em todas as vezes que o terminal for inicializado.</div>
            </div>

            <p>Veja como é um exemplo do diálogo gerador do perfil:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI — Criador de Agentes</span>
              </div>
              <div className="terminal-body">
                <span className="info">Qual o seu nome e cargo?</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Maria Silva, Account Executive do segmento de Serviços Financeiros</span>
                <br /><br />
                <span className="info">Quais são suas metas ou clientes principais?</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Gerencio três grandes contas bancárias nacionais. Meu foco prioritário é consumo de nuvem e adoção de projetos de IA generativa.</span>
                <br /><br />
                <span className="info">Como prefere minhas respostas?</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Respostas diretas, sem enrolação. Sempre gere páginas HTML interativas. Use esquemas de cores: verde para ótimo, amarelo para atenção, vermelho risco.</span>
                <br /><br />
                <span className="output">✅ Agente gerado com sucesso! Arquivo salvo em .github/agents/my-agent.md</span><br />
                <span className="output">Seu perfil será inicializado automaticamente em todos os próximos chats.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">3</span>
            <h3>Testar Seu Agente</h3>
          </div>
          <div className="step-body">
            <p>Abra o Copilot CLI novamente e peça um resumo de si mesma para validar as instruções:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Quem sou eu e quais minhas principais metas atuais?</span>
                <br /><br />
                <span className="info">Você é Maria Silva, Account Executive focada em Serviços Financeiros. Sua carteira conta com três grandes bancos brasileiros estratégicos.</span>
                <br /><br />
                <span className="info">Suas diretivas prioritárias:<br />1. Alavancar o consumo acumulado de nuvem das contas<br />2. Aceleramento e fomento de projetos reais de IA nos clientes</span>
              </div>
            </div>

            <p>Se as respostas vierem alinhadas com as de cima, seu agente está pronto e ativo! 🎉</p>

            <div className="callout tip">
              <span className="icon">🔄</span>
              <div><strong>Quer alterar alguma instrução?</strong> Digite <code>/agent</code> de novo e selecione <strong>Edit Agent</strong>, ou instrua o Copilot na conversa: <em>&ldquo;Atualize minhas instruções para também incluir que dou prioridade a iniciativas de governança de dados.&rdquo;</em> Ele salvará a edição sozinho.</div>
            </div>
          </div>
        </div>

        {/* Step 2.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num green">4</span>
            <h3>Criar Arquivos de Prompt Reutilizáveis</h3>
          </div>
          <div className="step-body">
            <p>Arquivos de prompt funcionam como modelos que você armazena e executa usando o caractere de atalho <code>@</code> direto no terminal.</p>

            <div className="file-mockup">
              <div className="file-mockup-bar">
                <span>📄</span>
                <span className="tab">recap-semanal.md</span>
              </div>
              <div className="file-mockup-body">
                <span className="line-num"> 1</span><span className="md-h1"># Consolidação Semanal</span><br />
                <span className="line-num"> 2</span><br />
                <span className="line-num"> 3</span><span className="md-text">Verifique e colete as conversas de emails, canais do Teams e compromissos</span><br />
                <span className="line-num"> 4</span><span className="md-text">dos últimos 5 dias úteis.</span><br />
                <span className="line-num"> 5</span><br />
                <span className="line-num"> 6</span><span className="md-text">Organize por conta do cliente e, em cada uma, apresente:</span><br />
                <span className="line-num"> 7</span><span className="md-bullet">- </span><span className="md-text">Decisões tomadas</span><br />
                <span className="line-num"> 8</span><span className="md-bullet">- </span><span className="md-text">Ações pendentes com responsáveis</span><br />
                <span className="line-num"> 9</span><span className="md-bullet">- </span><span className="md-text">Alertas de risco</span><br />
                <span className="line-num">10</span><span className="md-bullet">- </span><span className="md-text">Próximos passos planejados</span><br />
                <span className="line-num">11</span><br />
                <span className="line-num">12</span><span className="md-text">Gere de saída um arquivo HTML amigável e clean.</span>
              </div>
            </div>

            <p>Para utilizá-lo, chame o arquivo de prompt com o atalho <code>@</code> na linha de comando:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Executar</span> <span className="flag">@recap-semanal.md</span>
                <br /><br />
                <span className="output">🔍 Coletando dados do EnterpriseSuite em emails (últimos 5 dias)...<br />🔍 Coletando chats e canais ativos do Teams...<br />🔍 Coletando agenda do Outlook...<br />📝 Gerando documento analítico final...<br />✅ Pronto! Arquivo salvo em recap-semanal-report.html</span>
              </div>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <h4>📋 prepara-reuniao.md</h4>
                <p>Prepara briefing rápido das reuniões de amanhã com dores dos clientes e principais tópicos de debate.</p>
              </div>
              <div className="feature-card">
                <h4>📬 tarefas-perdidas.md</h4>
                <p>Busca e exibe entregáveis e prazos pendentes delegados a você no Teams e Outlook no período.</p>
              </div>
              <div className="feature-card">
                <h4>📊 dossie-cliente.md</h4>
                <p>Dossiê completo de 360 graus de uma conta, integrando fatos locais e análises externas da web.</p>
              </div>
              <div className="feature-card">
                <h4>💰 analise-forecast.md</h4>
                <p>Cruza as taxas de consumo com o funil comercial e aponta possíveis desvios de fechamento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* STAGE 3 */}
        <div className="section-divider"></div>

        <div className="stage-header stage-3" id="stage-3">
          <div className="stage-label">Etapa 3 de 4</div>
          <h2>⚡ Turbinando Seu Agente</h2>
          <p>Habilite conexões robustas: configure fontes de dados remotas via MCP, estruture skills autônomas reutilizáveis e planeje tarefas complexas.</p>
        </div>

        {/* Step 3.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">1</span>
            <h3>Adicionar Servidores MCP (Bases de Dados Externas)</h3>
          </div>
          <div className="step-body">
            <p>O <strong>MCP (Model Context Protocol)</strong> conecta a inteligência do Copilot aos bancos empresariais — imagine-os como adaptadores em tempo real para conectar o Copilot a ambientes como SharePoint, Power BI, CRM, etc.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="slash">/mcp add</span>
                <br /><br />
                <span className="output">Enter MCP server details:</span><br />
                <span className="info">  Name: </span><span className="cmd">enterprise-analytics</span><br />
                <span className="info">  Type: </span><span className="cmd">http</span><br />
                <span className="info">  URL:  </span><span className="cmd">https://api.analytics.zenithcloud.com/...</span>
                <br /><br />
                <span className="output">Press Ctrl+S to save</span>
              </div>
            </div>

            <p>Servidores MCP altamente produtivos para times de negócios:</p>

            <div className="feature-grid">
              <div className="feature-card" style={{ borderLeft: '4px solid var(--blue)' }}>
                <h4>📊 Analytics de Vendas da Empresa</h4>
                <p>Consulte faturamento, comissionamento e consumo real dos clientes em linguagem falada. &ldquo;Mostre as receitas recorrentes por cliente este mês&rdquo;.</p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--green)' }}>
                <h4>📖 Documentação ZenithCloud Learn</h4>
                <p>Acesso atualizado em tempo real aos termos oficiais de arquiteturas de nuvem e manuais de implementação técnica.</p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🌐 Conector GitHub MCP</h4>
                <p>Vem pré-instalado! Lista discussões de times, boards de planejamento, entregas abertas nos repositórios.</p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--purple)' }}>
                <h4>📄 Conversor PDF/XLSX MarkItDown</h4>
                <p>Traduz o conteúdo de arquivos pesados de slides (PPTX), PDF e gráficos consolidados para markdown leve legível por IA.</p>
              </div>
            </div>

            <div className="callout info">
              <span className="icon">💡</span>
              <div>As conexões ativas ficam descritas em <code>~/.copilot/mcp-config.json</code> de modo centralizado no Windows.</div>
            </div>
          </div>
        </div>

        {/* Step 3.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">2</span>
            <h3>Estruturar Suas Próprias Skills</h3>
          </div>
          <div className="step-body">
            <p><strong>Skills</strong> são pacotes de automação técnica modular — eles capacitam o Copilot a realizar tarefas complexas e repetitivas de forma confiável e com formatação idêntica a cada chamada. Equivale a dar um superpoder ao seu copiloto.</p>
            <p>Você pode estruturar novas capacidades de forma guiada pelo terminal explicando o processo ao Copilot:</p>

            <div className="prompt-example">
              <div className="label">📦 Copie e cole este prompt de exemplo no terminal</div>
              <div className="prompt-text">Create a reusable skill called "meeting-prep" that, given a customer name, gathers recent communications, summarizes them, and produces an HTML briefing with talking points. Save it so it loads automatically.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Create a reusable skill called &ldquo;meeting-prep&rdquo; that gathers recent communications, summarizes them, and produces an HTML briefing...</span>
                <br /><br />
                <span className="output">📝 Scaffolding skill &ldquo;meeting-prep&rdquo;...</span>
                <br /><br />
                <span className="info">Created skill files:</span><br />
                <span className="info">  📅 meeting-prep       </span><span className="output">— Daily meeting briefing generator</span>
                <br /><br />
                <span className="output">✅ Done! The skill is ready to use.</span>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>A ativação das skills é contextual.</strong> Você não precisa forçar um comando — o Copilot percebe dinamicamente qual habilidade deve acionar conforme sua solicitação.</div>
            </div>

            <div className="callout info">
              <span className="icon">🌐</span>
              <div>...E aproveite modelos públicos, prompts criados pelas equipes ao redor do globo em <a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer">github.com/github/awesome-copilot</a> para importar e usar.</div>
            </div>
          </div>
        </div>

        {/* Step 3.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">3</span>
            <h3>Utilizar o Modo Planejador (Plan Mode) para Roteiros Complexos</h3>
          </div>
          <div className="step-body">
            <p>Para solicitações com múltiplos desdobramentos, acione o <strong>Plan Mode</strong> — ele força a IA a listar todas as etapas lógicas de execução para aprovação antes de qualquer ação.</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI — Plan Mode</span>
              </div>
              <div className="terminal-body">
                <span className="comment"># Pressione Shift+Tab para alternar de modo de diálogo</span><br />
                <span className="output">Mode: </span><span className="highlight">📝 Plan</span>
                <br /><br />
                <span className="prompt">[plan]&gt;</span> <span className="cmd">Gerar um relatório competitivo de ZenithCloud contra HorizonCloud focado no cliente Banco Aliança, usando as volumetrias atuais deles e nossa vantagem comercial de reserva.</span>
                <br /><br />
                <span className="info">📋 Plano Proposto:<br />  1. Localizar emails e threads recentes comentando sobre Banco Aliança no EnterpriseSuite<br />  2. Localizar as taxas médias de armazenamento da conta no banco de dados local<br />  3. Buscar tabelas de custos da concorrência HorizonCloud do mesmo tamanho de storage<br />  4. Levantar a economia de custos com Reservas ZenithCloud<br />  5. Entregar dossiê em arquivo HTML rico para compartilhamento<br /><br />Prosseguir com o plano? (Pressione Shift+Tab para executar interativamente)</span>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">⌨️</span>
              <div>O atalho <strong>Shift+Tab</strong> transiciona instantaneamente entre os modos: <strong>Interactive</strong> (diálogo padrão) &rarr; <strong>Plan</strong> (planejamento lógicos) &rarr; de volta para Diálogo.</div>
            </div>
          </div>
        </div>

        {/* Step 3.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">4</span>
            <h3>Fornecer Dados de Input Para o Agente</h3>
          </div>
          <div className="step-body">
            <p>Quanto mais conteúdo estruturado sua pasta local possuir, melhores serão os insights. Utilize o prefixo <code>@</code> em seu prompt para indexar um arquivo específico:</p>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="comment"># Fazendo referência expressa a um arquivo</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Analise o arquivo</span> <span className="flag">@data/Q3-forecast.xlsx</span> <span className="cmd">e extraia as contas com maiores variações de metas</span>
                <br /><br />
                <span className="comment"># Fazendo referência a uma apresentação de slides</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Resuma a proposta corporativa</span> <span className="flag">@Strategy-as-a-Service.pptx</span> <span className="cmd">e liste os três pilares estratégicos de valor comercial</span>
                <br /><br />
                <span className="comment"># Comparando vários arquivos conjuntamente</span><br />
                <span className="prompt">&gt;</span> <span className="cmd">Compare</span> <span className="flag">@report-jan.html</span> <span className="cmd">com</span> <span className="flag">@report-feb.html</span> <span className="cmd">e aponte os novos gargalos identificados</span>
              </div>
            </div>

            <p>Dicas de materiais úteis para guardar na pasta de trabalho:</p>
            <ul>
              <li>📊 <strong>Exportações e Planilhas</strong> — relatórios de CRM, comissão, dashboards do Power BI</li>
              <li>📝 <strong>Minutas e Transcrições</strong> — notas de reuniões de alinhamentos, transcrições e canais</li>
              <li>📄 <strong>Modelos e Estruturas</strong> — formatos padrões de rascunhos de propostas, e-mails, atas</li>
              <li>📋 <strong>Dossiês Comerciais</strong> — propostas feitas no passado, cronogramas de arquiteturas, casos reais</li>
              <li>💡 <strong>Arquivos de Prompt</strong> — canivetes suíços estruturados na Etapa 2</li>
            </ul>
          </div>
        </div>

        {/* Step 3.5 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">5</span>
            <h3>Prompts Poderosos: Alavanque sua Produtividade</h3>
          </div>
          <div className="step-body">
            <p>Abaixo seguem receitas de prompts de ponta para aplicar no início de cada jornada:</p>

            <div className="prompt-example">
              <div className="label">🔍 Resumo do Meu Dia (Morning Catch-Up)</div>
              <div className="prompt-text">Busque todos os e-mails, mensagens de chats do Teams e compromissos de calendário das últimas 48 horas úteis. Identifique os top 5 pontos de foco prioritários urgentes sob meu radar — minhas ações pendentes, reuniões com clientes que irei precisar apresentar ou preparar material e aprovações que estão presas comigo. Desenhe isso em uma página HTML executiva colorida por importância.</div>
            </div>

            <div className="prompt-example">
              <div className="label">🎯 Análise Multidimensional de Clientes (Account 360)</div>
              <div className="prompt-text">Extraia dos canais do Teams e emails qual cliente foi o mais debatido por mim de forma recorrente esta semana. Reúna todo o histórico comercial disponível localmente dessa conta, faça uma busca atual na internet de novidades setoriais ou faturamentos da empresa deles na imprensa e elabore um documento de 360 graus em formato HTML apontando focos de conversas e gargalos sugeridos.</div>
            </div>

            <div className="prompt-example">
              <div className="label">📅 Gestor Prévio de Reuniões</div>
              <div className="prompt-text">Pesquise minha agenda de compromissos para os próximos dois dias. Para cada reunião externa que tenha leads ou clientes, busque os logs de conversas, últimos canais e emails nos últimos 15 dias. Detalhe quais focos estão sendo debatidos, pendências antigas com eles e gere pautas chaves de alinhamentos em um arquivo de briefing em HTML.</div>
            </div>

            <div className="prompt-example">
              <div className="label">💰 Estimativa de TCO de Negócios</div>
              <div className="prompt-text">Meu cliente possui demanda para reservar uma volumetria de 100M TPM de inteligência Zenith AI modelo PayGo. Elabore de forma simples uma precificação usando a tabela original de licenças públicas do Zenith em HTML para eu estruturar meu forecast corporativo. Crie cenários baseados na variação de tokens com descontos padrão de assinatura.</div>
            </div>
          </div>
        </div>

        {/* Step 3.6 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num purple">6</span>
            <h3>Recomendações Essenciais</h3>
          </div>
          <div className="step-body">
            <div className="feature-grid">
              <div className="feature-card">
                <h4>💾 Salve Tudo em Arquivo</h4>
                <p>Termine suas requisições com <em>&ldquo;salve a saída em um arquivo HTML amigável&rdquo;</em>. O Copilot produzirá páginas interativas ricas para visualização e envio.</p>
              </div>
              <div className="feature-card">
                <h4>🔄 Ajustes Ágeis</h4>
                <p>Não gostou do retorno? Refine o comando: <em>&ldquo;deixe mais resumido para diretoria&rdquo;</em> ou <em>&ldquo;inclua os dados em tabela de comparação&rdquo;</em>.</p>
              </div>
              <div className="feature-card">
                <h4>💬 Continue Históricos</h4>
                <p>O comando <code>/resume</code> reabre o último diálogo que você estava construindo, poupando tempo de dar contexto.</p>
              </div>
              <div className="feature-card">
                <h4>⌨️ Keyboard shortcuts</h4>
                <p><strong>Esc</strong> interrompe o retorno; <strong>Ctrl+C</strong> limpa a linha; <strong>Ctrl+T</strong> mostra os caminhos de raciocínio da IA.</p>
              </div>
              <div className="feature-card">
                <h4>🔍 Pesquisas Avançadas</h4>
                <p>O comando <code>/research [tema]</code> ativa rastreamentos lógicos estruturando um dossiê detalhado completo de internet e códigos.</p>
              </div>
              <div className="feature-card">
                <h4>📋 Histórico de Arquivos</h4>
                <p>O comando <code>/diff</code> monitora as alterações de código ocorridas sobre os arquivos da pasta nas últimas sessões.</p>
              </div>
            </div>

            <div className="callout important">
              <span className="icon">🔒</span>
              <div><strong>Aviso de Segurança de Dados:</strong> O Copilot CLI executa em ambiente local do seu PC. Sempre evite inputar tokens ativos, senhas ou termos internos que firam as diretrizes de governança da empresa.</div>
            </div>
          </div>
        </div>

        {/* STAGE 4 */}
        <div className="section-divider"></div>

        <div className="stage-header stage-4" id="stage-4">
          <div className="stage-label">Etapa 4 de 4</div>
          <h2>🎉 Colocando em Prática</h2>
          <p>Seu agente está pronto. Veja alguns cenários e modelos reais — testados por profissionais no dia a dia — para transformar sua entrega.</p>
        </div>

        {/* Step 4.1 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">1</span>
            <h3>🎙️ Ensine o Agente no Seu Tom de Voz</h3>
          </div>
          <div className="step-body">
            <p>O agente aprenderá a estruturar e-mails e atas conforme sua própria identidade de escrita analisando canais e e-mails reais do seu Outlook corporativo.</p>

            <div className="prompt-example">
              <div className="label">🎯 Prompt Completo de Aprendizado de Tom de Voz</div>
              <div className="prompt-text">Look at my meeting transcripts and email threads from the past 30 days. Analyze my communication style -- how I open conversations, how I give direction, how I close emails, what phrases I repeat, whether I&rsquo;m formal or informal, how I mix languages, and how I handle pushback. Then create a "Communication Style Profile" section and add it to my agent instructions so you always write in my voice.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Look at my meeting transcripts and email threads from the past 30 days. Analyze my communication style...</span>
                <br /><br />
                <span className="output">🔍 Analisando emails enviados na conta corporativa ZenithCloud (últimos 30 dias)...<br />🔍 Puxando registros de áudios Teams...<br />📝 Mapeando estilos gramaticais recorrentes...</span>
                <br /><br />
                <span className="info">📋 Perfil de Comunicação Identificado comercial:<br /><br />  Tom de Escrita: Caloroso, profissional e de ritmo ágil<br />  Estrutura Outlook: Breve, focada em pontos lógicos chaves, orientada a dados<br />  Estilo de Chat Teams: Informações leves, termos comerciais dinâmicos<br />  Identidade: Mescla termos de inglês e português naturalmente<br />  Termos frequentes: &ldquo;Vamos avançar&rdquo;, &ldquo;foco principal&rdquo;, &ldquo;passo seguinte...&rdquo;<br />  Formato de Encerramento: Confirmando papéis e marcos de datas explicitamente<br /><br />✅ Instruções salvas no perfil com sucesso!</span>
              </div>
            </div>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>A importância prática:</strong> Quando o copiloto aprende a redigir na sua identidade, todos os rascunhos de e-mails, consolidações e follow-ups manterão sua essência de assinatura naturalmente.</div>
            </div>
          </div>
        </div>

        {/* Step 4.2 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">2</span>
            <h3>📬 Transcrição &rarr; Resumo do Alinhamento &rarr; Follow-up</h3>
          </div>
          <div className="step-body">
            <p>Acabou de encerrar uma reunião? O Copilot puxará a gravação, estruturará a consolidação e montará a mensagem de follow-up em um piscar de olhos.</p>

            <div className="prompt-example">
              <div className="label">🎯 Prompt de Geração Automática de Atas de Reuniões</div>
              <div className="prompt-text">Find my most recent video meeting with an external customer. Get the full transcript, then generate a polished executive summary with: key decisions made, action items with owners and deadlines, and next steps. Then CREATE THE EMAIL IN WORKMAIL as a follow-up, adding everyone who was invited to the meeting as recipients. Use my communication style.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Find my most recent video meeting with an external customer...</span>
                <br /><br />
                <span className="output">🔍 Escaneando agenda do Outlook para identificar reunião comercial recente...<br />📋 Encontrado: &ldquo;Revisão Trimestral de Negócios (QBR) Contoso&rdquo; (Hoje, 14:00)<br />🎙️ Carregando e processando transcrição de áudio (47 min, 12 interlocutores)...<br />📝 Gerando resumo executivo estruturado...</span>
                <br /><br />
                <span className="info">📬 Montando rascunhos de e-mail no WorkMail...<br />  Recuperando a lista de participantes como destinatários do envio...<br /><br />  Destinatários: john@contoso.com, sarah@contoso.com, voce@dominio.com<br />  Assunto: Alinhamento QBR Contoso - Resumo e Próximos Passos<br /><br />  Prezado time Contoso,<br /><br />  Ótimo encontro hoje. Seguem as definições aprovadas:<br /><br />  Decisões Chaves:<br />  1. Conclusão da migração dos sistemas para ZenithCloud prevista para o Q4<br />  2. Implementação do escopo de testes de IA iniciando dia 25/Março<br /><br />  Responsabilidades Distribuídas:<br />  - [John] Envio de documentação de rede interna até 20/Março<br />  - [Você] Compartilhar planilha detalhada de Reserva de Instâncias<br />  - [Sarah] Alinhamento do comitê dos técnicos do time CSA da Microsoft<br /><br />  Nossa próxima conversa será dia 10 de Abril, pelo mesmo link.<br /><br />  Abraços</span>
                <br /><br />
                <span className="output">✅ Rascunho finalizado com sucesso no WorkMail! Revise os destinatários e envie.</span>
              </div>
            </div>

            <div className="callout info">
              <span className="icon">⏱️</span>
              <div><strong>Economia de tempo real:</strong> O fluxo burocrático completo pós-agenda, que demandava cerca de 30 minutos de transcrição braçal e escrita, acontece de forma impecável em menos de um minuto.</div>
            </div>
          </div>
        </div>

        {/* Step 4.3 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">3</span>
            <h3>🎨 Propostas Comerciais Personalizadas Baseadas na Identidade Visual</h3>
          </div>
          <div className="step-body">
            <p>O Copilot pode navegar pelo portal institucional de seu cliente, identificar as cores, tipografias e logotipos deles, e devolver slides de propostas estilizados na marca exata deles.</p>

            <div className="prompt-example">
              <div className="label">🎯 Prompt de Geração Visual de Propostas Personalizadas</div>
              <div className="prompt-text">Go to https://www.contoso.com and analyze their brand identity -- logo colors, typography style, and visual tone. Then create a 6-slide HTML presentation about our ZenithCloud migration proposal for them, using their brand colors and visual style. Include: executive summary, current state assessment, proposed architecture, migration timeline, investment overview, and next steps. Make it look premium and on-brand for them.</div>
            </div>

            <div className="terminal">
              <div className="terminal-bar">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
                <span className="title">Copilot CLI</span>
              </div>
              <div className="terminal-body">
                <span className="prompt">&gt;</span> <span className="cmd">Go to https://www.contoso.com and analyze their brand...</span>
                <br /><br />
                <span className="output">🌐 Executando varreduras de estilo em https://www.contoso.com...<br />🎨 Elementos de identidade mapeados:<br />  Matiz Padrão: #1B365D (Azul Marinho Corporativo)<br />  Cor Secundária: #E87722 (Laranja vibrante)<br />  Linha de Fonte: Moderna, sans-serif sem serifa<br />  Estilo de Comunicados: Direto, com foco em desenvolvimento tecnológico<br /><br />📝 Arquitetando apresentação de 6 slides com CSS dinâmico nas cores Contoso...<br />✅ Arquivo gerado em contoso-zenithcloud-proposal.html</span>
              </div>
            </div>

            <p>Abra o arquivo HTML gerado no navegador e veja uma apresentação customizada nas cores exatas do seu cliente, pronta para debates!</p>

            <div className="callout tip">
              <span className="icon">💡</span>
              <div><strong>Aumente o refinamento:</strong> Peça na sequência: <em>&ldquo;Gere agora um slide comparativo detalhado comparando faturamento em nuvem anterior versus as otimizações Zenith com reservas&rdquo;</em>. Ele calculará as métricas e montará o slide na hora.</div>
            </div>
          </div>
        </div>

        {/* Step 4.4 */}
        <div className="step">
          <div className="step-header">
            <span className="step-num orange">4</span>
            <h3>💡 Novos Horizontes de Automação</h3>
          </div>
          <div className="step-body">
            <p>Conforme adquirir confiança com os atalhos, integre outros cenários de valor corporativo de acordo com a sua carreira:</p>

            <div className="feature-grid">
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>📊 Mapeamento de Concorrência</h4>
                <p><em>&ldquo;Busque os lançamentos mais recentes de concorrência HorizonCloud desta semana corporativa e monte um dossiê prático de diferenciações para o time.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>💰 Consultoria de Vendas</h4>
                <p><em>&ldquo;Tenho uma tratativa de $2M com riscos comerciais de fechamento. Traga todos os emails trocados até o momento e sugira contramedidas estratégicas.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>📝 Highlights de Entregas Semanais</h4>
                <p><em>&ldquo;Gere as realizações da semana para envio aos gerentes comerciais mapeando minhas principais interações nos grupos e emails locais.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🤝 Organograma de Relacionamentos</h4>
                <p><em>&ldquo;Consolide quem são os contatos que mais interagi na Contoso em 90 dias, quais deixei de contatar, e me dê uma fila fria de re-engajamentos.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🚀 Calculadoras de Preços Rápidas</h4>
                <p><em>&ldquo;Monte uma tabela de custos detalhada em HTML para prospecção de ZenithCloud Object Storage com geo-redundância variando por blocos de TBs.&rdquo;</em></p>
              </div>
              <div className="feature-card" style={{ borderLeft: '4px solid var(--orange)' }}>
                <h4>🎯 Apresentações de Revisão Semestral (QBR)</h4>
                <p><em>&ldquo;Gere rascunhos para nossa apresentação de QBR comercial integrando volumetria consumida, novas frentes mapeadas e sugestões de adotação de IA.&rdquo;</em></p>
              </div>
            </div>

            <div className="callout warn" style={{ marginTop: '24px' }}>
              <span className="icon">🚀</span>
              <div><strong>A Regra de Ouro:</strong> Se você sabe como expressar sua necessidade, o Copilot sabe como executá-la. Não limite sua produtividade — force os limites de diálogo. Comece hoje mesmo!</div>
            </div>
          </div>
        </div>

        {/* QUICK REFERENCE CARD */}
        <div className="section-divider"></div>

        <div style={{ paddingTop: '40px', paddingBottom: '48px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>📌 Cartão de Referência Rápida (Atalhos)</h2>

          <div className="feature-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            <div className="feature-card" style={{ borderTop: '3px solid var(--blue)' }}>
              <h4>Comandos Padrões</h4>
              <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '0.82em', lineHeight: 2 }}>
                <code>/model</code> — Alterar modelo ativo<br />
                <code>/help</code> — Lista comandos do sistema<br />
                <code>/resume</code> — Abre a conversa anterior<br />
                <code>/compact</code> — Limpa dados do buffer<br />
                <code>/exit</code> — Sair do console do CLI
              </p>
            </div>
            <div className="feature-card" style={{ borderTop: '3px solid var(--green)' }}>
              <h4>Chamadas Locais</h4>
              <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '0.82em', lineHeight: 2 }}>
                <code>@nome_arquivo.md</code> — Indexa arquivo<br />
                <code>@pasta/</code> — Navega por diretórios<br />
                <code>!comando_terminal</code> — Run shell cmd<br />
                <code>Shift+Tab</code> — Alterna para Modo Plano<br />
                <code>Ctrl+T</code> — Exibe etapas lógicas de raciocínio
              </p>
            </div>
            <div className="feature-card" style={{ borderTop: '3px solid var(--purple)' }}>
              <h4>Avançados</h4>
              <p style={{ fontFamily: 'Cascadia Code, monospace', fontSize: '0.82em', lineHeight: 2 }}>
                <code>/mcp add</code> — Adiciona conexões MCP<br />
                <code>/skills</code> — Gerencia módulos Skills<br />
                <code>/agent</code> — Escolhe e configura agentes<br />
                <code>/research</code> — Deep research<br />
                <code>/plugin</code> — Lista e configura extensões
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
