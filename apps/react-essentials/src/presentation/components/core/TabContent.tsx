import React from "react";

interface TabContentProps {
    title: string;
    description: string;
    code: string;
}

export const TabContent: React.FC<TabContentProps> = ({ title, description, code }) => {
    console.log("TabContent rendered");

    return (
        <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
};
