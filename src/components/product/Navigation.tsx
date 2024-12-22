import { useDispatch } from "react-redux";
import { Options } from "./Options"
import { addItem } from "../../redux/slices/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'


export const Navigation = () => {
    const [sizeValue, setSizeValue] = useState('')
    const dispatch = useDispatch();

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
                <h3 className="navigation__center-title">Product Size</h3>
                <ul className="navigation__center-sizes">
                    {sizes.map(el =>
                        <li className={sizeValue === el ? "choosedSize" : "" } key={el} onClick={() => setSizeValue(el)}>
                            {el}
                        </li>
                    )}
                </ul>
                <Link to="/cart" style={{display: "block", color: "#272727"}} onClick={() => handleAddToCart('1', 'Knee Sleeves', sizeValue, 1)} className={`navigation__center-addToCart ${sizeValue === "" && "disabledButton"}`}>Add to cart</Link>
            </div>
            <div className="navigation__bottom">
                <span className="navigation-text">Manufactured with high grade 7mm neoprene and designed to aid performance, these knee sleeves are relied on by strength athletes around the world and are ideal for powerlifting and heavy training.</span>
                <ul className="navigation__bottom-list">
                    <li>Sold as a pair.</li>
                    <li>IPF approved and IWF compliant with the maximum allowable 30cm length.</li>
                    <li>7mm high grade neoprene for maximal support.</li>
                    <li>Reinforced seam construction to maximise longevity.</li>
                    <li>Antimicrobial treatment minimises the build-up of bacteria and reduces odour.</li>
                    <li>Patented design.</li>
                    <li>Manufactured in Great Britain.</li>
                </ul>
                <Options />
            </div>
        </section>
    )
}