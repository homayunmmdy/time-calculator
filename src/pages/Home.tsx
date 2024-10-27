import { useTranslation } from 'react-i18next'
import React from 'react'

const Home = () => {
    const { t } = useTranslation()

  return (
    <>
    <h1>{t('title')}</h1>
    </>
  )
}

export default Home