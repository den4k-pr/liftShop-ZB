import { useState } from 'react';
import React from 'react'

export const Options = () => {
    const [options, setOptions] = useState({one: false, two: false, three: false})

    const handleClick = ({el}: {el: any}) => {
        setOptions((prevState: any) => ({
          ...prevState,
          [el]: !prevState[el],
        }));
      };

    const tableData = [
        { size: '3XS', cm: '23-25.5', inch: '9-10' },
        { size: '2XS', cm: '25.5-28', inch: '10-11' },
        { size: 'XS', cm: '28-30.5', inch: '11-12' },
        { size: 'S', cm: '30.5-33', inch: '12-13' },
        { size: 'M', cm: '33-35.5', inch: '13-14' },
        { size: 'L', cm: '35.5-38', inch: '14-15' },
        { size: 'XL', cm: '38-40.5', inch: '15-16' },
        { size: '2XL', cm: '40.5-43', inch: '16-17' },
        { size: '3XL', cm: '43-45.5', inch: '17-17.9' },
        { size: '4XL', cm: '45.5-48', inch: '17.9-18.9' },
        { size: '5XL', cm: '48-51.5', inch: '18.9-20.3' },
      ];

    return(
        <div className="navigation__options">
            <div className={`navigation__options-button ${options.one ? "activeOption" : ""}`}>
                <p onClick={() => handleClick({ el: "one" })}>Size guide</p>
                <img style={{transform: options.one ? "rotate(90deg)" : "rotate(-90deg)"}} className="button-arrow" src="./images/arrow.png" alt="" />
                <div className="button__content">
                    <table>
                        <thead>
                        <tr>
                            <th>Size</th>
                            <th>Knee Joint (cm)</th>
                            <th>Knee Joint (in)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                            <td>{row.size}</td>
                            <td>{row.cm}</td>
                            <td>{row.inch}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`navigation__options-button ${options.two ? "activeOption" : ""}`}>
                <p onClick={() => handleClick({ el: "two" })}>How to measure</p>
                <img style={{transform: options.two ? "rotate(90deg)" : "rotate(-90deg)"}} className="button-arrow" src="./images/arrow.png" alt="" />
                <div className="button__content">
                    <span>
                        Measure the circumference of your knee joint with your leg out straight, keeping your muscles relaxed. Measure around the centre of your kneecap (at the patella), and around the thickest part of your calf. If your calf is more than 4cm (1.6in) larger than your knee, then you may wish to size up to ensure a good fit.
                        <br/><br/>
                        If you want a tight fit best suited to powerlifting and squatting, we recommend sizing down. A regular fitting knee sleeve will be snug.
                        <br/><br/>
                        If you are new to wearing knee sleeves we recommend going with the recommended fit instead of sizing down, especially if you fall on size medium or smaller.
                    </span>
                </div>
            </div>
            <div className={`navigation__options-button ${options.three ? "activeOption" : ""}`}>
                <p onClick={() => handleClick({ el: "three" })}>care instructions</p>
                <img style={{transform: options.three ? "rotate(90deg)" : "rotate(-90deg)"}} className="button-arrow" src="./images/arrow.png" alt="" />
                <div className="button__content">
                    <span>
                        We recommend hand washing your knee sleeves with water or a mild detergent (or a specialist neoprene/wetsuit detergent), then allow the sleeves to air dry standing up.
                        <br/><br/>
                        The spin cycle of a washing machine can damage the sleeve, as the knee sleeves become quite bulky when wet and can potentially get caught up or damaged by wringing. High heat from a washing machine or a dryer will degrade the rubber in the sleeves (potentially causing shrinkage or brittleness).
                    </span>
                </div>
            </div>
        </div>
    )
}