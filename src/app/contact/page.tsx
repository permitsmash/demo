import PageHeader from "@/components/PageHeader";
import { buildLiveSite, getSchoolCatalog } from "@/lib/catalog";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Page() {
  const messages = getMessages(await getLocale());
  const catalog = await getSchoolCatalog();
  const liveSite = buildLiveSite(catalog);
  const { contact, common } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);

  return (
    <>
      <PageHeader
        title={t(contact.title, { name: liveSite.name })}
        subtitle={contact.subtitle}
      />

      <section className="container-page section grid grid-cols-1 md:grid-cols-12 gap-lg">
        <div className="md:col-span-7 flex flex-col gap-md">
          <div className="card elevation-2">
            <h2 className="font-h3 text-h3 text-primary mb-md">{contact.sendMessage}</h2>
            <form className="flex flex-col gap-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="form-label" htmlFor="name">
                    {contact.fullName}
                  </label>
                  <input
                    className="input-field"
                    id="name"
                    name="name"
                    placeholder={contact.fullNamePlaceholder}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="form-label" htmlFor="email">
                    {contact.emailAddress}
                  </label>
                  <input
                    className="input-field"
                    id="email"
                    name="email"
                    placeholder={contact.emailPlaceholder}
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="form-label" htmlFor="subject">
                  {contact.subject}
                </label>
                <div className="relative">
                  <select
                    className="input-field appearance-none pr-lg"
                    id="subject"
                    name="subject"
                    defaultValue=""
                  >
                    <option disabled value="">
                      {contact.selectInquiry}
                    </option>
                    <option value="enrollment">{contact.inquiryEnrollment}</option>
                    <option value="parent">{contact.inquiryParent}</option>
                    <option value="adult">{contact.inquiryAdult}</option>
                    <option value="road-test">{contact.inquiryRoadTest}</option>
                    <option value="other">{contact.inquiryOther}</option>
                  </select>
                  <span className="material-symbols-outlined icon-base absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                    expand_more
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="form-label" htmlFor="message">
                  {contact.yourMessage}
                </label>
                <textarea
                  className="input-field resize-y"
                  id="message"
                  name="message"
                  placeholder={contact.messagePlaceholder}
                  rows={5}
                />
              </div>
              <div className="pt-sm">
                <button className="btn-solid w-full sm:w-auto" type="submit">
                  {common.sendMessage}
                  <span className="material-symbols-outlined icon-base icon-filled">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-lg">
          <div className="w-full h-48 bg-surface-dim rounded-lg overflow-hidden border border-outline-variant">
            <img
              alt={contact.imageAlt}
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjmNI9brVyKFaeFQWIMCqtNXPUu67wqGcHGT8bUG1-DgG-ewUReWX98T2aXCvw0AQBJls5kNPoc60oRBioC7_CAWbvWFDB2VjZT3aAr3ZOQ0hb-UHRN1dvomOcPV5QhmrASr2oDyv35NineGPikZuRc_LGcz_xuTzM6zLpIobehPR1ATVH1CfEtavfZnrECED0733H34bxSVuwWmknTfecKJR_bixeCMrkh9fLkdX4CfDWAyHz3r5E0pBqGysY48IZ5ii0KWYOg0E"
            />
          </div>
          <div className="card elevation-2 flex flex-col gap-md">
            <h2 className="font-h3 text-h3 text-primary">{contact.contactInfo}</h2>
            <ul className="flex flex-col gap-md">
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base icon-filled text-secondary-container mt-1">
                  location_on
                </span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">Waltham, MA</span>
                  <span className="text-body-md text-on-surface-variant">{liveSite.address.full}</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base icon-filled text-secondary-container mt-1">
                  call
                </span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">{common.phone}</span>
                  <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href={`tel:${liveSite.phoneTel}`}>
                    {liveSite.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base icon-filled text-secondary-container mt-1">
                  mail
                </span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">{common.email}</span>
                  <a className="text-body-md text-on-surface-variant hover:text-secondary transition-colors" href={`mailto:${liveSite.email}`}>
                    {liveSite.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base icon-filled text-secondary-container mt-1">
                  schedule
                </span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">{common.officeHours}</span>
                  <span className="text-body-md text-on-surface-variant">{liveSite.officeHours}</span>
                </div>
              </li>
            </ul>
            <hr className="border-t border-outline-variant my-xs" />
            <div className="flex flex-col gap-sm">
              <span className="form-label">{common.languages}</span>
              <p className="text-body-md text-on-surface-variant">
                {liveSite.languages.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section w-full bg-surface-container-low border-t border-outline-variant">
        <div className="container-page flex flex-col gap-md">
          <div className="text-center mb-sm">
            <h2 className="font-h2 text-h2 text-primary">{common.findUs}</h2>
            <p className="text-body-md text-on-surface-variant">
              {liveSite.address.full}
            </p>
          </div>
          <div className="w-full h-[400px] bg-surface-dim rounded-lg border border-outline-variant overflow-hidden relative">
            <iframe
              title={contact.mapTitle}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(liveSite.address.full)}&output=embed`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
