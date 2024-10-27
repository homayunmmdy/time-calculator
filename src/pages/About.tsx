import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("config.description")}</p>
    </>
  );
};

export default About;
