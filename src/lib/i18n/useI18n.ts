import { useCallback, useMemo } from "react";

import { has } from "lodash";

import en from "./translations/en";

const availableLocales = { en };

type Key = keyof typeof en;
type Locale = keyof typeof availableLocales;

const defaultLocale: Locale = "en";

// TODO: replace with actual i18n lib
export const useI18n = (locale: Locale = defaultLocale) => {
  const translations = useMemo(() => availableLocales[locale], [locale]);

  const t = useCallback(
    (key: Key, args?: Record<string, unknown>): string => {
      return translations && has(translations, key) ? translations[key] : key;
    },
    [translations]
  );

  return { t };
};
