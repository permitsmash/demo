import Image from "next/image";
import aboutInclass from "@/app/about-inclass.png";
import heroDriving from "@/app/hero-driving.jpg";
import { getMessages, type Messages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

const DRIVER_ED_ICONS = ["menu_book", "directions_car", "class"] as const;

type DriverEdPackage = Messages["courses"]["driverEdPackages"][number];

function PackageIcon({ icon }: { icon: string }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-fixed text-primary">
      <span
        className="material-symbols-outlined text-[28px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
    </div>
  );
}

function IncludesList({
  label,
  items,
  columns = 1,
}: {
  label: string;
  items: readonly string[];
  columns?: 1 | 2;
}) {
  return (
    <div>
      <p className="font-label-caps text-label-caps text-secondary-container uppercase mb-sm">
        {label}
      </p>
      <ul
        className={`space-y-xs font-body-md text-body-md text-on-surface-variant ${
          columns === 2 ? "sm:columns-2 sm:gap-gutter" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-xs break-inside-avoid mb-xs">
            <span className="material-symbols-outlined text-secondary-container text-sm mt-0.5 shrink-0">
              check_circle
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceTiers({
  tiers,
  columns = 1,
}: {
  tiers: readonly { label: string; price: string }[];
  columns?: 1 | 3;
}) {
  return (
    <div
      className={
        columns === 3
          ? "grid grid-cols-1 sm:grid-cols-3 gap-sm"
          : "space-y-xs font-body-md text-body-md text-on-surface-variant"
      }
    >
      {tiers.map((tier) => (
        <div
          key={tier.label}
          className={
            columns === 3
              ? "rounded-md bg-surface-container-low px-md py-sm text-center"
              : "flex items-center justify-between border-b border-outline-variant/60 pb-1"
          }
        >
          <span className={columns === 3 ? "block font-body-sm text-body-sm text-on-surface-variant capitalize" : "capitalize"}>
            {tier.label}
          </span>
          <span className={`font-semibold text-primary ${columns === 3 ? "block font-h3 text-h3 mt-xs" : ""}`}>
            {tier.price}
          </span>
        </div>
      ))}
    </div>
  );
}

function FeaturedPackageCard({
  pkg,
  icon,
  includesLabel,
}: {
  pkg: DriverEdPackage;
  icon: string;
  includesLabel: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-secondary-container bg-surface-container-lowest p-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col gap-md sm:flex-row sm:items-start sm:justify-between mb-lg">
        <div className="flex items-start gap-md">
          <PackageIcon icon={icon} />
          <div>
            {"badge" in pkg && pkg.badge ? (
              <span className="inline-flex items-center rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-3 py-1 mb-xs">
                {pkg.badge}
              </span>
            ) : null}
            <h2 className="font-h2 text-h2 text-primary">{pkg.title}</h2>
          </div>
        </div>
        <div className="font-h1 text-[40px] leading-none text-primary sm:text-right shrink-0">
          {pkg.price}
        </div>
      </div>
      <div className="grid gap-lg md:grid-cols-2">
        {"description" in pkg && pkg.description ? (
          <p className="font-body-md text-body-md text-on-surface-variant">
            {pkg.description}
          </p>
        ) : (
          <div />
        )}
        <IncludesList label={includesLabel} items={pkg.includes} columns={2} />
      </div>
    </div>
  );
}

function StandardPackageCard({
  pkg,
  icon,
  includesLabel,
}: {
  pkg: DriverEdPackage;
  icon: string;
  includesLabel: string;
}) {
  return (
    <div className="flex h-full flex-col gap-md rounded-lg border border-outline-variant bg-surface-container-lowest p-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between gap-sm">
        <PackageIcon icon={icon} />
        <div className="font-h1 text-[32px] leading-tight text-primary">{pkg.price}</div>
      </div>
      <div>
        <h2 className="font-h2 text-h2 text-primary">{pkg.title}</h2>
        {"description" in pkg && pkg.description ? (
          <p className="mt-xs font-body-sm text-body-sm text-on-surface-variant">
            {pkg.description}
          </p>
        ) : null}
      </div>
      <div className="border-t border-outline-variant" />
      <IncludesList label={includesLabel} items={pkg.includes} />
      {"footnote" in pkg && pkg.footnote ? (
        <div className="mt-auto rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
          {pkg.footnote}
        </div>
      ) : null}
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
    <div className="max-w-[42rem]">
      <h2 className="font-h2 text-h2 text-primary mb-sm">{title}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
    </div>
  );
}

export default async function Page() {
  const messages = getMessages(await getLocale());
  const c = messages.courses;
  const [featuredPkg, ...otherPkgs] = c.driverEdPackages;

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-xl px-md">
        <div className="relative max-w-[1200px] mx-auto text-center flex flex-col items-center gap-md">
          <h1 className="font-h1 text-h1 text-primary">{c.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem] mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Teen Driver Education */}
      <section className="w-full py-xl px-md">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-xl">
          <div className="grid gap-lg md:grid-cols-2 md:items-center">
            <SectionHeader
              title={c.sections.teenDriverEd.title}
              description={c.sections.teenDriverEd.description}
            />
            <div className="relative h-[220px] md:h-[260px] w-full overflow-hidden rounded-xl border border-outline-variant shadow-md">
              <Image
                src={aboutInclass}
                alt={c.sections.teenDriverEd.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          </div>

          <FeaturedPackageCard
            pkg={featuredPkg}
            icon={DRIVER_ED_ICONS[0]}
            includesLabel={c.includesLabel}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {otherPkgs.map((pkg, index) => (
              <StandardPackageCard
                key={pkg.title}
                pkg={pkg}
                icon={DRIVER_ED_ICONS[index + 1]}
                includesLabel={c.includesLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Adult Drivers */}
      <section className="w-full bg-surface-dim py-xl px-md">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-xl">
          <SectionHeader
            title={c.sections.adultDrivers.title}
            description={c.sections.adultDrivers.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="flex flex-col gap-md rounded-lg border border-outline-variant bg-surface-container-lowest p-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-sm">
                <PackageIcon icon="person" />
                <div className="text-right">
                  <div className="font-h1 text-[32px] leading-tight text-primary">
                    {c.adultProgram.fromPrice}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {c.adultProgram.perLesson}
                  </div>
                </div>
              </div>
              <h2 className="font-h2 text-h2 text-primary">{c.adultProgram.title}</h2>
              <div className="border-t border-outline-variant" />
              <p className="font-label-caps text-label-caps text-secondary-container uppercase">
                {c.adultProgram.sampleTiersLabel}
              </p>
              <PriceTiers tiers={c.adultProgram.highlightedTiers} columns={3} />
              <p className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
                {c.adultProgram.moreTiersNote}
              </p>
            </div>

            <div className="flex flex-col gap-md rounded-lg border border-outline-variant bg-surface-container-lowest p-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <PackageIcon icon="inventory_2" />
              <h2 className="font-h2 text-h2 text-primary">
                {c.adultProgramPackage.title}
              </h2>
              <div className="border-t border-outline-variant" />
              <div className="grid gap-sm sm:grid-cols-2 mt-auto">
                {c.adultProgramPackage.options.map((option) => (
                  <div
                    key={option.label}
                    className="rounded-md bg-surface-container-low px-md py-md flex flex-col gap-xs"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {option.label}
                    </span>
                    <span className="font-h3 text-h3 text-primary">{option.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highway Lessons */}
      <section className="w-full py-xl px-md">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-xl">
          <div className="grid gap-lg lg:grid-cols-2 lg:items-center">
            <SectionHeader
              title={c.sections.highway.title}
              description={c.sections.highway.description}
            />
            <div className="relative h-[200px] lg:h-[240px] w-full overflow-hidden rounded-xl border border-outline-variant shadow-md">
              <Image
                src={heroDriving}
                alt={c.sections.highway.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          <div className="max-w-[640px]">
            <div className="flex flex-col gap-md rounded-lg border border-outline-variant bg-surface-container-lowest p-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-sm">
                <PackageIcon icon="add_road" />
                <div className="font-h1 text-[32px] leading-tight text-primary">$100</div>
              </div>
              <h2 className="font-h2 text-h2 text-primary">{c.highwayLessons.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {c.highwayLessons.description}
              </p>
              <div className="border-t border-outline-variant" />
              <p className="font-label-caps text-label-caps text-secondary-container uppercase">
                {c.highwayRatesLabel}
              </p>
              <PriceTiers tiers={c.highwayLessons.tiers} columns={3} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-md pb-xl">
        <div className="flex flex-col gap-sm rounded-lg border border-outline-variant bg-surface-container-low px-lg py-md max-w-[720px] mx-auto">
          <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs">
            <span
              className="material-symbols-outlined text-secondary-container text-sm mt-0.5 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            {c.disclaimerPermit}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs">
            <span
              className="material-symbols-outlined text-secondary-container text-sm mt-0.5 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
            {c.disclaimerLocation}
          </p>
        </div>
      </section>
    </div>
  );
}
