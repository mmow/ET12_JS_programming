import React from 'react';
import { Link } from 'react-router-dom';

const Navbars = function() {
    return (<>
        <header className>
            <nav className="navbar">
            <div>
                <a href="https://www.qcc.cuny.edu/" target="_blank" className="link">QCC</a>
                </div>

                <div className = "brtngroup">
                <button><Link to="/contact">About</Link></button>
                <button><Link to="/home">Contact</Link></button>
                <button><Link to="/about">About</Link></button>
                </div>
            </nav>
        </header>
    </>)
}

export default Navbars;