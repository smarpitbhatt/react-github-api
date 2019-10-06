import React from 'react';
import {Link} from 'react-router-dom';

export default function links() {
    return (
        <div>
            <h1>Links</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/page1'><button>Page1</button></Link>
        </div>
    );
}