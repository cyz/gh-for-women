'use client';

import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import Footer from '@/components/Footer';
import './lessons.css';

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
      { n: 5, title: 'Histórico e boas práticas de commit', desc: 'Consultar o histórico com git log e escrever boas mensagens.', dur: '~35 min' },
    ],
  },
  {
    kicker: 'Módulo 2',
    title: 'GitHub & repositórios remotos',
    sub: 'Publicando na nuvem',
    cls: 'm2',
    lessons: [
      { n: 6, title: 'Criando seu primeiro repositório no GitHub', desc: 'A diferença entre repositório local e remoto, e como criar um.', dur: '~35 min' },
      { n: 7, title: 'Conectando seu projeto ao GitHub (remote e push)', desc: 'Ligar o projeto local ao GitHub e publicar pela primeira vez.', dur: '~35 min' },
      { n: 8, title: 'Prática guiada: publicando um projeto do zero', desc: 'Todo o fluxo, do git init ao git push, em uma prática completa.', dur: '~50 min' },
    ],
  },
  {
    kicker: 'Módulo 3',
    title: 'Branches, colaboração e Pull Requests',
    sub: 'Trabalhando em equipe',
    cls: 'm3',
    lessons: [
      { n: 9, title: 'O que é uma branch e por que ela existe', desc: 'Linhas independentes de desenvolvimento sem afetar a versão principal.', dur: '~30 min' },
      { n: 10, title: 'Criando e trocando branches', desc: 'Criar, alternar e entender que cada branch tem seu próprio histórico.', dur: '~45 min' },
      { n: 11, title: 'Fluxo de trabalho com Feature Branch', desc: 'O processo usado por equipes: da branch ao envio para revisão.', dur: '~40 min' },
      { n: 12, title: 'Pull Request: solicitando a integração', desc: 'Abrir um PR para que sua alteração seja analisada antes do merge.', dur: '~40 min' },
      { n: 13, title: 'Code Review: revisando alterações em um PR', desc: 'Navegar pelas mudanças e comentar de forma construtiva.', dur: '~45 min' },
      { n: 14, title: 'Merge: integrando uma funcionalidade', desc: 'Levar o trabalho da branch para a main pelo GitHub.', dur: '~45 min' },
      { n: 15, title: 'Resolvendo conflitos de merge', desc: 'Entender por que conflitos acontecem e resolvê-los no VS Code.', dur: '~45 min' },
      { n: 16, title: 'Projeto final: fluxo completo de colaboração', desc: 'Unir tudo em um fluxo de equipe, da branch ao merge.', dur: '~60 min' },
    ],
  },
];

export default function GitGitHubIndex() {
  return (
    <>
      <SiteNav />

      <header className="hero">
        <div className="hero-eyebrow">🐙 Trilha &middot; Git &amp; GitHub</div>
        <h1>
          Git &amp; GitHub <span>para iniciantes</span>
        </h1>
        <div className="sub">
          16 aulas em slides, do zero à colaboração em equipe. Conteúdo visual e didático para apoiar o
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
