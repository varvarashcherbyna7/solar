import React from 'react';
import "./Agrovoltaics.sass";
import imageAgrovoltaics from "./imgAgrovoltaics/imgAgrovoltaics.png";

const Agrovoltaics = () => {
    return (
        <div className="containerAgrovoltaics">
            <div className="context">
                <div className="context__text">
                    <div className="headerText">
                        Агрівольтаіка
                    </div>
                    <div className="text">
                        <p><span className="text-black">Сонячні електростанції</span> - це реальна можливість отримати
                            доступ до невичерпного
                            джерела енергії.

                            Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і
                            стільки ж відображає назад в космос. Річне виробництво електроенергії в світі
                            складає всього 2 сотих від цього числа, а шкоди приносить незрівнянно більше.
                        </p>
                        <p>
                            Традиційні методи отримання електроенергії трудомісткі, дорогі і небезпечні для
                            довкілля. <span className="text-black">Сонячні електростанції</span> - це реальна можливість
                            отримати доступ до невичерпного
                            джерела енергії.
                            Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і
                            стільки ж відображає назад в космос.
                        </p>

                    </div>
                    <div className="btn">
                        детальніше
                    </div>
                </div>

                <div className="context__img">
                    <img src={imageAgrovoltaics} alt="image Agrovoltaics"/>
                </div>
            </div>
        </div>
    )
}

export default Agrovoltaics;