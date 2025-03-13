import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <img
                            alt="App Logo"
                            className="h-8"
                            src="https://files.sendistudio.id/api/public/dl/Az09mgyO/sendistudio.id/banner_logo.png"
                        />
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
