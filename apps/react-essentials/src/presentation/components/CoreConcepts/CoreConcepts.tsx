import React from "react";
import { CORE_CONCEPTS } from "../../../data/data";
import { CoreConcept } from "./CoreConcept";
import { Section } from "../core/Section";

export const CoreConcepts = () => {
    console.log("CoreConcepts rendered");

    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((concept, index) => (
                    <CoreConcept
                        key={index}
                        image={concept.image}
                        alt={concept.title}
                        title={concept.title}
                        description={concept.description}
                    />
                ))}
            </ul>
        </Section>
    );
};
