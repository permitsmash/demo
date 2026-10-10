"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const slotCount = 3;

export function RouteAnswerJsonLdClient({
  blocks,
}: {
  blocks: readonly (unknown | null)[];
}) {
  const pathname = usePathname();
  const serialized = JSON.stringify(blocks);

  useEffect(() => {
    const parsed = JSON.parse(serialized) as (unknown | null)[];
    for (let index = 0; index < slotCount; index += 1) {
      const id = `route-answer-jsonld-${index}`;
      let node = document.getElementById(id);
      const block = parsed[index] ?? null;
      if (!block) {
        if (!node) continue;
        node.setAttribute("type", "text/plain");
        node.textContent = "";
        continue;
      }
      if (!node) {
        node = document.createElement("script");
        node.id = id;
        document.body.appendChild(node);
      }
      node.setAttribute("type", "application/ld+json");
      node.textContent = JSON.stringify(block).replace(/</g, "\\u003c");
    }

    return () => {
      for (let index = 0; index < slotCount; index += 1) {
        const node = document.getElementById(`route-answer-jsonld-${index}`);
        if (!node) continue;
        node.setAttribute("type", "text/plain");
        node.textContent = "";
      }
    };
  }, [pathname, serialized]);

  return null;
}
