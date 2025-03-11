import React from "react";
import { InvestmentModel } from "../../data/InvestmentModel";
import { calculateInvestmentResults, formatter } from "../../utils/investment";

interface ResultsProps {
    input: InvestmentModel;
}

const Results: React.FC<ResultsProps> = ({ input }) => {
    const results = calculateInvestmentResults(input);
    let initialInvestment = 0;

    if (results.length > 0) {
        initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((yearData) => {
                    const totalInterest =
                        yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

                    const totalAmountInvestmet = yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvestmet)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Results;
