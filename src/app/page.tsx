import Link from "next/link";
import Image from "next/image";
import { GoogleMark } from "@/components/GoogleMark";
import { AttentionAvatar3D } from "@/components/AttentionAvatar3DClient";
import { HomepageJsonLd } from "@/components/HomepageJsonLd";
import { ReviewScroller } from "@/components/ReviewScroller";
import { buildLiveSite, getSchoolCatalog } from "@/lib/catalog";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const catalog = await getSchoolCatalog();
  const liveSite = buildLiveSite(catalog);
  const { home, site: siteCopy, common } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);
  const { rating, totalReviews, mapsUrl } = site.googleReviews;

  return (
    <>
      <HomepageJsonLd site={liveSite} />

      <section className="hero-section relative overflow-hidden flex items-center">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />
        <div className="relative container-page py-lg md:py-xl z-10 w-full">
          <div className="max-w-prose-lg mx-auto flex flex-col items-center gap-md text-center">
            <h1 className="font-h1 text-h1 text-primary">{siteCopy.tagline}</h1>
            <p className="font-body-lg text-body-lg text-on-surface max-w-prose">
              {siteCopy.description}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-sm bg-surface-container-lowest border border-outline-variant rounded-full px-md py-sm hover:border-secondary-container transition-colors shadow-sm"
              aria-label={t(common.googleReviewsAria, { rating, count: totalReviews })}
            >
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined icon-base rating-star">
                    star
                  </span>
                ))}
              </span>
              <span className="font-h3 text-lead text-primary">{rating}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                ({totalReviews}+ reviews)
              </span>
              <GoogleMark className="text-on-surface-variant" />
            </a>
            <div className="flex flex-col sm:flex-row gap-sm mt-sm justify-center">
              <a href={`tel:${liveSite.phoneTel}`} className="btn-primary pressable">
                {t(common.callNow, { phone: liveSite.phone })}
                <span className="material-symbols-outlined">call</span>
              </a>
              <Link href="/courses" className="btn-outline pressable">
                {common.viewPrograms}
              </Link>
            </div>
            <div className="mt-md flex flex-wrap gap-sm justify-center">
              <span className="pill pill-solid">
                <span className="material-symbols-outlined text-secondary-container icon-base">verified</span>
                {home.certifiedInstructors}
              </span>
              <span className="pill pill-solid">
                <span className="material-symbols-outlined text-secondary-container icon-base">calendar_month</span>
                {home.flexibleScheduling}
              </span>
              <span className="pill pill-solid">
                <span className="material-symbols-outlined text-secondary-container icon-base">assignment_turned_in</span>
                {home.roadTestSponsorship}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-dim">
        <div className="container-page text-center">
          <h2 className="font-h2 text-h2 text-primary mb-sm">
            {t(home.whyChoose, { name: liveSite.name })}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto mb-lg">
            {home.whyChooseDesc}
          </p>
          <div className="grid md:grid-cols-3 gap-md">
            <div className="card-elevated">
              <div className="icon-box mb-md mx-auto">
                <span className="material-symbols-outlined icon-lg icon-filled">verified</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">{home.certifiedInstructors}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {home.certifiedInstructorsDesc}
              </p>
            </div>
            <div className="card-elevated">
              <div className="icon-box mb-md mx-auto">
                <span className="material-symbols-outlined icon-lg icon-filled">calendar_month</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">{home.flexibleScheduling}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {home.flexibleSchedulingDesc}
              </p>
            </div>
            <div className="card-elevated">
              <div className="icon-box mb-md mx-auto">
                <span className="material-symbols-outlined icon-lg icon-filled">assignment_turned_in</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">{home.roadTestSponsorship}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {home.roadTestSponsorshipDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-h2 text-primary mb-sm">
              {home.acceleratedTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
              {home.acceleratedDescPrefix}{" "}
              <Link href="/courses" className="text-secondary-container font-semibold hover:underline">
                {home.drivingPrograms}
              </Link>{" "}
              {home.acceleratedDescJoin}{" "}
              <Link href="/classes" className="text-secondary-container font-semibold hover:underline">
                {home.classSchedule}
              </Link>{" "}
              {home.acceleratedDescSuffix}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-md mb-lg">
            {liveSite.acceleratedCourses.length > 0 ? (
              liveSite.acceleratedCourses.map((course) => (
                <div
                  key={`${course.label}-${course.dates}`}
                  className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant text-center"
                >
                  <h3 className="font-h3 text-h3 text-primary mb-xs">{course.label}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{course.dates}</p>
                </div>
              ))
            ) : (
              <div className="md:col-span-3 rounded-lg border border-outline-variant bg-surface-container-lowest p-md text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {home.acceleratedUnavailable}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-surface-dim">
        <div className="container-page">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{home.roadTestTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
              {home.roadTestDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {liveSite.roadTestLocations.map((location) => (
              <a
                key={location.name}
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-outline-variant elevation-1 lift-on-hover"
                aria-label={t(home.rmvAria, { name: location.name })}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`${location.name} RMV Service Center`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-sm py-md pt-xl">
                    <p className="text-overlay">{location.name}</p>
                    <p className="text-overlay-muted">{location.address}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section bg-surface overflow-hidden">
        <div className="container-page mb-lg">
          <div className="text-center">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{home.reviewsTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
              {t(home.reviewsDesc, { name: liveSite.name })}
            </p>
          </div>
        </div>
        <ReviewScroller />
      </section>

      <section className="section bg-primary overflow-hidden">
        <div className="container-page">
          <div className="grid md:grid-cols-[minmax(220px,280px)_1fr] gap-lg items-center mb-lg">
            <AttentionAvatar3D />
            <div className="text-center md:text-left">
              <span className="badge mb-sm">
                <span className="material-symbols-outlined icon-sm">campaign</span>
                {home.attentionLabel}
              </span>
              <h2 className="font-h2 text-h2 text-on-primary mb-md">
                {home.attentionTitle}
              </h2>
              <div className="space-y-md font-body-md text-body-md text-on-primary-container max-w-prose-xl mx-auto md:mx-0 text-left">
                <p>
                  <strong>{home.attentionGreeting}</strong> {home.attentionP1}
                </p>
                <p>
                  {t(home.attentionP2, { address: liveSite.address.full })}
                </p>
                <p>
                  {t(home.attentionP3, { email: liveSite.email, phone: liveSite.phone })}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-md max-w-prose-xl md:max-w-none mx-auto text-left">
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">{common.officeHours}</h3>
              <p className="font-body-md text-body-md text-on-primary-container">{liveSite.officeHours}</p>
            </div>
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">{common.cancellations}</h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                {t(home.cancellationsDesc, { hours: siteCopy.cancellationHours })}
              </p>
            </div>
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">{common.refundPolicy}</h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                {home.refundDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-dim">
        <div className="container-page">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{home.faqTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
              {home.faqDesc}
            </p>
          </div>
          <div className="max-w-prose-xl mx-auto flex flex-col gap-sm">
            {home.faqs.map((item) => (
              <details key={item.question} className="accordion group">
                <summary className="accordion-summary">
                  {item.question}
                  <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="accordion-body">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link href="/faq" className="btn-link">
              {common.viewAllFaqs}
              <span className="material-symbols-outlined icon-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
