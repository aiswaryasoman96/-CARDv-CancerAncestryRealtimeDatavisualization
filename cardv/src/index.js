import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SunburstChart } from './Sunburst';
import Reachart from './Rechart';
import OverViewChart from './overViewChart';
import ImpCircle from './radialBarChart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OverViewChart />
    {/* <ImpCircle raceName="African Americans" /> */}
  </React.StrictMode>
);

