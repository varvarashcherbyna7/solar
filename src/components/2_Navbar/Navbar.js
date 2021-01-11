import React from 'react';
import "./Navbar.sass";
import Logo from "./componentsNavbar/Logo/Logo";
import PhotovoltaicSystem from "./componentsNavbar/DropDownMenu/PhotovoltaicSystems/PhotovoltaicSystems";
import ThermodynamicSystems from "./componentsNavbar/DropDownMenu/ThermodynamicSystems/ThermodynamicSystems";
import Services from "./componentsNavbar/DropDownMenu/Services/Services";

const Navbar = (props) => {
    return (
        <div className="containerNavbar">
            <div className="containerNavbar__context">
                <nav className="nav">
                    <Logo/>
                    <div className="nav__menuIcon"
                         onClick={props.handleClick}>
                        <i className={props.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={props.state.clicked ? "nav__items active" : " nav__items"}>
                        <li className="nav__item nav__item-textLeft nav__item-position dropdown">
                            <div className="nav__item-container">
                                <div>Фотоелектричні <span className="arrowDown arrowRight"/></div>
                                <div>системи</div>
                            </div>
                            <div className="dropdown-content">
                                <PhotovoltaicSystem/>
                            </div>
                        </li>
                        <li className="nav__item nav__item-textLeft nav__item-position dropdown">
                            <div className="nav__item-container">
                                <div>Термодинамічні <span className="arrowDown arrowRight"/></div>
                                <div>системи</div>
                            </div>
                            <div className="dropdown-content">
                                <ThermodynamicSystems/>
                            </div>
                        </li>
                        <li className="nav__item nav__item-position dropdown">
                            <div className="nav__item-container">
                                <div>Послуги <span className="arrowDown arrowDown-marginRight arrowRight"/></div>
                            </div>
                            <div className="dropdown-content">
                                <Services/>
                            </div>
                        </li>
                        <li className="nav__item nav__item-position dropdown">
                            <div className="nav__item-container">
                                <div>Кредитування<span className="arrowDown arrowRight"/></div>
                            </div>
                            <div className="dropdown-content">
                                {/*<Credit/>*/}
                            </div>
                        </li>
                        <li className="nav__item nav__item-position dropdown">
                            <div className="nav__item-container">
                                <div>Проекти <span className="arrowDown arrowDown-marginRight arrowRight"/></div>
                            </div>
                            <div className="dropdown-content">
                                {/*<Projects/>*/}
                            </div>
                        </li>
                        <li className="nav__item nav__item-position">
                            <div className="nav__item-container">
                                Агрівольтаівка
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;