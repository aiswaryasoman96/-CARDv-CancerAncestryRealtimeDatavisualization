import React from "react";
import geneImage from "./images/Gene.png";
import Head from "./Heading";
import myText from "./data/sample.txt";
import Navbar from "./Navbar";

const Title = "About the Data";
let content;

fetch(myText)
  .then((r) => r.text())
  .then((text) => {
    content = text;
  });

export default function Page() {
  return (
    <>
      <Navbar />
      <img style={{ width: 2000, height: 400 }} src={geneImage} alt="Logo" />;
      <Head heading={Title}></Head>
      <p>{content}</p>
    </>
  );
}
