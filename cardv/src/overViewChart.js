import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Label } from 'recharts';
import Rechart from './Rechart'
import {ancestryData} from './ancestryData';
import Option_Select from './Option_Select';
import ImpCircle from './radialBarChart';
import { colourOptions } from './Option_Select';
import getProperComparisionData from './generateData';
import importanceScore from './data/ancestry_scores/combinedAncestryScore.json';
import './Overview.css';
export const data = [{'geneName': 'ARPC5', 'geneMutationCount': 499}, {'geneName': 'BCL11A', 'geneMutationCount': 777}, {'geneName': 'CDC45', 'geneMutationCount': 1222}, {'geneName': 'CDCA7', 'geneMutationCount': 1307}, {'geneName': 'CDH3', 'geneMutationCount': 1037}, {'geneName': 'CDK6', 'geneMutationCount': 301}, {'geneName': 'CDKN2A', 'geneMutationCount': 1028}, {'geneName': 'CEBPB', 'geneMutationCount': 329}, {'geneName': 'CENPA', 'geneMutationCount': 180}, {'geneName': 'CENPN', 'geneMutationCount': 245}, {'geneName': 'CLCN4', 'geneMutationCount': 317}, {'geneName': 'CLCN5', 'geneMutationCount': 345}, {'geneName': 'CPNE8', 'geneMutationCount': 871}, {'geneName': 'CTSC', 'geneMutationCount': 739}, {'geneName': 'CYP39A1', 'geneMutationCount': 672}, {'geneName': 'EML4', 'geneMutationCount': 1777}, {'geneName': 'FANCE', 'geneMutationCount': 808}, {'geneName': 'FAT1', 'geneMutationCount': 4501}, {'geneName': 'FBLIM1', 'geneMutationCount': 581}, {'geneName': 'FOXA1', 'geneMutationCount': 476}, {'geneName': 'FOXC1', 'geneMutationCount': 549}, {'geneName': 'GPSM2', 'geneMutationCount': 899}, {'geneName': 'GPX7', 'geneMutationCount': 239}, {'geneName': 'HDGF', 'geneMutationCount': 2390}, {'geneName': 'HJURP', 'geneMutationCount': 1250}, {'geneName': 'HMGA1', 'geneMutationCount': 528}, {'geneName': 'HOMER3', 'geneMutationCount': 452}, {'geneName': 'IFRD1', 'geneMutationCount': 652}, {'geneName': 'IGF2BP2', 'geneMutationCount': 831}, {'geneName': 'ITGB8', 'geneMutationCount': 610}, {'geneName': 'KCMF1', 'geneMutationCount': 343}, {'geneName': 'KHDRBS3', 'geneMutationCount': 462}, {'geneName': 'KIF2C', 'geneMutationCount': 913}, {'geneName': 'LMO4', 'geneMutationCount': 250}, {'geneName': 'LYN', 'geneMutationCount': 1045}, {'geneName': 'MALL', 'geneMutationCount': 186}, {'geneName': 'MELK', 'geneMutationCount': 870}, {'geneName': 'MRAS', 'geneMutationCount': 238}, {'geneName': 'MSL3', 'geneMutationCount': 778}, {'geneName': 'MSN', 'geneMutationCount': 1139}, {'geneName': 'NOTCH1', 'geneMutationCount': 2773}, {'geneName': 'NT5C2', 'geneMutationCount': 749}, {'geneName': 'PDK1', 'geneMutationCount': 453}, {'geneName': 'PHOX2B', 'geneMutationCount': 64}, {'geneName': 'PLOD1', 'geneMutationCount': 1391}, {'geneName': 'PLOD3', 'geneMutationCount': 1339}, {'geneName': 'PM20D2', 'geneMutationCount': 481}, {'geneName': 'PPP1CB', 'geneMutationCount': 405}, {'geneName': 'PPP1R14C', 'geneMutationCount': 234}, {'geneName': 'PTCHD1', 'geneMutationCount': 470}, {'geneName': 'PVR', 'geneMutationCount': 3706}, {'geneName': 'RASD2', 'geneMutationCount': 271}, {'geneName': 'SCHIP1', 'geneMutationCount': 681}, {'geneName': 'SERBP1', 'geneMutationCount': 378}, {'geneName': 'SFRP1', 'geneMutationCount': 405}, {'geneName': 'SIRPA', 'geneMutationCount': 768}, {'geneName': 'SLC25A33', 'geneMutationCount': 321}, {'geneName': 'SMO', 'geneMutationCount': 3220}, {'geneName': 'SYT8', 'geneMutationCount': 1212}, {'geneName': 'TBC1D1', 'geneMutationCount': 9785}, {'geneName': 'TCL1A', 'geneMutationCount': 139}, {'geneName': 'TGFA', 'geneMutationCount': 103}, {'geneName': 'TRIM2', 'geneMutationCount': 2039}, {'geneName': 'UCK2', 'geneMutationCount': 261}, {'geneName': 'UGP2', 'geneMutationCount': 1938}, {'geneName': 'UPP1', 'geneMutationCount': 491}]

const getImportanceScore = (raceName,geneName) => {
    if (importanceScore[raceName][geneName]){
        return importanceScore[raceName][geneName];
    }
    return 0;
}

const App = () => {
const [selected, setSelected] = useState([]);
const [count,setCount] = useState([  { value: 'afr', label: 'African/ African American'  },
{ value: 'amr', label: 'American Admixed / Latino', },]);

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
	<Bar dataKey="geneMutationCount" fill="#FE9E83"  onClick={ (d) => {
        const newSelection = [];
        const newObj = {
            geneName: d.geneName
        }
        newSelection.push(newObj);
        window.max = Number.MIN_SAFE_INTEGER;
        setSelected(newSelection);
    }} />
	<XAxis  xAxisId={0} angle={-90} textAnchor='middle' textRendering='optimizeLegibility' tickLine={false}
    dataKey="geneName" stroke='white' fontSize={12} tick={{fill: 'white', fontSize: 20}} fontWeight={'bolder'} orientation='bottom' interval={0}
    >
    </XAxis>
	<YAxis stroke='white' dataKey="geneMutationCount" tick={{fill: 'white', fontSize: 20}} fontSize={20}  fontWeight={'bolder'}>
    <Label angle={270} offset={20} position='left' style={{ textAnchor: 'middle', fontWeight:"bolder", fontSize:20, fill: 'white' }}>
        Overall Frequency of Mutations on Genes
    </Label>
    </YAxis>
</BarChart>
    <h3 style={{textAlign: 'center'}}>GENES</h3>
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
