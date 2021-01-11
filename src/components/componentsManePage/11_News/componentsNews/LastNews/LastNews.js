import React from "react";
import "./LastNews.sass";
import {NavLink} from "react-router-dom";


const LastNews = () => {
    return (
        <div className="blockLastNews">
            <div className="blockLastNews__headerText">
                Останні новини <span className="blockLastNews__headerText-yellow">Solar Systems</span>
            </div>
            <div className="blockLastNews__text">
                Мережеві сонячні електростанції під "зелений"
                тариф мають дуже великі перспективи в Україні.
            </div>

            <NavLink to="" className="blockLastNews__blockBtn">
                <div className="btn">
                    усі новини
                </div>
            </NavLink>

            <div className="blockLastNews__btnArrows">
                <div className="btnArrowLeft">
                    <div className="containerArrowLeft">
                        <div className="arrowLeft"/>
                    </div>
                </div>
                <div className="btnArrowRight">
                    <div className="containerArrowRight">
                        <div className="arrowRight"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastNews;