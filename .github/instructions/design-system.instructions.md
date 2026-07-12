---
description: "Garante a replicação exata do design do GitHub Copilot Learning Hub. Use ao criar ou editar qualquer página, componente ou estilo (.tsx / .css) para manter tokens, tipografia, layout e padrões de UI idênticos ao restante do projeto."
applyTo: "src/**/*.{tsx,css}"
---

# Design System — GitHub Copilot Learning Hub

Siga estas regras à risca para que qualquer nova tela seja visualmente indistinguível das existentes. **Nunca invente cores, fontes, espaçamentos ou raios de borda novos** — reutilize sempre os tokens e padrões abaixo.

## 1. Stack e convenções de arquivo

- **Next.js 14 (App Router)** + **React 18** + **TypeScript**. Uma rota = uma pasta em `src/app/<rota>/page.tsx`.
- **CSS puro**, sem Tailwind, CSS Modules ou CSS-in-JS. Estilos globais em [src/app/globals.css](src/app/globals.css); estilos específicos de página num arquivo `.css` irmão importado no topo do `page.tsx` (ex.: `import './women-training.css';`).
- Componentes de página que usam hooks/estado começam com `'use client';`. Componentes compartilhados ficam em `src/components/`.
- **Sempre reutilize as classes globais** (`.hero`, `.container`, `.card`, `.step`, `.callout`, `.terminal`, etc.) antes de criar CSS novo. Só adicione CSS de página para o que não existe globalmente.

## 2. Tokens de cor (use apenas variáveis CSS, nunca hex cru no meio do código)

Definidos em `:root` de [src/app/globals.css](src/app/globals.css):

- Marca: `--blue #0078D4`, `--blue-dark #005A9E`, `--blue-light #DEECF9`
- Acento: `--green #107C10`, `--red #D13438`, `--orange #FF8C00`, `--purple #5C2D91`, `--pink #E3008C`
- Neutros: `--gray-10 #FAF9F8` → `--gray-150 #201F1E` (escala Fluent)
- Aliases semânticos: `--ink`, `--muted`, `--line`, `--bg`, `--card`
- Terminal: `--terminal-bg #1E1E1E`, `--terminal-fg`, `--terminal-green`, `--terminal-yellow`, `--terminal-cyan`, `--terminal-orange`, `--terminal-blue`, `--terminal-purple`

Convenção de cor por etapa/estágio: **1=blue, 2=green, 3=purple, 4=orange**. Aplique de forma consistente em `.step-num`, `.stage-label` e numeração de navegação.

## 3. Tipografia

- Fonte: **Inter** (importada via Google Fonts no topo do `globals.css`), com fallback `'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif`.
- Corpo base: `font-size: 16.5px`, `line-height: 1.6`, cor `--gray-130`.
- Fonte monoespaçada (terminais, mockups de código, prompts): `'Cascadia Code', 'Consolas', 'Courier New', monospace`.
- Títulos usam `letter-spacing` negativo (ex.: `h1` do hero `-1px`). Pesos: 400/500/600/700.
- Dimensione com `em` relativo ao contexto, como no código existente (ex.: `.hero h1 { font-size: 3.2em; }`).

## 4. Layout e estrutura

- Largura máxima de conteúdo: **1100px** via `.container` / `.wrap` (`margin: 0 auto; padding: 0 24px`). Layouts com sidebar podem usar `1240px`.
- `body` tem `padding-top: 56px` por causa da `.site-nav` fixa. Barras sticky de página ficam em `top: 56px`.
- Toda página principal começa com o padrão **hero** (fundo escuro com gradientes radiais azul/rosa/verde + grid sutil + barra inferior com gradiente `blue → pink → purple → blue`), seguido do conteúdo claro.
- Ordem típica: `<SiteNav />` → `.hero` → seções em `.container` → `<Footer />`.

## 5. Padrões de componente reutilizáveis

- **Hero**: `.hero` com `.hero-eyebrow` (pill uppercase), `.hero h1` (com `<span>` azul para destaque), `.subtitle`/`.sub` e opcional `.badge-row` de `.badge`.
- **Cards**: `.card` / `.feature-card` / `.guide-card` — borda `1px solid var(--line)`, `border-radius: 10px` (16px em guide-card), sombra suave e hover que eleva com `translateY(-1px/-2px/-4px)`.
- **Steps**: `.step` > `.step-header` (com `.step-num` colorido) > `.step-body`.
- **Callouts**: `.callout` nas variantes `.tip` (verde), `.warn` (amarelo/laranja), `.info` (azul), `.important` (vermelho) — sempre com borda esquerda de 4px e ícone.
- **Mockups**: reutilize os prontos — `.terminal` (barra com 3 dots r/y/g), `.ui-mockup`, `.settings-mockup`, `.explorer-mockup`, `.file-mockup`, `.model-list`, `.prompt-example`. Não crie mockups do zero.
- **Divisores/rodapé**: `.section-divider` e `.footer` com o gradiente de marca.

## 6. Interações e movimento

- Transições curtas: `0.2s`, curva `cubic-bezier(0.4, 0, 0.2, 1)` para elementos de UI; `ease`/`ease-in-out` para hover de cards.
- Hover padrão: elevar (`translateY`) + intensificar sombra. `html { scroll-behavior: smooth; }`.
- Superfícies escuras/sticky usam `backdrop-filter: blur(12px)` com `rgba` translúcido.

## 7. Internacionalização (obrigatório)

- Idioma é global via `LanguageContext` ([src/components/LanguageContext.tsx](src/components/LanguageContext.tsx)); use o hook `useLanguage()` (`language` / `setLanguage`), PT como padrão.
- Todo texto visível deve existir em **PT e EN**. Alterne por lógica React (`language === 'en' ? ... : ...`) ou pelas classes utilitárias `.trans-pt` / `.trans-en` (controladas por `body.lang-en` / `body.lang-pt`).
- Nunca adicione texto que exista em apenas um idioma.

## 8. Responsividade

- Mobile-first com breakpoints usados no projeto: `700px`, `768px`, `781px`, `900px`.
- Em telas estreitas: grids viram coluna única (`grid-template-columns: 1fr`), `.site-nav-links` some, hero reduz padding e tamanho de fonte.
- Grids de conteúdo geralmente `1fr 1fr` no desktop; landing usa `.grid-landing`.

## Checklist antes de finalizar

- [ ] Usei apenas tokens/variáveis CSS existentes, sem hex ou fontes novas.
- [ ] Reutilizei classes globais e mockups em vez de recriar.
- [ ] Estrutura hero → container(1100px) → footer respeitada.
- [ ] Cor por estágio (blue/green/purple/orange) consistente.
- [ ] Todo texto disponível em PT **e** EN via `useLanguage`/`.trans-*`.
- [ ] Hover/transições seguem os tempos e curvas padrão.
- [ ] Responsivo nos breakpoints do projeto.
