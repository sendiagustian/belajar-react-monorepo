import "./Examples.css";
import React, { useState } from "react";
import { TabContent } from "../core/TabContent";
import { TabButton } from "../core/TabButton";
import { Tabs } from "../core/Tabs";
import { Section } from "../core/Section";
import { EXAMPLES } from "../../../data/data";
import { ExampleModel } from "../../../data/models/ExampleModel";

export const Examples = () => {
    console.log("Examples rendered");

    const [selectedTopic, setSelectedTopic] = useState<keyof ExampleModel>("components");
    let tabContent = <>"Please selected topic"</>;

    if (selectedTopic) {
        tabContent = (
            <TabContent
                title={EXAMPLES[selectedTopic].title}
                description={EXAMPLES[selectedTopic].description}
                code={EXAMPLES[selectedTopic].code}
            />
        );
    }

    function handleSelect(label: keyof ExampleModel) {
        setSelectedTopic(label);
        console.log(`Selected topic: ${label}`);
    }

    return (
        <Section id="examples" title="Exsamples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            label="Components"
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleSelect("components")}
                        />
                        <TabButton
                            label="Props"
                            isSelected={selectedTopic === "props"}
                            onClick={() => handleSelect("props")}
                        />
                        <TabButton
                            label="JSX"
                            isSelected={selectedTopic === "jsx"}
                            onClick={() => handleSelect("jsx")}
                        />
                        <TabButton
                            label="State"
                            isSelected={selectedTopic === "state"}
                            onClick={() => handleSelect("state")}
                        />
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    );
};
