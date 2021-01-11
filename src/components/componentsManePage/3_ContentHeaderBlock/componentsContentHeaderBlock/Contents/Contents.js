import React from 'react';
import "./Contents.sass";
import {NavLink} from "react-router-dom";

const Contents = (props) => {
    return (
        <div className={props.state.clicked ? "contents" : "contents active"}>
            <div className="contents__head">
                <div><NavLink to={"/"}>Сонячні</NavLink></div>
                <div><NavLink to={"/"}>електростанції</NavLink></div>
            </div>
            <div className="contents__information">
                Монтаж. Підключення. Моніторинг
            </div>
            <div className="contents__order">
                <NavLink to={""}>
                    <div className="contents__order-btn">Замовити проект</div>
                </NavLink>
                <div className="contents__order-video">
                    <div className="contents__order-text">ВІДЕО</div>
                    <NavLink to={""}>
                        <div className="whiteCircle"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Contents;