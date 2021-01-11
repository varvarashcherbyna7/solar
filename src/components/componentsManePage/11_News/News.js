import React from "react";
import "./News.sass";
import imgTextLeft from "./imgNews/imgLeftText.png";
import LastNews from "./componentsNews/LastNews/LastNews";
import LastNewsPhotos from "./componentsNews/LastNewsPhotos/LastNewsPhotos";


const News = () => {
    return (
        <div className="containerNews">
            <div className="containerNews__imgTextLeft">
                <img src={imgTextLeft} alt="imgTextLeft"/>
            </div>
            <div className="containerNews__context">
                <LastNews/>
            </div>
            <LastNewsPhotos/>
        </div>
    )
}

export default News;