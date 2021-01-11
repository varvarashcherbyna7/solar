import React from 'react';
import "./NavigationBreadCrumbs.sass";
import {NavLink} from "react-router-dom";

const NavigationBreadCrumbs = () => {
    return (
        <div className="containerNavigationBreadCrumbs">
            <ul className="breadcrumbNavigation">
                <li><NavLink to="/">Головна</NavLink></li>
                <li>Новини</li>
            </ul>
        </div>
    )
}

export default NavigationBreadCrumbs;