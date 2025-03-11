import HeaderLogo from "../../assets/investment-calculator-logo.png";

import React from "react";

const Header: React.FC = () => {
    return (
        <header id="header">
            <img src={HeaderLogo} alt="Investment Calculator Logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
