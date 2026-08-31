import Image from "next/image";
import Link from "next/link";
import aboutInclass from "@/app/about-inclass.png";
import { LessonQuantityBuy } from "@/components/LessonQuantityBuy";
import { PackageOptionBuy } from "@/components/PackageOptionBuy";
import { getMessages, type Messages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

const DRIVER_ED_ICONS = ["menu_book", "directions_car", "class"] as const;

type DriverEdPackage = Messages["courses"]["driverEdPackages"][number];

function BuyButton({ label, productId }: { label: string; productId: string }) {
  return (
    <Link href={`/enroll?product=${productId}`} className="btn-primary w-full sm:w-auto">
      {label}
    </Link>
  );
}

function PackageIcon({ icon }: { icon: string }) {
  return (
    <div className="icon-box">
      <span className="material-symbols-outlined icon-lg icon-filled">
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

function FeaturedPackageCard({
  pkg,
  icon,
  includesLabel,
  buyLabel,
  productId,
}: {
  pkg: DriverEdPackage;
  icon: string;
  includesLabel: string;
  buyLabel: string;
  productId: string;
}) {
  return (
    <div className="card-featured">
      <div className="flex flex-col gap-md sm:flex-row sm:items-start sm:justify-between mb-lg">
        <div className="flex items-start gap-md">
          <PackageIcon icon={icon} />
          <div>
            {"badge" in pkg && pkg.badge ? (
              <span className="badge-outline mb-xs">
                {pkg.badge}
              </span>
            ) : null}
            <h2 className="font-h2 text-h2 text-primary">{pkg.title}</h2>
          </div>
        </div>
        <div className="font-display text-display text-primary sm:text-right shrink-0">
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
      <div className="mt-md">
        <BuyButton label={buyLabel} productId={productId} />
      </div>
    </div>
  );
}

function StandardPackageCard({
  pkg,
  icon,
  includesLabel,
  buyLabel,
  productId,
}: {
  pkg: DriverEdPackage;
  icon: string;
  includesLabel: string;
  buyLabel: string;
  productId: string;
}) {
  return (
    <div className="card-hover flex h-full flex-col gap-md">
      <div className="flex items-start justify-between gap-sm">
        <PackageIcon icon={icon} />
        <div className="font-price text-price text-primary">{pkg.price}</div>
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
        <div className="rounded-md bg-surface-container-low px-md py-sm font-body-sm text-body-sm text-on-surface-variant">
          {pkg.footnote}
        </div>
      ) : null}
      <div className="mt-auto pt-md">
        <BuyButton label={buyLabel} productId={productId} />
      </div>
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
  const c = messages.courses;
  const [featuredPkg, ...otherPkgs] = c.driverEdPackages;

  return (
    <div className="flex flex-col items-center w-full">
      <section className="relative w-full bg-surface-container-lowest overflow-hidden section-padded">
        <div className="relative container-page text-center flex flex-col items-center gap-md">
          <h1 className="font-h1 text-h1 text-primary">{c.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Teen Driver Education */}
      <section className="w-full section">
        <div className="container-page flex flex-col gap-xl">
          <div className="grid gap-lg md:grid-cols-2 md:items-center">
            <SectionHeader
              title={c.sections.teenDriverEd.title}
              description={c.sections.teenDriverEd.description}
            />
            <div className="relative h-[220px] md:h-[260px] w-full overflow-hidden rounded-xl border border-outline-variant elevation-2">
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
            buyLabel={c.buyButton}
            productId="driver-ed-1"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {otherPkgs.map((pkg, index) => (
              <StandardPackageCard
                key={pkg.title}
                pkg={pkg}
                icon={DRIVER_ED_ICONS[index + 1]}
                includesLabel={c.includesLabel}
                buyLabel={c.buyButton}
                productId={`driver-ed-${index + 2}`}
              />
            ))}
          </div>

          <div className="max-w-content-md">
            <div className="card-hover flex flex-col gap-md">
              <div className="flex items-start justify-between gap-sm">
                <PackageIcon icon="school" />
                <div className="text-right">
                  <div className="font-price text-price text-primary">
                    {c.juniorDriverProgram.fromPrice}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {c.juniorDriverProgram.perLesson}
                  </div>
                </div>
              </div>
              <h2 className="font-h2 text-h2 text-primary">{c.juniorDriverProgram.title}</h2>
              <div className="border-t border-outline-variant" />
              <div className="mt-md">
                <LessonQuantityBuy
                  buyLabel={c.buyButton}
                  pricePerLesson={c.juniorDriverProgram.pricePerLesson}
                  minLessons={c.juniorDriverProgram.minLessons}
                  maxLessons={c.juniorDriverProgram.maxLessons}
                  productId="junior-lessons"
                  lessonLabel={c.lessonLabel}
                  lessonsLabel={c.lessonsLabel}
                  decreaseLabel={c.decreaseQuantity}
                  increaseLabel={c.increaseQuantity}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Drivers */}
      <section className="w-full bg-surface-dim section">
        <div className="container-page flex flex-col gap-xl">
          <SectionHeader
            title={c.sections.adultDrivers.title}
            description={c.sections.adultDrivers.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="card-hover flex flex-col gap-md">
              <div className="flex items-start justify-between gap-sm">
                <PackageIcon icon="person" />
                <div className="text-right">
                  <div className="font-price text-price text-primary">
                    {c.adultProgram.fromPrice}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {c.adultProgram.perLesson}
                  </div>
                </div>
              </div>
              <h2 className="font-h2 text-h2 text-primary">{c.adultProgram.title}</h2>
              <div className="border-t border-outline-variant" />
              <div className="mt-auto pt-md">
                <LessonQuantityBuy
                  buyLabel={c.buyButton}
                  pricePerLesson={c.adultProgram.pricePerLesson}
                  minLessons={c.adultProgram.minLessons}
                  maxLessons={c.adultProgram.maxLessons}
                  productId="adult-lessons"
                  lessonLabel={c.lessonLabel}
                  lessonsLabel={c.lessonsLabel}
                  decreaseLabel={c.decreaseQuantity}
                  increaseLabel={c.increaseQuantity}
                />
              </div>
            </div>

            <div className="card-hover flex flex-col gap-md">
              <PackageIcon icon="inventory_2" />
              <h2 className="font-h2 text-h2 text-primary">
                {c.adultProgramPackage.title}
              </h2>
              <div className="border-t border-outline-variant" />
              <div className="mt-auto pt-md">
                <PackageOptionBuy
                  buyLabel={c.buyButton}
                  selectLabel={c.selectPackageLabel}
                  productId="adult-program-package"
                  options={c.adultProgramPackage.options}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highway Lessons */}
      <section className="w-full section">
        <div className="container-page flex flex-col gap-xl">
          <SectionHeader
            title={c.sections.highway.title}
            description={c.sections.highway.description}
          />

          <div className="max-w-content-md">
            <div className="card-hover flex flex-col gap-md">
              <div className="flex items-start justify-between gap-sm">
                <PackageIcon icon="add_road" />
                <div className="font-price text-price text-primary">$100</div>
              </div>
              <h2 className="font-h2 text-h2 text-primary">{c.highwayLessons.title}</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {c.highwayLessons.description}
              </p>
              <div className="border-t border-outline-variant" />
              <div className="mt-md">
                <LessonQuantityBuy
                  buyLabel={c.buyButton}
                  pricePerLesson={c.highwayLessons.pricePerLesson}
                  minLessons={c.highwayLessons.minLessons}
                  maxLessons={c.highwayLessons.maxLessons}
                  productId="highway-lessons"
                  lessonLabel={c.lessonLabel}
                  lessonsLabel={c.lessonsLabel}
                  decreaseLabel={c.decreaseQuantity}
                  increaseLabel={c.increaseQuantity}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full container-page pb-xl">
        <div className="flex flex-col gap-sm rounded-lg border border-outline-variant bg-surface-container-low px-lg py-md max-w-content-narrow mx-auto">
          <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs">
            <span className="material-symbols-outlined text-secondary-container icon-sm icon-filled mt-0.5 shrink-0">
              info
            </span>
            {c.disclaimerPermit}
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-start gap-xs">
            <span className="material-symbols-outlined text-secondary-container icon-sm icon-filled mt-0.5 shrink-0">
              location_on
            </span>
            {c.disclaimerLocation}
          </p>
        </div>
      </section>
    </div>
  );
}
