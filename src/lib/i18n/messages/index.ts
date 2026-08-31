import type { Locale } from "../locales";
import { en } from "./en";
import { es } from "./es";
import { ht } from "./ht";
import { pt } from "./pt";

export type { Messages } from "./en";

const messages = { en, es, pt, ht } as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}
