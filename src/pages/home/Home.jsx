import React from 'react'
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./Home.css"
import Chart from "../../components/chart/Chart";
import {userData} from "../../dummyData";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";


function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart dataG={userData} title="User Analytics" dataKey1="Active User" dataKey2="name"/>
            <div className="homeWidgets">


                <WidgetSmall/>
                <WidgetLarge/>
                






            </div>
        </div>
    )
}

export default Home
