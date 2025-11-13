import { logger } from "@/lib/logger";

import { DEFAULT_LOCALE, getFallbackLocale, resolveLocale } from "./config";
import { translations, type TranslationKey } from "./translations";
import { type Locale } from "./types";

const LOG_SOURCE = "i18n";

type TranslateOptions = {
  locale?: Locale;
  fallback?: string;
  replacements?: Record<string, string | number>;
};

function applyReplacements(
  value: string,
  replacements?: Record<string, string | number>
): string {
  if (!replacements) {
    return value;
  }

  return Object.keys(replacements).reduce((acc, key) => {
    const pattern = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    return acc.replace(pattern, String(replacements[key]));
  }, value);
}

function getTranslationFromLocale(
  key: string,
  locale: Locale
): string | undefined {
  return translations[locale]?.[key];
}

export function t(
  key: TranslationKey | string,
  options: TranslateOptions = {}
): string {
  const resolvedLocale = resolveLocale(options.locale);
  const normalizedKey = key as string;

  const directMatch = getTranslationFromLocale(normalizedKey, resolvedLocale);
  if (directMatch) {
    return applyReplacements(directMatch, options.replacements);
  }

  const fallbackLocale = getFallbackLocale(resolvedLocale);
  const fallbackMatch = getTranslationFromLocale(normalizedKey, fallbackLocale);
  if (fallbackMatch) {
    logger.warn(
      "Missing translation detected, falling back to secondary locale",
      { key: normalizedKey, locale: resolvedLocale },
      LOG_SOURCE
    );
    return applyReplacements(fallbackMatch, options.replacements);
  }

  logger.warn(
    "Missing translation detected, using provided fallback or key",
    { key: normalizedKey, locale: resolvedLocale },
    LOG_SOURCE
  );

  const fallback =
    options.fallback ?? translations[DEFAULT_LOCALE]?.[normalizedKey];
  const value = fallback ?? normalizedKey;
  return applyReplacements(value, options.replacements);
}

export { DEFAULT_LOCALE, resolveLocale };
export type { Locale, TranslationKey };
