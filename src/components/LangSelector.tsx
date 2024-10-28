import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { LANGUAGES } from "../constants/lang";
import { useLangHandler, useLangParams } from "../util/Index";

export const LangSelector = () => {
  const { i18n } = useTranslation();
  const { currentPath } = useLangParams();

  // Handle root path redirect
  if (currentPath === "/") {
    return <Navigate to="/en" replace />;
  }

  const onChangeLang = useLangHandler();

  return (
    <select
      className="select select-bordered"
      value={i18n.language}
      onChange={(e) => onChangeLang(e.target.value)}
    >
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};
