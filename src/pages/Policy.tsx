import { useTranslation } from "react-i18next";
import { Layout } from "../components/layout";
import React from 'react'

export const Policy = () => {

  const { t } = useTranslation();

  return (
    <Layout>
    <div className="policy container">
      <h2 className="second-title">{t('privacyTitle')}</h2>
      <span className="main-text">
      {t('privacyIntro')}
      </span>

      <h2 className="second-title">{t('dataCollection')}</h2>
      <span className="main-text">
        {t('dataCollectionText')}
      </span>

      <h2 className="second-title">{t('stripeIntegration')}</h2>
      <span className="main-text">
      {t('stripeText')}
      </span>

      <h2 className="second-title">{t('yourRights')}</h2>
      <span className="main-text">
      {t('yourRightsText')}
      </span>

      <h2 className="second-title">{t('changesToPrivacy')}</h2>
      <span className="main-text">
      {t('changesText')}
      </span>

      <h2 className="second-title">{t('contactUs')}</h2>
      <span className="main-text">
      {t('contactInfo')}
        <br/>
        Email: email
        <br/>
        telegram: tg
      </span>
    </div>
    </Layout>
  );
};
