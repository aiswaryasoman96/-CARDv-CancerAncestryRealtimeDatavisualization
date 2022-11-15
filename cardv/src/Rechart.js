import React, { useCallback, useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, Label } from 'recharts';
const generateRandom = () => {
    return Math.floor(Math.random() * 500);
}
const App = (props) => {
// console.log(props.data)
// Sample data
// const data = [
// {name: 'A-T',frequency: generateRandom()},
// {name: 'A-G',frequency: generateRandom()},
// {name: 'A-C',frequency: generateRandom()},
// {name: 'T-A',frequency: generateRandom()},
// {name: 'T-G',frequency: generateRandom()},
// {name: 'T-C',frequency: generateRandom()},
// {name: 'C-A',frequency: generateRandom()},
// {name: 'C-G',frequency: generateRandom()},
// {name: 'G-T',frequency: generateRandom()},
// {name: 'G-A',frequency: generateRandom()},
// {name: 'G-C',frequency: generateRandom()},
// {name: 'Ot-T',frequency: generateRandom()},
// {name: 'Ot-A',frequency: generateRandom()},
// {name: 'A-Ot',frequency: generateRandom()},
// {name: 'G-Ot',frequency: generateRandom()},
// {name: 'T-Ot',frequency: generateRandom(), category: 'LOW'},
// {name: 'A-T',frequency: generateRandom()},
// {name: 'A-G',frequency: generateRandom()},
// {name: 'A-C',frequency: generateRandom()},
// {name: 'C-A',frequency: generateRandom()},
// {name: 'C-G',frequency: generateRandom()},
// {name: 'G-T',frequency: generateRandom()},
// {name: 'G-A',frequency: generateRandom()},
// {name: 'G-C',frequency: generateRandom()},
// {name: 'Ot-T',frequency: generateRandom()},
// {name: 'Ot-A',frequency: generateRandom()},
// {name: 'A-Ot',frequency: generateRandom()},
// {name: 'G-Ot',frequency: generateRandom()},
// {name: 'T-Ot',frequency: generateRandom(), category: 'MODERATE'},
// {name: 'A-T',frequency: generateRandom()},
// {name: 'A-G',frequency: generateRandom()},
// {name: 'A-C',frequency: generateRandom()},
// {name: 'C-A',frequency: generateRandom()},
// {name: 'C-G',frequency: generateRandom()},
// {name: 'G-T',frequency: generateRandom()},
// {name: 'G-A',frequency: generateRandom()},
// {name: 'G-C',frequency: generateRandom()},
// {name: 'Ot-T',frequency: generateRandom()},
// {name: 'Ot-A',frequency: generateRandom()},
// {name: 'A-Ot',frequency: generateRandom()},
// {name: 'G-Ot',frequency: generateRandom()},
// {name: 'T-Ot',frequency: generateRandom(), category: 'MODIFIER'},
// {name: 'A-T',frequency: generateRandom()},
// {name: 'A-G',frequency: generateRandom()},
// {name: 'A-C',frequency: generateRandom()},
// {name: 'C-A',frequency: generateRandom()},
// {name: 'C-G',frequency: generateRandom()},
// {name: 'G-T',frequency: generateRandom()},
// {name: 'G-A',frequency: generateRandom()},
// {name: 'G-C',frequency: generateRandom()},
// {name: 'Ot-T',frequency: generateRandom()},
// {name: 'Ot-A',frequency: generateRandom()},
// {name: 'A-Ot',frequency: generateRandom()},
// {name: 'G-Ot',frequency: generateRandom()},
// {name: 'T-Ot',frequency: generateRandom(), category: 'HIGH'},
// ];
const getStrokeColor = (value) => {
    const obj = {
        "LOW": "#fedcde",
        "MODERATE": "#fd9e9b",
        "MODIFIER": "#fb4f41",
        "HIGH": "#e61705"
    }
    return obj[value];
}
const renderTick = (tickProps) => {
    const {x,y} = tickProps;
    const { value, offset } = tickProps.payload;
    const pathX = Math.floor(tickProps.x) -390;
    if(value){
        return (
            <g>
            <path d={`M${pathX},${tickProps.y + 10}h${420}`} orientation="bottom" strokeWidth={10} stroke={getStrokeColor(value)} />
            <text textAnchor='middle' fontSize={30} x={x-290} y={y - 3} >{`${value}`}</text>
            </g>
            );
    }
}
return (
    <>
<BarChart key={generateRandom()*100} width={1800} height={400} data={props.data} margin={{
    top: 40,
    left: 40
}}>
	<Bar dataKey="frequency" fill="#ab5ffc"/>
	<XAxis xAxisId={0} tickLine={false}
    dataKey="name" dy={10} angle={-90} interval={0} orientation='bottom' />
	<YAxis >
    <Label angle={270} offset={5} position='left' style={{ textAnchor: 'middle', fontWeight:"bolder", fontSize:20 }}>
        Frequency of Mutation
    </Label>
    </YAxis>
    <XAxis xAxisId={1} tickLine={false} fontSize="20px" 
    tickMargin={20} tick = {renderTick}
     axisLine={false} allowDataOverflow={true} interval={0} type="category" dataKey="category" orientation='top'/>
</BarChart>
<h3 style={{textAlign: 'center'}}>Types of Mutation on each Gene</h3>
</>
);
}

// const MemoizedApp = () => useCallback( () => {
//     return <App />
// },[])

// export default MemoizedApp;

export default React.memo(App);
