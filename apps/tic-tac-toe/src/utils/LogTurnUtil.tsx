import { WINNING_COMBINATIONS } from "../data/WinningCombination";
import { LogTurnModel } from "../models/LogTurnModel";

export const driveActivePlayer = (gameTurns: LogTurnModel[]): string => {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].palayer === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
};

export const checkWinner = (turns: LogTurnModel[]): string | null => {
    const xTurns = turns.filter((turn) => turn.palayer === "X").map((turn) => turn.square);
    const oTurns = turns.filter((turn) => turn.palayer === "O").map((turn) => turn.square);

    const isXWinner = WINNING_COMBINATIONS.some((combination) =>
        combination.every((pos) =>
            xTurns.some((move) => move.row === pos.row && move.col === pos.col)
        )
    );

    if (isXWinner) return "X";

    // Cek apakah pemain O menang
    const isOWinner = WINNING_COMBINATIONS.some((combination) =>
        combination.every((pos) =>
            oTurns.some((move) => move.row === pos.row && move.col === pos.col)
        )
    );

    if (isOWinner) return "O";

    return null;
};
