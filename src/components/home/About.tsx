import React from 'react';

export const About = () => {

    const arrowOfSentences = [
        "Premium Quality Gear",
        "Trusted by Athletes Worldwide",
        "Fast Shipping Guaranteed",
        "Support & Stability",
        "Improve Your Performance",
        "Limited Stock Available",
        "Top Choice for Athletes",
        "Train Harder",
        "Perfect Fit Design",
    ]

    return(
        <section className="about">
            {/* <img className="about-ring" src="./images/ring.svg" alt="ring" /> */}
            <div className="about__line">
                <ul className="about__line-list">
                    {arrowOfSentences.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
            <div className="about__content">
                <div className="about__content-iproduct">
                    {/* <img className="about__content-iproduct-image" src="./images/product.png" alt="product" /> */}
                </div>
                <div className="about__content-info">
                    <div className="info-body">
                        <h2 className="second-title">Choosing the Right Knee Sleeves</h2>
                        <p className="main-text">
                            Choosing the right gear is essential for safety and performance. Knee sleeves are more than just an accessory—they provide crucial support and stability during workouts. 
                            Whether lifting heavy, squatting, or doing cardio, they protect your joints, enhance performance, and reduce injury risk. <br/><br/>
                            Opt for knee sleeves that balance comfort, durability, and compression. Strong yet flexible materials ensure mobility without compromising support, helping you train harder and recover faster.
                        </p>
                        <button className="main-button">See more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}