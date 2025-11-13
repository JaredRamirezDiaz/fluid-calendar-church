export type Locale = "en" | "es";

export type TranslationRecord = Record<string, string>;

export type TranslationDictionary = Record<Locale, TranslationRecord>;
