interface TranslationData {
  [key: string]: any;
}

const locales: { [key: string]: () => Promise<TranslationData> } = {
  en: () => import("../../locales/en.json").then((r) => r.default),
  pt: () => import("../../locales/pt.json").then((r) => r.default)
};

export const getTranslation = (lang: string): Promise<TranslationData> => {
  const selectedLang = lang in locales ? locales[lang] : locales.en;
  return Promise.resolve(selectedLang());
};
