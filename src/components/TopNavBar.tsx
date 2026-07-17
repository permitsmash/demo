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
    { href: "/gift-cards", label: nav.giftCards },
    { href: "/about", label: nav.about },
    { href: "/contact", label: nav.contact },
    { href: "/faq", label: nav.faq },
  ];

  return (
    <nav className="bg-primary border-b border-on-primary/10 w-full sticky top-0 z-50">
      <div className="hidden md:block bg-error text-on-error">
        <div className="relative max-w-[1200px] mx-auto px-md py-1 flex items-center justify-between gap-md">
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
      <div className="flex items-center max-w-[1200px] mx-auto px-md w-full py-4 gap-lg">
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
                    : 'text-on-primary/80'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="ml-auto flex gap-sm items-center">
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
          <Link
            href="/sign-in"
            className="hidden md:block font-button text-button text-on-primary hover:text-secondary-container transition-colors duration-200 active:scale-95 transition-transform duration-100 px-sm py-sm"
          >
            {nav.signIn}
          </Link>
          <Link
            href="/sign-up"
            className="hidden md:inline-flex bg-secondary-container text-on-secondary-container font-button text-button px-md py-sm rounded active:scale-95 transition-transform duration-100 hover:bg-secondary"
          >
            {nav.enroll}
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-on-primary/20 text-on-primary hover:bg-on-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
            aria-label={nav.toggleMenu}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {isMobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
      {isMobileOpen && (
        <div className="md:hidden border-t border-on-primary/10 bg-primary">
          <div className="max-w-[1200px] mx-auto px-md py-md flex flex-col gap-sm">
            <p className="font-body-sm text-body-sm text-on-primary/80 pb-sm border-b border-on-primary/10">
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
                      : 'text-on-primary/80 hover:text-secondary-container'
                  }`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-sm mt-sm border-t border-on-primary/10 flex gap-sm">
              <Link
                href="/sign-in"
                className="flex-1 text-center font-button text-button text-on-primary border border-on-primary/20 rounded px-sm py-sm hover:bg-on-primary/10"
                onClick={() => setIsMobileOpen(false)}
              >
                {nav.signIn}
              </Link>
              <Link
                href="/sign-up"
                className="flex-1 text-center font-button text-button bg-secondary-container text-on-secondary-container rounded px-sm py-sm hover:bg-secondary"
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
