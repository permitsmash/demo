import Link from "next/link";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <>
      <header className="w-full bg-surface-container-lowest border-b border-surface-container-high py-xl">
        <div className="max-w-[1200px] mx-auto px-md w-full text-center">
          <h1 className="font-h1 text-h1 text-primary mb-sm">Contact {site.name}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
            Whether you&apos;re ready to start your driving journey or have questions about our programs, our team is here to help you achieve your goals safely.
          </p>
        </div>
      </header>

      <section className="max-w-[1200px] mx-auto px-md w-full py-xl grid grid-cols-1 md:grid-cols-12 gap-lg">
        <div className="md:col-span-7 flex flex-col gap-md">
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-lg ambient-shadow">
            <h2 className="font-h3 text-h3 text-primary mb-md">Send Us a Message</h2>
            <form className="flex flex-col gap-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="name">Full Name</label>
                  <input className="font-body-md text-body-md text-on-surface bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors w-full" id="name" name="name" placeholder="Jane Doe" type="text"/>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="email">Email Address</label>
                  <input className="font-body-md text-body-md text-on-surface bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors w-full" id="email" name="email" placeholder="jane@example.com" type="email"/>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="subject">Subject</label>
                <div className="relative">
                  <select className="font-body-md text-body-md text-on-surface bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors w-full appearance-none pr-lg" id="subject" name="subject">
                    <option disabled value="">Select an inquiry type</option>
                    <option value="enrollment">Driver&apos;s Education Enrollment</option>
                    <option value="parent">Parent&apos;s Program</option>
                    <option value="adult">Adult Program</option>
                    <option value="road-test">Road Test Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase" htmlFor="message">Your Message</label>
                <textarea className="font-body-md text-body-md text-on-surface bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors w-full resize-y" id="message" name="message" placeholder="How can we help you today?" rows={5}></textarea>
              </div>
              <div className="pt-sm">
                <button className="bg-primary text-on-primary font-button text-button px-lg py-sm rounded-DEFAULT hover:bg-inverse-surface transition-colors duration-200 w-full sm:w-auto flex items-center justify-center gap-xs" type="submit">
                  Send Message
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-lg">
          <div className="w-full h-48 bg-surface-dim rounded-lg overflow-hidden border border-outline-variant">
            <img
              alt="JMC Driving School contact"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjmNI9brVyKFaeFQWIMCqtNXPUu67wqGcHGT8bUG1-DgG-ewUReWX98T2aXCvw0AQBJls5kNPoc60oRBioC7_CAWbvWFDB2VjZT3aAr3ZOQ0hb-UHRN1dvomOcPV5QhmrASr2oDyv35NineGPikZuRc_LGcz_xuTzM6zLpIobehPR1ATVH1CfEtavfZnrECED0733H34bxSVuwWmknTfecKJR_bixeCMrkh9fLkdX4CfDWAyHz3r5E0pBqGysY48IZ5ii0KWYOg0E"
            />
          </div>
          <div className="bg-surface-container-lowest rounded-lg border border-outline-variant p-lg ambient-shadow flex flex-col gap-md">
            <h2 className="font-h3 text-h3 text-primary">Contact Information</h2>
            <ul className="flex flex-col gap-md">
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">Waltham, MA</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{site.address.full}</span>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">Phone</span>
                  <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href={`tel:${site.phoneTel}`}>{site.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">Email</span>
                  <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined text-secondary-container mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <div className="flex flex-col">
                  <span className="font-button text-button text-primary">Office Hours</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{site.officeHours}</span>
                </div>
              </li>
            </ul>
            <hr className="border-t border-outline-variant my-xs"/>
            <div className="flex flex-col gap-sm">
              <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Languages</span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {site.languages.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low border-t border-outline-variant py-xl">
        <div className="max-w-[1200px] mx-auto px-md w-full flex flex-col gap-md">
          <div className="text-center mb-sm">
            <h2 className="font-h2 text-h2 text-primary">Find Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {site.address.full}
            </p>
          </div>
          <div className="w-full h-[400px] bg-surface-dim rounded-lg border border-outline-variant overflow-hidden relative">
            <iframe
              title="JMC Driving School location map"
              src="https://maps.google.com/maps?q=973+Main+Street+Waltham+MA+02451&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
