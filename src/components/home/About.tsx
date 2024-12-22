import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { LanguageParams } from '../../templates';

export const About = () => {

    const arrowOfSentences = [
        "Premium Quality Gear",
        "Trusted by Athletes Worldwide",
        "Fast Shipping Guaranteed",
        "Support & Stability",
        "Improve Your Performance",
        "Limited Stock Available",
        "Top Choice for Athletes",
        "Train Harder",
        "Perfect Fit Design",
    ]

    const { t } = useTranslation();
    const { lng } = useParams<LanguageParams>();

    return(
        <section className="about">

            <div className="about__line">
                <ul className="about__line-list">
                    {arrowOfSentences.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
            <div className="about__content">
                <div className="about__content-iproduct">
                    {/* image */}
                </div>
                <div className="about__content-info">
                    <div className="info-body">
                        <h2 className="second-title">{t('aboutTitle')}</h2>
                        <p className="main-text">
                            {t('aboutText')}
                        </p>
                        <Link style={{maxWidth: lng === "en" ? "215px" : "265px"}} to={`/${lng}/product`} className="main-button">{t('aboutButton')}</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}