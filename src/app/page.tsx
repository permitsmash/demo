import Link from "next/link";
import Image from "next/image";
import heroDriving from "@/app/hero-driving.jpg";
import { AttentionAvatar3D } from "@/components/AttentionAvatar3DClient";
import { HomepageJsonLd } from "@/components/HomepageJsonLd";
import { ReviewScroller } from "@/components/ReviewScroller";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

const courseLabels = ["courseAugust", "courseOctober", "courseDecember"] as const;

export default async function Page() {
  const messages = getMessages(await getLocale());
  const { home, site: siteCopy, common } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);
  const { rating, totalReviews, mapsUrl } = site.googleReviews;

  return (
    <>
      <HomepageJsonLd />

      <section className="relative bg-surface-container-lowest overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-md py-xl md:py-[120px] grid md:grid-cols-2 gap-lg items-center min-h-[600px]">
          <div className="order-2 md:order-1 z-10 flex flex-col gap-md">
            <span className="text-label-caps font-label-caps text-secondary-container uppercase tracking-widest">
              {siteCopy.serviceArea}
            </span>
            <h1 className="font-h1 text-h1 text-primary">{siteCopy.tagline}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem]">
              {siteCopy.description}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-sm self-start bg-surface-container-lowest border border-outline-variant rounded-full px-md py-sm hover:border-secondary-container transition-colors"
              aria-label={t(common.googleReviewsAria, { rating, count: totalReviews })}
            >
              <span className="flex text-secondary-container">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </span>
              <span className="font-h3 text-[16px] text-primary font-semibold">{rating}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {t(common.googleReviews, { count: totalReviews })}
              </span>
            </a>
            <div className="flex flex-col sm:flex-row gap-sm mt-sm">
              <a
                href={`tel:${site.phoneTel}`}
                className="bg-secondary-container text-on-secondary-container font-button text-button px-lg py-md rounded hover:bg-secondary transition-colors active:scale-95 shadow-sm inline-flex items-center justify-center gap-xs"
              >
                {t(common.callNow, { phone: site.phone })}
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  call
                </span>
              </a>
              <Link
                href="/courses"
                className="border-2 border-primary text-primary bg-transparent font-button text-button px-lg py-md rounded hover:bg-primary hover:text-on-primary transition-colors active:scale-95 inline-flex items-center justify-center"
              >
                {common.viewPrograms}
              </Link>
            </div>
            <div className="mt-md flex flex-wrap gap-sm">
              <span className="inline-flex items-center gap-xs bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant rounded-full px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">verified</span>
                {home.certifiedInstructors}
              </span>
              <span className="inline-flex items-center gap-xs bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant rounded-full px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">calendar_month</span>
                {home.flexibleScheduling}
              </span>
              <span className="inline-flex items-center gap-xs bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant rounded-full px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">assignment_turned_in</span>
                {home.roadTestSponsorship}
              </span>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] md:h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest/60 border border-outline-variant">
            <Image
              src={heroDriving}
              alt={t(home.heroAlt, { name: site.name })}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-xl">
        <div className="max-w-[1200px] mx-auto px-md text-center">
          <h2 className="font-h2 text-h2 text-primary mb-sm">
            {t(home.whyChoose, { name: site.name })}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto mb-lg">
            {home.whyChooseDesc}
          </p>
          <div className="grid md:grid-cols-3 gap-md">
            <div className="p-md rounded-lg border border-outline-variant bg-surface">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary mb-md mx-auto">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">{home.certifiedInstructors}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {home.certifiedInstructorsDesc}
              </p>
            </div>
            <div className="p-md rounded-lg border border-outline-variant bg-surface">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary mb-md mx-auto">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">{home.flexibleScheduling}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {home.flexibleSchedulingDesc}
              </p>
            </div>
            <div className="p-md rounded-lg border border-outline-variant bg-surface">
              <div className="w-12 h-12 rounded bg-primary-fixed flex items-center justify-center text-primary mb-md mx-auto">
                <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_turned_in</span>
              </div>
              <h3 className="font-h3 text-h3 text-primary mb-xs">{home.roadTestSponsorship}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {home.roadTestSponsorshipDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-lg">
            <span className="text-label-caps font-label-caps text-secondary-container uppercase tracking-widest">
              {home.programsLabel}
            </span>
            <h2 className="font-h2 text-h2 text-primary mb-sm mt-sm">
              {home.acceleratedTitle}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
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
            {site.acceleratedCourses.map((course, index) => (
              <div
                key={course.label}
                className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant text-center"
              >
                <h3 className="font-h3 text-h3 text-primary mb-xs">
                  {home[courseLabels[index] ?? "courseAugust"]}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{course.dates}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-sm">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-lg py-md rounded hover:bg-inverse-surface transition-colors"
            >
              {t(common.callNow, { phone: site.phone })}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-primary text-primary font-button text-button px-lg py-md rounded hover:bg-surface-dim transition-colors"
            >
              {home.contactOffice}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{home.roadTestTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
              {home.roadTestDesc}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {site.roadTestLocations.map((location) => (
              <a
                key={location.name}
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden border border-outline-variant bg-surface shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
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
                    <p className="font-h3 text-[16px] text-white">{location.name}</p>
                    <p className="font-body-sm text-[12px] text-white/80 leading-snug mt-xs">
                      {location.address}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-surface py-xl overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-md mb-lg">
          <div className="text-center">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{home.reviewsTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
              {t(home.reviewsDesc, { name: site.name })}
            </p>
          </div>
        </div>
        <ReviewScroller />
      </section>

      <section className="bg-primary py-xl overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="grid md:grid-cols-[minmax(220px,280px)_1fr] gap-lg items-center mb-lg">
            <AttentionAvatar3D />
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-xs bg-secondary-container text-on-secondary-container font-label-caps text-label-caps uppercase tracking-widest px-md py-xs rounded-full mb-sm">
                <span className="material-symbols-outlined text-[16px]">campaign</span>
                {home.attentionLabel}
              </span>
              <h2 className="font-h2 text-h2 text-on-primary mb-md">
                {home.attentionTitle}
              </h2>
              <div className="space-y-md font-body-md text-body-md text-on-primary-container max-w-[48rem] mx-auto md:mx-0 text-left">
                <p>
                  <strong>{home.attentionGreeting}</strong> {home.attentionP1}
                </p>
                <p>
                  {t(home.attentionP2, { address: site.address.full })}
                </p>
                <p>
                  {t(home.attentionP3, { email: site.email, phone: site.phone })}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-md max-w-[48rem] md:max-w-none mx-auto text-left">
            <div className="bg-on-primary/10 rounded-lg p-md border border-on-primary/20">
              <h3 className="font-h3 text-h3 text-on-primary mb-xs">{common.officeHours}</h3>
              <p className="font-body-md text-body-md text-on-primary-container">{siteCopy.officeHours}</p>
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
          <div className="flex flex-col sm:flex-row justify-center gap-sm mt-lg">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container font-button text-button px-lg py-md rounded hover:bg-secondary transition-colors"
            >
              {common.viewPrograms}
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center border-2 border-on-primary text-on-primary font-button text-button px-lg py-md rounded hover:bg-on-primary/10 transition-colors"
            >
              {t(common.callNow, { phone: site.phone })}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface-dim py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-lg">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{home.faqTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
              {home.faqDesc}
            </p>
          </div>
          <div className="max-w-[48rem] mx-auto flex flex-col gap-sm">
            {home.faqs.map((item) => (
              <details
                key={item.question}
                className="group bg-surface border border-outline-variant rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="font-h3 text-[18px] text-on-surface p-md cursor-pointer flex justify-between items-center gap-md hover:bg-surface-container-low transition-colors">
                  {item.question}
                  <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200 shrink-0">
                    expand_more
                  </span>
                </summary>
                <div className="px-md pb-md pt-0 font-body-md text-body-md text-on-surface-variant border-t border-outline-variant">
                  <p className="pt-md">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link
              href="/faq"
              className="inline-flex items-center gap-xs font-button text-button text-secondary-container hover:text-secondary transition-colors"
            >
              {common.viewAllFaqs}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
