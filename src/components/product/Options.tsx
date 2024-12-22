import { useState } from 'react';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { LanguageParams } from '../../templates';

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

      const { t } = useTranslation();
      const { lng } = useParams<LanguageParams>();
    return(
        <div className="navigation__options">
            <div className={`navigation__options-button ${options.one ? "activeOption" : ""}`}>
                <p onClick={() => handleClick({ el: "one" })}>{t('option1').toString()}</p>
                <img style={{transform: options.one ? "rotate(90deg)" : "rotate(-90deg)"}} className="button-arrow" src="../images/arrow.png" alt="" />
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
                <p onClick={() => handleClick({ el: "two" })}>{t('option2').toString()}</p>
                <img style={{transform: options.two ? "rotate(90deg)" : "rotate(-90deg)"}} className="button-arrow" src="../images/arrow.png" alt="" />
                <div className="button__content">
                    <span>
                        {t('option2Text').toString()}
                    </span>
                </div>
            </div>
            <div className={`navigation__options-button ${lng === "ua" ? "optionUa" : ""} ${options.three ? "activeOption" : ""}`}>
                <p onClick={() => handleClick({ el: "three" })}>{t('option3').toString()}</p>
                <img style={{transform: options.three ? "rotate(90deg)" : "rotate(-90deg)"}} className="button-arrow" src="../images/arrow.png" alt="" />
                <div className="button__content">
                    <span>
                        {t('option3Text').toString()}
                    </span>
                </div>
            </div>
        </div>
    )
}