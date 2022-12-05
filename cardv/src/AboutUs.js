import React from "react";
import geneImage from "./images/Gene.png";
// import aiswarya from "./images/Aiswarya.jpeg";
import aiswarya from "./images/aiswaryas.jpg";
import abhisheik from "./images/Abhisheik.jpeg";
import leslie from "./images/Leslie.jpeg";
import suhas from "./images/Suhas.jpg";
import "./AboutUs.css";
import Head from "./Heading";
import Member from "./Member";
import Navbar from "./Navbar";

const members = ["Abhisheik", "Aiswarya", "Leslie", "Suhas"];
const memberData = [];
const i = 1;
const title = "Know the Team";

export default function Heading() {
  const arr = [
    {
      name: "Abhisheik",
      img: abhisheik,
      about:
        "Abhisheik is a software engineer. He is a fairly unseasoned programmer with less than a year or professional work experience. Employed in a local tech startup funded by UF, he specializes in the .Net framework and C# with some experience with front end technologies. In his free time he enjoys cooking and gaming",
    },
    {
      name: "Aiswarya",
      img: aiswarya,
      about:
        "Aiswarya is a software engineer with years of experience in the Financial Technology domain. Her expertise lies in developing data engineering and data transforming applications using Python, SQL, Pandas and Flask. She is a trained classical dancer, also enjoys swimming and riding motorcycles",
    },
    {
      name: "Leslie",
      img: leslie,
      about:
        "Leslie is a 2nd year PhD student in the Graim Lab. I build models of diseases more inclusive for ancestries typically not represented in GWAS data.",
    },
    {
      name: "Suhas",
      img: suhas,
      about:
        "I'm an avid computer science enthusiast with a particular interest in Artificail Intelligence and Financial technologies. If you love to hit the gym, go on a hike, play video games, watch MMA, sci-fi stuff, I have a feeling we'll be best friends",
    },
  ];

  return (
    <>
      <img style={{ width: "100%", height: 400 }} src={geneImage} alt="Logo" />;
      <Head heading={title}></Head>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {arr.map((obj) => {
          return <Member name={obj.name} img={obj.img} about={obj.about} />;
        })}
      </div>
    </>
  );

  // return (
  //   <>
  //   <img style={{ width: 2000, height: 400 }} src={geneImage} alt="Logo" />;
  //   <Head></Head>
  //   <div className="member">
  //   <h1 className = "heading">Aiswarya</h1>
  //   <img className = "img" src={aiswarya} alt="Logo" />;
  //   <p>{about}</p>
  //   </div>
  //   </>
  //   )
}
