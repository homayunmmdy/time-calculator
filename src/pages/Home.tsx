import { useTranslation } from 'react-i18next'

const Home = () => {
    const { t } = useTranslation()

  return (
    <>
    <h1>{t("meta.title")}</h1>
    </>
  )
}

export default Home