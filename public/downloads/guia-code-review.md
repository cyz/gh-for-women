# Guia de Code Review

Code Review é uma conversa técnica sobre uma alteração. O objetivo é verificar o resultado, reduzir riscos e compartilhar conhecimento, não avaliar a pessoa que escreveu o código.

## Antes de pedir revisão

A pessoa autora deve:

- Conferir se o Pull Request resolve a Issue e seus critérios de aceite.
- Revisar o próprio diff em **Files changed**.
- Remover mudanças acidentais ou fora do escopo.
- Testar o comportamento e registrar como testou.
- Escrever título e descrição que expliquem problema, solução e limites.
- Marcar o Draft PR como **Ready for review** somente quando estiver pronto.

## O que revisar

| Aspecto | Pergunta |
|---|---|
| Objetivo | A mudança resolve o problema descrito? |
| Escopo | O PR contém apenas alterações relacionadas? |
| Clareza | Outra pessoa consegue entender nomes, texto e decisões? |
| Correção | Há erro, caso não tratado ou comportamento quebrado? |
| Segurança | Algum segredo, dado pessoal ou permissão indevida foi incluído? |
| Testes | A evidência apresentada é suficiente para o risco da mudança? |
| Documentação | README, exemplos e links continuam corretos? |

Para PRs de documentação, confira também ortografia, hierarquia de títulos, tom, acessibilidade e links.

## Feedback útil

Um bom comentário identifica o local, explica o impacto e propõe um próximo passo.

**Pouco útil:**

> Está errado.

**Mais útil:**

> Este link aponta para `contatos.md`, mas o arquivo se chama `contato.md`. Podemos corrigir o caminho para evitar erro 404?

Use perguntas quando você busca contexto:

> O que acontece quando a lista está vazia? Já existe um comportamento esperado na Issue?

Separe bloqueios de sugestões opcionais:

> **Bloqueio:** o token aparece no arquivo e precisa ser removido antes do merge.
>
> **Sugestão não bloqueante:** poderíamos encurtar este título em outro PR.

## Decisão da revisão

| Opção | Use quando |
|---|---|
| **Comment** | Você quer registrar perguntas ou sugestões sem aprovar nem bloquear |
| **Approve** | A mudança pode ser integrada no estado atual |
| **Request changes** | Existe um problema que precisa ser resolvido antes do merge |

Não aprove apenas porque “parece pequeno”. Não solicite mudanças por preferência pessoal sem explicar o padrão ou o impacto.

## Ciclo completo

1. A revisora lê descrição, Issue e diff.
2. Testa localmente quando necessário.
3. Faz comentários específicos e envia uma decisão.
4. A autora responde, faz novos commits e envia `git push`.
5. Conversas atendidas são resolvidas.
6. A autora solicita nova revisão quando houve mudança significativa.
7. Depois da aprovação e das verificações, o PR pode ser integrado.

## Revisar localmente

```bash
git fetch origin
git switch <branch-do-pr>
git status
# abra os arquivos e execute as verificações do projeto
```

Com GitHub CLI:

```bash
gh pr checkout <numero-do-pr>
```

Não faça merge de `main` na branch de outra pessoa apenas para “testar” sem combinar com a autora; isso altera o histórico compartilhado.

## Rubrica para os projetos do curso

- [ ] A Issue tem objetivo e critérios de aceite.
- [ ] O nome da branch comunica o escopo.
- [ ] Os commits são pequenos e descritivos.
- [ ] A descrição do PR explica o que mudou e como foi verificado.
- [ ] Não existem arquivos ou dados fora do escopo.
- [ ] Links e Markdown renderizam corretamente.
- [ ] O feedback é específico, respeitoso e acionável.
- [ ] A decisão escolhida corresponde ao estado do PR.

## Referências oficiais

- [Sobre revisões de pull request](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)
- [Revisar alterações propostas](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
- [Solicitar uma revisão](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)
