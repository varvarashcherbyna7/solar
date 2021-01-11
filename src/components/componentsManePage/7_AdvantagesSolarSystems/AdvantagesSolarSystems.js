import React from 'react';
import "./AdvantagesSolarSystems.sass";
import imgTextLeft from "./imgAdvantagesSolarSystems/img_textLeft.png";
import AdvantagesSSBusiness from "./componentsAdvantagesSolarSystems/AdvantagesSSBusiness/AdvantagesSSBusiness";


const AdvantagesSolarSystems = () => {
    return (
        <div className="containerAdvantagesSolarSystems">

            <div className="containerAdvantagesSolarSystems__imgTextLeft">
                <img src={imgTextLeft} alt="imgTextLeft"/>
            </div>

            <div className="containerAdvantagesSolarSystems__context">
                <div className="headerText">
                    <span className="headerText-yellow">ПЕРЕВАГИ</span> СОНЯЧНИХ СИСТЕМ
                    <br/> ДЛЯ БІЗНЕСУ
                </div>
                <AdvantagesSSBusiness/>
            </div>


        </div>
    )
}

export default AdvantagesSolarSystems;