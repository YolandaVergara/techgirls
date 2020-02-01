import React from 'react';
import "../stylesheets/bucketList.scss"
function BucketList() {
    return (
        <>
            <div className="BucketList">
                <h3 className="BucketList__title">Mi mayor secreto</h3>
                <p className="BucketList__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3 className="BucketList__title">Cuenta una receta secreta</h3>
                <p className="BucketList__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3 className="BucketList__title">Mis batallitas</h3>
                <p className="BucketList__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h3 className="BucketList__title">Mis canciones</h3>
                <ul className="BucketList__list">
                    <li className="BucketList__list__item">Cancion</li>
                    <li className="BucketList__list__item">Favorita</li>
                    <li className="BucketList__list__item">Eres</li>
                    <li className="BucketList__list__item">TU</li>
                </ul>

                <h3 className="BucketList__title">Mi recuerdo infancia</h3>
                <p className="BucketList__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h3 className="BucketList__title">Libros</h3>
                <ul className="BucketList__list">
                    <li className="BucketList__list__item">Libro</li>
                    <li className="BucketList__list__item">Favorito</li>
                    <li className="BucketList__list__item">Eres</li>
                    <li className="BucketList__list__item">TU</li>
                </ul>
                <h3 className="BucketList__title">Lista deseos</h3>
                <ul className="BucketList__list">
                    <li className="BucketList__list__item">Amor</li>
                    <li className="BucketList__list__item">Salud</li>
                    <li className="BucketList__list__item">Felicidad</li>
                    <li className="BucketList__list__item">Acuerdate de mi</li>
                </ul>


            </div>
        </>
    );
}

export default BucketList;