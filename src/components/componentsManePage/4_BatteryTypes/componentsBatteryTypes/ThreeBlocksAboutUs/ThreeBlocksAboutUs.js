import React from "react";
import "./ThreeBlocksAboutUs.sass";
import iconHands from "./imgThreeBlocksAboutUs/icon_hads.png";
import iconStars from "./imgThreeBlocksAboutUs/icon_stars.png";
import iconHome from "./imgThreeBlocksAboutUs/icon_home.png";

const blockContents = [
    {
        iconImg: iconHands,
        headText: 'Пряме постачання обладнання',
        text: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. ' +
            'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit,  ',
    },
    {
        iconImg: iconStars,
        headText: '10 років ' +
            'досвіду з висококваліфкованими ' +
            'спеціалістами',
        text: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. ' +
            'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit,  ',
    },
    {
        iconImg: iconHome,
        headText: 'Інсталяція систем \n' +
            '“під ключ”',
        text: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. ' +
            'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit,  ',
    },
]

const ThreeBlocksAboutUs = () => {
    return (
        <div className="containerThreeBlocks">
            { blockContents.map((block, index) => {
                return (
                    <div className="mainContainerBlockAboutUs" key={index}>
                        <div className="containerBlockAboutUs">
                            <div className="containerBlockAboutUs__icon">
                                <img src={block.iconImg} alt={block.iconImg}/>
                            </div>
                            <div className="containerBlockAboutUs__headText">
                                {block.headText}
                            </div>
                            <div className="containerBlockAboutUs__text">
                                {block.text}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ThreeBlocksAboutUs;