import { Link, useParams } from "react-router-dom"
import React from 'react';
import { useTranslation } from "react-i18next";
import { LanguageParams } from "../../templates";

export const Footer = () => {

    const { t } = useTranslation();
    const { lng } = useParams<LanguageParams>();

    return(
        <footer className="footer">
            <Link to={`/${lng}/privacy-policy`}>© 2024 LiftOff ZB. {t('footer').toString()}</Link>
        </footer>
    )
}