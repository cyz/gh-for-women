# Guia prático (Aula 21) — Fluxo completo com Pull Request em grupo

Este guia é **autoguiado** e pensado para um grupo de 3 a 5 pessoas. Em 90 minutos, cada
participante será autora de uma mudança, revisora de outra e acompanhará a integração de
um terceiro Pull Request.

> 📦 **Projeto-base:** `manual-comunidade/` (só arquivos Markdown). Uma pessoa cria o
> repositório no GitHub e adiciona as demais como **colaboradoras** (Settings → Collaborators).

**Tempo estimado:** 90 min · **Pré-requisitos:** aulas 11 a 20.

## Evidências de conclusão

Cada participante deve terminar com:

- Uma Issue com objetivo e critérios de aceite.
- Uma branch no padrão `tipo/descricao-curta`.
- Pelo menos dois commits coerentes.
- Um Pull Request com descrição, verificação e `Closes #N`.
- Uma revisão enviada em outro PR.
- Uma resposta ou ajuste decorrente de feedback.
- A `main` local sincronizada após os merges.

## Roteiro de 90 minutos

| Tempo | Fase | Resultado verificável |
|---|---|---|
| 0–10 min | Preparação e distribuição | Todas têm acesso, clone e arquivo definido |
| 10–30 min | Issue, branch e autoria | Issue aberta, branch publicada e dois commits |
| 30–40 min | Draft PR e auto-revisão | PR descreve mudança e forma de verificação |
| 40–60 min | Revisão cruzada em anel | Cada PR recebe comentário e decisão formal |
| 60–75 min | Ajustes e conflito controlado | Feedback respondido; um conflito resolvido pelo grupo |
| 75–85 min | Merge e sincronização | PRs integrados com merge commit; branches removidas |
| 85–90 min | Retrospectiva | Grupo registra uma decisão e um aprendizado |

---

## Papéis no grupo

| Papel | Responsabilidade |
|---|---|
| Mantenedora | Configura o repositório, acessos e ordem dos merges |
| Autora | Abre Issue, desenvolve em uma branch, cria o PR e responde ao feedback |
| Revisora | Compara o PR com os critérios, testa e envia Comment, Approve ou Request changes |
| Integradora | Confere a aprovação, escolhe merge commit, integra e remove a branch |

Os papéis acontecem em paralelo. Em um grupo A, B e C: A revisa B; B revisa C; C revisa A.
Na integração, A acompanha o merge de C; B acompanha o de A; C acompanha o de B.

---

## Parte 1 — Preparar o repositório (mantenedora)

1. Publique o `manual-comunidade` no GitHub (veja o guia da Aula 11).
2. **Settings → Collaborators** e convide cada colega pelo usuário do GitHub.
3. Todas clonam o projeto:

```bash
git clone https://github.com/MANTENEDORA/manual-comunidade.git
cd manual-comunidade
git remote -v
git status
```

Distribuam um arquivo por pessoa: `sobre.md`, `faq.md`, `contato.md`,
`codigo-de-conduta.md` e, em grupos de cinco, `README.md`.

## Parte 2 — Issue, branch e desenvolvimento (autora)

Antes de editar, abra uma Issue com:

- Contexto: qual necessidade será atendida?
- Escopo: qual arquivo ou seção será alterado?
- Critérios de aceite: como saberemos que está pronto?

Exemplo de critérios: “adicionar dois horários; manter a linguagem inclusiva; validar os
links no preview do Markdown”. Anote o número da Issue.

```bash
git switch main
git pull origin main                 # comece sempre atualizada
git switch -c docs/adiciona-horarios # padrão tipo/descricao-curta
# edite o faq.md: adicione a pergunta e a primeira resposta
git add faq.md
git commit -m "Adiciona pergunta sobre horários ao FAQ"
# refine a resposta ou corrija o link em uma segunda mudança coerente
git add faq.md
git commit -m "Detalha os horários dos encontros"
git push -u origin docs/adiciona-horarios
```

Antes do push, use `git status`, `git diff` e `git diff --staged` para conferir o que será
registrado. Não inclua arquivos fora do escopo.

## Parte 3 — Draft Pull Request → PR oficial (autora)

1. No GitHub, clique em **Compare & pull request**.
2. Em vez de criar direto, escolha **Create draft pull request** (rascunho = trabalho em
   andamento; ninguém é chamado para revisar ainda).
3. Preencha a descrição:

```markdown
## O que mudou
- Adiciona pergunta e horários dos encontros ao FAQ.

## Como verifiquei
- Abri o preview do Markdown e testei os links.

Closes #N
```

4. Em **Files changed**, faça uma auto-revisão e remova alterações acidentais.
5. Quando terminar, clique em **Ready for review** para transformar em PR oficial e, em
   **Reviewers**, escolha uma colega.

## Parte 4 — Code Review LOCAL (revisora)

Revisar na própria máquina ajuda a entender melhor a mudança.

```bash
git fetch origin                     # baixa as branches novas
git switch docs/adiciona-horarios    # entra na branch do PR
git diff origin/main...HEAD          # compara sem modificar a branch
# abra o preview, teste links e confira os critérios da Issue
```

Durante a revisão, não faça commits, merges ou push na branch de outra pessoa sem combinar.
Registre os achados no GitHub para que a autora decida e implemente os ajustes.

## Parte 5 — Enviar o retorno (revisora)

No GitHub, aba **Files changed → Review changes**:

- **Comment** — deixa observações sem aprovar nem barrar.
- **Approve** — aprova a mudança. 🎉
- **Request changes** — pede ajustes antes do merge.

Envie pelo menos um comentário específico e uma decisão formal. Explique local, impacto e
próximo passo. Exemplo: *“O link aponta para `contatos.md`, mas o arquivo se chama
`contato.md`. Podemos corrigir o caminho para evitar erro 404?”*

A autora responde a cada conversa, faz os ajustes solicitados em novos commits e envia
`git push`. Se houve mudança significativa, solicita nova revisão.

## Parte 6 — Conflito controlado (grupo)

Escolham somente um PR para o exercício de conflito. A mantenedora e a autora combinam uma
linha do `README.md` que pode ser alterada sem perder trabalho importante.

1. A mantenedora altera essa linha na `main`, faz commit e push.
2. A autora altera a mesma linha de forma diferente na branch do PR.
3. A autora atualiza sua branch:

```bash
git fetch origin
git switch docs/adiciona-horarios
git merge origin/main
# abra o arquivo e escreva conscientemente o conteúdo final
git add README.md
git commit -m "Resolve conflito com a atualização da main"
git push
git status
```

Não escolha “Accept Current”, “Incoming” ou “Both” sem ler as duas versões. O resultado
correto pode exigir editar manualmente. Se precisarem cancelar antes de concluir, use
`git merge --abort`.

## Parte 7 — Merge e sincronização (todas)

1. A integradora confere Issue, aprovação, conversas e ausência de conflitos.
2. Use **Create a merge commit** neste projeto para preservar o grafo didático.
3. Clique em **Merge pull request → Confirm merge** e depois em **Delete branch**.
2. Todas atualizam a main local:

```bash
git switch main
git pull origin main
git status
git log --oneline --graph --all      # veja branches e merges no histórico
```

## Retrospectiva de 5 minutos

Cada pessoa responde:

1. Qual evidência ajudou mais na revisão?
2. Que comentário levou a uma melhoria concreta?
3. O que o grupo mudaria no próximo ciclo?

---

## ✅ Checklist final do grupo

- [ ] Repositório publicado e colaboradoras adicionadas
- [ ] Cada pessoa abriu uma Issue com critérios de aceite
- [ ] Cada branch segue `tipo/descricao-curta` e tem pelo menos dois commits
- [ ] Draft PR aberto e depois marcado como **Ready for review**
- [ ] PR descreve mudança, verificação e contém `Closes #N`
- [ ] Cada pessoa revisou outro PR e enviou uma decisão formal
- [ ] Feedback foi respondido e ajustes foram publicados
- [ ] Um conflito controlado foi resolvido e verificado pelo grupo
- [ ] Merge commit concluído, branches removidas e `main` sincronizada

## Roteiro individual

Se estiver sozinha, crie duas Issues e duas branches. Termine o primeiro PR antes de abrir o
segundo. Faça a auto-revisão usando a mesma rubrica e registre comentários no PR. O objetivo
é praticar os estados e as evidências, mesmo sem simular uma aprovação independente.

## Materiais de consulta

- [Git cheat sheet](./git-cheat-sheet.md)
- [Convenções de branches](./convencoes-branches.md)
- [Guia de Code Review](./guia-code-review.md)
- [Estratégias de merge](./estrategias-merge.md)
- [GitHub Flow](https://docs.github.com/pt/get-started/using-github/github-flow)
- [Sobre revisões de pull request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
