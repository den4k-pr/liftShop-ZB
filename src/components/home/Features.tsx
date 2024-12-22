import React from 'react';

export const Features = () => {
    return(
        <section className="features">
            <div className="features__row">
                <div className="features__row-black ring-one">
                    <div className="features__row-black-info">
                        <h2 className="second-title">Premium Quality Materials</h2>
                        <p className="second-subTitle">Engineered for Durability and Long-Lasting Performance</p>
                        <span className="main-text">These knee sleeves are crafted from reinforced, high-quality materials designed to withstand the rigors of heavy training. They offer unmatched durability and reliability, ensuring long-term use without compromising on performance.</span>
                    </div>
                </div>
                <div className="features__row-white bdW-1">
                    {/* img */}
                </div>
            </div>
            <div className="features__row centralBlock">
                <div className="features__row-white bdW-2">
                    {/* img */}
                </div>
                <div className="features__row-black ring-two">
                    <div className="features__row-black-info">
                        <h2 className="second-title">Perfect Fit & Comfort</h2>
                        <p className="second-subTitle">Ergonomically Designed for a Snug and Comfortable Fit</p>
                        <span className="main-text">The knee sleeves contour perfectly to your body, ensuring a tight yet comfortable fit that won't slip, slide, or restrict movement. This ergonomic design allows you to train longer and harder without discomfort.</span>
                    </div>
                </div>
            </div>
            <div className="features__row">
                <div className="features__row-black ring-three">
                    <div className="features__row-black-info">
                        <h2 className="second-title">Athlete Approved</h2>
                        <p className="second-subTitle">Trusted by Top Athletes Worldwide</p>
                        <span className="main-text">Used by elite athletes, powerlifters, and CrossFit champions, these knee sleeves are proven to enhance strength and performance. Trusted globally, they offer the confidence needed to push your limits safely.</span>
                    </div>
                </div>
                <div className="features__row-white bdW-3">
                    {/* img */}
                </div>
            </div>
        </section>
    )
}