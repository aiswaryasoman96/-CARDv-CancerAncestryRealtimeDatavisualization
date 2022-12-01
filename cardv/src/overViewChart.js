import React, { useCallback, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Label } from 'recharts';
import Rechart from './Rechart'
import {ancestryData} from './ancestryData';
import Option_Select from './Option_Select';
import ImpCircle from './radialBarChart';
import { colourOptions } from './Option_Select';
import getProperComparisionData from './generateData';
import importanceScore from './data/ancestry_scores/combinedAncestryScore.json';
import './Overview.css';
const data = [{'geneName': 'FOXA1', 'precentage': 97.27}, {'geneName': 'FOXC1', 'precentage': 78.6}, {'geneName': 'CDH3', 'precentage': 51.18}, {'geneName': 'PVR', 'precentage': 35.61}, {'geneName': 'EML4', 'precentage': 27.16}, {'geneName': 'RASD2', 'precentage': 25.79}, {'geneName': 'IFRD1', 'precentage': 23.18}, {'geneName': 'CDKN2A', 'precentage': 22.36}, {'geneName': 'UCK2', 'precentage': 21.51}, {'geneName': 'PLOD1', 'precentage': 21.35}, {'geneName': 'IGF2BP2', 'precentage': 20.74}, {'geneName': 'BCL11A', 'precentage': 20.16}, {'geneName': 'LYN', 'precentage': 20.05}, {'geneName': 'MALL', 'precentage': 17.77}, {'geneName': 'MSL3', 'precentage': 16.47}, {'geneName': 'PLOD3', 'precentage': 15.85}, {'geneName': 'MSN', 'precentage': 14.69}, {'geneName': 'FANCE', 'precentage': 14.1}, {'geneName': 'PPP1CB', 'precentage': 14.07}, {'geneName': 'CYP39A1', 'precentage': 13.98}, {'geneName': 'PM20D2', 'precentage': 10.89}, {'geneName': 'CTSC', 'precentage': 10.73}, {'geneName': 'MRAS', 'precentage': 9.69}, {'geneName': 'MELK', 'precentage': 9.24}, {'geneName': 'PDK1', 'precentage': 8.93}, {'geneName': 'FAT1', 'precentage': 8.8}, {'geneName': 'GPX7', 'precentage': 7.57}, {'geneName': 'CDCA7', 'precentage': 7.29}, {'geneName': 'HJURP', 'precentage': 7.11}, {'geneName': 'KCMF1', 'precentage': 6.26}, {'geneName': 'UGP2', 'precentage': 6.02}, {'geneName': 'ITGB8', 'precentage': 5.97}, {'geneName': 'CLCN4', 'precentage': 5.14}, {'geneName': 'KIF2C', 'precentage': 4.98}, {'geneName': 'CDK6', 'precentage': 4.73}, {'geneName': 'GPSM2', 'precentage': 4.22}, {'geneName': 'SIRPA', 'precentage': 4.07}, {'geneName': 'NOTCH1', 'precentage': 3.41}, {'geneName': 'TCL1A', 'precentage': 3.35}, {'geneName': 'NT5C2', 'precentage': 3.34}, {'geneName': 'CENPA', 'precentage': 3.33}, {'geneName': 'HMGA1', 'precentage': 3.14}, {'geneName': 'PHOX2B', 'precentage': 2.83}, {'geneName': 'PPP1R14C', 'precentage': 2.64}, {'geneName': 'CDC45', 'precentage': 2.62}, {'geneName': 'CLCN5', 'precentage': 2.18}, {'geneName': 'UPP1', 'precentage': 2.06}, {'geneName': 'SMO', 'precentage': 1.93}, {'geneName': 'FBLIM1', 'precentage': 1.72}, {'geneName': 'HDGF', 'precentage': 1.7}, {'geneName': 'SERBP1', 'precentage': 1.61}, {'geneName': 'TGFA', 'precentage': 1.47}, {'geneName': 'SYT8', 'precentage': 1.26}, {'geneName': 'SFRP1', 'precentage': 0.96}, {'geneName': 'CEBPB', 'precentage': 0.78}, {'geneName': 'HOMER3', 'precentage': 0.41}, {'geneName': 'LMO4', 'precentage': 0.36}, {'geneName': 'SCHIP1', 'precentage': 0.23}, {'geneName': 'TRIM2', 'precentage': 0.16}, {'geneName': 'PTCHD1', 'precentage': 0.15}, {'geneName': 'SLC25A33', 'precentage': 0.11}, {'geneName': 'ARPC5', 'precentage': 0.09}, {'geneName': 'CENPN', 'precentage': 0.07}, {'geneName': 'CPNE8', 'precentage': 0.05}, {'geneName': 'TBC1D1', 'precentage': 0.04}, {'geneName': 'KHDRBS3', 'precentage': 0.02}]

const getImportanceScore = (raceName,geneName) => {
    if (importanceScore[raceName][geneName]){
        return importanceScore[raceName][geneName];
    }
    return 0;
}

const App = () => {
const [selected, setSelected] = useState([]);
const [count,setCount] = useState([]);

const addToCompare = (raceVal,raceName) => {
    const countCopy = [...count];
    if(!countCopy.find(obj => obj.value === raceVal)){
        setCount([...count, {
            value: raceVal,
            label: raceName
        }])
    }
}

const onHover = (raceVal) => {
    let response;
    if(!count.find(obj => obj.value === raceVal)){
         response = true
    }
    else{
        response = false
    }
    return response;
}

const callbackFNC = useCallback((x) => {
    const [raceData, maximum] = getProperComparisionData(selected[0]?.geneName,x.value)
    if(maximum > window.max){
        window.max = maximum;
       }
    return raceData;
},[selected[0]?.geneName])
return (
    <>
<BarChart width={window.innerWidth - 20}  height={800} data={data} margin={{
    top: 40,
    left: 40
}}>
	<Bar dataKey="precentage" fill="#FE9E83"  onClick={ (d) => {
        const newSelection = [];
        const newObj = {
            geneName: d.geneName
        }
        newSelection.push(newObj);
        window.max = Number.MIN_SAFE_INTEGER;
        setSelected(newSelection);
    }} />
	<XAxis  xAxisId={0} dx={-10} angle={-80} textAnchor='end'  tickLine={false}
    dataKey="geneName" stroke='white' onClick={(val) => {
        const newSelection = [];
        const newObj = {
            geneName: val?.value
        }
        newSelection.push(newObj);
        window.max = Number.MIN_SAFE_INTEGER;
        setSelected(newSelection);
    } } fontSize={12} tick={{fill: 'white', fontSize: 18 }} fontWeight={'bolder'} height={100} orientation='bottom' interval={0}
    >
    </XAxis>
	<YAxis stroke='white' dataKey="precentage" tick={{fill: 'white', fontSize: 20}} fontSize={20}  fontWeight={'bolder'}>
    <Label angle={270} offset={20} position='left' style={{ textAnchor: 'middle', fontWeight:"bolder", fontSize:27, fill: 'white' }}>
        Overall percentage of importance score across ancestries 
    </Label>
    </YAxis>
</BarChart>
    <h3 style={{textAlign: 'center', fontSize: 27}}>GENES</h3>
{ selected && selected.length && 
    <>
    <div>
        <Option_Select count = {count} setCount={setCount} />
    </div>
    <h2 style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        marginRight: 140
    }} >Importance Scores of gene {selected[0]?.geneName}</h2>
    <div className='grid-graph-circle-container'>
        <div className="grid-graphs">
        {count.map((x,i) => 
        <>
        <h1 style={{
            textAlign: 'center'
        }}>{x.label} ({selected[0]?.geneName})</h1>
        <Rechart key={i}
        data = {callbackFNC(x)}
        dataKey = {i}
        max = {window.max}
        />
        </>
        ) 
        }
        </div>
        <div className='grid-circles'>
            {
                colourOptions.map((raceObj) => {
                    return (
                        <ImpCircle click={addToCompare} onHover={onHover(raceObj.value)} raceVal = {raceObj.value} raceName={raceObj.label} percentage={getImportanceScore(raceObj.value,selected[0]?.geneName)} />
                    )
                })
            }
        </div>
    </div>
    </>
}
</>
);
}

export default React.memo(App);
