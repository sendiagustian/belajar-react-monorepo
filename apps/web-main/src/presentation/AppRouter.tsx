import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "./App";

const ExternalRedirect = () => {
    const location = useLocation();

    useEffect(() => {
        window.location.href = location.pathname; // Redirect ke path yang sama
    }, [location]);

    return null; // Tidak menampilkan apapun
};

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/react-essentials" element={<ExternalRedirect />} />
            <Route path="/tic-tac-toe" element={<ExternalRedirect />} />
            <Route path="/investment" element={<ExternalRedirect />} />
        </Routes>
    );
};

export default AppRouter;
