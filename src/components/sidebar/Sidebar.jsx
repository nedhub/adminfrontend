import React from 'react';
import "./sidebar.css";
import {LineStyle, Timeline, TrendingUp, People, LocalMall, AttachMoney, Assessment, Mail, Feedback, Message, BusinessCenter, Report} from "@material-ui/icons";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>

                    </ul>

                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>

                    <Link to="/users">

                    <li className="sidebarListItem active">
                            <People className="sidebarIcon"/>
                            Users
                        </li>
                    
                    
                    </Link>

                    <ul className="sidebarList">
                        

                        <li className="sidebarListItem">
                            <LocalMall className="sidebarIcon"/>
                            Products
                        </li>

                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Transactions
                        </li>

                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon"/>
                            Reports
                        </li>

                    </ul>

                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Mail className="sidebarIcon"/>
                            Mail
                        </li>

                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"/>
                            Feedback
                        </li>

                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            Messages
                        </li>

                    </ul>

                </div>


                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <BusinessCenter className="sidebarIcon"/>
                            Manage
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>

                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>

                    </ul>

                </div>








            </div>
            
        </div>
    )
}

export default Sidebar
