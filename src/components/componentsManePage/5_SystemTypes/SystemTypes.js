import React from 'react';
import "./SystemTypes.sass";
import imgTextLeft from "./imgSystemTypes/text_left.png"
import stick from "./imgSystemTypes/tick.png";

const SystemTypes = () => {
    return (
        <div className="containerSystemTypes">

            <div className="containerSystemTypes__bgs">

                <div className="containerPhotovoltaicSystems">
                    <div className="imgTextLeft">
                        <img src={imgTextLeft} alt="Text System"/>
                    </div>
                </div>
                <div className="containerThermodynamicSystems"/>

                <div className="container__context">
                    <div className="container__context-width">
                        <div className="headerText">
                            <h2>
                                <span className="headerText-yellow">
                                    Фотоелектричні <br/>
                                </span>
                                системи
                            </h2>
                        </div>
                        <div className="listContainer">
                            <ul>
                                <li>
                                    <div className="containerImgStick">
                                        <img src={stick} alt="stick1"/>
                                    </div>
                                    <div>установка системи без обмежень
                                        в ландшафтах і поверхнях</div>
                                </li>
                                <li>
                                    <div className="containerImgStick">
                                        <img src={stick} alt="stick2"/>
                                    </div>
                                    <div>екологічно чистий і безпечний
                                        джерело енергії</div>
                                </li>
                                <li>
                                    <div className="containerImgStick">
                                        <img src={stick} alt="stick3"/>
                                    </div>
                                    <div>широкі можливості використання
                                        в будь-якій точці країни</div>
                                </li>
                            </ul>

                        </div>
                        <div className="btn">
                            детальніше
                        </div>
                    </div>
                    <div className="container__context-width">
                        <div className="headerText">
                            <h2>
                                <span className="headerText-yellow">
                                    Термодинамічні <br/>
                                </span>
                                системи
                            </h2>
                        </div>
                        <div className="listContainer">
                            <ul>
                                <li>
                                    <div className="containerImgStick">
                                        <img src={stick} alt="stick4"/>
                                    </div>
                                    <div>установка системи без обмежень
                                        в ландшафтах і поверхнях</div>
                                </li>
                                <li>
                                    <div className="containerImgStick">
                                        <img src={stick} alt="stick5"/>
                                    </div>
                                    <div>екологічно чистий
                                        і безпечний джерело енергії</div>
                                </li>
                                <li>
                                    <div className="containerImgStick">
                                        <img src={stick} alt="stick6"/>
                                    </div>
                                    <div>широкі можливості використання
                                        в будь-якій точці країни</div>
                                </li>
                            </ul>

                        </div>
                        <div className="btn">
                            детальніше
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SystemTypes;