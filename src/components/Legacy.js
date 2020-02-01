import React, { Fragment } from 'react';
import Header from './Header';
import Nav from './Nav';
import "../stylesheets/user-form.scss";

function Legacy() {
    return (
        <Fragment>
            <Header />
            <Nav />
            <h1 className="legacy__title">Mi legado</h1>
            <form className="legacy__form">
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">Mi mayor secreto</label>
                    <textarea type="text" placeholder="Este será el truco que les hará ganar" rows="4" cols="50" className="legacy__form__div-input" />

                </div>
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">Cuenta una receta secreta</label>
                    <input type="text" placeholder="Ñam ñam!" rows="4" cols="50" className="legacy__form__div-input" />

                </div>
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">¿Qué batallita tienes en el recuerdo?</label>
                    <textarea type="text" placeholder="Batallita" className="legacy__form__div-input" rows="4" cols="50" />

                </div>
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">¿Cuál es tu canción favorita?</label>
                    <input type="text" placeholder="Canción" className="legacy__form__div-input" />

                </div>
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">Explica el recuerdo más bonito de tu infancia</label>
                    <textarea type="text" placeholder="Mi mejor recuerdo es...." className="legacy__form__div-input" rows="4" cols="50" />

                </div>
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">¿Qué libro es imprescidible para ti?</label>
                    <input type="text" placeholder="Podría leer mil veces...." className="legacy__form__div-input" />
                </div>
                <div className="legacy__form__div">
                    <label className="legacy__form__div-label">Mi lista de deseos</label>
                    <textarea type="text" placeholder="Quiero esto" className="legacy__form__div-input" rows="4" cols="50" />
                </div>

            </form>
        </Fragment>
    );
}
export default Legacy;