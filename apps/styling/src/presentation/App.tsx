import "../assets/css/base.css";
import React from "react";
import Header from "./components/Core/Header";
import AuthInputs from "./components/Features/AuthInput/AuthInputs";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <AuthInputs />
            </main>
        </>
    );
};

export default App;
