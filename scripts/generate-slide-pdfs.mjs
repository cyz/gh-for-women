// Gera um PDF dos slides de cada aula (aula-1 … aula-21) em public/downloads/slides/.
// Usa o Chromium já baixado pelo Playwright (não baixa navegador novo).
//
// Uso: com o dev server rodando (npm run dev), execute:
//   node scripts/generate-slide-pdfs.mjs
// Opcional: BASE_URL=http://localhost:3000 node scripts/generate-slide-pdfs.mjs

import { chromium } from 'playwright-core';
import { mkdir, access } from 'node:fs/promises';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CACHE = path.join(homedir(), 'Library/Caches/ms-playwright');
const CANDIDATES = [
  path.join(CACHE, 'chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
  path.join(CACHE, 'chromium-1228/chrome-mac/Chromium.app/Contents/MacOS/Chromium'),
];

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const OUT = path.join(ROOT, 'public/downloads/slides');
const TOTAL = 21;

async function firstExisting(paths) {
  for (const p of paths) {
    try {
      await access(p);
      return p;
    } catch {
      /* segue procurando */
    }
  }
  return null;
}

async function run() {
  const executablePath = await firstExisting(CANDIDATES);
  if (!executablePath) {
    console.error('Chromium do Playwright não encontrado. Rode: npx playwright install chromium');
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  for (let n = 1; n <= TOTAL; n++) {
    const url = `${BASE}/git-github/aula-${n}`;
    await page.goto(url, { waitUntil: 'networkidle' });

    // Mostra todos os passos de revelação e remove as dicas de navegação ("Avance →").
    await page.evaluate(() => {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'));
      document.querySelectorAll('.hint').forEach((el) => {
        const t = (el.textContent || '').trim().toLowerCase();
        if (t.startsWith('avance') || t.startsWith('use as setas')) el.remove();
      });
    });

    await page.pdf({
      path: path.join(OUT, `aula-${n}.pdf`),
      width: '1280px',
      height: '800px',
      printBackground: true,
    });
    console.log(`✓ aula-${n}.pdf`);
  }

  await browser.close();
  console.log(`\nPDFs gerados em ${OUT}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
