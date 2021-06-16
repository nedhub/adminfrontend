import React from 'react';
import "./WidgetSmall.css";
import {Visibility} from "@material-ui/icons";

function WidgetSmall() {
    return (
        <div className="WidgetSmall">

            <span className="widgetSmTitle">
                NEW JOIN MEMBERS
            </span>

            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvangoyourself.com%2Fwp-content%2Fuploads%2F2014%2F04%2FSettegast-Bildnis-einer-Italienerin.jpg&f=1&nofb=1" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jasmine Ruby </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>

                    <button className="widgetSmallButton">

                        <Visibility/>

                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvangoyourself.com%2Fwp-content%2Fuploads%2F2014%2F04%2FSettegast-Bildnis-einer-Italienerin.jpg&f=1&nofb=1" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jasmine Ruby </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>

                    <button className="widgetSmallButton">

                        <Visibility/>

                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvangoyourself.com%2Fwp-content%2Fuploads%2F2014%2F04%2FSettegast-Bildnis-einer-Italienerin.jpg&f=1&nofb=1" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jasmine Ruby </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>

                    <button className="widgetSmallButton">

                        <Visibility/>

                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvangoyourself.com%2Fwp-content%2Fuploads%2F2014%2F04%2FSettegast-Bildnis-einer-Italienerin.jpg&f=1&nofb=1" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jasmine Ruby </span>
                        <span className="widgetSmUserTitle">Software Engineer </span>
                    </div>

                    <button className="widgetSmallButton">

                        <Visibility/>

                        Display
                    </button>
                </li>
            </ul>
            
        </div>
    )
}

export default WidgetSmall
