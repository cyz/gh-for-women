# Guia prático (Aula 20) — Fork e Pull Request

Este guia é **autoguiado**: siga no seu ritmo. Ao final, você terá contribuído com um
repositório de terceiros usando o modelo de **fork**, sem precisar de acesso de escrita.

> 🍴 **Dica:** use um repositório de exemplo ou um projeto marcado com
> `good first issue`. Muitos projetos open source recebem contribuições assim.

## Quando usar fork?

| Modelo | Quem faz push? | Onde fica a branch? | Uso comum |
|---|---|---|---|
| Repositório compartilhado | Colaboradores com acesso de escrita | No repositório principal | Equipes e organizações |
| Fork-and-pull | Qualquer pessoa faz push no próprio fork | Na conta da pessoa contribuidora | Open source e contribuições externas |

Nos dois modelos, um Pull Request propõe a integração. O fork é necessário quando você não
tem permissão de escrita no repositório original ou quando o projeto exige esse fluxo.

---

## O que você vai praticar

- Fazer **Fork** de um repositório no GitHub
- `git clone` do seu fork
- Configurar o `upstream` (repositório original)
- Criar branch, `commit` e `push` no seu fork
- Abrir um **Pull Request** do fork para o original

**Tempo estimado:** 45–60 min · **Pré-requisitos:** aulas 10 a 19.

---

## Passo 1 — Fazer o fork

1. Abra o repositório original no GitHub.
2. Clique em **Fork** (canto superior direito).
3. Confirme. Agora existe uma cópia em `github.com/SEU-USUARIO/projeto`.

## Passo 2 — Clonar o seu fork

Copie a URL pelo botão **Code** do **seu fork** (não do original):

```bash
git clone https://github.com/SEU-USUARIO/projeto.git
cd projeto
```

## Passo 3 — Configurar o upstream

```bash
git remote add upstream https://github.com/ORIGINAL/projeto.git
git remote -v          # origin = seu fork · upstream = original
```

- `origin`: seu fork; é para onde você envia sua branch.
- `upstream`: repositório original; é de onde você acompanha atualizações.

## Passo 4 — Criar uma branch e contribuir

Antes de começar, leia `README.md`, `CONTRIBUTING.md`, o código de conduta e a licença. Escolha
uma Issue aceita pelo projeto; não abra uma mudança grande sem alinhar com mantenedores.

```bash
git switch main
git fetch upstream
git merge upstream/main
git switch -c docs/corrige-link-instalacao
# faça a alteração no editor, depois:
git status
git diff
git add README.md
git diff --staged
git commit -m "Corrige link das instruções de instalação"
```

## Passo 5 — Enviar para o seu fork

```bash
git push -u origin docs/corrige-link-instalacao
```

## Passo 6 — Abrir o Pull Request

1. Volte ao GitHub — aparece um botão **Compare & pull request**.
2. Confirme que a base é o **repositório original** e a comparação é a **sua branch**.
3. Escreva um título e uma descrição com contexto, mudança e forma de verificação.
4. Se houver Issue, use `Closes #N` somente quando o PR realmente a resolver por completo.
5. Revise **Files changed** e confirme que nenhum arquivo acidental foi incluído.
6. Clique em **Create pull request** e acompanhe feedback e verificações.

## Manter o fork atualizado

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

Faça isso antes de criar uma nova branch. Não trabalhe diretamente na `main` do fork.

---

## ✅ Checklist final

- [ ] Fork criado na sua conta.
- [ ] Seu fork clonado com `git clone`.
- [ ] `upstream` configurado com `git remote add`.
- [ ] Diretrizes, licença e Issue do projeto foram lidas.
- [ ] Branch `docs/corrige-link-instalacao`, commit e push no seu fork.
- [ ] Pull Request aberto do fork para o original.
- [ ] Base, compare, arquivos alterados e forma de verificação foram conferidos.

---

## 🆘 Erros comuns

| Situação | O que significa | Como resolver |
|---|---|---|
| Cloneu o repositório original por engano | Você não tem push nele | Clone o **seu fork** (`github.com/SEU-USUARIO/...`) |
| PR apontando para a branch errada | Base ou compare trocados | Ajuste: base = original, compare = sua branch |
| Fork desatualizado | O original avançou | Rode o passo de `git fetch upstream` + `merge` |

## Referências oficiais

- [Sobre modelos de desenvolvimento colaborativo](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)
- [Trabalhar com forks](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks)
- [Criar um Pull Request a partir de um fork](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [GitHub Flow](https://docs.github.com/pt/get-started/using-github/github-flow)
