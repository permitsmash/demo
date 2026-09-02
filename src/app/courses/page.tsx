import Image from "next/image";
import Link from "next/link";
import aboutInclass from "@/app/about-inclass.png";
import { LessonQuantityBuy } from "@/components/LessonQuantityBuy";
import {
  buildAdultPackagesFromCatalog,
  buildLessonsFromCatalog,
  buildTeenPackagesFromCatalog,
  getSchoolCatalog,
  type CatalogDisplayPackage,
  type CatalogLessonDisplay,
} from "@/lib/catalog";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

const DEFAULT_MIN_LESSONS = 1;
const DEFAULT_MAX_LESSONS = 10;

function enrollHref(catalogId: string) {
  return `/enroll?package=${encodeURIComponent(catalogId)}`;
}

function BuyButton({ label, catalogId }: { label: string; catalogId: string }) {
  return (
    <Link href={enrollHref(catalogId)} className="btn-primary w-full sm:w-auto">
      {label}
    </Link>
  );
}

function IncludesList({
  label,
  items,
  columns = 1,
}: {
  label: string;
  items: readonly string[];
  columns?: 1 | 2;
}) {
  return (
    <div>
      <p className="font-label-caps text-label-caps text-secondary-container uppercase mb-sm">
        {label}
      </p>
      <ul
        className={`space-y-xs font-body-md text-body-md text-on-surface-variant ${
          columns === 2 ? "sm:columns-2 sm:gap-gutter" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-xs break-inside-avoid mb-xs">
            <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5 shrink-0">
              check_circle
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function StandardPackageCard({
  pkg,
  includesLabel,
  buyLabel,
}: {
  pkg: CatalogDisplayPackage;
  includesLabel: string;
  buyLabel: string;
}) {
  return (
    <div className="card-hover flex h-full flex-col gap-md">
      <div className="font-price text-price text-primary">{pkg.price}</div>
      <h2 className="font-h2 text-h2 text-primary">{pkg.title}</h2>
      {pkg.description ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant">{pkg.description}</p>
      ) : null}
      {pkg.includes.length > 0 ? (
        <>
          <div className="border-t border-outline-variant" />
          <IncludesList label={includesLabel} items={pkg.includes} />
        </>
      ) : null}
      <div className="mt-auto pt-md">
        <BuyButton label={buyLabel} catalogId={pkg.catalogId} />
      </div>
    </div>
  );
}

function LessonCard({
  lesson,
  buyLabel,
  perLessonLabel,
  lessonLabel,
  lessonsLabel,
  decreaseLabel,
  increaseLabel,
}: {
  lesson: CatalogLessonDisplay;
  buyLabel: string;
  perLessonLabel: string;
  lessonLabel: string;
  lessonsLabel: string;
  decreaseLabel: string;
  increaseLabel: string;
}) {
  return (
    <div className="card-hover flex h-full flex-col gap-md">
      <div>
        <div className="font-price text-price text-primary">{lesson.priceLabel}</div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">{perLessonLabel}</div>
      </div>
      <h2 className="font-h2 text-h2 text-primary">{lesson.title}</h2>
      {lesson.description ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant">{lesson.description}</p>
      ) : null}
      <div className="border-t border-outline-variant" />
      <div className="mt-auto pt-md">
        <LessonQuantityBuy
          buyLabel={buyLabel}
          pricePerLesson={lesson.pricePerLesson}
          minLessons={DEFAULT_MIN_LESSONS}
          maxLessons={DEFAULT_MAX_LESSONS}
          productId={lesson.catalogId}
          lessonLabel={lessonLabel}
          lessonsLabel={lessonsLabel}
          decreaseLabel={decreaseLabel}
          increaseLabel={increaseLabel}
        />
      </div>
    </div>
  );
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="max-w-prose">
      <h2 className="font-h2 text-h2 text-primary mb-sm">{title}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
    </div>
  );
}

function EmptyCatalogMessage({ message }: { message: string }) {
  return (
    <div className="container-page section">
      <p className="font-body-lg text-body-lg text-on-surface-variant rounded-lg border border-outline-variant bg-surface-container-low px-lg py-md">
        {message}
      </p>
    </div>
  );
}

export default async function Page() {
  const messages = getMessages(await getLocale());
  const catalog = await getSchoolCatalog();
  const c = messages.courses;

  if (!catalog) {
    return (
      <div className="flex flex-col items-center w-full">
        <section className="w-full bg-surface-container-lowest section-padded">
          <div className="container-page text-center">
            <h1 className="font-h1 text-h1 text-primary">{c.title}</h1>
          </div>
        </section>
        <EmptyCatalogMessage message={c.emptyCatalog} />
      </div>
    );
  }

  const teenPackages = buildTeenPackagesFromCatalog(catalog);
  const adultPackages = buildAdultPackagesFromCatalog(catalog);
  const lessons = buildLessonsFromCatalog(catalog);
  const hasPrograms = teenPackages.length > 0 || adultPackages.length > 0 || lessons.length > 0;

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative w-full bg-surface-container-lowest overflow-hidden section-padded">
        <div className="relative container-page text-center flex flex-col items-center gap-md">
          <h1 className="font-h1 text-h1 text-primary">{c.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {!hasPrograms ? <EmptyCatalogMessage message={c.emptyCatalog} /> : null}

      {teenPackages.length > 0 ? (
        <section className="w-full section">
          <div className="container-page flex flex-col gap-xl">
            <div className="grid gap-lg md:grid-cols-2 md:items-center">
              <SectionHeader
                title={c.sections.teenDriverEd.title}
                description={c.sections.teenDriverEd.description}
              />
              <div className="relative h-[220px] md:h-[260px] w-full overflow-hidden rounded-xl border border-outline-variant elevation-2">
                <Image
                  src={aboutInclass}
                  alt={c.sections.teenDriverEd.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {teenPackages.map((pkg) => (
                <StandardPackageCard
                  key={pkg.catalogId}
                  pkg={pkg}
                  includesLabel={c.includesLabel}
                  buyLabel={c.buyButton}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {adultPackages.length > 0 ? (
        <section className="w-full bg-surface-dim section">
          <div className="container-page flex flex-col gap-xl">
            <SectionHeader
              title={c.sections.adultDrivers.title}
              description={c.sections.adultDrivers.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {adultPackages.map((pkg) => (
                <StandardPackageCard
                  key={pkg.catalogId}
                  pkg={pkg}
                  includesLabel={c.includesLabel}
                  buyLabel={c.buyButton}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {lessons.length > 0 ? (
        <section className={`w-full section ${adultPackages.length === 0 ? "bg-surface-dim" : ""}`}>
          <div className="container-page flex flex-col gap-xl">
            <SectionHeader
              title={c.sections.individualLessons.title}
              description={c.sections.individualLessons.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.catalogId}
                  lesson={lesson}
                  buyLabel={c.buyButton}
                  perLessonLabel={c.perLesson}
                  lessonLabel={c.lessonLabel}
                  lessonsLabel={c.lessonsLabel}
                  decreaseLabel={c.decreaseQuantity}
                  increaseLabel={c.increaseQuantity}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="w-full container-page pb-xl">
        <div className="flex flex-col gap-sm rounded-lg border border-outline-variant bg-surface-container-low px-lg py-md max-w-content-narrow mx-auto">
          <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs">
            <span className="material-symbols-outlined text-secondary-container icon-sm icon-filled mt-0.5 shrink-0">
              info
            </span>
            {c.disclaimerPermit}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs">
            <span className="material-symbols-outlined text-secondary-container icon-sm icon-filled mt-0.5 shrink-0">
              location_on
            </span>
            {c.disclaimerLocation}
          </p>
        </div>
      </section>
    </div>
  );
}
