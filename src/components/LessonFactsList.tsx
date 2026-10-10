import type { CatalogLessonFact } from "@/lib/catalog";

export function LessonFactsList({ facts }: { facts: readonly CatalogLessonFact[] }) {
  if (facts.length === 0) return null;

  return (
    <ul className="flex flex-col gap-md">
      {facts.map((fact) => (
        <li key={fact.id} className="flex flex-col gap-xs">
          <p className="font-body-md text-body-md text-primary">
            {fact.name}
            <span className="text-on-surface-variant"> · {fact.priceLabel}</span>
          </p>
          {fact.details.map((detail) => (
            <p key={detail} className="font-body-md text-body-md text-on-surface-variant">
              {detail}
            </p>
          ))}
        </li>
      ))}
    </ul>
  );
}
