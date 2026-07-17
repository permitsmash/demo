import { site } from "@/lib/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-secondary-container" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[18px]"
          style={{ fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  quote,
  name,
  rating,
}: {
  quote: string;
  name: string;
  rating: number;
}) {
  return (
    <article className="review-card shrink-0 w-[min(100%,340px)] md:w-[380px] bg-surface-container-lowest p-md rounded-lg border border-outline-variant shadow-sm flex flex-col gap-sm">
      <div className="flex items-center justify-between gap-sm">
        <StarRating rating={rating} />
        <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant italic flex-grow line-clamp-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="font-h3 text-[16px] text-primary font-semibold">{name}</div>
    </article>
  );
}

export function ReviewScroller() {
  const { rating, totalReviews, mapsUrl, reviews } = site.googleReviews;
  const loop = [...reviews, ...reviews];

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-sm mb-lg">
        <div className="inline-flex items-center gap-sm bg-surface-container-lowest border border-outline-variant rounded-full px-md py-sm">
          <StarRating rating={Math.round(rating)} />
          <span className="font-h3 text-[18px] text-primary font-semibold">{rating}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            ({totalReviews}+ Google reviews)
          </span>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-xs font-button text-button text-primary hover:text-secondary-container transition-colors"
        >
          Read all on Google
          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
      </div>

      <div className="review-marquee-mask relative overflow-hidden">
        <div className="review-marquee-track flex gap-md w-max py-xs">
          {loop.map((review, index) => (
            <ReviewCard
              key={`${review.name}-${index}`}
              quote={review.quote}
              name={review.name}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
