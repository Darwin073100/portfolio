import React from 'react';
import '../styles/NavBar.css';

function NavBarMovile() {
  return (
    <>
        <ul className="navigation-movile" id="movileMenu">
            <li><a href="#" className="btn-link-blue-white">Inicio</a></li>
            <li><a href="#" className="btn-link-blue-white">Projects</a></li>
            <li><a href="#" className="btn-link-blue-white">Informatión</a></li>
            <li><a href="#" className="btn-link-blue-white">Contact</a></li>
        </ul>
    </>
  )
}

export { NavBarMovile };