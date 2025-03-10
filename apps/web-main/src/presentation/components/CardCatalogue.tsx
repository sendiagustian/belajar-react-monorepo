import React from "react";

interface CardCatalogueProps {
    route: string;
    image: string;
    title: string;
    subtitle: string;
    linkProject?: string;
}

const CardCatalogue: React.FC<CardCatalogueProps> = ({ route, image, title, subtitle, linkProject }) => {
    return (
        <a
            href={route}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 mb-4"
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600">{subtitle}</p>
                {linkProject && (
                    <a
                        href={linkProject}
                        className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        View Project
                    </a>
                )}
            </div>
        </a>
    );
};

export default CardCatalogue;
