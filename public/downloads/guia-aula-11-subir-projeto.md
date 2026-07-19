# 🔧 Guia prático (Aula 11) — Subir seu primeiro projeto

Este guia é **autoguiado**: siga no seu ritmo, sem precisar de uma aula gravada. Ao final,
você terá publicado no GitHub um projeto de documentação feito só com arquivos Markdown.

> 📦 **Baixe o projeto-base:** a pasta `manual-comunidade/` (README.md, sobre.md, faq.md,
> contato.md, codigo-de-conduta.md). Você também pode criar os arquivos do zero seguindo os
> passos abaixo.

---

## O que você vai praticar

- `git init`, `git status`, `git add`, `git commit`
- Criar um repositório no GitHub
- Conectar local e remoto com `git remote add`
- Publicar com `git push`

**Tempo estimado:** 40–50 min · **Pré-requisitos:** Git instalado e configurado (aulas 2 a 6).

---

## Passo 1 — Preparar a pasta do projeto

1. Crie uma pasta chamada `manual-comunidade` (ou use a que você baixou).
2. Abra a pasta no VS Code: **File → Open Folder**.
3. Confirme que existe pelo menos o arquivo `README.md`.

## Passo 2 — Inicializar o Git

No terminal integrado do VS Code (**Terminal → New Terminal**):

```bash
git init
```

- `git` → a ferramenta · `init` → inicializa o repositório (cria a pasta oculta `.git`).

## Passo 3 — Primeiro commit

```bash
git status                 # veja os arquivos ainda não versionados
git add .                  # prepara TODOS os arquivos
git commit -m "Cria manual da comunidade"
```

- `add .` prepara todos os arquivos de uma vez · `commit -m` registra a versão com uma mensagem.

## Passo 4 — Criar o repositório no GitHub

1. Acesse **github.com** e faça login.
2. Clique em **New repository**.
3. Nome: `manual-comunidade` · Visibilidade: **Public**.
4. **Não** marque *Add a README*, `.gitignore` nem *License* (já temos o README local).
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

---

## ✅ Checklist final

- [ ] `git init` executado
- [ ] Primeiro commit registrado
- [ ] Repositório criado no GitHub
- [ ] `origin` conectado (`git remote -v`)
- [ ] Projeto publicado com `git push`

## 🩹 Deu erro? Sem pânico

| Mensagem | O que significa | Como resolver |
|---|---|---|
| `nothing to commit` | Você esqueceu o `git add` | Rode `git add .` antes do commit |
| `fatal: not a git repository` | Faltou o `git init` | Rode `git init` na pasta do projeto |
| `Updates were rejected` | Você marcou *Add a README* no GitHub | Rode `git pull origin main` antes do `push` |
