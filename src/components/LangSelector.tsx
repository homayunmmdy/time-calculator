import { useTranslation } from "react-i18next";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { LANGUAGES } from "../constants/lang";

export const LangSelector = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle root path redirect
  if (location.pathname === "/") {
    return <Navigate to="/en" replace />;
  }

  // Extract current language and path
  const currentPath = location.pathname;
  const currentLang = currentPath.split('/')[1];
  const remainingPath = currentPath.split('/').slice(2).join('/');

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    
    // Change i18n language
    i18n.changeLanguage(newLang);
    
    // Construct new URL
    const newPath = remainingPath 
      ? `/${newLang}/${remainingPath}`
      : `/${newLang}`;
    
    // Only redirect if the language actually changed
    if (currentLang !== newLang) {
      navigate(newPath, { replace: true });
    }
  };

  return (
    <select
      className="select select-bordered"
      value={i18n.language}
      onChange={onChangeLang}
    >
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
};
