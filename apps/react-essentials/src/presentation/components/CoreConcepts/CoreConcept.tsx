import "./CoreConcept.css";
import React from "react";

interface CoreConceptProps {
    image: string;
    alt: string;
    title: string;
    description: string;
}

export const CoreConcept: React.FC<CoreConceptProps> = ({ image, alt, title, description }) => {
    console.log("CoreConcept rendered");

    return (
        <li>
            <img src={image} alt={alt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};
