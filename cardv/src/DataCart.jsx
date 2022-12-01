
import React from 'react';
import './AboutData.css';


export  function DataCartL(prop){
    return (
    <div         
    style={{
        display: "flex",
        justifyContent: "space-between",
        padding:"10px",
        paddingRight:"250px",
        backgroundColor:"#808080",
        paddingLeft:"75px",
      }}>
    <p style={{color:'#000000',textAlign:'justify', marginInline:"15px",fontStyle: 'italic',fontSize: 26}}>{prop.cont}</p>
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
        backgroundColor:"#808080",
        paddingRight:"75px",
      }}>
    <img className = "img" src={prop.img} alt="Logo" />  
    <p style={{color:'#000000',textAlign:'justify', marginInline:"15px",fontStyle: 'italic',fontSize: 26}}>{prop.cont}</p>
    </div>
    )
}

// export const DataCartL;
// export const DataCartR ;
