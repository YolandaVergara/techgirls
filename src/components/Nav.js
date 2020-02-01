import React from 'react';
import "../stylesheets/nav.scss"
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="Nav">
            <ul className="Nav__list">
                <Link to="/">
                    <li className="Nav__list__item">Actividad</li>
                </Link>
                <Link to="/">
                    <li className="Nav__list__item">Miembros</li>
                </Link>
                <Link to="/">
                    <li className="Nav__list__item">Grupos</li>
                </Link>
                <Link to="/">
                    <li className="Nav__list__item">Foros</li>
                </Link>
                <Link to="/">
                    <li className="Nav__list__item">Documentos</li>
                </Link>
                <Link to="/legacy/">
                    <li className="Nav__list__item">Legado</li>
                </Link>

            </ul>
        </div>
    );
}

export default Nav;