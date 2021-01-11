import React from 'react';
import ContentHeaderBlock from "./3_ContentHeaderBlock/ContentHeaderBlock";
import BatteryTypes from "./4_BatteryTypes/BatteryTypes";
import SystemTypes from "./5_SystemTypes/SystemTypes";
import RealizedProjects from "./6_RealizedProjects/RealizedProjects";
import AdvantagesSolarSystems from "./7_AdvantagesSolarSystems/AdvantagesSolarSystems";
import Agrovoltaics from "./8_Agrovoltaics/Agrovoltaics";
import CompanyCertificates from "./9_CompanyCertificates/CompanyCertificates";
import Credits from "./10_Credits/Credits";
import News from "./11_News/News";
import FeedbackForm from "./12_FeedbackForm/FeedbackForm";

const ManePage = (props) => {
    return (
        <>
            <ContentHeaderBlock state={props.state}/>
            <BatteryTypes/>
            <SystemTypes/>
            <RealizedProjects/>
            <AdvantagesSolarSystems/>
            <Agrovoltaics/>
            <CompanyCertificates/>
            <Credits/>
            <News/>
            <FeedbackForm/>
        </>
    )
}

export default ManePage;