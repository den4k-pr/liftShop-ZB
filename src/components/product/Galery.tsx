import { useState } from 'react';
import Slider from "react-slick";
import React from 'react'

export const ProductGalery = () => {
    const [imageIndex, setImageIndex] = useState(1)

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <section className="product__galery">
            <ul className="product__galery-list">
                {[1,2,3,4,5].map(el =>
                    <li onClick={() => setImageIndex(el)} className="product__galery-list-image">
                        <img src={`./images/galery/image-${el}.png`} alt={`image-${el}`} />
                    </li>
                )}
            </ul>
            <ul className="product__galery-mobileList">
                <Slider {...settings}>
                {[1,2,3,4,5].map(el =>
                    <li className="product__galery-mobileList-image">
                        <img src={`./images/galery/image-${el}.png`} alt={`image-${el}`} />
                    </li>
                )}
                </Slider>
            </ul>
            <img className="product__galery-mainImage" src={`./images/galery/image-${imageIndex}.png`} alt="image" />
        </section>
    )
}