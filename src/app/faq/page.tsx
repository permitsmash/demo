import Link from "next/link";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/get-locale";

function FaqItems({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="flex flex-col gap-sm">
      {items.map((item) => (
        <details key={item.question} className="accordion group">
          <summary className="accordion-summary">
            {item.question}
            <span className="material-symbols-outlined icon-base text-outline-variant group-open:rotate-180 transition-transform duration-200">
              expand_more
            </span>
          </summary>
          <div className="accordion-body">
            <p>{item.answer}</p>
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
      <section className="relative bg-primary section-padded overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQLRiXY0UmgyTnjZ47s3bJ4guCUbznXjn3F4yeilgOslORiBcPPT_WzwEN0swh_yw9nazNDr4MW0Y6G9-n0ptCL_SCtVm10vmq3QZu0nxRazxNCZcBlq7xOCkSqoq1Wer_6TBtAAqTZo77ZXhUnnGpdXt_2E2qUOSKNEU5KFciHj-7BOOWJheGide-U2B2UJySNqkfEMCzcOA-cKAePAjGG7kGiTp5WRtVaHGtav672vzgcicBGyxxFNdZa-yBOCDnK8tLJZWyq4A')",
          }}
        />
        <div className="relative container-page text-center z-10">
          <h1 className="font-h1 text-h1 text-on-primary mb-md">{f.title}</h1>
          <p className="text-body-lg text-on-primary-container max-w-prose mx-auto mb-lg">
            {f.subtitle}
          </p>
          <div className="max-w-prose-md mx-auto relative group">
            <span className="material-symbols-outlined icon-base absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="input-field-icon rounded-lg elevation-1"
              placeholder={f.searchPlaceholder}
              type="text"
            />
          </div>
        </div>
      </section>

      <section className="container-page section">
        <div className="grid md:grid-cols-12 gap-xl items-start">
          <aside className="hidden md:block md:col-span-3 sticky top-32">
            <nav className="flex flex-col gap-sm border-l border-outline-variant pl-sm">
              {categoryNav.map((cat, index) => (
                <a
                  key={cat.id}
                  className={`py-2 pl-3 transition-colors ${
                    index === 0
                      ? "font-button text-button text-secondary-container border-l-2 border-secondary-container -ml-[13px]"
                      : "text-body-md text-on-surface-variant hover:text-primary"
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
                  <span className="material-symbols-outlined icon-base text-secondary-container">
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

      <section className="section-padded bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-prose mx-auto text-center flex flex-col items-center">
          <span className="material-symbols-outlined icon-2xl text-primary mb-sm">support_agent</span>
          <h2 className="font-h2 text-h2 text-primary mb-sm">{f.ctaTitle}</h2>
          <p className="text-body-md text-on-surface-variant mb-lg">{f.ctaDesc}</p>
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            {f.contactSupport}
          </Link>
        </div>
      </section>
    </>
  );
}
