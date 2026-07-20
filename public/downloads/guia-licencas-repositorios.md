# Guia de licenças para repositórios

Uma licença informa o que outras pessoas podem fazer com seu trabalho e quais condições devem cumprir.

> **Importante:** repositório público não significa automaticamente projeto open source. Sem uma licença, aplicam-se os direitos autorais padrão: outras pessoas podem visualizar e fazer fork conforme os termos do GitHub, mas não recebem uma permissão geral para usar, modificar ou distribuir seu trabalho.

Este material é educacional e não substitui aconselhamento jurídico.

## Antes de escolher

Responda:

1. O projeto é software, documentação, dados ou outro tipo de conteúdo?
2. Você quer permitir uso comercial e versões fechadas?
3. Melhorias distribuídas devem permanecer abertas?
4. Há política da empresa, cliente, comunidade ou dependências que limita a escolha?
5. O projeto inclui contribuições ou código de terceiros?

## Licenças comuns para software

| Licença | Pode usar, modificar e distribuir? | Código derivado precisa permanecer aberto? | Destaque | Cenário comum |
|---|---|---|---|---|
| MIT | Sim, inclusive comercialmente | Não | Curta e permissiva; exige preservar aviso de copyright e licença | Bibliotecas, exemplos e projetos que priorizam adoção |
| Apache-2.0 | Sim, inclusive comercialmente | Não | Inclui concessão explícita de patentes e regras de avisos | Projetos que desejam proteção de patentes mais explícita |
| BSD-3-Clause | Sim, inclusive comercialmente | Não | Permissiva; impede usar nomes de autores para endosso | Software acadêmico e infraestrutura |
| GPL-3.0 | Sim | Sim, quando o derivado é distribuído | Copyleft forte; inclui proteções adicionais | Projetos que querem manter derivados distribuídos sob GPL |
| MPL-2.0 | Sim | Arquivos modificados sob MPL permanecem abertos | Copyleft no nível de arquivo | Projetos que combinam componentes abertos e proprietários |

“Permissiva” não significa “sem condições”. Leia o texto completo da licença e preserve os avisos exigidos.

## Conteúdo que não é software

Para documentação, textos, imagens e materiais didáticos, licenças Creative Commons costumam ser mais adequadas que licenças de software:

- **CC BY 4.0:** permite adaptação e uso comercial com atribuição.
- **CC BY-SA 4.0:** exige atribuição e compartilhamento de adaptações sob a mesma licença.
- **CC0:** busca dedicar o trabalho ao domínio público na maior extensão permitida.

Não use licenças Creative Commons para software sem avaliar as recomendações da própria Creative Commons.

## E projetos proprietários?

Se você não pretende conceder direitos de reutilização, não escolha uma licença open source apenas porque o repositório está no GitHub. Use repositório privado e os termos definidos pela organização. Um aviso “todos os direitos reservados” não transforma um repositório público em open source.

## Como adicionar no GitHub

### Durante a criação

O seletor de licença pode criar o arquivo para você. Em um fluxo no qual já existe um repositório local com commits, criar também arquivos iniciais no GitHub pode produzir históricos separados. Nesse caso, crie primeiro o repositório remoto vazio e adicione a licença pelo fluxo local.

### Em um projeto existente

1. Confirme a escolha com responsáveis pelo projeto.
2. Adicione `LICENSE` na raiz, usando o texto oficial sem reescrevê-lo.
3. Preencha ano e titular quando a licença exigir.
4. Informe a licença no `README.md`.
5. Registre e publique:

```bash
git add LICENSE README.md
git commit -m "Adiciona licença MIT ao projeto"
git push
```

## Decisão rápida

- Quero algo curto e permissivo: considere **MIT**.
- Quero licença permissiva com concessão explícita de patentes: considere **Apache-2.0**.
- Quero que versões distribuídas e derivadas permaneçam abertas: avalie **GPL-3.0**.
- Quero copyleft aplicado aos arquivos modificados: avalie **MPL-2.0**.
- Estou contribuindo para uma comunidade: siga a licença e a política já adotadas.
- Não tenho certeza: não improvise uma licença; consulte responsáveis ou orientação jurídica.

## Referências

- [Licenciar um repositório, GitHub Docs](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- [Adicionar uma licença a um repositório](https://docs.github.com/pt/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository)
- [Choose a License](https://choosealicense.com/)
- [O lado legal do open source](https://opensource.guide/pt/legal/)
- [Creative Commons: compartilhar seu trabalho](https://creativecommons.org/share-your-work/cclicenses/)
