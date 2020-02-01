import React from 'react';
import logo from "../images/logo.png"
import "../stylesheets/header.scss"


function Header() {
    return (
        <div className="Header">
            <img classNAme="Header__logo" src={logo} alt="Fundacion Luzón" />
            <input

                id="search "
                type="text"
                className="Header__input"
                placeholder="Buscar..."

            />

        </div>
    );
}

export default Header;