import "../../assets/css/game.css";
import React from "react";

interface GameContainerProps {
    children: React.ReactNode;
}

const GameContainer: React.FC<GameContainerProps> = ({ children }) => {
    return <div id="game-container">{children}</div>;
};

export default GameContainer;
