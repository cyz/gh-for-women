# Guia prático de Markdown

Markdown é uma linguagem de marcação leve para formatar textos com caracteres simples. No
GitHub, arquivos com a extensão `.md` são renderizados como documentos com títulos, links,
listas, tabelas e blocos de código.

Este guia usa o padrão **GitHub Flavored Markdown (GFM)**, adotado em arquivos README,
Issues e Pull Requests.

## Comece pelo essencial

| Objetivo         | Escreva                        | Resultado                    |
| ---------------- | ------------------------------ | ---------------------------- |
| Título principal | `# Meu projeto`                | Título de nível 1            |
| Seção            | `## Instalação`                | Título de nível 2            |
| Negrito          | `**importante**`               | **importante**               |
| Itálico          | `*ênfase*`                     | _ênfase_                     |
| Código no texto  | `` `git status` ``             | `git status`                 |
| Link             | `[GitHub](https://github.com)` | [GitHub](https://github.com) |
| Item de lista    | `- Primeiro item`              | Lista não ordenada           |
| Tarefa           | `- [ ] Revisar`                | Caixa de seleção             |
| Citação          | `> Observação`                 | Bloco de destaque            |

## Títulos e hierarquia

Use um único `#` para o título do documento e avance um nível por vez nas seções.

```markdown
# Manual da comunidade

## Participação

### Como entrar

### Regras de convivência
```

Uma boa hierarquia ajuda a leitura, a navegação por leitores de tela e a criação automática
de links para cada seção.

> [!IMPORTANT]
> Não escolha o nível do título pelo tamanho visual. Use a ordem da informação: `#`, depois
> `##`, depois `###`.

## Parágrafos e quebras de linha

Separe parágrafos com uma linha em branco:

```markdown
Este é o primeiro parágrafo.

Este é o segundo parágrafo.
```

Evite inserir várias linhas vazias para criar espaço. O resultado depende de onde o arquivo
é exibido. Quando uma quebra manual for indispensável, termine a linha com dois espaços,
mas prefira novos parágrafos.

## Ênfase e texto riscado

```markdown
**Texto em negrito**
_Texto em itálico_
_**Texto em negrito e itálico**_
~~Texto que não é mais válido~~
```

Use ênfase com moderação. Parágrafos inteiros em negrito ficam mais difíceis de ler.

## Listas

### Lista não ordenada

```markdown
- Criar o arquivo
- Revisar o conteúdo
- Publicar a alteração
```

### Lista ordenada

```markdown
1. Crie uma branch.
2. Faça a alteração.
3. Abra um Pull Request.
```

### Lista aninhada

Use quatro espaços para indicar o nível interno:

```markdown
- Documentação
  - README
  - Guia de contribuição
- Código
  - Componentes
  - Testes
```

### Lista de tarefas

```markdown
- [x] Criar a estrutura
- [x] Escrever o conteúdo
- [ ] Revisar os links
```

No GitHub, caixas de seleção são especialmente úteis em Issues e Pull Requests.

## Links

### Link externo

```markdown
[Documentação do GitHub](https://docs.github.com/pt)
```

### Link para outro arquivo

```markdown
[Guia de contribuição](CONTRIBUTING.md)
[Material da aula 10](public/downloads/guia-aula-10-clonar.md)
```

### Link para uma seção

O GitHub transforma títulos em identificadores. Use o título em letras minúsculas, troque
espaços por hífens e remova a maior parte da pontuação:

```markdown
[Ir para Executar o projeto](#executar-o-projeto)
```

Prefira textos que expliquem o destino. `Leia o [guia de instalação](#instalação)` comunica
mais do que `clique [aqui](#instalação)`.

## Imagens

```markdown
![Descrição da imagem](caminho/para/imagem.png)
```

O texto entre colchetes é a descrição alternativa. Explique a informação relevante da
imagem. Para uma imagem puramente decorativa, use uma descrição vazia: `![](imagem.png)`.

## Código

Use crases simples para comandos, arquivos e identificadores no meio de uma frase:

```markdown
Execute `git status` e abra o arquivo `README.md`.
```

Para várias linhas, use três crases e informe a linguagem:

````markdown
```bash
git add README.md
git commit -m "Atualiza documentação"
```

```typescript
const courseName = "Git & GitHub para iniciantes";
```
````

Informar `bash`, `typescript`, `json` ou outra linguagem ativa o realce de sintaxe.

## Citações e alertas

### Citação comum

```markdown
> Documentação também faz parte do produto.
```

### Alertas do GitHub

```markdown
> [!NOTE]
> Informação complementar.

> [!TIP]
> Uma sugestão prática.

> [!WARNING]
> Um risco que precisa de atenção.
```

Use alertas apenas quando a informação realmente precisar se destacar.

## Tabelas

```markdown
| Comando             | Finalidade                       |
| ------------------- | -------------------------------- |
| `git status`        | Conferir o estado do repositório |
| `git log --oneline` | Ver o histórico resumido         |
```

Alinhamento opcional:

```markdown
| Esquerda | Centro | Direita |
| :------- | :----: | ------: |
| A        |   B    |       C |
```

Mantenha tabelas curtas. Em telas pequenas, listas ou subseções costumam ser mais fáceis de
ler quando as células contêm muito texto.

## Linha horizontal e seção recolhível

Crie uma separação temática com três hífens:

```markdown
---
```

Para conteúdo complementar que pode começar fechado, o GitHub aceita HTML:

```html
<details>
  <summary>Ver solução</summary>

  Conteúdo da solução.
</details>
```

Deixe uma linha em branco ao redor do conteúdo Markdown dentro de `<details>`.

## Caracteres especiais

Adicione uma barra invertida antes de um caractere para exibi-lo literalmente:

```markdown
\*Isto não fica em itálico\*
\# Isto não vira um título
```

Para mostrar uma crase dentro de código inline, envolva o trecho com duas crases:

```markdown
``Use `git status` no terminal``
```

## Modelo de README

Use esta estrutura como ponto de partida e remova as seções que não se aplicam ao projeto:

````markdown
# Nome do projeto

Uma frase objetiva que explique o propósito do projeto.

## Sobre

Descreva o problema, o público e o que o projeto oferece.

## Funcionalidades

- Funcionalidade principal
- Outra funcionalidade relevante

## Pré-requisitos

- Ferramenta e versão necessária

## Instalação

```bash
git clone URL-DO-REPOSITORIO
cd NOME-DO-PROJETO
comando-de-instalacao
```

## Como usar

Explique o fluxo principal com um exemplo verificável.

## Organização

Descreva apenas as pastas que ajudam a entender o projeto.

## Como contribuir

Explique como criar uma branch, validar a mudança e abrir um Pull Request.

## Licença

Informe a licença e adicione um link para o arquivo correspondente.
````

## Boas práticas

- Escreva para quem ainda não conhece o projeto.
- Comece cada seção com a informação mais importante.
- Prefira frases e parágrafos curtos.
- Use o mesmo termo para o mesmo conceito em todo o documento.
- Explique comandos antes ou depois do bloco de código.
- Inclua a linguagem nos blocos de código.
- Use caminhos relativos para arquivos do mesmo repositório.
- Evite títulos genéricos, links “aqui” e excesso de elementos decorativos.
- Nunca publique tokens, senhas, chaves ou dados pessoais em exemplos.
- Revise o preview e teste os links antes do commit.

## Revisar no VS Code

1. Abra o arquivo `.md`.
2. Use `Command+Shift+V` no macOS ou `Ctrl+Shift+V` no Windows e Linux.
3. Use `Command+K V` no macOS ou `Ctrl+K V` no Windows e Linux para abrir o preview ao lado.
4. Confira a hierarquia dos títulos, a largura das tabelas e os blocos de código.
5. Clique em todos os links relativos.
6. Revise a diferença antes do commit com `git diff --check` e `git diff`.

## Checklist final

- [ ] Há somente um título de nível 1 (`#`).
- [ ] Os títulos avançam um nível por vez.
- [ ] Listas e blocos de código têm linhas em branco ao redor.
- [ ] Blocos de código informam a linguagem quando possível.
- [ ] Imagens têm descrição alternativa adequada.
- [ ] Links usam textos descritivos e foram testados.
- [ ] Tabelas continuam legíveis em uma janela estreita.
- [ ] O documento não contém dados sensíveis.
- [ ] O preview corresponde ao resultado esperado.

## Referências oficiais

- [Sintaxe básica do Markdown](https://www.markdownguide.org/basic-syntax/)
- [Escrever e formatar no GitHub](https://docs.github.com/pt/get-started/writing-on-github)
- [Especificação GitHub Flavored Markdown](https://github.github.com/gfm/)
