import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <img
                                alt="App Logo"
                                className="h-8"
                                src="https://files.sendistudio.id/api/public/dl/Az09mgyO/sendistudio.id/banner_logo.png"
                            />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <p className="hidden md:block">Result of Learn React with Turborepo</p>
                        {/* <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        className="text-gray-500 transition hover:text-gray-500/75"
                                        href="#"
                                    >
                                        {" "}
                                        Home{" "}
                                    </a>
                                </li>
                            </ul>
                        </nav> */}

                        <div className="block md:hidden">
                            <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
