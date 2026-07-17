import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

function FaqItems({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="flex flex-col gap-sm">
      {items.map((item) => (
        <details
          key={item.question}
          className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="font-h3 text-h3 text-on-surface p-md cursor-pointer flex justify-between items-center hover:bg-surface-container-low transition-colors">
            {item.question}
            <span className="material-symbols-outlined text-outline-variant group-open:rotate-180 transition-transform duration-200">
              expand_more
            </span>
          </summary>
          <div className="p-md pt-0 text-on-surface-variant font-body-md text-body-md border-t border-outline-variant mt-2 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

const categoryNav = [
  { id: "programs", icon: "school", labelKey: "programs" as const },
  { id: "lessons", icon: "calendar_month", labelKey: "lessons" as const },
  { id: "test", icon: "assignment_turned_in", labelKey: "test" as const },
  { id: "general", icon: "info", labelKey: "general" as const },
  { id: "pricing", icon: "payments", labelKey: "pricing" as const },
] as const;

const categorySections = [
  { id: "programs", icon: "school", labelKey: "programs" as const, itemsKey: "programs" as const },
  { id: "lessons", icon: "calendar_month", labelKey: "lessons" as const, itemsKey: "lessons" as const },
  { id: "test", icon: "assignment_turned_in", labelKey: "test" as const, itemsKey: "test" as const },
  { id: "general", icon: "info", labelKey: "general" as const, itemsKey: "general" as const },
  { id: "pricing", icon: "payments", labelKey: "pricing" as const, itemsKey: "pricing" as const },
] as const;

export default async function Page() {
  const messages = getMessages(await getLocale());
  const { faqPage: f } = messages;

  return (
    <>
      <section className="relative bg-primary py-xl px-md overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQLRiXY0UmgyTnjZ47s3bJ4guCUbznXjn3F4yeilgOslORiBcPPT_WzwEN0swh_yw9nazNDr4MW0Y6G9-n0ptCL_SCtVm10vmq3QZu0nxRazxNCZcBlq7xOCkSqoq1Wer_6TBtAAqTZo77ZXhUnnGpdXt_2E2qUOSKNEU5KFciHj-7BOOWJheGide-U2B2UJySNqkfEMCzcOA-cKAePAjGG7kGiTp5WRtVaHGtav672vzgcicBGyxxFNdZa-yBOCDnK8tLJZWyq4A')",
          }}
        />
        <div className="relative max-w-[1200px] mx-auto text-center z-10">
          <h1 className="font-h1 text-h1 text-on-primary mb-md">{f.title}</h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-[42rem] mx-auto mb-lg">
            {f.subtitle}
          </p>
          <div className="max-w-[36rem] mx-auto relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3 rounded-lg border-none bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:ring-2 focus:ring-secondary-container focus:outline-none transition-shadow"
              placeholder={f.searchPlaceholder}
              type="text"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-md py-xl">
        <div className="grid md:grid-cols-12 gap-xl items-start">
          <aside className="hidden md:block md:col-span-3 sticky top-32">
            <nav className="flex flex-col gap-sm border-l border-outline-variant pl-sm">
              {categoryNav.map((cat, index) => (
                <a
                  key={cat.id}
                  className={`py-2 pl-3 transition-colors ${
                    index === 0
                      ? "font-button text-button text-secondary-container border-l-2 border-secondary-container -ml-[13px]"
                      : "font-body-md text-body-md text-on-surface-variant hover:text-primary"
                  }`}
                  href={`#${cat.id}`}
                >
                  {f[cat.labelKey]}
                </a>
              ))}
            </nav>
          </aside>

          <div className="md:col-span-9 flex flex-col gap-xl">
            {categorySections.map((section) => (
              <div key={section.id} className="scroll-mt-32" id={section.id}>
                <div className="flex items-center gap-sm mb-md border-b border-outline-variant pb-2">
                  <span className="material-symbols-outlined text-secondary-container">
                    {section.icon}
                  </span>
                  <h2 className="font-h2 text-h2 text-primary">{f[section.labelKey]}</h2>
                </div>
                <FaqItems items={f.categories[section.itemsKey]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-xl px-md border-t border-outline-variant">
        <div className="max-w-[48rem] mx-auto text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-primary text-4xl mb-sm" style={{ fontSize: "48px" }}>
            support_agent
          </span>
          <h2 className="font-h2 text-h2 text-primary mb-sm">{f.ctaTitle}</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-lg">{f.ctaDesc}</p>
          <Link
            href="/contact"
            className="bg-secondary-container text-on-secondary-container font-button text-button px-lg py-3 rounded-lg hover:bg-secondary transition-colors duration-200 shadow-sm w-full sm:w-auto inline-flex items-center justify-center"
          >
            {f.contactSupport}
          </Link>
        </div>
      </section>
    </>
  );
}
