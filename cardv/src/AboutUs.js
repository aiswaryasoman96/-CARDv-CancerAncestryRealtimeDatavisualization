import React from "react";
import geneImage from "./images/Gene.png";
import aiswarya from "./images/Aiswarya.jpeg";
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
      img: aiswarya,
      about:
        "Aiswarya is a software engineer with years of experience in the Financial Technology domain. Her expertise lies in developing data engineering and data transforming applications using Python, SQL, Pandas and Flask. She is a trained classical dancer, also enjoys swimming and riding motorcycles",
    },
    {
      name: "Aiswarya",
      img: aiswarya,
      about:
        "Aiswarya is a software engineer with years of experience in the Financial Technology domain. Her expertise lies in developing data engineering and data transforming applications using Python, SQL, Pandas and Flask. She is a trained classical dancer, also enjoys swimming and riding motorcycles",
    },
    {
      name: "Leslie",
      img: aiswarya,
      about:
        "Aiswarya is a software engineer with years of experience in the Financial Technology domain. Her expertise lies in developing data engineering and data transforming applications using Python, SQL, Pandas and Flask. She is a trained classical dancer, also enjoys swimming and riding motorcycles",
    },
    {
      name: "Suhas",
      img: aiswarya,
      about:
        "Aiswarya is a software engineer with years of experience in the Financial Technology domain. Her expertise lies in developing data engineering and data transforming applications using Python, SQL, Pandas and Flask. She is a trained classical dancer, also enjoys swimming and riding motorcycles",
    },
  ];

  return (
    <>
      <Navbar />
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
