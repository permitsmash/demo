"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";
import { useSite } from "@/components/SiteProvider";
import { useLocale } from "@/components/LocaleProvider";

export default function Footer() {
  const site = useSite();
  const { messages, t } = useLocale();
  const { footer, site: siteCopy, common } = messages;

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
                <span>{siteCopy.officeHours}</span>
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
        <div className="container-page py-md flex flex-col sm:flex-row justify-between items-center gap-sm text-center sm:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {t(footer.rights, { name: site.name })}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            by{" "}
            <a
              href="https://permitsmash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-container font-semibold hover:underline"
            >
              permitsmash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
