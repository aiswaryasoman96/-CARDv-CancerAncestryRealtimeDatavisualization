import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Line, Label } from 'recharts';

const App = (props) => {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">{`Gene Pair: ${label}`}</p>
              <p className="desc">{`Count: ${payload[0].value}`}</p>
            </div>
          );
        }
      
        return null;
      };
const getStrokeColor = (value) => {
    const obj = {
        "LOW": "#fedcde",
        "MODERATE": "#fd9e9b",
        "MODIFIER": "#fb4f41",
        "HIGH": "#e61705"
    }
    return obj[value];
}
const normalizeDomain = () => {
    const normalizedMax = props.max + (10 - (props.max % 10))
    return normalizedMax;
}
const renderTick = (tickProps) => {
    const {x,y} = tickProps;
    const { value, offset } = tickProps.payload;
    const pathX = Math.floor(tickProps.x) -410;
    if(value){
        return (
            <g>
            <path d={`M${pathX},${tickProps.y + 10}h${420}`} orientation="bottom" strokeWidth={10} stroke={getStrokeColor(value)} />
            <text textAnchor='middle' fill='white' fontSize={30} x={x-290} y={y - 3} >{`${value}`}</text>
            </g>
            );
    }
}
return (
    <>
<BarChart id={`Bar-${props.dataKey}`} width={1800} height={400} data={props.data} margin={{
    top: 40,
    left: 40
}}>
	<Bar dataKey="frequency" fill="#ab5ffc" />
	<XAxis xAxisId={0} tickLine={false} stroke={'white'}
    dataKey="name" textAnchor='end' dx={-10} height={60} angle={-90} interval={0} orientation='bottom' tick={{fill: 'white', fontSize: 20}}/>
	<YAxis stroke='rgb(255,255,255)' domain={[0,normalizeDomain()]} interval={0} minTickGap={-5} tick={{fill: 'white', fontSize: 20}}>
    <Label fill='rgb(255,255,255)' angle={270} offset={5} position='left' style={{ textAnchor: 'middle', fontWeight:"bolder", fontSize:20 }}>
        Mutation Count
    </Label>
    </YAxis>
    <XAxis xAxisId={1} tickLine={false} fontSize="20px" 
    tickMargin={20} dx={-10}tick = {renderTick}
     axisLine={false} allowDataOverflow={true} interval={0} type="category" dataKey="category" orientation='top' />
     <Tooltip content={<CustomTooltip />} />
     <CartesianGrid vertical={false} />
</BarChart>
<h3 style={{textAlign: 'center'}}>Types of Mutation on each Gene</h3>
</>
);
}


export default React.memo(App);
