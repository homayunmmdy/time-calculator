import { useTranslation } from "react-i18next";
import Cards from "../components/Cards";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="w-[94%] md:w-[92%] mx-auto">
      <h1 className="hidden">{t("meta.title")}</h1>
      <Cards />
    </main>
  );
};

export default Home;
