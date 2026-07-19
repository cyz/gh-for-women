# 🔧 Guia prático (Aula 10) — Clonar um repositório

Este guia é **autoguiado**: siga no seu ritmo. Ao final, você terá clonado um repositório
existente do GitHub, feito uma alteração e enviado de volta.

> 📦 **Dica:** você pode clonar o repositório `manual-comunidade` que publicou na Aula 8,
> ou qualquer repositório público que queira estudar.

---

## O que você vai praticar

- `git clone` para baixar um repositório existente
- `git remote -v` para conferir o `origin`
- `git log --oneline` para ver o histórico que veio junto
- `git add`, `git commit` e `git push` no projeto clonado

**Tempo estimado:** 30–40 min · **Pré-requisitos:** conta no GitHub e Git configurado (aulas 2, 8 e 9).

---

## Passo 1 — Copiar a URL do repositório

1. Abra o repositório no GitHub.
2. Clique no botão verde **Code**.
3. Escolha a aba **HTTPS** e **copie a URL** (termina em `.git`).

## Passo 2 — Clonar

No terminal, na pasta onde você guarda seus projetos:

```bash
git clone https://github.com/SEU-USUARIO/manual-comunidade.git
```

- `git clone URL` cria uma pasta com o nome do repositório, baixa os arquivos e traz todo o histórico.

## Passo 3 — Entrar na pasta e conferir

```bash
cd manual-comunidade
git remote -v          # o origin já está configurado
git log --oneline      # veja o histórico que veio junto
```

- Repare: você **não** precisou rodar `git remote add`. O `clone` já fez isso.

## Passo 4 — Fazer uma alteração

1. Abra a pasta no VS Code: **File → Open Folder**.
2. Edite um arquivo, por exemplo adicione uma linha ao `README.md`.

## Passo 5 — Enviar de volta

```bash
git add .
git commit -m "Atualiza o README"
git push
```

- Como o `origin` já existe, o `push` já sabe para onde enviar (não precisa do `-u` de novo).

---

## ✅ Checklist final

- [ ] URL copiada pelo botão **Code**.
- [ ] Repositório clonado com `git clone`.
- [ ] `origin` conferido com `git remote -v`.
- [ ] Histórico visto com `git log --oneline`.
- [ ] Alteração enviada com `git push`.

---

## 🆘 Erros comuns

| Mensagem | O que significa | Como resolver |
|---|---|---|
| `fatal: repository not found` | URL errada ou sem acesso | Confira a URL e se o repositório é público |
| `Permission denied` | Falta de autenticação | Refaça o login (veja a aula de push) |
| `destination path already exists` | Já existe uma pasta com esse nome | Entre na pasta existente ou clone em outro lugar |
