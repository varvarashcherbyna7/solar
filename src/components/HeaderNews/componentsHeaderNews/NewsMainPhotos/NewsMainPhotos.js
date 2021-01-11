import React from 'react';
import "./NewsMainPhotos.sass";
import img1 from "./imgNewsMainPhotos/img1.png";
import imgPeopleOpacity from "./imgNewsMainPhotos/imgPeopleOpacity.png";
import img2 from "./imgNewsMainPhotos/img2.png";
import img3 from "./imgNewsMainPhotos/img3.png";
import img4 from "./imgNewsMainPhotos/img5.png";
import imgPeople from "./imgNewsMainPhotos/imgPeople.png";
import img5 from "./imgNewsMainPhotos/img5.png";

const informationNewsMainPhotos = [
    {
        img: img1,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у " +
            "Форумі SEF-2019 - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgPeopleOpacity,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: img2,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgPeopleOpacity,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },


    {
        img: img3,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у " +
            "Форумі SEF-2019 - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: img4,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgPeople,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: img5,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgPeopleOpacity,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у " +
            "Форумі SEF-2019 - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: img1,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: img2,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    },
    {
        img: imgPeopleOpacity,
        headerText: "Наша нагорода на Форумі SEF-2019",
        text: "Результат нашої участі у Форумі SEF-2019" +
            " - нагорода за кращий інноваційний проект в Україні ...",
        data: "01.10.2019"
    }
]

const NewsMainPhotos = () => {
    return (
        <div className="mainPhotos">
            <div className="mainPhotos__navigation">
                <ul className="breadcrumbNavigation">
                    <li>все</li>
                    <li>2020</li>
                    <li>2019</li>
                    <li>2018</li>
                </ul>
            </div>
            <div className="mainPhotos__blockPhotos">
                {
                    informationNewsMainPhotos.map((news, index) => {
                        return (
                            <div className={`lastNewsPhotos lastNewsPhotos${index + 1}`} key={index}>
                                <div className="lastNewsPhotos__img">
                                    <div className="blockImg">
                                        <img src={news.img} alt={`newsPhoto${index + 1}`}/>
                                    </div>
                                </div>
                                <div className="lastNewsPhotos__headerText">
                                    <div className="headerText">
                                        {news.headerText}
                                    </div>
                                </div>
                                <div className="lastNewsPhotos__text">
                                    {news.text}
                                </div>
                                <div className="lastNewsPhotos__data">
                                    {news.data}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default NewsMainPhotos;