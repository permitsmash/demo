"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";
import { useSite } from "@/components/SiteProvider";
import { useLocale } from "@/components/LocaleProvider";

export default function Footer() {
  const site = useSite();
  const { messages, t } = useLocale();
  const { footer, site: siteCopy } = messages;

  const navLinks = [
    { href: "/", label: footer.home },
    { href: "/courses", label: messages.nav.programs },
    { href: "/road-tests", label: messages.nav.roadTests },
    { href: "/classes", label: messages.nav.classes },
    { href: "/about", label: messages.nav.about },
    { href: "/faq", label: messages.nav.faq },
    { href: "/contact", label: messages.nav.contact },
  ];

  const enrollmentLinks = [
    { href: "/courses", label: footer.driversEd },
    { href: "/courses", label: footer.parentsProgram },
    { href: "/courses", label: footer.adultProgram },
    { href: "/road-tests", label: footer.roadTestForm },
  ];

  return (
    <footer className="bg-white text-on-surface w-full">
      <div className="container-page py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-4 flex flex-col gap-md">
            <Link href="/" className="inline-flex">
              <Image
                src={logo}
                alt={site.name}
                width={125}
                height={63}
                className="h-10 w-auto"
              />
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[20rem]">
              {siteCopy.description}
            </p>
            <a
              href={`tel:${site.phoneTel}`}
              className="btn-primary btn-primary-sm self-start"
            >
              <span className="material-symbols-outlined icon-base">call</span>
              {t(footer.callNow, { phone: site.phone })}
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-sm">
            <h3 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mb-xs">
              {footer.quickLinks}
            </h3>
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col gap-sm">
            <h3 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mb-xs">
              {footer.enrollment}
            </h3>
            {enrollmentLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/legal#privacy-policy"
              className="font-body-md text-body-md text-on-surface-variant hover:text-secondary-container transition-colors mt-xs pt-xs border-t border-outline-variant"
            >
              {footer.privacyPolicy}
            </Link>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-md">
            <h3 className="font-label-caps text-label-caps text-secondary-container uppercase tracking-widest mb-xs">
              {footer.contactUs}
            </h3>
            <ul className="space-y-sm font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base text-secondary-container mt-0.5 shrink-0">
                  location_on
                </span>
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base text-secondary-container mt-0.5 shrink-0">
                  mail
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-secondary-container transition-colors break-all"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base text-secondary-container mt-0.5 shrink-0">
                  schedule
                </span>
                <span>{site.officeHours}</span>
              </li>
              <li className="flex items-start gap-sm">
                <span className="material-symbols-outlined icon-base text-secondary-container mt-0.5 shrink-0">
                  translate
                </span>
                <span>{site.languages.join(" · ")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant bg-surface-dim">
        <div className="container-page py-md grid grid-cols-1 items-center gap-sm text-center sm:grid-cols-[1fr_auto_1fr] sm:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {t(footer.rights, { name: site.name })}
          </p>
          <nav aria-label={footer.social} className="flex items-center justify-center gap-xs">
            <a
              href="https://www.facebook.com/jmcdrivingschoolwaltham/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center text-on-surface-variant transition-colors hover:text-secondary-container"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                <path d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.1 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3v-9.6h2.3l.4-2.9h-2.7z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/jmcdrivingschool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center text-on-surface-variant transition-colors hover:text-secondary-container"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                <circle cx="12" cy="12" r="3.6" />
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://share.google/walG9H7oKCVzlVqPS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="inline-flex h-10 w-10 items-center justify-center text-on-surface-variant transition-colors hover:text-secondary-container"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </a>
          </nav>
          <p className="font-body-sm text-body-sm text-on-surface-variant sm:justify-self-end">
            <a
              href="https://permitsmash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-inherit"
            >
              <Image
                src="/permitsmash-icon.png"
                alt=""
                width={167}
                height={128}
                className="h-4 w-auto"
              />
              {footer.poweredBy}{" "}
              <span className="text-secondary-container font-semibold hover:underline">
                Permitsmash
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
