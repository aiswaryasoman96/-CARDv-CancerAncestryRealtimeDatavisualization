import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutUs from "./AboutUs";
import AboutData from "./AboutData";
import { SunburstChart } from "./Sunburst";
import Reachart from "./Rechart";
import OverViewChart from "./overViewChart";
import ImpCircle from "./radialBarChart";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <OverViewChart />
//     {/* <ImpCircle raceName="African Americans" /> */}
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <AboutUs /> */}
    <AboutData />
    {/* <ImpCircle raceName="African Americans" /> */}
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>);
