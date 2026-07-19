# 🔧 Guia prático (Aula 21) — Fluxo completo com Pull Request em grupo

Este guia é **autoguiado** e pensado para um **grupo** (3 a 5 pessoas) colaborando no mesmo
repositório de documentação. Sozinha? Faça o mesmo fluxo criando duas branches e revisando
o seu próprio Pull Request.

> 📦 **Projeto-base:** `manual-comunidade/` (só arquivos Markdown). Uma pessoa cria o
> repositório no GitHub e adiciona as demais como **colaboradoras** (Settings → Collaborators).

**Tempo estimado:** 60 min · **Pré-requisitos:** aulas 11 a 20.

---

## Papéis no grupo

| Papel | Responsabilidade |
|---|---|
| Mantenedora | Cria o repositório e adiciona colaboradoras |
| Autora | Desenvolve uma seção em uma branch e abre o PR |
| Revisora | Revisa o PR (localmente e no GitHub) e devolve um retorno |

Todas assumem os três papéis em rodadas diferentes.

---

## Parte 1 — Preparar o repositório (mantenedora)

1. Publique o `manual-comunidade` no GitHub (veja o guia da Aula 11).
2. **Settings → Collaborators** e convide cada colega pelo usuário do GitHub.
3. Todas clonam o projeto:

```bash
git clone https://github.com/MANTENEDORA/manual-comunidade.git
cd manual-comunidade
```

## Parte 2 — Desenvolver em uma branch (autora)

Cada pessoa fica com um arquivo diferente (`sobre.md`, `faq.md`, `contato.md`,
`codigo-de-conduta.md`).

```bash
git switch main
git pull origin main                 # comece sempre atualizada
git switch -c faq-horarios           # cria e troca para a branch
# edite o faq.md: adicione uma nova pergunta
git add faq.md
git commit -m "Adiciona pergunta sobre horários no FAQ"
git push -u origin faq-horarios
```

## Parte 3 — Draft Pull Request → PR oficial (autora)

1. No GitHub, clique em **Compare & pull request**.
2. Em vez de criar direto, escolha **Create draft pull request** (rascunho = trabalho em
   andamento; ninguém é chamado para revisar ainda).
3. Continue commitando enquanto ajusta.
4. Quando terminar, clique em **Ready for review** para transformar em PR oficial e, em
   **Reviewers**, escolha uma colega.

## Parte 4 — Code Review LOCAL (revisora)

Revisar na própria máquina ajuda a entender melhor a mudança.

```bash
git fetch origin                     # baixa as branches novas
git switch faq-horarios              # entra na branch do PR
# leia o faq.md, confira se está claro e correto
```

Quer garantir que a branch funciona junto com o que já está na main?

```bash
git merge main                       # traz a main para a branch do PR
```

> ⚡ **Conflito proposital:** se a autora e a main mexeram na **mesma linha**, o Git avisa de
> um conflito. Isso é normal! Abra o arquivo no VS Code, use **Accept Current / Incoming /
> Both** para decidir o que fica, e finalize:

```bash
git add faq.md
git commit -m "Resolve conflito ao atualizar o FAQ"
```

## Parte 5 — Enviar o retorno (revisora)

No GitHub, aba **Files changed → Review changes**:

- **Comment** — deixa observações sem aprovar nem barrar.
- **Approve** — aprova a mudança. 🎉
- **Request changes** — pede ajustes antes do merge.

Comece por um elogio e depois uma sugestão. Ex.: *"Ótima pergunta nova! Que tal incluir
também o horário dos encontros online?"*

## Parte 6 — Merge e sincronização (todas)

1. Após a aprovação, a autora clica em **Merge pull request → Confirm merge** e depois em
   **Delete branch**.
2. Todas atualizam a main local:

```bash
git switch main
git pull origin main
git log --oneline --graph            # veja toda a história do projeto em árvore
```

---

## ✅ Checklist final do grupo

- [ ] Repositório publicado e colaboradoras adicionadas
- [ ] Cada pessoa criou sua branch e fez commits
- [ ] Draft PR aberto e depois marcado como **Ready for review**
- [ ] Revisão feita localmente (com pelo menos um conflito resolvido)
- [ ] Retorno enviado (Approve ou Request changes)
- [ ] Merge concluído e main sincronizada por todas
