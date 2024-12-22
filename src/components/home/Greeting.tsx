import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AnimateLayout from '../../hooks/animateLayout';

import { useTranslation } from 'react-i18next';
import { LanguageParams } from '../../templates';

export const Greeting =() => {

    const { t } = useTranslation()
    const { lng } = useParams<LanguageParams>();

    return(
        <section className="greeting">
            <div className="greeting__content container">
                <div className="greeting__content-info">
                    <div className="greeting__content-info-top">
                        <span className="underTitle">{t('underTitle')}</span>
                        <h1 className={`title ${lng === "ua" ? "uaTitle" : ""}`}>
                            {t('title')}
                        </h1>
                        <p className="subTitle">
                            {t('subTitle')}
                        </p>
                    </div>
                    <div className="greeting__content-info-bottom">
                        <span className="greeting-text">
                            {t('greetingText')}
                        </span>
                        <Link style={{maxWidth: lng === "ua" ? "275px" : "210px"}} to={`/${lng}/product`} className="greeting-button">
                            {t('greetingButton')}
                        </Link>
                    </div>
                </div>
                <AnimateLayout>
                    <img className="greeting__content-image" src="../images/product.png" alt="product" />
                </AnimateLayout>
            </div>
        </section>
    )
}