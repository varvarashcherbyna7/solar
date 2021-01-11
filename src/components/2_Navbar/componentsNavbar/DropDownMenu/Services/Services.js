import React from 'react';
import "./Services.sass";
import photoServices from "./imgServices/imgServices.png";

const Services = () => {
    return (
        <div className="containerServices">
            <div className="designing">
                <h3 className="designing__header">Проектування</h3>
                <ul className="designing__items">
                    <li>Дахові ФЄС</li>
                    <li>Водопостачання</li>
                    <li>Системи опалення</li>
                    <li>Комерційні ФЄС</li>
                    <li>Системи опалення та вентиляції</li>
                </ul>
            </div>
            <div className="assembling">
                <h3 className="assembling__header">Монтаж</h3>
                <ul className="assembling__items">
                    <li>Work package 5</li>
                    <li>Work package 5</li>
                    <li>Work package 5</li>
                    <li>Work package 5</li>
                    <li>Work package 5</li>
                    <li>Work package 5</li>
                </ul>
            </div>
            <div className="teaching">
                <h3 className="teaching__header">Навчання</h3>
                {/*<ul className="teaching__items">*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*    <li></li>*/}
                {/*</ul>*/}
            </div>
            <div className="photoServices">
                <img src={photoServices} alt="photo Services"/>
            </div>

        </div>
    )
}

export default Services;