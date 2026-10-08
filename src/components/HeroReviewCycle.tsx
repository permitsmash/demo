"use client";

import { useEffect, useState } from "react";

const ROTATE_MS = 6000;
const BEST_REVIEW_COUNT = 20;

type Review = {
  quote: string;
  name: string;
  rating: number;
};

export function HeroReviewCycle({ reviews }: { reviews: readonly Review[] }) {
  const best = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, BEST_REVIEW_COUNT);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || best.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % best.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, best.length]);

  const review = best[index];
  if (!review) return null;

  return (
    <blockquote
      tabIndex={0}
      className="max-w-prose rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <p
        key={review.quote}
        className="hero-review-in min-h-[3lh] font-body-md text-body-md text-on-primary/80"
      >
        &ldquo;{review.quote}&rdquo;
      </p>
      <footer className="mt-xs font-body-sm text-body-sm text-on-primary/70">
        {review.name}
      </footer>
    </blockquote>
  );
}
