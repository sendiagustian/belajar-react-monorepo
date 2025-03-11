import "./Header.css";
import React from "react";
import headerImg from "../../../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max + 1);
}

export const Header = () => {
    console.log("Header rendered");

    return (
        <header>
            <img src={headerImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app
                you are going to build!
            </p>
        </header>
    );
};
