import React from "react";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, ...props }) => {
    return (
        <section id={id} {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
};
