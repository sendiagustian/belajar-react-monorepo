import "../../assets/css/player.css";
import React from "react";

interface PlayersProps {
    children: React.ReactNode;
}

const Players: React.FC<PlayersProps> = ({ children }) => {
    return (
        <ol id="players" className="highlight-player">
            {children}
        </ol>
    );
};

export default Players;
