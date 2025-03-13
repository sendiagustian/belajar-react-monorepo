import * as React from "react";

interface MediaCardProps {
    route: string;
    image: string;
    title: string;
    subtitle: string;
    linkProject: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
    route,
    image,
    title,
    subtitle,
    linkProject,
}) => {
    return (
        <a href={route} className="group relative block">
            <div className="relative h-[250px] sm:h-[300px]">
                <div className="bg-gray-200 absolute inset-0 h-full w-full object-cover opacity-20 group-hover:opacity-0" />

                <img
                    alt=""
                    src={image}
                    className="absolute rounded-xl inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-85"
                />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">{title}</h3>

                <p className="mt-1.5 text-pretty text-xs text-white">{subtitle}</p>

                <button
                    className="cursor-pointer hover:scale-105"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(linkProject, "_blank");
                    }}
                >
                    <span className="mt-3 rounded inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                        View Code
                    </span>
                </button>
            </div>
        </a>
    );
};
