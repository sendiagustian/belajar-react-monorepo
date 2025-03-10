import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-cyan-600 text-white shadow-md">
            <div className="container max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Result Cources</h1>

                {/* Menu untuk Desktop */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="hover:text-cyan-100">
                        Home
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
