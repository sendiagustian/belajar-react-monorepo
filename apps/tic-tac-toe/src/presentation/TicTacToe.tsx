import React, { useState } from "react";
import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import LogTurn from "./components/LogTurn";
import GameOver from "./components/GameOver";
import { LogTurnModel } from "../models/LogTurnModel";
import { checkWinner, driveActivePlayer } from "../utils/LogTurnUtil";
import Main from "./components/Main";
import GameContainer from "./components/GameContainer";
import Players from "./components/Players";
import Header from "./components/Header";

const TicTacToe: React.FC = () => {
    const [players, setPlayers] = useState<{ X: string; O: string }>({
        X: "Player 1",
        O: "Player 2",
    });
    const [gameTurns, setGameTurns] = useState<LogTurnModel[]>([]);

    let activePlayer = driveActivePlayer(gameTurns);

    let winner = checkWinner(gameTurns);

    const hasDraw = gameTurns.length === 9 && !winner;

    if (winner) {
        activePlayer = winner;
    }

    function handleSelectedSquare(rowIndex: number, colIndex: number) {
        if (!winner) {
            setGameTurns((prevTurns) => {
                const currentPlayer = driveActivePlayer(prevTurns);

                const newTurn: LogTurnModel = {
                    palayer: currentPlayer,
                    square: {
                        row: rowIndex,
                        col: colIndex,
                    },
                };

                const updatedTurns = [newTurn, ...prevTurns];

                return updatedTurns;
            });
        }
    }

    function handlePlayerNameChange(symbol: string, newName: string) {
        setPlayers((prevPlayers) => {
            return {
                ...prevPlayers,
                [symbol]: newName,
            };
        });
    }

    function resetGame() {
        setGameTurns(() => {
            return [];
        });

        winner = null;
    }

    return (
        <div id="tictactoe">
            <Header />
            <Main>
                <GameContainer>
                    <Players>
                        <PlayerInfo
                            initialName="Player 1"
                            symbol="X"
                            isActive={activePlayer === "X"}
                            changeName={handlePlayerNameChange}
                        />
                        <PlayerInfo
                            initialName="Player 2"
                            symbol="O"
                            isActive={activePlayer === "O"}
                            changeName={handlePlayerNameChange}
                        />
                    </Players>
                    {(winner || hasDraw) && (
                        <GameOver winner={winner} players={players} handleRematch={resetGame} />
                    )}
                    <GameBoard gameTurns={gameTurns} onSelectedSquare={handleSelectedSquare} />
                </GameContainer>
                <LogTurn log={gameTurns} />
            </Main>
        </div>
    );
};

export default TicTacToe;
