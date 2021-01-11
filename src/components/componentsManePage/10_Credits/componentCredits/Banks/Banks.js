import React from "react";
import "./Banks.sass";
import bankImg1 from "./imgBanks/bankImg1.png";
import bankImg2 from "./imgBanks/bankImg2.png";
import bankImg3 from "./imgBanks/bankImg3.png";
import {NavLink} from "react-router-dom";

const banksBlockInformation = [
    {
        img: bankImg1,
        text: " - це реальна можливість отримати доступ до невичерпного\n" +
            " джерела енергії.\n" +
            " \n" +
            "Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і\n" +
            "стільки ж відображає назад в космос. Річне виробництво електроенергії в світі\n" +
            " складає всього 2 сотих від цього числа, а шкоди приносить незрівнянно більше.\n",
    },
    {
        img: bankImg2,
        text: " - це реальна можливість отримати доступ до невичерпного\n" +
            " джерела енергії.\n" +
            " \n" +
            "Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і\n" +
            "стільки ж відображає назад в космос. Річне виробництво електроенергії в світі\n" +
            " складає всього 2 сотих від цього числа, а шкоди приносить незрівнянно більше.\n",
    },
    {
        img: bankImg3,
        text: " - це реальна можливість отримати доступ до невичерпного\n" +
            " джерела енергії.\n" +
            " \n" +
            "Щорічно Земля поглинає близько 1 мільярда терават-годин сонячної енергії і\n" +
            "стільки ж відображає назад в космос. Річне виробництво електроенергії в світі\n" +
            " складає всього 2 сотих від цього числа, а шкоди приносить незрівнянно більше.\n",
    }
]

const Banks = () => {
    return (
        <div className="containerBanks">
            {
                banksBlockInformation.map((banksInformation, index) => {
                    return (
                        <div className="borderBlock" key={index}>
                            <div className="bankBlock">
                                <div className="bankBlock__img">
                                    <img src={banksInformation.img} alt={`banksImg${index+1}`}/>
                                </div>
                                <div className="bankBlock__text">
                                    <span className="bankBlock__text-black">Сонячні електростанції</span> {banksInformation.text}
                                </div>
                                <div className="bankBlock__btnFindConditions">
                                    <NavLink to="">Дізнатися умови</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Banks;