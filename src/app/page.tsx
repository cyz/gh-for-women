'use client';

import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';
import './git-github/lessons.css';

interface Lesson {
  n: number;
  title: string;
  desc: string;
  dur: string;
}

const modules: { kicker: string; title: string; sub: string; cls: string; lessons: Lesson[] }[] = [
  {
    kicker: 'Módulo 1',
    title: 'Fundamentos do Git',
    sub: 'Do conceito ao primeiro commit',
    cls: 'm1',
    lessons: [
      { n: 1, title: 'O que é versionamento e por que usar Git', desc: 'A ideia por trás do controle de versões e os problemas que ele resolve.', dur: '~28 min' },
      { n: 2, title: 'Instalação e configuração inicial do Git', desc: 'Instalar o Git, verificar a versão e configurar sua identidade.', dur: '~30 min' },
      { n: 3, title: 'Criando seu primeiro repositório (git init)', desc: 'Transformar uma pasta comum em um projeto versionado.', dur: '~30 min' },
      { n: 4, title: 'Registrando alterações: status, add e commit', desc: 'O ciclo básico do Git para salvar versões do projeto.', dur: '~40 min' },
      { n: 5, title: 'O que não versionar: o .gitignore', desc: 'Dizer ao Git quais arquivos e pastas ele deve ignorar por completo.', dur: '~30 min' },
      { n: 6, title: 'Histórico e boas práticas de commit', desc: 'Consultar o histórico com git log e escrever boas mensagens.', dur: '~35 min' },
      { n: 7, title: 'Desfazer e corrigir erros', desc: 'Descartar alterações, corrigir a última mensagem e reverter um commit com segurança.', dur: '~35 min' },
    ],
  },
  {
    kicker: 'Módulo 2',
    title: 'GitHub & repositórios remotos',
    sub: 'Publicando na nuvem',
    cls: 'm2',
    lessons: [
      { n: 8, title: 'Criando seu primeiro repositório no GitHub', desc: 'A diferença entre repositório local e remoto, e como criar um.', dur: '~35 min' },
      { n: 9, title: 'Conectando seu projeto ao GitHub (remote e push)', desc: 'Ligar o projeto local ao GitHub e publicar pela primeira vez.', dur: '~35 min' },
      { n: 10, title: 'Clonando um repositório existente', desc: 'Baixar um repositório do GitHub, com todo o histórico, para a sua máquina.', dur: '~35 min' },
      { n: 11, title: 'Prática guiada: publicando um projeto do zero', desc: 'Publicar um projeto de documentação (só markdown) do git init ao git push. Guia autoguiado para download.', dur: '~50 min' },
      { n: 12, title: 'Issues: organizando o trabalho', desc: 'Registrar tarefas, bugs e ideias, e organizar o que fazer antes de programar.', dur: '~30 min' },
    ],
  },
  {
    kicker: 'Módulo 3',
    title: 'Branches, colaboração e Pull Requests',
    sub: 'Trabalhando em equipe',
    cls: 'm3',
    lessons: [
      { n: 13, title: 'O que é uma branch e por que ela existe', desc: 'Linhas independentes de desenvolvimento sem afetar a versão principal.', dur: '~30 min' },
      { n: 14, title: 'Criando e trocando branches', desc: 'Criar, alternar, integrar com merge local e entender o histórico de cada branch.', dur: '~45 min' },
      { n: 15, title: 'Fluxo de trabalho com Feature Branch', desc: 'Modernizando a página About: da branch ao envio para revisão, uma funcionalidade por vez.', dur: '~40 min' },
      { n: 16, title: 'Pull Request: solicitando a integração', desc: 'Abrir um PR, começando por um rascunho (draft), para revisão antes do merge.', dur: '~40 min' },
      { n: 17, title: 'Code Review: revisando alterações em um PR', desc: 'Revisar as mudanças no GitHub e localmente, resolver conflitos e enviar um retorno.', dur: '~45 min' },
      { n: 18, title: 'Merge: integrando uma funcionalidade', desc: 'Integrar a branch à main, localmente ou pelo GitHub, e ler o histórico em árvore.', dur: '~45 min' },
      { n: 19, title: 'Resolvendo conflitos de merge', desc: 'Provocar e resolver um conflito no seu próprio repositório, no VS Code.', dur: '~45 min' },
      { n: 20, title: 'Fork e Pull Request: contribuindo em projetos de terceiros', desc: 'Contribuir em projetos open source com fork e Pull Request, sem acesso de escrita. Guia para download.', dur: '~45 min' },
      { n: 21, title: 'Projeto final: fluxo completo de colaboração', desc: 'Fluxo completo em grupo com Pull Requests no manual de documentação. Guia para download.', dur: '~60 min' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      <header className="hero">
        <div className="hero-eyebrow">🐙 Trilha &middot; Git &amp; GitHub</div>
        <h1>
          Git &amp; GitHub <span>para iniciantes</span>
        </h1>
        <div className="sub">
          21 aulas em slides, do zero à colaboração em equipe. Conteúdo visual e didático para apoiar o
          roteiro da instrutora e o entendimento de quem está começando no desenvolvimento.
        </div>
      </header>

      <div className="lessons-wrap">
        {modules.map((mod) => (
          <section className="module-block" key={mod.kicker}>
            <div className="module-head">
              <span className={`module-kicker ${mod.cls}`}>{mod.kicker}</span>
              <h2>{mod.title}</h2>
              <span className="module-sub">{mod.sub}</span>
            </div>
            <div className="lessons-grid">
              {mod.lessons.map((l) => (
                <Link href={`/git-github/aula-${l.n}`} key={l.n} className={`lesson-card ${mod.cls}`}>
                  <span className="lesson-badge">{l.n}</span>
                  <div className="lesson-info">
                    <h3>{l.title}</h3>
                    <p>{l.desc}</p>
                    <span className="lesson-dur">🎞️ {l.dur}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
}
