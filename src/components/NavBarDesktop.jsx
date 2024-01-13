import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../utils/routes';
import '../styles/NavBar.css';
import menuPicture from '../assets/Menu.svg';
import logoPicture from '../assets/logo.png';


function NavBarDesktop() {
    return (
        <>
            <nav className="nav-bar">
                <button className="menu-toggle" id="btnShowNav">
                    <figure>
                        <img src={ menuPicture } alt="menu" />
                    </figure>
                </button>
                <figure className="logo">
                    <img src={ logoPicture } alt="boy-dev" />
                </figure>
                <ul className="navigation">
                    {routes.map(item => (
                        <li><NavLink to={item.to} className="btn-link-blue-white" key={item.value}>{item.value}</NavLink></li>
                    ))}
                </ul>
                <h1 className="title">Mi Portafolio</h1>
            </nav>
        </>
    )
}

export { NavBarDesktop };