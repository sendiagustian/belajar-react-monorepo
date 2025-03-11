import "../assets/css/index.css";
import React from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { InvestmentModel } from "../data/InvestmentModel";
import Results from "./components/Results";

const App: React.FC = () => {
    const [formInput, setFormInput] = React.useState<InvestmentModel>({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    const validNotNegative = (input: InvestmentModel) => {
        return (
            input.initialInvestment > 0 &&
            input.annualInvestment > 0 &&
            input.expectedReturn > 0 &&
            input.duration > 0
        );
    };

    function handleInputChange(inputIdentifier: string, inputValue: number) {
        setFormInput((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: inputValue,
            };
        });
    }

    let errorMessages = null;
    let showResults = false;

    if (!validNotNegative(formInput)) {
        errorMessages =
            "Please input positive numbers only and make sure all fields not empty or zero.";
    } else {
        errorMessages = null;
        showResults = true;
    }

    return (
        <>
            <Header />
            <UserInput formInput={formInput} handleInputChange={handleInputChange} />
            {errorMessages && <p className="center">{errorMessages}</p>}
            {showResults && <Results input={formInput} />}
        </>
    );
};

export default App;
