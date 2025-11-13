"use client";

import { useMemo } from "react";

import { DEFAULT_LOCALE, t } from "@/lib/i18n";
import type { Locale, TranslationKey } from "@/lib/i18n";

type UseTranslationResult = {
  locale: Locale;
  t: (
    key: TranslationKey | string,
    options?: {
      replacements?: Record<string, string | number>;
      fallback?: string;
      locale?: Locale;
    }
  ) => string;
};

/**
 * Client-side hook that exposes the translation helper and resolved locale.
 * Accepts an optional override to force a specific locale in the component tree.
 */
export function useTranslation(localeOverride?: Locale): UseTranslationResult {
  return useMemo(() => {
    const locale = localeOverride ?? DEFAULT_LOCALE;

    return {
      locale,
      t: (key, options) => t(key, { locale, ...options }),
    };
  }, [localeOverride]);
}
