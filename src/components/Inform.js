import React from 'react';
import Header from './Header';
import Nav from './Nav';
import '../stylesheets/inform.scss';

function Inform() {
    return (
        <div>
            <Header />
            <Nav />
            <h3 className="text--title">Resultados obtenidos</h3>
            <p className="text--paragraph">Para obtener los resultados en forma de gráfico:</p>
            <button className="text--button">
                <a className="style" href="https://sandrusmb.typeform.com/report/nNqVSi/5A0OEP8aad0YOAav" target="_blank">Pulsa para obtener</a>
            </button>
            <p className="text--paragraph">Para obtener los resultados en forma de excel:</p>
            <button className="text--button">
                <a className="style" href="https://docs.google.com/spreadsheets/d/17CWpN4nOvZDsQUNpYrQB2ok9uQ4XyM6iiwPeOYP7j0Q/edit#gid=1068807472" target="_blank">Pulsa para obtener</a>
            </button>
        </div>
    );
}
export default Inform;