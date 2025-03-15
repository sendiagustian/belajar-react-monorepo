import "../../assets/css/header.css";
import GameLogo from "../../assets/game-logo.png";
import React from "react";

const Header: React.FC = () => {
    return (
        <header>
            <img src={GameLogo} alt="Hand-drawn Tic Tac Toe logo" />
            <h1>Tic Tac Toe</h1>
        </header>
    );
};

export default Header;
