# Roteiro de falas — Git & GitHub

Speaker notes por slide para as 21 aulas do curso, alinhados aos slides do projeto
(`src/app/git-github/aula-N/page.tsx`).

## Como usar este documento

- Cada aula lista os slides na **ordem em que aparecem no deck**.
- O cabeçalho de cada slide traz **número · nome do slide `(id)`** — o `id` é o mesmo
  usado no código (`DeckSlide.id`), útil para localizar o slide rapidamente.
- **Fala sugerida** é a narração recomendada; adapte às suas palavras.
- **[clique]** marca um *reveal step* — o ponto exato em que você deve avançar
  (seta → ou clique) para revelar o próximo bloco na tela. Só aparece em slides que
  têm revelação progressiva.
- **Mensagem-chave** é a frase que a turma deve levar do slide.
- 💡 **Você sabia?** aparece nos slides de encerramento, como no material original.
- Os tempos são estimativas para uma aula de ~30 min; ajuste conforme a turma.

---

# Aula 1 — O que é versionamento e por que usar Git

**Objetivo da aula:** entender o que é versionamento, os problemas de trabalhar sem
controle de versão, por que o Git existe e seus principais benefícios.

### Slide 1 · Capa `(capa)` — ~2 min
- **Objetivo:** abrir a aula e apresentar os objetivos de aprendizagem.
- **Fala sugerida:** "Bem-vindas! Antes de qualquer comando, vamos entender a ideia por
  trás do controle de versões — é a base de tudo o que faremos no curso. Ao final desta
  aula você vai entender o que é versionamento, reconhecer os problemas de trabalhar sem
  ele e saber por que o Git foi criado."
- **Mensagem-chave:** a base vem antes dos comandos.

### Slide 2 · O problema `(problema)` — ~2 min
- **Objetivo:** despertar interesse com um problema que todo mundo já viveu.
- **Fala sugerida:** "Se você já criou arquivos com nomes como `ProjetoFinal`,
  `ProjetoFinal2` ou `ProjetoFinalAgoraVai`, saiba que você não está sozinha. Ou talvez
  já tenha apagado uma parte do código e depois desejado voltar atrás, mas percebeu que
  não tinha mais aquela versão. Essas situações acontecem porque estamos trabalhando sem
  uma forma organizada de controlar as mudanças."
- **Mensagem-chave:** versionamento é a forma de **registrar e organizar a evolução** de
  um projeto ao longo do tempo.

### Slide 3 · O que é versionamento `(conceito)` · 1 revelação — ~3 min
- **Objetivo:** apresentar o conceito com o exemplo do dia a dia (antes/depois).
- **Fala sugerida:** "Imagine que você está escrevendo um trabalho importante. No
  primeiro dia salva como `Trabalho.docx`, no dia seguinte `TrabalhoFinal.docx`, depois
  `TrabalhoFinal2.docx`… e aí já não sabe mais qual é a versão correta."
- **[clique]** "Versionamento resolve exatamente isso: em vez de cópias soltas, você tem
  um único arquivo com todo o histórico registrado."
- **Mensagem-chave:** versionar **não** é criar várias cópias — é **registrar a evolução**.

### Slide 4 · Histórico organizado `(historico)` · 3 revelações — ~3 min
- **Objetivo:** visualizar o histórico como uma linha do tempo ordenada.
- **Fala sugerida:** "Em vez de arquivos novos, o sistema guarda cada mudança em um único
  histórico ordenado."
- **[clique] ×3** revele **Versão 2**, depois **Versão 3**, depois **Versão 4**,
  narrando: "Cada alteração vira um ponto na linha do tempo — e dá para voltar a qualquer
  um deles."
- **Mensagem-chave:** cada mudança fica registrada; dá para **voltar no tempo** quando
  precisar.

### Slide 5 · Por que usar Git `(por-que-git)` · 4 revelações — ~4 min
- **Objetivo:** apresentar o Git como a ferramenta que faz esse controle.
- **Fala sugerida:** "Agora que entendemos o conceito, surge a pergunta: quem faz esse
  controle? A resposta é o **Git** — uma ferramenta que registra as alterações de forma
  rápida, segura e organizada."
- **[clique] ×4** revele cada capacidade: **Registrar → Voltar → Comparar → Identificar →
  Colaborar**, comentando uma frase por card.
- **Mensagem-chave:** o Git registra **toda a história do seu projeto**.

### Slide 6 · Onde é usado `(onde)` — ~2 min
- **Objetivo:** mostrar que o Git é padrão da indústria.
- **Fala sugerida:** "Hoje praticamente todas as empresas que desenvolvem software usam
  Git — de projetos pessoais a plataformas usadas por milhões. Mesmo trabalhando sozinha,
  usar Git é considerado boa prática. Mais adiante conheceremos plataformas que guardam
  projetos na nuvem."
- **Mensagem-chave:** aprender Git é uma **habilidade essencial** para quem desenvolve.

### Slide 7 · Boas práticas `(boas-praticas)` — ~2 min
- **Objetivo:** três dicas rápidas para iniciantes.
- **Fala sugerida:** "Não espere trabalhar em equipe para usar Git; comece a versionar
  desde o início do projeto; e não tenha medo de experimentar — uma das maiores vantagens
  é poder voltar atrás."
- **Mensagem-chave:** versione desde o primeiro dia.

### Slide 8 · Prática guiada `(pratica)` · 1 revelação — ~3 min
- **Objetivo:** consolidar os conceitos (ainda sem comandos).
- **Fala sugerida:** "Nesta primeira aula ainda não usamos comandos — o objetivo é fixar
  as ideias. Vamos ao checklist mental."
- **[clique]** revele as perguntas de discussão: "Você já perdeu uma versão importante?
  Já precisou desfazer uma alteração? Já editou um documento junto com outra pessoa?"
- **Como conduzir (exemplo):** peça 2–3 relatos rápidos da turma e anote no quadro o par
  "problema → o que o Git resolveria". Ex.: *"Perdi a versão final do TCC"* → o Git
  guardaria cada versão; *"Reescrevi um trecho e queria o antigo de volta"* → o Git permite
  voltar no tempo; *"Editei um doc junto com uma amiga e sobrescrevemos o trabalho"* → o Git
  organiza contribuições em paralelo. Feche ligando cada relato a uma capacidade vista no
  slide 5 (Registrar, Voltar, Comparar, Identificar, Colaborar).
- **Mensagem-chave:** conecte os exemplos ao dia a dia da turma.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Objetivo:** fechar a aula e criar ponte para a próxima.
- **Fala sugerida:** "Hoje entendemos o que é versionamento e por que o Git é tão
  importante. Na próxima aula vamos instalar o Git e fazer a configuração inicial."
- 💡 **Você sabia?** O Git foi criado para ser extremamente rápido: mesmo projetos com
  milhares de arquivos registram novas versões em poucos segundos.
- **Mensagem-chave:** próximo passo — **instalar o Git**.

---

# Aula 2 — Instalação e configuração inicial do Git

**Objetivo da aula:** instalar o Git, verificar a instalação, configurar nome e e-mail e
entender por que essas informações importam.

### Slide 1 · Capa `(capa)` — ~1 min
- **Objetivo:** retomar a aula anterior e apresentar os objetivos.
- **Fala sugerida:** "Na aula anterior entendemos o que é versionamento. Agora vamos
  preparar o computador para usar o Git na prática — é simples e você só faz isso uma vez."
- **Mensagem-chave:** antes de usar o Git, preparamos o ambiente.

### Slide 2 · Preparar o ambiente `(ambiente)` — ~2 min
- **Objetivo:** contextualizar o que precisa estar instalado.
- **Fala sugerida:** "O Git é um programa que precisa estar instalado no computador.
  Depois de instalado, ele serve para qualquer projeto. Também vamos informar ao Git quem
  somos, para que ele identifique quem fez cada alteração."
- **Mensagem-chave:** ambiente pronto = Git instalado + identidade configurada.

### Slide 3 · Instalando o Git `(instalar)` · 1 revelação — ~5 min
- **Objetivo:** mostrar de onde baixar e como verificar a instalação.
- **Fala sugerida:** "O primeiro passo é instalar. Acesse `https://git-scm.com`, baixe a
  versão do seu sistema operacional e instale. Depois abra o VS Code e um terminal
  integrado (menu Terminal → New Terminal) e execute `git --version`."
- **[clique]** revele o caso de erro: "Se aparecer `git: command not found`, normalmente
  significa que o Git ainda não foi instalado ou a instalação não terminou."
- **Mensagem-chave:** para verificar se o Git está instalado, use `git --version`.

### Slide 4 · Configurando identidade `(identidade)` — ~6 min
- **Objetivo:** configurar nome e e-mail do autor.
- **Fala sugerida:** "Agora vamos dizer ao Git quem somos. Cada alteração registra autor,
  e-mail, data e horário. Execute `git config --global user.name \"Seu Nome\"` e depois
  `git config --global user.email \"seu@email.com\"`."
- **Mensagem-chave:** `user.name` e `user.email` identificam o autor dos commits.

### Slide 5 · Verificando `(verificar)` — ~2 min
- **Objetivo:** conferir a configuração aplicada.
- **Fala sugerida:** "Para conferir, execute `git config --global --list`. Deve aparecer
  `user.name=` e `user.email=` com o que você configurou. Se quiser corrigir, basta rodar
  o comando de novo com o novo valor."
- **Mensagem-chave:** `git config --global --list` mostra suas configurações globais.

### Slide 6 · Configuração global `(global)` — ~3 min
- **Objetivo:** explicar o que `--global` significa.
- **Fala sugerida:** "Repare na palavra `--global`. Ela faz a configuração valer para
  **todos** os projetos do seu computador — você não precisa configurar seu nome toda vez
  que criar um projeto novo."
- **Mensagem-chave:** `--global` = a configuração vale para todos os projetos da máquina.

### Slide 7 · Boas práticas `(boas-praticas)` — ~3 min
- **Objetivo:** dicas de identidade.
- **Fala sugerida:** "Use um nome reconhecível (ex.: `Ana Silva`, não `Notebook Novo`) e
  um e-mail que você realmente usa — de preferência o mesmo que usará no GitHub. Na dúvida,
  confira com `git config --global --list`."
- **Mensagem-chave:** nome reconhecível + e-mail real.

### Slide 8 · Prática guiada `(pratica)` — ~8 min
- **Objetivo:** acompanhar a turma executando o fluxo.
- **Fala sugerida:** "Vamos juntas: instalar Git, abrir o VS Code, abrir o terminal,
  `git --version`, configurar `user.name`, `user.email` e conferir com
  `git config --global --list`. Peça para copiarem os comandos antes de personalizar."
- **Passo a passo da demo (execute e narre cada linha):**
  ```bash
  git --version
  # → git version 2.45.2   (o número varia; o importante é surgir "git version ...")

  git config --global user.name "Ana Silva"
  git config --global user.email "ana.silva@email.com"

  git config --global --list
  # → user.name=Ana Silva
  # → user.email=ana.silva@email.com
  ```
- **Exemplo de personalização:** oriente cada aluna a trocar `"Ana Silva"` pelo próprio nome
  e o e-mail pelo que usará no GitHub. Mostre que rodar o comando de novo com outro valor
  **sobrescreve** o anterior (útil se digitou errado) — não cria duplicata.
- **Checagem coletiva:** peça um "joinha" de quem viu `user.name=` e `user.email=` corretos.
  Só avance quando todas confirmarem.
- **Mensagem-chave:** garanta que todas obtiveram resposta ao `git --version` — é
  pré-requisito das próximas aulas.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você preparou o computador e configurou sua identidade. Na
  próxima aula vamos criar nosso primeiro repositório e transformar uma pasta comum em um
  projeto versionado."
- 💡 **Você sabia?** O Git foi criado em 2005 por Linus Torvalds, o mesmo criador do
  Linux, para facilitar o trabalho colaborativo no kernel do Linux.
- **Mensagem-chave:** próximo passo — **criar o primeiro repositório**.

---

# Aula 3 — Criando seu primeiro repositório Git (`git init`)

**Objetivo da aula:** entender o que é um repositório, criar um com `git init`, reconhecer
a pasta `.git` e diferenciar pasta comum de projeto versionado.

### Slide 1 · Capa `(capa)` — ~1 min
- **Fala sugerida:** "Já instalamos e configuramos o Git. Agora vamos dar o primeiro passo
  para controlar versões: antes do Git, uma pasta é só uma pasta; depois do Git, ela passa
  a registrar todo o histórico."
- **Mensagem-chave:** o Git só acompanha projetos **inicializados** como repositórios.

### Slide 2 · O que é um repositório `(repositorio)` — ~4 min
- **Fala sugerida:** "Você vai ouvir muito a palavra *repositório*. Um repositório é o
  local onde o Git guarda o histórico e acompanha todas as mudanças de um projeto. Numa
  pasta comum de Documentos, quais o Git está controlando? Nenhuma — ele só começa quando
  criamos um repositório."
- **Mensagem-chave:** um repositório é um projeto que está sendo acompanhado pelo Git.

### Slide 3 · Criar a pasta `(criar-pasta)` — ~4 min
- **Fala sugerida:** "Vamos criar um projeto simples que usaremos nas próximas aulas. No
  VS Code, File → Open Folder, crie a pasta `meu-primeiro-projeto` e dentro dela um
  `README.md` com o conteúdo `# Meu Primeiro Projeto`. Neste momento é só uma pasta comum —
  o Git ainda não faz nada."
- **Mensagem-chave:** por enquanto, pasta comum; o Git ainda não entrou em cena.

### Slide 4 · git init `(git-init)` — ~8 min
- **Fala sugerida:** "Agora transformamos essa pasta em um projeto controlado pelo Git.
  No terminal, dentro da pasta, execute `git init`. Deve aparecer
  `Initialized empty Git repository in ...`. Visualmente, o que mudou? Quase nada — a maior
  parte do trabalho do Git acontece nos bastidores."
- **Mensagem-chave:** `git init` transforma a pasta em repositório (executado uma vez por projeto).

### Slide 5 · A pasta .git `(pasta-git)` — ~6 min
- **Fala sugerida:** "Habilitando arquivos ocultos, aparece uma nova pasta `.git`. Ela é
  criada automaticamente e guarda histórico, configurações, branches e versões do código
  (arquivos como `config`, `HEAD`, `objects`, `refs`). Você nunca precisa editar nada aí
  dentro — o Git cuida disso."
- **Mensagem-chave:** o conteúdo do projeto não mudou; o que mudou foi o comportamento da pasta.

### Slide 6 · E se apagar .git? `(apagar-git)` · 3 revelações — ~3 min
- **Fala sugerida:** "Imagine que alguém apagou a pasta `.git`. O `README` continua
  existindo?"
- **[clique]** "Sim. O projeto continua existindo?"
- **[clique]** "Sim. E o histórico?"
- **[clique]** "Não — apagar `.git` remove todo o controle de versões. (Não faça a
  demonstração apagando; apenas explique.)"
- **Mensagem-chave:** a pasta `.git` contém toda a inteligência do Git.

### Slide 7 · Boas práticas `(boas-praticas)` — ~3 min
- **Fala sugerida:** "Inicialize o Git logo no início do projeto; um projeto = um
  repositório; e nunca altere os arquivos internos da pasta `.git`."
- **Mensagem-chave:** um projeto, um repositório — e deixe o `.git` em paz.

### Slide 8 · Prática guiada `(pratica)` — ~8 min
- **Fala sugerida:** "Vamos juntas: criar `meu-primeiro-projeto`, criar `README.md` com
  uma linha, abrir o terminal, `git init`, confirmar a mensagem de sucesso e visualizar a
  pasta `.git`."
- **Passo a passo da demo:**
  ```bash
  # No VS Code: File → Open Folder → crie a pasta meu-primeiro-projeto
  # Crie o README.md com a linha:  # Meu Primeiro Projeto

  pwd
  # → .../meu-primeiro-projeto   (confirme que está na pasta certa antes de continuar)

  git init
  # → Initialized empty Git repository in .../meu-primeiro-projeto/.git/

  ls -a
  # → .  ..  .git  README.md    (a pasta .git é a novidade)
  ```
- **Exemplo visual:** ative "mostrar arquivos ocultos" no explorador do VS Code (ou rode
  `ls -a`) para a turma ver a pasta `.git` aparecer. Reforce: o `README.md` continua igual —
  nenhum conteúdo do projeto mudou, só o comportamento da pasta.
- **Erro comum na prática:** rodar `git init` na pasta errada. Por isso o `pwd` antes: ele
  deve terminar em `/meu-primeiro-projeto`.
- **Mensagem-chave:** `git init` roda uma única vez por projeto; nenhum arquivo é alterado.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você criou seu primeiro repositório. Na próxima aula vamos
  registrar alterações com o ciclo `status`, `add` e `commit`."
- 💡 **Você sabia?** `git init` não cria um projeto — ele transforma uma pasta existente em
  repositório. Dá para versionar tanto um projeto novo quanto um que já existe.
- **Mensagem-chave:** próximo passo — **registrar alterações**.

---

# Aula 4 — Registrando alterações: `git status`, `git add`, `git commit`

**Objetivo da aula:** entender o ciclo básico, verificar o estado com `git status`,
preparar com `git add` e registrar uma versão com `git commit`.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Já temos um repositório, mas o Git ainda não salvou nenhuma versão.
  Hoje vamos aprender a registrar alterações para construir o histórico."
- **Mensagem-chave:** o Git não salva sozinho — **nós** decidimos quando criar uma versão.

### Slide 2 · O ciclo básico `(ciclo)` — ~5 min
- **Fala sugerida:** "Antes dos comandos, o fluxo: você edita no *Working Directory*, com
  `git add` move para a *Staging Area* (área de preparação) e com `git commit` grava no
  histórico. Pense numa fotografia: você organiza tudo (`add`) e depois tira a foto
  (`commit`)."
- **Mensagem-chave:** um commit é uma **fotografia** do projeto naquele momento.

### Slide 3 · git status `(status)` · 1 revelação — ~6 min
- **Fala sugerida:** "Comando que você usará todos os dias: `git status`. No começo mostra
  `No commits yet` / `nothing to commit`."
- **[clique]** "Agora altere o `README` e rode `git status` de novo: aparece
  `Changes not staged for commit` — o Git percebeu a mudança, mas ela ainda não foi
  preparada."
- **Mensagem-chave:** `git status` responde "qual é a situação atual do meu projeto?".

### Slide 4 · git add `(add)` · 1 revelação — ~8 min
- **Fala sugerida:** "Vamos preparar a alteração: `git add README.md`."
- **[clique]** "Rodando `git status` de novo, o arquivo muda de seção para
  `Changes to be committed` — está pronto para virar uma nova versão. `git add .` prepara
  todos os arquivos modificados da pasta."
- **Mensagem-chave:** `git add` prepara alterações para o próximo commit.

### Slide 5 · git commit `(commit)` — ~8 min
- **Fala sugerida:** "Agora criamos a versão: `git commit -m \"Adiciona descrição inicial
  ao projeto\"`. Rodando `git status`, aparece `nothing to commit, working tree clean` —
  tudo foi salvo."
- **Quebrando o comando:** `git` (a ferramenta) · `commit` (registra a versão) · `-m`
  (abreviação de `--message`: a mensagem vem logo em seguida, entre aspas).
- **Mensagem-chave:** cada commit representa um ponto da evolução do projeto.

### Slide 6 · Mensagens de commit `(mensagens)` — ~5 min
- **Fala sugerida:** "Além de salvar, precisamos explicar o que mudou. Mensagens como
  `teste`, `alterações` ou `123` não ajudam ninguém dali a seis meses. Prefira
  `Adiciona descrição inicial ao projeto`, `Cria página inicial`, `Atualiza README`."
- **Mensagem-chave:** uma boa mensagem responde: "o que mudou?".

### Slide 7 · Boas práticas `(boas-praticas)` — ~3 min
- **Fala sugerida:** "Consulte o `git status` com frequência, faça commits pequenos e
  escreva mensagens objetivas (`Adiciona formulário de contato`, não `Atualizações`)."
- **Mensagem-chave:** commits pequenos e mensagens claras.

### Slide 8 · Prática guiada `(pratica)` — ~10 min
- **Fala sugerida:** "Vamos juntas: adicionar uma linha ao `README`, `git status`,
  `git add README.md`, `git status`, `git commit -m \"Atualiza README com descrição do
  projeto\"` e conferir `working tree clean`. Rodem `git status` após cada passo para ver a
  mudança de estado."
- **Passo a passo da demo (mostre o `status` mudando de seção a cada etapa):**
  ```bash
  # 1. Edite o README (ex.: acrescente a linha "Projeto do curso de Git.") e salve

  git status
  # → Changes not staged for commit:
  # →   modified:   README.md      (aparece em vermelho — Git viu, mas não preparou)

  git add README.md
  git status
  # → Changes to be committed:
  # →   modified:   README.md      (agora em verde — preparado na Staging Area)

  git commit -m "Atualiza README com descrição do projeto"
  # → [main abc1234] Atualiza README com descrição do projeto
  # →  1 file changed, 1 insertion(+)

  git status
  # → nothing to commit, working tree clean   (versão salva no histórico)
  ```
- **Exemplo de boa vs. má mensagem:** escreva no quadro `git commit -m "coisas"` ❌ ao lado
  de `git commit -m "Atualiza README com descrição do projeto"` ✔ e pergunte qual ajudaria
  a turma a lembrar da mudança daqui a seis meses.
- **Dica de condução:** rode `git status` em voz alta antes e depois de cada comando; é a
  repetição desse "antes/depois" que fixa a diferença entre Working Directory, Staging Area
  e histórico.
- **Mensagem-chave:** observar a saída do `status` em cada etapa é o que fixa o fluxo.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você registrou sua primeira versão em três etapas: verificar,
  preparar e commitar. Na próxima aula vamos consultar o histórico e ver como boas
  mensagens fazem diferença."
- 💡 **Você sabia?** Projetos como Linux ou VS Code têm milhares de commits — por isso
  mensagens claras são tão valorizadas.
- **Mensagem-chave:** próximo passo — **consultar o histórico**.

---

# Aula 5 — O que não versionar: o .gitignore

**Objetivo da aula:** entender por que alguns arquivos não devem entrar no histórico,
criar um `.gitignore`, conhecer sua sintaxe e o efeito no `git status`.

### Slide 1 · Capa `(capa)` — ~2 min
- **Objetivo:** apresentar o tema e conectar com o ciclo add/commit já visto.
- **Fala sugerida:** "Na aula passada aprendemos a registrar alterações. Agora vamos ao
  contrário: dizer ao Git o que ele deve ignorar por completo."
- **Mensagem-chave:** nem todo arquivo pertence ao histórico.

### Slide 2 · Por que ignorar arquivos `(problema)` — ~3 min
- **Objetivo:** mostrar os três tipos mais comuns de arquivo a ignorar.
- **Fala sugerida:** "Existem arquivos que nunca devem ir para o GitHub: senhas em arquivos
  `.env`, dependências como `node_modules`, e arquivos do sistema como `.DS_Store`."
- **Mensagem-chave:** versionar só o que é parte real do projeto.

### Slide 3 · O que é o .gitignore `(o-que-e)` — ~2 min
- **Objetivo:** definir o arquivo.
- **Fala sugerida:** "O `.gitignore` é um arquivo de texto na raiz do projeto com uma lista
  do que ignorar. O Git lê sozinho, sem comando especial."
- **Mensagem-chave:** um arquivo simples resolve.

### Slide 4 · Sintaxe básica `(sintaxe)` — ~3 min
- **Objetivo:** ensinar as três formas de regra.
- **Fala sugerida:** "Cada linha é uma regra: um nome exato, uma pasta com barra no fim,
  ou um padrão com asterisco. Linhas com `#` são comentários."
- **Mensagem-chave:** nome, pasta (`/`) ou padrão (`*`).

### Slide 5 · O efeito no git status `(status)` · 1 revelação — ~3 min
- **Objetivo:** ver antes/depois no status.
- **Fala sugerida:** "Sem o `.gitignore`, tudo aparece como untracked."
- **[clique]** "Depois de criar o `.gitignore`, os itens ignorados somem do status — sobra
  só o que interessa."
- **Mensagem-chave:** o status fica limpo.

### Slide 6 · Arquivo já versionado `(ja-rastreado)` — ~3 min
- **Objetivo:** alertar sobre o caso do arquivo já commitado.
- **Fala sugerida:** "Se o arquivo já entrou no histórico, o `.gitignore` sozinho não basta.
  Use `git rm --cached` para parar de rastreá-lo, mantendo o arquivo no computador."
- **Mensagem-chave:** melhor criar o `.gitignore` no começo.

### Slide 7 · Você não precisa começar do zero `(templates)` — ~2 min
- **Objetivo:** apresentar modelos prontos.
- **Fala sugerida:** "Use o gitignore.io ou o repositório github/gitignore. O próprio GitHub
  oferece um modelo ao criar o repositório."
- **Mensagem-chave:** reutilize modelos por tecnologia.

### Slide 8 · Prática guiada `(pratica)` — ~3 min
- **Objetivo:** criar um `.gitignore` na prática.
- **Fala sugerida:** "Crie um `.gitignore`, adicione `node_modules/` e `.DS_Store`, rode
  `git status` e confirme que sumiram. Depois faça o commit incluindo o próprio arquivo."
- **Mensagem-chave:** commit incluindo o `.gitignore`.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Objetivo:** fechar e criar ponte com a próxima aula.
- **Fala sugerida:** "Com o `.gitignore`, o histórico guarda só o que importa. Na próxima
  aula, vamos consultar esse histórico com o `git log`."
- 💡 **Você sabia?** Vazar um `.env` com senhas é um dos erros mais comuns de quem começa
  — um `.gitignore` bem feito é a primeira defesa.
- **Mensagem-chave:** próximo passo — o histórico com `git log`.

---

# Aula 6 — Histórico e navegação entre commits

**Objetivo da aula:** consultar o histórico com `git log`, inspecionar e comparar commits
(`git show`, `git diff`), entender o que é o `HEAD`, visitar um commit antigo com segurança e
aplicar boas práticas de mensagem.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Já criamos commits; agora imagine descobrir, meses depois, quando uma
  funcionalidade foi adicionada ou quem fez uma alteração. É para isso que existe o
  histórico. E hoje vamos além de olhar a lista: vamos abrir um commit por dentro, comparar
  versões e até visitar um ponto do passado do projeto."
- **Mensagem-chave:** o histórico é a **linha do tempo** da evolução do projeto — e dá para
  navegar por ele.

### Slide 2 · O histórico `(historico)` — ~3 min
- **Fala sugerida:** "Cada commit guarda muito mais do que os arquivos: autor, data,
  horário, mensagem e um identificador único (hash). Cada commit é um momento específico
  da evolução."
- **Mensagem-chave:** todo commit é um instante registrado do projeto.

### Slide 3 · git log `(git-log)` — ~8 min
- **Fala sugerida:** "Para ver o histórico, `git log`. Ele mostra, por commit: o **hash**
  (a impressão digital daquele commit), o **Author** (o nome que configuramos na Aula 2),
  a **data** e a **mensagem**."
- **Quebrando o comando:** `git` (a ferramenta) · `log` (pede o registro de todos os
  commits, do mais recente para o mais antigo).
- **Mensagem-chave:** `git log` mostra toda a história do projeto.

### Slide 4 · git log --oneline `(oneline)` — ~4 min
- **Fala sugerida:** "Em projetos grandes o histórico é enorme. `git log --oneline` mostra
  só o hash reduzido e a mensagem — muito mais rápido para consultas do dia a dia."
- **Quebrando o comando:** `git` (a ferramenta) · `log` (o histórico) · `--oneline`
  (uma *flag* que compacta cada commit em uma única linha: hash curto + mensagem).
- **Mensagem-chave:** `git log --oneline` é a forma rápida de visualizar o histórico.

### Slide 5 · git show `(git-show)` — ~6 min
- **Fala sugerida:** "O `git log` mostra a lista de commits; mas e se eu quiser abrir **um**
  deles e ver o que mudou ali dentro? Uso `git show` seguido do hash. Ele mostra o autor, a
  mensagem e, principalmente, as linhas que foram adicionadas (em verde, com `+`) e removidas
  (em vermelho, com `-`)."
- **Quebrando o comando:** `git` (a ferramenta) · `show` (abrir/exibir) · `<hash>` (qual
  commit você quer ver; pode ser o hash curto, ex.: `a3f7d8e`).
- **Mensagem-chave:** `git show <hash>` abre um commit e mostra **exatamente o que mudou** nele.

### Slide 6 · git diff `(git-diff)` · 1 revelação — ~7 min
- **Fala sugerida:** "E se eu quiser comparar versões? `git diff`, sozinho, mostra o que já
  mudei mas **ainda não commitei** — ou seja, o que está diferente desde o último commit."
- **[clique]** revele a segunda forma: "Também dá para comparar **dois commits** diretamente:
  `git diff <hash-antigo> <hash-novo>`. O Git mostra tudo o que mudou entre esses dois pontos
  da linha do tempo."
- **Quebrando o comando:** `git` (a ferramenta) · `diff` (mostrar as diferenças) · quando você
  passa dois hashes, diz **de qual** para **qual** commit comparar.
- **Mensagem-chave:** `git diff` responde "o que mudou de uma versão para outra?".

### Slide 7 · HEAD `(head)` — ~6 min
- **Fala sugerida:** "Antes de andar pelo histórico, um conceito importante: o **HEAD**.
  Pense nele como o 'você está aqui' de um mapa. O HEAD é um marcador que aponta para o
  commit em que você está neste momento — normalmente o mais recente. Quando você faz um novo
  commit, o HEAD avança junto para ele."
- **Mensagem-chave:** `HEAD` = o commit onde você está **agora**.

### Slide 8 · Visitar o passado `(voltar-commit)` · 1 revelação — ~8 min
- **Fala sugerida:** "Como o Git guarda todos os commits, dá para **visitar** um ponto antigo
  do projeto. Uso `git checkout` seguido do hash do commit antigo, e os arquivos voltam a ser
  exatamente como estavam naquele momento. O Git avisa: *'You are in detached HEAD state'*.
  Calma — **não é erro**: é só o Git dizendo que o HEAD saiu da branch e está 'solto',
  apontando direto para um commit antigo, como quem folheia uma página anterior do caderno."
- **[clique]** revele a volta: "Para voltar ao presente, `git switch main` — o HEAD volta
  para o commit mais recente da branch e nada se perde no caminho."
- **Quebrando o comando:** `git` (a ferramenta) · `checkout` (levar você até) · `<hash>` (o
  commit que quer visitar). Para retornar: `git switch main` leva o HEAD de volta à branch
  `main`. (Em tutoriais atuais você também verá `git switch --detach <hash>` para visitar,
  mas `git checkout <hash>` continua o mais comum.)
- **Mensagem-chave:** dá para viajar no tempo do projeto **sem risco** — e voltar quando quiser.

### Slide 9 · Histórico útil `(mensagens)` — ~8 min
- **Fala sugerida:** "O histórico só é útil se dá para entender rapidamente o que
  aconteceu. Mensagens como `teste`, `atualização`, `123` não dizem nada. Prefira
  `Cria arquivo README`, `Adiciona descrição inicial`, `Corrige erro de digitação no
  README`. Pergunta-guia: daqui a seis meses, essa mensagem me faria lembrar a mudança?"
- **Mensagem-chave:** uma boa mensagem responde "o que mudou?".

### Slide 10 · Boas práticas `(verbos)` — ~5 min
- **Fala sugerida:** "Faça commits pequenos e frequentes e comece a mensagem com um verbo:
  Adiciona, Atualiza, Remove, Corrige, Cria. Isso deixa o histórico consistente."
- **Mensagem-chave:** commits pequenos + mensagens que começam com verbo.

### Slide 11 · Prática guiada `(pratica)` — ~8 min
- **Fala sugerida:** "Vamos juntas: adicionar uma seção ao `README` (ex.: `## Autor`),
  `git status`, `git add`, `git commit -m \"Adiciona seção de autor ao README\"` e
  `git log --oneline` para ver o novo commit no topo. Depois, `git show` no hash desse commit
  e um `git checkout` em um commit anterior — só para sentir a navegação — voltando com
  `git switch main`."
- **Passo a passo da demo:**
  ```bash
  # 1. Adicione ao README uma seção:  ## Autor\nSeu Nome  e salve

  git add README.md
  git commit -m "Adiciona seção de autor ao README"

  git log --oneline
  # → a3f7d8e Adiciona seção de autor ao README     (novo commit no topo)
  # → 9c1b2a4 Atualiza README com descrição do projeto
  # → 4e5d6f7 Cria README inicial

  git show a3f7d8e
  # → Author / Date / mensagem e o diff:
  # → + ## Autor
  # → + Seu Nome        (linhas adicionadas em verde, com +)

  git checkout 9c1b2a4      # visitar um commit anterior
  # → You are in 'detached HEAD' state...   (NORMAL, não é erro)
  # → abra o README: a seção ## Autor sumiu (voltamos no tempo)

  git switch main           # voltar ao presente
  # → Switched to branch 'main'  → a seção ## Autor reaparece
  ```
- **Exemplo para fixar o `diff`:** antes de commitar, edite mais uma linha e rode `git diff`
  para a turma ver o `+`/`-` do que ainda **não** foi commitado — e conecte: é o mesmo `+`/`-`
  que aparecerá nos Pull Requests (Aula 16).
- **Tranquilize a turma:** o aviso `detached HEAD` assusta, mas nada se perde; `git switch
  main` sempre traz de volta. Faça a ida e a volta duas vezes para dissolver o medo.
- **Mensagem-chave:** o histórico é ferramenta de **comunicação** entre pessoas, não só um
  registro técnico.

### Slide 12 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você aprendeu que cada commit faz parte da história, que dá para
  inspecionar e navegar por eles com segurança, e que um bom histórico depende de mensagens
  claras. Na próxima aula conheceremos o GitHub e criaremos nosso primeiro repositório remoto."
- 💡 **Você sabia?** Muitas empresas usam o histórico de commits para investigar quando um
  problema surgiu e até gerar notas de versão (release notes) automaticamente.
- **Mensagem-chave:** próximo passo — **conhecer o GitHub**.

---

# Aula 7 — Desfazer e corrigir erros

**Objetivo da aula:** desfazer alterações não salvas, tirar arquivos do staging, corrigir
o último commit e reverter um commit publicado, com segurança.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Errar faz parte. A boa notícia é que o Git foi feito para voltar
  atrás com segurança."
- **Mensagem-chave:** dá para desfazer quase tudo.

### Slide 2 · Quatro situações comuns `(mapa)` — ~3 min
- **Fala sugerida:** "Cada erro tem sua solução: editei e me arrependi, preparei o arquivo
  errado, mensagem errada, ou commit já enviado."
- **Mensagem-chave:** identifique a situação antes de agir.

### Slide 3 · git restore `(restore)` — ~3 min
- **Fala sugerida:** "`git restore arquivo` devolve o arquivo ao último commit. Cuidado:
  descarta a alteração de vez."
- **Mensagem-chave:** use com certeza.

### Slide 4 · git restore --staged `(restore-staged)` — ~3 min
- **Fala sugerida:** "Adicionou por engano? `git restore --staged` tira da preparação sem
  apagar o que você escreveu."
- **Mensagem-chave:** desfaz o `add`, mantém o trabalho.

### Slide 5 · git commit --amend `(amend)` — ~3 min
- **Fala sugerida:** "Errou a mensagem do último commit? `git commit --amend` reescreve.
  Só faça isso antes de enviar ao GitHub."
- **Mensagem-chave:** amend só antes do push.

### Slide 6 · git revert `(revert)` — ~3 min
- **Fala sugerida:** "Para desfazer um commit já publicado, `git revert` cria um novo commit
  que desfaz o anterior, sem apagar o histórico. Ideal em equipe."
- **Mensagem-chave:** revert preserva a história.

### Slide 7 · E o git reset? `(restore-vs-reset)` — ~2 min
- **Fala sugerida:** "Você vai ouvir falar de `git reset`. Ele reescreve o histórico e, com
  `--hard`, apaga de verdade. No começo, prefira `restore` e `revert`."
- **Mensagem-chave:** deixe o `reset --hard` para depois.

### Slide 8 · Prática guiada `(pratica)` — ~3 min
- **Fala sugerida:** "Treine as quatro situações no seu repositório: restaurar, tirar do
  staging, corrigir a mensagem e reverter um commit."
- **Mensagem-chave:** pratique cada comando.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Saber desfazer dá confiança para experimentar. Na próxima aula, damos
  o salto para a nuvem: o GitHub."
- 💡 **Você sabia?** O Git raramente perde informação — a maioria dos erros pode ser
  desfeita.
- **Mensagem-chave:** próximo passo — conhecer o GitHub.

---

# Aula 8 — Criando seu primeiro repositório no GitHub

**Objetivo da aula:** diferenciar repositório local de remoto, criar conta e repositório no
GitHub e reconhecer a página de um repositório.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Até agora tudo ficou só no computador. Isso funciona sozinha, mas e
  se a máquina falhar, ou se você precisar compartilhar? É aqui que entra o GitHub."
- **Mensagem-chave:** Git controla versões; GitHub hospeda e compartilha repositórios.

### Slide 2 · Git × GitHub `(git-x-github)` — ~5 min
- **Fala sugerida:** "Dúvida clássica: Git e GitHub não são a mesma coisa. Git é instalado
  no computador, controla versões e funciona offline (2005). GitHub é uma plataforma na
  nuvem que hospeda repositórios e facilita colaboração (2008). Analogia: o Git é como
  escrever no Word; o GitHub é como salvar no OneDrive/Google Drive."
- **Mensagem-chave:** você pode usar Git sem GitHub, mas não usa o GitHub para versionar
  sem Git.

### Slide 3 · Criar conta `(conta)` — ~5 min
- **Fala sugerida:** "Se ainda não tem conta, acesse `https://github.com` e clique em
  *Sign up* — Username, Email, Password. Se já tem conta, é só fazer login. (Não preencha
  dados pessoais reais na demonstração.)"
- **Mensagem-chave:** conta criada = porta de entrada para os repositórios remotos.

### Slide 4 · Criar repositório `(novo-repo)` — ~8 min
- **Fala sugerida:** "Clique em *New Repository*. Nome: `meu-primeiro-projeto` (de
  preferência igual à pasta local). Visibilidade: escolha **Public**. **Importante:** como
  já temos um `README` local, **não marque** *Add a README file*, nem `.gitignore` nem
  *License* — veremos esses recursos depois. Clique em *Create repository*."
- **Mensagem-chave:** não marque *Add README* — evita criar um histórico separado do local.

### Slide 5 · Local × remoto `(local-remoto)` — ~6 min
- **Fala sugerida:** "A página aparece vazia porque ainda não enviamos nada. Existem dois
  lados: o repositório **local** (no computador) e o **remoto** (no GitHub). Hoje só
  criamos o espaço remoto — ainda não há conexão entre eles. Isso será feito na próxima
  aula."
- **Mensagem-chave:** criar o repositório no GitHub **não** envia automaticamente os
  arquivos.

### Slide 6 · A página do repositório `(tour-repo)` — ~4 min
- **Fala sugerida:** "Assim que criamos o repositório, o GitHub mostra uma tela de *Quick
  setup*. O mais importante ali é a **URL** do repositório (algo como
  `https://github.com/voce/meu-primeiro-projeto.git`). Guarde essa URL: é o endereço que
  vamos usar na próxima aula para conectar o projeto do computador ao GitHub."
- **Mensagem-chave:** o repositório vazio já traz a **URL** e as instruções para enviar o
  código.

### Slide 7 · Prática guiada `(pratica)` — ~10 min
- **Fala sugerida:** "Vamos juntas: criar conta (se preciso), login, *New Repository*, nome
  `meu-primeiro-projeto`, **Public**, sem README/`.gitignore`/License, *Create repository*
  e confirmar a página do repositório vazio."
- **Checklist da tela (projeção passo a passo):**
  1. Botão **+** no topo direito → *New repository*.
  2. **Repository name:** `meu-primeiro-projeto` (igual à pasta local).
  3. **Visibility:** marque **Public**.
  4. **Initialize this repository with:** deixe TUDO desmarcado (sem *Add a README*, sem
     *.gitignore*, sem *License*) — este é o ponto que mais gera erro depois.
  5. **Create repository**.
- **Exemplo do que observar:** após criar, mostre a tela de *Quick setup* e aponte a **URL**
  (`https://github.com/seu-usuario/meu-primeiro-projeto.git`). Diga: "guardem esse endereço,
  vamos usá-lo na próxima aula".
- **Por que sem README:** explique com um exemplo — se marcar *Add a README*, o GitHub cria
  um commit inicial lá; como já temos um commit local, os dois históricos começam separados e
  o `push` reclama. Prevenir agora evita a dor de cabeça da Aula 11.
- **Mensagem-chave:** é normal o repositório aparecer vazio agora.

### Slide 8 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você criou o repositório remoto e entendeu a diferença entre
  local e remoto. Na próxima aula vamos conectar os dois e publicar o código com
  `git remote add` e `git push`."
- 💡 **Você sabia?** O GitHub hospeda centenas de milhões de repositórios, incluindo VS
  Code, React, Node.js e Python.
- **Mensagem-chave:** próximo passo — **conectar local e remoto**.

---

# Aula 9 — Conectando seu projeto ao GitHub (`git remote` e `git push`)

**Objetivo da aula:** entender repositório remoto, conectar o local com `git remote add`,
publicar com `git push` e confirmar o envio.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Criamos o repositório no GitHub, mas ele continua vazio: nosso projeto
  ainda está só no computador. Hoje vamos conectar os dois e publicar pela primeira vez."
- **Mensagem-chave:** criar o repositório remoto não envia os arquivos — falta conectar.

### Slide 2 · Repositório remoto `(remoto)` — ~4 min
- **Fala sugerida:** "O remoto é apenas outra cópia do projeto, armazenada no GitHub. Falta
  dizer ao Git **onde** esse repositório remoto está."
- **Mensagem-chave:** o remoto é uma cópia do projeto que vive no GitHub.

### Slide 3 · git remote add `(remote-add)` — ~8 min
- **Fala sugerida:** "No GitHub, clique em *Code* e copie a URL HTTPS
  (`https://github.com/seu-usuario/meu-primeiro-projeto.git`). No VS Code, execute
  `git remote add origin <URL>`."
- **Quebrando o comando:** `git` (a ferramenta) · `remote` (gerencia repositórios remotos) ·
  `add` (adiciona um novo remoto) · `origin` (o apelido do remoto — só uma convenção, mas
  praticamente todo mundo usa) · `<URL>` (o endereço que copiamos do GitHub).
- **Mensagem-chave:** `git remote add` registra o endereço do repositório remoto.

### Slide 4 · git remote -v `(remote-v)` — ~3 min
- **Fala sugerida:** "Confirme com `git remote -v`: aparece `origin` com a URL (para fetch
  e para push). A conexão está registrada, mas ainda não enviamos nada. Dica: rode
  `git remote -v` **antes** do `remote add` (nada) e **depois** (aparece o `origin`) — o
  antes/depois deixa claro que `remote add` só registra o endereço."
- **Mensagem-chave:** `git remote add` **registra** o endereço; não envia arquivos.

### Slide 5 · git push `(push)` — ~10 min
- **Fala sugerida:** "Agora sim: `git push -u origin main`. Atualize o navegador — o `README`
  e todo o projeto aparecem. Esse é um bom momento para comemorar! (Se a branch principal for
  `master`, explique que varia conforme a configuração; `git branch` mostra o nome atual.)"
- **Quebrando o comando:** `git` (a ferramenta) · `push` (enviar os commits) · `-u`
  (abreviação de `--set-upstream`: memoriza o destino, para das próximas vezes bastar
  `git push`) · `origin` (apelido do repositório remoto) · `main` (a branch que está sendo
  enviada).
- **Mensagem-chave:** agora seu projeto também está salvo no GitHub.

### Slide 6 · Dois lugares `(dois-lugares)` — ~4 min
- **Fala sugerida:** "O projeto agora existe em dois lugares: local e remoto. Se o
  computador quebrar hoje, o projeto continua existindo? Sim — porque há uma cópia no
  GitHub."
- **Mensagem-chave:** local e remoto trabalham juntos; um é o backup do outro.

### Slide 7 · Prática guiada `(pratica)` — ~10 min
- **Fala sugerida:** "Vamos juntas: copiar a URL, `git remote add origin <URL>`,
  `git remote -v`, `git push -u origin main`, atualizar o navegador e confirmar README,
  arquivos e projeto publicado. O GitHub pode pedir autenticação/token — faz parte da
  segurança."
- **Passo a passo da demo (mostre o antes/depois do `remote -v`):**
  ```bash
  git remote -v
  # → (nada)   — ainda não há remoto registrado

  git remote add origin https://github.com/seu-usuario/meu-primeiro-projeto.git

  git remote -v
  # → origin  https://github.com/seu-usuario/meu-primeiro-projeto.git (fetch)
  # → origin  https://github.com/seu-usuario/meu-primeiro-projeto.git (push)

  git push -u origin main
  # → Enumerating objects... Writing objects... 100%
  # → branch 'main' set up to track 'origin/main'.
  ```
- **Exemplo de validação:** atualize o navegador na página do repositório — o `README` e os
  arquivos aparecem. Este é o "momento de comemorar"; deixe a turma ver o próprio projeto no
  ar.
- **Se pedir login/token:** normalize — o GitHub pede autenticação na primeira vez. Explique
  que é segurança e que existe login pelo navegador ou por *Personal Access Token*.
- **Erro comum:** `error: remote origin already exists` (rodou `remote add` duas vezes). A
  saída é `git remote set-url origin <URL>` para corrigir o endereço.
- **Mensagem-chave:** confirme sempre que os arquivos apareceram no GitHub.

### Slide 8 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você publicou seu projeto pela primeira vez. Na próxima aula
  vamos repetir todo o fluxo do zero, sem consultar anotações."
- 💡 **Você sabia?** O primeiro `git push` costuma ser um marco: a partir dele você já
  compartilha projetos, monta portfólio e contribui com projetos colaborativos.
- **Mensagem-chave:** próximo passo — **fixar o fluxo completo**.

---

# Aula 10 — Clonando um repositório existente

**Objetivo da aula:** baixar um repositório existente do GitHub com `git clone`, entender
a diferença para `git init` e confirmar que o `origin` já vem configurado.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Até agora criamos projetos do zero. Agora vamos baixar um projeto que
  já existe no GitHub."
- **Mensagem-chave:** clonar é copiar um repositório existente.

### Slide 2 · init ou clone? `(init-vs-clone)` — ~2 min
- **Fala sugerida:** "`git init` começa um projeto novo; `git clone` copia um que já existe,
  com todo o histórico."
- **Mensagem-chave:** dois pontos de partida.

### Slide 3 · git clone `(clone)` — ~3 min
- **Fala sugerida:** "`git clone URL` cria a pasta, baixa os arquivos e traz o histórico
  inteiro."
- **Mensagem-chave:** um comando, uma cópia completa.

### Slide 4 · O origin já vem pronto `(origin-auto)` — ~3 min
- **Fala sugerida:** "Diferente da aula de push, aqui não precisamos do `git remote add`.
  O `clone` já configura o `origin`."
- **Mensagem-chave:** origin automático.

### Slide 5 · HTTPS ou SSH `(https-ssh)` — ~2 min
- **Fala sugerida:** "O mesmo repositório tem duas URLs: HTTPS (mais simples) e SSH (com
  chaves). A autenticação é a mesma da aula de push."
- **Mensagem-chave:** escolha no botão Code.

### Slide 6 · Depois de clonar `(fluxo)` — ~2 min
- **Fala sugerida:** "Depois do clone, é o ciclo de sempre: editar, add, commit e push.
  Como o origin existe, o push já sabe para onde ir."
- **Mensagem-chave:** o fluxo continua igual.

### Slide 7 · Materiais para praticar `(materiais)` — ~1 min
- **Objetivo:** apresentar o guia para download.
- **Fala sugerida:** "Baixe o guia da Aula 10 para clonar, alterar e enviar de volta no seu
  ritmo."
- **Downloads:** `/downloads/guia-aula-10-clonar.md`.
- **Mensagem-chave:** guia autoguiado disponível.

### Slide 8 · Prática guiada `(pratica)` — ~3 min
- **Fala sugerida:** "Copie a URL pelo botão Code, clone, confira o histórico e o remoto,
  e envie uma alteração."
- **Mensagem-chave:** clone e explore.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Clonar é o primeiro passo para colaborar. Na próxima aula, uma prática
  guiada publicando um projeto do zero."
- 💡 **Você sabia?** Todo projeto open source do GitHub pode ser clonado — é assim que se
  estuda o código de ferramentas como o VS Code.
- **Mensagem-chave:** próximo passo — prática guiada de publicação.

---

# Aula 11 — Prática guiada: publicando um projeto do zero

**Objetivo da aula:** consolidar todo o fluxo (criar projeto → `init` → commits → repo no
GitHub → conectar → publicar) publicando um **projeto de documentação** (só markdown), o
Manual da Comunidade. Sem comandos novos. Aula sem gravação: apoie-se no guia para download.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Nas últimas aulas aprendemos cada peça separadamente. Hoje juntamos
  tudo em um único fluxo e publicamos um projeto completo usando só o que já sabemos."
- **Mensagem-chave:** aprender Git é entender um **fluxo de trabalho**, não decorar comandos.

### Slide 2 · Fluxo completo `(fluxo)` — ~3 min
- **Fala sugerida:** "Relembrando a sequência: criar projeto → `git init` → `git status` →
  `git add` → `git commit` → criar repositório no GitHub → `git remote add origin` →
  `git push`. É exatamente esse o caminho que vamos percorrer."
- **Mensagem-chave:** este é o fluxo que um dev usa ao iniciar um projeto novo.

### Slide 3 · Demonstração `(demo)` — ~20 min
- **Fala sugerida:** "Faço o processo inteiro sem interrupções longas — vocês acompanham.
  Criar a pasta `manual-comunidade` com os arquivos `.md` (README, sobre, faq, contato,
  codigo-de-conduta), `git init`, `git status`, `git add .`,
  `git commit -m \"Cria manual da comunidade\"`, criar o repositório no GitHub (sem
  README/License/`.gitignore`), copiar a URL HTTPS, `git remote add origin <URL>`,
  `git push -u origin main` e atualizar o navegador."
- **Roteiro completo da demo (rode do início ao fim, narrando cada etapa):**
  ```bash
  # 1. Criar o projeto (pasta + arquivos markdown do manual)
  mkdir manual-comunidade && cd manual-comunidade
  # crie no VS Code: README.md, sobre.md, faq.md, contato.md, codigo-de-conduta.md

  # 2. Inicializar o repositório
  git init
  # → Initialized empty Git repository in .../manual-comunidade/.git/

  # 3. Conferir o estado (tudo "untracked")
  git status
  # → Untracked files: README.md sobre.md faq.md contato.md codigo-de-conduta.md

  # 4. Preparar e commitar TUDO de uma vez
  git add .
  git commit -m "Cria manual da comunidade"
  # → [main root-commit abc1234] Cria manual da comunidade
  # →  5 files changed, N insertions(+)

  # 5. No GitHub: New repository → manual-comunidade → Public → SEM README/License/.gitignore
  #    Copiar a URL HTTPS mostrada na tela de Quick setup

  # 6. Conectar e publicar
  git remote add origin https://github.com/seu-usuario/manual-comunidade.git
  git push -u origin main
  # → branch 'main' set up to track 'origin/main'.

  # 7. Atualizar o navegador → os 5 arquivos aparecem no GitHub
  ```
- **Dica de ritmo:** anuncie cada bloco ("criar → inicializar → commitar → conectar →
  publicar") antes de digitá-lo, para a turma reconhecer que é o mesmo fluxo das Aulas 3 a 9,
  agora emendado sem pausas.
- **Mensagem-chave:** o fluxo do início ao fim, na ordem real de uso.

### Slide 4 · Erros comuns `(erros)` — ~8 min
- **Fala sugerida:** "Três armadilhas: esquecer o `git add` (o commit reclama que não há
  nada para commitar); esquecer o `git init` (`fatal: not a git repository`); e criar um
  README no GitHub ao abrir o repo (gera dois começos separados). Para o último caso, a
  saída simples é rodar `git pull origin main` **antes** do `push`: ele traz o que está no
  GitHub, junta com o que você tem local e aí o `push` funciona. Melhor ainda: não marcar
  *Add a README* ao criar o repositório."
- **Exemplos das mensagens de erro (mostre de propósito, se der tempo):**
  ```bash
  git commit -m "..."
  # → nothing to commit (esqueceu o git add)  → rode: git add .

  git status
  # → fatal: not a git repository (esqueceu o git init)  → rode: git init

  git push -u origin main
  # → ! [rejected]  ... (fetch first)   (README criado no GitHub)
  # → solução: git pull origin main --allow-unrelated-histories  e depois git push
  ```
- **Mensagem-chave:** a maioria dos erros de iniciante é pular uma etapa do fluxo.

### Slide 5 · Materiais para praticar `(materiais)` — ~4 min
- **Fala sugerida:** "Como esta aula é autoguiada, deixamos dois materiais para download: o
  **projeto-base** (Manual da Comunidade, com os arquivos markdown prontos) e um **guia passo
  a passo** com cada comando explicado e uma tabela de erros comuns. Baixe, abra no VS Code e
  siga no seu ritmo."
- **Downloads:** `/downloads/manual-comunidade/` e `/downloads/guia-aula-11-subir-projeto.md`.
- **Mensagem-chave:** você consegue publicar sozinha seguindo o guia.

### Slide 6 · Checklist final `(checklist)` — ~3 min
- **Fala sugerida:** "Fechando: projeto criado ✔, Git inicializado ✔, primeiro commit ✔,
  repositório no GitHub ✔, projeto publicado ✔. Esse é exatamente o fluxo de um projeto
  novo."
- **Mensagem-chave:** dominar esse checklist é dominar a base do trabalho com Git.

### Slide 7 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Parabéns — você já domina o fluxo básico de criar e publicar um
  projeto. Até aqui trabalhamos como quem cria projetos sozinha; a partir da próxima aula
  vamos ver como equipes colaboram usando **branches**."
- 💡 **Você sabia?** Mesmo equipes com centenas de devs iniciam um projeto exatamente
  assim; o que muda é como várias pessoas colaboram ao mesmo tempo.
- **Mensagem-chave:** próximo passo — **branches**.

---

# Aula 12 — Issues: organizando o trabalho

**Objetivo da aula:** usar Issues para registrar tarefas, bugs e ideias, organizá-las com
labels e responsáveis, e ligá-las ao código com `Closes #N`.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Antes de programar, é bom saber o que precisa ser feito. As Issues são
  o lugar para registrar isso."
- **Mensagem-chave:** planejar antes de codar.

### Slide 2 · O que é uma Issue `(o-que-e)` — ~3 min
- **Fala sugerida:** "Uma Issue registra um bug, uma melhoria ou uma dúvida/tarefa. É uma
  conversa registrada sobre algo a fazer."
- **Mensagem-chave:** um registro por assunto.

### Slide 3 · Criando uma Issue `(criar)` — ~3 min
- **Fala sugerida:** "Na aba Issues → New issue, escreva um título claro, descreva o contexto
  e submeta. A Issue ganha um número, como #12."
- **Mensagem-chave:** título claro + descrição.

### Slide 4 · Organizando as Issues `(organizar)` — ~2 min
- **Fala sugerida:** "Labels classificam (bug, enhancement); assignees definem quem cuida;
  milestones agrupam por entrega."
- **Mensagem-chave:** o que é a tarefa e quem cuida.

### Slide 5 · Ligando Issues ao código `(vincular)` — ~3 min
- **Fala sugerida:** "Escrever `#12` cria um link; `Closes #12` na mensagem fecha a Issue
  automaticamente quando o Pull Request é integrado."
- **Mensagem-chave:** `Closes #N` fecha no merge.

### Slide 6 · Issues antes das branches `(planejamento)` — ~2 min
- **Fala sugerida:** "O fluxo organizado: abrir a Issue, criar a branch, abrir o PR com
  `Closes #N`, e o merge fecha a Issue."
- **Mensagem-chave:** planejar em passos.

### Slide 7 · Prática guiada `(pratica)` — ~3 min
- **Fala sugerida:** "Abra uma Issue no seu repositório, aplique uma label e atribua a você
  mesma."
- **Mensagem-chave:** sua primeira Issue.

### Slide 8 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Com Issues, todo mundo sabe o que fazer e o que está em andamento. Na
  próxima aula, começamos a colaborar de verdade com branches."
- 💡 **Você sabia?** Muita gente começa a contribuir com open source resolvendo uma Issue
  marcada como `good first issue`.
- **Mensagem-chave:** próximo passo — branches.

---

# Aula 13 — O que é uma branch e por que ela existe

**Objetivo da aula:** entender o conceito de branch, por que equipes as usam, identificar a
branch principal e visualizar desenvolvimento em paralelo. (Sem criar branches.)

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Até agora fizemos tudo direto no projeto — ótimo quando se trabalha
  sozinha. Mas imagine dez pessoas alterando os mesmos arquivos ao mesmo tempo. É para
  resolver isso que existem as **branches**."
- **Mensagem-chave:** branches permitem desenvolver sem afetar a versão principal.

### Slide 2 · O problema `(problema)` — ~5 min
- **Fala sugerida:** "Imagine a `main` com o site funcionando. A Maria começa uma
  funcionalidade, o João outra, o Pedro corrige um bug — todos na mesma branch. O que
  acontece? Alterações incompletas, bugs, dificuldade para revisar, mais risco."
- **Mensagem-chave:** trabalhar direto na `main`, em equipe, gera caos.

### Slide 3 · O que é uma branch `(o-que-e)` — ~8 min
- **Fala sugerida:** "Uma branch é uma linha independente de desenvolvimento: dá para
  testar ideias, adicionar funcionalidades e corrigir bugs sem alterar a versão principal.
  Analogia: em vez de mexer no documento original, você cria uma cópia, faz as mudanças e,
  quando estiver pronta, substitui o original."
- **Ponte com a Aula 6:** cada branch é uma linha do tempo própria, com seu próprio `HEAD`.
  Na próxima aula veremos que, por dentro, a branch é só um marcador que aponta para um commit.
- **Mensagem-chave:** branch = linha de trabalho isolada.

### Slide 4 · A branch main `(main)` — ~5 min
- **Fala sugerida:** "Quando criamos um repositório, já existe uma branch principal —
  normalmente a `main` — que representa a versão estável. As novas funcionalidades
  normalmente **não** são desenvolvidas diretamente nela."
- **Mensagem-chave:** a `main` é a versão estável do projeto.

### Slide 5 · Como equipes usam `(equipes)` — ~8 min
- **Fala sugerida:** "Na prática, cada funcionalidade ganha sua branch: `login`,
  `cadastro`, `contato`, `correção-menu`… Quando fica pronta, ela retorna para a `main`."
- **Exemplo concreto (desenhe no quadro):** imagine uma equipe de 3 pessoas no mesmo site.
  | Pessoa | Branch | O que faz |
  |---|---|---|
  | Maria | `feature-login` | tela de login |
  | João | `feature-cadastro` | formulário de cadastro |
  | Pedro | `fix-menu` | corrige o menu quebrado |

  As três trabalham ao mesmo tempo sem se atrapalhar; a `main` continua estável enquanto
  isso. Quando cada uma termina, a branch volta para a `main`.
- **Pergunta para a turma:** "se a Maria ainda não terminou o login, isso atrapalha o João?"
  (Não — estão em branches separadas.) Use a resposta para reforçar o isolamento.
- **Mensagem-chave:** uma funcionalidade, uma branch.

### Slide 6 · Boas práticas `(boas-praticas)` — ~3 min
- **Fala sugerida:** "Nunca desenvolva diretamente na `main`; cada funcionalidade em uma
  branch; e use nomes descritivos."
- **Mensagem-chave:** nomes descritivos + uma branch por funcionalidade.

### Slide 7 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você entendeu como equipes trabalham no mesmo projeto sem se
  atrapalhar. Na próxima aula vamos criar nossas próprias branches e alternar entre elas."
- 💡 **Você sabia?** Em projetos open source como o VS Code, o desenvolvimento acontece em
  centenas de branches ao mesmo tempo, mantendo a principal sempre estável.
- **Mensagem-chave:** próximo passo — **criar e trocar branches**.

---

# Aula 14 — Criando e trocando branches

**Objetivo da aula:** identificar a branch atual, criar uma branch, alternar entre elas e
entender que cada branch tem seu próprio conjunto de alterações.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Entendemos por que equipes usam branches; agora vamos criá-las e
  navegar entre elas — trabalhando como equipes profissionais."
- **Mensagem-chave:** branch = espaço isolado para desenvolver funcionalidades.

### Slide 2 · git branch `(git-branch)` — ~4 min
- **Fala sugerida:** "Antes de criar, vamos ver onde estamos: `git branch` mostra `* main`.
  O asterisco indica a branch atual. Se eu commitar agora, vai para a `main`."
- **Quebrando o comando:** `git` (a ferramenta) · `branch` (sem nome depois, apenas **lista**
  as branches e marca a atual com `*`).
- **Mensagem-chave:** `git branch` lista as branches e destaca a atual.

### Slide 3 · Criar branch `(criar)` — ~8 min
- **Fala sugerida:** "Vamos criar uma branch para uma funcionalidade:
  `git branch feature-contato`. Rodando `git branch` de novo, aparecem `* main` e
  `feature-contato` — ela foi **criada**, mas ainda estamos na `main`."
- **Quebrando o comando:** `git` (a ferramenta) · `branch` (gerencia branches) ·
  `feature-contato` (o nome da nova branch; com um nome, o `branch` **cria** em vez de listar).
- **Mensagem-chave:** `git branch` cria uma branch, mas **não** muda para ela.

### Slide 4 · git switch `(switch)` · 1 revelação — ~8 min
- **Fala sugerida:** "Para mudar: `git switch feature-contato` →
  `Switched to branch 'feature-contato'`. Agora o `*` está na nova branch e todos os
  commits vão para ela."
- **[clique]** revele os atalhos e o `checkout`: "Como criar + trocar é comum, existe
  `git switch -c feature-sobre` (cria e já muda). Existe também `git switch -`, que volta
  para a última branch onde você estava. E se você vir `git checkout <branch>` em tutoriais
  antigos, saiba que hoje o Git recomenda `git switch` para trocar de branch."
- **Quebrando o comando:** `git` (a ferramenta) · `switch` (trocar de branch) · `<branch>`
  (para onde ir) · `-c` (abreviação de `--create`: cria a branch e já troca) · `-` (volta à branch anterior).
- **Mensagem-chave:** `git switch` muda a branch de trabalho; `-c` cria e troca de uma vez.

### Slide 5 · Cada branch, sua evolução `(isolamento)` — ~10 min
- **Fala sugerida:** "Demonstração mais importante da aula. Em `feature-contato`, adicione
  ao `README` uma seção `## Contato`, faça o commit e volte com `git switch main`. Abra o
  `README`: cadê a seção Contato? Sumiu — ficou só na outra branch. Volte com
  `git switch feature-contato` e ela reaparece."
- **Mensagem-chave:** cada branch tem seu próprio histórico e suas próprias alterações.

### Slide 6 · Branch = ponteiro `(ponteiro)` — ~5 min
- **Fala sugerida:** "Por que a seção some e volta? Porque uma branch, por dentro, é só um
  **marcador que aponta para um commit**. Ligando com a Aula 6: quando você troca de branch,
  o `HEAD` (o 'você está aqui') se move para o commit daquela branch — e o Git recria os
  arquivos exatamente como estavam ali. Nada some de verdade: cada linha do tempo continua
  guardada."
- **Mensagem-chave:** branch = ponteiro para um commit; trocar de branch move o `HEAD`.

### Slide 7 · Merge local `(merge-local)` — ~6 min
- **Fala sugerida:** "Quando a funcionalidade fica pronta, dá para trazer a branch de volta
  para a `main` sem precisar do GitHub: `git switch main` e `git merge feature-contato`.
  Como a `main` não mudou nesse meio-tempo, o Git faz um *fast-forward* — só avança o ponteiro
  da `main` para incluir os commits da branch."
- **Quebrando o comando:** `git` (a ferramenta) · `merge` (juntar) · `feature-contato` (a
  branch cujos commits você quer trazer para a branch atual, a `main`).
- **Mensagem-chave:** `git merge` integra a branch localmente, no seu próprio repositório.

### Slide 8 · Boas práticas `(boas-praticas)` — ~3 min
- **Fala sugerida:** "Use nomes descritivos (`feature-login`, `fix-menu`, não `teste` ou
  `branch1`); uma branch por funcionalidade; e sempre verifique em qual branch está com
  `git branch` antes de começar."
- **Mensagem-chave:** confira a branch atual antes de trabalhar.

### Slide 9 · Prática guiada `(pratica)` — ~10 min
- **Fala sugerida:** "Vamos juntas: `git branch`, criar `feature-sobre`, trocar para ela,
  adicionar `## Sobre` ao `README`, `git add` + `git commit`, `git switch main` (some),
  voltar para `feature-sobre` (reaparece) e, por fim, `git merge feature-sobre` para integrar."
- **Passo a passo da demo (o "sumiu/reapareceu" é o ponto alto):**
  ```bash
  git branch
  # → * main            (o asterisco mostra onde você está)

  git branch feature-sobre
  git switch feature-sobre
  # → Switched to branch 'feature-sobre'

  # edite o README: adicione  ## Sobre\nProjeto do curso.  e salve
  git add README.md
  git commit -m "Adiciona seção Sobre ao README"

  git switch main
  # → abra o README: a seção ## Sobre SUMIU (está só na outra branch)

  git switch feature-sobre
  # → a seção ## Sobre REAPARECE

  git switch main
  git merge feature-sobre
  # → Fast-forward  → agora a seção ## Sobre também está na main
  ```
- **Exemplo do atalho:** mostre `git switch -c feature-contato` (cria e já troca) para a
  turma ver que é o mesmo resultado de `git branch` + `git switch` em um comando só.
- **Dica de condução:** abra o `README` no editor ao lado do terminal e alterne as branches
  duas vezes — ver o texto aparecer/sumir em tempo real é o que fixa a ideia de isolamento.
- **Mensagem-chave:** isso só funciona porque as mudanças estavam **salvas em um commit**
  antes da troca.

### Slide 10 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você criou branches e alternou entre elas. Na próxima aula vamos
  ver o fluxo de trabalho mais usado por equipes: o *feature branch*."
- 💡 **Você sabia?** Em muitas empresas os devs quase nunca commitam direto na `main`: cada
  funcionalidade começa em uma branch própria.
- **Mensagem-chave:** próximo passo — **fluxo com feature branch**.

---

# Aula 15 — Fluxo de trabalho com Feature Branch

**Objetivo da aula:** entender o fluxo baseado em feature branches, suas etapas e por que
equipes o adotam. (Sem comandos novos.)

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Já sabemos criar branches. Mas quando criar uma? E o que fazer
  depois? Hoje aprendemos o fluxo usado por grande parte das equipes."
- **Mensagem-chave:** uma branch faz parte de um **fluxo de trabalho**.

### Slide 2 · O fluxo `(fluxo)` — ~8 min
- **Fala sugerida:** "Assim como comprar online tem uma ordem (carrinho → endereço →
  pagamento → finalizar), o Git também: criar branch → desenvolver → commit → push → Pull
  Request → review → merge → `main` atualizada. Cada funcionalidade percorre esse caminho
  antes de chegar à principal."
- **Mensagem-chave:** uma funcionalidade percorre etapas antes de entrar na `main`.

### Slide 3 · Demonstração `(demo)` — ~12 min
- **Fala sugerida:** "Usando o projeto do curso: `git switch -c feature-projetos`, edite o
  `README` com `## Projetos` / `Em breve...`, `git add README.md`,
  `git commit -m \"Adiciona seção de projetos\"`, `git push -u origin feature-projetos`.
  **Pare aqui** — não abra o Pull Request ainda; isso é a próxima aula."
- **Roteiro da demo (fluxo profissional até o push):**
  ```bash
  git switch -c feature-projetos       # cria a branch e já troca
  # → Switched to a new branch 'feature-projetos'

  # edite o README: adicione  ## Projetos\nEm breve...  e salve
  git add README.md
  git commit -m "Adiciona seção de projetos"

  git push -u origin feature-projetos
  # → remote: Create a pull request for 'feature-projetos' on GitHub by visiting:
  # → remote:   https://github.com/seu-usuario/.../pull/new/feature-projetos
  # → branch 'feature-projetos' set up to track 'origin/feature-projetos'.
  ```
- **Ponto de parada (importante):** o GitHub já oferece *Compare & pull request*. Diga em voz
  alta: "**não cliquem** — abrir o PR é a próxima aula". Deixe a branch publicada e visível.
- **Exemplo para conectar:** atualize o GitHub e mostre o seletor de branches com `main` e
  `feature-projetos` lado a lado — prova de que o trabalho foi entregue sem tocar na `main`.
- **Mensagem-chave:** o fluxo até o `push` da branch já entrega o trabalho para a equipe ver.

### Slide 4 · No GitHub `(no-github)` — ~5 min
- **Fala sugerida:** "No GitHub agora existem duas branches: `main` e `feature-projetos`. A
  funcionalidade já está lá, mas ainda não entrou na `main`. O GitHub provavelmente mostra
  *Compare & pull request* — **não clique ainda**; é o que veremos a seguir."
- **Mensagem-chave:** a branch está publicada, mas ainda separada da `main`.

### Slide 5 · Erros comuns `(erros)` — ~4 min
- **Fala sugerida:** "Trabalhar direto na `main` (funciona, mas dificulta revisão); criar
  uma branch e nunca dar push (a equipe não vê seu trabalho); e misturar várias
  funcionalidades numa branch só (fica difícil revisar). Cada branch resolve um problema."
- **Mensagem-chave:** cada branch deve resolver **apenas um** problema.

### Slide 6 · Boas práticas `(boas-praticas)` — ~3 min
- **Fala sugerida:** "Uma funcionalidade, uma branch; commits pequenos = histórico
  organizado; e envie com frequência para a equipe acompanhar a evolução."
- **Aprofundando:** se a branch fica muitos dias aberta, a `main` pode andar sem ela.
  Trazer a `main` para a sua branch de tempos em tempos (`git switch minha-branch` e depois
  `git merge main`) reduz surpresas na hora de integrar.
- **Mensagem-chave:** envie cedo e com frequência.

### Slide 7 · Prática guiada `(pratica)` — ~10 min
- **Fala sugerida:** "Vamos juntas: criar `feature-redes-sociais`, adicionar
  `## Redes Sociais` (LinkedIn, GitHub), `git add`, `git commit`,
  `git push -u origin feature-redes-sociais`, abrir o GitHub e confirmar a branch. **Não
  criem o PR ainda.**"
- **Passo a passo da prática:**
  ```bash
  git switch main                      # sempre parta da main atualizada
  git switch -c feature-redes-sociais

  # edite o README:
  #   ## Redes Sociais
  #   - LinkedIn: /in/seu-perfil
  #   - GitHub: /seu-usuario
  git add README.md
  git commit -m "Adiciona seção de redes sociais"

  git push -u origin feature-redes-sociais
  # → branch 'feature-redes-sociais' set up to track 'origin/feature-redes-sociais'.
  ```
- **Conferência no GitHub:** abra o repositório, clique no seletor de branches e confirme que
  `feature-redes-sociais` aparece na lista. Pare aqui — **sem PR**.
- **Erro comum:** esquecer o `-u origin <branch>` e o Git reclamar `no upstream branch`. A
  primeira publicação de cada branch precisa do `-u`; depois basta `git push`.
- **Mensagem-chave:** o objetivo desta aula é o fluxo até o envio da branch.

### Slide 8 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você executou o fluxo profissional até o `push`. Na próxima aula
  vamos pedir a integração dessa funcionalidade com um **Pull Request**."
- 💡 **Você sabia?** O *Feature Branch Workflow* é um dos modelos de colaboração mais usados;
  GitHub, GitLab e Azure DevOps foram feitos para facilitá-lo.
- **Mensagem-chave:** próximo passo — **Pull Request**.

---

# Aula 16 — Pull Request: solicitando a integração de uma funcionalidade

**Objetivo da aula:** entender o que é um PR, quando criá-lo, abrir um PR no GitHub e
compreender seu papel na colaboração. (Sem merge.)

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Desenvolvemos uma funcionalidade em uma branch e enviamos ao GitHub,
  mas ela ainda não faz parte da `main`. Como chega lá? Normalmente alguém precisa
  revisá-la antes — é para isso que existe o **Pull Request**."
- **Mensagem-chave:** o PR é um pedido para que sua alteração seja analisada antes de entrar
  na `main`.

### Slide 2 · O que é um PR `(o-que-e)` — ~5 min
- **Fala sugerida:** "Apesar do nome, o Pull Request **não** envia o código para a `main`
  automaticamente — ele **solicita** que a alteração seja revisada e inicia uma conversa.
  Analogia: você entrega o trabalho ao professor, ele revisa e só depois aprova."
- **Mensagem-chave:** abrir um PR não significa concluir a funcionalidade.

### Slide 3 · Criando o PR `(criar)` — ~10 min
- **Fala sugerida:** "Depois do push, o GitHub sugere *Compare & pull request*. Ele detecta
  que existe uma branch não integrada. Base: `main`; Compare: `feature-projetos` — ou seja,
  'quero levar esta branch para a main'. Preencha um **título** claro
  (`Adiciona seção de projetos`) e uma **descrição** e clique em *Create Pull Request*.
  Pronto — o PR foi criado, mas ainda **não** houve merge."
- **Mensagem-chave:** título e descrição claros facilitam a revisão.

### Slide 4 · Draft PR `(draft)` — ~6 min
- **Fala sugerida:** "Uma dica profissional: comece o PR como **rascunho** (*Create draft
  pull request*). Um draft sinaliza 'ainda estou trabalhando' — ninguém é chamado para
  revisar, mas a equipe já enxerga o progresso e você continua commitando na branch. Quando
  terminar, clique em **Ready for review** para transformá-lo em PR oficial e escolher quem
  vai revisar."
- **Mensagem-chave:** Draft primeiro (trabalho em andamento) → Ready for review (pede revisão).

### Slide 5 · Página do PR `(pagina)` — ~8 min
- **Fala sugerida:** "A página tem *Conversation* (discussão), *Commits* (todos os commits
  da branch) e *Files changed* (o GitHub destaca o que foi adicionado e removido). É
  exatamente essa tela que outras pessoas usam para revisar código."
- **Ponte com a Aula 6:** aquele `+`/`-` em verde e vermelho é o mesmo do `git diff` — a
  diferença é que aqui ele aparece no navegador, pronto para comentar.
- **Mensagem-chave:** o PR reúne tudo o que é preciso para revisar uma alteração.

### Slide 6 · O que acontece depois `(depois)` — ~5 min
- **Fala sugerida:** "O fluxo completo é: criar branch → desenvolver → commit → push → Pull
  Request → review → merge. Hoje chegamos até o Pull Request; as próximas etapas vêm nas
  próximas aulas."
- **Mensagem-chave:** o PR é uma **etapa** do processo, não o fim.

### Slide 7 · Boas práticas `(boas-praticas)` — ~4 min
- **Fala sugerida:** "Escreva títulos claros, explique o objetivo da alteração, um PR por
  funcionalidade e evite PRs enormes."
- **Mensagem-chave:** um PR pequeno e bem descrito é fácil de revisar.

### Slide 8 · Prática guiada `(pratica)` — ~12 min
- **Fala sugerida:** "Vamos juntas: abrir o GitHub, selecionar a branch da aula anterior,
  *Compare & pull request*, título `Adiciona seção de redes sociais`, descrição, criar o PR
  e explorar *Conversation*, *Commits* e *Files changed*. **Não façam merge.**"
- **Passo a passo da tela (projeção):**
  1. Na página do repositório, clique no banner **Compare & pull request** (ou aba
     *Pull requests* → *New pull request*).
  2. Confira **base: `main`** ← **compare: `feature-redes-sociais`** ("levar esta branch
     para a main").
  3. **Título:** `Adiciona seção de redes sociais`.
  4. **Descrição (exemplo pronto para copiar):**
     ```markdown
     ## O que muda
     Adiciona a seção "Redes Sociais" no README com LinkedIn e GitHub.

     ## Por que
     Facilita que visitantes encontrem os perfis da autora.

     ## Como testar
     Abrir o README e conferir a nova seção no final.
     ```
  5. **Create pull request** (ou *Create draft* — slide 4).
- **Explore as abas:** *Conversation* (a discussão), *Commits* (o commit da branch) e
  *Files changed* (o `+`/`-` em verde/vermelho — o mesmo `git diff` da Aula 6, agora no
  navegador). **Não cliquem em Merge.**
- **Mensagem-chave:** o PR permanece aberto até alguém aprovar e fazer o merge.

### Slide 9 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você abriu um PR e viu que ele é muito mais que um botão de
  juntar código: é um espaço para apresentar e discutir a alteração. Na próxima aula vamos
  assumir o papel de quem revisa — o **Code Review**."
- 💡 **Você sabia?** Em muitas empresas, nenhum código chega à `main` sem passar por um Pull
  Request.
- **Mensagem-chave:** próximo passo — **Code Review**.

---

# Aula 17 — Code Review: revisando alterações em um Pull Request

**Objetivo da aula:** entender o propósito do Code Review, navegar pelas alterações (no
GitHub e localmente), comentar, resolver um eventual conflito e enviar um retorno. (Sem merge
na main.)

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Abrimos um PR; antes da integração, normalmente outra pessoa revisa.
  Por quê? Mesmo devs experientes deixam passar detalhes — outra pessoa olhando aumenta a
  qualidade e reduz erros."
- **Mensagem-chave:** Code Review é etapa de **colaboração**, não de julgamento.

### Slide 2 · O que é Code Review `(o-que-e)` — ~5 min
- **Fala sugerida:** "No fluxo, o review vem entre o Pull Request e o merge. A pessoa
  revisora verifica se a alteração resolve o problema, se o código está claro e se segue o
  padrão do projeto. O objetivo não é achar culpados — é melhorar o projeto. Analogia:
  revisar um artigo antes de publicar."
- **Mensagem-chave:** o foco é melhorar o código e **compartilhar conhecimento**.

### Slide 3 · A tela de revisão `(tela)` — ~8 min
- **Fala sugerida:** "A aba *Files changed* é a mais usada por quem revisa: o GitHub destaca
  as linhas adicionadas e removidas, deixando claríssimo o que mudou. É o mesmo `git diff`
  da Aula 6, agora visual. Dica: a aba *Commits* deixa revisar commit por commit, útil em PRs
  maiores."
- **Mensagem-chave:** *Files changed* mostra exatamente o que mudou.

### Slide 4 · Revisar localmente `(revisar-local)` — ~8 min
- **Fala sugerida:** "Dá para revisar sem sair do navegador, mas trazer o PR para a sua
  máquina ajuda a entender de verdade. `git fetch origin` baixa as branches novas e
  `git switch faq-horarios` entra na branch do PR para você ler o texto de perto. Se quiser
  garantir que a branch continua funcionando junto com a `main`, rode `git merge main` — e,
  se as duas mexeram na mesma linha, aparece um conflito (que resolvemos como na Aula 19)."
- **Passo a passo da revisão local:**
  ```bash
  git fetch origin
  # → * [new branch]      faq-horarios -> origin/faq-horarios

  git switch faq-horarios
  # → Switched to a new branch 'faq-horarios'  (agora você lê o código da colega)

  git merge main          # opcional: confere se a branch segue compatível com a main
  # → Already up to date.   (ou CONFLICT, se mexeram na mesma linha)
  ```
- **Exemplo de condução:** abra o arquivo do PR no VS Code e leia um trecho em voz alta,
  mostrando que revisar localmente permite testar e navegar, não só ler o diff.
- **Quebrando o comando:** `git fetch origin` (baixa novidades sem juntar) · `git switch
  <branch>` (entra na branch do PR) · `git merge main` (traz a main para dentro da branch).
- **Atalho:** com o GitHub CLI, `gh pr checkout <número>` faz o fetch + switch de uma vez.
- **Mensagem-chave:** revisar localmente revela conflitos e detalhes antes do merge.

### Slide 5 · Bons comentários `(comentarios)` — ~10 min
- **Fala sugerida:** "A revisão acontece por comentários. Passe o mouse sobre uma linha,
  clique no ícone de comentário. Exemplos construtivos: 'Gostei da ideia — que tal detalhar
  esta seção?', 'Podemos deixar esse título mais descritivo?', 'Excelente organização do
  README'. Nem todo comentário aponta problema — também reconhecemos boas soluções."
- **Mensagem-chave:** comentários devem **ajudar** quem desenvolveu a melhorar o código.

### Slide 6 · O que revisar `(o-que-revisar)` — ~6 min
- **Fala sugerida:** "Para iniciantes, mantenha simples: a alteração resolve o problema?
  Está fácil de entender? A mensagem do commit faz sentido? O PR tem título e descrição
  claros? Ainda não precisamos avaliar arquitetura ou desempenho — isso vem com
  experiência."
- **Mensagem-chave:** comece pelo essencial: clareza e propósito.

### Slide 7 · Enviar o retorno `(enviar-review)` — ~6 min
- **Fala sugerida:** "Depois de revisar, envie um retorno formal em *Files changed → Review
  changes*. São três opções: **Comment** (observações, sem aprovar nem barrar), **Approve**
  (está pronto para o merge) e **Request changes** (peça ajustes antes de integrar). Comece
  sempre por um elogio e depois uma sugestão."
- **Mensagem-chave:** um review deixa claro se o PR está pronto ou precisa de ajustes.

### Slide 8 · Boas práticas `(boas-praticas)` — ~3 min
- **Fala sugerida:** "Comentários respeitosos; explique o motivo da sugestão; reconheça
  boas soluções; e lembre: revise o **código**, não a pessoa. Comece sempre destacando algo
  positivo."
- **Mensagem-chave:** revise o código, não a pessoa.

### Slide 9 · Prática guiada `(pratica)` — ~12 min
- **Fala sugerida:** "Em dupla, cada pessoa revisa o PR da colega (ou use um PR preparado).
  Adicione pelo menos um comentário positivo e uma sugestão de melhoria — por exemplo,
  'Gostei da organização desta seção' e 'Que tal detalhar um pouco mais esta descrição?'.
  Mostrem que quem abriu o PR pode responder, virando uma conversa técnica."
- **Roteiro do exercício (passo a passo):**
  1. Abra o PR da colega → aba **Files changed**.
  2. Passe o mouse sobre uma linha → clique no ícone **+** azul → escreva o comentário.
  3. Envie um **elogio** e uma **sugestão**. Exemplos prontos:
     - Elogio: *"Excelente organização do FAQ, ficou fácil de ler."*
     - Sugestão: *"Que tal incluir o horário de atendimento também no sábado?"*
     - Pergunta: *"Esse link está atualizado? Achei que apontava para outra página."*
  4. Finalize em **Review changes** escolhendo **Comment** (sem aprovar/barrar nesta
     prática).
  5. Quem abriu o PR **responde** cada comentário, transformando em conversa.
- **Regra do exercício:** comece sempre pelo elogio; a sugestão vem depois. Reforça que
  review é colaboração, não julgamento.
- **Mensagem-chave:** uma sugestão não quer dizer que o código está 'errado' — muitas vezes
  há mais de uma solução correta.

### Slide 10 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Hoje você conheceu uma das práticas mais importantes do
  desenvolvimento colaborativo. Na próxima aula concluímos o fluxo com o **merge**."
- 💡 **Você sabia?** O Code Review é uma das principais formas de aprendizado entre devs:
  revisões constantes elevam o nível de toda a equipe.
- **Mensagem-chave:** próximo passo — **merge**.

---

# Aula 18 — Merge: integrando uma funcionalidade ao projeto

**Objetivo da aula:** entender o merge, integrar uma branch à `main` pelo GitHub, entender
o que acontece depois e aplicar boas práticas.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Desenvolvemos uma funcionalidade em uma branch, enviamos, abrimos um
  PR e revisamos. Agora chegou o momento de concluir: integrar a funcionalidade à branch
  principal."
- **Mensagem-chave:** o merge une o trabalho da branch com a versão principal do projeto.

### Slide 2 · O que é um merge `(o-que-e)` — ~5 min
- **Fala sugerida:** "Durante o desenvolvimento as alterações ficaram separadas em uma
  branch. Depois do merge, elas passam a fazer parte da `main`. Analogia: um autor escreve
  um capítulo à parte e, depois da revisão, ele é incorporado ao livro."
- **Mensagem-chave:** o merge incorpora a funcionalidade à versão principal.

### Slide 3 · Realizando o merge `(realizando)` — ~12 min
- **Fala sugerida:** "Devemos fazer merge logo depois de criar a branch? Não — antes vêm
  concluir a funcionalidade, commits, push, PR e revisão. No PR, o GitHub mostra *Able to
  merge* (sem conflitos). Clique em *Merge pull request* e depois *Confirm merge*. Pronto:
  a funcionalidade agora faz parte da `main`. Momento importante — vale a pausa."
- **Local × GitHub:** lembre que dá para integrar localmente com `git merge` (Aula 14). Pelo
  GitHub é melhor em equipe, porque a mudança passa antes pela revisão do Pull Request.
- **Mensagem-chave:** faça o merge apenas **após** a revisão.

### Slide 4 · Depois do merge `(depois)` — ~8 min
- **Fala sugerida:** "A `main` no GitHub agora contém a seção adicionada. A branch
  `feature-projetos` continua existindo, mas normalmente não será mais usada — o GitHub
  oferece *Delete branch*. Apagar a branch **não** apaga a funcionalidade: ela já foi
  incorporada ao histórico da `main`."
- **Mensagem-chave:** depois do merge, a branch normalmente pode ser removida.

### Slide 5 · Atualizar o local `(atualizar)` — ~8 min
- **Fala sugerida:** "Ponto que muitos esquecem: o GitHub foi atualizado, mas o computador
  ainda tem a `main` antiga. Rode `git switch main` e `git pull origin main` para trazer as
  alterações integradas. Esse passo faz parte do fluxo diário."
- **Quebrando o comando:** `git` (a ferramenta) · `pull` (puxar/baixar) · `origin` (o
  remoto) · `main` (a branch a atualizar). Em resumo, `pull` = `fetch` (baixar) + `merge`
  (juntar) em um passo só.
- **Mensagem-chave:** `git pull` sincroniza a sua `main` local com a do GitHub.

### Slide 6 · Ver a história `(graph)` — ~5 min
- **Fala sugerida:** "Depois de integrar, vale olhar o histórico com
  `git log --oneline --graph`. O `--graph` desenha as branches como uma árvore de linhas e
  bolinhas: dá para ver a `feature` nascer da `main`, ganhar commits e voltar num commit de
  merge. É a mesma navegação da Aula 6, agora enxergando várias linhas do tempo juntas."
- **Quebrando o comando:** `git` · `log` (histórico) · `--oneline` (uma linha por commit) ·
  `--graph` (desenha o formato de árvore das branches ao lado).
- **Mensagem-chave:** `--graph` mostra visualmente como as branches se encontram.

### Slide 7 · Boas práticas `(boas-praticas)` — ~5 min
- **Fala sugerida:** "Faça merge apenas após revisão; mantenha PRs pequenos; atualize a
  `main` local com frequência; e remova branches já integradas."
- **Mensagem-chave:** mantenha local e remoto sincronizados.

### Slide 8 · Prática guiada `(pratica)` — ~12 min
- **Fala sugerida:** "Vamos juntas: abrir o PR, confirmar *Able to merge*, *Merge pull
  request*, *Confirm merge*, *Delete branch*; depois no VS Code `git switch main` e
  `git pull origin main`, confirmando o `README` atualizado. Comparem a `main` no GitHub e
  no local: ficam diferentes até o `git pull`."
- **Passo a passo (metade no GitHub, metade no terminal):**
  1. No PR, confirme o selo verde **Able to merge** (sem conflitos).
  2. **Merge pull request** → **Confirm merge** → o PR fica roxo com *Merged*.
  3. **Delete branch** (a funcionalidade já está na `main`; a branch não é mais necessária).
  4. Volte ao VS Code e sincronize o local:
  ```bash
  git switch main
  git pull origin main
  # → Updating 9c1b2a4..a3f7d8e
  # → Fast-forward
  # →  README.md | 2 ++
  ```
- **Exemplo do "local desatualizado":** antes do `git pull`, abra o `README` local e mostre
  que a seção nova **ainda não está lá**; depois do `pull`, ela aparece. É o momento que fixa
  por que o `pull` faz parte da rotina diária.
- **Mensagem-chave:** apagar a branch após o merge não apaga a funcionalidade.

### Slide 9 · Encerramento `(encerramento)` — ~2 min
- **Fala sugerida:** "Hoje concluímos todo o fluxo colaborativo: criamos, revisamos e
  integramos uma funcionalidade. Na próxima aula veremos um cenário muito comum: duas
  pessoas mexendo no mesmo trecho — o **conflito** — e como resolvê-lo."
- 💡 **Você sabia?** Dependendo das regras do projeto, o GitHub pode exigir aprovações e
  testes automatizados antes de liberar o botão de merge.
- **Mensagem-chave:** próximo passo — **resolver conflitos**.

---

# Aula 19 — Resolvendo conflitos de merge

**Objetivo da aula:** entender por que conflitos acontecem, **provocá-los de propósito no
próprio repositório**, identificá-los, resolver um conflito simples no VS Code e concluir a
integração.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Até agora tudo integrou sem problemas. Mas se a **mesma linha** de um
  arquivo for alterada em duas branches, como o Git decide qual manter? Ele não decide — e é
  aí que surge um **conflito**. O melhor: você não precisa de equipe para praticar, dá para
  provocar um conflito no seu próprio repositório."
- **Mensagem-chave:** um conflito acontece quando o Git não consegue decidir sozinho qual
  alteração manter.

### Slide 2 · Quando acontece `(quando)` — ~5 min
- **Fala sugerida:** "No `contato.md`, a branch `atualiza-contato` muda a linha para o
  LinkedIn; a `main` muda a **mesma** linha para o Instagram. Qual versão fica? O Git não
  sabe, então interrompe o merge. É como duas pessoas editando a mesma frase de um documento
  compartilhado — só que aqui as duas versões são suas."
- **Mensagem-chave:** conflitos surgem quando duas alterações afetam o **mesmo trecho**.

### Slide 3 · Gerar o conflito `(gerar)` — ~8 min
- **Fala sugerida:** "Vamos provocar um conflito de propósito, para aprender a resolver sem
  medo. No seu repositório: `git switch -c atualiza-contato`, edite uma linha do `contato.md`
  e `git commit -am \"Atualiza contato\"`. Volte com `git switch main`, edite a **mesma**
  linha diferente e `git commit -am \"Ajusta contato\"`. Agora `git merge atualiza-contato`
  → o Git avisa `CONFLICT`."
- **Roteiro para gerar o conflito (rode exatamente nesta ordem):**
  ```bash
  git switch -c atualiza-contato
  # no contato.md, mude a linha de contato para:  E-mail: contato@comunidade.dev
  git commit -am "Atualiza contato"

  git switch main
  # no contato.md, mude a MESMA linha para:  E-mail: ola@comunidade.dev
  git commit -am "Ajusta contato"

  git merge atualiza-contato
  # → Auto-merging contato.md
  # → CONFLICT (content): Merge conflict in contato.md
  # → Automatic merge failed; fix conflicts and then commit the result.
  ```
- **Dica de condução:** avise a turma que ver `CONFLICT` é o **objetivo** aqui, não um
  fracasso. É exatamente o que queríamos provocar para praticar a resolução no próximo slide.
- **Quebrando o comando:** `git commit -am \"...\"` junta `add` + `commit` dos arquivos já
  rastreados · `git merge atualiza-contato` tenta trazer a branch e é aí que o conflito surge.
- **Mensagem-chave:** dá para criar e resolver um conflito sozinha, sem equipe e sem GitHub.

### Slide 4 · Como aparece `(como-aparece)` — ~8 min
- **Fala sugerida:** "No VS Code o conflito aparece com marcadores: `<<<<<<< HEAD` (versão
  atual, a `main`), `=======` (separador) e `>>>>>>> atualiza-contato` (versão da outra
  branch). Parece estranho no começo, mas são só as duas versões lado a lado."
- **Ponte com a Aula 6:** lembra o `HEAD`? Ele reaparece aqui: `<<<<<<< HEAD` é a **sua**
  versão atual (onde você está); o bloco de baixo é a versão que está **chegando** da outra
  branch.
- **Mensagem-chave:** os marcadores mostram as duas versões que precisam ser conciliadas.

### Slide 5 · Resolvendo `(resolvendo)` — ~10 min
- **Fala sugerida:** "O VS Code oferece *Accept Current*, *Accept Incoming* e *Accept Both*.
  Em muitos casos a melhor solução é **combinar** as alterações (Accept Both). A qualquer
  momento, `git status` mostra quais arquivos ainda estão em conflito. Depois de resolver,
  finalize com `git add contato.md` e `git commit -m \"Resolve conflito de merge\"`."
- **Saída de emergência:** se travar ou quiser recomeçar, `git merge --abort` desfaz o merge
  e devolve tudo ao estado anterior — nada é perdido. Tranquiliza muito quem está começando.
- **Mensagem-chave:** resolver um conflito é decidir manualmente qual versão permanece.

### Slide 6 · Boas práticas `(boas-praticas)` — ~5 min
- **Fala sugerida:** "Faça `pull` com frequência; commits pequenos; uma branch por
  funcionalidade; e converse com a equipe quando várias pessoas mexem no mesmo arquivo."
- **Mensagem-chave:** prevenção: sincronize cedo e comunique-se.

### Slide 7 · Prática guiada `(pratica)` — ~12 min
- **Fala sugerida:** "Vamos juntas: criar `atualiza-contato`, alterar uma linha do
  `contato.md`, voltar para a `main`, alterar a **mesma** linha, tentar o merge, ler os
  marcadores (identifiquem o que é da `main` e o que é da branch), resolver no VS Code e
  finalizar com commit."
- **Exemplo dos marcadores (o que a turma vai ver no `contato.md`):**
  ```text
  <<<<<<< HEAD
  E-mail: ola@comunidade.dev          (versão da main — onde você está)
  =======
  E-mail: contato@comunidade.dev      (versão que chega da branch atualiza-contato)
  >>>>>>> atualiza-contato
  ```
- **Resolução passo a passo:**
  ```bash
  # 1. No VS Code, clique em Accept Current / Accept Incoming / Accept Both,
  #    ou edite à mão deixando só a linha final desejada (sem os marcadores <<< === >>>)

  git status
  # → both modified:   contato.md   (ainda em conflito até você preparar)

  git add contato.md
  git commit -m "Resolve conflito de merge no contato"
  # → conflito resolvido e integrado
  ```
- **Saída de emergência:** se alguém travar, `git merge --abort` desfaz o merge e volta ao
  estado anterior — nada se perde. Mostre esse comando para dissolver o medo antes da prática.
- **Mensagem-chave:** pense na melhor solução antes de clicar — nem sempre uma opção pronta
  basta.

### Slide 8 · Encerramento `(encerramento)` — ~2 min
- **Fala sugerida:** "Hoje você viu que conflitos fazem parte do trabalho colaborativo. O
  importante não é evitar todos, mas entender por que acontecem e resolvê-los com
  segurança. Na próxima aula juntamos tudo em um fluxo completo em equipe."
- 💡 **Você sabia?** Conflitos são comuns até em equipes experientes — resolvê-los bem é uma
  habilidade valorizada, não sinal de erro.
- **Mensagem-chave:** próximo passo — **projeto final colaborativo**.

---

# Aula 20 — Fork e Pull Request: contribuindo em projetos de terceiros

**Objetivo da aula:** contribuir com um repositório sem acesso de escrita usando fork,
`upstream` e Pull Request a partir do fork.

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Como contribuir com um projeto de outra pessoa ou de uma comunidade
  open source? Com um fork."
- **Mensagem-chave:** fork abre as portas do open source.

### Slide 2 · O problema do acesso `(problema)` — ~2 min
- **Fala sugerida:** "Em projetos públicos, qualquer um vê o código, mas só quem tem
  permissão envia direto. O fork resolve isso."
- **Mensagem-chave:** sem acesso de escrita, use fork.

### Slide 3 · O que é um fork `(o-que-e-fork)` — ~2 min
- **Fala sugerida:** "O botão Fork cria uma cópia completa do repositório na sua conta, onde
  você tem total liberdade."
- **Mensagem-chave:** o original é o `upstream`.

### Slide 4 · O fluxo com fork `(fluxo)` — ~3 min
- **Fala sugerida:** "Seis passos: fork, clone do seu fork, branch, commit, push no fork, e
  PR do fork para o original."
- **Mensagem-chave:** o PR sai do seu fork.

### Slide 5 · origin e upstream `(upstream)` — ~3 min
- **Fala sugerida:** "`origin` é o seu fork; adicione o original como `upstream` com
  `git remote add upstream`."
- **Mensagem-chave:** dois remotos, seu e o original.

### Slide 6 · Mantendo o fork atualizado `(atualizar)` — ~3 min
- **Fala sugerida:** "O original continua evoluindo. `git fetch upstream` + `git merge
  upstream/main` mantém seu fork em dia."
- **Mensagem-chave:** atualize pelo upstream.

### Slide 7 · Fork ou acesso direto? `(comparacao)` — ~2 min
- **Fala sugerida:** "Equipe com acesso usa branches no mesmo repositório; projetos de
  terceiros usam fork. O Pull Request é o coração dos dois."
- **Mensagem-chave:** muda só de onde vem a branch.

### Slide 8 · Materiais para praticar `(materiais)` — ~1 min
- **Fala sugerida:** "Baixe o guia da Aula 20 com o fluxo completo de fork até o Pull
  Request."
- **Downloads:** `/downloads/guia-aula-20-fork-pr.md`.
- **Mensagem-chave:** guia autoguiado disponível.

### Slide 9 · Prática guiada `(pratica)` — ~3 min
- **Fala sugerida:** "Faça fork de um repositório de exemplo, clone o seu fork, crie uma
  branch, envie e abra um PR para o original."
- **Mensagem-chave:** sua primeira contribuição.

### Slide 10 · Encerramento `(encerramento)` — ~1 min
- **Fala sugerida:** "Com fork e PR você contribui com quase qualquer projeto público. Na
  próxima aula, o projeto final em equipe."
- 💡 **Você sabia?** Muita gente conquista a primeira vaga mostrando contribuições open
  source feitas por fork.
- **Mensagem-chave:** próximo passo — projeto final.

---

# Aula 21 — Projeto final: fluxo completo de colaboração com Git e GitHub

**Objetivo da aula:** aplicar todo o fluxo aprendido, colaborar com branches e PRs,
participar de Code Review, fazer merge e trabalhar em equipe. (Aula prática.)

### Slide 1 · Capa `(capa)` — ~2 min
- **Fala sugerida:** "Parabéns por chegar até aqui! Aprendemos cada etapa separadamente;
  hoje unimos tudo em um projeto colaborativo, como acontece em equipes de
  desenvolvimento."
- **Mensagem-chave:** o objetivo não é aprender comandos novos, mas usar o fluxo completo
  com confiança.

### Slide 2 · Fluxo completo `(fluxo)` — ~4 min
- **Fala sugerida:** "O diagrama final: criar branch → desenvolver → commit → push → Pull
  Request → Code Review → merge → atualizar a `main`. Todo projeto colaborativo passa por
  essas etapas — hoje percorremos cada uma."
- **Mensagem-chave:** este é o ciclo completo de colaboração.

### Slide 3 · Cenário `(cenario)` — ~5 min
- **Fala sugerida:** "A equipe mantém um **manual de comunidade** feito só de markdown. Cada
  pessoa fica responsável por um arquivo — `sobre.md`, `faq.md`, `contato.md`,
  `codigo-de-conduta.md` — e todas trabalham no **mesmo** repositório."
- **Mensagem-chave:** cada pessoa, um arquivo; todas no mesmo repositório.

### Slide 4 · Demonstração `(demo)` — ~12 min
- **Fala sugerida:** "Demonstração rápida antes de liberar a turma: `git switch -c
  feature-faq`, editar o `faq.md` com uma nova pergunta, `git add faq.md`,
  `git commit -m \"Adiciona pergunta ao FAQ\"`, `git push -u origin feature-faq`, abrir um
  **Draft PR**, marcar **Ready for review**, revisar, merge e depois `git switch main` +
  `git pull origin main`. Para fechar, `git log --oneline --graph` para ver toda a história
  do projeto desenhada como uma árvore."
- **Roteiro completo da demo (o ciclo inteiro em uma passada):**
  ```bash
  git switch main && git pull origin main   # sempre partir da main atualizada
  git switch -c feature-faq

  # edite o faq.md acrescentando uma pergunta/resposta e salve
  git add faq.md
  git commit -m "Adiciona pergunta ao FAQ"
  git push -u origin feature-faq

  # No GitHub: Compare & pull request → Create DRAFT pull request
  #            depois clique em "Ready for review" → revise → Merge → Confirm merge

  git switch main
  git pull origin main                      # traz a funcionalidade integrada

  git log --oneline --graph
  # → *   e5f6a7b Merge pull request #1 from .../feature-faq
  # → |\
  # → | * a3f7d8e Adiciona pergunta ao FAQ
  # → |/
  # → * 9c1b2a4 Cria manual da comunidade
  ```
- **Feche mostrando o `--graph`:** aponte a branch "nascendo" da `main` e voltando no commit
  de merge. É a mesma navegação da Aula 6, agora com várias linhas do tempo visíveis juntas.
- **Mensagem-chave:** o fluxo do início ao fim, uma vez, para servir de modelo.

### Slide 5 · Materiais para praticar `(materiais)` — ~4 min
- **Fala sugerida:** "Como a prática em grupo é autoguiada, deixamos um **guia detalhado**
  para download, com os papéis (mantenedora, autora, revisora), o passo a passo do Draft PR,
  a revisão local e um **conflito proposital** para resolver. Junto vai o projeto-base."
- **Downloads:** `/downloads/guia-aula-21-pr-em-grupo.md` e `/downloads/manual-comunidade/`.
- **Mensagem-chave:** o grupo consegue executar o fluxo completo seguindo o guia.

### Slide 6 · Prática em grupo `(pratica-grupo)` — ~30 min
- **Fala sugerida:** "Agora vocês executam, em grupo, no mesmo repositório. Cada pessoa: 1)
  `git switch main` + `git pull`; 2) criar sua branch (ex.: `faq-horarios`); 3) editar o seu
  arquivo `.md`; 4) `git add` + `git commit`; 5) `git push -u origin <branch>`; 6) abrir um
  **Draft PR** e depois **Ready for review**; 7) revisar o PR de uma colega **localmente**
  (`git fetch` + `git switch`), resolvendo um conflito se aparecer, e enviar um retorno
  (Approve / Request changes); 8) após aprovação, merge; 9) todas atualizam a `main`.
  Estudando sozinha? Repita o fluxo com duas branches e dois PRs, revisando manualmente."
- **Roteiro de cada participante (cole no quadro para a turma seguir):**
  ```bash
  git switch main && git pull origin main   # 1. partir da main atualizada
  git switch -c faq-horarios                # 2. sua branch (nome do seu arquivo/tarefa)
  # 3. edite o SEU arquivo .md (sobre.md, faq.md, contato.md, codigo-de-conduta.md)
  git add .                                 # 4. preparar
  git commit -m "Atualiza seção de horários no FAQ"
  git push -u origin faq-horarios           # 5. publicar a branch
  # 6. GitHub: Draft PR → Ready for review
  # 7. revisar a colega:
  git fetch origin
  git switch <branch-da-colega>             #    ler/testar localmente
  # 8. após Approve: Merge no GitHub
  git switch main && git pull origin main   # 9. todas sincronizam a main
  ```
- **Divisão de papéis (exemplo para 4 pessoas):** cada uma fica com um arquivo — `sobre.md`,
  `faq.md`, `contato.md`, `codigo-de-conduta.md` — e todas revisam o PR de pelo menos uma
  colega. Assim ninguém mexe no mesmo arquivo por acaso, mas todas praticam PR + review.
- **Conflito proposital (opcional):** peça a duas pessoas para editarem a **mesma linha** de
  um arquivo comum (ex.: o `README`); no segundo merge o conflito aparece e o grupo resolve
  junto, aplicando a Aula 19.
- **Mensagem-chave:** o importante é executar **todas** as etapas.

### Slide 7 · Checklist final `(checklist)` — ~5 min
- **Fala sugerida:** "Conferindo: criou branch ✔, desenvolveu ✔, commits ✔, enviou ao
  GitHub ✔, abriu PR ✔, participou de Code Review ✔, fez merge ✔, atualizou o projeto local
  ✔. Conseguimos completar todas as etapas?"
- **Mensagem-chave:** esse checklist é a base usada diariamente por quem desenvolve.

### Slide 8 · Próximos passos `(proximos)` — ~3 min
- **Fala sugerida:** "Este curso apresentou o fluxo essencial. Daqui pra frente você pode
  aprofundar: `.gitignore`, GitHub Issues, Projects, Actions, Releases, Tags, Forks,
  Codespaces, GitHub Copilot, GitHub Desktop, estratégias de branching (GitFlow, Trunk
  Based) e rebase. Tudo isso amplia — mas depende da base construída aqui."
- **Mensagem-chave:** a base deste curso sustenta todos os recursos avançados.

### Slide 9 · Encerramento do curso `(encerramento)` — ~4 min
- **Fala sugerida:** "Parabéns! Você concluiu todo o fluxo com Git e GitHub. Hoje já é capaz
  de iniciar um projeto, controlar versões, colaborar e participar do processo de
  desenvolvimento usado em equipes profissionais. Durante o curso você aprendeu a: entender
  o versionamento, criar repositórios, registrar alterações, consultar histórico, publicar
  no GitHub, trabalhar com branches, abrir PRs, revisar código, fazer merges e resolver
  conflitos."
- 💡 **Você sabia?** Aprender Git não é memorizar comandos — é compreender o fluxo de
  colaboração. Ferramentas mudam, mas versionamento, branches, PRs, revisão e integração
  contínua seguem sendo a rotina do desenvolvimento de software.
- **Mensagem-chave:** você domina a base do trabalho colaborativo com Git e GitHub. 🎉
