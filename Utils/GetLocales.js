const locales = {
    en: () => import("../locales/en.json").then((r) => r.default),
    pt: () => import("../locales/pt.json").then((r) => r.default)
  };
  
  export const getLocales = (lang) => {
    if (lang in locales) {
      return Promise.resolve(locales[lang]());
    } else {
      return Promise.resolve(locales.en());
    }
  };
  