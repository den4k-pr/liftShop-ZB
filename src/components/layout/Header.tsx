import { useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { useOutside } from "../../hooks/useOutside";
import { LanguageParams } from "../../templates";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const [burgerState, setBurgerState] = useState(false)
    const { lng } = useParams<LanguageParams>();
    const { t } = useTranslation();
    const [language, setLanguage] = useState(lng)
    const cart = useSelector((state: RootState) => state.cart.items);
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    const { ref, isShow, setIsShow } = useOutside(false)

    const location = useLocation();
  
    const pathSegment = location.pathname.split('/').pop();

    const hendleChangeLang = (el: string) => {
        setLanguage(el)
        window.location.href = `/${el}/${pathSegment ===  "cart" || pathSegment ===  "product" || pathSegment ===  "privacy-policy" ? pathSegment : ""}`
    }

    return (
        <header className="header">
            <div className="wrapper">
                <nav className="burger">
                    <button onClick={() => setBurgerState(!burgerState)} className={`burgerButton ${burgerState ? "active" : ""}`}>
                        <div className="burgerButton-line"></div>
                        <div className="burgerButton-line"></div>
                        <div className="burgerButton-line"></div>
                    </button>
                    <ul className="burger__menu" style={{top: burgerState ? "0" : "-150%", visibility: burgerState ? "visible" : "hidden", opacity: burgerState ? 1 : 0}}>
                        <li>
                            <Link onClick={() => setBurgerState(false)} className="burger__menu-link" to={`/${lng}/`}>{t('link1').toString()}</Link>
                        </li>
                        <li>
                            <Link onClick={() => setBurgerState(false)} className="burger__menu-link" to={`/${lng}/product`}>{t('link2').toString()}</Link>
                        </li>
                        <li>
                            <Link onClick={() => setBurgerState(false)} className="burger__menu-link" to={`/${lng}/privacy-policy`}>{t('link3').toString()}</Link>
                        </li>
                        <li>
                            <Link className="burger__menu-linkImg" to="https://www.instagram.com/zalevskiib17/">
                                <img className="instagram" src="../images/instagram.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link className="burger__menu-linkImg ico" to="https://www.tiktok.com/@zalevskib17">
                                <img className="ico" src="../images/tiktok.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link className="burger__menu-linkImg ico" to="https://t.me/ZalevskyiPowerlifting">
                                <img className="ico" src="../images/telegram.png" alt="" />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="logo__body">
                    <Link className="logo" to={`/${lng}/`}>
                        <img src="../images/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className="languageButtons">
                    <button onClick={() => setIsShow(!isShow)} className="languageButtons-choosed">
                        <img src={`../images/languages/${language}.png`} alt="" />
                    </button>
                    <ul ref={ref} style={{transform: isShow ? "translateY(0)" : "translateY(-100%)", visibility: isShow ? "visible" : "hidden", opacity: isShow ? 1 : 0}} className="languageButtons__list">
                        {['ua', 'pl', 'en'].filter(el => el !== language).map(el =>
                            <li onClick={() => hendleChangeLang(el)} className="languageButtons__list-link">
                                <span>{el.toUpperCase()}</span><img style={{transform: el === "en" ? "scale(0.9)" : "initial"}} src={`../images/languages/${el}.png`} alt="" />
                            </li>
                    )}
                    </ul>
                </div>
                <div className="basket">
                    <Link to={`/${lng}/cart`}>
                        <img src="../images/basket.svg" alt="basket" />
                        {total === 0 ? <></> : <span className={`quantity ${total === 0 ? "" : "animate-tada"}`}>{total}</span>}
                    </Link>
                </div>
            </div>
        </header>
    )
}