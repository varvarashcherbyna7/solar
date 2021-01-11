import React from 'react';
import "./BatteryTypes.sass";
import textAboutUs from "./imgBatteryTypes/imgAboutUs.png"
import ThreeBlocksAboutUs from "./componentsBatteryTypes/ThreeBlocksAboutUs/ThreeBlocksAboutUs";
import SupplySolarPowerPlants from "./componentsBatteryTypes/SupplySolarPowerPlants/SupplySolarPowerPlants";

const BatteryTypes = () => {
    return (
        <div className="containerBatteryTypes">
            <div className="containerBatteryTypes__rightText">
                <img src={textAboutUs} alt="text About Us"/>
            </div>
            <div className="containerBatteryTypes__context">
                    <ThreeBlocksAboutUs/>
                    <SupplySolarPowerPlants/>
            </div>
        </div>
    )
}

export default BatteryTypes;