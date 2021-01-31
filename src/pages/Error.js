import React from 'react';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <h3>Oopps, this page not found</h3>
            <Link to="/">Return home</Link>
        </div>
    )
}
