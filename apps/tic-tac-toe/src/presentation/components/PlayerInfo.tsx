import React, { useState } from "react";

interface PlayerInfoProps {
    initialName: string;
    symbol: string;
    isActive: boolean;
    changeName: (symbol: string, newName: string) => void;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ initialName, symbol, isActive, changeName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    let displayPlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        displayPlayerName = (
            <input className="player-input" type="text" required value={playerName} onChange={handleChange} />
        );
    }

    function handleEdit() {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing) {
            changeName(symbol, playerName);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span id="player">
                {displayPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};

export default PlayerInfo;
