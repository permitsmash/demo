import Link from "next/link";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

const courseLabels = ["courseAugust", "courseOctober", "courseDecember"] as const;

export default async function Page() {
  const messages = getMessages(await getLocale());
  const { classes: c, home, common, site: siteCopy } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-xl px-md">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-md">
          <div className="flex flex-col gap-xs">
            <h1 className="font-h1 text-h1 text-primary">{c.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[48rem]">
              {c.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-sm mt-sm">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm flex flex-col gap-xs">
              <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                {c.location}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {site.address.full}
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm flex flex-col gap-xs">
              <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                {common.officeHours}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {siteCopy.officeHours}
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm flex flex-col gap-xs">
              <div className="font-label-caps text-label-caps text-secondary-container flex items-center gap-xs uppercase">
                <span className="material-symbols-outlined text-[18px]">groups</span>
                {c.classFormat}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {c.classFormatDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-md py-xl flex flex-col gap-xl">
        <div className="flex flex-col gap-md">
          <div>
            <h2 className="font-h2 text-h2 text-primary mb-sm">{c.upcomingTitle}</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[42rem]">
              {c.upcomingDesc}
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg border border-outline-variant bg-surface-container-lowest">
            <table className="min-w-full text-left text-body-sm font-body-sm">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="py-xs px-sm text-on-surface-variant">{c.session}</th>
                  <th className="py-xs px-sm text-on-surface-variant">{c.dates}</th>
                  <th className="py-xs px-sm text-on-surface-variant text-right">{c.action}</th>
                </tr>
              </thead>
              <tbody>
                {site.acceleratedCourses.map((course, index) => (
                  <tr key={course.label} className="border-t border-outline-variant/60">
                    <td className="py-xs px-sm">
                      {home[courseLabels[index] ?? "courseAugust"]}
                    </td>
                    <td className="py-xs px-sm">{course.dates}</td>
                    <td className="py-xs px-sm text-right">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-sm py-xs rounded-full border border-primary text-primary font-button text-button hover:bg-surface-container transition-colors"
                      >
                        {c.contactOffice}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-primary rounded-xl p-lg text-on-primary">
          <h2 className="font-h2 text-h2 mb-md">{c.attentionTitle}</h2>
          <div className="space-y-md font-body-md text-on-primary-container">
            <p>
              <strong>{home.attentionGreeting}</strong> {c.attentionP1}
            </p>
            <p>
              {c.attentionP2Prefix}{" "}
              <a href={`mailto:${site.email}`} className="underline">{site.email}</a>{" "}
              {c.attentionP2Or}{" "}
              <a href={`tel:${site.phoneTel}`} className="underline">{site.phone}</a>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md border-t border-outline-variant pt-xl">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
            <div className="flex items-center gap-xs mb-xs">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                policy
              </span>
              <h3 className="font-h3 text-h3 text-primary">{common.refundPolicy}</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {c.refundDesc} <strong>{c.roadTestNonRefundable}</strong>
            </p>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
            <div className="flex items-center gap-xs mb-xs">
              <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                support_agent
              </span>
              <h3 className="font-h3 text-h3 text-primary">{c.needHelp}</h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {t(c.needHelpDesc, { phone: site.phone, hours: siteCopy.officeHours })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
