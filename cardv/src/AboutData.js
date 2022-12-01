import React from "react";
import geneImage from "./images/Gene.png";
import firstGene from "./images/Gene first.png";
import ml from "./images/ML.png";
import vis from "./images/vis.png";
import Head from "./Heading";
import { DataCartL, DataCartR } from "./DataCart";
import myText from "./data/sample.txt";
import Navbar from "./Navbar";
// import projectData from "./data/ProjectData.json";
const projectData = {
  First:
    "Breast Cancer is found to be occuring in different ancestries in different rates. This data and project is part of an ongoing research work under so-and-so lab. The study is conducted by collecting data about genes that are associated with breast cancer the most. SNP frequency is the frequency of mutation of an allele in a gene on a chromosome. The SNP frequency in these genes and the genes' importance in each ancestry is studied.  ",
  Second:
    "First we took the top 20 most mutated genes in a disease from the Catalogue of Somatic Mutations in Cancer (COSMIC) and finding each gene’s first, second, and third    neighbors in a tissue network from Humanbase [21] [18].    Because we are piloting our method on breast cancer in this paper, we use the mammary epithelium (breast tissue)    network. After retrieving these genes, we integrate the    Genome Aggregation Database (GnomAD) allele frequency    data by mapping each single nucleotide polymorphism (SNP)    to the gene it occurs in [20]. We use SNP’s because they have    been associated with various disease phenotypes and occur at    different frequencies in different ancestral populations,    ultimately causing some populations to be more susceptible to certain diseases. After mapping SNP to their gene, we have    SNP frequency in each ancestry for each gene within three    edges of a top mutated gene. For each ancestry we sort    associated allele frequencies in decreasing order and take the    top 3000 genes for each ancestry to be run through a logistic    regression model. The model will identify breast cancer    subtypes using The Cancer Genome Atlas (TCGA) expression    data. It assigns importance scores to genes, which tell us about    the top genes in each ancestry were used when discriminating    between subtypes [19]. The output of this model is then used    as input to our visualization interface. ",

  Third:
    "An overall importance score for each gene can be seen in the overview. Clicking on a gene, shows the importance of it towrads each ancestry and also allows us to compare the mutation frequence of all types in various consequence categories between different ancestries. This helps researchers figure out how is each gene mutating and affecting different ancestries and how should the target treatment vary. ",
};

const Title = "About the Data";
let content;

fetch(myText)
  .then((r) => r.text())
  .then((text) => {
    content = text;
  });

const name = "hello";
export default function Page() {
  return (
    <div
      style={{ justifyContent: "space-between", flexDirection: "column" }}
      className="background-about-data"
    >
      <img style={{ width: "100%", height: 400 }} src={geneImage} alt="Logo" />

      <Head heading={Title}></Head>
      <DataCartL cont={projectData.First} img={firstGene} />
      <DataCartR cont={projectData.Second} img={ml}></DataCartR>
      <DataCartL cont={projectData.Third} img={vis}></DataCartL>
    </div>
  );
}
