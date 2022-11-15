import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Label } from 'recharts';
import Rechart from './Rechart'
import {ancestryData} from './ancestryData';
import Option_Select from './Option_Select';
import getProperComparisionData from './generateData';
export const data = [{'geneName': 'ARPC5', 'geneMutationCount': 499}, {'geneName': 'BCL11A', 'geneMutationCount': 777}, {'geneName': 'CDC45', 'geneMutationCount': 1222}, {'geneName': 'CDCA7', 'geneMutationCount': 1307}, {'geneName': 'CDH3', 'geneMutationCount': 1037}, {'geneName': 'CDK6', 'geneMutationCount': 301}, {'geneName': 'CDKN2A', 'geneMutationCount': 1028}, {'geneName': 'CEBPB', 'geneMutationCount': 329}, {'geneName': 'CENPA', 'geneMutationCount': 180}, {'geneName': 'CENPN', 'geneMutationCount': 245}, {'geneName': 'CLCN4', 'geneMutationCount': 317}, {'geneName': 'CLCN5', 'geneMutationCount': 345}, {'geneName': 'CPNE8', 'geneMutationCount': 871}, {'geneName': 'CTSC', 'geneMutationCount': 739}, {'geneName': 'CYP39A1', 'geneMutationCount': 672}, {'geneName': 'EML4', 'geneMutationCount': 1777}, {'geneName': 'FANCE', 'geneMutationCount': 808}, {'geneName': 'FAT1', 'geneMutationCount': 4501}, {'geneName': 'FBLIM1', 'geneMutationCount': 581}, {'geneName': 'FOXA1', 'geneMutationCount': 476}, {'geneName': 'FOXC1', 'geneMutationCount': 549}, {'geneName': 'GPSM2', 'geneMutationCount': 899}, {'geneName': 'GPX7', 'geneMutationCount': 239}, {'geneName': 'HDGF', 'geneMutationCount': 2390}, {'geneName': 'HJURP', 'geneMutationCount': 1250}, {'geneName': 'HMGA1', 'geneMutationCount': 528}, {'geneName': 'HOMER3', 'geneMutationCount': 452}, {'geneName': 'IFRD1', 'geneMutationCount': 652}, {'geneName': 'IGF2BP2', 'geneMutationCount': 831}, {'geneName': 'ITGB8', 'geneMutationCount': 610}, {'geneName': 'KCMF1', 'geneMutationCount': 343}, {'geneName': 'KHDRBS3', 'geneMutationCount': 462}, {'geneName': 'KIF2C', 'geneMutationCount': 913}, {'geneName': 'LMO4', 'geneMutationCount': 250}, {'geneName': 'LYN', 'geneMutationCount': 1045}, {'geneName': 'MALL', 'geneMutationCount': 186}, {'geneName': 'MELK', 'geneMutationCount': 870}, {'geneName': 'MRAS', 'geneMutationCount': 238}, {'geneName': 'MSL3', 'geneMutationCount': 778}, {'geneName': 'MSN', 'geneMutationCount': 1139}, {'geneName': 'NOTCH1', 'geneMutationCount': 2773}, {'geneName': 'NT5C2', 'geneMutationCount': 749}, {'geneName': 'PDK1', 'geneMutationCount': 453}, {'geneName': 'PHOX2B', 'geneMutationCount': 64}, {'geneName': 'PLOD1', 'geneMutationCount': 1391}, {'geneName': 'PLOD3', 'geneMutationCount': 1339}, {'geneName': 'PM20D2', 'geneMutationCount': 481}, {'geneName': 'PPP1CB', 'geneMutationCount': 405}, {'geneName': 'PPP1R14C', 'geneMutationCount': 234}, {'geneName': 'PTCHD1', 'geneMutationCount': 470}, {'geneName': 'PVR', 'geneMutationCount': 3706}, {'geneName': 'RASD2', 'geneMutationCount': 271}, {'geneName': 'SCHIP1', 'geneMutationCount': 681}, {'geneName': 'SERBP1', 'geneMutationCount': 378}, {'geneName': 'SFRP1', 'geneMutationCount': 405}, {'geneName': 'SIRPA', 'geneMutationCount': 768}, {'geneName': 'SLC25A33', 'geneMutationCount': 321}, {'geneName': 'SMO', 'geneMutationCount': 3220}, {'geneName': 'SYT8', 'geneMutationCount': 1212}, {'geneName': 'TBC1D1', 'geneMutationCount': 9785}, {'geneName': 'TCL1A', 'geneMutationCount': 139}, {'geneName': 'TGFA', 'geneMutationCount': 103}, {'geneName': 'TRIM2', 'geneMutationCount': 2039}, {'geneName': 'UCK2', 'geneMutationCount': 261}, {'geneName': 'UGP2', 'geneMutationCount': 1938}, {'geneName': 'UPP1', 'geneMutationCount': 491}]

// const getProperComparisionData = (selectedGene,selectedRaces=[]) => 
// {
//     let sortedList = []
//     const dataObj = ancestryData[selectedGene];
//     sortedList.push(selectedRaces.map((raceObj) => {
//         const raceGeneArr = dataObj[raceObj.value];
//         const requiredGeneCombos = [...requiredGeneCombinations]
//         // const categoryDivision = {
//         //     'LOW': [],
//         //     'HIGH':[],
//         //     'MODERATE': [],
//         //     "MODIFIER": []
//         // }
//         // raceGeneArr.map((obj => {
//         //     categoryDivision[obj.category]?.push({
//         //         name: obj.mutationType,
//         //         frequency: obj.MutationCount
//         //     })
//         // }))
//         // sortedList.push(categoryDivision)
//         let initialBegin = 'LOW';
//         let others = ['MODERATE','MODIFIER','HIGH']
//         let index = 0
//         for(let obj of requiredGeneCombos){
//             const found = raceGeneArr.find((target) => obj.name === target.mutationType && target.category === initialBegin)
//                 if(found){
//                     // console.log(found)
//                     obj['frequency'] = found.MutationCount
//                 }
//             if(obj.category === initialBegin){
//                 initialBegin = others[index++];
//             }
//         }
//         return requiredGeneCombinations;
//     }));
//     return sortedList;
//     // console.log(sortedList)    
// }
const App = () => {
const [selected, setSelected] = useState([]);
const [count,setCount] = useState([  { value: 'afr', label: 'African/ African American'  },
{ value: 'amr', label: 'American Admixed / Latino', },]);

// if(selected && selected.length){
// sortedList = getProperComparisionData(selected[0]?.geneName,count)
// }
return (
    <>
<BarChart width={1800} height={800} data={data} margin={{
    top: 40,
    left: 40
}}>
	<Bar dataKey="geneMutationCount" fill="#ffbff9"  onClick={ (d) => {
        const newSelection = [];
        const newObj = {
            geneName: d.geneName
        }
        newSelection.push(newObj);
        setSelected(newSelection);
    }} />
	<XAxis  xAxisId={0} angle={-90} textAnchor='middle' textRendering='optimizeLegibility' tickLine={false}
    dataKey="geneName" fontSize={12} fontWeight={'bolder'} orientation='bottom' interval={0}
    >
    </XAxis>
	<YAxis dataKey="geneMutationCount" fontSize={20} fontWeight={'bolder'}>
    <Label angle={270} offset={20} position='left' style={{ textAnchor: 'middle', fontWeight:"bolder", fontSize:20 }}>
        Overall Frequency of Mutations on Genes
    </Label>
    </YAxis>
</BarChart>
    <h3 style={{textAlign: 'center'}}>GENES</h3>
{ selected && selected.length && 
    <div>
        <Option_Select setCount={setCount} />
        {count.map((x,i) => 
        <>
        <h1 style={{
            textAlign: 'center'
        }}>{x.label}</h1>
        <Rechart key={i}
        data = {getProperComparisionData(selected[0]?.geneName,x.value)}
        />
        </>
        ) 
        }
    </div>
}
</>
);
}

export default App;
