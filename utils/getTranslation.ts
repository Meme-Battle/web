interface TranslationData {
  [key: string]: any;
}

const locales: { [key: string]: () => Promise<TranslationData> } = {
  en: () => import("../locales/en.json").then((r) => r.default),
  pt: () => import("../locales/pt.json").then((r) => r.default)
};

export const getTranslation = (lang: string): Promise<TranslationData> => {
  if (lang in locales) {
    return Promise.resolve(locales[lang]());
  } else {
    return Promise.resolve(locales.en());
  }
};
