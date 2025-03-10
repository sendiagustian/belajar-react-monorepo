import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Catalogues from "./components/Catalogues";
import { catalogues } from "../data/Catalogues";
// import { App as TicTacToe } from "@repo/tic-tac-toe/src/presentation/App";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>
                <Catalogues catalogues={catalogues} />
            </Main>
            <Footer />
        </div>
    );
};

export default App;
