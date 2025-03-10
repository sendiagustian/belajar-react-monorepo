import React from "react";
import { LogTurnModel } from "../../models/LogTurnModel";

const initialGameBoard: (string | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

interface GameBoardProps {
    onSelectedSquare: (rowIndex: number, colIndex: number) => void;
    gameTurns: LogTurnModel[];
}

const GameBoard: React.FC<GameBoardProps> = ({ onSelectedSquare, gameTurns }) => {
    const gameBoard = [...initialGameBoard.map((row) => [...row])];

    for (const turn of gameTurns) {
        const { square, palayer } = turn;
        const { row, col } = square;

        gameBoard[row][col] = palayer;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, cellIndex) => {
                                return (
                                    <li key={cellIndex}>
                                        <button
                                            disabled={playerSymbol !== null}
                                            onClick={() => onSelectedSquare(rowIndex, cellIndex)}
                                        >
                                            {playerSymbol}
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
};

export default GameBoard;
