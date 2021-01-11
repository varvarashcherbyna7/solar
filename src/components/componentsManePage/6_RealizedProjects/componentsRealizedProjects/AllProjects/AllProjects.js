import React from "react";
import "./AllProjects.sass";
import line from "./imgallProjects/line.png";
import BlockImage from "./componentsAllProjects/BlockImage/BlockImage";


const AllProjects = () => {
    return (
        <div className="allProjects">
            <div className="allProjects__items">
                <div className="item">Всі проекти</div>
                <div className="itemImg">
                    <img src={line} alt="line"/>
                </div>
                <div className="item">peg структура</div>
                <div className="item">двусторонні модулі</div>
                <div className="item">опалення та гаряче водопостачання для Horeca</div>
                <div className="item">аукціони по ВДЕ</div>
            </div>
            <div className="allProjects__images">
                <div className="block">
                    <BlockImage/>
                </div>
            </div>
        </div>
    )
}
export default AllProjects;