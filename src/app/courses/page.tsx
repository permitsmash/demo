import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import aboutInclass from "@/app/about-inclass.png";
import { CourseOffersJsonLd } from "@/components/CourseOffersJsonLd";
import { LessonFactsList } from "@/components/LessonFactsList";
import { LessonQuantityBuy } from "@/components/LessonQuantityBuy";
import { PageGuide } from "@/components/PageGuide";
import {
  buildAdultPackagesFromCatalog,
  buildLessonsFromCatalog,
  buildTeenPackageFacts,
  buildTeenPackagesFromCatalog,
  getSchoolCatalog,
  type CatalogDisplayPackage,
  type CatalogLessonDisplay,
} from "@/lib/catalog";
import { formatMessage, getMessages } from "@/lib/i18n";
import { buildSeoDescriptions } from "@/lib/seo/descriptions";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const descriptions = buildSeoDescriptions(await getSchoolCatalog());
  return {
    title: "Driving Programs in Waltham, MA",
    description: descriptions.programs,
  };
}

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
      <h3 className="font-h2 text-h2 text-primary">{pkg.title}</h3>
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
  buyTemplate,
  perLessonLabel,
  lessonLabel,
  lessonsLabel,
  decreaseLabel,
  increaseLabel,
}: {
  lesson: CatalogLessonDisplay;
  buyTemplate: string;
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
      <h3 className="font-h2 text-h2 text-primary">{lesson.title}</h3>
      {lesson.description ? (
        <p className="font-body-sm text-body-sm text-on-surface-variant">{lesson.description}</p>
      ) : null}
      <div className="border-t border-outline-variant" />
      <div className="mt-auto pt-md">
        <LessonQuantityBuy
          buyTemplate={buyTemplate}
          lessonName={lesson.title}
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
  const teenPackageFacts = buildTeenPackageFacts(catalog);
  const packageGuideLeads =
    teenPackageFacts.length > 0
      ? { "teen-packages": <LessonFactsList facts={teenPackageFacts} /> }
      : undefined;

  if (!catalog) {
    return (
      <div className="flex flex-col items-center w-full">
        <section className="w-full bg-surface-container-lowest section-padded">
          <div className="container-page text-center">
            <h1 className="font-h1 text-h1 text-primary">{c.title}</h1>
          </div>
        </section>
        <EmptyCatalogMessage message={c.emptyCatalog} />
        <PageGuide title={c.guide.title} sections={c.guide.sections} leads={packageGuideLeads} />
      </div>
    );
  }

  const teenPackages = buildTeenPackagesFromCatalog(catalog);
  const adultPackages = buildAdultPackagesFromCatalog(catalog);
  const lessons = buildLessonsFromCatalog(catalog);
  const hasPrograms = teenPackages.length > 0 || adultPackages.length > 0 || lessons.length > 0;

  return (
    <div className="flex flex-col items-center w-full">
      <CourseOffersJsonLd
        packages={[...catalog.packages, ...catalog.individualLessons]}
        schoolName={catalog.school.name}
        currency={catalog.school.currency}
      />
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
        <section id="drivers-education" className="w-full section scroll-mt-40">
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

            <div id="parents-program" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter scroll-mt-40">
              {teenPackages.map((pkg) => (
                <StandardPackageCard
                  key={pkg.catalogId}
                  pkg={pkg}
                  includesLabel={c.includesLabel}
                  buyLabel={formatMessage(c.buyButton, { name: pkg.title })}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {adultPackages.length > 0 ? (
        <section id="adult-program" className="w-full bg-surface-dim section scroll-mt-40">
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
                  buyLabel={formatMessage(c.bookPackageButton, { name: pkg.title })}
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
                  buyTemplate={c.bookLessonButton}
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

      <PageGuide title={c.guide.title} sections={c.guide.sections} leads={packageGuideLeads} />

      <section className="w-full section">
        <div className="container-page">
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
        </div>
      </section>
    </div>
  );
}
