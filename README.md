# Git & GitHub para iniciantes

Uma trilha prática para aprender controle de versão desde o primeiro repositório local até
um fluxo completo de colaboração no GitHub.

> **21 aulas · 3 módulos · exercícios guiados · materiais para consulta**

## Sobre o curso

O curso apresenta Git e GitHub de forma progressiva, com exemplos, comandos explicados e
práticas próximas da rotina de uma equipe de desenvolvimento. Não é necessário ter
experiência anterior com controle de versão.

Ao concluir a trilha, você será capaz de:

- criar e configurar repositórios Git;
- registrar, consultar e desfazer alterações com segurança;
- publicar, clonar e sincronizar projetos no GitHub;
- organizar tarefas com Issues;
- trabalhar com branches e Pull Requests;
- revisar contribuições, integrar mudanças e resolver conflitos;
- contribuir em outros projetos por meio de fork.

## Percurso de aprendizagem

| Módulo                                       | Aulas | O que você vai aprender                                                                     |
| -------------------------------------------- | :---: | ------------------------------------------------------------------------------------------- |
| **1. Fundamentos do Git**                    |  1–7  | Versionamento local, configuração, commits, `.gitignore`, histórico e correção de erros.    |
| **2. GitHub e repositórios remotos**         | 8–12  | Criação, publicação e clonagem de repositórios, além da organização do trabalho com Issues. |
| **3. Branches, colaboração e Pull Requests** | 13–21 | Feature Branch, revisão, merge, conflitos, fork e um projeto colaborativo final.            |

<details>
<summary><strong>Ver todas as aulas</strong></summary>

### Módulo 1: Fundamentos do Git

1. O que é versionamento e por que usar Git
2. Instalação e configuração inicial do Git
3. Criando seu primeiro repositório com `git init`
4. Registrando alterações com `status`, `add` e `commit`
5. O que não versionar com `.gitignore`
6. Histórico e boas práticas de commit
7. Como desfazer e corrigir erros

### Módulo 2: GitHub e repositórios remotos

8. Criando seu primeiro repositório no GitHub
9. Conectando seu projeto ao GitHub com `remote` e `push`
10. Clonando um repositório existente
11. Prática guiada: publicando um projeto do zero
12. Organizando o trabalho com Issues

### Módulo 3: Branches, colaboração e Pull Requests

13. O que é uma branch e por que ela existe
14. Criando e trocando branches
15. Fluxo de trabalho com Feature Branch
16. Pull Request: solicitando a integração
17. Code Review: revisando alterações em um PR
18. Merge: integrando uma funcionalidade
19. Resolvendo conflitos de merge
20. Fork e Pull Request: contribuindo em outros projetos
21. Projeto final: fluxo completo de colaboração

</details>

## Como estudar

1. Siga as aulas na ordem, especialmente se este for seu primeiro contato com Git.
2. Reproduza os comandos em um repositório de teste, em vez de apenas lê-los.
3. Antes de cada commit, confira `git status` e `git diff --staged`.
4. Use os materiais de apoio para revisar comandos e realizar as práticas guiadas.
5. Ao terminar um módulo, tente explicar o fluxo com suas palavras e repeti-lo sem consultar
   a aula.

> [!TIP]
> Mantenha um repositório exclusivo para exercícios. Assim, você pode testar comandos,
> provocar conflitos e recomeçar sem afetar um projeto importante.

## Materiais de apoio

| Material                                                            | Uso recomendado                                             |
| ------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Guia de Markdown](public/downloads/guia-markdown.md)               | Criar documentação clara, bem formatada e fácil de navegar. |
| [Git cheat sheet](public/downloads/git-cheat-sheet.md)              | Consultar rapidamente os principais comandos do curso.      |
| [Guia de licenças](public/downloads/guia-licencas-repositorios.md)  | Escolher uma licença adequada para o repositório.           |
| [Convenções para branches](public/downloads/convencoes-branches.md) | Nomear branches de forma consistente.                       |
| [Estratégias de merge](public/downloads/estrategias-merge.md)       | Comparar as principais formas de integrar alterações.       |
| [Guia de Code Review](public/downloads/guia-code-review.md)         | Preparar, revisar e responder a Pull Requests.              |

Os roteiros completos das aulas 10, 11, 20 e 21 também estão disponíveis em
[`public/downloads`](public/downloads).

## Executar o site localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18.17 ou superior;
- npm, instalado com o Node.js;
- [Git](https://git-scm.com/);
- um editor de código, como o [VS Code](https://code.visualstudio.com/).

### Instalação

```bash
git clone https://github.com/cyz/gh-for-women.git
cd gh-for-women
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Comandos disponíveis

| Comando         | Finalidade                              |
| --------------- | --------------------------------------- |
| `npm run dev`   | Inicia o ambiente de desenvolvimento.   |
| `npm run build` | Valida e gera a versão de produção.     |
| `npm run start` | Serve localmente uma build de produção. |

## Organização do repositório

```text
.
├── public/downloads/       # Guias e materiais complementares
├── scripts/                # Automações do projeto
├── src/app/                # Páginas e estilos da aplicação
│   └── git-github/
│       ├── aula-1/ ... aula-21/
│       ├── deck.css        # Estilos das apresentações
│       └── lessons.css     # Estilos da página inicial
└── src/components/         # Componentes compartilhados
```

Para manter o projeto organizado:

- coloque cada aula em `src/app/git-github/aula-N/page.tsx`;
- mantenha materiais para download em `public/downloads` e use nomes em `kebab-case`;
- reutilize os componentes de `src/components` antes de criar novas variações;
- preserve os estilos compartilhados e evite regras duplicadas por aula;
- atualize este README quando adicionar aulas, scripts ou materiais;
- nunca versione senhas, tokens, arquivos `.env` ou dados pessoais.

## Padrão para contribuições

1. Sincronize a branch `main`.
2. Crie uma branch com nome curto e descritivo, como `docs/adiciona-guia-markdown`.
3. Faça uma mudança com escopo claro.
4. Revise a formatação e todos os links alterados.
5. Execute `npm run build`.
6. Crie um commit específico, como `Adiciona guia de Markdown`.
7. Abra um Pull Request explicando o que mudou e como foi validado.

### Checklist de conteúdo

- [ ] Títulos seguem uma hierarquia lógica, sem pular níveis.
- [ ] Comandos e nomes de arquivos usam crases.
- [ ] Links têm textos descritivos e abrem o destino correto.
- [ ] Exemplos não expõem credenciais ou dados pessoais.
- [ ] Texto, exemplos e interface usam termos de forma consistente.
- [ ] A página funciona em telas grandes e pequenas.
- [ ] `npm run build` termina sem erros.

## Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS

## Licença

Consulte o responsável pelo repositório antes de copiar ou redistribuir o conteúdo. Um
repositório público sem um arquivo de licença não concede automaticamente permissão geral
de reutilização.
