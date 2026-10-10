import type { CatalogAddonDisplay, CatalogDisplayPackage } from "@/lib/catalog";

const tableWrap =
  "max-w-full overflow-x-auto rounded-lg border border-outline-variant bg-surface-container-lowest";
const tableClass =
  "w-full border-collapse text-left text-body-sm font-body-sm";
const headCell = "px-sm py-xs font-semibold whitespace-nowrap text-on-surface-variant";
const stickyHead = `${headCell} sticky left-0 z-10 border-r border-outline-variant/60 bg-surface-container-low max-md:max-w-36 max-md:whitespace-normal`;
const bodyCell = "border-t border-outline-variant/60 px-sm py-sm align-top";
const stickyBody = `${bodyCell} sticky left-0 z-10 border-r border-outline-variant/60 bg-surface-container-lowest font-semibold text-primary md:whitespace-nowrap max-md:max-w-36 max-md:whitespace-normal`;

export type PackageComparisonLabels = {
  caption: string;
  feature: string;
  price: string;
  choose: string;
  classroom: string;
  behindWheel: string;
  observation: string;
  parentClass: string;
  certificate: string;
  fullCourse: string;
  classroomDone: string;
  needsClassroom: string;
  yes: string;
  no: string;
};

type FeatureKey = "classroom" | "behindWheel" | "observation" | "parentClass" | "certificate";

const features: { key: FeatureKey; test: RegExp }[] = [
  { key: "behindWheel", test: /behind[\s-]*the[\s-]*wheel/i },
  { key: "observation", test: /observation/i },
  { key: "classroom", test: /classroom/i },
  { key: "parentClass", test: /parent|guardian/i },
  { key: "certificate", test: /certificate/i },
];

function featureTest(key: FeatureKey) {
  return features.find((feature) => feature.key === key)?.test;
}

function statedQuantity(label: string) {
  const match = label.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function featureHits(line: string) {
  return features.flatMap((feature) => {
    const match = line.match(feature.test);
    if (!match || match.index == null) return [];
    return [{ key: feature.key, index: match.index }];
  });
}

function quantitiesForFeature(line: string, key: FeatureKey) {
  const hits = featureHits(line).sort((a, b) => a.index - b.index);
  if (hits.length === 0) return [];
  const numbers = [...line.matchAll(/\d+/g)].flatMap((match) =>
    match.index == null
      ? []
      : [{ value: Number(match[0]), index: match.index, end: match.index + match[0].length }],
  );

  return numbers
    .filter((number) => {
      const following = hits.find((hit) => hit.index >= number.end);
      if (following) return following.key === key;
      const preceding = [...hits].reverse().find((hit) => hit.index < number.index);
      return preceding?.key === key;
    })
    .map((number) => number.value);
}

function lineMatchesFeature(line: string, key: FeatureKey, label?: string) {
  const test = featureTest(key);
  if (!test?.test(line)) return false;
  const quantity = label ? statedQuantity(label) : null;
  return quantity == null || quantitiesForFeature(line, key).includes(quantity);
}

function matchedFeature(line: string, labels: PackageComparisonLabels): FeatureKey | null {
  const hits = featureHits(line);
  if (hits.length === 0) return null;
  const accounted = hits.every((hit) =>
    lineMatchesFeature(line, hit.key, labels[hit.key]),
  );
  return accounted ? hits[0].key : null;
}

function includesFeature(
  includes: readonly string[],
  key: FeatureKey,
  label?: string,
) {
  return includes.some((line) => lineMatchesFeature(line, key, label));
}

function chooseWhen(includes: readonly string[], labels: PackageComparisonLabels) {
  const classroom = includesFeature(includes, "classroom");
  const wheel = includesFeature(includes, "behindWheel");
  if (classroom && wheel) return labels.fullCourse;
  if (wheel) return labels.classroomDone;
  if (classroom) return labels.needsClassroom;
  return "—";
}

function extraIncludeRows(
  packages: readonly CatalogDisplayPackage[],
  labels: PackageComparisonLabels,
) {
  const rows: { label: string; present: boolean[] }[] = [];

  packages.forEach((pkg, index) => {
    for (const line of pkg.includes) {
      const label = line.trim();
      if (!label || matchedFeature(label, labels)) continue;
      const key = label.toLowerCase();
      let row = rows.find((entry) => entry.label.toLowerCase() === key);
      if (!row) {
        row = { label, present: packages.map(() => false) };
        rows.push(row);
      }
      row.present[index] = true;
    }
  });

  return rows;
}

export function PackageComparisonTable({
  packages,
  labels,
  showHeading = true,
}: {
  packages: readonly CatalogDisplayPackage[];
  labels: PackageComparisonLabels;
  showHeading?: boolean;
}) {
  if (packages.length < 2) return null;

  const featureRows = features.filter((feature) =>
    packages.some((pkg) =>
      includesFeature(pkg.includes, feature.key, labels[feature.key]),
    ),
  );

  const extras = extraIncludeRows(packages, labels);

  return (
    <div className="flex max-w-full flex-col gap-sm">
      {showHeading ? <p className="font-h3 text-h3 text-primary">{labels.caption}</p> : null}
      <div className="flex flex-col gap-sm md:hidden">
        {packages.map((pkg, index) => (
          <article
            key={pkg.catalogId}
            className="flex flex-col gap-sm rounded-lg border border-outline-variant bg-surface-container-lowest p-md"
          >
            <div className="flex items-baseline justify-between gap-sm">
              <p className="font-h3 text-h3 text-primary">{pkg.title}</p>
              <p className="whitespace-nowrap font-semibold text-primary">{pkg.price}</p>
            </div>
            <p className="text-body-sm text-on-surface-variant">
              <span className="font-semibold text-primary">{labels.choose}. </span>
              {chooseWhen(pkg.includes, labels)}
            </p>
            <dl className="flex flex-col">
              {featureRows.map((feature) => (
                <div
                  key={feature.key}
                  className="flex items-baseline justify-between gap-sm border-t border-outline-variant/60 py-xs"
                >
                  <dt className="text-body-sm text-on-surface-variant">{labels[feature.key]}</dt>
                  <dd className="font-semibold text-primary">
                    {includesFeature(pkg.includes, feature.key, labels[feature.key])
                      ? labels.yes
                      : labels.no}
                  </dd>
                </div>
              ))}
              {extras.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-sm border-t border-outline-variant/60 py-xs"
                >
                  <dt className="text-body-sm text-on-surface-variant">{row.label}</dt>
                  <dd className="font-semibold text-primary">
                    {row.present[index] ? labels.yes : labels.no}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div className={`${tableWrap} hidden md:block`}>
      <table className={`${tableClass} min-w-[40rem]`}>
        <caption className="sr-only">{labels.caption}</caption>
        <thead>
          <tr>
            <th scope="col" className={stickyHead}>
              {labels.feature}
            </th>
            {packages.map((pkg) => (
              <th key={pkg.catalogId} scope="col" className={headCell}>
                {pkg.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className={stickyBody}>
              {labels.price}
            </th>
            {packages.map((pkg) => (
              <td key={pkg.catalogId} className={`${bodyCell} whitespace-nowrap font-semibold`}>
                {pkg.price}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row" className={stickyBody}>
              {labels.choose}
            </th>
            {packages.map((pkg) => (
              <td key={pkg.catalogId} className={`${bodyCell} min-w-40`}>
                {chooseWhen(pkg.includes, labels)}
              </td>
            ))}
          </tr>
          {featureRows.map((feature) => (
            <tr key={feature.key}>
              <th scope="row" className={stickyBody}>
                {labels[feature.key]}
              </th>
              {packages.map((pkg) => {
                const included = includesFeature(
                  pkg.includes,
                  feature.key,
                  labels[feature.key],
                );
                return (
                  <td key={pkg.catalogId} className={bodyCell}>
                    {included ? labels.yes : labels.no}
                  </td>
                );
              })}
            </tr>
          ))}
          {extras.map((row) => (
            <tr key={row.label}>
              <th scope="row" className={stickyBody}>
                {row.label}
              </th>
              {row.present.map((included, index) => (
                <td key={packages[index]?.catalogId ?? index} className={bodyCell}>
                  {included ? labels.yes : labels.no}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export type RoadTestFeesLabels = {
  caption: string;
  area: string;
  fee: string;
  details: string;
};

function whereAndWhen(description: string) {
  return description.replace(/\s*The road test fee is non-refundable\.?\s*/gi, " ").replace(/\s+/g, " ").trim();
}

export function RoadTestFeesTable({
  options,
  labels,
  showHeading = true,
}: {
  options: readonly CatalogAddonDisplay[];
  labels: RoadTestFeesLabels;
  showHeading?: boolean;
}) {
  if (options.length === 0) return null;

  return (
    <div className="flex max-w-full flex-col gap-sm">
      {showHeading ? <p className="font-h3 text-h3 text-primary">{labels.caption}</p> : null}
      <div className={tableWrap}>
      <table className={tableClass}>
        <caption className="sr-only">{labels.caption}</caption>
        <thead>
          <tr>
            <th scope="col" className={headCell}>
              {labels.area}
            </th>
            <th scope="col" className={headCell}>
              {labels.fee}
            </th>
            <th scope="col" className={headCell}>
              {labels.details}
            </th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.catalogId}>
              <th scope="row" className={`${bodyCell} font-semibold text-primary`}>
                {option.name}
              </th>
              <td className={`${bodyCell} whitespace-nowrap font-semibold`}>{option.price}</td>
              <td className={bodyCell}>{whereAndWhen(option.description)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
