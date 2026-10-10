import type { ReactNode } from "react";

function officialLinkPattern() {
  return /\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g;
}

export function plainOfficialText(text: string) {
  return text.replace(officialLinkPattern(), "$1 ($2)");
}

export function OfficialSourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary-container underline hover:text-primary"
    >
      {label}
    </a>
  );
}

export function OfficialText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(officialLinkPattern())) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      <a
        key={index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary-container underline hover:text-primary"
      >
        {match[1]}
      </a>,
    );
    last = index + match[0].length;
  }

  if (parts.length === 0) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
