'use client';

import SlideDeck, { DeckSlide } from '@/components/SlideDeck';
import '../deck.css';

const slides: DeckSlide[] = [
  {
    id: 'capa',
    label: 'Capa',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🔗 Aula 7 · GitHub</span>
        <h1 className="slide-title">
          Conectando seu projeto ao GitHub <span className="accent">(remote e push)</span>
        </h1>
        <p className="slide-sub">
          Criamos um repositório no GitHub, mas ele continua vazio. Hoje vamos ligar o projeto do computador
          ao GitHub com <span className="mono">git remote add</span> e publicá-lo pela primeira vez com{' '}
          <span className="mono">git push</span>.
        </p>
      </div>
    ),
  },
  {
    id: 'remoto',
    label: 'Repositório remoto',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🌐 Repositório remoto</span>
        <h2 className="slide-title">Uma cópia do projeto na nuvem</h2>
        <div className="stage-flow" style={{ maxWidth: 720 }}>
          <div className="stage-box"><div className="st-ico">💻</div><h4>Computador</h4><p>Repositório local</p></div>
          <div className="stage-arrow"><span style={{ color: '#64748b' }}>⇅</span></div>
          <div className="stage-box"><div className="st-ico">☁️</div><h4>GitHub</h4><p>Repositório remoto</p></div>
        </div>
        <p className="slide-sub">Ainda falta dizer ao Git <strong>onde</strong> esse repositório remoto está.</p>
      </div>
    ),
  },
  {
    id: 'remote-add',
    label: 'git remote add',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">📍 git remote add</span>
        <h2 className="slide-title">Registrando o endereço</h2>
        <p className="slide-sub">No GitHub, clique em <strong>Code</strong> e copie a URL HTTPS. De volta ao VS Code:</p>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — conectar remoto</span></div>
          <div className="deck-term-body">
            <span className="cmd">git remote add origin <span className="str">https://github.com/ana/meu-primeiro-projeto.git</span></span>
          </div>
        </div>
        <div className="where-grid" style={{ maxWidth: 720 }}>
          <div className="where-item"><span className="where-ico">🔧</span><span><span className="mono">remote</span> — gerenciar repositórios remotos</span></div>
          <div className="where-item"><span className="where-ico">➕</span><span><span className="mono">add</span> — adicionar um remoto</span></div>
          <div className="where-item"><span className="where-ico">🏷️</span><span><span className="mono">origin</span> — apelido padrão do remoto</span></div>
        </div>
      </div>
    ),
  },
  {
    id: 'remote-v',
    label: 'git remote -v',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-purple">🔎 git remote -v</span>
        <h2 className="slide-title">Antes e depois de conectar</h2>
        <div className="vs-split" style={{ maxWidth: 900 }}>
          <div className="vs-panel bad">
            <h4>Antes</h4>
            <p className="mono" style={{ color: '#e2b4b4', fontSize: 13 }}>git remote -v</p>
            <p style={{ color: '#9aa3b8', fontSize: 13 }}>(nenhum remoto configurado)</p>
          </div>
          <div className="vs-arrow">➜</div>
          <div className="vs-panel good">
            <h4>Depois</h4>
            <p className="mono" style={{ color: '#a7e3b0', fontSize: 12.5, lineHeight: 1.8 }}>origin  https://github.com/... (fetch)<br />origin  https://github.com/... (push)</p>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🔑</span>
          <span><span className="mono">git remote add</span> apenas <strong>registra o endereço</strong> — ainda não enviamos nada.</span>
        </div>
      </div>
    ),
  },
  {
    id: 'push',
    label: 'git push',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker">🚀 git push</span>
        <h2 className="slide-title">Publicando o projeto</h2>
        <div className="deck-term">
          <div className="deck-term-bar"><span className="d r" /><span className="d y" /><span className="d g" /><span className="title">bash — enviar para o GitHub</span></div>
          <div className="deck-term-body">
            <span className="cmd">git push <span className="flag">-u</span> origin main</span>
            <span className="comment"># -u é abreviação de --set-upstream (define o destino padrão da branch)</span>
            <span className="comment"># push → enviar · origin → qual remoto · main → qual branch</span>
            <span className="comment"># com o -u, das próximas vezes basta rodar: git push</span>
            <span className="out ok">✔ Atualize o navegador: README.md e todo o projeto aparecem!</span>
          </div>
        </div>
        <div className="key-msg">
          <span className="key-icon">🎉</span>
          <span>Agora seu projeto também está salvo no <strong>GitHub</strong>. Um ótimo momento para comemorar!</span>
        </div>
      </div>
    ),
  },
  {
    id: 'dois-lugares',
    label: 'Dois lugares',
    render: () => (
      <div className="slide-pad">
        <span className="slide-kicker s-green">🛟 Segurança</span>
        <h2 className="slide-title">O projeto existe em dois lugares</h2>
        <div className="stage-flow" style={{ maxWidth: 720 }}>
          <div className="stage-box is-final"><div className="st-ico">💻</div><h4>Local</h4><p>No seu computador</p></div>
          <div className="stage-arrow"><span style={{ color: '#4ade80' }}>⇅</span></div>
          <div className="stage-box is-final"><div className="st-ico">☁️</div><h4>Remoto</h4><p>No GitHub</p></div>
        </div>
        <p className="slide-sub">&ldquo;Se meu computador quebrar hoje, o projeto continua existindo?&rdquo; &nbsp;→&nbsp; <strong style={{ color: '#4ade80' }}>Sim!</strong> Há uma cópia no GitHub.</p>
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
          <li><span className="check-ico">✅</span> Copiar a URL do repositório no GitHub.</li>
          <li><span className="check-ico">✅</span> <span className="mono">git remote add origin URL</span> e conferir com <span className="mono">git remote -v</span>.</li>
          <li><span className="check-ico">✅</span> <span className="mono">git push -u origin main</span>.</li>
          <li><span className="check-ico">✅</span> Atualizar o navegador e ver os arquivos publicados.</li>
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
        <h2 className="slide-title">Projeto publicado!</h2>
        <p className="slide-sub">
          Agora ele existe tanto no seu computador quanto na nuvem, podendo ser acessado e compartilhado.
        </p>
        <div className="did-you-know">
          <span className="dyk-icon">💡</span>
          <div>
            <h3>Você sabia?</h3>
            <p>
              O primeiro <span className="mono">git push</span> costuma ser um marco para quem aprende
              programação. A partir daí você já pode compartilhar projetos, criar um portfólio público e
              contribuir com projetos colaborativos.
            </p>
          </div>
        </div>
        <div className="key-msg" style={{ borderLeftColor: '#4ade80', background: 'linear-gradient(90deg, rgba(16,124,16,0.16), rgba(16,124,16,0.04))', borderColor: 'rgba(74,222,128,0.28)' }}>
          <span className="key-icon">➡️</span>
          <span>Próxima aula: uma prática guiada publicando um projeto do zero.</span>
        </div>
      </div>
    ),
  },
];

export default function AulaSete() {
  return <SlideDeck slides={slides} kicker="Aula 7" />;
}
