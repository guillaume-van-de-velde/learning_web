import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul className='navigation'>
                <NavLink to="/" className={nav => nav.isActive ? "current-nav" : ""}>
                    <li key={1}>Acceuil</li>
                </NavLink>
                <NavLink to="/heart" className={nav => nav.isActive ? "current-nav" : ""}>
                    <li key={2}>Coups de coeur</li>
                </NavLink>
            </ul>
            <div className="title">
                <h1 onClick={() => window.location.reload()}>Cine React</h1>
            </div>
        </header>
    );
};

export default Header;