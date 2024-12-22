import { ProductList } from "../components/cart/ProductList"
import { TotalInfo } from "../components/cart/TotalInfo"
import { Layout } from "../components/layout"
import React from 'react'

export const Cart = () => {
    return (
        <Layout>
            <div className="cart">
                <h2 className="cart-title">Cart</h2>
                <div className="cart__wrapper container">
                    <ProductList />
                    <TotalInfo />
                </div>
            </div>
        </Layout>
    )
}