import { useState } from "react"
import { Link } from "react-router-dom"
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import React from 'react';

export const Header = () => {
    const [burgerState, setBurgerState] = useState(false)
    const cart = useSelector((state: RootState) => state.cart.items);
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="header">
            <div className="wrapper">
                <nav className="burger">
                    <button onClick={() => setBurgerState(!burgerState)} className={`burgerButton ${burgerState ? "active" : ""}`}>
                        <div className="burgerButton-line"></div>
                        <div className="burgerButton-line"></div>
                        <div className="burgerButton-line"></div>
                    </button>
                    <ul className="burger__menu" style={{top: burgerState ? "0" : "-100%"}}>
                        <li>
                            <Link onClick={() => setBurgerState(false)} className="burger__menu-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => setBurgerState(false)} className="burger__menu-link" to="/product">Product</Link>
                        </li>
                        <li>
                            <Link onClick={() => setBurgerState(false)} className="burger__menu-link" to="/privacy-policy">Privacy</Link>
                        </li>
                        <li>
                            <Link className="burger__menu-linkImg" to="https://www.instagram.com/zalevskiib17/">
                                <img className="instagram" src="./images/instagram.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link className="burger__menu-linkImg ico" to="https://www.tiktok.com/@zalevskib17">
                                <img className="ico" src="./images/tiktok.png" alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link className="burger__menu-linkImg ico" to="https://t.me/ZalevskyiPowerlifting">
                                <img className="ico" src="./images/telegram.png" alt="" />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="logo__body">
                    <Link className="logo" to="/">
                        <img src="./images/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className="basket">
                    <Link to="/cart">
                        <img src="./images/basket.svg" alt="basket" />
                        {total === 0 ? <></> : <span className={`quantity ${total === 0 ? "" : "animate-tada"}`}>{total}</span>}
                    </Link>
                </div>
            </div>
        </header>
    )
}