import React from "react";

interface TabsProps {
    children: React.ReactNode;
    buttons: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children, buttons }) => {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
};
