import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export const useLangParams = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentLang = currentPath.split("/")[1];
  const remainingPath = currentPath.split("/").slice(2).join("/");

  return {currentPath, currentLang, remainingPath };
};

export const useLangHandler = () => {
  const { i18n } = useTranslation();
  const { currentLang, remainingPath } = useLangParams();
  const navigate = useNavigate();

  const onChangeLang = (newLang: string) => {
    i18n.changeLanguage(newLang);

    const newPath = remainingPath
      ? `/${newLang}/${remainingPath}`
      : `/${newLang}`;

    if (currentLang !== newLang) {
      navigate(newPath, { replace: true });
    }
  };

  return onChangeLang;
};
