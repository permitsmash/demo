import PageHeader from "@/components/PageHeader";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { site } from "@/lib/site";

export default async function Page() {
  const { legal: l } = getMessages(await getLocale());

  return (
    <>
      <PageHeader title={l.title} subtitle={l.subtitle} />

      <div className="container-page section">
        <div className="flex flex-col md:flex-row gap-xl">
          <aside className="md:w-1/4 flex-shrink-0">
            <div className="card elevation-2 sticky top-[100px]">
              <h3 className="form-label mb-md">{l.contents}</h3>
              <nav className="flex flex-col gap-sm">
                <a className="font-button text-button text-secondary-container hover:text-secondary transition-colors duration-200" href="#legal-notice">
                  {l.legalNotice}
                </a>
                <a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#terms-of-use">
                  {l.termsOfUse}
                </a>
                <a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#privacy-policy">
                  {l.privacyPolicy}
                </a>
                <a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#cookie-policy">
                  {l.cookiePolicy}
                </a>
                <a className="font-button text-button text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#disclaimers">
                  {l.disclaimers}
                </a>
              </nav>
            </div>
          </aside>

          <div className="md:w-3/4 space-y-xl">
            <section className="card elevation-2 scroll-mt-[100px]" id="legal-notice">
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

            <section className="card elevation-2 scroll-mt-[100px]" id="terms-of-use">
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

            <section className="card elevation-2 scroll-mt-[100px]" id="privacy-policy">
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

            <section className="card elevation-2 scroll-mt-[100px]" id="cookie-policy">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary icon-md">cookie</span>
                <h2 className="font-h2 text-h2 text-primary">{l.cookiePolicy}</h2>
              </div>
              <div className="space-y-md text-body-md text-on-surface">
                <p>{l.cookieP1}</p>
                <p>{l.cookieP2}</p>
              </div>
            </section>

            <section className="card elevation-2 scroll-mt-[100px]" id="disclaimers">
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
