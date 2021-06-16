import React from 'react';
import "./FeaturedInfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

function FeaturedInfo() {
    return (
        <div className="featured">

            <div className="featuredItem">
                <span className="featuredTitle">

                    Revenue
                </span>

                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$298,415,654</span>
                    <span className="featuredMoneyRate">-11.6 <ArrowDownward className="featuredIcon negative"/></span>
                </div>

                <div>
                    <span className="featuredSub">
                        Compared to last month

                    </span>

                </div>

            </div>


            <div className="featuredItem">
                <span className="featuredTitle">

                    Sales
                </span>

                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$443,415,569</span>
                    <span className="featuredMoneyRate">-1.67 <ArrowDownward className="featuredIcon negative"/></span>
                </div>

                <div>
                    <span className="featuredSub">
                        Compared to last month

                    </span>

                </div>

            </div>

            <div className="featuredItem">
                <span className="featuredTitle">

                    Cost
                </span>

                <div className="featuredMoneyContainer">
                <span className="featuredMoney">$294,225,654</span>
                    <span className="featuredMoneyRate">+1.67 <ArrowUpward className="featuredIcon"/></span>
                </div>

                <div>
                    <span className="featuredSub">
                        Compared to last month

                    </span>

                </div>

            </div>
            
        </div>
    )
}

export default FeaturedInfo
