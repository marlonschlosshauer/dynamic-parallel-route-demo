const COUNTRIES = ["global", "de", "ch", "cn"];

const LANGUAGES_BY_COUNTRY = {
  global: ["en", "de", "fr", "it", "es", "ja"],
  de: ["de"],
  ch: ["de", "fr", "it"],
  cn: ["zh"],
};

const CATEGORY = ["oem", "retail", "companye"];

export const getCountries = (): string[] => COUNTRIES;

export const getLanguages = (country: string): string[] =>
  /* @ts-expect-error fuckoff */
  LANGUAGES_BY_COUNTRY[country] ?? [];

export const getCategory = () => CATEGORY;

export const getRoutes = () =>
  getCountries().flatMap((country) =>
    getLanguages(country).flatMap((language) =>
      getCategory().flatMap((category) => ({
        country,
        language,
        category,
      })),
    ),
  );
