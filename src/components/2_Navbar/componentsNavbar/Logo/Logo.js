import React from 'react';
import logoImg from "./imgLogo/logo_solar.png";
import logoText from "./imgLogo/logo_text.png";
import "./Logo.sass";

const Logo = () => {
    return (
        <div className="nav__logo">
            <div className="logoImg"><img src={logoImg} alt="logo-img"/></div>
            <div className="logoText"><img src={logoText} alt="logo-text"/></div>
        </div>
    )
}

export default Logo;