import React from 'react';
import "../stylesheets/nav.scss"

function Nav() {
    return (
        <div className="Nav">
            <ul className="Nav__list">
                <li className="Nav__list__item">Actividad</li>
                <li className="Nav__list__item">Miembros</li>
                <li className="Nav__list__item">Grupos</li>
                <li className="Nav__list__item">Foros</li>
                <li className="Nav__list__item">Documentos</li>
                <li className="Nav__list__item">Legados</li>

            </ul>
        </div>
    );
}

export default Nav;