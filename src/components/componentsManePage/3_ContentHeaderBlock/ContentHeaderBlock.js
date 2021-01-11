import React from 'react';
import "./ContentHeaderBlock.sass";
import Contents from "./componentsContentHeaderBlock/Contents/Contents";
import {NavLink} from "react-router-dom";
import arrowDown from "./imgContentHeaderBlock/arrow.png";
import fbIcon from "./imgContentHeaderBlock/fb_icon.png";
import inIcon from "./imgContentHeaderBlock/in_icon.png";

const ContentHeaderBlock = (props) => {
        return (
            <div className="header">
                <div className="header__context">
                    <Contents state={props.state}/>
                    <div className='imgIcons'>
                        <div className="arrowDown">
                            <NavLink to="">
                                <img src={arrowDown} alt="arrowDown"/>
                            </NavLink>
                        </div>
                        <div className="socialNetwork">
                            <div>
                                <NavLink to="">
                                    <img src={fbIcon} alt="facebook"/>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="">
                                    <img src={inIcon} alt="instagram"/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default ContentHeaderBlock;