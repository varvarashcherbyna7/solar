import React from "react";
import "./CompanyCertificates.sass";
import imgTextRight from "./imgCompanyCertificates/imgTextRight.png";
import Certificates from "./componentsCompanyCertificates/Certificates/Certificates";

const CompanyCertificates = () => {
    return (
        <div className="containerCompanyCertificates">
            <div className="containerCompanyCertificates__imgTextRight">
                <img src={imgTextRight} alt="imgTextRight"/>
            </div>
            <div className="containerCompanyCertificates__context">
                <div className="blockText">
                    <div className="blockText__headerText">
                        Найбільші <span className="blockText__headerText-yellow">нагороди</span>
                    </div>
                    <div className="blockText__text">
                        Річне виробництво електроенергії в світі
                        складає всього 2 сотих від цього числа, а шкоди приносить незрівнянно більше.
                        Традиційні методи отримання електроенергії трудомісткі, дорогі і небезпечні для
                        довкілля.
                    </div>
                </div>
                <Certificates/>
            </div>
        </div>
    )
}

export default CompanyCertificates;