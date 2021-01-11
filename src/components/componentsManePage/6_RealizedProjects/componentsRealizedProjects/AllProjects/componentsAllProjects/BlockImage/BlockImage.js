import React from "react";
import "./BlockImage.sass";
import image1 from "./imgBlockImage/image1.png";
import image2 from "./imgBlockImage/image2.png";
import image3 from "./imgBlockImage/image3.png";
import image4 from "./imgBlockImage/image4.png";
import image5 from "./imgBlockImage/image5.png";
import image6 from "./imgBlockImage/image6.png";
import arrows from "./imgBlockImage/arrows.png";

const blockImgInformation = [
    {
        img: image1,
        textBgHeader: "Приватна СЕС 9 кВт",
        textBgText: "Сумська область, місто Ахтирка.",
    },
    {
        img: image2,
        textBgHeader: "",
        textBgText: "",
    },
    {
        img: image3,
        textBgHeader: "",
        textBgText: "",
    },
    {
        img: image4,
        textBgHeader: "",
        textBgText: "",
    },
    {
        img: image5,
        textBgHeader: "",
        textBgText: "",
    },
    {
        img: image6,
        textBgHeader: "",
        textBgText: "",
    }
]

const BlockImage = () => {
    return (
        <>
            {
                blockImgInformation.map((block, index) => {
                    return (
                        <div className="block__image">
                            <div className="imgBlock">
                                <img src={block.img} alt={block.img}/>
                            </div>
                            <div className="block__image--bg">
                                <div className="textBg__header">
                                    {block.textBgHeader}
                                </div>
                                <div className="textBg__text">
                                    {block.textBgText}
                                </div>
                                <div className="textBg__imgArrows">
                                    <img src={arrows} alt="Arrows"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default BlockImage;