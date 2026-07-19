# 🔧 Guia prático (Aula 20) — Fork e Pull Request

Este guia é **autoguiado**: siga no seu ritmo. Ao final, você terá contribuído com um
repositório de terceiros usando o modelo de **fork**, sem precisar de acesso de escrita.

> 🍴 **Dica:** use um repositório de exemplo ou um projeto marcado com
> `good first issue`. Muitos projetos open source recebem contribuições assim.

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

## Passo 4 — Criar uma branch e contribuir

```bash
git switch -c minha-contribuicao
# faça sua alteração no editor, depois:
git add .
git commit -m "Adiciona minha contribuição"
```

## Passo 5 — Enviar para o seu fork

```bash
git push -u origin minha-contribuicao
```

## Passo 6 — Abrir o Pull Request

1. Volte ao GitHub — aparece um botão **Compare & pull request**.
2. Confirme que a base é o **repositório original** e a comparação é a **sua branch**.
3. Escreva um título e uma descrição claros e clique em **Create pull request**.

## (Opcional) Manter o fork atualizado

```bash
git fetch upstream
git switch main
git merge upstream/main
```

---

## ✅ Checklist final

- [ ] Fork criado na sua conta.
- [ ] Seu fork clonado com `git clone`.
- [ ] `upstream` configurado com `git remote add`.
- [ ] Branch, `commit` e `push` no seu fork.
- [ ] Pull Request aberto do fork para o original.

---

## 🆘 Erros comuns

| Situação | O que significa | Como resolver |
|---|---|---|
| Cloneu o repositório original por engano | Você não tem push nele | Clone o **seu fork** (`github.com/SEU-USUARIO/...`) |
| PR apontando para a branch errada | Base ou compare trocados | Ajuste: base = original, compare = sua branch |
| Fork desatualizado | O original avançou | Rode o passo de `git fetch upstream` + `merge` |
