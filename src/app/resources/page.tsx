import type { Metadata } from "next";
import Link from "next/link";
import { getSchoolCatalog } from "@/lib/catalog";
import { getMessages, localizedPath } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildSeoDescriptions } from "@/lib/seo/descriptions";

export async function generateMetadata(): Promise<Metadata> {
  const descriptions = buildSeoDescriptions(await getSchoolCatalog());
  return {
    title: "Massachusetts Driving Resources",
    description: descriptions.resources,
  };
}

function ResourceList({
  title,
  items,
  external,
}: {
  title: string;
  items: readonly { title: string; description: string; href: string }[];
  external?: boolean;
}) {
  return (
    <section className="flex flex-col gap-md">
      <h2 className="font-h2 text-h2 text-primary">{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {items.map((item) => (
          <li key={item.href} className="card-hover flex flex-col gap-sm">
            <h3 className="font-h3 text-h3 text-primary">{item.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              {item.description}
            </p>
            {external ? (
              <a
                className="btn-link mt-sm w-max"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
                <span className="material-symbols-outlined icon-base">open_in_new</span>
              </a>
            ) : (
              <Link className="btn-link mt-sm w-max" href={item.href}>
                {item.title}
                <span className="material-symbols-outlined icon-base">arrow_forward</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function Page() {
  const locale = await getLocale();
  const messages = getMessages(locale);
  const r = messages.resources;
  const schoolLinks = r.school.map((item) => ({
    ...item,
    href: localizedPath(locale, item.href),
  }));

  return (
    <div className="container-page section flex flex-col gap-xl w-full">
      <section className="flex flex-col gap-sm max-w-prose-xl">
        <h1 className="font-h1 text-h1 text-primary">{r.title}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">{r.subtitle}</p>
      </section>
      <ResourceList title={r.officialTitle} items={r.official} external />
      <ResourceList title={r.schoolTitle} items={schoolLinks} />
    </div>
  );
}
