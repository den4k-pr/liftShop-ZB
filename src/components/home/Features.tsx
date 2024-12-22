import React from 'react';
import AnimationSwapBlock from '../../hooks/animationSwapBlock';
import { useTranslation } from 'react-i18next';

export const Features = () => {

    const { t } = useTranslation()

    return(
        <section className="features">
            <div className="features__row">
                <div className="features__row-black ring-one">
                    <AnimationSwapBlock position={-100}>
                        <div className="features__row-black-info">
                            <h2 className="second-title">{t('featuresTitle1')}</h2>
                            <p className="second-subTitle">{t('featuresSubTitle1')}</p>
                            <span className="main-text">{t('featuresText1')}</span>
                        </div>
                    </AnimationSwapBlock>
                </div>
                <div className="features__row-white bdW-1">
                    {/* img */}
                </div>
            </div>
            <div className="features__row centralBlock">
                <div className="features__row-white bdW-2">
                    {/* img */}
                </div>
                <div className="features__row-black ring-two">
                    <AnimationSwapBlock position={100}>
                        <div className="features__row-black-info">
                            <h2 className="second-title">{t('featuresTitle2')}</h2>
                            <p className="second-subTitle">{t('featuresSubTitle2')}</p>
                            <span className="main-text">{t('featuresText2')}</span>
                        </div>
                    </AnimationSwapBlock>
                </div>
            </div>
            <div className="features__row">
                <div className="features__row-black ring-three">
                    <AnimationSwapBlock position={-100}>
                        <div className="features__row-black-info">
                            <h2 className="second-title">{t('featuresTitle3')}</h2>
                            <p className="second-subTitle">{t('featuresSubTitle2')}</p>
                            <span className="main-text">{t('featuresText3')}</span>
                        </div>
                    </AnimationSwapBlock>
                </div>
                <div className="features__row-white bdW-3">
                    {/* img */}
                </div>
            </div>
        </section>
    )
}