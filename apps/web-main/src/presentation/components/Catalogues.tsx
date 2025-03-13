import React from "react";
import { catalogues } from "../../data/DataCatalogues";
import { MediaCard } from "./MediaCard";

export const Catalogues: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8 lg:px-8">
            {catalogues.map((catalogue) => (
                <MediaCard
                    key={catalogue.route}
                    route={catalogue.route}
                    image={catalogue.image}
                    title={catalogue.title}
                    subtitle={catalogue.subtitle}
                    linkProject={catalogue.linkProject}
                />
            ))}
        </div>
    );
};
