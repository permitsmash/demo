"use client";

import Link from "next/link";
import { useState } from "react";

type LessonQuantityBuyProps = {
  buyLabel: string;
  pricePerLesson: number;
  minLessons: number;
  maxLessons: number;
  productId: string;
  lessonLabel: string;
  lessonsLabel: string;
  decreaseLabel: string;
  increaseLabel: string;
};

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function LessonQuantityBuy({
  buyLabel,
  pricePerLesson,
  minLessons,
  maxLessons,
  productId,
  lessonLabel,
  lessonsLabel,
  decreaseLabel,
  increaseLabel,
}: LessonQuantityBuyProps) {
  const [quantity, setQuantity] = useState(minLessons);
  const total = quantity * pricePerLesson;
  const unitLabel = quantity === 1 ? lessonLabel : lessonsLabel;

  return (
    <div className="flex flex-col gap-sm">
      <div className="flex flex-wrap items-center gap-sm">
        <div className="inline-flex items-center rounded border border-outline-variant bg-surface-container-lowest">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-primary hover:bg-surface-container-low disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={decreaseLabel}
            disabled={quantity <= minLessons}
            onClick={() => setQuantity((current) => Math.max(minLessons, current - 1))}
          >
            <span className="material-symbols-outlined icon-base">remove</span>
          </button>
          <span className="min-w-[3rem] text-center font-h3 text-h3 text-primary tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-primary hover:bg-surface-container-low disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={increaseLabel}
            disabled={quantity >= maxLessons}
            onClick={() => setQuantity((current) => Math.min(maxLessons, current + 1))}
          >
            <span className="material-symbols-outlined icon-base">add</span>
          </button>
        </div>
        <div className="text-body-md text-on-surface-variant">
          {quantity} {unitLabel} · <span className="font-semibold text-primary">{formatPrice(total)}</span>
        </div>
      </div>
      <Link
        href={`/enroll?product=${productId}&quantity=${quantity}`}
        className="btn-primary w-full sm:w-auto self-start"
      >
        {buyLabel}
      </Link>
    </div>
  );
}
