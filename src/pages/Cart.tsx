import { useSelector } from "react-redux";
import { ProductList } from "../components/cart/ProductList"
import { TotalInfo } from "../components/cart/TotalInfo"
import { Layout } from "../components/layout"
import { RootState } from "../redux/store";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageParams } from "../templates";

export const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.items);

    const { t } = useTranslation();
    const { lng } = useParams<LanguageParams>();

    return (
        <Layout>
            <div className="cart">
                <h2 className="cart-title">{t('cartTitle')}</h2>
                <div className="cart__wrapper container">
                    {cart.length === 0 ? 
                    <div className="cart__wrapper-blankList">
                        <p>{t('cartSubTitle')}</p>
                        <Link to={`/${lng}/product`}>{t('cartReturn')}</Link>
                    </div>
                    :
                    <>
                        <ProductList />
                        <TotalInfo />
                    </>
                    }
                </div>
            </div>
        </Layout>
    )
}