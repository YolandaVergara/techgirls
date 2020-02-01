import React from 'react';
import { Link } from 'react-router-dom';

function Legacy() {
    return (
        <div>
            <button>
                <Link to="/">Home</Link>
            </button>
            <p>Estás en legacy</p>
        </div>
    );
}
export default Legacy;