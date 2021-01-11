import React from "react";
import "./Footer.sass";
import iconA from "./imgFooter/iconA.png";
import logoImg from "./imgFooter/imgLogo.png";
import logoText from "./imgFooter/textLogo.png";
import iconLocation from "./imgFooter/pinLocation.png";
import iconPhone from "./imgFooter/pinPhone.png";
import iconEmail from "./imgFooter/pinEmail.png";
import iconClock from "./imgFooter/pinClock.png";
import iconFB from "./imgFooter/iconFB.png";
import iconIN from "./imgFooter/iconIN.png";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="containerFooter__context">
                <div className="informationBlockFooter">
                    <div className="information__blockLogo">
                        <div className="logoContainer">
                            <div className="logoContainer__logoImg">
                                <img src={logoImg} alt="logo image solar"/>
                            </div>
                            <div className="logoContainer__logoText">
                                <img src={logoText} alt="logo text solar"/>
                            </div>
                        </div>

                        <div className="contactsContainer">
                            <div className="contactsContainer__blockIconInformation">
                                <div className="contactsContainer__blockIconInformation-icon">
                                    <img src={iconLocation} alt={"iconLocation"}/>
                                </div>
                                <div className="contactsContainer__blockIconInformation-text">
                                    Київ, вул. Велика Васильківська 72 А, <br/>
                                    8 поверх
                                </div>
                            </div>
                            <div className="contactsContainer__blockIconInformation">
                                <div className="contactsContainer__blockIconInformation-icon">
                                    <img src={iconPhone} alt="iconPhone"/>
                                </div>
                                <div className="contactsContainer__blockIconInformation-text">
                                    (044) 3614914
                                </div>
                            </div>
                            <div className="contactsContainer__blockIconInformation">
                                <div className="contactsContainer__blockIconInformation-icon">
                                    <img src={iconEmail} alt="iconEmail"/>
                                </div>
                                <div className="contactsContainer__blockIconInformation-text">
                                    install@solarsystems.pro
                                </div>
                            </div>
                            <div className="contactsContainer__blockIconInformation">
                                <div className="contactsContainer__blockIconInformation-icon">
                                    <img src={iconClock} alt="iconClock"/>
                                </div>
                                <div className="contactsContainer__blockIconInformation-text">
                                    Пн - Пт 09:00 - 18:00
                                </div>
                            </div>
                        </div>
                        <NavLink to="" className="btnContainer">
                            <div className="btn">
                                замовити консультацію
                            </div>
                        </NavLink>
                        <div className="socialIconContainer">
                            <NavLink to="">
                                <img src={iconFB} alt="face book icon" className="iconFB"/>
                            </NavLink>
                            <NavLink to="">
                                <img src={iconIN} alt="instagram icon"/>
                            </NavLink>
                        </div>
                    </div>

                    <div className="information__block">
                        <div className="block blockPhotoSystem">
                            <div className="block__header">
                                Фотоелектричні системи
                            </div>
                            <div className="block__text">
                                <h3>Peg-структура</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Двусторонні модулі</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Опалення та гаряче <br/>
                                    водопостачання для Horeca</h3>
                                {/*<div>Work Package 5</div>*/}
                                {/*<div>Work Package 5</div>*/}
                            </div>
                            <div className="block__text">
                                <h3>Aукціони по ВДЕ</h3>
                                {/*<div>Work Package 5</div>*/}
                                {/*<div>Work Package 5</div>*/}
                            </div>
                        </div>
                        <div className="block blockCredits">
                            <div className="block__header">
                                Кредитування
                            </div>
                            <div className="block__text">
                                <h3>Укргазбанк</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Ощадбанк</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Укрсимбанк</h3>
                                {/*<div>Work Package 5</div>*/}
                                {/*<div>Work Package 5</div>*/}
                            </div>

                        </div>
                    </div>
                    <div className="information__block">
                        <div className="block blockTermSystem">
                            <div className="block__header">
                                Термодинамічні системи
                            </div>
                            <div className="block__text">
                                <h3>Укргазбанк</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Ощадбанк</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Укрсиббанк</h3>
                                {/*<div>Work Package 5</div>*/}
                                {/*<div>Work Package 5</div>*/}
                            </div>
                        </div>
                        <div className="block blockNews">
                            <div className="block__header">
                                Новини
                            </div>
                            <div className="block__text">
                                <h3>Проектування</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Монтаж</h3>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                                <div>Work Package 5</div>
                            </div>
                        </div>
                    </div>
                    <div className="information__block">
                        <div className="block blockServices">
                            <div className="block__header">
                                Послуги
                            </div>
                            <div className="block__text">
                                <h3>Проектування</h3>
                                <div>Дахові ФЕС</div>
                                <div>Комерційні ФЕС</div>
                                <div>Системи опалення</div>
                                <div>Водопостачання</div>
                                <div>Охолодження та вентиляція</div>
                            </div>
                            <div className="block__text">
                                <h3>Монтаж</h3>
                                <div>Гібридні системи електроживлення</div>
                                <div>Мережеві станції по "Зеленому" тарифу</div>
                                <div>Комерційні станції по "Зеленому" тарифу</div>
                            </div>
                            <div className="block__text">
                                <h3>Навчання</h3>
                                {/*<div>Work Package 5</div>*/}
                                {/*<div>Work Package 5</div>*/}
                            </div>
                        </div>
                        <div className="block blockProjects">
                            <div className="block__header">
                                Проекти
                            </div>
                            <div className="block__text">
                                <h3>PEG-структура</h3>
                                <div>Work package 5</div>
                            </div>
                            <div className="block__text">
                                <h3>Двусторонні модулі</h3>
                                <div>Work package 5</div>
                            </div>
                        </div>
                        <div className="block blockAgro">
                            <div className="block__header">
                                Агрівольтаіка
                            </div>
                            {/*<div className="block__text">*/}
                            {/*    <h3>PEG-структура</h3>*/}
                            {/*    <div>Work package 5</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer__text">
                        © 2020 «SolarSystems»
                    </div>
                    <div className="footer__icon">
                        <img src={iconA} alt="iconA"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;