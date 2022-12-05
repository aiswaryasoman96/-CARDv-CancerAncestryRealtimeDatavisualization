// import {data} from './overViewChart';
import { colourOptions } from "./Option_Select";
import { ancestryData } from "./ancestryData";
export const data = [
  { geneName: "ARPC5", geneMutationCount: 499 },
  { geneName: "BCL11A", geneMutationCount: 777 },
  { geneName: "CDC45", geneMutationCount: 1222 },
  { geneName: "CDCA7", geneMutationCount: 1307 },
  { geneName: "CDH3", geneMutationCount: 1037 },
  { geneName: "CDK6", geneMutationCount: 301 },
  { geneName: "CDKN2A", geneMutationCount: 1028 },
  { geneName: "CEBPB", geneMutationCount: 329 },
  { geneName: "CENPA", geneMutationCount: 180 },
  { geneName: "CENPN", geneMutationCount: 245 },
  { geneName: "CLCN4", geneMutationCount: 317 },
  { geneName: "CLCN5", geneMutationCount: 345 },
  { geneName: "CPNE8", geneMutationCount: 871 },
  { geneName: "CTSC", geneMutationCount: 739 },
  { geneName: "CYP39A1", geneMutationCount: 672 },
  { geneName: "EML4", geneMutationCount: 1777 },
  { geneName: "FANCE", geneMutationCount: 808 },
  { geneName: "FAT1", geneMutationCount: 4501 },
  { geneName: "FBLIM1", geneMutationCount: 581 },
  { geneName: "FOXA1", geneMutationCount: 476 },
  { geneName: "FOXC1", geneMutationCount: 549 },
  { geneName: "GPSM2", geneMutationCount: 899 },
  { geneName: "GPX7", geneMutationCount: 239 },
  { geneName: "HDGF", geneMutationCount: 2390 },
  { geneName: "HJURP", geneMutationCount: 1250 },
  { geneName: "HMGA1", geneMutationCount: 528 },
  { geneName: "HOMER3", geneMutationCount: 452 },
  { geneName: "IFRD1", geneMutationCount: 652 },
  { geneName: "IGF2BP2", geneMutationCount: 831 },
  { geneName: "ITGB8", geneMutationCount: 610 },
  { geneName: "KCMF1", geneMutationCount: 343 },
  { geneName: "KHDRBS3", geneMutationCount: 462 },
  { geneName: "KIF2C", geneMutationCount: 913 },
  { geneName: "LMO4", geneMutationCount: 250 },
  { geneName: "LYN", geneMutationCount: 1045 },
  { geneName: "MALL", geneMutationCount: 186 },
  { geneName: "MELK", geneMutationCount: 870 },
  { geneName: "MRAS", geneMutationCount: 238 },
  { geneName: "MSL3", geneMutationCount: 778 },
  { geneName: "MSN", geneMutationCount: 1139 },
  { geneName: "NOTCH1", geneMutationCount: 2773 },
  { geneName: "NT5C2", geneMutationCount: 749 },
  { geneName: "PDK1", geneMutationCount: 453 },
  { geneName: "PHOX2B", geneMutationCount: 64 },
  { geneName: "PLOD1", geneMutationCount: 1391 },
  { geneName: "PLOD3", geneMutationCount: 1339 },
  { geneName: "PM20D2", geneMutationCount: 481 },
  { geneName: "PPP1CB", geneMutationCount: 405 },
  { geneName: "PPP1R14C", geneMutationCount: 234 },
  { geneName: "PTCHD1", geneMutationCount: 470 },
  { geneName: "PVR", geneMutationCount: 3706 },
  { geneName: "RASD2", geneMutationCount: 271 },
  { geneName: "SCHIP1", geneMutationCount: 681 },
  { geneName: "SERBP1", geneMutationCount: 378 },
  { geneName: "SFRP1", geneMutationCount: 405 },
  { geneName: "SIRPA", geneMutationCount: 768 },
  { geneName: "SLC25A33", geneMutationCount: 321 },
  { geneName: "SMO", geneMutationCount: 3220 },
  { geneName: "SYT8", geneMutationCount: 1212 },
  { geneName: "TBC1D1", geneMutationCount: 9785 },
  { geneName: "TCL1A", geneMutationCount: 139 },
  { geneName: "TGFA", geneMutationCount: 103 },
  { geneName: "TRIM2", geneMutationCount: 2039 },
  { geneName: "UCK2", geneMutationCount: 261 },
  { geneName: "UGP2", geneMutationCount: 1938 },
  { geneName: "UPP1", geneMutationCount: 491 },
];
const requiredGeneCombinations = [
  { name: "A-T", frequency: 0 },
  { name: "A-G", frequency: 0 },
  { name: "A-C", frequency: 0 },
  { name: "T-A", frequency: 0 },
  { name: "T-G", frequency: 0 },
  { name: "T-C", frequency: 0 },
  { name: "C-T", frequency: 0 },
  { name: "C-A", frequency: 0 },
  { name: "C-G", frequency: 0 },
  { name: "G-T", frequency: 0 },
  { name: "G-A", frequency: 0 },
  { name: "G-C", frequency: 0 },
  { name: "Ot-T", frequency: 0 },
  { name: "Ot-C", frequency: 0 },
  { name: "Ot-G", frequency: 0 },
  { name: "G-Ot", frequency: 0 },
  { name: "C-Ot", frequency: 0 },
  { name: "T-Ot", frequency: 0, category: "LOW" },
  { name: "", frequency: 0 },
  { name: "A-T", frequency: 0 },
  { name: "A-G", frequency: 0 },
  { name: "A-C", frequency: 0 },
  { name: "T-A", frequency: 0 },
  { name: "T-G", frequency: 0 },
  { name: "T-C", frequency: 0 },
  { name: "C-T", frequency: 0 },
  { name: "C-A", frequency: 0 },
  { name: "C-G", frequency: 0 },
  { name: "G-T", frequency: 0 },
  { name: "G-A", frequency: 0 },
  { name: "G-C", frequency: 0 },
  { name: "Ot-T", frequency: 0 },
  { name: "Ot-C", frequency: 0 },
  { name: "Ot-G", frequency: 0 },
  { name: "G-Ot", frequency: 0 },
  { name: "C-Ot", frequency: 0 },
  { name: "T-Ot", frequency: 0, category: "MODERATE" },
  { name: "", frequency: 0 },
  { name: "A-T", frequency: 0 },
  { name: "A-G", frequency: 0 },
  { name: "A-C", frequency: 0 },
  { name: "T-A", frequency: 0 },
  { name: "T-G", frequency: 0 },
  { name: "T-C", frequency: 0 },
  { name: "C-T", frequency: 0 },
  { name: "C-A", frequency: 0 },
  { name: "C-G", frequency: 0 },
  { name: "G-T", frequency: 0 },
  { name: "G-A", frequency: 0 },
  { name: "G-C", frequency: 0 },
  { name: "Ot-T", frequency: 0 },
  { name: "Ot-C", frequency: 0 },
  { name: "Ot-G", frequency: 0 },
  { name: "G-Ot", frequency: 0 },
  { name: "C-Ot", frequency: 0 },
  { name: "T-Ot", frequency: 0, category: "MODIFIER" },
  { name: "", frequency: 0 },
  { name: "A-T", frequency: 0 },
  { name: "A-G", frequency: 0 },
  { name: "A-C", frequency: 0 },
  { name: "T-A", frequency: 0 },
  { name: "T-G", frequency: 0 },
  { name: "T-C", frequency: 0 },
  { name: "C-T", frequency: 0 },
  { name: "C-A", frequency: 0 },
  { name: "C-G", frequency: 0 },
  { name: "G-T", frequency: 0 },
  { name: "G-A", frequency: 0 },
  { name: "G-C", frequency: 0 },
  { name: "Ot-T", frequency: 0 },
  { name: "Ot-C", frequency: 0 },
  { name: "Ot-G", frequency: 0 },
  { name: "G-Ot", frequency: 0 },
  { name: "C-Ot", frequency: 0 },
  { name: "T-Ot", frequency: 0, category: "HIGH" },
];
const genes = data.map((obj) => obj.geneName);
const races = colourOptions.map((obj) => obj.value);
const masterData = {};

const getProperComparisionData = (
  selectedGene,
  selectedRace,
  requiredGeneCombos = JSON.parse(JSON.stringify(requiredGeneCombinations))
) => {
  let maximum = Number.MIN_SAFE_INTEGER;
  const dataObj = ancestryData[selectedGene];
  const raceGeneArr = dataObj[selectedRace];
  let initialBegin = "LOW";
  let others = ["MODERATE", "MODIFIER", "HIGH"];
  let index = 0;
  for (let i = 0; i < requiredGeneCombos.length; i++) {
    const found = raceGeneArr.find(
      (target) =>
        requiredGeneCombos[i].name === target.mutationType &&
        target.category === initialBegin
    );
    if (found) {
      requiredGeneCombos[i]["frequency"] = found.MutationCount;
      if (found.MutationCount > maximum) {
        maximum = found.MutationCount;
      }
    }
    if (requiredGeneCombos[i]?.category === initialBegin) {
      initialBegin = others[index++];
    }
  }
  return [requiredGeneCombos, maximum];
};

// for(let i of genes){
//     for(let j of races){
//         getProperComparisionData(i,j,[...requiredGeneCombinations])
//     }
// }
export default getProperComparisionData;
