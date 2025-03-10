import React from "react";
import { CatalogueModel } from "../../data/CatalogueModel";
import CardCatalogue from "./CardCatalogue";

interface CatalogueProps {
    catalogues: CatalogueModel[];
}

const Catalogues: React.FC<CatalogueProps> = ({ catalogues }) => {
    return (
        <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-3 sm:grid-cols-2 sm:gap-2">
            {catalogues.map((catalogue, index) => (
                <CardCatalogue key={index} {...catalogue} />
            ))}
        </div>
    );
};

export default Catalogues;
