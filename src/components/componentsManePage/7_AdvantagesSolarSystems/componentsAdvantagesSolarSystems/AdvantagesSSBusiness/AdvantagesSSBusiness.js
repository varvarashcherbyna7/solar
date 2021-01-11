import React from 'react';
import "./AdvantagesSSBusiness.sass";
import circleBG1 from "./imgAdvantagesSSBusiness/img1.png";
import circleBG2 from "./imgAdvantagesSSBusiness/img2.png";
import circleBG3 from "./imgAdvantagesSSBusiness/img3.png";
import icon1 from "./imgAdvantagesSSBusiness/icon1.png";
import icon2 from "./imgAdvantagesSSBusiness/icon2.png";
import icon3 from "./imgAdvantagesSSBusiness/icon3.png";
import stickImg from "./imgAdvantagesSSBusiness/stick.png";

const blocksInformation = [
    {
        circleBG: circleBG1,
        icon: icon1,
        headerText: 'Невичерпне джерело енергії',
        stickImg: stickImg,
        itemsText: [
            '\n' +
                'установка системи без обмежень \n' +
                'в ландшафтах і поверхнях',
            'екологічно чистий і безпечний джерело енергії',
            'широкі можливості використання \n' +
                'в будь-якій точці країни'
        ]
    },

    {
        circleBG: circleBG2,
        icon: icon2,
        headerText: '\n' +
            'Незалежність від \n' +
            'державної енергосистеми',
        stickImg: stickImg,
        itemsText: [
            'ніяких «сюрпризів» з аварійними відключеннями електрики - тепер \n' +
            'енергопостачання підприємства в ваших руках',
            'ніяких «сюрпризів» з аварійними відключеннями електрики - тепер\n' +
                'енергопостачання підприємства в ваших руках',
        ]
    },

    {
        circleBG: circleBG3,
        icon: icon3,
        headerText: '\n' +
            'Підвищення \n' +
            'енергоефективності ',
        stickImg: stickImg,
        itemsText: [
            'відчутна економія на обслуговуванні та ремонті станції',
            'відчутна економія на обслуговуванні та ремонті станції',
            'відчутна економія на обслуговуванні та ремонті станції'
        ]
    },
]

const AdvantagesSSBusiness = () => {
    return (
        <div className="containerAdvantagesSSBusiness">
            {
                blocksInformation.map( (block, index) => {
                    return (
                        <div className="block" key={index}>

                            <div className="block__images">
                                <div className="imgCircle">
                                    <img src={block.circleBG} alt={block.circleBG}/>
                                </div>

                                <div className="imgIcon">
                                    <img src={block.icon} alt={block.icon}/>
                                </div>
                            </div>

                            <div className="block__headerText">
                                {block.headerText}
                            </div>

                            <div className="block__items">
                                <ul className="items">
                                    {
                                        block.itemsText.map( (item, index) => {
                                            return (
                                                <li className="item" key={index}>
                                                    <div className="item__stickImg">
                                                        <img src={block.stickImg} alt={block.stickImg}/>
                                                    </div>
                                                    <div className="item__text">
                                                        {item}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </div>
                    )
                } )
            }
        </div>
    )
}

export default AdvantagesSSBusiness;