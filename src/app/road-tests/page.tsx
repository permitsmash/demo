import Image from "next/image";
import Link from "next/link";
import { buildAddonsDisplayFromCatalog, buildLiveSite, getSchoolCatalog } from "@/lib/catalog";
import { formatMessage, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

function BuyButton({ label, catalogId }: { label: string; catalogId: string }) {
  return (
    <Link
      href={`/enroll?package=${encodeURIComponent(catalogId)}`}
      className="btn-primary w-full sm:w-auto"
    >
      {label}
    </Link>
  );
}

function InfoCallout({
  items,
}: {
  items: { icon: string; content: React.ReactNode }[];
}) {
  return (
    <div className="flex flex-col gap-sm rounded-lg border border-outline-variant bg-surface-container-low px-lg py-md">
      {items.map((item) => (
        <p
          key={item.icon}
          className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs"
        >
          <span className="material-symbols-outlined text-secondary-container icon-sm icon-filled mt-0.5 shrink-0">
            {item.icon}
          </span>
          {item.content}
        </p>
      ))}
    </div>
  );
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-prose">
      <h2 className="font-h2 text-h2 text-primary mb-sm">{title}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
    </div>
  );
}

export default async function Page() {
  const messages = getMessages(await getLocale());
  const catalog = await getSchoolCatalog();
  const liveSite = buildLiveSite(catalog);
  const { roadTests: rt, common } = messages;
  const t = (template: string, values?: Record<string, string | number>) =>
    formatMessage(template, values);

  const sponsorshipOptions = buildAddonsDisplayFromCatalog(catalog);

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative w-full bg-surface-container-lowest overflow-hidden section-padded">
        <div className="relative container-page text-center flex flex-col items-center gap-md">
          <h1 className="font-h1 text-h1 text-primary">{rt.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
            {rt.subtitle}
          </p>
        </div>
      </section>

      <section className="w-full bg-surface-dim section">
        <div className="container-page flex flex-col gap-xl">
          <SectionHeader title={rt.optionsTitle} description={rt.optionsDesc} />

          <InfoCallout
            items={[
              { icon: "info", content: rt.buyAndBookNote },
              { icon: "policy", content: <strong>{rt.nonRefundable}</strong> },
            ]}
          />

          {sponsorshipOptions.length === 0 ? (
            <p className="font-body-md text-body-md text-on-surface-variant rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
              {rt.emptyCatalog}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {sponsorshipOptions.map((option) => (
                <div key={option.catalogId} className="card-hover flex h-full flex-col gap-md">
                  <div className="font-price text-price text-primary">{option.price}</div>
                  <h2 className="font-h2 text-h2 text-primary">{option.name}</h2>
                  {option.description ? (
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {option.description}
                    </p>
                  ) : null}
                  <div className="mt-auto border-t border-outline-variant pt-md">
                    <BuyButton label={rt.buyButton} catalogId={option.catalogId} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="w-full section">
        <div className="container-page flex flex-col gap-xl">
          <SectionHeader title={rt.locationsTitle} description={rt.locationsDesc} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {liveSite.roadTestLocations.map((location) => (
              <a
                key={location.name}
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-outline-variant elevation-1 lift-on-hover"
                aria-label={t(rt.rmvAria, { name: location.name })}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={location.image}
                    alt={`${location.name} RMV Service Center`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-sm py-md pt-xl">
                    <p className="text-overlay">{location.name}</p>
                    <p className="text-overlay-muted">{location.address}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-dim section">
        <div className="container-page flex flex-col gap-xl">
          <SectionHeader title={rt.preparationTitle} description={rt.preparationDesc} />

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {rt.preparationTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-sm font-body-md text-body-md text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5 shrink-0">
                  check_circle
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-surface-dim section">
        <div className="container-page flex flex-col items-center gap-md text-center">
          <div className="max-w-prose">
            <h2 className="font-h2 text-h2 text-primary mb-sm">{rt.contactTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {rt.contactDesc}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm">
            <a href={`tel:${liveSite.phoneTel}`} className="btn-primary">
              <span className="material-symbols-outlined icon-base">call</span>
              {t(common.callNow, { phone: liveSite.phone })}
            </a>
            <Link href="/contact" className="btn-outline">
              {rt.contactButton}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
