import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="sm:flex items-center w-[94%] md:w-[92%] mx-auto">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">{t('config.aboutus')}</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">{t('config.aboutus')} <span className="text-indigo-600">{t('config.siteName')}</span>
            </h2>
            <p className="text-gray-700">
            {t('config.description')}
            </p>
        </div>
    </div>
</div>
      <p>{t("config.description")}</p>
    </>
  );
};

export default About;
