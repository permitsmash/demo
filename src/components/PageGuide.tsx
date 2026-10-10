import type { ReactNode } from "react";
import { OfficialText } from "@/components/OfficialText";

type GuideSection = {
  id?: string;
  heading: string;
  paragraphs: readonly string[];
};

export function PageGuide({
  title,
  sections,
  after,
  leads,
}: {
  title: string;
  sections: readonly GuideSection[];
  after?: ReactNode;
  leads?: Partial<Record<string, ReactNode>>;
}) {
  return (
    <section className="w-full section border-t border-outline-variant">
      <div className="container-page flex max-w-prose-xl flex-col gap-lg">
        <h2 className="font-h2 text-h2 text-primary">{title}</h2>
        <div className="flex flex-col gap-lg">
          {sections.map((section) => (
            <div
              key={section.heading}
              id={section.id}
              className="flex scroll-mt-32 flex-col gap-sm"
            >
              <h3 className="font-h3 text-h3 text-primary">{section.heading}</h3>
              {section.id ? leads?.[section.id] : null}
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.heading}-${index}`}
                  className="font-body-md text-body-md text-on-surface-variant"
                >
                  <OfficialText text={paragraph} />
                </p>
              ))}
            </div>
          ))}
          {after}
        </div>
      </div>
    </section>
  );
}
