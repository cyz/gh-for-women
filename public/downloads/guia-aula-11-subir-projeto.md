# Guia prático (Aula 11) — Publicar seu primeiro projeto

Este guia é **autoguiado**: siga no seu ritmo, sem precisar de uma aula gravada. Ao final,
você terá publicado no GitHub um projeto de documentação feito só com arquivos Markdown.

O projeto será um `manual-comunidade` com cinco documentos. Você criará a estrutura do zero
para praticar também organização, Markdown e validação de conteúdo.

---

## O que você vai praticar

- `git init`, `git status`, `git add`, `git commit`
- Criar um repositório no GitHub
- Conectar local e remoto com `git remote add`
- Publicar com `git push`
- Escolher conscientemente uma licença para documentação
- Provar que outra pessoa consegue clonar e compreender o projeto

**Tempo estimado:** 60–75 min · **Pré-requisitos:** aulas 2 a 10.

---

## Passo 1 — Preparar a pasta do projeto

1. Crie uma pasta chamada `manual-comunidade`.
2. Abra a pasta no VS Code: **File → Open Folder**.
3. Crie estes arquivos:

| Arquivo | Conteúdo mínimo |
|---|---|
| `README.md` | Nome, propósito e links para as quatro seções |
| `sobre.md` | Público, propósito e três valores da comunidade |
| `faq.md` | Três perguntas com respostas completas |
| `contato.md` | Dois canais fictícios e orientação sobre quando usar cada um |
| `codigo-de-conduta.md` | Comportamentos esperados, não aceitos e como reportar problemas |

Use dados fictícios. Não publique telefone, endereço, token, senha ou outro dado pessoal.

Exemplo de índice no `README.md`:

```markdown
## Conteúdo

- [Sobre a comunidade](sobre.md)
- [Perguntas frequentes](faq.md)
- [Contato](contato.md)
- [Código de conduta](codigo-de-conduta.md)
```

Abra o preview do Markdown no VS Code e clique em cada link. No macOS, use
`Command+Shift+V`; no Windows e Linux, `Ctrl+Shift+V`.

## Passo 2 — Inicializar o Git

No terminal integrado do VS Code (**Terminal → New Terminal**):

```bash
git init
```

- `git` → a ferramenta · `init` → inicializa o repositório (cria a pasta oculta `.git`).

## Passo 3 — Construir um histórico legível

```bash
git status
git add README.md sobre.md
git diff --staged
git commit -m "Cria apresentação da comunidade"

git add faq.md contato.md codigo-de-conduta.md
git diff --staged
git commit -m "Adiciona orientações para participantes"

git log --oneline
```

Cada commit registra uma unidade coerente. O primeiro apresenta a comunidade; o segundo
documenta como participar. Se `git status` mostrar outro arquivo, descubra por que ele está
ali antes de adicioná-lo.

## Passo 4 — Criar o repositório no GitHub

1. Acesse **github.com** e faça login.
2. Clique em **New repository**.
3. Nome: `manual-comunidade` · Visibilidade: **Public**.
4. **Não** marque *Add a README*, `.gitignore` nem *License* neste momento. O README já é
  local e a licença será uma decisão separada no passo 7.
5. Clique em **Create repository** e **copie a URL** que aparece (termina em `.git`).

## Passo 5 — Conectar local e remoto

```bash
git remote add origin https://github.com/SEU-USUARIO/manual-comunidade.git
git remote -v              # confirma que o "origin" foi registrado
```

- `remote add` registra o endereço · `origin` é o apelido do remoto.

## Passo 6 — Publicar

```bash
git push -u origin main
```

- `push` envia · `-u` memoriza o destino (depois basta `git push`) · `origin` é o remoto ·
  `main` é a branch.

Atualize a página do GitHub: seus arquivos `.md` aparecem publicados. 🎉

## Passo 7 — Decidir e registrar a licença

Este projeto é documentação, não uma biblioteca de software. Licenças Creative Commons
costumam ser mais adequadas para textos e materiais. Antes de escolher, leia o
[guia de licenças](./guia-licencas-repositorios.md).

Para o exercício, registre sua decisão no `README.md`, mesmo que decida não aplicar uma
licença ainda:

```markdown
## Licença

Este exercício usa a licença [NOME] porque [MOTIVO].
```

Se aplicar uma licença, obtenha o texto oficial, salve-o como `LICENSE` na raiz e não
reescreva suas cláusulas. Depois:

```bash
git add README.md LICENSE
git diff --staged
git commit -m "Documenta a licença do projeto"
git push
```

Se não criou `LICENSE`, remova esse nome do comando `git add`. Repositório público sem
licença não concede automaticamente permissão geral de reutilização.

## Passo 8 — Testar como outra pessoa

Saia da pasta do projeto e faça um clone com outro nome:

```bash
cd ..
git clone https://github.com/SEU-USUARIO/manual-comunidade.git manual-comunidade-teste
cd manual-comunidade-teste
git remote -v
git log --oneline
git status
```

Abra o `README.md`, confirme que os links e arquivos estão presentes e depois remova a pasta
de teste pelo Finder ou Explorer. Não faça novas alterações nessa cópia.

---

## ✅ Checklist final

- [ ] `git init` executado
- [ ] Cinco documentos completos e links validados no preview
- [ ] Pelo menos dois commits coerentes registrados
- [ ] Repositório criado no GitHub
- [ ] `origin` conectado (`git remote -v`)
- [ ] Projeto publicado com `git push`
- [ ] Decisão de licença explicada no README
- [ ] Clone de teste contém arquivos e histórico esperados

## Rubrica de autoavaliação

| Critério | Evidência |
|---|---|
| Conteúdo | Cada arquivo atende ao mínimo e usa informações fictícias |
| Navegação | Links do README abrem as quatro seções |
| Histórico | Commits têm escopo coerente e mensagens específicas |
| Segurança | Nenhum segredo ou dado pessoal foi publicado |
| Licença | A decisão corresponde ao tipo de conteúdo e foi justificada |
| Portabilidade | Um clone novo reproduz arquivos e histórico sem correção manual |

## 🩹 Deu erro? Sem pânico

| Mensagem | O que significa | Como resolver |
|---|---|---|
| `nothing to commit` | Você esqueceu o `git add` | Rode `git add .` antes do commit |
| `fatal: not a git repository` | Faltou o `git init` | Rode `git init` na pasta do projeto |
| `Updates were rejected` | Você marcou *Add a README* no GitHub | Rode `git pull origin main` antes do `push` |
| `remote origin already exists` | O remoto já foi configurado | Confira com `git remote -v`; não adicione novamente |
| `src refspec main does not match any` | Ainda não há commit ou a branch tem outro nome | Rode `git log` e `git branch`; crie o primeiro commit antes do push |
| `Repository not found` | URL incorreta ou falta de acesso | Copie novamente a URL em **Code** e confira a conta autenticada |

> Evite resolver erros copiando comandos destrutivos sem entender. Use `git status`, leia a
> mensagem completa e consulte o [Git cheat sheet](./git-cheat-sheet.md).

## Próxima etapa

Na Aula 21, este mesmo projeto evolui para um fluxo colaborativo com Issue, branch, Pull
Request, Code Review, conflito controlado e merge.

## Referências oficiais

- [Sobre o Git e comandos básicos](https://docs.github.com/pt/get-started/using-git/about-git)
- [Gerenciar repositórios remotos](https://docs.github.com/pt/get-started/getting-started-with-git/managing-remote-repositories)
- [Licenciar um repositório](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- [Clonar um repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository)
