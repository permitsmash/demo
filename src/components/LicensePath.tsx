"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { localizedPath } from "@/lib/i18n";
import { rmv } from "@/lib/rmv";

type Audience = "teen" | "adult";

type Step = {
  title: string;
  description: string;
  action?: string;
  href?: string;
  source?: { href: string; label: string };
};

export function LicensePath() {
  const { locale, messages } = useLocale();
  const home = messages.home;
  const { sourceJuniorOperator, sourceRoadTest } = messages.common;
  const [audience, setAudience] = useState<Audience>("teen");
  const teenTabRef = useRef<HTMLButtonElement>(null);
  const adultTabRef = useRef<HTMLButtonElement>(null);

  const teen: Step[] = [
    {
      title: home.teen1Title,
      description: home.teen1Desc,
    },
    {
      title: home.teen2Title,
      description: home.teen2Desc,
      action: home.teen2Action,
      href: "#upcoming-classes",
    },
    {
      title: home.teen3Title,
      description: home.teen3Desc,
      action: home.teen3Action,
      href: "/courses",
    },
    {
      title: home.teen4Title,
      description: home.teen4Desc,
      source: { href: rmv.juniorOperator, label: sourceJuniorOperator },
    },
    {
      title: home.teen5Title,
      description: home.teen5Desc,
      action: home.teen5Action,
      href: "/road-tests",
      source: { href: rmv.classDRoadTest, label: sourceRoadTest },
    },
  ];

  const adult: Step[] = [
    {
      title: home.adult1Title,
      description: home.adult1Desc,
    },
    {
      title: home.adult2Title,
      description: home.adult2Desc,
      action: home.adult2Action,
      href: "/courses#adult-license",
    },
    {
      title: home.adult3Title,
      description: home.adult3Desc,
      action: home.adult3Action,
      href: "/road-tests",
      source: { href: rmv.classDRoadTest, label: sourceRoadTest },
    },
  ];

  const steps = audience === "teen" ? teen : adult;

  function selectAudience(next: Audience) {
    setAudience(next);
    requestAnimationFrame(() => {
      (next === "teen" ? teenTabRef : adultTabRef).current?.focus();
    });
  }

  return (
    <section id="license-path" className="section bg-surface">
      <div className="container-page">
        <div className="mx-auto flex max-w-prose-lg flex-col items-center">
          <h2 className="font-h2 text-h2 text-primary text-center">{home.licensePathTitle}</h2>
          <p className="mt-sm font-body-lg text-body-lg text-on-surface-variant text-center">
            {home.licensePathIntro}
          </p>
          <div
            className="mt-lg inline-flex overflow-hidden rounded-lg border border-outline-variant"
            role="tablist"
            aria-label={home.licensePathTitle}
            onKeyDown={(event) => {
              if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
              event.preventDefault();
              selectAudience(audience === "teen" ? "adult" : "teen");
            }}
          >
            <button
              type="button"
              role="tab"
              ref={teenTabRef}
              id="license-path-teen"
              aria-selected={audience === "teen"}
              aria-controls="license-path-panel"
              tabIndex={audience === "teen" ? 0 : -1}
              className={`px-md py-sm font-button text-button ${
                audience === "teen"
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => selectAudience("teen")}
            >
              {home.pathUnder18}
            </button>
            <button
              type="button"
              role="tab"
              ref={adultTabRef}
              id="license-path-adult"
              aria-selected={audience === "adult"}
              aria-controls="license-path-panel"
              tabIndex={audience === "adult" ? 0 : -1}
              className={`px-md py-sm font-button text-button ${
                audience === "adult"
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => selectAudience("adult")}
            >
              {home.pathAdult}
            </button>
          </div>
        </div>
        <ol
          id="license-path-panel"
          role="tabpanel"
          aria-labelledby={audience === "teen" ? "license-path-teen" : "license-path-adult"}
          className={`mt-lg grid items-stretch gap-sm ${
            audience === "teen" ? "lg:grid-cols-5" : "lg:grid-cols-3"
          }`}
        >
          {steps.map((step, index) => (
            <li
              key={`${audience}-${index}`}
              id={`license-path-step-${index + 1}`}
              className="flex h-full flex-col rounded-lg border border-outline-variant bg-surface-container-lowest p-md"
            >
              <span className="font-h3 text-h3 text-secondary-container">{index + 1}</span>
              <h3 className="mt-xs font-h3 text-h3 text-primary">{step.title}</h3>
              <p className="mt-xs flex-1 font-body-md text-body-md text-on-surface-variant">
                {step.description}
              </p>
              {step.source ? (
                <a
                  href={step.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-xs font-body-sm text-body-sm text-secondary-container underline hover:text-primary"
                >
                  {step.source.label}
                </a>
              ) : null}
              {step.href && step.action ? (
                <Link
                  href={localizedPath(locale, step.href)}
                  className="mt-sm inline-flex font-button text-button text-secondary-container hover:underline"
                >
                  {step.action}
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
