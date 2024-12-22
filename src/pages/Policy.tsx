import { useTranslation } from "react-i18next";
import { Layout } from "../components/layout";
import React from 'react'

export const Policy = () => {

  const { t } = useTranslation();

  return (
    <Layout>
    <div className="policy container">
      <h2 className="second-title">{t('privacyTitle').toString()}</h2>
      <span className="main-text">
      {t('privacyIntro').toString()}
      </span>

      <h2 className="second-title">{t('dataCollection').toString()}</h2>
      <span className="main-text">
        {t('dataCollectionText').toString()}
      </span>

      <h2 className="second-title">{t('stripeIntegration').toString()}</h2>
      <span className="main-text">
      {t('stripeText').toString()}
      </span>

      <h2 className="second-title">{t('yourRights').toString()}</h2>
      <span className="main-text">
      {t('yourRightsText').toString()}
      </span>

      <h2 className="second-title">{t('changesToPrivacy').toString()}</h2>
      <span className="main-text">
      {t('changesText').toString()}
      </span>

      <h2 className="second-title">{t('contactUs').toString()}</h2>
      <span className="main-text">
      {t('contactInfo').toString()}
        <br/>
        Email: email
        <br/>
        telegram: tg
      </span>
    </div>
    </Layout>
  );
};
