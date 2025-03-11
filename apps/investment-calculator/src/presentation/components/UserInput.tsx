import React from "react";
import { InvestmentModel } from "../../data/InvestmentModel";

interface UserInputProps {
    formInput: InvestmentModel;
    handleInputChange: (inputIdentifier: string, inputValue: number) => void;
}

const UserInput: React.FC<UserInputProps> = ({ formInput, handleInputChange }) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        required
                        type="number"
                        value={formInput.initialInvestment}
                        onChange={(event) => handleInputChange("initialInvestment", Number(event.target.value))}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        required
                        type="number"
                        value={formInput.annualInvestment}
                        onChange={(event) => handleInputChange("annualInvestment", Number(event.target.value))}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return (%)</label>
                    <input
                        required
                        type="number"
                        value={formInput.expectedReturn}
                        onChange={(event) => handleInputChange("expectedReturn", Number(event.target.value))}
                    />
                </p>
                <p>
                    <label>Duration (Year)</label>
                    <input
                        required
                        type="number"
                        value={formInput.duration}
                        onChange={(event) => handleInputChange("duration", Number(event.target.value))}
                    />
                </p>
            </div>
        </section>
    );
};

export default UserInput;
