import Link from "next/link";
import Image from "next/image";
import aboutInclass from "@/app/about-inclass.png";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const { about, site: siteCopy, common, home } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);

  return (
    <>
      <section className="relative bg-primary overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-md py-xl flex flex-col md:flex-row items-center gap-lg">
          <div className="flex-1 text-on-primary z-10">
            <span className="text-label-caps font-label-caps text-secondary-fixed uppercase tracking-widest mb-sm block">
              {siteCopy.serviceArea}
            </span>
            <h1 className="font-h1 text-h1 mb-md">{t(about.title, { name: site.name })}</h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-lg">
              {about.heroDesc}
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex bg-secondary-container text-on-secondary-container px-lg py-md rounded-lg font-button text-button hover:opacity-90 active:scale-95 transition-all"
            >
              {t(common.callNow, { phone: site.phone })}
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                alt={t(about.heroAlt, { name: site.name })}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={aboutInclass}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-md py-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-7">
            <h2 className="font-h2 text-h2 mb-md">{about.missionTitle}</h2>
            <div className="space-y-md text-on-surface-variant font-body-md">
              <p>
                {t(about.missionP1, { name: site.name, serviceArea: siteCopy.serviceArea })}
              </p>
              <p>{about.missionP2}</p>
              <p>
                {about.missionP3Prefix}{" "}
                <a href={`tel:${site.phoneTel}`} className="text-primary font-semibold hover:underline">
                  {site.phone}
                </a>{" "}
                {about.missionP3Or}{" "}
                <a href={`mailto:${site.email}`} className="text-primary font-semibold hover:underline">
                  {site.email}
                </a>{" "}
                {about.missionP3Suffix}
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-surface-container rounded-xl p-lg border border-outline-variant">
            <h3 className="font-h3 text-h3 mb-sm text-primary">{about.officeInfo}</h3>
            <ul className="space-y-sm font-body-md text-on-surface-variant">
              <li>
                <span className="font-semibold text-primary">{common.address}:</span> {site.address.full}
              </li>
              <li>
                <span className="font-semibold text-primary">{common.phone}:</span>{" "}
                <a href={`tel:${site.phoneTel}`} className="hover:underline">{site.phone}</a>
              </li>
              <li>
                <span className="font-semibold text-primary">{common.email}:</span>{" "}
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
              </li>
              <li>
                <span className="font-semibold text-primary">{common.hours}:</span> {siteCopy.officeHours}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-xl">
        <div className="max-w-[1200px] mx-auto px-md">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-h2 mb-sm text-primary">
              {t(about.differenceTitle, { name: site.name })}
            </h2>
            <p className="text-on-surface-variant max-w-[42rem] mx-auto">
              {about.differenceDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[32px]">verified</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">{home.certifiedInstructors}</h3>
              <p className="text-on-surface-variant font-body-md">
                {about.certifiedInstructorsDesc}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[32px]">calendar_month</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">{home.flexibleScheduling}</h3>
              <p className="text-on-surface-variant font-body-md">
                {about.flexibleSchedulingDesc}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-primary text-on-primary rounded-lg flex items-center justify-center mb-md group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-[32px]">assignment_turned_in</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">{home.roadTestSponsorship}</h3>
              <p className="text-on-surface-variant font-body-md">
                {about.roadTestDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-md py-xl mb-xl">
        <div className="bg-primary-container rounded-3xl p-xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary-container/10"></div>
          <div className="relative z-10">
            <h2 className="font-h2 text-h2 text-on-primary mb-md">{about.ctaTitle}</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-lg max-w-[36rem] mx-auto">
              {about.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <Link
                href="/sign-up"
                className="inline-flex justify-center bg-secondary-container text-on-secondary-container px-xl py-md rounded-lg font-button text-button hover:opacity-90 active:scale-95 transition-all"
              >
                {common.enrollNow}
              </Link>
              <Link
                href="/courses"
                className="inline-flex justify-center bg-transparent border border-on-primary text-on-primary px-xl py-md rounded-lg font-button text-button hover:bg-on-primary/10 transition-all"
              >
                {common.viewPrograms}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
