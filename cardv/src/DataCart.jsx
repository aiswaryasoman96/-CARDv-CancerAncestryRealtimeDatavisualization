
import React from 'react';
import './AboutData.css';


export  function DataCartL(prop){
    return (
    <div         
    style={{
        display: "flex",
        justifyContent: "space-between",
        paddingRight:"250px",
        color:"whitesmoke"
      }}>
    <p style={{color:'#000000',textAlign:'justify', marginInline:"15px"}}>{prop.cont}</p>
    <img className = "img" src={prop.img} alt="Logo" />
    </div>
    )
}

 export function DataCartR(prop){
    return (
    <div         
    style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft:"250px",
        color:"whitesmoke"
      }}>
    <img className = "img" src={prop.img} alt="Logo" />  
    <p style={{color:'#000000',textAlign:'justify', marginInline:"15px"}}>{prop.cont}</p>
    </div>
    )
}

// export const DataCartL;
// export const DataCartR ;
