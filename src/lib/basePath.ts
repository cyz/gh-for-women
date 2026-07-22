// Base path used when the site is deployed under a sub-path (e.g. GitHub Pages
// at username.github.io/gh-for-women). It is provided at build time via the
// NEXT_PUBLIC_BASE_PATH env variable (see next.config.mjs and the deploy workflow).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Prefix a public asset path (e.g. /downloads/foo.md) with the base path so that
// raw <a href>/<img src> references resolve correctly under a sub-path. Next.js
// <Link> and <Image> do this automatically, but plain anchors do not.
export const asset = (path: string) => `${basePath}${path}`;
