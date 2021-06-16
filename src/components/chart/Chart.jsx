import React from 'react';
import "./Chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, dataG, dataKey1, dataKey2, grid}) {

    const data = [
        {
            name: 'nedhub1',
            "Active User": 20043,
            
        },
        {
            name: 'nedhub2',
            "Active User": 6000,
            
        },
        {
            name: 'nedhub3',
            "Active User": 78600,
            
        },
        {
            name: 'nedhub4',
            "Active User": 7780,
            
        },
        {
            name: 'nedhub5',
            "Active User": 7890,
            
        },
        {
            name: 'nedhub6',
            "Active User": 122390,
            
        },
        {
            name: 'nedhub7',
            "Active User": 9490,
            
        },
        ];





    return (
        <div className="chart">
            {/* <FeaturedInfo/> */}
            chart
            <h3 className="chartTitle">
                {title}
            </h3>

            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey={dataKey2} stroke="#555"/>
                    <YAxis />
                    <Line type="monotone" dataKey={dataKey1} stroke="#555"/>
                    <Tooltip/>
                    {/* <CartesianGrid stroke="#c5c5c5"/> */}


                </LineChart>



            </ResponsiveContainer>
            
        </div>
    )
}
    
export default Chart
