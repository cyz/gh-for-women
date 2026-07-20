import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Footer from '@/components/Footer';
import SiteNav from '@/components/SiteNav';
import { getGuide, getGuideSlugFromHref, guides } from '@/data/guides';
import './guide.css';

interface GuidePageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = getGuide(params.slug);

  return {
    title: guide ? `${guide.title} | GitHub for Women` : 'Guia | GitHub for Women',
    description: guide?.desc,
  };
}

const markdownComponents: Components = {
  a({ href = '', children, ...props }) {
    const guideSlug = getGuideSlugFromHref(href);

    if (guideSlug) {
      return <Link href={`/guias/${guideSlug}`}>{children}</Link>;
    }

    return <a href={href} {...props}>{children}</a>;
  },
};

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = getGuide(params.slug);

  if (!guide) notFound();

  const markdownPath = path.join(process.cwd(), 'public', 'downloads', guide.fileName);
  const markdown = await fs.readFile(markdownPath, 'utf8');

  return (
    <>
      <SiteNav />

      <header className="hero guide-hero">
        <div className="hero-eyebrow">
          <span className="trans-pt">Guia de leitura</span>
          <span className="trans-en">Reading guide</span>
        </div>
        <p className="guide-hero-label">{guide.relatedLessons}</p>
      </header>

      <main className="guide-shell">
        <nav className="guide-toolbar" aria-label="Ações do guia">
          <Link href="/" className="guide-back">
            <span aria-hidden="true">←</span>
            <span className="trans-pt">Voltar para a página principal</span>
            <span className="trans-en">Back to the home page</span>
          </Link>
          <a className="guide-download" href={`/downloads/${guide.fileName}`} download>
            <span aria-hidden="true">↓</span>
            <span className="trans-pt">Baixar Markdown</span>
            <span className="trans-en">Download Markdown</span>
          </a>
        </nav>

        <article className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {markdown}
          </ReactMarkdown>
        </article>

        <Link href="/" className="guide-bottom-back">
          <span aria-hidden="true">←</span>
          <span className="trans-pt">Voltar para a página principal</span>
          <span className="trans-en">Back to the home page</span>
        </Link>
      </main>

      <Footer />
    </>
  );
}