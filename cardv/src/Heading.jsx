import React from 'react';
import './AboutUs.css';

// export default function Heading(heading){
//     return (
//         <h1 className = "heading">{heading}</h1>
//     )
// }
// const hg = "Know the team";

export default function Heading({heading}){
    return (
        <h1 style={{ fontFamily:"Roboto",fontSize:"36" }} className = "heading">{heading}</h1>
    )
}