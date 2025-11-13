import { Locale } from "./types";

const SUPPORTED_LOCALES: Locale[] = ["en", "es"];

export const DEFAULT_LOCALE: Locale = "es";

const FALLBACK_LOCALE: Locale = "en";

const ENV_LOCALE =
  typeof process !== "undefined" ? process.env.NEXT_PUBLIC_LOCALE : undefined;

/**
 * Resolves a locale value ensuring it is one of the supported locales.
 * Falls back to the default locale when the provided value is not recognized.
 */
export function resolveLocale(locale?: string | null): Locale {
  if (locale && SUPPORTED_LOCALES.includes(locale as Locale)) {
    return locale as Locale;
  }

  if (ENV_LOCALE && SUPPORTED_LOCALES.includes(ENV_LOCALE as Locale)) {
    return ENV_LOCALE as Locale;
  }

  return DEFAULT_LOCALE;
}

export function getFallbackLocale(current: Locale): Locale {
  if (current === DEFAULT_LOCALE) {
    return FALLBACK_LOCALE;
  }

  return DEFAULT_LOCALE;
}

export function listSupportedLocales(): Locale[] {
  return [...SUPPORTED_LOCALES];
}
