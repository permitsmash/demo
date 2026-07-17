import type { Locale } from "../locales";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export type { Messages } from "./en";

const messages = { en, es, pt } as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
