"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import logo from "@/app/logo.png";
import { site } from '@/lib/site';
import { useLocale } from '@/components/LocaleProvider';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default function TopNavBar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { messages } = useLocale();
  const { nav, site: siteCopy } = messages;

  const navLinks = [
    { href: "/courses", label: nav.programs },
    { href: "/classes", label: nav.classes },
    { href: "/about", label: nav.about },
    { href: "/contact", label: nav.contact },
    { href: "/faq", label: nav.faq },
  ];

  return (
    <nav className="bg-white border-b border-outline-variant w-full sticky top-0 z-50">
      <div className="hidden md:block bg-error text-on-error">
        <div className="relative container-page py-1 flex items-center justify-between gap-md">
          <div className="text-body-sm font-body-sm">
            <span>{siteCopy.serviceArea}</span>
            <span className="mx-2">·</span>
            <a href={`tel:${site.phoneTel}`} className="hover:underline font-semibold">
              {site.phone}
            </a>
          </div>
          <LanguageSwitcher variant="banner" />
        </div>
      </div>
      <div className="flex items-center container-page w-full py-3 gap-md">
        <Link href="/" className="flex shrink-0 items-center gap-xs">
          <Image
            src={logo}
            alt={site.name}
            width={125}
            height={63}
            className="h-10 w-auto"
            priority
          />
          <span className="sr-only">{site.name}</span>
        </Link>
        <div className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href} 
                className={`font-button text-button transition-colors duration-200 hover:text-secondary-container ${
                  isActive 
                    ? 'text-secondary-container font-bold border-b-2 border-secondary-container pb-xs' 
                    : 'text-on-surface-variant'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="ml-auto hidden md:flex gap-sm items-center">
          <Link
            href="/sign-in"
            className="btn-ghost"
          >
            {nav.signIn}
          </Link>
          <Link
            href="/courses"
            className="btn-primary btn-primary-sm"
          >
            {nav.enroll}
          </Link>
        </div>
        <div className="ml-auto flex md:hidden gap-sm items-center">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 rounded border border-outline-variant text-primary hover:bg-surface-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
            aria-label={nav.toggleMenu}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined icon-base">
              {isMobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      {isMobileOpen && (
        <div className="md:hidden border-t border-outline-variant bg-white">
          <div className="container-page py-md flex flex-col gap-sm">
            <p className="font-body-sm text-body-sm text-on-surface-variant pb-sm border-b border-outline-variant">
              {siteCopy.serviceArea} ·{" "}
              <a href={`tel:${site.phoneTel}`} className="text-secondary-container">
                {site.phone}
              </a>
            </p>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-button text-button py-xs ${
                    isActive
                      ? 'text-secondary-container font-bold'
                      : 'text-on-surface-variant hover:text-secondary-container'
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-sm mt-sm border-t border-outline-variant flex gap-sm">
              <Link
                href="/sign-in"
                className="flex-1 text-center font-button text-button text-primary border border-outline-variant rounded px-sm py-sm hover:bg-surface-dim"
                onClick={() => setIsMobileOpen(false)}
              >
                {nav.signIn}
              </Link>
              <Link
                href="/courses"
                className="flex-1 text-center btn-primary btn-primary-sm"
                onClick={() => setIsMobileOpen(false)}
              >
                {nav.enroll}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
