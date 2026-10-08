"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[], offset: number) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const idKey = ids.join("\n");

  useEffect(() => {
    const sectionIds = idKey.split("\n").filter(Boolean);
    if (sectionIds.length === 0) return;

    const update = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let next = nearBottom ? sectionIds[sectionIds.length - 1] : sectionIds[0];

      if (!nearBottom) {
        for (const id of sectionIds) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= offset) {
            next = id;
          }
        }
      }

      setActiveId((current) => (current === next ? current : next));
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", update);
    };
  }, [idKey, offset]);

  return [activeId, setActiveId] as const;
}
