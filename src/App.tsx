import { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LangSelector } from "./components/LangSelector";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  const { t } = useTranslation();

  const APIURL = import.meta.env.VITE_API_URL;

  return (
    <>
      <Helmet htmlAttributes={{ lang: t("meta.lang") }}>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />
        
        <meta property="og:description" content={t("meta.description")} />
        <meta property="og:locale" content={t("meta.local")}/>
        <meta property="og:image" content={`${APIURL}/logo3.png`} />
        <link rel="canonical" href={APIURL} />
      </Helmet>

      <Suspense fallback="loading">
        <BrowserRouter>
          <LangSelector />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
