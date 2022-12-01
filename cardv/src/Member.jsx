
import React from 'react';
import './AboutUs.css';
import './images/Aiswarya.jpeg'


export default function Member(prop){
    return (
    <div className="member" >
    <h1 className = "heading">{prop.name}</h1>
    <img className = "img" src={prop.img} alt="Logo" />;
    <p style={{color:'#000000',textAlign:'justify', marginInline:"15px",fontStyle: 'italic',fontSize:"30"}}>{prop.about}</p>
    </div>
    )
}