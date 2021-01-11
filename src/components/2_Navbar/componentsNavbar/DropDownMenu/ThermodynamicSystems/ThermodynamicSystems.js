import React from "react";
import "./ThermodynamicSystems.sass";

const ThermodynamicSystems = () => {
    return (
        <div className="containerThermodynamicSystems">
            <div className="equipment">
                <h3 className="equipment__header">Обладнання</h3>
                <ul className="equipment__list">
                    <li>Energie</li>
                    <li>Climer</li>
                </ul>
            </div>
            <div className="decision">
                <h3 className="decision__header">Рішення</h3>
                <ul className="decision__list">
                    <li>Опалення та гаряче водопостачання для HORECA</li>
                    <li>Нагрів басейна</li>
                    <li>Котеджні городки</li>
                    <li>Малоповерхове будівництво</li>
                    <li>Work package 5</li>
                </ul>
            </div>
        </div>
    )
}

export default ThermodynamicSystems;