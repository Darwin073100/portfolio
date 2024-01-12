import React from 'react';
import '../styles/NavBar.css';

function NavBarDesktop() {
    return (
        <>
            <nav class="nav-bar">
                <button class="menu-toggle" id="btnShowNav">
                    <figure>
                        <img src="./assets/img/Menu.svg" alt="menu" />
                    </figure>
                </button>
                <figure class="logo">
                    <img src="./assets/img/logo.png" alt="boy-dev" />
                </figure>
                <ul class="navigation">
                    <li><a href="#" class="btn-link-blue-white">Inicio</a></li>
                    <li><a href="#" class="btn-link-blue-white">Projects</a></li>
                    <li><a href="#" class="btn-link-blue-white">Informatión</a></li>
                    <li><a href="#" class="btn-link-blue-white">Contact</a></li>
                </ul>
                <h1 class="title">My Profile</h1>
            </nav>
        </>
    )
}

export { NavBarDesktop };