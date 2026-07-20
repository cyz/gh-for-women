# Git cheat sheet

Referência rápida dos comandos usados no curso. Leia primeiro a coluna **Quando usar**: o mesmo objetivo pode exigir comandos diferentes dependendo do estado do repositório.

> Substitua textos entre `< >` pelos valores do seu projeto. Antes de um comando que altera arquivos ou histórico, execute `git status`.

## Configurar e começar

| Intenção | Comando | Quando usar | Como conferir |
|---|---|---|---|
| Ver a versão instalada | `git --version` | Depois de instalar o Git | O terminal mostra `git version ...` |
| Configurar seu nome | `git config --global user.name "Seu Nome"` | Uma vez por computador | `git config --global user.name` |
| Configurar seu e-mail | `git config --global user.email "voce@exemplo.com"` | Uma vez por computador | `git config --global user.email` |
| Criar um repositório local | `git init` | Dentro de uma pasta que ainda não usa Git | `git status` deixa de mostrar “not a git repository” |
| Copiar um repositório existente | `git clone <URL>` | Na primeira vez em que você baixa um projeto remoto | Entre na pasta e rode `git log --oneline` |

## Entender o estado e registrar mudanças

| Intenção | Comando | Efeito | Como conferir |
|---|---|---|---|
| Ver o estado atual | `git status` | Lista arquivos novos, modificados e preparados | Leia cada seção da saída |
| Ver alterações ainda não preparadas | `git diff` | Compara diretório de trabalho e staging | A saída mostra linhas adicionadas e removidas |
| Ver alterações preparadas | `git diff --staged` | Compara staging e último commit | Revise antes de criar o commit |
| Preparar um arquivo | `git add <arquivo>` | Coloca a versão atual do arquivo no staging | `git status` mostra “Changes to be committed” |
| Preparar tudo na pasta | `git add .` | Prepara todas as mudanças abaixo da pasta atual | Use somente depois de revisar `git status` |
| Registrar uma versão | `git commit -m "Descrição específica"` | Cria um commit com o conteúdo do staging | `git log -1 --oneline` |
| Corrigir a última mensagem | `git commit --amend -m "Nova mensagem"` | Substitui o último commit local | Evite depois de compartilhar o commit |

## Consultar o histórico

| Intenção | Comando | Resultado |
|---|---|---|
| Ver histórico resumido | `git log --oneline` | Um commit por linha |
| Ver branches no histórico | `git log --oneline --graph --all` | Grafo textual com todas as referências locais |
| Inspecionar um commit | `git show <SHA>` | Metadados e alterações do commit |
| Ver quem alterou cada linha | `git blame <arquivo>` | Commit e autoria por linha; use para contexto, não para culpar pessoas |

## Desfazer com segurança

| Situação | Comando | Atenção |
|---|---|---|
| Descartar mudança não preparada | `git restore <arquivo>` | Perde a alteração local desse arquivo |
| Tirar arquivo do staging | `git restore --staged <arquivo>` | Mantém a alteração no arquivo |
| Reverter um commit compartilhado | `git revert <SHA>` | Cria outro commit que desfaz a mudança; preserva o histórico |
| Cancelar um merge em conflito | `git merge --abort` | Volta ao estado anterior ao início do merge |

> `git reset --hard` pode apagar trabalho não salvo em commits. Ele não é necessário nos exercícios deste curso.

## Remotos e sincronização

| Intenção | Comando | Quando usar | Como conferir |
|---|---|---|---|
| Listar remotos | `git remote -v` | Para descobrir os endereços configurados | Veja URLs de fetch e push |
| Adicionar o remoto principal | `git remote add origin <URL>` | Uma vez ao conectar um projeto local ao GitHub | `git remote -v` |
| Baixar referências sem integrar | `git fetch origin` | Antes de comparar ou revisar branches remotas | `git branch -r` |
| Baixar e integrar a branch atual | `git pull` | Quando a branch já tem upstream configurado | `git status` deve indicar sincronização |
| Primeiro envio de uma branch | `git push -u origin <branch>` | Configura o upstream e envia commits | O GitHub passa a mostrar a branch |
| Próximos envios | `git push` | Depois de configurar o upstream | Confira o commit no GitHub |

## Branches

| Intenção | Comando | Resultado |
|---|---|---|
| Listar branches locais | `git branch` | `*` marca a branch atual |
| Criar e entrar em uma branch | `git switch -c docs/atualiza-faq` | Nova branch criada a partir do commit atual |
| Trocar de branch | `git switch <branch>` | Arquivos passam a refletir a branch escolhida |
| Voltar à branch anterior | `git switch -` | Alterna entre as duas branches mais recentes |
| Excluir branch local integrada | `git branch -d <branch>` | Remove o ponteiro local; commits integrados continuam no histórico |

## Merge

```bash
git switch main
git pull origin main
git merge docs/atualiza-faq
git status
git log --oneline --graph --all
```

Se houver conflito:

```bash
git status                    # identifica os arquivos
# edite cada arquivo e escolha o conteúdo final
git add <arquivo-resolvido>
git commit                    # conclui o merge
git status                    # confirme que não há conflito pendente
```

## Fluxos completos

### Publicar um projeto novo

```bash
git init
git status
git add .
git commit -m "Cria estrutura inicial do projeto"
git remote add origin <URL>
git push -u origin main
```

### Trabalhar em uma mudança

```bash
git switch main
git pull origin main
git switch -c docs/adiciona-horarios
git status
# edite os arquivos
git diff
git add faq.md
git diff --staged
git commit -m "Adiciona horários dos encontros ao FAQ"
git push -u origin docs/adiciona-horarios
```

## Referências oficiais

- [Sobre o Git e comandos básicos](https://docs.github.com/pt/get-started/using-git/about-git)
- [Documentação de referência do Git](https://git-scm.com/docs)
- [GitHub Flow](https://docs.github.com/pt/get-started/using-github/github-flow)
