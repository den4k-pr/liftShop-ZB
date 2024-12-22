import { ProductGalery } from '../components/product/Galery'
import { Navigation } from '../components/product/Navigation'
import { Layout } from '../components/layout'
import React from 'react'

export const Product = () => {
    return(
        <Layout>
            <div className="product">
                <div className="productContainer container">
                    <ProductGalery />
                    <Navigation />
                </div>
            </div>
        </Layout>
    )
}