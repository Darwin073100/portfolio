import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavBarDesktop } from './components/NavBarDesktop';
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarDesktop />
        <Routes>
          <Route path='/' element={ <Home /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App };
