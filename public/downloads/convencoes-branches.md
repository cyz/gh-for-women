# Convenções para nomes de branches

O Git e o GitHub não impõem uma convenção universal. Cada equipe pode definir seu padrão. Neste curso, usamos:

```text
<tipo>/<descricao-curta>
```

## Tipos adotados no curso

| Tipo | Use para | Exemplo |
|---|---|---|
| `feat/` | Nova funcionalidade | `feat/adiciona-formulario-contato` |
| `fix/` | Correção de comportamento | `fix/corrige-link-faq` |
| `docs/` | Documentação e textos | `docs/adiciona-horarios` |
| `chore/` | Manutenção sem mudança funcional | `chore/atualiza-gitignore` |

## Regras práticas

- Use letras minúsculas.
- Separe palavras com hífen.
- Descreva uma mudança coerente.
- Evite nomes de pessoas, datas e termos genéricos.
- Quando houver uma Issue, a equipe pode incluir o número: `docs/42-adiciona-horarios`.

## Bons e maus exemplos

| Evite | Prefira | Por quê |
|---|---|---|
| `teste` | `docs/adiciona-exemplo-faq` | Explica a finalidade |
| `branch-da-maria` | `feat/adiciona-busca` | Descreve o trabalho, não a pessoa |
| `nova-feature` | `feat/adiciona-filtro-categoria` | Evita nome genérico |
| `Fix_Link_Final_2` | `fix/corrige-link-contato` | Mantém padrão legível e estável |

## Antes de criar

```bash
git switch main
git pull origin main
git switch -c docs/adiciona-horarios
```

Confirme:

```bash
git branch
git status
```

## Uma branch, uma mudança coerente

Uma branch focada produz um Pull Request menor, mais fácil de revisar, testar e reverter. Se duas alterações podem ser aprovadas ou descartadas separadamente, considere branches separadas.

## Outros padrões que você encontrará

Algumas equipes usam `feature-...`, números de tickets como `1234/...`, nomes sem prefixo ou estratégias como Git Flow. Ao entrar em um projeto, leia `CONTRIBUTING.md` e siga a convenção local.

## Referência oficial

- [GitHub Flow](https://docs.github.com/pt/get-started/using-github/github-flow)
- [Sobre branches](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
