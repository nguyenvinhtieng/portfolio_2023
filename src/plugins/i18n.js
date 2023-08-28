import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from '../languages/en';
import vi from '../languages/vi';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: en
      },
      vi: {
        translations: vi
      }
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: '.', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
