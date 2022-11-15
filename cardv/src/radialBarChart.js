import React from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';

const percentage = 0.86

function Example(props) {
    return (
      <div style={{ marginBottom: 80 }}>
        <hr style={{ border: "2px solid #ddd" }} />
        <div style={{ marginTop: 30, display: "flex" }}>
          <div style={{ width: "10%", paddingRight: 30, textAlign: 'center' }}>
            {props.children}
            <h3 className="h5">{props.label}</h3>
            <p>{props.description}</p>
            
          </div>
        </div>
      </div>
    );
  }
  
export default (props) => (
<Example label={props.raceName}>
<CircularProgressbar
        value={percentage*100}
        text={`${percentage}`}
        background
        backgroundPadding={6}
        styles={
            buildStyles({
          backgroundColor: "#000",
          textColor: "#fff",
          pathColor: "blue",
          trailColor: "red",

        })}
/>
</Example>
);