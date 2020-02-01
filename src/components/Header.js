import React from 'react';
import logo from "../images/logo.png"
import "../stylesheets/header.scss"


function Header() {
    return (
        <>
            <div className="Header">
                <img className="Header__logo" src={logo} alt="Fundacion Luzón" />
                <input

                    id="search "
                    type="text"
                    className="Header__input"
                    placeholder="Buscar..."


                />
                <div className="Header__icons">

                    <i class="far fa-envelope"></i>
                    <i class="far fa-bell"></i>
                    <p>mylegacy</p>
                    <i class="far fa-user"></i>
                </div>

            </div>
        </>
    );
}

export default Header;