import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <p>{t("description")}</p>
    </>
  );
};

export default About;
