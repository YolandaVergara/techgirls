import React from 'react';
import logo from "../images/logo.png"


function Header() {
    return (
        <div>
            <img src={logo} alt="Fundacion Luzón" />
            <input

                id="search "
                type="text"
                className="searchInput"
                placeholder="Buscar..."

            />

        </div>
    );
}

export default Header;