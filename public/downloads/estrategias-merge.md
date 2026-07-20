# Estratégias de merge no GitHub

O GitHub pode integrar um Pull Request de três formas principais. A equipe escolhe quais métodos permite nas configurações do repositório.

## Comparação

| Método | Resultado em `main` | Vantagem | Atenção |
|---|---|---|---|
| Merge commit | Mantém os commits do PR e cria um commit de merge | Preserva a estrutura da branch e facilita visualizar o fluxo | O histórico pode ficar mais ramificado |
| Squash and merge | Combina os commits do PR em um único commit | Produz histórico resumido quando há commits de trabalho em andamento | Os commits individuais não entram em `main`; branches de longa duração podem gerar confusão em PRs seguintes |
| Rebase and merge | Recria cada commit do PR sobre a ponta da base, sem commit de merge | Mantém histórico linear e preserva commits separados | Reescreve SHAs e exige commits bem organizados; conflitos podem exigir rebase local e push forçado |

## Escolha didática do curso

No projeto final usamos **merge commit**. Assim, o grafo mostra a branch, seus commits e o ponto de integração. Isso é uma escolha para facilitar a leitura do histórico, não uma regra universal.

Em outro projeto:

- Use **squash** quando o PR representa uma unidade e os commits intermediários não precisam permanecer.
- Use **rebase and merge** quando a equipe exige histórico linear e sabe lidar com reescrita de histórico.
- Siga sempre `CONTRIBUTING.md` e as configurações do repositório.

## Antes do merge

- [ ] O PR não está em Draft.
- [ ] Os critérios de aceite foram atendidos.
- [ ] A revisão exigida foi aprovada.
- [ ] Comentários bloqueantes foram resolvidos.
- [ ] Testes e verificações passaram.
- [ ] Não há conflito com a branch base.
- [ ] O título e a mensagem final descrevem a alteração.

Branches protegidas podem transformar parte dessa lista em requisito obrigatório.

## Depois do merge

```bash
git switch main
git pull origin main
git log --oneline --graph --all
```

Depois de confirmar a integração, exclua a branch no GitHub e, se necessário, localmente:

```bash
git branch -d <branch>
```

Excluir a branch não apaga o conteúdo já integrado nem a conversa do Pull Request.

## E se houver conflito?

O merge fica bloqueado até que o conflito seja resolvido. Para conflitos simples de linha, o GitHub pode oferecer editor web; conflitos mais complexos devem ser resolvidos em um clone local.

Se você iniciou um merge local e quer cancelar antes de concluí-lo:

```bash
git merge --abort
```

## Referências oficiais

- [Sobre fusões de pull request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [Configurar métodos de merge](https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges)
- [Sobre branches protegidas](https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [Sobre conflitos de merge](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
