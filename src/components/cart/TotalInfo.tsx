import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

export const TotalInfo = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const cart = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
        // @ts-ignore
        setTotalPrice(total.toFixed(2));
    }, [cartItems]);


    const stripePromise = loadStripe(
        "pk_test_51MfrTsBUu2QbkaK8MqSsjNFfsgeQl6DLgyPuQO5W8IXIO8ZakVs1f9HztDLGQ91KpWOOCAgDJyfEzAqe1TG6PiKj00E7Cjcukq"
      );
    
      const handleCheckout = async () => {
        const stripe = await stripePromise;
    
        const response = await fetch("http://localhost:3000/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cart }),
        });
        const checkoutSession = await response.json();
    
        const result: any = await stripe?.redirectToCheckout({
          sessionId: checkoutSession.id,
        });
        if (result.error) {
          alert(result?.error.message);
        }
    };

    return (
        <section className="totalInfo">
            <div className="totalInfo-amount">
                <h4>Subtotal</h4>
                <span className="price">${totalPrice}</span>
            </div>
            <button className="totalInfo-checkOut" onClick={handleCheckout}>Check Out</button>
            <span className="totalInfo-text">Shipping, taxes, and discount codes calculated at checkout.</span>
        </section>
    );
};
