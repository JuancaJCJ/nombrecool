import React from 'react';
import logo from '../logo.png';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-color">
            <a className="navbar-brand" href="/"><img className="img-logo d-inline-block align-top" src={logo} alt="logo" /></a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Favoritos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Mi cuenta</a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;