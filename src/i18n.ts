import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import ENTransition from "../public/locales/en.json";
import FATransition from "../public/locales/fa.json";
const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "https://test.com";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {  translation: ENTransition },
      fa: { translation:  FATransition  },
    },
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: `${getCurrentHost}/locales/{{lng}}.json`,
    },
  });

export default i18n;
