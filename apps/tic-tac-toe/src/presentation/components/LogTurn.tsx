import "../../assets/css/log.css";
import React from "react";
import { LogTurnModel } from "../../models/LogTurnModel";

interface LogTurnProps {
    log: LogTurnModel[];
}

const LogTurn: React.FC<LogTurnProps> = ({ log }) => {
    return (
        <ol id="log">
            {log.map((log, index) => (
                <li key={index}>{`${log.palayer} selected: row=${log.square.row}, col=${log.square.col}`}</li>
            ))}
        </ol>
    );
};

export default LogTurn;
