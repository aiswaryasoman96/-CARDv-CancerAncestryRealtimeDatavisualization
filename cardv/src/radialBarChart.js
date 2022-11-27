import React from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import './Overview.css';



function Example(props) {
    return (
      <div style={{ marginBottom: -10 }}>
        <div title={`${props.onHover === true ? 'Click to add ancestry to comparitive view' : 'Ancestry already in comparitive view'}`} onClick={() => props.click(props.raceVal,props.raceName)} style={{ marginTop: 5, display: "flex" }}>
          <div style={{ width: "70%", paddingRight: 30, textAlign: 'center' }}>
            {props.children}
            <h3 className="radial-ancestry-title">{props.raceVal}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
export default (props) => (
<Example label={props.raceName}{...props}>
<CircularProgressbar
        value={(props.percentage*100)}
        text={`${(props.percentage.toFixed(3))}`}
        background
        backgroundPadding={6}
        strokeWidth={5}
        styles={
            buildStyles({
          backgroundColor: "#000",
          textColor: "#fff",
          pathColor: "red",
        })}
/>
</Example>
);