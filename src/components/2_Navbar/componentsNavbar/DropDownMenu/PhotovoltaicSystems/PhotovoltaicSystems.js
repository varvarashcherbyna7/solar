import React from 'react';
import photoPhotovoltaicSystem from "./imgPhotoVS/imgPVS.png";
import "./PhotovoltaicSystems.sass";

const PhotovoltaicSystem = () => {
    return (
        <div className="containerPhotovoltaicSystem">
            <div className="equipment">
                <h3 className="equipment__headerText">Обладнання</h3>
                <ul className="equipment__items">
                    <li>Jolywod</li>
                    <li>Longi</li>
                    <li>SMA</li>
                    <li>Huawai</li>
                    <li>work package 5</li>
                </ul>
            </div>
            <div className="decision">
                <h3 className="decision__headerText">Рішення</h3>
                <ul className="decision__items">
                    <li>Наземні ФЕС</li>
                    <li>Дахові ФЕС</li>
                    <li>Комерційні ФЕС</li>
                </ul>
            </div>
            <div className="photoContainer">
                <img src={photoPhotovoltaicSystem} alt="photo Photovoltaic System"/>
            </div>
        </div>
    )
}

export default PhotovoltaicSystem;