// Check full tutorial: https://dev.to/andrewchmr/react-d3-sunburst-chart-3cpd

import React, { useState } from "react";
import * as d3 from "d3";
import data from "./data/ancestry_scores/combinedAncestryScore.json";

const SIZE = 975;
const RADIUS = SIZE / 2;
const principalObj = 
{"name":"all",
"children":[]
}

function generateChildren(){
    const filenames = Object.keys(data);
    filenames.map(filename => {
        const tempObj = {"name": filename}
        const array = data[filename];
        const fl = Object.keys(array).slice(0,5);
        tempObj["children"] = [];
        fl.map( k => {
            tempObj["children"].push({
                "name":`${k}`,
                "value":array[k]
            })
        })
        principalObj["children"].push(tempObj);
    })
}
generateChildren()

function generateAncestryLevel(ancestry){
  // const filenames = Object.keys(data);
  principalObj["children"] = [];
  const filenames = [ancestry];
  filenames.map(filename => {
      const tempObj = {"name": filename}
      const array = data[filename];
      const fl = Object.keys(array)//.slice(0,5);
      tempObj["children"] = [];
      fl.map( k => {
          tempObj["children"].push({
              "name":`${k}`,
              "value":array[k]
          })
      })
      principalObj["children"].push(tempObj);
  })
}
generateAncestryLevel("afr")


export const SunburstChart = () => {
  const svgRef = React.useRef(null);
  const [viewBox, setViewBox] = React.useState("0,0,0,0");
  const partition = (data) =>
    d3.partition().size([2 * Math.PI, RADIUS])(
      d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value)
    );

  const color = d3.scaleOrdinal(
    d3.quantize(d3.interpolateRainbow, principalObj.children?.length + 1)
  );

  const format = d3.format(",s");

  const arc = d3
    .arc()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(RADIUS / 2)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1);

  const getAutoBox = () => {
    if (!svgRef.current) {
      return "";
    }

    const { x, y, width, height } = svgRef.current.getBBox();

    return [x, y, width, height].toString();
  };

  React.useEffect(() => {
    setViewBox(getAutoBox());
  }, []);
  const getColor = (d) => {
    while (d.depth > 1) d = d.parent;
    return color(d.data.name);
  };

  const getTextTransform = (d) => {
    const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
    const y = (d.y0 + d.y1) / 2;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
  };

  const root = partition(principalObj);
  return (
    <svg width={SIZE} height={SIZE} viewBox={viewBox} ref={svgRef}>
      <g fillOpacity={0.3}>
        {root
          .descendants()
          .filter((d) => d.depth)
          .map((d, i) => (
            <path key={`${d.data.name}-${i}`} fill={getColor(d)} d={arc(d)} onClick={() => generateAncestryLevel(d.data.name)}>
              <text>
                {d
                  .ancestors()
                  .map((d) => d.data.name)
                  .reverse()
                  .join("/")}
                \n${format(d.value)}
              </text>
            </path>
          ))}
      </g>
      <g
        pointerEvents="none"
        textAnchor="middle"
        fontSize={10}
        fontFamily="sans-serif"
      >
        {root
          .descendants()
          .filter((d) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
          .map((d, i) => (
            <text
              key={`${d.data.name}-${i}`}
              transform={getTextTransform(d)}
              dy="0.35em"
            >
              {d.data.name}
            </text>
          ))}
      </g>
    </svg>
  );
};
