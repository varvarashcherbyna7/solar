import React from "react";
import "./Certificates.sass";
import Certificate1 from "./imgCertificates/img1.png";
import Certificate2 from "./imgCertificates/img2.png";
import Certificate3 from "./imgCertificates/img3.png";
import Certificate4 from "./imgCertificates/img4.png";
import Certificate5 from "./imgCertificates/img5.png";
import Certificate6 from "./imgCertificates/img6.png";
import Certificate7 from "./imgCertificates/img7.png";

const certificates1_4 = [
    Certificate1,
    Certificate2,
    Certificate3,
    Certificate4
];
const certificates5_7 = [
    Certificate5,
    Certificate6,
    Certificate7
]

const Certificates = () => {
    return (
        <div className="blockImages">
            <div className="blockImages1_4">
                {
                    certificates1_4.map( (Certificate, index) => {
                        return (
                            <div className={`blockImages__image certificate${index+1}`} key={index}>
                                <div className="borderBox">
                                    <img src={Certificate} alt={`certificate${index}`}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="blockImages5_7">
                {
                    certificates5_7.map( (Certificate, index) => {
                        return (
                            <div className={`blockImages__image certificate${index+5}`} key={index}>
                                <div className="borderBox">
                                    <img src={Certificate} alt={`certificate${index}`}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Certificates;