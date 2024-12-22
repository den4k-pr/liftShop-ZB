import { useDispatch } from "react-redux";
import { Options } from "./Options"
import { addItem } from "../../redux/slices/cartSlice";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from 'react'
import { useTranslation } from "react-i18next";
import { LanguageParams } from "../../templates";


export const Navigation = () => {
    const [sizeValue, setSizeValue] = useState('')
    const dispatch = useDispatch();

    const { t } = useTranslation()
    const { lng } = useParams<LanguageParams>();

    const handleAddToCart = (id: string, name: string, size: string, price: number) => {
        dispatch(addItem({ id, name, size, price }));
    };

    const sizes = ['3XS', '2XS', 'XS', 'C', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']

    return(
        <section className="navigation">
            <div className="navigation__top">
                <h2 className="navigation__top-title">Knee Sleeves</h2>
                <p className="navigation__top-price">$1</p>
            </div>
            <div className="navigation__center">
                <h3 className="navigation__center-title">{t('productSize')}</h3>
                <ul className="navigation__center-sizes">
                    {sizes.map(el =>
                        <li className={sizeValue === el ? "choosedSize" : "" } key={el} onClick={() => setSizeValue(el)}>
                            {el}
                        </li>
                    )}
                </ul>
                <Link to={`/${lng}/cart`} style={{display: "block", color: "#272727"}} onClick={() => handleAddToCart('1', 'Knee Sleeves', sizeValue, 1)} className={`navigation__center-addToCart ${sizeValue === "" && "disabledButton"}`}>{t('productButton')}</Link>
            </div>
            <div className="navigation__bottom">
                <span className="navigation-text">{t('productText')}</span>
                <ul className="navigation__bottom-list">
                    <li>{t('productLi1')}</li>
                    <li>{t('productLi2')}</li>
                    <li>{t('productLi3')}</li>
                    <li>{t('productLi4')}</li>
                    <li>{t('productLi5')}</li>
                    <li>{t('productLi6')}</li>
                    <li>{t('productLi7')}</li>
                </ul>
                <Options />
            </div>
        </section>
    )
}