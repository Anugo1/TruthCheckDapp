import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ig from "./locales/ig.json";
import yo from "./locales/yo.json";
import ha from "./locales/ha.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ig: { translation: ig },
    yo: { translation: yo },
    ha: { translation: ha }
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;