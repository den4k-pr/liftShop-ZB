import React from 'react';

export const Greeting =() => {

    return(
        <section className="greeting">
            <div className="greeting__content container">
                <div className="greeting__content-info">
                    <div className="greeting__content-info-top">
                        <span className="underTitle">make your</span>
                        <h1 className="title">
                            Body stronger
                        </h1>
                        <p className="subTitle">
                            Elevate your training with the ultimate knee protection.
                        </p>
                    </div>
                    <div className="greeting__content-info-bottom">
                        <span className="greeting-text">
                            Order SBD knee sleeves now and get a free keychain! <br/>Don't miss out on this limited-time offer!
                        </span>
                        <button className="greeting-button">
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* <img className="greeting__content-image" src="./images/product.png" alt="product" /> */}
            </div>
        </section>
    )
}