import React from "react";

interface GameOverProps {
    winner: string | null;
    players: { X: string; O: string };
    handleRematch: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ winner, players, handleRematch }) => {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{`Winner: ${winner === "X" ? players.X : players.O}`}</p>}
            {!winner && <p>It's a draw!</p>}
            <p>
                <button onClick={handleRematch}>Rematch!</button>
            </p>
        </div>
    );
};

export default GameOver;
