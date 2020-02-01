import React from 'react';
import { ReactTypeformEmbed } from '../../node_modules/@typeform/embed'
import Header from './Header';
import Nav from './Nav';

function Legacy() {
    return (
        <div>
            <Header />
            <Nav />
            <p>Estás en legacy</p>
            <ReactTypeformEmbed url="https://demo.typeform.com/to/njdbt5" />;
        </div>
    );
}
export default Legacy;