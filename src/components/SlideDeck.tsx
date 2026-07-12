'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export interface DeckSlide {
  /** Unique id used as key and DOM id */
  id: string;
  /** Number of click-to-reveal steps inside this slide (0 = static slide) */
  steps?: number;
  /** Short label shown in the counter / used for accessibility */
  label?: string;
  /** Render function receiving the current reveal step (0..steps) */
  render: (step: number) => React.ReactNode;
}

interface SlideDeckProps {
  slides: DeckSlide[];
  /** Href for the floating "back" button (defaults to the hub root) */
  backHref?: string;
  backLabel?: string;
  /** Small kicker shown next to the counter (e.g. "Aula 1 · Git") */
  kicker?: string;
}

/**
 * Reusable slide-deck shell for the Git & GitHub curriculum.
 * Handles keyboard, touch, click, dots, arrows and per-slide reveal steps.
 * Content is supplied per lesson via the `slides` array so the exact same
 * navigation UX is shared across all 16 lessons.
 */
export default function SlideDeck({ slides, backHref = '/git-github', backLabel = 'Todas as aulas', kicker }: SlideDeckProps) {
  const total = slides.length;
  const [index, setIndex] = useState(0); // 0-based slide index
  const [step, setStep] = useState(0); // reveal step within current slide

  const currentSteps = slides[index]?.steps ?? 0;

  const goTo = useCallback(
    (n: number, atStep: 'start' | 'end' = 'start') => {
      if (n < 0 || n > total - 1) return;
      setIndex(n);
      setStep(atStep === 'end' ? slides[n]?.steps ?? 0 : 0);
    },
    [total, slides]
  );

  const advance = useCallback(() => {
    if (step < currentSteps) {
      setStep((s) => s + 1);
    } else if (index < total - 1) {
      goTo(index + 1, 'start');
    }
  }, [step, currentSteps, index, total, goTo]);

  const retreat = useCallback(() => {
    if (step > 0) {
      setStep((s) => s - 1);
    } else if (index > 0) {
      goTo(index - 1, 'end');
    }
  }, [step, index, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        advance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        retreat();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(0, 'start');
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(total - 1, 'end');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [advance, retreat, goTo, total]);

  // Touch navigation
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) advance();
      else retreat();
    }
  };

  const atStart = index === 0 && step === 0;
  const atEnd = index === total - 1 && step === currentSteps;

  return (
    <div className="deck-shell" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <Link href={backHref} className="deck-back">
        <span aria-hidden="true">☰</span>
        <span>{backLabel}</span>
      </Link>

      <div className="deck-stage" onClick={advance}>
        {slides.map((slide, i) => (
          <section
            key={slide.id}
            id={slide.id}
            className={`deck-slide ${i === index ? 'active' : ''}`}
            aria-hidden={i !== index}
          >
            {/* Stop click propagation on inner content so text/cards are selectable */}
            <div className="deck-slide-inner" onClick={(e) => e.stopPropagation()}>
              {slide.render(i === index ? step : 0)}
            </div>
          </section>
        ))}
      </div>

      <button
        className={`deck-nav-prev ${atStart ? 'hidden' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          retreat();
        }}
        aria-label="Anterior"
      >
        &#8249;
      </button>
      <button
        className={`deck-nav-next ${atEnd ? 'hidden' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          advance();
        }}
        aria-label="Próximo"
      >
        &#8250;
      </button>

      <div className="deck-dots" onClick={(e) => e.stopPropagation()}>
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`deck-dot ${i === index ? 'active' : ''}`}
            onClick={() => goTo(i, 'start')}
            aria-label={`Ir para o slide ${i + 1}${slide.label ? `: ${slide.label}` : ''}`}
          />
        ))}
      </div>

      <div className="deck-counter">
        {kicker && <span className="deck-counter-kicker">{kicker}</span>}
        <span>
          {index + 1} / {total}
        </span>
        {currentSteps > 0 && (
          <span className="deck-counter-step">
            revele {step}/{currentSteps}
          </span>
        )}
      </div>
    </div>
  );
}
