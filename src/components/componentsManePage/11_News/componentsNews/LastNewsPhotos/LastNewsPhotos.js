import React from "react";
import "./LastNewsPhotos.sass";
import imgNews1 from "./imgLastNewsPhotos/img1.png";
import imgNews2 from "./imgLastNewsPhotos/img2.png";
import imgNews3 from "./imgLastNewsPhotos/img3.png";
import imgNews4 from "./imgLastNewsPhotos/img4.png";

const informationBlockLastNewsPhotos = [
    {
        img: imgNews1,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у " +
            "Форумі SEF-2019 - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgNews2,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgNews3,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgNews4,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    }
]

const LastNewsPhotos = () => {
    return (
        <div className="blockLastNewsPhotos">
            {
                informationBlockLastNewsPhotos.map((news, index) => {
                    return (
                        <div className={`lastNewsPhotos lastNewsPhotos${index+1}`} key={index}>
                            <div className="lastNewsPhotos__img">
                                <div className="blockImg">
                                    <img src={news.img} alt={`newsPhoto${index+1}`}/>
                                </div>
                            </div>
                            <div className="lastNewsPhotos__headerText">
                                <div className="headerText">
                                    {news.headerText}
                                    <div className="btnRead">
                                        Читати
                                    </div>
                                </div>
                            </div>
                            <div className="lastNewsPhotos__text">
                                {news.text}
                            </div>
                            <div className="lastNewsPhotos__dataBtnRead">
                                <div className="data">
                                    {news.data}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default LastNewsPhotos;