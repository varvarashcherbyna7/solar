import React from "react";
import "./SupplySolarPowerPlants.sass";
import photo from "./imgcontainerSupplySolarPowerPlants/img.png";
import {NavLink} from "react-router-dom";

const SupplySolarPowerPlants = () => {
    return (
        <div className="containerSupplySolarPowerPlants">
            <div className="containerSupplySolarPowerPlants__content">
                <div className="headerText">
                    Пропонуємо сонячні електростанції
                     <span className="headerText-yellow"> різних типів
                    і потужностей </span>
                    для дому та бізнесу.
                </div>
                <div className="text">
                    Основним завданням компанії є зменшення зведеної вартості
                    електроенергії (LCOE). З цією метою ми стали офіційним дистриб‘ютором
                    найбільшого світового виробника монокристалічних сонячних модулів
                    – <span className="text-black"> LONGi Solar </span>,
                    та провідного світового виробника монокристалічних
                    двосторонніх модулів
                    <span className="text-black"> N-типу - JOLYWOOD Solar Technology </span>.
                </div>
                <NavLink to={""}>
                    <div className="btn">
                        детальніше
                    </div>
                </NavLink>
            </div>

            <div className="containerSupplySolarPowerPlants__img">
                <img src={photo} alt="photo"/>
            </div>
        </div>
    )
}

export default SupplySolarPowerPlants;