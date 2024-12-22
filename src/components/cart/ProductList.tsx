import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../../redux/slices/cartSlice";


export const ProductList = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const handleRemove = (id: string, size: string) => {
        dispatch(removeItem({ id, size }));
    };

    const handleIncrement = (id: string, size: string) => {
        dispatch(incrementQuantity({ id, size }));
    };

    const handleDecrement = (id: string, size: string) => {
        dispatch(decrementQuantity({ id, size }));
    };

    return(
        <section className="productList">
            {cart.map(item => 
            <div key={item.id} className="productList-item">
                <div className="productList-itemWrapper">
                    <img className="productList-item-image" src="./images/galery/image-1.png" alt="" />
                    <nav className="productList-item__info">
                        <h3 className="productList-item__info-name">{item.name}</h3>
                        <p className="productList-item__info-size">Product Size: <span>{item.size}</span></p>
                        <nav className="productList-item__info-count">
                            <button onClick={() => handleDecrement(item.id, item.size)} className="count-button">-</button>
                                <span className="count">{item.quantity}</span>
                            <button onClick={() => handleIncrement(item.id, item.size)} className="count-button">+</button>
                        </nav>
                        <button onClick={() => handleRemove(item.id, item.size)} className="productList-item__info-remove">Remove</button>
                    </nav>
                </div>
                <span className="price">${item.totalPrice}</span>
            </div>)}
        </section>
    )
}