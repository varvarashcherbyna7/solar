import React from 'react';
import './CompanyInfoItems.sass';
import {NavLink} from "react-router-dom";

const CompanyInfoItems = (props) => {

        return (
            <div className={ props.state.clicked ? "information active" : "information" }>
                <ul className="information__company">
                    <li><NavLink to="">Компанія</NavLink></li>
                    <li><NavLink to="">Контакти</NavLink></li>
                    <li><NavLink to="">Політика конфіденційності</NavLink></li>
                    <li><NavLink to="">Новини</NavLink></li>
                </ul>
                <ul className="information__language">
                    <li><NavLink to="">ua</NavLink></li>
                    <li><NavLink to="">ru</NavLink></li>
                    <li><NavLink to="">eng</NavLink></li>
                </ul>
            </div>
        )
}

export default CompanyInfoItems;