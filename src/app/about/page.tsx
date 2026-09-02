import Link from "next/link";
import Image from "next/image";
import aboutInclass from "@/app/about-inclass.png";
import { buildLiveSite, getSchoolCatalog } from "@/lib/catalog";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const catalog = await getSchoolCatalog();
  const liveSite = buildLiveSite(catalog);
  const { about, site: siteCopy, common, home } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);

  return (
    <>
      <section className="relative bg-primary overflow-hidden section-padded">
        <div className="container-page flex flex-col md:flex-row items-center gap-lg">
          <div className="flex-1 text-on-primary z-10">
            <h1 className="font-h1 text-h1 mb-md">{t(about.title, { name: liveSite.name })}</h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-lg">
              {about.heroDesc}
            </p>
            <a href={`tel:${liveSite.phoneTel}`} className="btn-primary">
              {t(common.callNow, { phone: liveSite.phone })}
            </a>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden elevation-3 relative">
              <Image
                alt={t(about.heroAlt, { name: liveSite.name })}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={aboutInclass}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full section">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-7">
              <h2 className="font-h2 text-h2 mb-md">{about.missionTitle}</h2>
              <div className="space-y-md text-on-surface-variant font-body-md">
                <p>
                  {t(about.missionP1, { name: liveSite.name, serviceArea: siteCopy.serviceArea })}
                </p>
                <p>{about.missionP2}</p>
                <p>
                  {about.missionP3Prefix}{" "}
                  <a href={`tel:${liveSite.phoneTel}`} className="text-primary font-semibold hover:underline">
                    {liveSite.phone}
                  </a>{" "}
                  {about.missionP3Or}{" "}
                  <a href={`mailto:${liveSite.email}`} className="text-primary font-semibold hover:underline">
                    {liveSite.email}
                  </a>{" "}
                  {about.missionP3Suffix}
                </p>
              </div>
            </div>
            <div className="md:col-span-5 bg-surface-container rounded-xl p-lg border border-outline-variant">
              <h3 className="font-h3 text-h3 mb-sm text-primary">{about.officeInfo}</h3>
              <ul className="space-y-sm font-body-md text-on-surface-variant">
                <li>
                  <span className="font-semibold text-primary">{common.address}:</span> {liveSite.address.full}
                </li>
                <li>
                  <span className="font-semibold text-primary">{common.phone}:</span>{" "}
                  <a href={`tel:${liveSite.phoneTel}`} className="hover:underline">{liveSite.phone}</a>
                </li>
                <li>
                  <span className="font-semibold text-primary">{common.email}:</span>{" "}
                  <a href={`mailto:${liveSite.email}`} className="hover:underline">{liveSite.email}</a>
                </li>
                <li>
                  <span className="font-semibold text-primary">{common.hours}:</span> {liveSite.officeHours}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low section">
        <div className="container-page">
          <div className="text-center mb-xl">
            <h2 className="font-h2 text-h2 mb-sm text-primary">
              {t(about.differenceTitle, { name: liveSite.name })}
            </h2>
            <p className="text-on-surface-variant max-w-prose mx-auto">
              {about.differenceDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="card-hover group">
              <div className="icon-box-lg mb-md group-hover:bg-secondary-container">
                <span className="material-symbols-outlined icon-xl">verified</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">{home.certifiedInstructors}</h3>
              <p className="text-on-surface-variant font-body-md">
                {about.certifiedInstructorsDesc}
              </p>
            </div>
            <div className="card-hover group">
              <div className="icon-box-lg mb-md group-hover:bg-secondary-container">
                <span className="material-symbols-outlined icon-xl">calendar_month</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">{home.flexibleScheduling}</h3>
              <p className="text-on-surface-variant font-body-md">
                {about.flexibleSchedulingDesc}
              </p>
            </div>
            <div className="card-hover group">
              <div className="icon-box-lg mb-md group-hover:bg-secondary-container">
                <span className="material-symbols-outlined icon-xl">assignment_turned_in</span>
              </div>
              <h3 className="font-h3 text-h3 mb-sm">{home.roadTestSponsorship}</h3>
              <p className="text-on-surface-variant font-body-md">
                {about.roadTestDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full section mb-xl">
        <div className="container-page">
          <div className="bg-primary-container rounded-3xl p-xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary-container/10"></div>
            <div className="relative z-10">
              <h2 className="font-h2 text-h2 text-on-primary mb-md">{about.ctaTitle}</h2>
              <p className="text-on-primary-container font-body-lg text-body-lg mb-lg max-w-prose-md mx-auto">
                {about.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-md">
                <Link href="/courses" className="btn-primary">
                  {common.enrollNow}
                </Link>
                <Link href="/courses" className="btn-outline-inverse">
                  {common.viewPrograms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
