import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/react-essentials" />
            <Route path="/tic-tac-toe" />
            <Route path="/investment" />
        </Routes>
    );
};

export default AppRouter;
