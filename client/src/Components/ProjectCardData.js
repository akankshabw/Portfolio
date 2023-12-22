import { dblClick } from "@testing-library/user-event/dist/click";
import Blockchain from "../assets/Blockchain.jpg";
import Chirp from "../assets/Chirp.jpg";
import Decisionpro from "../assets/Decisionpro.jpg";


const ProjectCardData = [
    {
        img: Blockchain,
        title: "Exploiting Blockchains with Open APIs",
        content: "This project aimed at implementing  a blockchain based decentralized application which uses APIs to do a certain task. It was an introduction to Blockchain, Web3 and Cryptocurrencies and how decentralized systems work. It also included working Application Programming Interfaces(or APIs) to include great features in an appplication.",
    },
    {
        img: Chirp,
        title: "Chirp : Birdsong Recognition",
        content: "Birdsong recognition plays a crucial role in various fields, from ecological research to wildlife monitoring. The Chirp project aims to develop an efficient and accurate bird call recognition system using machine learning techniques. The primary goal is to enable the identification of bird species based on their unique vocalizations.",
    },
    {
        img: Decisionpro, 
        title: "Introduction to Decision-Making",
        content: "The goal of this project is to increase participants' understanding of the neuroscientific principles and theories of decision-making. We examined a variety of research papers discussing various decision-making models. We also studied the role of these decision-making models in day-to-day life through a survey.",
    }
]

export default ProjectCardData;