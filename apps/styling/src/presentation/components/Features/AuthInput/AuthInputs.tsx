import "./AuthInputs.css";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Core/Button";
import CustomInput from "../../Core/CustomInput";

const ContainerControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const AuthInputs: React.FC = () => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier: string, value: string) {
        if (identifier === "email") {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes("@");
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs">
            <ContainerControl>
                <CustomInput
                    label="Email"
                    invalid={emailNotValid}
                    onChange={(event) => handleInputChange("email", event.target.value)}
                />
                <CustomInput
                    label="Password"
                    invalid={passwordNotValid}
                    onChange={(event) => handleInputChange("password", event.target.value)}
                />
            </ContainerControl>
            <div className="actions">
                <button type="button" className="text-button">
                    Create a new account
                </button>
                <Button className="button" onClick={handleLogin}>
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default AuthInputs;
