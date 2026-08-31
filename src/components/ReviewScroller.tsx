import { GoogleMark } from "@/components/GoogleMark";
import { site } from "@/lib/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined icon-base ${
            i < rating ? "rating-star" : "rating-star-outline"
          }`}
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
        <GoogleMark className="text-on-surface-variant" />
      </div>
      <p className="text-body-md text-on-surface-variant italic flex-grow line-clamp-5">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="text-lead text-primary">{name}</div>
    </article>
  );
}

export function ReviewScroller() {
  const { rating, totalReviews, mapsUrl, reviews } = site.googleReviews;
  const loop = [...reviews, ...reviews];

  return (
    <div className="container-page">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-sm mb-lg">
        <div className="inline-flex items-center gap-sm bg-surface-container-lowest border border-outline-variant rounded-full px-md py-sm">
          <StarRating rating={Math.round(rating)} />
          <span className="text-lead text-primary">{rating}</span>
          <span className="text-body-sm text-on-surface-variant">
            ({totalReviews}+ Google reviews)
          </span>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-xs font-button text-button text-secondary-container hover:text-secondary transition-colors"
        >
          <span>Read all on</span>
          <GoogleMark className="text-on-surface-variant" />
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
