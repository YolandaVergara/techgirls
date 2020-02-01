import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTypeformEmbed } from '../../node_modules/@typeform/embed'

function Legacy() {
    return (
        <div>
            <button>
                <Link to="/">Home</Link>
            </button>
            <p>Estás en legacy</p>
            <ReactTypeformEmbed url="https://demo.typeform.com/to/njdbt5" />;
        </div>
    );
}
export default Legacy;