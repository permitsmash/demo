import type { Metadata } from "next";
import { FaqCategoryNav } from "@/components/FaqCategoryNav";
import PageHeader from "@/components/PageHeader";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms, Privacy, and Policies",
  description:
    "Review JMC Driving School terms, privacy policy, and the 7-day full refund if no services were used. Questions about a policy? Call (781) 373-1730 today.",
};

export default async function Page() {
  const { legal: l } = getMessages(await getLocale());

  return (
    <>
      <PageHeader title={l.title} subtitle={l.subtitle} />

      <div className="container-page section">
        <div className="grid md:grid-cols-12 gap-xl items-start">
          <aside className="hidden md:block md:col-span-3 sticky top-32">
            <FaqCategoryNav
              items={[
                { id: "legal-notice", label: l.legalNotice },
                { id: "terms-of-use", label: l.termsOfUse },
                { id: "privacy-policy", label: l.privacyPolicy },
                { id: "cookie-policy", label: l.cookiePolicy },
                { id: "disclaimers", label: l.disclaimers },
              ]}
            />
          </aside>

          <div className="md:col-span-9 space-y-xl">
            <section className="card elevation-2 scroll-mt-32" id="legal-notice">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary icon-md">gavel</span>
                <h2 className="font-h2 text-h2 text-primary">{l.legalNotice}</h2>
              </div>
              <div className="space-y-md text-body-md text-on-surface">
                <p>{l.legalNoticeP1}</p>
                <p>{l.legalNoticeP2}</p>
                <p>
                  <strong>{l.companyInfo}</strong>
                  <br />
                  {site.name}
                  <br />
                  {site.address.full}
                  <br />
                  Contact: {site.email}
                </p>
              </div>
            </section>

            <section className="card elevation-2 scroll-mt-32" id="terms-of-use">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary icon-md">description</span>
                <h2 className="font-h2 text-h2 text-primary">{l.termsOfUse}</h2>
              </div>
              <div className="space-y-md text-body-md text-on-surface">
                <p>{l.termsP1}</p>
                <ul className="list-disc pl-md space-y-sm text-on-surface-variant">
                  <li>{l.termsLi1}</li>
                  <li>{l.termsLi2}</li>
                  <li>{l.termsLi3}</li>
                  <li>{l.termsLi4}</li>
                </ul>
              </div>
            </section>

            <section className="card elevation-2 scroll-mt-32" id="privacy-policy">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary icon-md">shield_lock</span>
                <h2 className="font-h2 text-h2 text-primary">{l.privacyPolicy}</h2>
              </div>
              <div className="space-y-md text-body-md text-on-surface">
                <p>{l.privacyP1}</p>
                <div className="card">
                  <h4 className="font-button text-button text-primary mb-sm">{l.whatWeCollect}</h4>
                  <ul className="list-disc pl-md space-y-xs text-on-surface-variant">
                    <li>{l.collectLi1}</li>
                    <li>{l.collectLi2}</li>
                    <li>{l.collectLi3}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="card elevation-2 scroll-mt-32" id="cookie-policy">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary icon-md">cookie</span>
                <h2 className="font-h2 text-h2 text-primary">{l.cookiePolicy}</h2>
              </div>
              <div className="space-y-md text-body-md text-on-surface">
                <p>{l.cookieP1}</p>
                <p>{l.cookieP2}</p>
              </div>
            </section>

            <section className="card elevation-2 scroll-mt-32" id="disclaimers">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary icon-md">warning</span>
                <h2 className="font-h2 text-h2 text-primary">{l.disclaimers}</h2>
              </div>
              <div className="space-y-md text-body-md text-on-surface">
                <p>{l.disclaimerP1}</p>
                <p>{l.disclaimerP2}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
