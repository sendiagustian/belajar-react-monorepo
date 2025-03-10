import React from "react";

const Footer = () => {
    return (
        <footer className="bg-cyan-600 text-white py-6 mt-10">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center px-4">
                {/* Brand */}
                <img
                    alt="Sendi Studio Logo"
                    src="https://files.sendistudio.id/api/public/dl/x1GAS-Sf/sendistudio.id/banner_image_white.png"
                    className="h-12"
                />

                {/* Links */}
                <nav className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://sendistudio.id/privacy-policy" className="hover:text-cyan-100">
                        Privacy Policy
                    </a>
                    <a href="https://sendistudio.id/terms-of-service" className="hover:text-cyan-100">
                        Terms of Service
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sendistudio.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-100"
                    >
                        Contact
                    </a>
                </nav>

                {/* Copyright */}
                <div className="text-sm mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} Sendi Studio. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
