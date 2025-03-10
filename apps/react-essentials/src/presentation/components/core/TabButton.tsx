import React from "react";

interface TabButtonProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({ label, isSelected, ...props }) => {
    console.log(`TabButton rendered`);

    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>
                {label}
            </button>
        </li>
    );
};
