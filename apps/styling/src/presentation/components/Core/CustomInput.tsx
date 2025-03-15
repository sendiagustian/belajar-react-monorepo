import React from "react";
import styled from "styled-components";

const Label = styled.label<{ $invalid?: boolean }>`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ $invalid }) => ($invalid ? "#dc2626" : "#6b7280")};
`;

const Input = styled.input<{ $invalid?: boolean }>`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: ${({ $invalid }) => ($invalid ? "#fee2e2" : "#d1d5db")};
    color: ${({ $invalid }) => ($invalid ? "#dc2626" : "#374151")};
    border: 1px solid ${({ $invalid }) => ($invalid ? "#dc2626" : "transparent")};
    border-radius: 0.25rem;
    box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    invalid: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, invalid, ...props }) => {
    return (
        <p>
            <Label $invalid={invalid}>{label}</Label>
            <Input {...props} $invalid={invalid} />
        </p>
    );
};

export default CustomInput;
