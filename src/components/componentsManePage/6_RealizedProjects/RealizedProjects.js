import React from "react";
import "./RealizedProjects.sass";
import imgTextOurObjects from "./imgRealizedProjects/img_textRight.png";
import ProjectsDescription from "./componentsRealizedProjects/ProjectsDescription/ProjectsDescription";
import AllProjects from "./componentsRealizedProjects/AllProjects/AllProjects";
import Button from "./componentsRealizedProjects/Button/Button";

const RealizedProjects = () => {
    return (
        <div className="containerRealizedProjects">
            <div className="containerRealizedProjects__imgTextRight">
                <img src={imgTextOurObjects} alt="text our objects"/>
            </div>
            <div className="containerRealizedProjects__context">
                <ProjectsDescription/>
                <AllProjects/>
                <Button/>
            </div>
        </div>
    )
}

export default RealizedProjects;