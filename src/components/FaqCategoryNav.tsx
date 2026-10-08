"use client";

import { useActiveSection } from "@/components/useActiveSection";

type FaqCategoryNavItem = {
  id: string;
  label: string;
};

const ACTIVATION_OFFSET = 144;

export function FaqCategoryNav({ items }: { items: readonly FaqCategoryNavItem[] }) {
  const [activeId, setActiveId] = useActiveSection(
    items.map((item) => item.id),
    ACTIVATION_OFFSET,
  );

  return (
    <nav className="flex flex-col gap-sm border-l border-outline-variant pl-sm">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active ? "true" : undefined}
            onClick={() => setActiveId(item.id)}
            className={`py-2 pl-3 transition-colors ${
              active
                ? "font-button text-button text-secondary-container border-l-2 border-secondary-container -ml-[13px]"
                : "text-body-md text-on-surface-variant hover:text-primary"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
