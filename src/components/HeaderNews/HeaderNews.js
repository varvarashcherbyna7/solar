import React from 'react';
import "./HeaderNews.sass";
import NavigationBreadCrumbs from "./componentsHeaderNews/NavigationBreadCrumbs/NavigationBreadCrumbs";
import NewsMainPhotos from "./componentsHeaderNews/NewsMainPhotos/NewsMainPhotos";

const HeaderNews = (props) => {
    return (
        <div className="containerHeaderNews">
            <div className="containerHeaderNews__context">
                <NavigationBreadCrumbs/>
                <div className="mainText">
                    <div className="mainText__headerText">
                        Новини <span className="headerText-yellow">Solar Systems</span>
                    </div>
                    <div className="mainText__text">
                        Мережеві сонячні електростанції під "зелений"
                        тариф мають дуже великі перспективи в Україні.
                    </div>
                </div>
                <NewsMainPhotos/>
            </div>
        </div>
    )
}

export default HeaderNews;