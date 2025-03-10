import React from "react";
import { Header } from "./components/Header/Header";
import { CoreConcepts } from "./components/CoreConcepts/CoreConcepts";
import { Examples } from "./components/Exsamples/Examples";

function ReactEssentials() {
    console.log("ReactEssentials RENDERED");

    return (
        <>
            <Header />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default ReactEssentials;
