import React from "react";
import "./Credits.sass";
import Banks from "./componentCredits/Banks/Banks";

const Credits = () => {
    return (
        <div className="containerCredit">
            <div className="containerCredit__context">
                <div className="blockText">
                    <div className="blockText__headerText">
                        <span className="blockText__headerText-yellow">Кредит</span><br/> на сонячні електростанції
                    </div>
                    <div className="blockText__text">
                        <span className="blockText__text-black">Сонячні електростанції</span> - це реальна можливість
                        отримати доступ до невичерпного
                        джерела енергії.

                        Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і
                        стільки ж відображає назад в космос. Річне виробництво електроенергії в світі
                        складає всього 2 сотих від цього числа,
                        а шкоди приносить незрівнянно більше. <span className="blockText__text-black">Сонячні електростанції</span> - це реальна можливість
                        отримати доступ до невичерпного
                        джерела енергії.
                    </div>
                </div>
                <Banks/>
            </div>
        </div>
    )
}

export default Credits;