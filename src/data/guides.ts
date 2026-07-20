export interface Guide {
  slug: string;
  title: string;
  desc: string;
  relatedLessons: string;
  fileName: string;
}

export const guides: Guide[] = [
  {
    slug: 'guia-markdown',
    title: 'Guia prático de Markdown',
    desc: 'Referência de sintaxe e boas práticas para criar documentação clara no GitHub.',
    relatedLessons: 'Aula 11',
    fileName: 'guia-markdown.md',
  },
  {
    slug: 'git-cheat-sheet',
    title: 'Git cheat sheet',
    desc: 'Referência rápida dos principais comandos usados ao longo do curso.',
    relatedLessons: 'Aulas 7, 11, 19 e 21',
    fileName: 'git-cheat-sheet.md',
  },
  {
    slug: 'guia-licencas-repositorios',
    title: 'Guia de licenças para repositórios',
    desc: 'Critérios para escolher e aplicar uma licença ao seu projeto.',
    relatedLessons: 'Aulas 8 e 11',
    fileName: 'guia-licencas-repositorios.md',
  },
  {
    slug: 'guia-aula-10-clonar',
    title: 'Clonar um repositório',
    desc: 'Roteiro autoguiado para clonar, explorar, alterar e enviar um projeto.',
    relatedLessons: 'Aula 10',
    fileName: 'guia-aula-10-clonar.md',
  },
  {
    slug: 'guia-aula-11-subir-projeto',
    title: 'Publicar seu primeiro projeto',
    desc: 'Prática completa para publicar um projeto do git init ao git push.',
    relatedLessons: 'Aula 11',
    fileName: 'guia-aula-11-subir-projeto.md',
  },
  {
    slug: 'convencoes-branches',
    title: 'Convenções para branches',
    desc: 'Padrões de nomes para criar branches claras e consistentes.',
    relatedLessons: 'Aula 13',
    fileName: 'convencoes-branches.md',
  },
  {
    slug: 'guia-code-review',
    title: 'Guia de Code Review',
    desc: 'Checklist prático para preparar, revisar e responder a um Pull Request.',
    relatedLessons: 'Aulas 17 e 21',
    fileName: 'guia-code-review.md',
  },
  {
    slug: 'estrategias-merge',
    title: 'Estratégias de merge',
    desc: 'Comparação entre merge commit, squash and merge e rebase and merge.',
    relatedLessons: 'Aula 18',
    fileName: 'estrategias-merge.md',
  },
  {
    slug: 'guia-aula-20-fork-pr',
    title: 'Fork e Pull Request',
    desc: 'Guia autoguiado para contribuir em projetos sem acesso de escrita.',
    relatedLessons: 'Aula 20',
    fileName: 'guia-aula-20-fork-pr.md',
  },
  {
    slug: 'guia-aula-21-pr-em-grupo',
    title: 'Pull Request em grupo',
    desc: 'Projeto final para praticar Issues, branches, revisão e integração em equipe.',
    relatedLessons: 'Aula 21',
    fileName: 'guia-aula-21-pr-em-grupo.md',
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideSlugFromHref(href: string) {
  const fileName = href.split('/').pop();
  return guides.find((guide) => guide.fileName === fileName)?.slug;
}