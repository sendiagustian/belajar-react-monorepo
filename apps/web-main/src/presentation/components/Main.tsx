import React from "react";

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className="flex-grow container max-w-screen-xl mx-auto px-4 py-8">{children}</main>
    );
};

export default Main;
