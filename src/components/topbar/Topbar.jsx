import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">

                    

                    <span className="logo">

                        admin




                    </span>



                    </div>



                    <div className="topRight"> 


                    <div className="topbarIconContainer"> 

                    <NotificationsNone/>
                    <span className="topIconBag">2</span>




                    </div>

                    <div className="topbarIconContainer"> 

                    <Language/>
                    <span className="topIconBag">100</span>




                    </div>


                    <div className="topbarIconContainer"> 

                    <Settings/>
                    {/* <span className="topIconBag">2</span> */}

                    </div>

                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMJaxUgzWg2Y%2Fmaxresdefault.jpg&f=1&nofb=1" alt="" className="topAvatar" />


 

                    </div>


                </div>


            </div>
            
        
    )
}

export default Topbar
